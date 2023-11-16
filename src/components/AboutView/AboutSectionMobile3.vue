<template>
  <!-- eslint-disable -->
  <div class="c-services__section c-services__section--no-padding c-what-we-do-mobile c-services__section--mobile-section">
    <div class="c-what-we-do-mobile__intro-wrapper">
      <div class="c-intro">
        <transition appear name="top_line_fade" mode="out-in">
          <div v-if="activeStatus" class="c-line__wrapper about3-line" data-start-divider="" data-section-item="">
            <div class="c-line"></div>
          </div>
        </transition>
        <transition appear name="intro_fade" mode="out-in">
          <div v-if="activeStatus" class="c-intro__content__wrapper" data-intro-content-wrapper="">
            <div class="c-intro__content" data-intro-content="">
              <div class="c-intro__left"><p class="c-intro__number">04</p>
                <div class="c-line__wrapper">
                  <div class="c-intro__line c-line"></div>
                </div>
                <p class="c-intro__text">CULTURE</p></div>
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
            <div class="c-what-we-do-mobile__section-title">Build Better Products</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description" style="font-weight: 600;">
                We foster an environment where understanding and compassion for one another are paramount
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
            <div class="c-what-we-do-mobile__section-title">Figure it out shit</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description" style="font-weight: 600;">
              We provide our employees with the freedom and encouragement to explore their creative potential, ensuring that joy and fun are integral parts of the creative process.
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
            <div class="c-what-we-do-mobile__section-title">Families Together</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description" style="font-weight: 600;">
              By cultivating an atmosphere of mutual respect and shared purpose, we create an environment where employees not only thrive but also inspire one another.
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
            <div class="c-what-we-do-mobile__section-title">Nurture Relationships</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description" style="font-weight: 600;">
              In essence, we recognize that innovation is often the result of thinking outside the box, and sometimes that box may even turn out to be a cardboard spaceship in a playful brainstorming session
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
  name: 'AboutSectionMobile3',
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
        if(this.slide_index >= 4)
          this.slide_index = 0;       
    },    
  },
  computed:{
    activeStatus(){
      if(this.activeSectionIndex === 3){
        this.$store.commit('SET_NAV_LIGHT', true);
        this.interval = setInterval(this.changeSlideIndex, 2000);
      }else
        clearInterval(this.interval);

      return this.activeSectionIndex === 3;
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
