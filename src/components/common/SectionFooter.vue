<!-- eslint-disable -->
<template>
  <div style="position: relative; background: #030305;">
      <div
        :class="{'c-services__section': activeStatus}"
        class="c-we-think"
        data-services-section="5"
        style="display: flex;"
      >
          
            <div class="c-nav" style="padding:50px 0 30px 0; height: 125px;">
              <div class="c-nav__wrapper"
                  :class="{'c-nav--light': isLight,}" style="width:60%">
                  <transition
                    appear
                    name="nav_fade"
                    mode="out-in"
                  >
                  <router-link
                    v-show="show_top_nav"
                    to="/"
                    class="c-nav__logo"
                    @click.native="logoOnClickHandler"
                  >
                    MILKINSIDE.
                  </router-link>
                </transition>
                <transition
                    appear
                    name="nav_fade"
                    mode="out-in"
                >
                <div v-show="show_top_nav" class="c-nav__menu">
                  <div
                    class="c-nav__menu-item"
                    v-for="(route, label) in ROUTES"
                    :key="label"
                  >
                    <router-link
                      :to="route" class="c-nav__menu-link"
                      @click.native="onRouterClick"
                    >
                      {{ label }}
                    </router-link>
                  </div>

                  <div
                    class="c-nav__menu-item side-menu-button"
                    :class="{'side-menu-opened': isOpenedSideMenu}"
                    @click="sideMenuOnClickHandler"
                    @keydown.enter="sideMenuOnClickHandler"
                    tabindex="0"
                    role="button"
                    :aria-label="labelText"
                  >
                    <div
                      class="animated-menu-icon"
                      :class="{open: isOpenedSideMenu}"
                    >
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                </transition>
              </div>
            </div>
            <SideMenu
              :isOpened="isOpenedSideMenu"
              @onRouterClick="hideSideMenu"
            />
            <div class="c-we-think__content" style="margin-bottom: auto;">
                <div class="c-intro">
                  <SectionLine/>
                  <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
                    <transition
                      appear
                      @enter="enterIntroContent"
                      @leave="leaveIntroContent"
                      v-bind:css="false"
                      mode="out-in"
                      :duration="200"
                    >
                      <div class="c-intro__content" data-intro-content="">
                        <div class="c-intro__left">
                          <p class="c-intro__number">02</p>
                          <SectionLine addClass="c-intro__line"/>
                          <p class="c-intro__text">STAY TUNED</p>
                        </div>
                        <div class="c-intro__right">
                          <div class="c-we-think__heading-text">
                              <img src="@/assets/images/copy_link.png" alt="mobileImage.alternativeText" style="width:40px;">
                              <a style="font-size: max(1.5rem, 15px);font-weight:500;margin-left:10px;cursor:pointer;" @click="copyLink" ref="copy_link">COPY LINK</a>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>
                <div v-if="activeStatus" class="c-we-think__heading-row">
                  <transition
                    appear
                    v-bind:css="false"
                    mode="out-in"
                    :duration="200"
                  >
                    <div class="c-we-think__heading" style="font-size: max(2.3rem, 23px);;font-weight:700">We Think</div>
                  </transition>
                  <div class="c-we-think__heading-text">
                      <a>{{ "1 98,603,401" }}</a>
                      <a class="c-we-think__views-title">{{ "views" }}</a>
                  </div>
                </div>
                <div class="c-line c-we-think__bottom-line-wrapper"></div>
                <div class="c-we-think__body-title" style="padding-top:1vh;margin-bottom: auto;padding-bottom:2vh; margin-top: auto;">
                  <a v-html="convertNewLineToBreak('We')"
                      style="margin-right:12px"
                  ></a>
                  <transition name="bodytitle" mode="out-in">
                    <div :key="body_title" v-html="convertNewLineToBreak(body_title)"
                    ></div>
                  </transition>
                </div>
            </div>
            <div class="c-we-think__body">
              <div class="c-menu__groups">
                <div class="c-menu__group">
                  <h1 class="c-we-think__group-heading"  style="font-size: max(3.5rem, 35px);">
                    <router-link to="/services">
                      {{ ROUTE_LABELS.SERVICE }}
                    </router-link>
                  </h1>
                  <div class="c-we-think__group-links">
                    <a class="c-menu__group-link" @click="onMenuClick(1, $event)">Product Strategy</a>
                    <a class="c-menu__group-link" @click="onMenuClick(2, $event)">What we do?</a>
                    <a class="c-menu__group-link" @click="onMenuClick(3, $event)">Partners</a>
                    <a class="c-menu__group-link" @click="onMenuClick(4, $event)">FAQ</a>
                    <a class="c-menu__group-link" @click="onMenuClick(5, $event)">Schedule</a>
                  </div>
                </div>
                <div class="c-menu__group">
                  <h1 class="c-we-think__group-heading" style="font-size: max(3.5rem, 35px);">
                    <router-link to="/work">
                      Work
                    </router-link>
                  </h1>
                  <div class="c-we-think__group-links">
                    <a class="c-menu__group-link" @click="onWorkMenuClick(0, $event)">Product Design</a>
                    <a class="c-menu__group-link" @click="onWorkMenuClick(1, $event)">Motion Graphics</a>
                    <a class="c-menu__group-link" @click="onWorkMenuClick(2, $event)">AI-based products</a>
                    <a class="c-menu__group-link" @click="onWorkMenuClick(3, $event)">iOS applications</a>
                    <a class="c-menu__group-link" @click="onWorkMenuClick(4, $event)">Automotive</a>
                    <a class="c-menu__group-link" @click="onWorkMenuClick(5, $event)">Branding and Identity</a>
                  </div>
                </div>
                <div class="c-menu__group">
                  <h1 class="c-we-think__group-heading" style="font-size: max(3.5rem, 35px);">
                    <router-link to="/about">
                      About
                    </router-link>
                  </h1>
                  <div class="c-we-think__group-links">
                    <a class="c-menu__group-link" @click="onMenuClick(6, $event)">About us</a>
                    <a class="c-menu__group-link" @click="onMenuClick(7, $event)">Values</a>
                    <a class="c-menu__group-link" @click="onMenuClick(8, $event)">Culture</a>
                    <a class="c-menu__group-link" @click="onMenuClick(9, $event)">Awards</a>
                    <a class="c-menu__group-link" @click="onMenuClick(10, $event)">Career</a>
                  </div>
                </div>
              </div>

              <div class="section_30">
                  <div style="width:100%; text-align: center;">
                    <h1 class="c-we-think__body-title" style="margin-bottom:5px">
                      Inspiring Design,
                    </h1>
                    <h1 class="c-we-think__body-title">
                      Building Brilliance
                    </h1>
                  </div>
                  <router-link to="/contact">
                    <div class="section4-footer-left">
                        <span
                          class="section-footer-arrow"
                          style="background:linear-gradient(217.27deg,#d1bddb -17.84%,#f2eff0 100%)"
                        >
                          <svg width="20" height="20" color="#000" fill="none">
                            <use xlink:href="@/assets/sprites/icons.svg#right"></use>
                          </svg>
                        </span>
                        <p class="section-footer-left-title" style="font-size: max(1.6rem, 16px);color:white;font-weight:100;opacity:0.6;margin-top: 4px;margin-bottom:5px">Let's build future together</p>
                        <p class="section-footer-left-title" style="font-size: max(2.2rem, 18px);font-weight:400; color:white">
                            Get in touch with us
                        </p>
                    </div>
                  </router-link>
              </div>
            </div>
            <div class="c-menu__footer" style="margin-top:auto;margin-bottom:auto">
              <div class="c-menu__footer-content">
                <FooterLinks />
              </div>
            </div>
            <div style="position: absolute;bottom: 6vh;opacity:0.4">@2024 Milkinside. All rights reserved</div>
       </div>
       <video v-if="activeStatus" poster="@/assets/images/dark_globe.jpg" width="100%" loop muted autoplay preload="auto"  style="position: absolute;
                                                                            top: 0;
                                                                            left: 0;
                                                                            min-width: 100%;
                                                                            min-height: 100%;
                                                                            width: auto;
                                                                            height: auto;
                                                                            z-index: -1;" :class="{'active': moveBackground}">
          <source src="@/assets/videos/dark_globe.mp4" type="video/mp4" />
       </video>     
  </div>
