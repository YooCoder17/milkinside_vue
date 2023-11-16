<!-- eslint-disable -->
<template>
  <div @mousewheel="handleScroll"
       @touchstart="handleTouchStart"
       @touchmove="handleTouchMove">
      <div v-for="(n,index) in 8" :id="'AboutSection' + index" class="c-services c-services--active">
          <component
                :is="'AboutSection' + index"
                :activeSectionIndex="activeSectionIndex">
          </component>
      </div>
      <component
        v-for="(n,index) in 7" :id="'AboutSectionMobile' + index"
        :is="'AboutSectionMobile'+index"
        class="c-services__section--mobile-section"
        :activeSectionIndex="activeSectionIndex"
        style="z-index:101;"
      />   
      <img src="@/assets/images/about0_blank.jpg" alt="Preloaded Image" style="display: none;" id="preloadedImage">       
      <!-- </transition> -->
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
import AboutSection0 from '@/components/AboutView/AboutSection0.vue';
import AboutSection1 from '@/components/AboutView/AboutSection1.vue';
import AboutSection2 from '@/components/AboutView/AboutSection2.vue';
import AboutSection3 from '@/components/AboutView/AboutSection3.vue';
import AboutSection4 from '@/components/AboutView/AboutSection4.vue';
import AboutSection5 from '@/components/AboutView/AboutSection5.vue';
// import AboutSection6 from '@/components/AboutView/AboutSection6.vue';
import AboutSection6 from '@/components/AboutView/AboutSection6.vue';
import AboutSection7 from '@/components/AboutView/AboutSection7.vue';
import AboutSectionMobile0 from '@/components/AboutView/AboutSectionMobile0.vue';
import AboutSectionMobile1 from '@/components/AboutView/AboutSectionMobile1.vue';
import AboutSectionMobile2 from '@/components/AboutView/AboutSectionMobile2.vue';
import AboutSectionMobile3 from '@/components/AboutView/AboutSectionMobile3.vue';
import AboutSectionMobile4 from '@/components/AboutView/AboutSectionMobile4.vue';
import AboutSectionMobile5 from '@/components/AboutView/AboutSectionMobile5.vue';
import AboutSectionMobile6 from '@/components/AboutView/AboutSectionMobile6.vue';
import AboutSectionMobile7 from '@/components/AboutView/AboutSectionMobile7.vue';
import { mapState } from 'vuex';
// import AboutSectionMobile8 from '@/components/AboutView/AboutSectionMobile8.vue';
import {
  enterSectionTitle,
  leaveSectionTitle,
} from '@/helpers/animations';

const touchExcludedClasses = [];

export default {
  name: 'AboutView',
  mounted(){
    this.init();
  },
  components: {
    AboutSection0,
    AboutSection1,
    AboutSection2,
    AboutSection3,
    AboutSection4,
    AboutSection5,
    // AboutSection6,
    AboutSection6,
    AboutSection7,

    AboutSectionMobile0,
    AboutSectionMobile1,
    AboutSectionMobile2,
    AboutSectionMobile3,
    AboutSectionMobile4,
    AboutSectionMobile5,
    AboutSectionMobile6,
    // AboutSectionMobile7,
    // AboutSectionMobile8,
  },
  created() {
    eventBus.$on(BUS_EVENT_RESET_SECTION_TO_INITIAL, this.resetSectionToInitial);
    eventBus.$on(BUS_EVENT_GOTO_NEXT_SECTION, this.gotoNextSection);
    eventBus.$on(BUS_EVENT_GOTO_PREV_SECTION, this.gotoPrevSection);
    // this.$store.commit('SET_ABOUT_ACTIVESECTIONINDEX', 0);
    this.activeSectionIndex = this.$store.state.menu_about_selected_SectionIndex;
    const image = new Image();
    image.src = document.getElementById('preloadedImage').src;
  },
  data() {
    return {
      activeSectionIndex: 0,
      totalSections: 7,
      direction: 0,
      isSectionSwitching: false,
      startY: 0,
    };
  },
  watch: {
    menu_about_selected_SectionIndex(newVal) {
        this.activeSectionIndex = newVal;
    },
    activeSectionIndex(newValue, oldValue) {
      this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', newValue);
      this.init();
      const divElement = document.getElementById("AboutSection" + this.activeSectionIndex);
      if (divElement) {
        if(newValue == 7)
          divElement.style.zIndex = 300;
        else
          divElement.style.zIndex = 100;
        if(oldValue == 7){
          const prevDivElement = document.getElementById("AboutSection7");
          setTimeout(() => {
            prevDivElement.style.zIndex = 0;
          }, 700);
        }
      }

      const divMobileElement = document.getElementById("AboutSectionMobile" + this.activeSectionIndex);
      if (divMobileElement) {
          divMobileElement.style.zIndex = 110;
      }
    },
  },
  computed: {
    ...mapState(['menu_about_selected_SectionIndex']),
    currentSectionComponet() {
      return `ServicesSection${this.activeSectionIndex}`;
    },
    currentMobileSectionComponent() {
      const sectionsMap = [0,1,2,3,4,5,6,7];
      const sectionIndex = this.activeSectionIndex < sectionsMap.length
        ? this.activeSectionIndex
        : sectionsMap.length - 1;

      return `AboutSectionMobile${sectionsMap[sectionIndex]}`;
    },
  },
  methods: {
    init(){
      for (let i = 0; i < 7; i++) {
        const divElement = document.getElementById("AboutSection" + i);
        if (divElement) {
          divElement.style.zIndex = 7 - i;
        }
      }

      for (let i = 0; i < 7; i++) {
        const divMobileElement = document.getElementById("AboutSectionMobile" + i);
        if (divMobileElement) {
          divMobileElement.style.zIndex = 109 - i;
        }
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

      if (newActiveIndex >= 0 && newActiveIndex <= totalSections) {
        const mobile_section = document.getElementById('AboutSectionMobile'+this.activeSectionIndex);
        if (window.innerWidth <= 768) {
            if(direction === 1){
              if (mobile_section.scrollTop + mobile_section.offsetHeight>= mobile_section.scrollHeight ){
                    if(this.activeSectionIndex >= 6)
                      return;
                    this.activeSectionIndex = newActiveIndex;
              }
            }else if(direction === -1){
              if(mobile_section.scrollTop === 0){
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
