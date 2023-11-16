<!-- eslint-disable -->
<template>
  <div style="display:flex">
    <div class="c-strategy__what-we-do" style="position:relative; width:64; grid-template-columns: repeat(4, 130px);padding-top:20px">
      <transition-group appear name="fade" tag="div">
        <div
          class="c-strategy__what-we-do-item"
          v-for="(client, index) in clients"
          :key="client.text + index"
          v-html="convertNewLineToBreak(client.text)"
          ref="client"
        ></div>
      </transition-group>
    </div>
    <div class="c-strategy__footer" style="position:relative; width:36%">
        <div style="padding-left:135px">
          <span
            class="section-footer-arrow"
            style="background: linear-gradient(217.27deg, rgb(193 193 193) -17.84%, rgb(242, 239, 240) 100%); transform:none; position:relative"
          >
            <svg width="20" height="20" color="#000" fill="none" style="position:relative">
              <use xlink:href="@/assets/sprites/icons.svg#right"></use>
            </svg>
          </span>
        </div>
        <div style="margin-left:-20px;font-size: 20px;font-weight: 700;">
          Get in touch
        </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'AboutSection6Footer',
  mounted() {
  },
  methods: {
    convertNewLineToBreak,
  },
  data() {
    return {
      clients:  [{
          id: 56,
          text: 'How do you make \n fast websites?',
          color: 'black',
        }, {
          id: 57,
          text: 'How do you make fast \n websites',
          color: 'black',
        }, {
          id: 58,
          text: 'How do you make \n "fresh" work',
          color: 'black',
        },],
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
