<!-- eslint-disable -->
<template>
  <transition appear name="section0_fade" mode="out-in">
    <div v-if="activeStatus" style="z-index:5;" class="root_section">
        <div v-if="activeStatus" class="c-we-think__content" style="color:white;margin-top:115px;position:absolute;padding:0 var(--padding) 88px;z-index:5; width: 100%;">
              <ServicesSectionIntro
                v-if="activeStatus"
                number='01'
                category='DIGITAL INNOVATION TEAM'
                title='MILKINSIDE SAN FRANCISCO'
                style="width:64%"
              />
              <div v-if="activeStatus" class="c-we-think__heading-row" style="width:64%">
                <transition
                  appear
                  v-bind:css="false"
                  mode="out-in"
                  :duration="200"
                >
                  <div class="c-we-think__heading" style="font-size: max(2rem, 20px);font-weight:700">This is Milkinside</div>
                </transition>
                <div class="c-we-think__heading-text">
                    <img src="@/assets/images/copy_link.png" alt="mobileImage.alternativeText" class="copylink_img">
                    <a style="font-size: max(1.5rem, 15px);font-weight:500;margin-left:10px;cursor:pointer;" @click="copyLink" ref="copy_link">COPY LINK</a>
                </div>
              </div>
              <div class="c-line c-we-think__bottom-line-wrapper" style="margin-bottom:8vh;width:64%"></div>
              <div class="c-we-think__body-title" style="width: 150%;">
                <a class="title_content">
                  Powerhouse of excellence in design spanning San<br>
                  Francisco, New York, Los Angeles, and Zurich. Armed with<br>
                  cutting-edge technology, we craft extraordinary brands,<br>
                  products, and experiences. Our mission? To empower our<br>
                  clients with the most potent solutions that obliterate<br>
                  challenges and seize opportunities like never before.<br>
                </a>
              </div>
        </div>
        <!-- <AnimatedBackground
          v-if="this.$store.state.loadedVideoData != null && this.$store.state.loadedVideoData.length > 0"
          :images="this.$store.state.loadedVideoData[this.activeSectionIndex]?.loop_video"
          :noLoop="false"
          :fps="30"
        /> -->
        <video v-if="activeStatus" poster="@/assets/images/about0_blank.jpg" width="100%" loop muted autoplay preload="auto" style="position: absolute;
                                                                            top: 0;
                                                                            left: 0;
                                                                            min-width: 100%;
                                                                            min-height: 100%;
                                                                            width: auto;
                                                                            height: auto;
                                                                            z-index: -1;">
          <source src="@/assets/videos/about_background.mp4" type="video/mp4" />
       </video>
        <!-- <img v-if="this.$store.state.loadedVideoData == null || this.$store.state.loadedVideoData.length == 0" 
             src="@/assets/images/back_01.jpg" style="position: absolute;width: 100%;height: 100%;"> -->
        <div class="c-faq-schedule__footer-wrapper" style="position: absolute;width:100%;bottom:0;display:block">
          <div style="width:100%;display:flex;height:10vh;position: relative;margin-left:3.5vw;">
              <img src="@/assets/images/mountain2.png" style="position: absolute;width: 80%;bottom:0;opacity:1;margin-left:5vw;height:6.5vh">
              <img src="@/assets/images/mountain1.png" style="position: absolute;width: 80%;bottom:0;opacity:1;margin-left:1.4vw;height:6vh">
              
              <div style="width:16%;margin-top:5.8vh; cursor:pointer;" @mouseenter="hoverIndex(0)" @mouseleave="removehoverIndex">
                <div  class="avatar_img" :class="{'active':hover_index === 0}">
                  <img src="@/assets/images/aboutsection0_icon1.png" style="width:4vh;height:4vh">
                  <a style="margin-left:10px">Born in<br>Swiss Alps</a>
                </div>
                <div class="clock_year year0" :class="{'active':hover_index === 0}">2011</div>
                <Clock :hover_status="hover_status" :hover_init_index="0" :hover_current_index = "hover_index" @hoverIndex="hoverIndex(0)" @removeHoverIndex="removehoverIndex"/>
              </div>
              <div style="width:16%;margin-top:1.5vh;margin-left:0.3vw; cursor:pointer;"  @mouseenter="hoverIndex(1)" @mouseleave="removehoverIndex">
                <div class="avatar_img" :class="{'active':hover_index === 1}">
                  <img src="@/assets/images/aboutsection0_icon2.png" style="width:4vh;height:4vh" >
                  <a style="margin-left:10px">US<br>Coperation</a>
                </div>
                <div class="clock_year year1" :class="{'active':hover_index === 1}">2016</div>
                <Clock :hover_status="hover_status" :hover_init_index="1" :hover_current_index = "hover_index"  @hoverIndex="hoverIndex(1)" @removeHoverIndex="removehoverIndex"/>
              </div>
              <div style="width:16%;margin-top:-0.3vh;margin-left:0.2vw; cursor:pointer;" @mouseenter="hoverIndex(2)" @mouseleave="removehoverIndex">
                <div style="margin-top: -3vh;position: absolute;display: flex;color:white;" class="avatar_img" :class="{'active':hover_index === 2}">
                  <img src="@/assets/images/aboutsection0_icon3.png">
                </div>
                <div class="clock_year year2" :class="{'active':hover_index === 2}">2018</div>
                <Clock :hover_status="hover_status" :hover_init_index="2" :hover_current_index = "hover_index"  @hoverIndex="hoverIndex(2)" @removeHoverIndex="removehoverIndex"/>
              </div>
              <div style="width:16%;margin-top:1.5vh; cursor:pointer;" @mouseenter="hoverIndex(3)" @mouseleave="removehoverIndex">
                <div class="avatar_img" :class="{'active':hover_index === 3}">
                  <img src="@/assets/images/aboutsection0_icon4.png" >
                </div>
                <div class="clock_year year3" :class="{'active':hover_index === 3}">2019</div>
                <Clock :hover_status="hover_status" :hover_init_index="3" :hover_current_index = "hover_index"  @hoverIndex="hoverIndex(3)" @removeHoverIndex="removehoverIndex"/>
              </div>
              <div style="width:16%;margin-top:-0.1vh; cursor:pointer;" @mouseenter="hoverIndex(4)" @mouseleave="removehoverIndex">
                <div class="avatar_img" :class="{'active':hover_index === 4}">
                  <img src="@/assets/images/aboutsection0_icon5.png" style="width:4vh;height:4vh">
                  <a style="margin-left:10px">Years in global<br>Design business</a>
                </div>
                <div class="clock_year year4" :class="{'active':hover_index === 4}">2021</div>
                <Clock :hover_status="hover_status" :hover_init_index="4" :hover_current_index = "hover_index"  @hoverIndex="hoverIndex(4)" @removeHoverIndex="removehoverIndex"/>
              </div>
              <div style="width:16%;margin-top:10px; cursor:pointer;" @mouseenter="hoverIndex(5)" @mouseleave="removehoverIndex">
                <div style="" class="avatar_img" :class="{'active':hover_index === 5}">
                  <img src="@/assets/images/aboutsection0_icon6.png" style="width:4vh;height:4vh">
                  <a style="margin-left:10px">Design professionals<br>out there</a>
                </div>
                <div class="clock_year year5" :class="{'active':hover_index === 5}">2022</div>
                <Clock :hover_status="hover_status" :hover_init_index="5" :hover_current_index = "hover_index"  @hoverIndex="hoverIndex(5)" @removeHoverIndex="removehoverIndex"/>
              </div>
          </div>
          <div style="background:rgb(6 6 6 / 48%); backdrop-filter: blur(50px); padding: 35px var(--padding); width:100%;display:flex">
              <div style="width:16%;z-index:4">
                  <div class="c-partners__review-role section0_bottom_subtitle"  :class="{'active':hover_index === 0}">
                    Started as a Swiss
                    Design butique in Zurich
                  </div>
              </div>
              <div style="width:16%;z-index:4">
                  <div class="c-partners__review-role section0_bottom_subtitle"  :class="{'active':hover_index === 1}">
                    Open 3 offices include Zurich,
                    Munich and San Francisco.
                    Moved HQ to SF
                  </div>
              </div>
              <div style="width:16%;z-index:4">
                  <div class="c-partners__review-role section0_bottom_subtitle"  :class="{'active':hover_index === 2}">
                    Become Agency of the year
                    and win Red Dot Awards
                    for best product design
                  </div>
              </div>
              <div style="width:16%;z-index:4">
                  <div class="c-partners__review-role section0_bottom_subtitle"  :class="{'active':hover_index === 3}">
                    Celebration 60 people
                    team in San Francisco office
                  </div>
              </div>
              <div style="width:16%;z-index:4">
                  <div class="c-partners__review-role section0_bottom_subtitle"  :class="{'active':hover_index === 4}">
                    Celebration of 10 Years in
                    business. And working for 5x
                    Fortune 100 companies at
                    the same time
                  </div>
              </div>
              <div style="width:16%;z-index:4">
                  <div class="c-partners__review-role section0_bottom_subtitle"  :class="{'active':hover_index === 5}">
                    Official 27th Webby Winner 
                    for Best Visual Design
                  </div>
              </div>
          </div>
        </div>
    </div>
  </transition>
