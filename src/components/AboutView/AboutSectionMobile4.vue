<template>
  <!-- eslint-disable -->
  <div class="c-services__section c-services__section--no-padding c-what-we-do-mobile c-services__section--mobile-section">
    <div class="c-what-we-do-mobile__intro-wrapper">
      <div class="c-intro">
        <transition appear name="top_line_fade" mode="out-in">
          <div v-if="activeStatus" class="c-line__wrapper" data-start-divider="" data-section-item="">
            <div class="c-line"></div>
          </div>
        </transition>
        
        <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
          <transition appear name="intro_fade" mode="out-in">
            <div v-if="activeStatus" class="c-intro__content" data-intro-content="">
              <div class="c-intro__left"><p class="c-intro__number">05</p>
                <div class="c-line__wrapper">
                  <div class="c-intro__line c-line"></div>
                </div>
                <p class="c-intro__text">AWARDS</p></div>
            </div>
          </transition>
          <div style="width:100%;position: relative;z-index: 2;margin-top:2rem;height: 57rem;">
              <transition
                  name="title_slide_fade"
                  mode="out-in"
              >
                  <div v-show="activeStatus && title_slide_index === 0" style="position: absolute;">
                    <h2 class="main-hd">27th Webby Awards</h2> 
                    <br>
                    <p>Milkinside is honored to have won the 2023 Webby Award for "Best Visual Design and Product" for our work on the Scandinavian Airlines official mobile app.. </p>
                  </div>
              </transition>
              
              <transition
                  name="title_slide_fade"
                  mode="out-in"
              >
                  <div v-show="activeStatus && title_slide_index === 1" style="position: absolute;">
                    <h2 class="main-hd">2022 Red Dot Awards</h2> 
                    <br>
                    <p> Milkinside is honored to have won the 2023 Webby Award for "Best Visual Design and Product" for our work on the Scandinavian Airlines official mobile app.</p>
                  </div>
              </transition>

              <transition
                  name="title_slide_fade"
                  mode="out-in"
              >
                  <div v-show="activeStatus && title_slide_index === 2" style="position: absolute;">
                    <h2 class="main-hd">26th Webby Awards</h2> 
                    <br>
                    <p> Milkinside honored by Webby for Apps and Software Best Voice Skill. This accolade reaffirms our commitment to innovative design and user-centric voice technology. Thank you, Webby Awards, for this honor.</p>
                  </div>
              </transition>

              <transition
                  name="title_slide_fade"
                  mode="out-in"
              >
                  <div v-show="activeStatus && title_slide_index === 3" style="position: absolute;">
                    <h2 class="main-hd">IF design awards 2022</h2> 
                    <br>
                    <p>Special Award was given to only one company this year, and we receive one for a unique and groundbreaking work for the Smart Home AI assistant “Woohoo”.</p>
                  </div>
              </transition>
              
              <transition
                  name="title_slide_fade"
                  mode="out-in"
              >
                  <div v-show="activeStatus && title_slide_index === 4" style="position: absolute;">
                    <h2 class="main-hd">2022 CSS Design awards</h2> 
                    <br>
                    <p>For best UI/UX/Service design. This recognition fuels our commitment to crafting exceptional digital experiences.</p>
                  </div>
              </transition>

              <transition
                  name="title_slide_fade"
                  mode="out-in"
              >
                  <div v-show="activeStatus && title_slide_index === 5" style="position: absolute;">
                    <h2 class="main-hd">Agency of the Year 2018</h2> 
                    <br>
                    <p>Milkinside was win in 3 categories of MUX design awards and become agency of the year. For official Airbus application design iflyA380.</p>
                  </div>
              </transition>

              <transition
                  name="title_slide_fade"
                  mode="out-in"
              >
                  <div v-show="activeStatus && title_slide_index === 6" style="position: absolute;">
                    <h2 class="main-hd">FWA web site of the day</h2> 
                    <br>
                    <p>We are honored to have received the prestigious FWA Website of the Day award multiple times. As an agency deeply committed to innovation, these accolades hold special significance for us</p>
                  </div>
              </transition>

              <transition
                  name="title_slide_fade"
                  mode="out-in"
              >
                  <div v-show="activeStatus && title_slide_index === 7" style="position: absolute;">
                    <h2 class="main-hd">Agency of the Year 2018</h2> 
                    <br>
                    <p>Milkinside was win in 3 categories of MUX design awards and become agency of the year. For official Airbus application design iflyA380.</p>
                  </div>
              </transition>

              <transition
                  name="title_slide_fade"
                  mode="out-in"
              >
                  <div v-show="activeStatus && title_slide_index === 8" style="position: absolute;">
                    <h2 class="main-hd"> 22nd Annual Webby Awards </h2> 
                    <br>
                    <p>ifly A380 iOS app Honoree in the travel category at 2nd Annual Webby Awards, the leading international award celebrating excellence on the internet.</p>
                  </div>
              </transition>
          </div>
          <transition appear name="body_image_fade" mode="out-in">
            <div v-if="activeStatus" >
              <img src="@/assets/images/awards.png"  class="award-img" alt="awards" width="100%">
              <img src="@/assets/images/awards-card.png"  class="award-img" alt="awards" width="100%">              
            </div>
          </transition>

          <div style="width:100%;position: relative;margin-bottom:30rem;z-index: 2;margin-top:12rem;height: 45vh;">
            <transition
              name="slide_fade"
              mode="out-in"
            >
              <div v-show="activeStatus && slide_index === 0" >
                <video  width="100%" autoplay loop class="video_style">
                      <source src="@/assets/videos/about_section4.mp4" type="video/mp4" />
                      <track kind="captions" label="English captions" lang="en" default />
                      Your browser does not support the video tag.
                </video>
              </div>
            </transition>
            <transition
              name="slide_fade"
              mode="out-in"
            >
             <div v-show="activeStatus && slide_index === 1">
                  <video width="100%" autoplay loop class="video_style">
                        <source src="@/assets/videos/about_section5.mp4" type="video/mp4" />
                        <track kind="captions" label="English captions" lang="en" default />
                        Your browser does not support the video tag.
                  </video>
              </div>
            </transition>
            <transition
              name="slide_fade"
              mode="out-in"
            >
               <div v-show="activeStatus && slide_index === 2">
                  <video width="100%" autoplay loop class="video_style">
                        <source src="@/assets/videos/about_section6.mp4" type="video/mp4" />
                        <track kind="captions" label="English captions" lang="en" default />
                        Your browser does not support the video tag.
                  </video>
                </div>
            </transition>
            <div v-show="activeStatus" style="margin-right:auto;margin-left:auto;display: flex;width:100px;position: absolute;top:40vh;margin-left:40vw">
                <div id="dot1" class="dots" style="border-radius: 3px; background: white;width: 18px;height: 4px;opacity:1;margin-right:8px"></div>
                <div id="dot2" class="dots" style="border-radius: 3px; background: white;width: 5px;height: 5px;opacity:0.4;margin-right:8px"></div>
                <div id="dot3" class="dots" style="border-radius: 3px; background: white;width: 5px;height: 5px;opacity:0.4;margin-right:8px"></div>          
            </div>
          </div>   
        </div>
      </div>
    </div>
    <!-- <svg class="c-services__mobile-down-icon" width="18" height="47" fill="none" style="position:absolute;z-index:2;bottom:250px">
      <use xlink:href="@/assets/sprites/icons.svg#mouse-down"></use>
    </svg> -->
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'AboutSectionMobile4',
  data() {
    return {
      interval: null,
      title_interval: null,
      slide_index: 0,
      title_slide_index: 0,
      body_contents:[
        {title:"German Design Award 2022", description:"Special Award was given to only one company this year,and we receive one for a unique and groundbreaking work for the Airbus Tripset"},
        {title:"Red Dot Design Award 2022", description:"Award was given to only one company this year, and we receive one for a unique and broundbreaking work for the Airbus Tripset"},
        {title:"Red Dot Design Award 2023", description:"The Award was given to only one company this year, and we receive one for a unique and groundbreaking work for the SAS iOS application"},
      ],
    }
  },
  methods: {    
    changeSlideIndex(){
        this.slide_index ++;
        if(this.slide_index >= 3)
          this.slide_index = 0;    
          let dots = document.getElementsByClassName("dots");
        let index;
        if(dots && dots.length === 3){
          for (index = 0; index < 3; index++) {
            dots[index].style.opacity = 0.4;
            dots[index].style.width = '5px';
          }
          dots[this.slide_index].style.width = "18px";
          dots[this.slide_index].style.opacity = 1;
        }   
    },    
    changeTitleSlideIndex(){
      this.title_slide_index ++;
        if(this.title_slide_index >= 9)
          this.title_slide_index = 0;    
    }
  },
  props: {
      activeSectionIndex: {
        type: Number,
        required: true,
      },
  },  
  computed:{
    activeStatus(){
      if(this.activeSectionIndex === 4){
        this.$store.commit('SET_NAV_LIGHT', true);
        this.interval = setInterval(this.changeSlideIndex, 2000);
        this.title_interval = setInterval(this.changeTitleSlideIndex, 2000);
      }else{
        clearInterval(this.interval);
        clearInterval(this.title_interval);
      }

      return this.activeSectionIndex === 4;
    }
  },
  
};
</script>

