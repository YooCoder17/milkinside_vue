<template>
  <div class="c-partners__statistics-row" style="margin-bottom:2vh">
    <transition
          name="body_fade"
          mode="out-in"
        >
      <div v-if="activeStatus" class="c-partners__statistic" style="margin-top:40px">
        <div class="c-partners__statistic-value">
          <AnimatedNumber
            :value="183"
            :round="1"
            :duration="DURATION_BOUNCE_ANIMATION"
          />
        </div>
        <div class="c-partners__statistic-description">Satisfied <br> clients</div>
      </div>
    </transition>
    <!-- <transition
          name="body_fade"
          mode="out-in"
        >
      <div v-if="activeStatus" class="c-partners__behance"  style="margin-top:40px">
        <div class="c-partners__behance-text-wrapper">
          <div class="c-partners__behance-value">2k</div>
          <svg width="24" height="24" color="none" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#rewards"></use>
          </svg>
        </div>
        <p class="c-partners__behance-text">Reviews on <b>Behance</b></p>
      </div>
    </transition> -->
  </div>
</template>

<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';
import { enterIntroContent, leaveIntroContent, DURATION_BOUNCE_ANIMATION } from '@/helpers/animations';
import AnimatedNumber from 'animated-number-vue';

export default {
  name: 'ServicesSection3Statistics',
  components: {
    AnimatedNumber,
  },
  computed: {
    DURATION_BOUNCE_ANIMATION() {
      return DURATION_BOUNCE_ANIMATION;
    },
    activeStatus(){
      return this.activeSectionIndex === 3;
    },
  },
  methods: {
    convertNewLineToBreak,
    enterIntroContent,
    leaveIntroContent,
  },
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
.body_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.body_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_fade-enter { transform: translateY(-100px); opacity: 0;}
.body_fade-leave-to {opacity: 0; transform: translateY(-50px);}
</style>
