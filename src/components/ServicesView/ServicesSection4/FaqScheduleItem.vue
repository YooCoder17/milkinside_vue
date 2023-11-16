<!-- eslint-disable -->
<template>
  <div class="display-contents">
    <div class="c-faq-schedule__item" @click="changeStatus" style="cursor: pointer;">
      <div>
        <p class="c-faq-schedule__item-title">{{ item.title }}</p>
        <!-- <transition
          name="description_fade"
          mode="out-in"
        > -->
          <div id="description" class="collapsible_content" :class="{'content_active':show_status}"> 
              <p v-if="item.description"
                class="c-faq-schedule__item-description"
              >
                {{ item.description }}
              </p>
          </div>
        <!-- </transition> -->
      </div>
      <div class="c-faq-schedule__item-data">
        <div class="c-faq-schedule__item-data-value">{{ item.value_number }}</div>
        <div>
          <div
            class="c-faq-schedule__item-data-text"
            v-html="convertNewLineToBreak(item.value_title)"
          ></div>
        </div>
      </div>
    </div>

    <div class="c-faq-schedule__item-divider"></div>
  </div>
</template>

<script>
/* eslint-disable */ 
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'FaqScheduleItem',
  data() {
    return {
      show_status: false,
    }
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertNewLineToBreak,
    changeStatus(){
      console.log("change status");
        this.show_status = !this.show_status;
    },
  },
};
</script>

<style scoped>
.collapsible_content {
    /* margin-top: 10px;
    margin-bottom: 10px; */
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
    &.content_active{
      max-height: 200px;
    }
}
.display-contents {
  /* display: contents; */
}
.description_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
/* .description_fade-leave-active { transition: all 1s cubic-bezier(0.66, 0.00, 0.00, 1.00);} */
.description_fade-enter { opacity: 0;}
.description_fade-leave-to {opacity: 0;}
</style>
