<template>
  <div class="c-strategy__section c-strategy__section--active" style="overflow_hidden">
      <transition
        name="body0_fade"
        mode="out-in"
      >
        <div v-show="activeStatus && isOpenedStrategyList && bodyData.services" class="section0_body0">
          <Section0StrategyList
              :services="bodyData.services"
          />
        </div>
      </transition>
      <transition
        name="body1_fade"
        mode="out-in"
      >
        <div v-show="activeStatus &&  !(isOpenedStrategyList && bodyData.services)" class="section0_body1">
          <div
            class="c-strategy__top-title"
            v-html="convertNewLineToBreak(bodyData.top_title)"
            key="top-title"
          ></div>
          <div
            class="c-strategy__bottom-title"
            v-html="convertNewLineToBreak(bodyData.bottom_title)"
            key="bottom-title"
          ></div>
        </div>
      </transition>
      <transition
        name="bottom_title_fade"
        mode="out-in"
      >
        <div class="bottom_title" v-show="activeStatus && isOpenedStrategyList && bodyData.services">OUR CLINETS</div>
      </transition>
  </div>
</template>
<script>
/* eslint-disable */
import Section0StrategyList from '@/components/ServicesView/ServicesSection0/Section0StrategyList.vue';
import { convertNewLineToBreak } from '@/helpers/helpers';
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'ServicesSection0Body',
  components: { Section0StrategyList },
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
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
  methods: {
    convertNewLineToBreak,
    enterIntroContent,
    leaveIntroContent,
  },
  computed:{
    activeStatus(){
      return this.activeSectionIndex === 0;
    },
  },
};
</script>

<style scoped>
.bottom_title_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.bottom_title_fade-leave-active { transition: all 0.4s}
.bottom_title_fade-enter { transform: translateY(-50px); opacity: 0;}
.bottom_title_fade-leave-to {opacity: 0;}
.bottom_title{ position:absolute;  bottom:12px;}

.section0_body0, .section0_body1{ position:absolute; width:100%; height: 100%;}
.body0_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body0_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body0_fade-enter{ transform: translateY(-300px); opacity: 0.8;}
.body0_fade-leave-to{ transform: translateY(-300px); opacity: 0;}

.body1_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body1_fade-leave-active { transition: all 0.3s }
.body1_fade-enter { transform: translateY(300px); opacity: 0;}
.body1_fade-leave-to { transform: translateY(50px); opacity: 0;  }
.c-strategy__section--active{
  overflow: hidden;
  position: relative;
}
.c-strategy__bottom-title{
  font-weight: 700;
  position: absolute;
  bottom: 12px;
}
/* .c-strategy__section--active > div:not(.c-strategy__services) {
  display: contents;

} */
</style>