</template>
<script>
/* eslint-disable */
import { throttle } from 'lodash';
import { convertNewLineToBreak } from '@/helpers/helpers';
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import FooterLinks from '@/components/SideMenu/FooterLinks.vue';
import { EVENT_ROUTER_CLICK, ROUTE_LABELS, ROUTES, ROUTES_WITH_LIGHT_BG, COMPONENT_EVENT_SIDE_MENU_CLICKED  } from '@/helpers/constants';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import SideMenu from '@/components/SideMenu.vue';
import { eventBus, BUS_EVENT_RESET_SECTION_TO_INITIAL } from '@/helpers/eventBus';
import SideMenuButton from '@/components/NavMenu/SideMenuButton.vue';
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';
import SectionLine from '@/components/common/SectionLine.vue';
export default {
  name: 'SectionFooter',
  components: {
    convertNewLineToBreak,
    ServicesSectionIntro,
    FooterLinks,
    AnimatedBackground,
    SideMenu,
    SideMenuButton,
    SectionLine
  },
  props: {
    footer_visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      show_top_nav: false,
      isOpenedSideMenu: false,
      ROUTE_LABELS,
      ROUTES,
      bodytitle_index: 0,
      body_title:'Design',
      body_titles: [
        'Design',
        'Develop',
        'Build',
        'Dream',
        'Plan',
        'Succeed',
      ],
      moveBackground: false,
    };
  },
  computed: {
    activeStatus(){
      return true;
    },
    currentRouteName() {
      const currentRoute = this.$route;
      const matchingRoute = Object
        .entries(this.ROUTES)
        .find(([, route]) => currentRoute.path === route);

      return (matchingRoute ? matchingRoute[0] : '');
    },
    isLight() {
      return ROUTES_WITH_LIGHT_BG.includes(this.currentRouteName) && !this.isOpenedSideMenu;
    },
    labelText() {
      return this.isOpenedSideMenu
        ? 'Close side menu'
        : 'Open side menu';
    },
  },
  methods: {
    copyLink(){
      this.$copyText('https://milkinside.com/').then(() => {
        this.$refs.copy_link.innerHTML = "COPIED"
        console.log('link copied to clipboard');
      }).catch(() => {
        console.error('Failed to link to clipboard');
      });
    },
    enterIntroContent,
    leaveIntroContent,
    onWorkMenuClick(index, event){
      if(this.$route.path !== '/work'){
        this.$store.commit('SET_WORK_ACTIVESECTIONINDEX', index); 
        this.$router.push('/work');        
      }
      setTimeout(() => {
        this.$emit(EVENT_ROUTER_CLICK);
      }, 100);
    },
    onMenuClick(page_index, event){
      if (page_index >= 1 && page_index <= 5 && this.$route.path !== '/services') {
        this.$router.push('/services');
      } else if (page_index >= 6 && page_index <= 10 && this.$route.path !== '/about') {
        this.$router.push('/about');
      }
      if(page_index === 0) this.logoOnClickHandler();
      else if(page_index === 1) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 0);  
      else if(page_index === 2) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 1);  
      else if(page_index === 3) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 3);  
      else if(page_index === 4) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 4);  
      else if(page_index === 5) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 4);
      else if(page_index === 6) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 0);  
      else if(page_index === 7) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 2);  
      else if(page_index === 8) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 3);  
      else if(page_index === 9) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 4);  
      else if(page_index === 10) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 6);              
      setTimeout(() => {
        this.$emit(EVENT_ROUTER_CLICK);
      }, 100);
    },
    toggleSideMenu() {
      this.isOpenedSideMenu = !this.isOpenedSideMenu;
    },
    hideSideMenu() {
      this.isOpenedSideMenu = false;
    },
    onRouterClick() {
      this.$emit(EVENT_ROUTER_CLICK);
    },
    convertNewLineToBreak,
    changeBodyTitle(){
        this.bodytitle_index ++;
        if(this.bodytitle_index > 5)
          this.bodytitle_index = 0;
        this.body_title = this.body_titles[this.bodytitle_index];
    },
    logoOnClickHandler() {
      eventBus.$emit(BUS_EVENT_RESET_SECTION_TO_INITIAL);
      this.onRouterClick();
    },
    sideMenuOnClickHandler() {
      this.toggleSideMenu();
      // this.$emit(COMPONENT_EVENT_SIDE_MENU_CLICKED);
    },
  },
  watch: {
    footer_visible(newValue, oldValue){
      if(newValue){
        setTimeout(() => {
          this.show_top_nav = true;
        }, 900);
      }else{
        this.show_top_nav = false;
      }
      
    }
  },
  created() {
    this.interval = setInterval(this.changeBodyTitle, 2000);
    this.moveBackground = window.innerWidth > 1800 ? true: false;
    window.addEventListener('resize', throttle(() => {
      this.moveBackground = window.innerWidth > 1800 ? true: false;
    }, 100));
  },
}
</script>
<style scoped>