<style scoped>
.video_style{
  position: absolute;
  height: 45vh;
  border-radius: 30px;
  object-fit: cover;
}

.slide_area_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.slide_area_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.slide_area_fade-enter{ transform: translateX(450px); opacity: 0;}
.slide_area_fade-leave-to{ transform: translateX(-450px); opacity: 0;}

.slide_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.slide_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.slide_fade-enter{ transform: translateX(450px); opacity: 0;}
.slide_fade-leave-to{ transform: translateX(-450px); opacity: 0;}

.title_slide_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.title_slide_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.title_slide_fade-enter{ transform: translateX(-450px); opacity: 0;}
.title_slide_fade-leave-to{ transform: translateX(450px); opacity: 0;}


.top_line_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.top_line_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.top_line_fade-enter { transform:translateY(30px); opacity: 0; }
.top_line_fade-leave-to {transform:translateY(30px); opacity: 0;}

.intro_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { transform:translateY(120px);opacity: 0; }
.intro_fade-leave-to { transform:translateY(120px); opacity: 0;}

.body_title_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body_title_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_title_fade-enter { transform:translateY(150px);opacity: 0; }
.body_title_fade-leave-to { transform:translateY(150px); opacity: 0;}

.body_content_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body_content_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_content_fade-enter { transform:translateX(350px);opacity: 0; }
.body_content_fade-leave-to { transform:translateX(350px); opacity: 0;}

.body_image_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body_image_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_image_fade-enter { transform:translateX(-350px);opacity: 0; }
.body_image_fade-leave-to { transform:translateX(-350px); opacity: 0;}


.main-hd{
  font-size: 40px;
  font-weight: 600;
  margin-top: 5rem;
}
.about0-line{
  margin-top: 23rem;
}
.award-img{
  margin-top: 10rem;

}
.sub-hd{
  font-size: 24px;
  font-weight: 500;
  margin-top: 5rem;
}

</style>