</template>
<script>
/* eslint-disable */
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import { convertNewLineToBreak } from '@/helpers/helpers';
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import Clock from '@/components/AboutView/AboutSection0/Clock.vue';
export default {
  name: 'AboutSection0',
  components: {
    AnimatedBackground,
    convertNewLineToBreak,
    ServicesSectionIntro,
    Clock
  },
  data() {
    return {
      hover_index: -1,
      hover_status: false,
    };
  },
  props: {
      activeSectionIndex: {
        type: Number,
        required: true,
      },
    },
  computed:{
    activeStatus(){
      if(this.activeSectionIndex === 0)
        this.$store.commit('SET_NAV_LIGHT', false);
      return this.activeSectionIndex === 0;
    },
    activeSectionVideoUrls() {
      console.log(this.$store.state.loadedVideoData[0]?.loop_video);
      return this.$store.state.loadedVideoData[this.activeSectionIndex]?.loop_video || [];
    },
  },
  methods:{
    convertNewLineToBreak,
    hoverIndex(index) {
      this.hover_status = true;
      this.hover_index = index;
    },
    removehoverIndex() {
      this.hover_status = false;
      this.hover_index = -1;
    },
    copyLink(){
      this.$copyText('https://milkinside.com/').then(() => {
        this.$refs.copy_link.innerHTML = "COPIED"
        console.log('link copied to clipboard');
      }).catch(() => {
        console.error('Failed to link to clipboard');
      });
    }
  }
};
</script>
<style scoped>
.title_content{
  margin-right:12px;font-size: 2.6rem;font-weight:500
}

.avatar_img{
  margin-top: -3vh;position: absolute;display: flex;color:white;
  opacity: 0;
  transition: all 0.5s cubic-bezier(.71,.17,.14,.93);
  &.active{
    transform: translateY(-60px);
    opacity: 1;
  }
}
@media (max-width: 960px){
  .root_section {
      display: none;
  }
}

.copylink_img{
  width:40px;
}
.section0_fade-enter-active { width: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.section0_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.section0_fade-enter { opacity: 0; }
.section0_fade-leave-to {opacity: 0;}
  .clock_year{
    color:white;margin-left:10px;
    transition: all 0.5s cubic-bezier(.71,.17,.14,.93);
    &.active{
      transform: translateY(-30px);
    }
  }
  .section0_bottom_subtitle{
    color:#afaeae;padding:20px 30px;
    transition: all 0.5s cubic-bezier(.71,.17,.14,.93);
    &.active{
      color:white;
      transform: translateY(20px);
    }
  }
</style>

