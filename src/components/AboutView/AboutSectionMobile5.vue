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
                <div class="c-intro__left"><p class="c-intro__number">06</p>
                  <div class="c-line__wrapper">
                    <div class="c-intro__line c-line"></div>
                  </div>
                  <p class="c-intro__text">MENTORSHIP</p></div>
              </div>
            </transition>
            <transition appear name="body_title_fade" mode="out-in">
              <h2 v-if="activeStatus" class="main-hd">The Genesis of Design Excellence</h2> 
            </transition>
            <br>
            <transition appear name="body_content_fade" mode="out-in">
              <div v-if="activeStatus" >
                <div class="row">
                  <div class="col2">
                    <h2 class="sub-hd">Getting Better at Listening?</h2> 
                      <div class="c-what-we-do__product-line">
                        <div class="c-what-we-do__product-line--bar"></div>
                        <div class="c-what-we-do__product-line--faded-bar"></div>
                      </div>
                  </div>
                  <div class="col1" style="text-align: end;">
                    <h2 class="no-hd">01</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col2">
                    <h2 class="sub-hd">Why a Discovery Process is Crucial.</h2> 
                      <div class="c-what-we-do__product-line">
                        <div class="c-what-we-do__product-line--bar"></div>
                        <div class="c-what-we-do__product-line--faded-bar"></div>
                      </div>
                  </div>
                  <div class="col1" style="text-align: end;">
                    <h2 class="no-hd">02</h2>
                  </div>
                </div>
                <div class="row">
                  <div class="col2">
                    <h2 class="sub-hd">Finding the Nrrative: On Storytelling in Design</h2> 
                      <div class="c-what-we-do__product-line">
                        <div class="c-what-we-do__product-line--bar"></div>
                        <div class="c-what-we-do__product-line--faded-bar"></div>
                      </div>
                  </div>
                  <div class="col1" style="text-align: end;">
                    <h2 class="no-hd">03</h2>
                  </div>
                </div> 
              </div>
            </transition>
            <br>
            <transition appear name="body_image_fade" mode="out-in">
              <div style="width:100%;position: relative; z-index: 2; height: 45vh;">
                <transition
                  name="slide_fade"
                  mode="out-in"
                >
                  <div v-show="activeStatus && slide_index === 0" >
                    <video  width="100%" autoplay loop class="video_style">
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
                <div v-show="activeStatus && slide_index === 1">
                      <video width="100%" autoplay loop class="video_style">
                            <source src="@/assets/videos/about_section6.mp4" type="video/mp4" />
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
                            <source src="@/assets/videos/about_section4.mp4" type="video/mp4" />
                            <track kind="captions" label="English captions" lang="en" default />
                            Your browser does not support the video tag.
                      </video>
                    </div>
                </transition>
                <div v-show="activeStatus" style="margin-right:auto;margin-left:auto;display: flex;width:100px;position: absolute;top:40vh;margin-left:40vw">
                    <div id="dot3" class="dots5" style="border-radius: 3px; background: white;width: 18px;height: 4px;opacity:1;margin-right:8px"></div>
                    <div id="dot4" class="dots5" style="border-radius: 3px; background: white;width: 5px;height: 5px;opacity:0.4;margin-right:8px"></div>
                    <div id="dot5" class="dots5" style="border-radius: 3px; background: white;width: 5px;height: 5px;opacity:0.4;margin-right:8px"></div>          
                </div>
              </div>   
            </transition>
            <br>
            <transition appear name="bottom_line_fade" mode="out-in">
              <div v-if="activeStatus" class="c-line__wrapper " style="margin: 8rem 0px;" data-start-divider="" data-section-item="">
                <div class="c-line"></div>
              </div>
            </transition>
            <transition appear name="bottom_fade" mode="out-in">
              <div v-if="activeStatus" >
                <div class="row">
                  <div class="col2">
                    <h2 class="sub-hd">Active  <br> Engagement</h2> 
                  </div>
                  <div class="col1" >
                  </div>
                </div> 
                <div class="row">
                  <div class="col2">
                  </div>
                  <div class="col2" >
                    <h2 class="sub-hd">  Empathetic <br> Understanding</h2> 
                  </div>
                </div> 
                <div class="row">
                  <div class="col2" >
                    <h2 class="sub-hd"> Communicating  <br> Purpose</h2> 
                  </div>
                  <div class="col1">
                  </div>                
                </div> 
                <div class="row" style="margin-bottom:30rem">
                  <div class="col2">
                  </div>
                  <div class="col2" >
                    <h2 class="sub-hd">  Human-Centric <br> Design </h2> 
                  </div>
                </div> 
              </div>
            </transition>
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
  name: 'AboutSectionMobile5',
  data() {
    return {
      slide_index:0
    }
  },
  methods: {    
    changeSlideIndex(){
        this.slide_index ++;
        if(this.slide_index >= 3)
          this.slide_index = 0;    
          let dots = document.getElementsByClassName("dots5");
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
  },
  props: {
      activeSectionIndex: {
        type: Number,
        required: true,
      },
  },  
  computed:{
    activeStatus(){
      if(this.activeSectionIndex === 5){
        this.$store.commit('SET_NAV_LIGHT', true);
        this.interval = setInterval(this.changeSlideIndex, 2000);
      }else
        clearInterval(this.interval);

      return this.activeSectionIndex === 5;
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

.bottom_line_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.bottom_line_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.bottom_line_fade-enter { transform:translateY(150px);opacity: 0; }
.bottom_line_fade-leave-to { transform:translateY(150px); opacity: 0;}

.bottom_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.bottom_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.bottom_fade-enter { transform:translateX(350px);opacity: 0; }
.bottom_fade-leave-to { transform:translateX(350px); opacity: 0;}
.main-hd{
  font-size: 48px;
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
}
.no-hd{
  font-size: 28px;
  font-weight: 500;
  color: darkgray;
}
.row{
  display: flex;
  margin-top: 0;
}
.col1{
  flex: 1;
}
.col2{
  flex: 4;
}
</style>
