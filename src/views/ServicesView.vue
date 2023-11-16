<!-- eslint-disable -->
<template>
  <div
      @mousewheel="handleScroll"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove">

    <div v-for="(n,index) in 6" :id="'ServicesSection' + index" class="c-services c-services--active">
          <component
                v-if="ascSortedPageData[index] != null"
                :is="'ServicesSection' + index"
                :activeSectionIndex="activeSectionIndex"
                :sectionAttributes="ascSortedPageData[index].attributes"
                :videoData="activeSectionIndex == 5? loadedVideoData : []">
          </component>
    </div>
<!-- 
      <component v-for="(n,index) in 5" :id="'MobileServicesSection' + index"
            v-if="activeSection"
            :is="currentMobileSectionComponent"
            class="c-services__section--mobile-section"
            :key="currentMobileSectionComponent"
            :sectionAttributes="activeSection.attributes"
            style="position: absolute;z-index:101"
      />         -->
    <transition
          @enter="enterSectionTitle"
          @leave="leaveSectionTitle"
          v-bind:css="false"
          mode="out-in"
        >
          <component
            id="mobile_section"
            v-if="activeSection"
            :is="currentMobileSectionComponent"
            class="c-services__section--mobile-section"
            :activeSectionIndex="activeSectionIndex"
            :mobilesection1_videosection_index="mobilesection1_videosection_index"
            :key="currentMobileSectionComponent"
            :sectionAttributes="activeSection.attributes"
            style="position: absolute; z-index:101"
          />          
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import {
  BUS_EVENT_RESET_SECTION_TO_INITIAL,
  BUS_EVENT_GOTO_NEXT_SECTION,
  BUS_EVENT_GOTO_PREV_SECTION,
  eventBus,
} from '@/helpers/eventBus';
import { DEBOUNCE_DELAY, debounceOptions } from '@/helpers/constants';
import { debounce } from 'lodash';
import ServicesSection0 from '@/components/ServicesView/ServicesSection0.vue';
import ServicesSection1 from '@/components/ServicesView/ServicesSection1.vue';
import ServicesSection2 from '@/components/ServicesView/ServicesSection2.vue';
import ServicesSection3 from '@/components/ServicesView/ServicesSection3.vue';
import ServicesSection4 from '@/components/ServicesView/ServicesSection4.vue';
import ServicesSection5 from '@/components/ServicesView/ServicesSection5.vue';
import ServicesSectionMobile0 from '@/components/ServicesView/ServicesSectionMobile0.vue';
import ServicesSectionMobile1 from '@/components/ServicesView/ServicesSectionMobile1.vue';
import ServicesSectionMobile2 from '@/components/ServicesView/ServicesSectionMobile2.vue';
import ServicesSectionMobile3 from '@/components/ServicesView/ServicesSectionMobile3.vue';
import ServicesSectionMobile4 from '@/components/ServicesView/ServicesSectionMobile4.vue';
import {
  enterSectionTitle,
  leaveSectionTitle,
} from '@/helpers/animations';
import * as cmsClient from '@/client/cmsClient';
import { mapState } from 'vuex';

const touchExcludedClasses = [];

