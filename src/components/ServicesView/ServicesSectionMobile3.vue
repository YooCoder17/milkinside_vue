<template>
  <!-- eslint-disable -->
    <div class="c-partners-mobile c-services__section c-services__section--mobile-section c-services__section--no-padding"  style="overflow-y: auto;">
        <div class="c-partners-mobile__inner">
            <div class="c-partners-mobile__intro-wrapper">
                <div class="c-intro">
                    <div class="c-line__wrapper" data-start-divider="" data-section-item="">
                        <div class="c-line"></div>
                    </div>
                    <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
                        <div class="c-intro__content" data-intro-content="">
                            <div class="c-intro__left"><p class="c-intro__number">04</p>
                                <div class="c-line__wrapper">
                                    <div class="c-intro__line c-line"></div>
                                </div>
                                <p class="c-intro__text">Partners</p></div>
                            <div class="c-intro__right"><p class="c-intro__text">Our Process</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div  id="slider_container" class="c-partners-mobile__review c-partners-mobile__review--active" style="position: relative;">
                <transition
                    name="body0_fade"
                    mode="out-in"
                >
                    <div id="slider0" v-show="slider_index === 0" style="position: absolute;">
                        <img class="c-partners-mobile__review-image" src="https://res.cloudinary.com/dm3bdznon/image/upload/v1668818934/review_6609021cc1.jpg">
                        <div class="c-partners-mobile__review-quote">
                            <div class="c-partners-mobile__review-quote-apostrophe">“</div>
                            <div>
                                <div class="c-partners-mobile__review-quote-text" style="font-size: max(2.2rem, 21px);">
                                    The Milkinside team has not only captured our product vision but has also consistently delivered astounding results on schedule.
                                </div>
                                <div class="c-partners-mobile__review-quote-name">Raphael Oberholzer</div>
                                <div class="c-partners-mobile__review-quote-role">Investor, CEO of AVA coporation</div>
                            </div>
                        </div>
                    </div>
                </transition>
                <transition
                    name="body0_fade"
                    mode="out-in"
                >
                    <div id="slider1" v-show="slider_index === 1" style="position: absolute;">
                        <img class="c-partners-mobile__review-image" src="@/assets/images/image945.jpg">
                        <div class="c-partners-mobile__review-quote">
                            <div class="c-partners-mobile__review-quote-apostrophe">“</div>
                            <div>
                                <div class="c-partners-mobile__review-quote-text" style="font-size: max(2.2rem, 21px);">
                                    Working with Milkinside has been an absolute pleasure. Their ability to grasp our product vision and translate it into outstanding outcomes has been nothing short of remarkable
                                </div>
                                <div class="c-partners-mobile__review-quote-name">Peter Gent</div>
                                <div class="c-partners-mobile__review-quote-role">CEO of a startup coporation</div>
                            </div>
                        </div>
                    </div>
                </transition>       
                <transition
                    name="body0_fade"
                    mode="out-in"
                >
                    <div id="slider2" v-show="slider_index === 2" style="position: absolute;">
                        <img class="c-partners-mobile__review-image" src="@/assets/images/image2185.jpg">
                        <div class="c-partners-mobile__review-quote">
                            <div class="c-partners-mobile__review-quote-apostrophe">“</div>
                            <div>
                                <div class="c-partners-mobile__review-quote-text" style="font-size: max(2.2rem, 21px);">
                                    Milkinside embraced the essence of the Scandinavian Airlines brand, contributing to the creation of a solid foundation for the official SAS application.
                                </div>
                                <div class="c-partners-mobile__review-quote-name">Massimo Pascotto</div>
                                <div class="c-partners-mobile__review-quote-role">Head of Technology Innovation & Labs</div>
                            </div>
                        </div>
                    </div>
                </transition>            
            </div>
            <div id="dot_container" style="width:100%;text-align: center;margin-top:90vh;">
                    <div style="margin-right:auto;margin-left:auto;display: flex;width:50px">
                        <div id="mobile_dot1" class="mobile_dots" style="border-radius: 4px; background: black;width: 18px;height: 6px;opacity:1;margin-right:8px"></div>
                        <div id="mobile_dot2" class="mobile_dots" style="border-radius: 4px; background: black;width: 6px;height: 6px;opacity:0.4;margin-right:8px"></div>
                        <div id="mobile_dot3" class="mobile_dots" style="border-radius: 4px; background: black;width: 6px;height: 6px;opacity:0.4;margin-right:8px"></div>
                    </div>
            </div>   
            <div class="c-partners-mobile__divider" style="margin-top:40px"></div>
            <div class="c-partners-mobile__general-info" style="margin-bottom: 0;">
                <div class="c-partners-mobile__general-info-left-column">
                    <img class="c-partners-mobile__general-info-support-image" src="https://res.cloudinary.com/dm3bdznon/image/upload/v1672969925/support_75def0d227.png?updated_at=2023-01-06T01:52:06.234Z">
                    <a  class="c-partners__heart-link c-partners-mobile__general-info-heart-link" href="#">
                        <svg width="24" height="24" fill="none" viewBox="0 0 22 19">
                            <use xlink:href="@/assets/sprites/icons.svg#heart"></use>
                        </svg>
                    </a>
                </div>
                <div>
                    <div class="c-partners-mobile__general-info-support-title" style="font-size: max(2.8rem, 26px);font-weight: 600;">
                        Professionals  support
                    </div>
                    <div class="c-partners-mobile__general-info-support-description">
                        Every month, we receive countless emails from those in the product design and engineering industries, commending our work as world-class.                        
                    </div>
                    <!-- <div
                            class="c-partners-mobile__general-info-statistic c-partners-mobile__general-info-statistic--with-margin">
                        <div class="c-partners-mobile__general-info-statistic-title" style="font-size: max(5.7rem, 52px);"><span>2k</span>
                            <svg width="24" height="24" color="none" fill="none">
                                <use xlink:href="@/assets/sprites/icons.svg#rewards"></use>
                            </svg>
                        </div>
                        <div class="c-partners-mobile__general-info-statistic-line"></div>
                        <div class="c-partners-mobile__general-info-statistic-description">Reviews on <b>Behance</b>
                        </div>
                    </div> -->
                    <div class="c-partners-mobile__general-info-statistic">
                        <div class="c-partners-mobile__general-info-statistic-title" style="font-size: max(5.7rem, 52px);">183</div>
                        <div class="c-partners-mobile__general-info-statistic-line"></div>
                        <div class="c-partners-mobile__general-info-statistic-description">Satisfied <br>
                            clients
                        </div>
                    </div>
                </div>
            </div>
            <video width="120%" id="back-video" autoplay loop muted class="c-partners-mobile__video" style="position: relative;left:-9%;margin-top: 0; margin-bottom: 100px;">
                <source src="@/assets/videos/asset1.mp4" type="video/mp4" />
                <track kind="captions" label="English captions" lang="en" default />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>
