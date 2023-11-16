<!-- eslint-disable -->
<template>
  <!-- TODO: remove hardcoded text, replace it by values from props -->
  <div class="c-partners__reviews">
    <transition
          name="body_fade"
          mode="out-in"
        >
        <div v-if="activeStatus" class="c-partners__review c-partners__review--active" style="overflow: hidden;padding-right: 0;">
            <div>
              <div class="responsive_option_1500">
                  <div class="img-container" style="height:280px;margin-top:40px;border-radius:25px;position:relative;margin-right:50px">
                      <transition
                        name="image_slide"
                        @before-leave="beforeLeave"
                        mode="out-in"
                      >
                        <div v-show="slideIndex==1" id="slide1" class="c-partners__review-image mySlides fade" style="z-index:1">
                          <img src="https://res.cloudinary.com/dm3bdznon/image/upload/v1668818934/review_6609021cc1.jpg" style="width:100%">
                        </div>
                      </transition>
                      <transition
                        name="image_slide"
                        @before-leave="beforeLeave"
                        @after-leave="afterSlider2Leave"
                        @after-enter="afterSlider2Enter"
                        mode="out-in"
                      >
                        <div v-show="slideIndex===2" id="slide2" class="c-partners__review-image mySlides fade" style="z-index:2">
                          <img src="@/assets/images/image945.jpg" style="width:100%">
                        </div>
                      </transition>
                      <transition
                        name="image_slide"
                        @before-leave="beforeLeave"
                        @after-leave="afterSlider2Leave"
                        @after-enter="afterSlider2Enter"
                        mode="out-in"
                      >
                        <div v-show="slideIndex===3" id="slide3" class="c-partners__review-image mySlides fade" style="z-index:3">
                          <img src="@/assets/images/image2185.jpg" style="width:100%">
                        </div>
                      </transition>
                  </div>
                  <div style="display:flex;position:absolute;margin-top:12px">
                    <div id="dot1_1" class="service4_1_dots" style="border-radius: 4px; background: black;width: 18px;height: 6px;opacity:1;margin-right:8px"></div>
                    <div id="dot1_2" class="service4_1_dots" style="border-radius: 4px; background: black;width: 6px;height: 6px;opacity:0.4;margin-right:8px"></div>
                    <div id="dot1_3" class="service4_1_dots" style="border-radius: 4px; background: black;width: 6px;height: 6px;opacity:0.4;margin-right:8px"></div>
                  </div>
              </div>
              <div style="min-height: 200px;margin-top:50px">
                <transition
                  name="title_fade"
                  mode="out-in"
                  @before-enter="beforeTitleEnter"
                  @before-leave="beforeTitleEnter"
                >
                  <div v-show="slideIndex==1" class="c-partners__review-title" style="position: absolute;font-size: 3.5rem">                  
                    The Milkinside team has not only captured <br> our product vision but has also consistently delivered <br>astounding results on schedule.
                    <div style="margin-top: 3vh;">
                      <div class="c-partners__review-name">Raphael Oberholzer</div>
                      <div class="c-partners__review-role" style="opacity:0.6;font-weight:700">Investor, CEO of AVA coporation</div>
                    </div>
                  </div>
                </transition>
                <transition
                  name="title_fade"
                  mode="out-in"
                  @before-enter="beforeTitleEnter"
                  @before-leave="beforeTitleEnter"
                >
                  <div  v-show="slideIndex==2"  class="c-partners__review-title" style="position: absolute;font-size: 3.5rem">
                    Working with Milkinside has been an absolute <br> pleasure. Their ability to grasp our product vision <br>and translate it into outstanding outcomes has<br> been nothing short of remarkable
                    <div style="margin-top: 3vh;">
                      <div class="c-partners__review-name">Peter Gent</div>
                      <div class="c-partners__review-role" style="opacity:0.6;font-weight:700">CEO of a startup</div>
                    </div>
                  </div>
                </transition>
                <transition
                  name="title_fade"
                  mode="out-in"
                  @before-enter="beforeTitleEnter"
                  @before-leave="beforeTitleEnter"
                >
                  <div  v-show="slideIndex==3"  class="c-partners__review-title" style="position: absolute;font-size: max(3.5rem, 30px);">
                    Milkinside embraced the essence of the <br>Scandinavian Airlines brand, contributing to the <br>creation  of a solid foundation for the official SAS <br>application.
                    <div style="margin-top: 3vh;">
                      <div class="c-partners__review-name">Massimo Pascotto</div>
                      <div class="c-partners__review-role" style="opacity:0.6;font-weight:700">Head of Technology Innovation & Labs</div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            <div class="responsive_option_full">
              <div class="img-container" style="height:280px;margin-top:40px;border-radius:25px;position:relative;margin-right:6vw">
                  <transition
                    name="image_slide"
                    @before-leave="beforeLeave"
                    mode="out-in"
                  >
                    <div v-show="slideIndex==1" id="slide1" class="c-partners__review-image mySlides fade" style="z-index:1">
                      <img src="https://res.cloudinary.com/dm3bdznon/image/upload/v1668818934/review_6609021cc1.jpg" style="width:100%">
                    </div>
                  </transition>
                  <transition
                    name="image_slide"
                    @before-leave="beforeLeave"
                    @after-leave="afterSlider2Leave"
                    @after-enter="afterSlider2Enter"
                    mode="out-in"
                  >
                    <div v-show="slideIndex===2" id="slide2" class="c-partners__review-image mySlides fade" style="z-index:2">
                      <img src="@/assets/images/image945.jpg" style="width:100%">
                    </div>
                  </transition>
                  <transition
                    name="image_slide"
                    @before-leave="beforeLeave"
                    @after-leave="afterSlider2Leave"
                    @after-enter="afterSlider2Enter"
                    mode="out-in"
                  >
                    <div v-show="slideIndex===3" id="slide3" class="c-partners__review-image mySlides fade" style="z-index:3">
                      <img src="@/assets/images/image2185.jpg" style="width:100%">
                    </div>
                  </transition>
              </div>
              <div style="display:flex;position:absolute;margin-top:12px">
                <div id="dot2_1" class="service4_2_dots" style="border-radius: 4px; background: black;width: 18px;height: 6px;opacity:1;margin-right:8px"></div>
                <div id="dot2_2" class="service4_2_dots" style="border-radius: 4px; background: black;width: 6px;height: 6px;opacity:0.4;margin-right:8px"></div>
                <div id="dot2_3" class="service4_2_dots" style="border-radius: 4px; background: black;width: 6px;height: 6px;opacity:0.4;margin-right:8px"></div>
              </div>
            </div>
        </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';

