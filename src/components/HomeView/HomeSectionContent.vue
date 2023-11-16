<!-- eslint-disable -->
<template>
  <div class="c-home__section__section-content">
    <div class="c-intro">
      <SectionLine :invert="true"/>

      <transition
        @enter="enterIntroContent"
        @leave="leaveIntroContent"
        v-bind:css="false"
        mode="out-in"
      >
        <div
          ref="contentWrapper"
          :key="sectionAttributes.number"
          class="c-intro__content__wrapper"
          data-intro-content-wrapper=""
        >
          <div
            class="c-intro__content"
            data-intro-content=""
          >
            <div class="c-intro__left">
              <p class="c-intro__number">{{ sectionAttributes.number }}</p>
              <SectionLine
                :invert="true"
                addClass="c-intro__line"
              />
              <p
                class="c-intro__text"
                v-html="convertNewLineToBreak(sectionAttributes.category)"
              ></p>
            </div>

            <div class="c-intro__right">
              <div v-if="showFooter" class="c-we-think__heading-text">
                  <img src="@/assets/images/copy_link.png" alt="mobileImage.alternativeText" style="width:40px;">
                  <a style="font-size: max(1.5rem, 15px);font-weight:500;margin-left:10px;cursor:pointer;" @click="copyLink" ref="copy_link">COPY LINK</a>
              </div>
              <p v-if="!showFooter" class="c-intro__text">Since {{ sectionAttributes.since }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <transition
      @enter="enterSectionTitle"
      @leave="leaveSectionTitle"
      v-bind:css="false"
      mode="out-in"
      :duration="400"
    >
      <div v-if="showFooter" style="position: absolute; width:100%;display:flex; height: calc(100vh - var(--nav-height) - 56px);; flex-direction: column;">
        <div class="c-we-think__heading-row" style="margin-top:60px">
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
        <div class="c-we-think__body-title" style="padding-top: 1vh; margin-bottom: auto; padding-bottom: 2vh;">
          <a v-html="convertNewLineToBreak('We')"
              style="margin-right:12px"
          ></a>
          <transition name="bodytitle" mode="out-in">
            <div :key="body_title" v-html="convertNewLineToBreak(body_title)"
            ></div>
          </transition>
        </div>
        <div class="c-we-think__body" style="width: 110%;">
              <div class="c-menu__groups">
                <div class="c-menu__group">
                  <h1 class="c-we-think__group-heading"  style="font-size: max(3.5rem, 35px);">
                    <router-link to="/services">
                      {{ ROUTE_LABELS.SERVICE }}
                    </router-link>
                  </h1>
                  <div class="c-we-think__group-links">
                    <a class="c-menu__group-link" @click="onMenuClick(1, $event)" >Product Strategy</a>
                    <a class="c-menu__group-link" @click="onMenuClick(2, $event)" >What we do?</a>
                    <a class="c-menu__group-link" @click="onMenuClick(3, $event)" >Partners</a>
                    <a class="c-menu__group-link" @click="onMenuClick(4, $event)" >FAQ</a>
                    <a class="c-menu__group-link" @click="onMenuClick(5, $event)" >Schedule</a>
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
                    <a class="c-menu__group-link" @click="onMenuClick(6, $event)" >About us</a>
                    <a class="c-menu__group-link" @click="onMenuClick(7, $event)" >Values</a>
                    <a class="c-menu__group-link" @click="onMenuClick(8, $event)" >Culture</a>
                    <a class="c-menu__group-link" @click="onMenuClick(9, $event)" >Awards</a>
                    <a class="c-menu__group-link" @click="onMenuClick(10, $event)" >Career</a>
                  </div>
                </div>
              </div>

              <div class="section_30">
                  <div style="width:600px; text-align: center;">
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
                      <p class="section-footer-left-title" style="font-size: max(1.6rem, 16px);color:white;font-weight:100;opacity:0.6;margin-top: 12px;margin-bottom:5px">Let's build future together</p>
                      <p class="section-footer-left-title" style="font-size: max(2.2rem, 18px);font-weight:400; color:white">
                          Get in touch with us
                      </p>
                    </div>
                  </router-link>
              </div>
        </div>
        <div class="c-menu__footer" style="margin-top: auto; margin-bottom: auto;">
          <div class="c-menu__footer-content">
            <FooterLinks /> 
          </div>
        </div>
        <div style="margin-bottom: auto;opacity:0.4">@2024 Milkinside. All rights reserved</div>
          
      </div>
    </transition>
    <SectionLine :invert="true" addClass="c-home__section__divider" id="intro_line" :class="{'active':showFooter}"/>
    
    <transition-group
      @enter="enterSectionTitle"
      @leave="leaveSectionTitle"
      v-bind:css="false"
      mode="out-in"
      :duration="400"
    >
      <h2
        v-if="!showFooter"
        :key="sectionAttributes.number + 'title'"
        class="c-home__section__title"
        data-section-title=""
        data-section-item=""
        v-html="convertNewLineToBreak(sectionAttributes.title)"
      ></h2>
      <p
        :key="sectionAttributes.number + 'description'"
        v-if="sectionAttributes.description && !showFooter"
        class="c-home__section__description"
        data-section-title=""
        data-section-item=""
        v-html="convertNewLineToBreak(sectionAttributes.description)"
      ></p>
    </transition-group>
  </div>
</template>

<script>
/* eslint-disable */
import { throttle } from 'lodash';
import SectionLine from '@/components/common/SectionLine.vue';
import { convertNewLineToBreak } from '@/helpers/helpers';
import { EVENT_ROUTER_CLICK, ROUTE_LABELS, ROUTES, ROUTES_WITH_LIGHT_BG, COMPONENT_EVENT_SIDE_MENU_CLICKED  } from '@/helpers/constants';
import FooterLinks from '@/components/SideMenu/FooterLinks.vue';
import {
  enterSectionTitle,
  leaveSectionTitle,
  enterIntroContent,
  leaveIntroContent,
} from '@/helpers/animations';

export default {
  name: 'HomeSectionContent',
  components: {
    SectionLine,
    FooterLinks,
  },
  props: {
    sectionAttributes: {
      type: Object,
      required: true,
    },
    showFooter:{
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
    };
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
    onWorkMenuClick(index, event){
      if(this.$route.path !== '/work'){
        this.$store.commit('SET_WORK_ACTIVESECTIONINDEX', index); 
        this.$router.push('/work');        
      }
      setTimeout(() => {
        this.$emit(EVENT_ROUTER_CLICK);
      }, 100);
    },
    onMenuClick(page_index){
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
    changeBodyTitle(){
        this.bodytitle_index ++;
        if(this.bodytitle_index > 5)
          this.bodytitle_index = 0;
        this.body_title = this.body_titles[this.bodytitle_index];
    },
    convertNewLineToBreak,
    enterSectionTitle,
    leaveSectionTitle,
    enterIntroContent,
    leaveIntroContent,
  },
  created() {
    this.interval = setInterval(this.changeBodyTitle, 2000);
  },
};
</script>
<style scoped>
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
#intro_line{
  transition: all 0.8s cubic-bezier(.71,.17,.14,.93);
}
#intro_line.active{
  opacity: 0;
}
.section_30{
  width:20%;margin-left:12%;
  display: block;
}
.c-menu__groups{
  width: 80%;
}
.bottom_description{
  margin-top:8vh;
  opacity:0.4;
}
.c-menu__footer{
  margin-top:10vh;
}
@media (max-width: 1400px){
  .bottom_description{
    margin-top:4vh;
  }
  .c-menu__footer{
    margin-top:15vh;
  }
}
@media (max-width: 1000px){
  .bottom_description{
    margin-top:5vh;
  }
  .c-menu__footer{
    margin-top:15vh;
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