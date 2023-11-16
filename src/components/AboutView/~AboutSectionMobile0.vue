<template>
  <!-- eslint-disable -->
  <transition appear name="section_fade" mode="out-in">
      <div v-if="activeStatus" class="c-services__section c-services__section--no-padding c-what-we-do-mobile c-services__section--mobile-section" style="top:0">
        <div class="c-what-we-do-mobile__intro-wrapper" style="z-index:2;color:white;margin-top:10vh">
          <div class="c-intro">
            <div class="c-line__wrapper" data-start-divider="" data-section-item="">
              <div class="c-line"></div>
            </div>
            <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
              <div class="c-intro__content" data-intro-content="">
                <div class="c-intro__left"><p class="c-intro__number">01</p>
                  <div class="c-line__wrapper">
                    <div class="c-intro__line c-line"></div>
                  </div>
                  <p class="c-intro__text">THIS IS MILKINSIDE</p></div>
              </div>
              <!-- <transition name="slide_fade" mode="out-in"> -->
                <h2 class="main-hd">Powerhouse of excellence in design spanning
                San Francisco, New York, Los Angeles, and Zurich. Armed
                with cutting-edge technology, we craft extraordinary
                brands, products, and experiences. Our mission?
                To empower our clients with the most potent solutions
                that obliterate challenges and seize opportunities like never before.
              </h2>
              <!-- </transition> -->
            </div>
          </div>
        </div>
        <img src="@/assets/images/about0-bg.jpg" class="back_img" style="">
        <div class="bottom_section">
             <transition-group name="mountain_fade" mode="out-in">
                <img v-show="slide_index === 0" key="mountain1_1" src="@/assets/images/1_1.png" style="height: 50px; width: 100%; margin-left:12vw;top: -50px; position: absolute;">
                <img v-show="slide_index === 0" key="mountain2_1" src="@/assets/images/2_1.png" style="height: 50px; width: 100%; margin-left:12vw;top: -50px; position: absolute;">
             </transition-group>
             <transition name="watch_fade" mode="out-in">
                <img v-show="slide_index === 0" key="clock1" src="@/assets/images/about-time.png" style="margin-left: 5vw;margin-top: -25px;position: absolute;">
              </transition>
             <transition name="avartar_fade" mode="out-in">
                <div v-show="slide_index === 0" style="margin-left: 6vw;margin-top: -120px;position: absolute;display: flex;color:white;">
                  <img src="@/assets/images/aboutsection0_icon1.png" >
                  <a style="margin-left:10px">Born in<br>Swiss Alps</a>
                </div>
             </transition>
             <transition name="text_fade" mode="out-in">
                <a v-show="slide_index === 0" style="margin-left: 7vw;margin-top: -55px;position: absolute;color:white;">2011</a>
             </transition>

            
            <transition-group name="mountain_fade" mode="out-in">
                <img v-show="slide_index === 1" key="mountain1_2" src="@/assets/images/1_1.png" style="margin-left: -20vw;height: 50px;width:130%;top: -50px; position: absolute;">
                <img v-show="slide_index === 1" key="mountain2_2" src="@/assets/images/2_1.png" style="height: 50px; width: 130%; margin-left:-23vw; top: -50px; position: absolute;">
            </transition-group>
            <transition name="watch_fade" mode="out-in">
                <img v-show="slide_index === 1" key="clock2" src="@/assets/images/about-time.png" style="margin-left: 13vw;margin-top: -70px;position: absolute;">
              </transition>
             <transition name="avartar_fade" mode="out-in">
                <div v-show="slide_index === 1"  style="margin-left: 14vw;margin-top: -160px;position: absolute;display: flex;color:white;">
                  <img src="@/assets/images/aboutsection0_icon2.png">
                  <a style="margin-left:10px">US<br>Coperation</a>
                </div>
             </transition>
             <transition name="text_fade" mode="out-in">
                <a v-show="slide_index === 1" style="margin-left: 15vw;margin-top: -95px;position: absolute;color:white;">2016</a>
             </transition>

             
              <transition-group name="mountain_fade" mode="out-in">
                <img v-show="slide_index === 2" key="mountain1_3" src="@/assets/images/1_3.png" style="height: 50px; width: 130%; top: -50px; position: absolute;">
                <img v-show="slide_index === 2" key="mountain2_3" src="@/assets/images/2_3.png" style="height: 50px; width: 100%; top: -50px; position: absolute;">
              </transition-group>
              <transition name="watch_fade" mode="out-in">
                <img v-show="slide_index === 2" key="clock3" src="@/assets/images/about-time.png" style="margin-left: 16vw;margin-top: -75px;position: absolute;">
             </transition>
             <transition name="avartar_fade" mode="out-in">
                <div v-show="slide_index === 2"  style="margin-left: 17vw;margin-top: -160px;position: absolute;">
                  <img src="@/assets/images/aboutsection0_icon3.png">
                </div>
             </transition>
             <transition name="text_fade" mode="out-in">
                <a v-show="slide_index === 2" style="margin-left: 18vw;margin-top: -95px;position: absolute;color:white;">2018</a>
             </transition>


             <transition-group name="mountain_fade" mode="out-in">
                <img v-show="slide_index === 3" key="mountain1_4" src="@/assets/images/1_4.png" style="height: 50px; width: 100%; top: -50px; position: absolute;">
                <img v-show="slide_index === 3" key="mountain2_4" src="@/assets/images/2_4.png" style="height: 50px; width: 100%; top: -50px; position: absolute;">
            </transition-group>
            <transition name="watch_fade" mode="out-in">
                <img v-show="slide_index === 3" key="clock4" src="@/assets/images/about-time.png" style="margin-left: 35vw;margin-top: -65px;position: absolute;">
             </transition>
             <transition name="avartar_fade" mode="out-in">
                <div v-show="slide_index === 3"  style="margin-left: 36vw;margin-top: -160px;position: absolute;">
                  <img src="@/assets/images/aboutsection0_icon4.png">
                </div>
             </transition>
             <transition name="text_fade" mode="out-in">
                <a v-show="slide_index === 3" style="margin-left: 37vw;margin-top: -95px;position: absolute;color:white;">2019</a>
             </transition>

             
              <transition-group name="mountain_fade" mode="out-in">
                <img v-show="slide_index === 4" key="mountain1_5" src="@/assets/images/1_5.png" style="height: 50px; width: 100%; top: -50px; position: absolute;">
                <img v-show="slide_index === 4" key="mountain2_5" src="@/assets/images/2_5.png" style="height: 50px; width: 100%; top: -50px; position: absolute;">
              </transition-group>
              <transition name="watch_fade" mode="out-in">
                <img v-show="slide_index === 4" key="clock5" src="@/assets/images/about-time.png" style="margin-left: 36vw;margin-top: -65px;position: absolute;">
             </transition>
             <transition name="avartar_fade" mode="out-in">
                <div v-show="slide_index === 4"  style="margin-left: 37vw;margin-top: -160px;position: absolute;display: flex;color:white;">
                  <img src="@/assets/images/aboutsection0_icon5.png">
                  <a style="margin-left:10px">Years in global<br>Design business</a>
                </div>
             </transition>
             <transition name="text_fade" mode="out-in">
                <a v-show="slide_index === 4" style="margin-left: 38vw;margin-top: -95px;position: absolute;color:white;">2021</a>
             </transition>

             
              <transition-group name="mountain_fade" mode="out-in">
                <img v-show="slide_index === 5" key="mountain1_6" src="@/assets/images/1_6.png" style="height: 50px; width: 100%; top: -50px; position: absolute;">
                <img v-show="slide_index === 5" key="mountain2_6" src="@/assets/images/2_6.png" style="height: 50px; width: 100%; top: -50px; position: absolute;margin-left:-25vw">
              </transition-group>
             <transition name="watch_fade" mode="out-in">
                <img v-show="slide_index === 5" key="clock6" src="@/assets/images/about-time.png" style="margin-left: 43vw;margin-top: -75px;position: absolute;">
             </transition>
             <transition name="avartar_fade" mode="out-in">
                <div v-show="slide_index === 5"  style="margin-left: 44vw;margin-top: -160px;position: absolute;display: flex;color:white;">
                  <img src="@/assets/images/aboutsection0_icon6.png">
                  <a style="margin-left:10px">Design professionals<br>out there</a>
                </div>
             </transition>
             <transition name="text_fade" mode="out-in">
                <a v-show="slide_index === 5" style="margin-left: 45vw;margin-top: -100px;position: absolute;color:white;">2022</a>
             </transition>

              <transition name="slide_fade" mode="out-in">
                <div v-show="slide_index === 0" class="bottom_content">Started as a Swiss Design <br> Butique in Zurich</div>
              </transition>
              <transition name="slide_fade" mode="out-in">
                <div v-show="slide_index === 1" class="bottom_content">Open 3 offices include Zurich,<br>Munich and San Francisco.<br>Moved HQ to SF</div>
              </transition>
              <transition name="slide_fade" mode="out-in">
                <div v-show="slide_index === 2" class="bottom_content">Become Agency of the year<br>and Win Red Awards for<br>best product design</div>
              </transition>
              <transition name="slide_fade" mode="out-in">
                <div v-show="slide_index === 3" class="bottom_content">Celebration 60 peopel<br>team in San Francisco office</div>
              </transition>
              <transition name="slide_fade" mode="out-in">
                <div v-show="slide_index === 4" class="bottom_content">Celebration of 10 Years in<br>business.And working for 5x<br>Fortune 100 companies at the<br>same time</div>
              </transition>
              <transition name="slide_fade" mode="out-in">
                <div v-show="slide_index === 5" class="bottom_content">Two-time if DESIGN Design <br>Awards Winner</div>      
              </transition>
        </div>
        <div style="width:100%;text-align: center;position: absolute;bottom:4vh;z-index: 2;">
          <div style="margin-right:auto;margin-left:auto;display: flex;width:100px">
              <div id="dot1" class="dots" style="border-radius: 3px; background: white;width: 18px;height: 4px;opacity:1;margin-right:8px"></div>
              <div id="dot2" class="dots" style="border-radius: 3px; background: white;width: 5px;height: 5px;opacity:0.4;margin-right:8px"></div>
              <div id="dot3" class="dots" style="border-radius: 3px; background: white;width: 5px;height: 5px;opacity:0.4;margin-right:8px"></div>
              <div id="dot4" class="dots" style="border-radius: 3px; background: white;width: 5px;height: 5px;opacity:0.4;margin-right:8px"></div>
              <div id="dot5" class="dots" style="border-radius: 3px; background: white;width: 5px;height: 5px;opacity:0.4;margin-right:8px"></div>
              <div id="dot6" class="dots" style="border-radius: 3px; background: white;width: 5px;height: 5px;opacity:0.4;margin-right:8px"></div>
          </div>
        </div>   
        <svg class="c-services__mobile-down-icon" width="18" height="47" fill="none" style="position:absolute;z-index:2;bottom: 10vh;">
          <use xlink:href="@/assets/sprites/icons.svg#mouse-down-white"></use>
        </svg>
      </div>
  </transition>