.c-nav--light .animated-menu-icon span{
  background-color:white!important;
}
.c-nav--light{
  color:white;
}
.c-services__wrapper{
  padding:0!important;
}
.nav_fade-enter-active { transition: all 0.6s cubic-bezier(.71,.17,.14,.93);}
.nav_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.nav_fade-enter { opacity: 0;}
.nav_fade-leave-to {opacity: 0;}

.section_fade-enter-active { transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.section_fade-leave-active { transition: all 1s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.section_fade-enter { transform: translateY(100vh); opacity: 0;}
.section_fade-leave-to {transform: translateY(100vh);}
/* .intro_fade-enter-to {transform: translateY(115px);} */
.bodytitle-enter-active {
  opacity: 0.3;
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.bodytitle-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.bodytitle-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale( 1.3 );
  opacity: 0;
}
.bodytitle-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale( 0.9 );
  opacity: 0;
}
.c-services__section:before{
  /* content: "";
  background: #030305;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1; */
}
/* .c-menu {
  background-color:#030305!important;
} */
canvas{
  position: absolute;
}
#background-video{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  transition: all 0.8s cubic-bezier(.71,.17,.14,.93);
}
#background-video.active{
  transform: translateX(35vw);
}
.side-menu-button {
  position: relative;
  top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
}

