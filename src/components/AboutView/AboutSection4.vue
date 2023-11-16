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
        style="width:100%"
      >
          <transition
            name="intro_fade"
            mode="out-in"
          >
            <AboutSectionIntro
              v-if="activeStatus"
              :number="'05'"
              :category="'DIGITAL INNOVATION TEAM'"
              :title="'OUR PROCESS'"
              style="width:64%"
            />
          </transition>
          <transition
            name="heading_fade"
            mode="out-in"
          >
            <AboutSection4Heading 
                v-if="activeStatus" 
                :slideIndex="slideIndex"
                @changeSlideIndex="changeSlideIndex"
                @stopInterval="stopInterval"
                style="width:64%">              
            </AboutSection4Heading>
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
            <AboutSection4Body
              v-if="activeStatus"
              :activeSectionIndex="activeSectionIndex"
              :slideIndex="slideIndex"
              :intervalStatus="intervalStatus"
              @changeSlideIndex="changeSlideIndex"
              @stopInterval="stopInterval"
              style="width:67%;flex-grow: 1;"
            />
          </transition>
          <transition
            name="heading_fade"
            mode="out-in"
          >
            <div class="company_logos" v-if="activeStatus" >
                <div>
                  <img
                    src="@/assets/images/aboutsection4_1.png"
                    alt="mobileImage.alternativeText"
                  >
                </div>
                <div>
                  <img
                    src="@/assets/images/aboutsection4_2.png"
                    alt="mobileImage.alternativeText"
                  >
                </div>
                <div>
                  <img
                    src="@/assets/images/aboutsection4_3.png"
                    alt="mobileImage.alternativeText"
                  >
                </div>
                <div>
                  <img
                    src="@/assets/images/aboutsection4_4.png"
                    alt="mobileImage.alternativeText"
                  >
                </div>
                <div>
                  <img
                    src="@/assets/images/aboutsection4_5.png"
                    alt="mobileImage.alternativeText"
                  >
                </div>
                <div>
                  <img
                    src="@/assets/images/aboutsection4_6.png"
                    alt="mobileImage.alternativeText"
                  >
                </div>
                <div>
                  <img
                    src="@/assets/images/aboutsection4_7.png"
                    alt="mobileImage.alternativeText"
                  >
                </div>
            </div>
          </transition>
          <transition
            name="second_line_fade"
            mode="out-in"
          >
            <SectionLine v-if="activeStatus" style="margin-bottom:17px; width:60%;position: absolute; top:83vh"/>
          </transition>
          <transition
            name="footer_fade"
            mode="out-in"
          >
            <AboutSection4Footer v-if="activeStatus" style="width:100%; position: absolute; top:85.5vh"/>
          </transition>
          <div class="video_container">
            <transition
              name="image_fade"
              mode="out-in"
            >
              <video v-if="activeStatus" width="100%" preload="auto" class="background_video" autoplay loop muted>
                  <source src="@/assets/videos/about_section4.mp4" type="video/mp4" />
                  <track kind="captions" label="English captions" lang="en" default />
                  Your browser does not support the video tag.
                </video>
            </transition>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import AboutSectionIntro from '@/components/AboutView/AboutSectionCommon/AboutSectionIntro.vue';
import AboutSection4Footer from '@/components/AboutView/AboutSection4/AboutSection4Footer.vue';
import AboutSection4Heading from '@/components/AboutView/AboutSection4/AboutSection4Heading.vue';
import AboutSection4Body from '@/components/AboutView/AboutSection4/AboutSection4Body.vue';
import SectionHeadingControlLeftRight from '@/components/ServicesView/ServicesSectionCommon/SectionHeadingControlLeftRight.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import { enterIntroContent, leaveIntroContent} from '@/helpers/animations';

export default {
name: 'AboutSection4',
components: {
  AboutSection4Body,
  AboutSection4Heading,
  AboutSection4Footer,
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
data() {
  return {
    isOpenedStrategyList: false,
    isDropdownOpened: false,    
    slideIndex: 0   ,
    intervalStatus: false,
  };
},
computed:{
  activeStatus(){
      if(this.activeSectionIndex === 4)
        this.$store.commit('SET_NAV_LIGHT', true);
      return this.activeSectionIndex === 4;
  },
},
methods: {
  enterIntroContent,
  leaveIntroContent,
  changeSlideIndex(index) {
    this.slideIndex = index;
  },
  stopInterval(value){
    this.intervalStatus = value;
  }
},
};
</script>

<style scoped>
.company_logos{
  position: absolute;
  margin-top: calc(83vh - 185px);
  width: 64%;
  display: grid;
  grid-template-columns: repeat(7, auto);
}
.video_container{
  width:100%;
  position:absolute;
  z-index: -1;
}
.background_video{
    height: calc(83vh - 115px);
    width: 55vh;
    object-fit: cover;
    position: relative;
    margin-right: auto;
    margin-left: 64%;
  /* transition: all 0.8s cubic-bezier(.71,.17,.14,.93); */
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

.image_fade-enter-active { opacity: 1; transition: all 1.1s cubic-bezier(0.66, 0.00, 0.00, 1.00)}
.image_fade-leave-active { transition: all 0.8s}
.image_fade-enter { transform: translateY(600px); opacity: 0;}
.image_fade-leave-to {opacity: 0; transform: translateY(600px);}
</style>
