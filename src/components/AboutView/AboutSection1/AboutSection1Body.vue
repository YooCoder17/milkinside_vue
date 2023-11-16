<!-- eslint-disable -->
<template>
  <div style="margin-top:auto; margin-bottom: auto;width: 150%;">
    <div>
      <div style="font-size: max(3.5rem, 35px);font-weight:700;">Once upon a byte, software took a <br>giant bite out of the world.</div><br>
      <div style="margin-right:12px; color:black; font-size: max(2.5rem, 25px);font-weight:500;">
        Imagine a world where technology rules the roost, and we? <br>Well, we're the architects of the digital wonderland!<br><br>
        We're the design dream-weavers, the tech maestros, the ones<br> who craft digital adventures that leave a mark.<br>
        Our mission? To ride this tech tornado, transform challenges<br> into triumphs, and help our clients rewrite the story of innovation.
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'AboutSection1Body',
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>

<style scoped>
.bottom_title_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.bottom_title_fade-leave-active { transition: all 0.4s}
.bottom_title_fade-enter { transform: translateY(-50px); opacity: 0;}
.bottom_title_fade-leave-to {opacity: 0;}
.bottom_title{ position:absolute;  bottom:12px;}

.section0_body0, .section0_body1{ position:absolute; width:100%; height: 100%;}
.body0_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.body0_fade-leave-active { transition: all 0.3s cubic-bezier(.71,.17,.14,.93);}
.body0_fade-enter{ transform: translateY(-300px); opacity: 0.8;}
.body0_fade-leave-to{ transform: translateY(-100px); opacity: 0;}

.body1_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
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
