<!-- eslint-disable -->
<template>
  <div style="position:relative;">
       <div class="aboutsection4_body_title" style="padding-top:6vh;">
          The Genesis of<br>
          Design Excellence
       </div>
       <div class="aboutsection4_body_content">
          <AboutSection5Values/>
       </div>
       
  </div>
</template>

<script>
/* eslint-disable */
import { bounceAnimationY } from '@/helpers/animations';
import AboutSection5Values from '@/components/AboutView/AboutSection5/AboutSection5Values.vue';
export default {
  name: 'AboutSection5Body',
  components: {
    AboutSection5Values
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
.aboutsection4_body_content{
    flex-grow: 2;
    font-size: 20px;
    font-weight: 700;
}
.aboutsection4_body_title{
  flex-grow: 1;
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
