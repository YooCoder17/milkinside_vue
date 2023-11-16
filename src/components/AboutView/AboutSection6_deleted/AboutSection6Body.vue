<!-- eslint-disable -->
<template>
  <div style="padding-top:40px; position:relative">
       <div class="aboutsection4_body_title">
          Studio is always looking<br>
          for like-minded people:
       </div>
       <div class="aboutsection4_body_content" style="margin-bottom:30px">
          Desingers,Art & Technical Directors, Creative<br>
          Coders and other Creatives
       </div>
       <div class="aboutsection4_body_content">
          <AboutSection6Values/>
       </div>
       <div class="aboutsection4_body_content" style="position:absolute;bottom:20px;font-size:16px">
          FAQ
       </div>
  </div>
</template>

<script>
/* eslint-disable */
import { bounceAnimationY } from '@/helpers/animations';
import AboutSection6Values from '@/components/AboutView/AboutSection6/AboutSection6Values.vue';
export default {
  name: 'AboutSection6Body',
  components: {
    AboutSection6Values
  },
  props: {
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style scoped>
.company_logos{
  margin-top:220px;
  display: grid;
  grid-template-columns: repeat(7, auto);
}
.aboutsection4_body_content{
    font-size: 20px;
    font-weight: 700;
}
.aboutsection4_body_title{
  margin-bottom:20px;
  font-size: max(4.7rem, 32px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: normal;
}
.c-what-we-do__products {
  overflow-y: hidden;
}

.c-what-we-do__products > div {
  display: contents;
}
</style>