</template>
<script>
/* eslint-disable */
export default {
  name: 'AboutSectionMobile0',
  created() {
  },
  props: {
      activeSectionIndex: {
        type: Number,
        required: true,
      },
  },
  data() {
    return {
      slide_index:0
    }
  },
  methods: {    
    changeSlideIndex(){
        this.slide_index ++;
        if(this.slide_index >= 6)
          this.slide_index = 0;
        let dots = document.getElementsByClassName("dots");
        let index;
        if(dots && dots.length === 6){
          for (index = 0; index < 6; index++) {
            dots[index].style.opacity = 0.4;
            dots[index].style.width = '5px';
          }
          dots[this.slide_index].style.width = "18px";
          dots[this.slide_index].style.opacity = 1;
        }
    },
    dropdownToggle() {
      this.isOpened = !this.isOpened;
    },
  },
  computed:{
    activeStatus(){
      if(this.activeSectionIndex === 0){
        this.$store.commit('SET_NAV_LIGHT', false);
        this.interval = setInterval(this.changeSlideIndex, 2000);
      }else
        clearInterval(this.interval);

      return this.activeSectionIndex === 0;
    }
  },
  beforeDestroy(){
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
.mountain_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.mountain_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.mountain_fade-enter { opacity: 0;}
.mountain_fade-leave-to {opacity: 0;}

.watch_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.watch_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.watch_fade-enter { transform: translateY(100px); opacity: 0; }
.watch_fade-leave-to {transform: translateY(40px); opacity: 0;}

.avartar_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.avartar_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.avartar_fade-enter {transform: translateY(200px); opacity: 0; }
.avartar_fade-leave-to {transform: translateY(80px); opacity: 0;}

.text_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.text_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.text_fade-enter {transform: translateY(150px); opacity: 0; }
.text_fade-leave-to {transform: translateY(60px); opacity: 0;}

.section_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.section_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.section_fade-enter { opacity: 0; }
.section_fade-leave-to { opacity: 0;}

.slide_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.slide_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.slide_fade-enter{ transform: translateX(450px); opacity: 0;}
.slide_fade-leave-to{ transform: translateX(-450px); opacity: 0;}
.bottom_content{
  position: absolute;
  height: 15vh;
  font-size:4rem;
  margin-left: 15vw;
  margin-top: 7vw;
  color: white;
  font-weight: 100;
}
.watch_img{
  position: relative;
    margin-left: 10vw;
    margin-top: -25px
}
.bottom_section{
  background: rgb(0 0 0 / 50%);
  backdrop-filter: blur(10px);
  height:25vh;
  width:100%; 
  margin-top:auto;
  z-index: 2;
}
.back_img{
  top: 0; 
  height: 100vh; 
  width:100% ; 
  object-fit: cover; 
  position: absolute;
  z-index:1
}
.about0-bg{
  color: white;
  z-index: 10 !important;
  height: 100vh;
}
.about0-line{
  margin-top: 23rem;
}
.main-hd{
  font-size: 4.5rem;
  margin-top: 2.5vh;
}
.slide{
  margin-top: 30rem;
  bottom: 0px;
  /* background-color: rgba(0,0,0,0.8); */
  justify-content: flex-start;
}
.time-img{
  margin-top: -10rem;
}
.clock-desc{
  color: gray;
}
.c-what-we-do-mobile__sections{
  height: auto;
}
</style>