export default {
  name: 'ServicesSection3Reviews',
  methods: {
    convertNewLineToBreak,
  },
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
  computed:{
    activeStatus(){
      return this.activeSectionIndex === 3;
    },
  },
  methods:{
    beforeTitleEnter(el){
      el.style.transitionDelay = '0.4s'
    },
    afterSlider2Enter(el){
      setTimeout(() => {
            el.style.zIndex = 0;
      }, 500);
    },
    afterSlider2Leave(el){
      el.style.zIndex = 2;
    },
    beforeLeave(el){
      el.style.transitionDelay = '0.3s'
    },
    changeSlides() {
      let i;
      let dots1 = document.getElementsByClassName("service4_1_dots");
      let dots2 = document.getElementsByClassName("service4_2_dots");

      let newSlideIndex = (this.slideIndex + 1) > 3 ? 1 : this.slideIndex + 1;
      this.$emit('changeSlideIndex', newSlideIndex);
      if(dots1 && dots1.length == 3){
        for (i = 0; i < 3; i++) {
          dots1[i].style.opacity = 0.4;
          dots1[i].style.width = '6px';
        }
        dots1[this.slideIndex-1].style.width = "18px";
        dots1[this.slideIndex-1].style.opacity = 1;
      }
      if(dots2 && dots2.length == 3){
        for (i = 0; i < 3; i++) {
          dots2[i].style.opacity = 0.4;
          dots2[i].style.width = '6px';
        }
        dots2[this.slideIndex-1].style.width = "18px";
        dots2[this.slideIndex-1].style.opacity = 1;
      }

    },
  },
  watch: {
    intervalStatus(newValue, oldValue){
      if(newValue === true){
        clearInterval(this.interval);
        setTimeout(() => {
          this.interval = setInterval(() => {this.changeSlides()}, 4000);
          this.$emit('stopInterval', false);
        }, 5000)
      }
    },
    activeSectionIndex(newValue, oldValue) {
      if(newValue == 3){
         this.interval = setInterval(() => {this.changeSlides()}, 4000);
         this.$emit('stopInterval', false);
      }else{
        clearInterval(this.interval);
      }
    },
  },
  beforeDestroy(){
    clearInterval(this.interval);
  }
};
</script>
<style scoped>
.responsive_option_1500{
  display: none;
}
.responsive_option_full{
  display: block;
}
@media (max-width: 1500px) {
  .responsive_option_1500{
    display: block;
  }
  .responsive_option_full{
    display: none;
  }
}
.c-partners__reviews {
    overflow:hidden;margin-top:auto; width:78%
}
@media (max-width: 2200px) {
  .c-partners__reviews {
    width:100%; 
  }
}
.image_slide-enter-active { transition: all 1.3s cubic-bezier(.71,.17,.14,.93);}
.image_slide-leave-active { transition: all 1.3s ease-in-out;}
.image_slide-enter { transform: translateX(650px);}
.image_slide-leave{transition-delay: 0.8s;}
.image_slide-leave-to { filter: blur(6px);transform: translateX(-350px);}
/* .fade {
  animation-name: fade;
  animation-duration: 0.8s;
}
@keyframes fade {
  from {opacity: .1}
  to {opacity: 1}
} */
.body_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.body_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_fade-enter { transform: translateY(350px); opacity: 0;}
.body_fade-leave-to {opacity: 0; filter: blur(6px);transform: translateY(-50px);}

.title_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.title_fade-leave-active { transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.title_fade-enter { transform: translateY(150px); opacity: 0;}
.title_fade-leave-to {opacity: 0; transform: translateY(-50px);}

.subtitle_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.subtitle_fade-leave-active { transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.subtitle_fade-enter { transform: translateY(100px); opacity: 0;}
.subtitle_fade-leave-to {opacity: 0; transform: translateY(-50px);}

.img-container {
  width:550px;
  overflow:hidden;
}
.c-partners__review-image{
  z-index: 4;
  position:absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.c-partners__review-image:hover{
    transform: scale(1.2)!important;
    transition: 4s;
}
</style>
