<template>
  <div class="c-strategy__heading-row">
    <transition
      appear
      @enter="enterIntroContent"
      @leave="leaveIntroContent"
      v-bind:css="false"
      mode="out-in"
      :duration="200"
    >
      <div class="c-strategy__heading">{{ subtitle() }}</div>
    </transition>
    <div class="c-what-we-do__control-buttons">
      <button class="c-what-we-do__control-button" @click="prevService">
        <svg width="24" height="24" color="#000" fill="none">
          <use xlink:href="@/assets/sprites/icons.svg#left"></use>
        </svg>
      </button>
      <button class="c-what-we-do__control-button" @click="nextService">
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
  name: 'ServicesSection1Heading',
  props: {
    currentServiceIndex:{
      type: [String,Number],
      required: true,
    }
  },
  data(){
    return{
      services:[
        'Operating System Design',
        'Intelligence products',
        'Voice First products',
        'Ecommerce innovation',
        'Intellegence products',
        'B2B and Intellegence',
      ]
    }
  },
  methods: {
    enterIntroContent,
    leaveIntroContent,
    nextService(){
      if(this.currentServiceIndex === '')
        this.currentServiceIndex = 0;
      else if(this.currentServiceIndex != 5)
        this.currentServiceIndex ++ ;
      else if(this.currentServiceIndex == 5)
        this.currentServiceIndex = '';

      this.subtitle();
      this.changeServiceIndex(this.currentServiceIndex);
    },
    prevService(){
      if(this.currentServiceIndex === '')
        this.currentServiceIndex = 0;
      else if(this.currentServiceIndex != 0)
        this.currentServiceIndex -- ;
      else if(this.currentServiceIndex == 0)
        this.currentServiceIndex = '';
      this.subtitle();
      this.changeServiceIndex(this.currentServiceIndex);
    },
    subtitle(){
      if(this.services[this.currentServiceIndex] == null)
        return 'But what do we actually do?';
      else
        return this.services[this.currentServiceIndex];
    },
    changeServiceIndex(index) {
      this.$emit('serviceIndex', index);
    },
    removeServiceIndex() {
      this.$emit('removeProductIndex');
    },
  },
};
</script>
