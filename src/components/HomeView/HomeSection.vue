<!-- eslint-disable -->
<template>
  <div
    class="c-home__section c-home__section--first c-home__section--active"
    :data-home-section="sectionId"
  >
    <HomeSectionContent :sectionAttributes="sectionAttributes" :showFooter = "showFooter"/>
    <transition
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
      >
      <HomeSectionFooter
        :sectionAttributes="sectionAttributes"
        :sectionId="sectionId"
        v-on="$listeners"
        v-if="!showFooter"
      />
    </transition>
  </div>
</template>

<script>
/* eslint-disable */ 
import HomeSectionContent from '@/components/HomeView/HomeSectionContent.vue';
import HomeSectionFooter from '@/components/HomeView/HomeSectionFooter.vue';
import {
  enterSectionTitle,
  leaveSectionTitle,
  enterIntroContent,
  leaveIntroContent,
} from '@/helpers/animations';
export default {
  name: 'HomeSection',
  components: {
    HomeSectionContent,
    HomeSectionFooter,
  },
  props: {
    showFooter:{
      type: Boolean,
      required: true,
    },
    sectionAttributes: {
      type: Object,
      required: true,
    },
    sectionId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    enterSectionTitle,
    leaveSectionTitle,
    enterIntroContent,
    leaveIntroContent,
  },
};
</script>
