<template>
  <div class="c-partners__bottom-section">
    <transition
      appear
      @enter="enterIntroContent"
      @leave="leaveIntroContent"
      v-bind:css="false"
      mode="out-in"
      :duration="200"
    >
      <div class="c-partners__support">
        <div class="c-partners__support-questions">
          <router-link to="/contact">
            <img
              class="c-partners__support-questions-image"
              alt="got questions image"
              src="https://res.cloudinary.com/dm3bdznon/image/upload/v1668820511/got_questions_579d3d6a6d.png"
            >
          </router-link>
          <div>
            <div class="c-partners__support-heading">Still have questions?</div>
            <div class="c-partners__support-description">Can’t find the answer you’re looking
              for?<br>Please chat with our friendly team.
            </div>
          </div>
        </div>
        <div>
          <div class="c-partners__support-heading c-partners__support-heading--align-right">
            Professionals support
          </div>
          <div
            class="c-partners__support-description c-partners__support-description--align-right">
            Every month, we receive countless emails from those <br>in the product design and engineering industries, <br>commending our work as world-class.
          </div>
        </div>
      </div>
    </transition>

    <transition
      appear
      @enter="enterIntroContent"
      @leave="leaveIntroContent"
      v-bind:css="false"
      mode="out-in"
      :duration="200"
    >
      <ServicesSectionHeartLink/>
    </transition>
  </div>
</template>
<script>
import ServicesSectionHeartLink from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionHeartLink.vue';
import { convertNewLineToBreak } from '@/helpers/helpers';
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'ServicesSection3Bottom',
  components: { ServicesSectionHeartLink },
  methods: {
    convertNewLineToBreak,
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>
