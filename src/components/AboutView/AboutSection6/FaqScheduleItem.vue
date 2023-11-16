<!-- eslint-disable -->
<template>
  <div class="display-contents" @click="showDescription">
    <div class="c-faq-schedule__item" style="padding-right:30px">
      <div>
        <p class="c-faq-schedule__item-title scale_title" :class="{'active':isScaled}">{{ item.title }}</p>
        <div style="display:flex" class="subtitle" :class="{'active':showDetail}" >
          <div style="font-weight:700;margin-bottom:20px;min-width:150px">San Franscisco, CA</div>
          <div style="width: 40px; height: 1px;background-color: #000;margin-top: 12px; margin-right: 10px;margin-left: 10px;opacity:0.3"></div>
          <div style="min-width: 70px;">Full-Time</div>
        </div>
      </div>
      <div style="display:flex">
        <transition
          appear
          name="apply_btn_fade"
          mode="out-in"
        >
        <div  v-show="showDetail" class="c-faq-schedule__item-apply apply_btn" style="grid-template-columns: none;">
          <div class="c-faq-schedule__item-apply-value" style="text-align:center;font-size: max(2.1rem, 21px);font-weight:600; margin-top:2px" @click="onApply">
            Apply
          </div>
        </div>
        </transition>
        <transition
          appear
          name="apply_btn_fade"
          mode="out-in"
        >
        <div v-show="showDetail" style="width: 40px; height: 1px;background-color: #000;margin-top: auto; margin-bottom:auto; margin-left: 20px;opacity:0.2"></div>
        </transition>
        <div class="c-faq-schedule__item-data" style="grid-template-columns: none;">
          <div class="c-faq-schedule__item-data-value" style="text-align:center;font-size: max(2.1rem, 21px);margin-top:2px">{{ item.description }}</div>
        </div>
      </div>
    </div>
    <div class="collapsible_content" :class="{'active':showDetail}">
      <transition
          appear
          name="description_fade"
          mode="out-in"
        >
        <div v-show="showDetail">
          <div style="font-weight:700;margin-bottom:20px">About Milkinside</div>
          <div style="font-size: 17px;opacity: 0.6;margin-bottom:30px">{{ item.about }}</div>
          <div style="font-weight:700;margin-bottom:20px">Job Description</div>
          <div style="font-size: 17px;opacity: 0.6;margin-bottom:30px">{{ item.job_description }}</div>
          <div style="font-weight:700;margin-bottom:20px">Key Responsibilities</div>
          <div style="font-size: 17px;opacity: 0.6;margin-bottom:30px">{{ item.key_responsibilities }}</div>
          <div style="font-weight:700;margin-bottom:20px">Qualifications</div>
          <div style="font-size: 17px;opacity: 0.6;margin-bottom:30px">{{ item. qualifications }}</div>
        </div>
      </transition>
    </div>
    <div class="c-faq-schedule__item-divider" style="margin: 30px 0;"></div>
  </div>
</template>

<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';
export default {
  name: 'FaqScheduleItem',
  data() {
    return {
      showDetail: false,
      isScaled:false,
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
    onApply(event){
      event.preventDefault();
      event.stopPropagation();
      window.location.href = `mailto:interact@milkinside.com`;
    },
    showDescription(){
      this.isScaled = true;
      setTimeout(() => {
        this.isScaled = false;
      }, 600);
      this.showDetail = !this.showDetail;
      if(this.showDetail)
        this.$emit("expanded_item");
      else
      this.$emit("closed_item");
    }
  },
};
</script>

<style scoped>
.scale_title {
  &.active{
     animation: scaleAnimation 0.6s cubic-bezier(.71,.17,.14,.93);
     animation-fill-mode: forwards;
  }
}

@keyframes scaleAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8); 
  }
  100% {
    transform: scale(1);
  }
}
.apply_btn{
  transform: scale(1);
}
.collapsible_content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.8s cubic-bezier(.71,.17,.14,.93);
    &.active{
      max-height: 800px;
    }
}
.subtitle {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(.71,.17,.14,.93);;
    &.active{
      max-height: 50px;
    }
}
.title_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.title_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.title_fade-enter { opacity: 0;}
.title_fade-leave-to {opacity: 0;}

.apply_btn_fade-enter-active { transition: all 0.3s ease-in-out}
.apply_btn_fade-leave-active { transition: all 0.3s ease-in-out}
.apply_btn_fade-enter,.apply_btn_fade-leave-to {opacity: 0; transform: scale(0.6);}

.description_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.description_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.description_fade-enter { opacity: 0; transform: translateY(-600px);}
.description_fade-leave-to {opacity: 0; transform: translateY(-600px);}
.display-contents {
  display: contents;
}
</style>
