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
        <transition appear name="intro_fade" mode="out-in">
            <div v-if="activeStatus" class="c-intro__content__wrapper" data-intro-content-wrapper="">
              <div class="c-intro__content" data-intro-content="">
                <div class="c-intro__left"><p class="c-intro__number">03</p>
                  <div class="c-line__wrapper">
                    <div class="c-intro__line c-line"></div>
                  </div>
                  <p class="c-intro__text">VALUES</p></div>
              </div>
            </div>
        </transition>
      </div>
    </div>   
    <transition appear name="body_content_fade" mode="out-in">
      <div v-if="activeStatus" class="c-what-we-do-mobile__sections" style="margin-top:20px;position:relative">
        <transition
          name="slide_fade"
          mode="out-in"
        >
          <div v-show="slide_index === 0" class="c-what-we-do-mobile__section" style="margin-top: -30rem;">
            <video width="100%" class="mobile-service-product-video" autoplay loop>
                  <source src="@/assets/videos/service-sec-2-video-1.mp4" type="video/mp4" />
                  <track kind="captions" label="English captions" lang="en" default />
                  Your browser does not support the video tag.
            </video>
            <div class="c-what-we-do-mobile__section-index">01</div>
            <div class="c-what-we-do-mobile__section-title">Perfection</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description" style="font-weight: 600;">
                Our commitment to creating designs that deeply resonate with people is unwavering.
            </div>
          </div>
        </transition>
        <transition
          name="slide_fade"
          mode="out-in"
        >
          <div v-show="slide_index === 1" class="c-what-we-do-mobile__section" style="margin-top: -30rem;">
            <video width="100%" class="mobile-service-product-video" autoplay loop>
                  <source src="@/assets/videos/service-sec-2-video-2.mp4" type="video/mp4" />
                  <track kind="captions" label="English captions" lang="en" default />
                  Your browser does not support the video tag.
            </video>
            <div class="c-what-we-do-mobile__section-index">02</div>
            <div class="c-what-we-do-mobile__section-title">People</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description">
              We're resolute in our dedication to enriching lives in the digital realm, making it more inclusive, accessible, and enjoyable for all.
            </div>
          </div>
        </transition>
        <transition
          name="slide_fade"
          mode="out-in"
        >
          <div v-show="slide_index === 2" class="c-what-we-do-mobile__section" style="margin-top: -30rem;">
            <video width="100%" class="mobile-service-product-video" autoplay loop>
                  <source src="@/assets/videos/service-sec-2-video-3.mp4" type="video/mp4" />
                  <track kind="captions" label="English captions" lang="en" default />
                  Your browser does not support the video tag.
            </video>
            <div class="c-what-we-do-mobile__section-index">03</div>
            <div class="c-what-we-do-mobile__section-title">Passion</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description">
              We're passionate about simplifying and enhancing digital journeys, making them not just seamless but extraordinary
            </div>
          </div>
        </transition>
        <transition
          name="slide_fade"
          mode="out-in"
        >
          <div v-show="slide_index === 3" class="c-what-we-do-mobile__section" style="margin-top: -30rem;">
            <video width="100%" class="mobile-service-product-video" autoplay loop>
                  <source src="@/assets/videos/service-sec-2-video-4.mp4" type="video/mp4" />
                  <track kind="captions" label="English captions" lang="en" default />
                  Your browser does not support the video tag.
            </video>
            <div class="c-what-we-do-mobile__section-index">04</div>
            <div class="c-what-we-do-mobile__section-title">Purpose</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description">
              Milkinside's mission extends beyond design; it's about forging a digital future that transcends boundaries.
            </div>
          </div>
        </transition>
        <transition
          name="slide_fade"
          mode="out-in"
        >
          <div v-show="slide_index === 4" class="c-what-we-do-mobile__section" style="margin-top: -30rem;">
            <video width="100%" class="mobile-service-product-video" autoplay loop>
                  <source src="@/assets/videos/service-sec-2-video-5.mp4" type="video/mp4" />
                  <track kind="captions" label="English captions" lang="en" default />
                  Your browser does not support the video tag.
            </video>
            <div class="c-what-we-do-mobile__section-index">05</div>
            <div class="c-what-we-do-mobile__section-title">Partnership</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description">
              With Milkinside, your vision doesn't just take shape; it becomes an indomitable digital reality that reshapes industries and inspires awe.
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <svg v-if="activeStatus" class="c-services__mobile-down-icon" width="18" height="47" fill="none" style="position:absolute;z-index:2;bottom:250px">
      <use xlink:href="@/assets/sprites/icons.svg#mouse-down"></use>
    </svg>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'AboutSectionMobile2',
  data() {
    return {
      slide_index:0
    }
  },
  props: {
      activeSectionIndex: {
        type: Number,
        required: true,
      },
  },
  methods: {    
    changeSlideIndex(){
        this.slide_index ++;
        if(this.slide_index >= 5)
          this.slide_index = 0;       
    },    
  },
  computed:{
    activeStatus(){
      if(this.activeSectionIndex === 2){
        this.$store.commit('SET_NAV_LIGHT', true);
        this.interval = setInterval(this.changeSlideIndex, 2000);
      }else
        clearInterval(this.interval);

      return this.activeSectionIndex === 2;
    }
  },
  beforeDestroy(){
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
.top_line_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.top_line_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.top_line_fade-enter { transform:translateY(30px); opacity: 0; }
.top_line_fade-leave-to {transform:translateY(30px); opacity: 0;}

.intro_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { transform:translateY(120px);opacity: 0; }
.intro_fade-leave-to { transform:translateY(120px); opacity: 0;}

.body_content_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body_content_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_content_fade-enter { transform:translateX(350px);opacity: 0; }
.body_content_fade-leave-to { transform:translateX(350px); opacity: 0;}

.slide_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.slide_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.slide_fade-enter{ transform: translateX(450px); opacity: 0;}
.slide_fade-leave-to{ transform: translateX(-450px); opacity: 0;}
.mobile-service-product-video{
  position: absolute;
  top:0;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  transform-origin: center;
  left:0;
  width:100%;
}
.main-hd{
  font-size: 23px;
  margin-top: 5rem;
}
.slide{
  margin-top: 20rem;
  bottom: 0px;
  background-color: rgba(0,0,0,0.8);
  justify-content: flex-start;
}
.time-img{
  margin-top: -10rem;
}
.clock-desc{
  color: gray;
}
</style>
