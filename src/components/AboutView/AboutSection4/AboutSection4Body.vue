<!-- eslint-disable -->
<template>
  <div style="padding-top:40px; position:relative">
       <div v-if="activeStatus" class="aboutsection4_body_content">
          <transition name="slide_fade" mode="out-in">
            <div v-show="slideIndex === 0" class="slide_section">
                <div class="aboutsection4_body_title">
                  27th Webby Awards <br>
                </div>
                Milkinside is honored to have won the 2023 Webby Award<br>
                for "Best Visual Design and Product" for our work on the <br>
                Scandinavian Airlines official mobile app.<br>
            </div>
          </transition>
          <transition name="slide_fade" mode="out-in">
            <div v-show="slideIndex === 1" class="slide_section">
                <div class="aboutsection4_body_title">
                  2022 Red Dot Awards <br>
                </div>
                Milkinside is honored to have won the 2023 Webby Award <br>
                for "Best Visual Design and Product" for our work on the <br>
                Scandinavian Airlines official mobile app.<br>
            </div>
          </transition>
          <transition name="slide_fade" mode="out-in">
            <div v-show="slideIndex === 2" class="slide_section">
                <div class="aboutsection4_body_title">
                  26th Webby Awards<br>
                </div>
                Milkinside honored by Webby for Apps and Software Best  <br>
                Voice Skill. This accolade reaffirms our commitment to  <br>
                innovative design and user-centric voice technology. Thank  <br>
                you, Webby Awards, for this honor. <br>
            </div>
          </transition>
          <transition name="slide_fade" mode="out-in">
            <div v-show="slideIndex === 3" class="slide_section">
                <div class="aboutsection4_body_title">
                  IF design awards 2022<br>
                </div>
                Special Award was given to only one company this year, <br>
                and we receive one for a unique and groundbreaking work <br>
                for the Smart Home AI assistant “Woohoo”. <br>
            </div>
          </transition>
          <transition name="slide_fade" mode="out-in">
            <div v-show="slideIndex === 4" class="slide_section">
                <div class="aboutsection4_body_title">
                  2022 CSS Design awards <br>
                </div>
                For best UI/UX/Service design. This recognition fuels our <br>
                commitment to crafting exceptional digital experiences.<br>
            </div>
          </transition>
          <transition name="slide_fade" mode="out-in">
            <div v-show="slideIndex === 5" class="slide_section">
                <div class="aboutsection4_body_title">
                  Agency of the Year 2018<br>
                </div>
                Milkinside was win in 3 categories of MUX design awards <br>
                and become agency of the year. For official Airbus <br>
                application design iflyA380. <br>
            </div>
          </transition>
          <transition name="slide_fade" mode="out-in">
            <div v-show="slideIndex === 6" class="slide_section">
                <div class="aboutsection4_body_title">
                  FWA web site of the day <br>
                </div>
                We are honored to have received the prestigious FWA <br>
                Website of the Day award multiple times. As an agency <br>
                deeply committed to innovation, these accolades hold <br>
                special significance for us
            </div>
          </transition>
          <transition name="slide_fade" mode="out-in">
            <div v-show="slideIndex === 7" class="slide_section">
                <div class="aboutsection4_body_title">
                  Agency of the Year 2018<br>
                </div>
                Milkinside was win in 3 categories of MUX design awards <br>
                and become agency of the year. For official Airbus <br>
                application design iflyA380. <br>
            </div>
          </transition>
          <transition name="slide_fade" mode="out-in">
            <div v-show="slideIndex === 8" class="slide_section">
                <div class="aboutsection4_body_title">
                  22nd Annual Webby Awards <br>
                </div>
                ifly A380 iOS app Honoree in the travel category at 2nd <br>
                Annual Webby Awards, the leading international award <br>
                celebrating excellence on the internet.<br>
            </div>
          </transition>
       </div>       
  </div>
</template>

<script>
/* eslint-disable */
import { bounceAnimationY } from '@/helpers/animations';

export default {
  name: 'AboutSection4Body',
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
    slideIndex:{
      type: Number,
      required: true,
    },
    intervalStatus:{
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
    };
  },
  methods: {    
    changeSlides() {
      let slide_index = (this.slideIndex - 1 + 9) % 9;
      this.$emit('changeSlideIndex', slide_index);
    },
  },
  computed:{
    activeStatus(){
      this.interval = setInterval(() => {this.changeSlides()}, 2500);
      return this.activeSectionIndex === 4;
    },
  },
  watch: {
    intervalStatus(newValue, oldValue){
      if(newValue === true){
        clearInterval(this.interval);
        setTimeout(() => {
          this.interval = setInterval(() => {this.changeSlides()}, 2500);
          this.$emit('stopInterval', false);
        }, 3000)
      }
    },    
  },
  beforeDestroy(){
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
.slide_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.slide_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.slide_fade-enter{ transform: translateX(650px); opacity: 0;}
.slide_fade-leave-to{ transform: translateX(-650px); opacity: 0;}
.slide_section{
  position: absolute;
}
.aboutsection4_body_content{
    margin-top:5vh;
    position: relative;
    font-size: 20px;
    font-weight: 700;
}
.aboutsection4_body_title{
  margin-bottom:20px;
  font-size: max(4.7rem, 32px);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: normal;
}
.c-what-we-do__products {
  overflow-y: hidden;
}

.c-what-we-do__products > div {
  display: contents;
}
</style>
