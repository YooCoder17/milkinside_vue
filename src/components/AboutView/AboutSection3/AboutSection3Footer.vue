<!-- eslint-disable -->
<template>
  <div class="c-strategy__footer" style="position:relative">
      <div>
        <a style="font-size: max(2.1rem, 21px);font-weight: 500;color:#7065f9">Inclusive</a><br>
        <a style="font-size: max(2.1rem, 21px);font-weight: 500;color:rgb(60 155 239)">Creativity</a>
      </div>
      <div style="position:absolute;right:0;text-align:right;font-size: 20px;font-weight: 700;">
        Design's true elegance lies in its ability<br>
        to embrace and celebrate inclusivity.        
      </div>
  </div>
</template>
<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'AboutSection3Footer',
  mounted() {
  },
  methods: {
    convertNewLineToBreak,
  },
  data() {
    return {
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
