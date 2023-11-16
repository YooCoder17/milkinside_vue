<!-- eslint-disable -->
<template>
  <div class="c-nav" id="c-nav">
    <div class="c-nav__wrapper" :class="{ 'c-nav--light': isLight, }">
      <router-link to="/" class="c-nav__logo" @click.native="logoOnClickHandler" @mouseenter.native="onLogoEnter"
        @mouseleave.native="onLogoLeave" style="width: 150px;height: 35px;">
        <transition name="logo_fade" mode="in-out">
          <a v-show="!showLogoAnimation" style="position: absolute;">MILKINSIDE.</a>
        </transition>
        <transition name="logo_fade" mode="out-in">
          <div id="logo-animation" v-show="showLogoAnimation"
            style="transform:scale3d(.7, .7, .7) translateX(-285px) translateY(-160px); position:absolute"></div>
        </transition>
      </router-link>

      <div class="c-nav__menu">
        <div class="c-nav__menu-item" v-for="(route, label, index) in ROUTES" :key="label"
          @click="onMenuClick(index, $event)" style="text-transform: uppercase;cursor: pointer;">
          <!-- <router-link
            :to="route" class="c-nav__menu-link"
            @click.native="onRouterClick"
          > -->
          {{ label }}
          <!-- </router-link> -->
        </div>

        <SideMenuButton v-on="$listeners" :isOpenedSideMenu="isOpenedSideMenu" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { eventBus, BUS_EVENT_RESET_SECTION_TO_INITIAL } from '@/helpers/eventBus';
import SideMenuButton from '@/components/NavMenu/SideMenuButton.vue';
import { EVENT_ROUTER_CLICK, ROUTES, ROUTES_WITH_LIGHT_BG } from '@/helpers/constants';
import lottie from 'lottie-web';
import whiteLogoAnimation from '@/assets/lottiAnimationsData/logo_white.js';
import blackLogoAnimation from '@/assets/lottiAnimationsData/logo_black.js';
export default {
  name: 'NavMenu',
  components: {
    SideMenuButton,
  },
  props: {
    isOpenedSideMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ROUTES,
      showLogoAnimation: false,
    };
  },
  mounted() {

  },
  computed: {
    currentRouteName() {
      const currentRoute = this.$route;
      const matchingRoute = Object
        .entries(this.ROUTES)
        .find(([, route]) => currentRoute.path === route);

      return (matchingRoute ? matchingRoute[0] : '');
    },
    getNavLight() {
      return this.$store.state.nav_light;
    },
    isLight() {
      if (this.currentRouteName == "About") {
        document.body.style.backgroundColor = "white";
        if (document.getElementById("milkinside"))
          document.getElementById("milkinside").style.background = "white";
      } else {
        document.body.style.backgroundColor = "#f5f4f8";
        if (document.getElementById("milkinside"))
          document.getElementById("milkinside").style.background = "#f5f4f8";
      }
      return (ROUTES_WITH_LIGHT_BG.includes(this.currentRouteName) || this.getNavLight) && !this.isOpenedSideMenu;
    },
  },
  methods: {
    onLogoEnter() {
      this.showLogoAnimation = true;

      const animationContainer = document.getElementById('logo-animation');
      let animationData = this.$store.state.nav_light ? blackLogoAnimation : whiteLogoAnimation;
      if(this.$route.path == '/services')
        animationData = blackLogoAnimation;
      const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: animationData,
      });

      // Adjust the speed
      animation.setSpeed(1.5); // Play the animation at half the original speed
    },
    onLogoLeave() {
      this.showLogoAnimation = false;
      var parent = document.getElementById("logo-animation");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    },
    onMenuClick(index, event) {
      switch (index) {
        case 0:
          this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 0);
          if (this.$route.path !== '/about')
            this.$router.push('/about');
          break;

        case 1:
          if (this.$route.path !== '/work')
            this.$router.push('/work');
          break;

        case 2:
          this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 0);
          if (this.$route.path !== '/services')
            this.$router.push('/services');
          break;

        case 3:
          if (this.$route.path !== '/contact')
            this.$router.push('/contact');
          break;
      }
      setTimeout(() => {
        this.$emit(EVENT_ROUTER_CLICK);
      }, 100);

    },
    logoOnClickHandler() {
      eventBus.$emit(BUS_EVENT_RESET_SECTION_TO_INITIAL);
      this.onRouterClick();
    },
    onRouterClick() {
      this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 0);
      this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 0);
      this.$emit(EVENT_ROUTER_CLICK);
    },
  },
};
</script>
<style scoped>
.logo_fade-enter-active {
  opacity: 1;
  transition: all 0.4s cubic-bezier(.71, .17, .14, .93);
}

.logo_fade-leave-active {
  transition: all 0.2s cubic-bezier(0.66, 0.00, 0.00, 1.00);
}

.logo_fade-enter {
  opacity: 0;
}

.logo_fade-leave-to {
  opacity: 0;
}
</style>
