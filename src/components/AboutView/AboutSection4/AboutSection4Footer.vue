<!-- eslint-disable -->
<template>
  <div style="display:flex">
    <div class="c-strategy__footer" style="position:relative; width:60%; align-items:unset; justify-content: space-between;">
        <div style="min-width: 500px;">
          <img src="@/assets/images/aboutsection4_footer1.png" alt="mobileImage.alternativeText" class="footer_img">
          <img src="@/assets/images/aboutsection4_footer2.png" alt="mobileImage.alternativeText" class="footer_img">
          <img src="@/assets/images/aboutsection4_footer3.png" alt="mobileImage.alternativeText" class="footer_img">
          <img src="@/assets/images/aboutsection4_footer4.png" alt="mobileImage.alternativeText" class="footer_img">
          <img src="@/assets/images/aboutsection4_footer5.png" alt="mobileImage.alternativeText" class="footer_img">
          <img src="@/assets/images/aboutsection4_footer6.png" alt="mobileImage.alternativeText" class="footer_img">
        </div>
        <div style="min-width:420px; right:0;text-align:right;font-size: 20px;font-weight: 700;top:-7px">
          Consistent recognition with CES Innovation <br>
          Awards for seven years in a row
        </div>
    </div>
    <!-- <div class="c-strategy__footer" style="position:relative; width:36%">
        <div style="padding-left:135px">
          <span
            class="section-footer-arrow"
            style="background: linear-gradient(217.27deg, rgb(193 193 193) -17.84%, rgb(242, 239, 240) 100%); transform:none;position:relative"
          >
            <svg width="20" height="20" color="#000" fill="none" style="position:relative">
              <use xlink:href="@/assets/sprites/icons.svg#right"></use>
            </svg>
          </span>
        </div>
        <div style="margin-left:-20px;font-size: 20px;font-weight: 700;">
          See projects
        </div>
    </div> -->
  </div>
</template>
<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'AboutSection4Footer',
  mounted() {
  },
  methods: {
    convertNewLineToBreak,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.footer_img{
  margin-right:30px;
}
/* .c-strategy__what-we-do-item{
  font-size: max(2rem, 20px);
  font-weight: 700;
} */
.c-strategy__what-we-do > div {
  display: contents;
}
</style>
