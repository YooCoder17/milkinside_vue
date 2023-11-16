<template>
  <!-- eslint-disable -->
  <transition name="fade">
    <div
      class="c-menu"
      :class="{active: isOpened}"
      v-if="isOpened"
    >
      <div class="c-menu__content">
        <div class="c-intro">
          <div class="c-line__wrapper" data-start-divider="" data-section-item="">
            <div class="c-line c-line--invert"></div>
          </div>
          <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
            <div class="c-intro__content" data-intro-content="">
              <div class="c-intro__left"><p class="c-intro__number">01</p>
                <div class="c-line__wrapper">
                  <div class="c-intro__line c-line c-line--invert"></div>
                </div>
                <p class="c-intro__text">Stay tuned</p></div>
              <div class="c-intro__right"><p class="c-intro__text">Since 2011</p></div>
            </div>
          </div>
        </div>
        <div class="c-menu__groups">
          <div class="c-menu__group">
            <h2 class="c-menu__group-heading">
              <router-link
                to="/services"
              >
                <a class="c-menu__group-heading" style="cursor: pointer;" @click="onHideMenu()">{{ ROUTE_LABELS.SERVICE }}</a>
              </router-link>
            </h2>
            <div class="c-menu__group-links">
              <a class="c-menu__group-link" @click="onMenuClick(1, $event)" @mouseover="onMenuHover(1)">Product Strategy</a>
              <a class="c-menu__group-link" @click="onMenuClick(2, $event)" @mouseover="onMenuHover(2)">What we do?</a>
              <a class="c-menu__group-link" @click="onMenuClick(3, $event)" @mouseover="onMenuHover(3)">Partners</a>
              <a class="c-menu__group-link" @click="onMenuClick(4, $event)" @mouseover="onMenuHover(4)">FAQ</a>
              <a class="c-menu__group-link" @click="onMenuClick(5, $event)" @mouseover="onMenuHover(5)">Schedule</a>
            </div>
          </div>
          <div class="c-menu__group">
            <h2 class="c-menu__group-heading">
              <router-link
                to="/work"
              >
                <a class="c-menu__group-heading" style="cursor: pointer;" @click="onHideMenu()">{{ ROUTE_LABELS.WORK }}</a>
              </router-link>
            </h2>
            <div class="c-menu__group-links">
              <a class="c-menu__group-link" @click="onWorkMenuClick(0, $event)">Product Design</a>
              <a class="c-menu__group-link" @click="onWorkMenuClick(1, $event)">Motion Graphics</a>
              <a class="c-menu__group-link" @click="onWorkMenuClick(2, $event)">AI-based products</a>
              <a class="c-menu__group-link" @click="onWorkMenuClick(3, $event)">iOS applications</a>
              <a class="c-menu__group-link" @click="onWorkMenuClick(4, $event)">Automotive</a>
              <a class="c-menu__group-link" @click="onWorkMenuClick(5, $event)">Branding and Identity</a>
            </div>
          </div>
          <div class="c-menu__group">
            <h2 class="c-menu__group-heading">
              <router-link
                to="/about"
              >
                <a class="c-menu__group-heading" style="cursor: pointer;" @click="onHideMenu()">{{ ROUTE_LABELS.ABOUT }}</a>
              </router-link>
            </h2>
            <div class="c-menu__group-links">
              <a class="c-menu__group-link" @click="onMenuClick(6, $event)" @mouseover="onMenuHover(6)">About us</a>
              <a class="c-menu__group-link" @click="onMenuClick(7, $event)" @mouseover="onMenuHover(7)">Values</a>
              <a class="c-menu__group-link" @click="onMenuClick(8, $event)" @mouseover="onMenuHover(8)">Culture</a>
              <a class="c-menu__group-link" @click="onMenuClick(9, $event)" @mouseover="onMenuHover(9)">Awards</a>
              <a class="c-menu__group-link" @click="onMenuClick(10, $event)" @mouseover="onMenuHover(10)">Career</a>
            </div>
          </div>
        </div>
        <div class="c-menu__footer">
          <div class="c-line c-line--invert"></div>
          <div class="c-menu__footer-content">
            <CopyLocation />
            <FooterLinks />
          </div>
        </div>
      </div>
      <SideMenuSlides :selected_item="selected_item" :click_status="click_status" @onHideMenu="onHideMenu" @changeSelectedItem="changeSelectedItem"/>
    </div>
  </transition>
