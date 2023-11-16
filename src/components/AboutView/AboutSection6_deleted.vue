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
              :number="'07'"
              :category="'DIGITAL INNOVATION TEAM'"
              :title="'OUR PROCESS'"
              style="width:64%"
            />
          </transition>
          <transition
            name="heading_fade"
            mode="out-in"
          >
            <AboutSection6Heading v-if="activeStatus" style="width:64%">
              <!-- <SectionHeadingControlLeftRight style="position:absolute;right:0"/> -->
            </AboutSection6Heading>
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
            <AboutSection6Body
              v-if="activeStatus"
              :activeSectionIndex="activeSectionIndex"
              style="width:72%;height:487px;flex-grow: 1;"
            />
          </transition>
          <transition
            name="second_line_fade"
            mode="out-in"
          >
            <SectionLine v-if="activeStatus" style="margin-bottom:17px;width:60%;position: absolute; top:85vh"/>
          </transition>
          <transition
            name="footer_fade"
            mode="out-in"
          >
            <AboutSection6Footer v-if="activeStatus" style="width:100%; position: absolute; top:87.5vh"/>
          </transition>
          <div class="video_container">
            <transition
              name="image_fade"
              mode="out-in"
            >
              <video v-if="activeStatus" width="100%" class="background_video" autoplay loop muted>
                  <source src="@/assets/videos/about_section6.mp4" type="video/mp4" />
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
import AboutSection6Footer from '@/components/AboutView/AboutSection6/AboutSection6Footer.vue';
import AboutSection6Heading from '@/components/AboutView/AboutSection6/AboutSection6Heading.vue';
import AboutSection6Body from '@/components/AboutView/AboutSection6/AboutSection6Body.vue';
import SectionHeadingControlLeftRight from '@/components/ServicesView/ServicesSectionCommon/SectionHeadingControlLeftRight.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import { enterIntroContent, leaveIntroContent} from '@/helpers/animations';

export default {
name: 'AboutSection6_deleted',
components: {
  AboutSection6Body,
  AboutSection6Heading,
  AboutSection6Footer,
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
  };
},
computed:{
  activeStatus(){
      if(this.activeSectionIndex === 6)
        this.$store.commit('SET_NAV_LIGHT', true);
      return this.activeSectionIndex === 6;
  },
},
methods: {
  enterIntroContent,
  leaveIntroContent,
  beforeEnter(el) {
    el.style.opacity = 0;
  },
  valueIndex(index) {
      this.isDropdownOpened = index;
  },
  removeValueIndex() {
    this.isDropdownOpened = '';
  },
},
};
</script>

<style scoped>
.video_container{
  width:100%;
  position:absolute;
  z-index: -1;
}
.background_video{
    height: calc(85vh - 115px);
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
.footer_fade-leave-to {opacity: 0; transform: translateY(-100px);}

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
