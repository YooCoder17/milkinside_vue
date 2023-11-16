<template>
    <div class="c-services__wrapper">
      <div class="c-services__sections">
        <svg class="c-services__down-icon" width="24" height="24" fill="none">
          <use xlink:href="@/assets/sprites/icons.svg#down"></use>
        </svg>
        <div
          class="c-services__section c-strategy"
          data-services-section="0"
          style="width: 100%;"
        >
            <transition
              name="intro_fade"
              mode="out-in"
            >
              <ServicesSectionIntro
                v-if="activeStatus"
                :number="sectionAttributes.number"
                :category="sectionAttributes.category"
                :title="sectionAttributes.title"
                style="width: 64%;"
              />
            </transition>
            <transition
              name="heading_fade"
              mode="out-in"
            >
            <ServicesSection0Heading
              v-if="activeStatus"
              :isOpenedStrategyList="isOpenedStrategyList"
              :bodyData="sectionAttributes.body[0]"
              style="width: 64%;"
            >
              <SectionHeadingControlDropdown @dropdownChanged="onStrategyListToggled"/>
            </ServicesSection0Heading>
            </transition>
            <transition
              name="first_line_fade"
              mode="out-in"
            >
               <SectionLine v-if="activeStatus" style="width: 64%;"/>
            </transition>
            <ServicesSection0Body
              :activeSectionIndex="activeSectionIndex"
              :isOpenedStrategyList="isOpenedStrategyList"
              :bodyData="sectionAttributes.body[0]"
            />
            <transition
              name="second_line_fade"
              mode="out-in"
            >
                <SectionLine v-if="activeStatus" style="margin-bottom:25px;width: 64%;"/>
            </transition>
            <transition
              name="footer_fade"
              mode="out-in"
            >
              <ServicesSection0Footer v-if="activeStatus && sectionAttributes.body[0] != null" :whatWeDo="sectionAttributes.body[0].what_we_do" style="width: 64%;"/>
            </transition>
            <transition
              name="video_fade"
              mode="out-in"
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave"
            >
              <video v-if="activeStatus" width="100%" id="intro-video" preload="auto" autoplay loop>
                <source src="@/assets/videos/back_1.mp4" type="video/mp4" />
                <track kind="captions" label="English captions" lang="en" default />
                Your browser does not support the video tag.
              </video>
            </transition>
        </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable */
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import ServicesSection0Footer from '@/components/ServicesView/ServicesSection0/ServicesSection0Footer.vue';
import ServicesSection0Heading from '@/components/ServicesView/ServicesSection0/ServicesSection0Heading.vue';
import ServicesSection0Body from '@/components/ServicesView/ServicesSection0/ServicesSection0Body.vue';
import SectionHeadingControlDropdown from '@/components/ServicesView/ServicesSectionCommon/SectionHeadingControlDropdown.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import { enterIntroContent, leaveIntroContent} from '@/helpers/animations';

export default {
  name: 'ServicesSection0',
  components: {
    SectionHeadingControlDropdown,
    ServicesSection0Body,
    ServicesSection0Heading,
    ServicesSection0Footer,
    ServicesSectionIntro,
    SectionLine
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
  data() {
    return {
      isOpenedStrategyList: false,
      isDropdownOpened: false,
    };
  },
  computed:{
    activeStatus(){
      return this.activeSectionIndex === 0;
    },
  },
  methods: {
    onStrategyListToggled(isOpened) {
      this.isOpenedStrategyList = isOpened;
      this.isDropdownOpened = !this.isDropdownOpened;
    },
    enterIntroContent,
    leaveIntroContent,
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      setTimeout(() => {
        el.style.transition = "opacity 0.6s cubic-bezier(.71,.17,.14,.93);";
        el.style.opacity = 1;
      }, 400);
    },
    leave(el, done) {
      el.style.transition = "opacity 1.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);";
      el.style.opacity = 0;
      el.style.transform = 'translateY(-500px)';
    },
  },
};
</script>

<style scoped>
.footer_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.footer_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.footer_fade-enter { transform: translateY(100px); opacity: 0;}
.footer_fade-leave-to {opacity: 0; transform: translateY(-100px);}

.second_line_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.second_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.second_line_fade-enter { transform: translateY(100px); opacity: 0;}
.second_line_fade-leave-to {opacity: 0; transform: translateY(-100px);}

.body_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_fade-enter { transform: translateY(350px); opacity: 0;}
.body_fade-leave-to {opacity: 0; transform: translateY(-350px);}

.first_line_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.first_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.first_line_fade-enter { transform: translateY(-150px); opacity: 0;}
.first_line_fade-leave-to {opacity: 0; transform: translateY(-150px);}

.heading_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.heading_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.heading_fade-enter { transform: translateY(10px); opacity: 0;}
.heading_fade-leave-to {opacity: 0; transform: translateY(-10px);}

.intro_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { opacity: 0;}
.intro_fade-leave-to {opacity: 0;}

.video_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.video_fade-leave-active { transition: all 0.5s}
.video_fade-enter { transform: translateX(1000px); opacity: 0;}
.video_fade-leave-to {opacity: 0;transform: translateY(-50px);}
#intro-video{
  object-position: 200px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  /* transition: all 0.8s cubic-bezier(.71,.17,.14,.93); */
}
#intro-video.active{
  object-position: 400px;
}
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
