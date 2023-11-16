<template>
  <div class="c-strategy__heading-row">
    <transition name="subtitle" mode="out-in">
      <div :key="subtitle" class="c-strategy__heading" style="width:330px">{{ bodyData.services[subtitle_index].text }}</div>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
/* eslint-disable */
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'ServicesSection0Heading',
  props: {
    isOpenedStrategyList: {
      type: Boolean,
      required: true,
      default: false,
    },
    bodyData: {
      type: Object,
      required: true,
    },
  },
  watch: {
    isOpenedStrategyList(newValue, oldValue) {
      if(newValue)
        clearInterval(this.interval);
      else
        this.interval = setInterval(this.changeSubTitle, 2000);
    },
  },
  created() {
    this.interval = setInterval(this.changeSubTitle, 2000);
  },
  data() {
    return {
      subtitle: 'default',
      subtitle_index: 0,
    };
  },
  methods: {
    enterIntroContent,
    leaveIntroContent,
    changeSubTitle(){
        this.subtitle_index ++;
        if(this.subtitle_index >= this.bodyData.services.length)
          this.subtitle_index = 0;
        this.subtitle = this.bodyData.services[this.subtitle_index].text;
    }
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