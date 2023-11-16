<!-- eslint-disable -->
<template>
  <div
    class="c-home c-home--active"
    style="background: #030305;"
    :class="{loading: loading,}"
    @mousewheel="handleScroll"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
  >
    <preloaderBackdrop
      v-if="loading"
      :homePageData="ascSortedHomePageData"
      @finishLoading="onFinishLoading"
    />
    <transition
      name="globe_fade"
      mode="out-in"
    >
      <video v-if="showGlobe" width="100%" loop muted autoplay  preload="auto"  style="position: fixed;
                                                      top: 0;
                                                      left: 0;
                                                      min-width: 100%;
                                                      min-height: 100%;
                                                      width: auto;
                                                      height: auto;
                                                      z-index: 1;">
        <source src="@/assets/videos/dark_globe.mp4" type="video/mp4" />
      </video>
    </transition>
    <AnimatedBackground
      v-if="!loading"
      :images="isSectionSwitching ? switchSectionVideoUrls : activeSectionVideoUrls"
      :noLoop="isSectionSwitching"
      :fps="backgroundAnimationFps"
      :backgroundMobileOffsetX="backgroundMobileOffsetX"
      @finished="onSectionSwitchingFinished"
      id="anime_background" 
    />
    <div class="c-home__wrapper">
      <div class="c-home__sections">
        <HomeSection
          v-if="activeSection"
          :sectionAttributes="activeSection.attributes"
          :sectionId="activeSection.id"
          @footerSectionScrollLeft="onFooterSectionScrollLeft"
          :showFooter = "showFooter"
          style="z-index: 2;"
        />
      </div>
    </div>
    <img src="@/assets/images/about0_blank.jpg" alt="Preloaded Image" style="display: none;" id="preloadedImage">  
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import { throttle } from 'lodash';
import * as cmsClient from '@/client/cmsClient';
import { BUS_EVENT_RESET_SECTION_TO_INITIAL, eventBus } from '@/helpers/eventBus';
import HomeSection from '@/components/HomeView/HomeSection.vue';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import PreloaderBackdrop from '@/components/PreloaderBackdrop.vue';
import { debounce } from 'lodash';
import {
  BACKGROUND_ANIMATION_FPS_LOOP,
  BACKGROUND_ANIMATION_FPS_SWITCHING,
  DEBOUNCE_DELAY,
  debounceOptions,
} from '@/helpers/constants';

const touchExcludedClasses = ['section-footer'];
const backgroundMobileOffsets = [
  -120,
  -165,
  -155,
  -370,
  -550,
  -450,
];

