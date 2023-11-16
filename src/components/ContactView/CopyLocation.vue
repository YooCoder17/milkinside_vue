<template>
  <button
    class="c-menu__copy"
    @click="copyUrlToClipboard"
  >
    <svg width="3.3rem" height="3.3rem" color="rgba(0, 0, 0, 0.8)" fill="none">
      <use xlink:href="@/assets/sprites/icons.svg#attachment"></use>
    </svg>
    <span style="font-size:1.6rem">Copy Link</span>
  </button>
</template>

<script>
/* eslint-disable */
export default {
  name: 'SideMenuCopyLocation',
  methods: {
    copyUrlToClipboard() {
      const currentUrl = window.location.href;

      navigator.clipboard.writeText("milkinside.com");
    },
  },
};
</script>