export default {
  name: 'ServicesView',
  components: {
    ServicesSection5,
    ServicesSection4,
    ServicesSection3,
    ServicesSection2,
    ServicesSection1,
    ServicesSection0,
    ServicesSectionMobile4,
    ServicesSectionMobile3,
    ServicesSectionMobile2,
    ServicesSectionMobile1,
    ServicesSectionMobile0,
  },
  created() {
    eventBus.$on(BUS_EVENT_RESET_SECTION_TO_INITIAL, this.resetSectionToInitial);
    eventBus.$on(BUS_EVENT_GOTO_NEXT_SECTION, this.gotoNextSection);
    eventBus.$on(BUS_EVENT_GOTO_PREV_SECTION, this.gotoPrevSection);
    this.getPageParams();
  },
  data() {
    return {
      loadedVideoData: null,
      servicePageData: null,
      activeSectionIndex: 0,
      mobilesection1_videosection_index:0,
      totalSections: 5,
      direction: 0,
      isSectionSwitching: false,
      startY: 0,
    };
  },
  mounted(){
    this.init();
    this.activeSectionIndex = this.$store.state.menu_services_selected_SectionIndex;
    const divElement = document.getElementById("ServicesSection0");
    divElement.style.zIndex = 100;
    // this.$store.commit('SET_SERVICES_ACTIVESECTIONINDEX', 0);
  },
  watch: {
    menu_services_selected_SectionIndex(newVal) {
        this.activeSectionIndex = newVal;
    },
    activeSectionIndex(newValue, oldValue) {
      this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', newValue);
      this.init();
      const divElement = document.getElementById("ServicesSection" + this.activeSectionIndex);
      if (divElement) {
        if(newValue == 5)
          divElement.style.zIndex = 300;
        else
          divElement.style.zIndex = 100;

        if(oldValue == 5){
          const prevDivElement = document.getElementById("ServicesSection5");
          setTimeout(() => {
            prevDivElement.style.zIndex = 0;
          }, 700);
        }
      }

      if(this.loadedVideoData == null && this.activeSectionIndex > 0){
        this.loadVideoData();
      }
    },
  },
  computed: {
    ...mapState(['menu_services_selected_SectionIndex']),
    ascSortedPageData() {
      const ascPageData = [...(this.servicePageData?.data || [])];

      return ascPageData.sort((a, b) => a.attributes.number - b.attributes.number);
    },
    activeSection() {
      return this.ascSortedPageData[this.activeSectionIndex];
    },
    currentSectionComponet() {
      return `ServicesSection${this.activeSectionIndex}`;
    },
    currentMobileSectionComponent() {
      const sectionsMap = [0, 1, 2, 3, 4, 5];
      const sectionIndex = this.activeSectionIndex < sectionsMap.length
        ? this.activeSectionIndex
        : sectionsMap.length - 1;
      return `ServicesSectionMobile${sectionsMap[sectionIndex]}`;
    },
  },
  methods: {
    init(){
      for (let i = 0; i < 5; i++) {
        const divElement = document.getElementById("ServicesSection" + i);
        if (divElement) {
          divElement.style.zIndex = 5 - i;
        }
      }
    },
    async getPageParams() {
      this.loading = true;
      try {
        this.servicePageData = await cmsClient.getServiceSections();
      } catch (error) {
        window.console.error(error);
      }
    },

    resetSectionToInitial() {
      this.activeSectionIndex = 0;
    },

    gotoNextSection() {
      if (this.activeSectionIndex < this.totalSections) {
        this.activeSectionIndex += 1;
      }
    },

    gotoPrevSection() {
      if (this.activeSectionIndex > 0) {
        this.activeSectionIndex -= 1;
      }
    },
    loadImages(urls) {
      const promises = urls.map((url) => new Promise((resolve, reject) => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
          this.currentLoadingFrame += 1;

          return resolve(image);
        };
        image.onerror = (e) => reject(e);
        image.src = url;
      }));

      return Promise.all(promises)
        .then((images) => images)
        .catch((error) => {
          console.error(error);
          return [];
        });
    },
    async loadVideoData() {
      try {
        this.loadedVideoData = await this.loadImages(this.ascSortedPageData[5].attributes.body[0].video_data.loop_video.urls);
      } catch (error) {
        window.console.error(error);
      }
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
      const { totalSections } = this;
      const newActiveIndex = this.activeSectionIndex + direction;

      this.direction = direction;
      
      // Check if the new index is within the bounds of the sections array
      if (newActiveIndex >= 0 && newActiveIndex <= totalSections) {
        const mobile_section = document.getElementById('mobile_section');
        if (window.innerWidth <= 768) {
            if(direction === 1){
              if (mobile_section.scrollTop + mobile_section.offsetHeight>= mobile_section.scrollHeight ){
                if(this.activeSectionIndex == 1){
                    this.mobilesection1_videosection_index ++;
                    if(this.mobilesection1_videosection_index >= 6){
                      this.mobilesection1_videosection_index = 0;
                      this.activeSectionIndex = newActiveIndex;
                    }
                }else if(this.activeSectionIndex >= 4)
                    return;
                else
                    this.activeSectionIndex = newActiveIndex;
              }
            }else if(direction === -1){
              if(mobile_section.scrollTop === 0){
                if(this.activeSectionIndex == 1){
                    this.mobilesection1_videosection_index --;
                    if(this.mobilesection1_videosection_index < 0){
                      this.mobilesection1_videosection_index = 0
                      this.activeSectionIndex = newActiveIndex;
                    }
                }else
                  this.activeSectionIndex = newActiveIndex;
              }
            }
        }else{
          this.activeSectionIndex = newActiveIndex;
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
    enterSectionTitle,
    leaveSectionTitle,
  },
};
</script>

<style>
.c-services__wrapper {
  padding-top: 115px;
}
/* .trans_component, .trans_component{ position:absolute; width:100%; height: 100%;} */
/* .trans_component-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);} */
.trans_component-leave-active { transition: all 0.4s cubic-bezier(.71,.17,.14,.93);}
/* .trans_component-enter{ transform: translateY(300px); opacity: 0.8;} */
.trans_component-leave-to{ transform: translateY(-50px); opacity: 0;}
</style>
