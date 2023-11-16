<!-- eslint-disable -->
<template>
  <div class="c-services__wrapper">
    <div class="c-services__sections">
      <!-- <svg class="c-services__down-icon" width="24" height="24" fill="none">
        <use xlink:href="@/assets/sprites/icons.svg#down"></use>
      </svg> -->
      <div
        class="c-services__section c-strategy"
        data-services-section="0"
        style="width:100%; padding: 0 var(--padding) 8vh;"
      >
          <transition
            name="intro_fade"
            mode="out-in"
          >
            <AboutSectionIntro
              v-if="activeStatus"
              :number="'03'"
              :category="'DIGITAL INNOVATION TEAM'"
              :title="'OUR PROCESS'"
              style="width:64%"
            />
          </transition>
          <transition
            name="heading_fade"
            mode="out-in"
          >
            <AboutSection2Heading
                v-if="activeStatus"
                :currentValueIndex="isDropdownOpened"
                @valueIndex="valueIndex"
                @removeValueIndex="removeValueIndex"
                style="width:64%"/>
          </transition>
          <transition
            name="first_line_face"
            mode="out-in"
          >
             <SectionLine v-if="activeStatus" style="width:64%"/>
          </transition>
          <transition
            name="body_fade"
            mode="out-in"
          >
            <AboutSection2Values
              v-if="activeStatus"
              :activeSectionIndex="activeSectionIndex"
              @valueIndex="valueIndex"
              @removeValueIndex="removeValueIndex"
            />
          </transition>
          <transition
            name="second_line_fade"
            mode="out-in"
          >
            <SectionLine v-if="activeStatus" style="margin-bottom:15px;width:64%"/>
          </transition>
          <transition
            name="footer_fade"
            mode="out-in"
          >
            <AboutSection2Footer v-if="activeStatus" style="width:64%"/>
          </transition>
          <video v-if="activeStatus" width="100%" loop muted autoplay preload="auto" class="service-product-video" :class="{'active':isDropdownOpened === 0}" :style="{left: dynamicLeft1 ,width: isDropdownOpened === 0?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video v-if="activeStatus && page_mounted_status === true" width="100%" loop muted autoplay preload="auto" class="service-product-video video-2" :class="{'active':isDropdownOpened === 1}" :style="{ left: dynamicLeft2 , width: isDropdownOpened === 1?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video v-if="activeStatus && page_mounted_status === true" width="100%" loop muted autoplay preload="auto" class="service-product-video video-3" :class="{'active':isDropdownOpened === 2}" :style="{ left: dynamicLeft3 ,  width: isDropdownOpened === 2?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video v-if="activeStatus && page_mounted_status === true" width="100%" loop muted autoplay preload="auto" class="service-product-video video-4" :class="{'active':isDropdownOpened === 3}" :style="{ left: dynamicLeft4 , width: isDropdownOpened === 3?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video v-if="activeStatus && page_mounted_status === true" width="100%" loop muted autoplay preload="auto" class="service-product-video video-5" :class="{'active':isDropdownOpened === 4}" :style="{ left: dynamicLeft5 , width: isDropdownOpened === 4?getVideoWidth:0}">
            <source src="../../assets/videos/service-sec-2-video-5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import AboutSectionIntro from '@/components/AboutView/AboutSectionCommon/AboutSectionIntro.vue';
import AboutSection2Footer from '@/components/AboutView/AboutSection2/AboutSection2Footer.vue';
import AboutSection2Heading from '@/components/AboutView/AboutSection2/AboutSection2Heading.vue';
import AboutSection2Values from '@/components/AboutView/AboutSection2/AboutSection2Values.vue';
import SectionHeadingControlLeftRight from '@/components/ServicesView/ServicesSectionCommon/SectionHeadingControlLeftRight.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import { enterIntroContent, leaveIntroContent} from '@/helpers/animations';

export default {
name: 'AboutSection2',
components: {
  AboutSection2Values,
  AboutSection2Heading,
  AboutSection2Footer,
  AboutSectionIntro,
  SectionLine,
  SectionHeadingControlLeftRight
},
props: {
  activeSectionIndex: {
    type: Number,
    required: true,
  },
},
mounted(){
    window.addEventListener('resize', this.updateLeft);
    this.updateLeft();    
},
data() {
  return {
    isOpenedStrategyList: false,
    isDropdownOpened: -1,
    columnWidth: 0,
    videoWidth: 0,
    leftMargin: 0,
    page_mounted_status: false,
  };
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
  activeStatus(){
      if(this.activeSectionIndex === 2)
        this.$store.commit('SET_NAV_LIGHT', true);
      return this.activeSectionIndex === 2;
  },
},
watch: {
  activeSectionIndex(newValue, oldValue) {
      if (newValue == 2) {
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
methods: {
  updateLeft(){
    // this.columnWidth = (window.innerWidth - 130 * (0.8 / window.devicePixelRatio)) * 0.2;
    // this.videoWidth =  (window.innerWidth - 130)* 0.2 * 0.95;
    // this.videoWidth = 380 * ( 0.8 / window.devicePixelRatio );
    this.columnWidth = (window.innerWidth - 130) / 5;
    if(this.columnWidth < 350)
      this.columnWidth = 350;
    this.videoWidth = this.columnWidth * 0.8;
    this.leftMargin = window.innerWidth * 0.03;
    if(this.leftMargin < 35)
      this.leftMargin = 35;
  },
  enterIntroContent,
  leaveIntroContent,
  beforeEnter(el) {
    el.style.opacity = 0;
  },
  valueIndex(index) {
    if(this.page_mounted_status == true)
      this.isDropdownOpened = index;
  },
  removeValueIndex() {
    if(this.page_mounted_status == true)
      this.isDropdownOpened = '';
  },
},
};
</script>

<style scoped>
.service-product-video{
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  transform-origin: center;
  transition: all 0.8s cubic-bezier(.71,.17,.14,.93);
  left: 135px;
  transform: translateX(-50%);
  width: 0;
  &.active{
    width: 380px;
  }
  /* &.video-2{
    left: 20%;
  }
  &.video-3{
    left: 40%;
  }
  &.video-4{
    left: 60%;
  }
  &.video-5{
    left: 80%;
  } */
}
.footer_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.footer_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.footer_fade-enter { transform: translateY(100px); opacity: 0;}
.footer_fade-leave-to {opacity: 0; transform: translateY(-50px);}

.second_line_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.second_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.second_line_fade-enter {  opacity: 0;}
.second_line_fade-leave-to {opacity: 0; }

.body_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.body_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_fade-enter { transform: translateY(150px); opacity: 0;}
.body_fade-leave-to {opacity: 0; transform: translateY(-50px);}

.first_line_face-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.first_line_face-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.first_line_face-enter { transform: translateY(150px); opacity: 0;}
.first_line_face-leave-to {opacity: 0; transform: translateY(-50px);}

.heading_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.heading_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.heading_fade-enter { transform: translateY(-50px); opacity: 0;}
.heading_fade-leave-to {opacity: 0; transform: translateY(-80px);}

.intro_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { opacity: 0;}
.intro_fade-leave-to {opacity: 0;}

.image_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.image_fade-leave-active { transition: all 0.8s}
.image_fade-enter { transform: translateY(-400px); opacity: 0;}
.image_fade-leave-to {opacity: 0; transform: translateY(-400px);}
</style>
