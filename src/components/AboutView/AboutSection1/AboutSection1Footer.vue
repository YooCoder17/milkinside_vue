<!-- eslint-disable -->
<template>
  <div class="c-strategy__footer">
    <div class="c-strategy__what-we-do" style="grid-template-columns: repeat(5, 130px);padding-top:20px">
      <transition-group appear name="fade" tag="div">
        <div
          class="c-strategy__what-we-do-item"
          v-for="(client, index) in clients"
          :key="client.text + index"
          v-html="convertNewLineToBreak(client.text)"
          ref="client"
        ></div>
      </transition-group>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'AboutSection1Footer',
  mounted() {
  },
  methods: {
    convertNewLineToBreak,
  },
  data() {
    return {
      clients:  [{
          id: 56,
          text: 'Spotfiy \n Lyft \n PWC',
          color: 'black',
        }, {
          id: 57,
          text: 'Alphabet \n Daimler\n Microsoft',
          color: 'black',
        }, {
          id: 58,
          text: 'T-Mobile \n Honda \n SAS',
          color: 'black',
        }, {
          id: 59,
          text: 'Google\n Xiaomi \n Oppo',
          color: 'black',
        }, {
          id: 60,
          text: 'Samsung \n LG\n Mitubishi',
          color: 'black',
        }],
    };
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
