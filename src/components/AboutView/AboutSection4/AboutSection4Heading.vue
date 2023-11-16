<template>
  <div class="c-strategy__heading-row" style="position:relative">
    <transition name="subtitle" mode="out-in">
      <div class="c-strategy__heading" style="width:330px">Awards</div>
    </transition>
    <div class="c-what-we-do__control-buttons" style="position:absolute;right:0">
      <button class="c-what-we-do__control-button" @click="prevSlide">
        <svg width="24" height="24" color="#000" fill="none">
          <use xlink:href="@/assets/sprites/icons.svg#left"></use>
        </svg>
      </button>
      <button class="c-what-we-do__control-button" @click="nextSlide">
        <svg width="24" height="24" color="#000" fill="none">
          <use xlink:href="@/assets/sprites/icons.svg#right"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'AboutSection4Heading',
  props: {
    slideIndex:{
      type: Number,
      required: true,
    }
  },
  methods: {
    enterIntroContent,
    leaveIntroContent,
    prevSlide(){
      let slide_index = (this.slideIndex - 1 + 9) % 9;
      this.$emit('changeSlideIndex', slide_index);
      this.$emit('stopInterval', true);
    },
    nextSlide(){
      let slide_index = (this.slideIndex + 1) % 9;
      this.$emit('changeSlideIndex', slide_index);
      this.$emit('stopInterval', true);
    },
  },
};
/* eslint-disable */
</script>
<style scoped>
.subtitle-enter-active {
  opacity: 0.3;
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.subtitle-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.subtitle-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale( 1.3 );
  opacity: 0;
}
.subtitle-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale( 0.9 );
  opacity: 0;
}
</style>