.animated-menu-icon {
  width: 28px;
  height: 12px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
}

.animated-menu-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #ffffff;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: all .25s cubic-bezier(0.1, 0.82, 0.76, 0.965);
}

.animated-menu-icon span:nth-child(1) {
  top: 0;
}

.animated-menu-icon:not(.open) span:nth-child(2){
  top: 9px;
  width: 60%;
  transition: top .25s ease-in-out;
}

.animated-menu-icon.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 5px;
}

.animated-menu-icon.open span:nth-child(2) {
  transform: rotate(-45deg);
  bottom: 5px;
}
.section4-footer-left {
  margin-right: auto;
  margin-top:7px;
  display: flex;
  width:450px;
  height: 110px;
  flex-direction: column;
  justify-content: center;
  padding: 25px 24px;
  backdrop-filter: blur(50px);
  border-radius: 32px;
  background-color: rgb(33 32 32 / 70%);
  z-index: 4;
  position: relative;
}
.section_30{
  width:30%;margin-left:12%;
  display: block;
}
.c-menu__groups{
  width: 42%;
}
@media (max-width: 1800px){
  .c-menu__groups{
    width: 48%;
  }
}
@media (max-width: 1000px){
  .c-menu__groups{
    width: 80%;
  }
}
@media (max-width: 768px){
  .bottom_description{
    margin-top:0vh;
  }
  .c-menu__footer{
    margin-top:10vh;
  }
  .section_30{
    display: none;
  }
  .c-menu__group {
      display: block;
  }
  .c-menu__groups {
    flex-direction: row;
  }
}
</style>