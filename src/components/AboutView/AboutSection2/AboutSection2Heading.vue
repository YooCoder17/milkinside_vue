<template>
  <div class="c-strategy__heading-row" style="position:relative">
    <transition name="subtitle" mode="out-in">
      <div class="c-strategy__heading" style="width:330px">{{subtitle()}}</div>
    </transition>
    <div class="c-what-we-do__control-buttons" style="position:absolute;right:0">
      <button class="c-what-we-do__control-button" @click="prevValue">
        <svg width="24" height="24" color="#000" fill="none">
          <use xlink:href="@/assets/sprites/icons.svg#left"></use>
        </svg>
      </button>
      <button class="c-what-we-do__control-button" @click="nextValue">
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
  name: 'AboutSection2Heading',
  props: {
    currentValueIndex:{
      type: [String,Number,Boolean],
      required: true,
    }
  },
  data() {
    return {
      subtitle_index: 0,
      values:[
        'Perfection',
        'People',
        'Passion  ',
        'Purpose  ',
        'Partnership',
      ]
    };
  },
  methods: {
    enterIntroContent,
    leaveIntroContent,
    nextValue(){
      if(this.currentValueIndex === '')
        this.currentValueIndex = 0;
      else if(this.currentValueIndex != 4)
        this.currentValueIndex ++ ;
      else if(this.currentValueIndex == 4)
        this.currentValueIndex = '';
      this.subtitle();
      this.changeValueIndex(this.currentValueIndex);
    },
    prevValue(){
      if(this.currentValueIndex === '')
        this.currentValueIndex = 0;
      else if(this.currentValueIndex != 0)
        this.currentValueIndex -- ;
      else if(this.currentValueIndex == 0)
        this.currentValueIndex = '';
      this.subtitle();
      this.changeValueIndex(this.currentValueIndex);
    },
    subtitle(){
      if(this.values[this.currentValueIndex] == null)
        return 'Values';
      else
        return this.values[this.currentValueIndex];
    },
    changeValueIndex(index) {
      this.$emit('valueIndex', index);
    },
    removeValueIndex() {
      this.$emit('removeValueIndex');
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