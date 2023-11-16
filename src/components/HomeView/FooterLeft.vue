<!-- eslint-disable -->
<template>
  <div class="section-footer-left">
    <span
      class="section-footer-arrow"
      style="background:linear-gradient(217.27deg,#d1bddb -17.84%,#f2eff0 100%); cursor: pointer;"
      @click="onShowWindow"
    >
      <svg width="20" height="20" color="#000" fill="none">
        <use xlink:href="@/assets/sprites/icons.svg#right"></use>
      </svg>
    </span>

    <p class="section-footer-left-title">{{ sectionAttributes.footer_title }}</p>
    <p class="section-footer-left-description" style="cursor: pointer;" @click="onShowWindow">{{ sectionAttributes.footer_description }}</p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'FooterLeft',
  props: {
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
    onShowWindow() {
      if(this.sectionId == 7)
        window.open('https://medium.com/milkinside/finding-the-narrative-on-storytelling-in-design-c2d4311602e3', '_blank');
      else if(this.sectionId == 2)
        window.open('https://medium.com/milkinside/how-to-create-an-immersive-user-experience-e96920e132d3', '_blank');
      else if(this.sectionId == 5 || this.sectionId == 4)
        window.open('https://medium.com/milkinside/why-a-discovery-process-is-crucial-e0109ffc88a6', '_blank');
    },
  }
};
</script>
<style>

</style>