export default {
  name: 'HomeView',
  components: {
    AnimatedBackground,
    HomeSection,
    PreloaderBackdrop,
  },
  data() {
    return {
      isBlurred: false,
      homePage: null,
      loadedVideoData: null,
      activeSectionIndex: 0,
      contentActiveSectionIndex: 0, 
      direction: 0,
      isSectionSwitching: false,
      loading: false,
      startY: 0,
      footerSectionOffsetX: 0,
      showFooter: false,
      showGlobe: false,
      moveBackground: false,
    };
  },
  created() {
    eventBus.$on(BUS_EVENT_RESET_SECTION_TO_INITIAL, this.resetSectionToInitial);
    this.$store.commit('SET_NAV_LIGHT', false);
    this.getPageParams();
    this.moveBackground = window.innerWidth > 1800 ? true: false;
    window.addEventListener('resize', throttle(() => {
      this.moveBackground = window.innerWidth > 1800 ? true: false;
    }, 100));
  },
  watch: {
    activeSectionIndex() {
      this.footerSectionOffsetX = 0;
    },
  },
  computed: {
    ascSortedHomePageData() {
      const ascHomePageData = [...(this.homePage?.data || [])];
      return ascHomePageData.sort((a, b) => a.attributes.number - b.attributes.number);
    },
    activeSection() {
      return this.ascSortedHomePageData[this.contentActiveSectionIndex];
    },
    prevSectionVideoData() {
      return this.direction
        ? this.loadedVideoData[this.activeSectionIndex - this.direction]
        : {};
    },
    activeSectionVideoUrls() {
      return this.loadedVideoData[this.activeSectionIndex]?.loop_video || [];
    },
    switchSectionVideoUrls() {
      const videoDirection = this.direction > 0 ? 'forward_video' : 'backward_video';

      return this.prevSectionVideoData[videoDirection] || [];
    },
    backgroundAnimationFps() {
      return this.isSectionSwitching
        ? BACKGROUND_ANIMATION_FPS_SWITCHING
        : BACKGROUND_ANIMATION_FPS_LOOP;
    },
    backgroundMobileOffsetX() {
      return (backgroundMobileOffsets[this.activeSectionIndex] || 0) - this.footerSectionOffsetX;
    },
  },
  methods: {
    async getPageParams() {
      this.loading = true;

      try {
        this.homePage = await cmsClient.getHomepageSections();
      } catch (error) {
        window.console.error(error);
      }
    },

    onFinishLoading(loadedVideoData) {
      document.getElementById("c-nav").style.display="block";
      this.loadedVideoData = loadedVideoData;
      console.log(this.loadedVideoData);
      this.$store.commit('ADD_VIDEODATA', this.loadedVideoData);
      this.$nextTick(() => {
        this.loading = false;
      });
    },

    onSectionSwitchingFinished() {
      this.isSectionSwitching = false;
      this.direction = 0;
    },

    onFooterSectionScrollLeft(offsetX) {
      this.footerSectionOffsetX = offsetX;
    },

    resetSectionToInitial() {
      this.activeSectionIndex = 0;
    },

    /**
     Handles the scroll event and switches between sections based on the scroll direction.
     @param {Event} event - The scroll event.
     */
    handleScroll: debounce(function (event) {
      // If section switching is already in progress, do nothing
      if (this.isSectionSwitching) {
        return;
      }

      // Determine the direction of the scroll based on deltaY
      const direction = event.deltaY > 0 ? 1 : -1;
      // Determine the total number of sections
      const totalSections = this.ascSortedHomePageData.length - 1;
      const newActiveIndex = this.contentActiveSectionIndex + direction;
      if(this.showFooter === true && newActiveIndex == (totalSections - 1)){
        this.showFooter = false;
        return;
      }

      this.direction = direction;
      if(newActiveIndex > totalSections)
        this.showFooter = true;
      else
        this.showFooter = false;
      
      // Check if the new index is within the bounds of the sections array
      if (newActiveIndex >= 0 && newActiveIndex <= totalSections) {
        // Set the section switching flag to prevent multiple switches in a short period of time
        if( ( newActiveIndex <= 4 && direction == 1) || ( newActiveIndex < 4 && direction == -1))
          this.isSectionSwitching = true;
        // Update the active section index
        this.contentActiveSectionIndex = newActiveIndex;
         let clone = document.querySelector('.blur-background');
         
        if(newActiveIndex <= 4){
          this.activeSectionIndex = newActiveIndex;
          this.showGlobe = false;
        }else{
          this.showGlobe = true;
        }
      }
    }, DEBOUNCE_DELAY, debounceOptions),

    /**
     * Handles touch start events by storing the initial touch point,
     * unless the target element is excluded.
     * @param {TouchEvent} event - The touch start event.
     */
    handleTouchStart: debounce(function (event) {
      if (this.shouldExcludeTarget(event.target) || this.isSectionSwitching) {
        return;
      }

      this.startY = event.touches[0].clientY; // store initial touch point
    }, DEBOUNCE_DELAY, debounceOptions),

    /**
     * Handles touch move events by determining the scroll direction
     * and calling the `handleScroll` method, unless the target element is excluded.
     * @param {TouchEvent} event - The touch move event.
     */
    handleTouchMove: debounce(function (event) {
      if (this.shouldExcludeTarget(event.target) || this.isSectionSwitching) {
        return;
      }

      const currentY = event.touches[0].clientY; // current finger position on the screen
      const deltaY = (currentY - this.startY) * -1; // determining the direction of the scroll

      // handling the scroll event using deltaY
      this.handleScroll({ deltaY });

      this.startY = currentY; // update initial touch point
    }, DEBOUNCE_DELAY, debounceOptions),

    /**
     * Checks if the target element should be excluded from touch event handling.
     * @param {HTMLElement} target - The target element to check.
     * @returns {boolean} - True if the target element should be excluded, false otherwise.
     */
    shouldExcludeTarget(target) {
      return touchExcludedClasses.some((className) => {
        const excludedParent = target.closest(`.${className}`);

        return excludedParent && excludedParent.contains(target);
      });
    },
  },
  mounted(){
    document.getElementById("c-nav").style.display="none";
  }
};
</script>
<style scoped>

.globe_fade-enter-active { transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.globe_fade-leave-active { transition: all 1s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.globe_fade-enter { transform: translateX(100vw);}
.globe_fade-leave-to {transform: translateX(100vw);}

.anime_fade-enter-active { transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.anime_fade-leave-active { transition: all 1s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.anime_fade-enter { transform: translateX(-100vw); }
.anime_fade-leave-to {transform: translateX(-100vw);}

#anime_background{
  transition: all 0.8s cubic-bezier(.71,.17,.14,.93);
}
#anime_background.active{
  transform: translateX(35vw);
}
</style>