<!-- eslint-disable -->
<template>
  <div class="c-what-we-do__product" style="min-width: 350px; margin-top:0" @mouseover="getValueIndex" @mouseleave="removeValueIndex" @focusin="handleFocusIn" @focusout="handleFocusIn">
    <transition
          name="body_fade"
          mode="out-in"
        >
      <div
        v-if="activeStatus"
        :id="'about_section2_item' + index"
        class="c-what-we-do__product-content"
        :class="{'c-what-we-do__product-content--no-left-padding': indexComputed > 1}"
        style="margin-top:auto; margin-bottom:auto;margin-left:1.5vw"        
      >
        <div class="c-what-we-do__product-index" style="position: absolute; margin-top:-8vh;font-size: 8rem;">{{ indexComputed | zeroPadTwo }}</div>
        <div
          class="c-what-we-do__product-title"
          v-html="convertNewLineToBreak(value.title)"
        ></div>

        <div class="c-what-we-do__product-line">
          <div class="c-what-we-do__product-line--bar"></div>
          <div class="c-what-we-do__product-line--faded-bar"></div>
        </div>

        <div
          class="c-what-we-do__product-description"
          v-html="convertNewLineToBreak(value.description)"
        ></div>
      </div>

    </transition>
  </div>
</template>
<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'AboutSection2Value',
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
    };
  },
  mounted(){
  },
  computed: {
    indexComputed() {
      return this.index + 1;
    },
    activeStatus(){
      return this.activeSectionIndex === 2;
    },
  },
  methods: {
    convertNewLineToBreak,
    getValueIndex() {
      this.$emit('getValueIndex');
    },
    removeValueIndex() {
      this.$emit('removeValueIndex');
    },
    handleFocusIn() {
    },
  },
  filters: {
    zeroPadTwo(value) {
      return value.toString().padStart(2, '0');
    },
  },
};
</script>
<style>
.body_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.body_fade-leave-active { transition: all 0.3s cubic-bezier(.71,.17,.14,.93);}
.body_fade-enter{ transform: translateY(-300px); opacity: 0.8;}
.body_fade-leave-to{ transform: translateY(-100px); opacity: 0;}

.footer_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.footer_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.footer_fade-enter { transform: translateY(100px); opacity: 0;}
.footer_fade-leave-to {opacity: 0; transform: translateY(-100px);}

.service-product-video{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  transition: all 0.8s cubic-bezier(.71,.17,.14,.93);
}
</style>
