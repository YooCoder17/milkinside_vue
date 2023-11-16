<!-- eslint-disable -->
<template>
  <div class="c-services__wrapper">
    <div class="c-services__sections" style="display: flex;">
      <!-- <svg class="c-services__down-icon" width="24" height="24" fill="none">
        <use xlink:href="@/assets/sprites/icons.svg#down"></use>
      </svg> -->
      <div
        class="c-services__section c-strategy"
        data-services-section="0"
        style="padding: 0 var(--padding) 7vh; width: 100%;"
      >
          <transition
            name="intro_fade"
            mode="out-in"
          >
            <AboutSectionIntro
              v-if="activeStatus"
              :number="'02'"
              :category="'DIGITAL INNOVATION TEAM'"
              :title="'MILKINSIDE SAN FRANCISCO'"
              style="width: 64%;"
            />
          </transition>
          <transition
            name="heading_fade"
            mode="out-in"
          >
            <AboutSection1Heading
              v-if="activeStatus"
              style="width: 64%;"
            />
          </transition>
          <transition
            name="first_line_face"
            mode="out-in"
          >
             <SectionLine v-if="activeStatus" style="width: 64%;"/>
          </transition>
          <transition
            name="body_fade"
            mode="out-in"
          >
            <AboutSection1Body
              v-if="activeStatus"
              :activeSectionIndex="activeSectionIndex"              
            />
          </transition>
          <transition
            name="body_fade"
            mode="out-in"
          >
            <div v-if="activeStatus" class="c-strategy__what-we-do-item" style="margin-bottom:2vh">Clients and Partners</div>
          </transition>
          <transition
            name="second_line_fade"
            mode="out-in"
          >
            <SectionLine v-if="activeStatus" style="width: 64%;"/>
          </transition>
          <transition
            name="footer_fade"
            mode="out-in"
          >
            <AboutSection1Footer v-if="activeStatus" style="width: 64%;"/>
          </transition>
          
      </div>
      <div class="image_container">
        <transition
            name="image_fade"
            mode="out-in"
          >
            <img v-if="activeStatus" id="background_img"
              src="@/assets/images/aboutsection1_background.png"
              alt="mobileImage.alternativeText"
            >
          </transition>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import AboutSectionIntro from '@/components/AboutView/AboutSectionCommon/AboutSectionIntro.vue';
import AboutSection1Footer from '@/components/AboutView/AboutSection1/AboutSection1Footer.vue';
import AboutSection1Heading from '@/components/AboutView/AboutSection1/AboutSection1Heading.vue';
import AboutSection1Body from '@/components/AboutView/AboutSection1/AboutSection1Body.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import { enterIntroContent, leaveIntroContent} from '@/helpers/animations';

export default {
name: 'AboutSection1',
components: {
  AboutSection1Body,
  AboutSection1Heading,
  AboutSection1Footer,
  AboutSectionIntro,
  SectionLine
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
      if(this.activeSectionIndex === 1)
        this.$store.commit('SET_NAV_LIGHT', true);
      return this.activeSectionIndex === 1;
  },
},
methods: {
  enterIntroContent,
  leaveIntroContent,
  beforeEnter(el) {
    el.style.opacity = 0;
  },
},
};
</script>

<style scoped>
.image_container{
  height: 85vh;
  width:35%; display: flex;
  position: absolute;
  left:64%;
}
@media (max-width: 960px){
  .image_container{
    width:35%; display: none;
  }
}
#background_img{
  right: 5%;
  margin-top: auto;
  margin-bottom: auto;
  width: 50vh;
  z-index: -1;
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
.body_fade-leave-to {opacity: 0; transform: translateY(-150px);}

.first_line_face-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.first_line_face-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.first_line_face-enter { transform: translateY(150px); opacity: 0;}
.first_line_face-leave-to {opacity: 0; transform: translateY(-150px);}

.heading_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.heading_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.heading_fade-enter { transform: translateY(-50px); opacity: 0;}
.heading_fade-leave-to {opacity: 0; transform: translateY(-80px);}

.intro_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { opacity: 0;}
.intro_fade-leave-to {opacity: 0;}

.image_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.image_fade-leave-active { transition: all 0.3s}
.image_fade-enter { transform: translateY(-400px); opacity: 0;}
.image_fade-leave-to {opacity: 0; transform: translateY(-400px);}

/* .c-services__section:before{
content: "";
background: #f5f4f8;
width: 100%;
height: 100%;
position: absolute;
right: 0;
top: 0;
z-index: -1;
} */
</style>
