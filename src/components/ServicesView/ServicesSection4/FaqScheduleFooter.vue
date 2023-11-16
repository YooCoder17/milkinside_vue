<!-- eslint-disable -->
<template>
  <div class="c-faq-schedule__footer-wrapper" style="width:100%;bottom:0;padding: 35px var(--padding);background:#090710">
          <div style="width:40%;z-index:4">
              <div class="c-partners__review-title" style="font-size: max(3.5rem, 32px);color:white">
                {{ attributesBody.footer_title }}
              </div>
              <div class="c-partners__review-role" style="color:white">
                If you have a digital project you want to succeed, reach out to interact@milkinside.com <br>
                We're here to help you achieve your vision.
              </div>
          </div>
          <router-link to="/contact">
              <div class="section4-footer-left">
                <span
                  class="section-footer-arrow"
                  style="background:linear-gradient(217.27deg,#d1bddb -17.84%,#f2eff0 100%)"
                >
                  <svg width="20" height="20" color="#000" fill="none">
                    <use xlink:href="@/assets/sprites/icons.svg#right"></use>
                  </svg>
                </span>
                <p class="section-footer-left-title" style="font-size: max(1.6rem, 16px);color:white;font-weight:100;opacity:0.6;margin-top: 12px;margin-bottom:5px">Let's build future together</p>
                <p class="section-footer-left-title" style="font-size: max(2.2rem, 18px);font-weight:400; color:white">
                    Get in touch with us
                </p>
              </div>
           </router-link>
          <video id="intro-video" poster="@/assets/images/dark_globe.jpg" width="100%" loop muted autoplay preload="auto">
                <source src="@/assets/videos/dark_globe.mp4" type="video/mp4" />
                <track kind="captions" label="English captions" lang="en" default />
                Your browser does not support the video tag.
          </video>
  </div>
</template>

<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'FaqScheduleFooter',
  props: {
    attributesBody: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertNewLineToBreak,
    enterIntroContent,
    leaveIntroContent,
  },
  data(){
    return {
      backgroundImageSetting:{
        backgroundImage: `url(${require('@/assets/images/section4_background.jpg')})`
      }
    }
  }
};
</script>
<style scoped>
#intro-video{
  /* object-position: 500px; */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  object-fit: cover;
  /* transition: all 0.8s cubic-bezier(.71,.17,.14,.93); */
}
#intro-video.active{
  object-position: 400px;
}
.section4-footer-left {
  margin-left: 100px;
  margin-right: auto;
  margin-top:7px;
  display: flex;
  width:450px;
  height: 110px;
  flex-direction: column;
  justify-content: center;
  padding: 25px 24px;
  backdrop-filter: blur(50px);
  border-radius: 32px;
  background-color: rgb(33 32 32 / 70%);
  z-index: 4;
  position: relative;
}
</style>
