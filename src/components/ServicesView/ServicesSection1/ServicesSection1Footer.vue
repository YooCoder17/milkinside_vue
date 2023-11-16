<template>
  <div class="c-strategy__footer">
    <div class="c-strategy__what-we-do">
      <transition-group appear name="fade" tag="div">
        <div
          class="c-strategy__what-we-do-item"
          v-for="(client, index) in clients"
          :key="client.text + index"
          v-html="convertNewLineToBreak(client.text)"
          ref="weDoItem"
        ></div>
      </transition-group>
    </div>
    <ServicesDownButton/>
  </div>
</template>
<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';
import { bounceAnimationY } from '@/helpers/animations';
import ServicesDownButton from '@/components/ServicesView/ServicesSection0/ServicesDownButton.vue';

export default {
  name: 'ServicesSection1Footer',
  components: {
    ServicesDownButton,
  },
  props: {
    clients: {
      type: Array,
      required: true,
    },
  },
  mounted() {
  },
  methods: {
    convertNewLineToBreak,
  },
};
</script>

<style scoped>
/* .c-strategy__what-we-do-item{
  font-size: max(2rem, 20px);
  font-weight: 700;
} */
.c-strategy__what-we-do > div {
  display: contents;
}
</style>
