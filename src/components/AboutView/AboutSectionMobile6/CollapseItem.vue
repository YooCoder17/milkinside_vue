<!-- eslint-disable -->
<template>
  <div class="carousel-item">
    <div @click="changeStatus()" class="item-header">
      <h3>{{ item.heading }}</h3>
      <span class="item-icon" :class="{ 'collapsed': item.collapsed }">
        <!-- {{ item.collapsed ? arrowIcon : '▼' }} -->
        <span v-html="item.collapsed ? arrowIcon : arrowOpenIcon"></span>
      </span>
      <p>{{ item.role }}</p>
    
    </div>
    <div class="collapsible_content" :class="{'content_active':show_status}">
      <h4>About Milkinside</h4>
      {{ item.about }}

      <h4>Job Description</h4>
      {{ item.job_description }}

      <h4>Key Responsibilities</h4>
      {{ item.key_responsibilities }}

      <h4>Qualifications</h4>
      {{ item.qualifications }}


      <button class="btn-white" @click="onApply">Apply</button>
    </div>
    <div class="c-faq-schedule__item-divider"></div>
  </div>
</template>
<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';
export default {
  name: 'CollapseItem',
  data() {
    return {
      arrowIcon: '<svg class="" width="15" height="15" fill="none"><use xlink:href="/assets/icons.svg#right"></use></svg>',
      arrowOpenIcon: '<svg class="" width="15" height="15" fill="none"><use xlink:href="/assets/icons.svg#down-arrow-large"></use></svg>',
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
        this.show_status = !this.show_status;
    },
    onApply(event){
      event.preventDefault();
      event.stopPropagation();
      window.location.href = `mailto:interact@milkinside.com`;
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
      max-height: 1650px;
    }
}

.item-header {
  align-items: center;
  cursor: pointer;
}
.item-header >h3 {
  font-size: 24px;
  cursor: pointer;
}

.item-icon {
  font-size: 18px;
  float: right;
  margin-top: -5rem;
}

.item-content.collapsed {
  display: none;
}
.collapsible_content > h4{
  font-size: 18px;
  font-weight: 600;
  margin-top: 20px;
}
.btn-white{
  background-color: rgb(231 231 231);
  border-radius: 50px;
  padding: 20px;
  margin: 20px 0px;
  width: 100%;
  font-size: 24px;
  color: black;
}
.carousel-item {
  margin: 30px 0px;
}
</style>
