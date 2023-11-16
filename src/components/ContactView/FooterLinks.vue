<template>
  <div class="c-menu__footer-links">
    <div class="c-menu__footer-row">
      <!-- eslint-disable-next-line -->
      <a
        v-for="(link, index) in footerLinks"
        :key="link.icon + index"
        :href="link.url"
        target="_blank"
      >
        <svg width="28" height="28" color="#000" fill="none">
          <use v-if="link.icon === 'facebook'" xlink:href="@/assets/sprites/icons.svg#facebook" style="width: 50px;"></use>
          <use v-if="link.icon === 'instagram'" xlink:href="@/assets/sprites/icons.svg#instagram" style="width: 50px;"></use>
          <use v-if="link.icon === 'twitter'" xlink:href="@/assets/sprites/icons.svg#twitter" style="width: 50px;"></use>
          <use v-if="link.icon === 'linkedin'" xlink:href="@/assets/sprites/icons.svg#linkedin" style="width: 50px;"></use>
          <use v-if="link.icon === 'behance'" xlink:href="@/assets/sprites/icons.svg#behance" style="width: 50px;"></use>
          <use v-if="link.icon === 'pinterest'" xlink:href="@/assets/sprites/icons.svg#pin" style="width: 50px;"></use>
          <use v-if="link.icon === 'vimeo'" xlink:href="@/assets/sprites/icons.svg#vimeo" style="width: 50px;"></use>
          <use v-if="link.icon === 'dribbble'" xlink:href="@/assets/sprites/icons.svg#dribbble" style="width: 50px;"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenuFooterLinks',
  data() {
    return {
      footerLinks: [
        {
          icon: 'facebook',
          url: 'http://facebook.com/milkinside',
        },
        {
          icon: 'instagram',
          url: 'https://www.instagram.com/glebich/',
        },
        {
          icon: 'twitter',
          url: 'http://twitter.com/milkinsideinc',
        },
        {
          icon: 'behance',
          url: 'https://www.behance.net/Milkinside',
        },
        {
          icon: 'dribbble',
          url: 'http://dribbble.com/milkinside',
        },
        {
          icon: 'linkedin',
          url: 'https://www.linkedin.com/company/milkinside/',
        },
        {
          icon: 'pinterest',
          url: 'http://pinterest.com/glebich/',
        },
        {
          icon: 'vimeo',
          url: 'http://vimeo.com/glebkuznetsov',
        },
      ],
    };
  },
};
</script>