</template>
<script>
/* eslint-disable */
import FooterLinks from '@/components/SideMenu/FooterLinks.vue';
import CopyLocation from '@/components/SideMenu/CopyLocation.vue';
import { EVENT_ROUTER_CLICK, ROUTE_LABELS, ROUTES } from '@/helpers/constants';
import SideMenuSlides from '@/components/SideMenu/SideMenuSlides.vue';
export default {
  name: 'SideMenu',
  components: {
    SideMenuSlides,
    CopyLocation,
    FooterLinks,
  },
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ROUTE_LABELS,
      ROUTES,
      selected_item: 0,
      click_status: false,
    };
  },
  watch: {
    isOpened(newValue, oldValue) {
        this.click_status = false;
        // let services_activeSectionIndex = this.$store.state.services_activeSectionIndex;
        // let about_activeSectionIndex = this.$store.state.about_activeSectionIndex;
        this.selected_item = 0;

        // if(this.$route.path == '/'){

        //   this.selected_item = 0;

        // }else if(this.$route.path == '/services'){

        //   if(services_activeSectionIndex === 0) this.selected_item = 1;  
        //   else if(services_activeSectionIndex === 1) this.selected_item = 2;  
        //   else if(services_activeSectionIndex === 3) this.selected_item = 3;  
        //   else if(services_activeSectionIndex === 4) this.selected_item = 4;  
        //   else if(services_activeSectionIndex === 4) this.selected_item = 5;  

        // } else if(this.$route.path == '/about'){
        //   if(about_activeSectionIndex === 0) this.selected_item = 6;  
        //   else if(about_activeSectionIndex === 2) this.selected_item = 7;  
        //   else if(about_activeSectionIndex === 3) this.selected_item = 8;  
        //   else if(about_activeSectionIndex === 8) this.selected_item = 9;  
        //   else if(about_activeSectionIndex === 7) this.selected_item = 10;  
        // }
    }
  },
  methods: {    
    onHideMenu(){
      setTimeout(() => {
        this.$emit("onRouterClick");            
      }, 400);
    },
    onWorkMenuClick(index, event){
      if(this.$route.path !== '/work'){
        this.$store.commit('SET_WORK_ACTIVESECTIONINDEX', index); 
        this.$router.push('/work');        
      }
      this.onHideMenu();
    },
    onMenuClick(index, event){
      // this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 1);    
      // this.$emit(EVENT_ROUTER_CLICK);
        this.selected_item=index;
        event.preventDefault();
        this.click_status = true;      
        // document.querySelector('#cloned_fullscreen').classList.remove('cloned_fullscreen_animation');
        // document.querySelector('#cloned_fullscreen').classList.add("cloned_fullscreen_move_up");
    },
    onMenuHover(index){
      // this.selected_item=index;
      // document.querySelector('#cloned_fullscreen').classList.remove('cloned_fullscreen_animation');
      // document.querySelector('#cloned_fullscreen').classList.add("cloned_fullscreen_move_up");
    },
    onRouterClick() {
      this.$emit(EVENT_ROUTER_CLICK);
    },
    changeSelectedItem(index){
      this.selected_item = index;
    }
  },
};
</script>
<style scoped>
.fade-enter-active { width: 1; transition: all 0.6s cubic-bezier(.71,.17,.14,.93);}
.fade-enter { opacity: 0; }
.fade-leave-active {
  transition: opacity 0.5s, transform 0.3s;
}
.fade-leave-to {
  opacity: 0;
  background-color: white;
  /* transform: scale(4); */
}
</style>