<script>
/* eslint-disable */ 
export default {
  name: 'ServicesSectionMobile3',
  data() {
    return {
      slider_index: 0,
      interval: null,
      dot_top: 0,
    }
  },
  mounted(){
    // window.addEventListener('resize', this.getDotContainerTop);
    this.getDotContainerTop();
  },
  created() {
    this.interval = setInterval(this.changeSlider, 3000);
  },
  methods: {
    changeSlider(){
        this.slider_index = (this.slider_index + 1) >= 3 ? 0 : this.slider_index + 1;
        let dots = document.getElementsByClassName("mobile_dots");
        let index;
        this.getDotContainerTop();
        if(dots && dots.length == 3){
            for (index = 0; index < 3; index++) {
                if(dots[index]){
                    dots[index].style.opacity = 0.4;
                    dots[index].style.width = '6px';    
                }                
            }
            if(dots[this.slider_index]){
                dots[this.slider_index].style.width = "18px";
                dots[this.slider_index].style.opacity = 1;
            }
        }
    },  
    getDotContainerTop(){
        setTimeout(() => {
            const current_slider = document.getElementById("slider"+this.slider_index);    
            const dot_container = document.getElementById("dot_container");  
            if(this.dot_top < (current_slider.clientHeight + 40))
                this.dot_top =  current_slider.clientHeight + 40;
            dot_container.style.marginTop = `${this.dot_top}px`;
        }, 100);
    }
  },
  beforeDestroy(){
    clearInterval(this.interval);
  } 

};
</script>
<style>
.body0_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body0_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body0_fade-enter{ transform: translateX(350px); opacity: 0;}
.body0_fade-leave-to{ transform: translateX(-350px); opacity: 0;}
</style>
