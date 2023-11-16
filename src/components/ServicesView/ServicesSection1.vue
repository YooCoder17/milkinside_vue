<!-- eslint-disable -->
<template>
   <div class="c-services__wrapper">
      <div class="c-services__sections">
        <svg class="c-services__down-icon" width="24" height="24" fill="none">
          <use xlink:href="@/assets/sprites/icons.svg#down"></use>
        </svg>
        <div
          class="c-services__section c-what-we-do"
          data-services-section="1"
        >
            <transition
                    name="intro_fade"
                    mode="out-in"
                  >
              <div v-if="activeStatus" class="c-what-we-do__intro-wrapper">
                <ServicesSectionIntro
                  :number="sectionAttributes.number"
                  :category="sectionAttributes.category"
                  :title="sectionAttributes.title"
                />
              </div>
          </transition>
          <transition
                name="heading_fade"
                mode="out-in"
              >
            <ServicesSection1Heading
              v-if="activeStatus"
              :currentServiceIndex="isDropdownOpened"
              @serviceIndex="serviceIndex"
              @removeServiceIndex="removeServiceIndex"
              class="c-what-we-do__heading-row"
            >
            </ServicesSection1Heading>
          </transition>
          <transition
                name="first_line_face"
                mode="out-in"
              >
            <SectionLine v-if="activeStatus" class="c-what-we-do__line-wrapper"/>
          </transition>
          <ServicesSection1WhatWeDo
                :activeSectionIndex="activeSectionIndex"
                @serviceIndex="serviceIndex"
                @removeServiceIndex="removeServiceIndex"
                :whatWeDo="sectionAttributes.body[0]['what-we-do']"/>          
          <video v-if="activeStatus" poster="@/assets/images/g_1.jpg" width="100%" loop muted autoplay preload="auto" class="service-product-video" :class="{'active':isDropdownOpened === 0}" :style="{left: dynamicLeft1 , width: isDropdownOpened === 0?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video v-if="activeStatus && page_mounted_status === true" poster="@/assets/images/g_2.jpg" width="100%" loop muted autoplay preload="auto" class="service-product-video video-2" :class="{'active':isDropdownOpened === 1}" :style="{ left: dynamicLeft2 , width: isDropdownOpened === 1?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video v-if="activeStatus && page_mounted_status === true" poster="@/assets/images/g_3.jpg" width="100%" loop muted autoplay preload="auto" class="service-product-video video-3" :class="{'active':isDropdownOpened === 2}" :style="{ left: dynamicLeft3 , width: isDropdownOpened === 2?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video v-if="activeStatus && page_mounted_status === true" poster="@/assets/images/g_4.jpg" width="100%" loop muted autoplay preload="auto" class="service-product-video video-4" :class="{'active':isDropdownOpened === 3}" :style="{ left: dynamicLeft4 , width: isDropdownOpened === 3?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video v-if="activeStatus && page_mounted_status === true" poster="@/assets/images/g_5.jpg" width="100%" loop muted autoplay preload="auto" class="service-product-video video-5" :class="{'active':isDropdownOpened === 4}" :style="{ left: dynamicLeft5 , width: isDropdownOpened === 4?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video v-if="activeStatus && page_mounted_status === true" poster="@/assets/images/g_3.jpg" width="100%" loop muted autoplay preload="auto" class="service-product-video video-6" :class="{'active':isDropdownOpened === 5}" :style="{ left: dynamicLeft6 , width: isDropdownOpened === 5?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable */
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import ServicesSection1WhatWeDo from '@/components/ServicesView/ServicesSection1/ServicesSection1WhatWeDo.vue';
import ServicesSection1Heading from '@/components/ServicesView/ServicesSection1/ServicesSection1Heading.vue';

export default {
  name: 'ServicesSection1',
  components: {
    ServicesSection1Heading,
    ServicesSection1WhatWeDo,
    SectionLine,
    ServicesSectionIntro,
  },
  data() {
    return {
      isDropdownOpened: '',
      columnWidth: 0,
      videoWidth: 0,
      leftMargin: 0,
      page_mounted_status: false,
    };
  },
  mounted(){
    window.addEventListener('resize', this.updateLeft);
    this.updateLeft();
  },
  methods: {
    updateLeft(){
      this.columnWidth = (window.innerWidth - 130) / 6;
      if(this.columnWidth < 320)
        this.columnWidth = 320;
      this.videoWidth = this.columnWidth * 0.9;
      this.leftMargin = window.innerWidth * 0.015;
      if(this.leftMargin < 15)
        this.leftMargin = 15;
      // this.videoWidth = 380 * ( 0.8 / window.devicePixelRatio );
    },
    serviceIndex(index) {
      if(this.page_mounted_status == true)
        this.isDropdownOpened = index;
    },
    removeServiceIndex() {
      if(this.page_mounted_status == true)
        this.isDropdownOpened = '';
    },
  },
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
    sectionAttributes: {
      type: Object,
      required: true,
    },
  },
  watch: {
  activeSectionIndex(newValue, oldValue) {
      if (newValue == 1) {
        this.page_mounted_status = false;
        this.isDropdownOpened = -1;
        setTimeout(() => {
          this.isDropdownOpened = 0;
        }, 700);   
        setTimeout(() => {
          this.page_mounted_status = true;
        }, 1000);       
      }else
        this.page_mounted_status = false;
    },
},
  computed:{
    getVideoWidth(){
      return `${this.videoWidth}px`;
    },
    dynamicLeft1() {
      return `${65 + this.columnWidth * 0.5 - this.leftMargin}px`;
    },
    dynamicLeft2() {
      return `${65 + this.columnWidth * 1.5 - this.leftMargin}px`;
    },
    dynamicLeft3() {
      return `${65 + this.columnWidth * 2.5 - this.leftMargin}px`;
    },
    dynamicLeft4() {
      return `${65 + this.columnWidth * 3.5 - this.leftMargin}px`;
    },
    dynamicLeft5() {
      return `${65 + this.columnWidth * 4.5 - this.leftMargin}px`;
    },
    dynamicLeft6() {
      return `${65 + this.columnWidth * 5.5 - this.leftMargin}px`;
    },
    activeStatus(){
      return this.activeSectionIndex === 1;
    },
  },
};
</script>
<style>
.first_line_face-enter-active { transition-delay: 0.8s;opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.first_line_face-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.first_line_face-enter { transition-delay: 0.8s; transform: translateY(150px); opacity: 0;}
.first_line_face-leave-to {opacity: 0; transform: translateY(-50px);}

.heading_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.heading_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.heading_fade-enter { transition-delay: 0.8s; transform: translateY(10px); opacity: 0;}
.heading_fade-leave-to {opacity: 0; transform: translateY(-10px);}

.intro_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter {transition-delay: 0.8s;  opacity: 0;}
.intro_fade-leave-to {opacity: 0;}

.service-product-video{
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  transform-origin: center;
  transition: all 0.8s cubic-bezier(.71,.17,.14,.93);
  left: calc(50% - 43%);
  transform: translateX(-50%);
  width: 0;
  &.active{
    width: 16vw;
  } 
}
</style>
