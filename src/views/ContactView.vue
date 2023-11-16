<!-- eslint-disable -->
<template>
  <div @mousewheel="handleScroll">
    <div class="c-services c-services--active">
      <div class="c-services__wrapper">
        <div class="c-services__sections">
          <svg class="c-services__down-icon" width="24" height="24" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#down"></use>
          </svg>
          <div
            class="c-services__section c-partners"
            data-services-section="0"
            style="padding-bottom: 55px;"
          >
              <transition
                name="intro_fade"
                mode="out-in"
              >
                <SectionIntro
                  :number="'01'"
                  :category="'DIGITAL INNOVATION TEAM'"
                  :title="'MILKINSIDE SAN FRANCISCO'"
                  style="width:64%"
                />
              </transition>
              <transition
                appear
                name="heading_fade"
                mode="out-in"
              >
                <ContactHeading style="width:64%"/>
              </transition>
              <transition
                appear
                name="first_line_face"
                mode="out-in"
              >
                <SectionLine style="width:64%"/>
              </transition>
              <ContactBody style="margin-bottom:auto"/>  
              <div class="contact_info">
                <div class="email_div"> <a style="color:rgb(252, 16, 126)">interact</a>@milkinside.com</div>                            
                <div class="description_div"> 
                     At Milkinside, we work with fewer clients to allow our creative<br>
                      teams to focus on building ground-breaking experiences.
                </div>                            
              </div>                          
              <transition
                appear
                name="second_line_fade"
                mode="out-in"
              >
                <SectionLine style="width:64%;display: flex;"/>
              </transition>
              <transition
                appear
                name="footer_fade"
                mode="out-in"
              >
                <div class="c-menu__footer" style="width:70%;margin-top:15px">
                    <Footer />
                </div>
              </transition>
          </div>
          <div class="slider_container">
            <transition
               appear
                name="slider_fade"
                mode="out-in"
              >
                <img  v-show="slideIndex==1" id="slide1" class="slider_image"
                  src="@/assets/images/contact_slider_01.jpg"
                  alt="mobileImage.alternativeText"
                >
            </transition>
            <transition
                name="slider_fade"
                mode="out-in"
              >
                <img  v-show="slideIndex==2" id="slide2" class="slider_image"
                  src="@/assets/images/contact_slider_02.jpg"
                  alt="mobileImage.alternativeText"
                >
            </transition>
            <transition
                name="slider_fade"
                mode="out-in"
              >
                <img  v-show="slideIndex==3" id="slide3" class="slider_image"
                  src="@/assets/images/contact_slider_03.jpg"
                  alt="mobileImage.alternativeText"
                >
            </transition>
            <transition
                name="slider_fade"
                mode="out-in"
              >
                <img  v-show="slideIndex==4" id="slide4" class="slider_image"
                  src="@/assets/images/contact_slider_04.jpg"
                  alt="mobileImage.alternativeText"
                >
            </transition>
            <transition
                name="slider_fade"
                mode="out-in"
              >
                <img  v-show="slideIndex==5" id="slide5" class="slider_image"
                  src="@/assets/images/contact_slider_05.jpg"
                  alt="mobileImage.alternativeText"
                >
            </transition>
            <transition
                name="slider_fade"
                mode="out-in"
              >
                <img  v-show="slideIndex==6" id="slide6" class="slider_image"
                  src="@/assets/images/contact_slider_06.jpg"
                  alt="mobileImage.alternativeText"
                >
            </transition>
            <transition
                appear
                name="dots_fade"
                mode="out-in"
              >
              <div style="display:flex;flex-direction:column; position:absolute;margin-top:50vh;left:70px">
                <div id="dot1" class="dots" style="border-radius: 6px; background: black;width: 9px;height: 25px;opacity:1;margin-top:12px"></div>
                <div id="dot2" class="dots" style="border-radius: 6px; background: black;width: 9px;height: 10px;opacity:0.6;margin-top:12px"></div>
                <div id="dot3" class="dots" style="border-radius: 6px; background: black;width: 9px;height: 10px;opacity:0.6;margin-top:12px"></div>
                <div id="dot4" class="dots" style="border-radius: 6px; background: black;width: 9px;height: 10px;opacity:0.6;margin-top:12px"></div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <ContactViewMobile class="c-services__section--mobile-section" style="z-index:101;"/>
    <transition appear name="section_fade" mode="out-in">
        <SectionFooter v-show="footer_visible" :footer_visible="footer_visible" style="height:100vh; position: absolute; z-index: 1000;opacity: 1; top:0"/>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import SectionIntro from '@/components/common/SectionIntro.vue';
import SectionFooter from '@/components/common/SectionFooter.vue';
import ContactHeading from '@/components/ContactView/ContactHeading.vue';
import ContactBody from '@/components/ContactView/ContactBody.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import Footer from '@/components/ContactView/Footer.vue';
import CopyLocation from '@/components/ContactView/CopyLocation.vue';
import { debounce } from 'lodash';
import ContactViewMobile from '@/components/ContactView/ContactViewMobile.vue';
export default {
  name: 'ContactView',
  components: {
    ContactHeading,
    ContactBody,
    SectionIntro,
    SectionLine,
    Footer,
    CopyLocation,
    SectionFooter,
    ContactViewMobile
},
  mounted(){
    this.$store.commit('SET_NAV_LIGHT', true);
    this.interval = setInterval(() => {this.changeSlides()}, 4000);
  },
  created() {
   
  },
  data() {
    return {
      footer_visible: false,
      slideIndex: 1,
    };
  },
  watch: {
  },
  computed: {
  },
  methods: {
    handleScroll: debounce(function (event) {
      if(window.innerWidth >= 960)
        this.footer_visible = event.deltaY > 0 ?  true : false;
    }),
    changeSlides() {
      let i;
      let dots = document.getElementsByClassName("dots");

      this.slideIndex = (this.slideIndex + 1) > 6 ? 1 : this.slideIndex + 1;
      if(dots && dots.length == 4){
        for (i = 0; i < 4; i++) {
          dots[i].style.opacity = 0.6;
          dots[i].style.height = '10px';
        }
        dots[(this.slideIndex-1) % 4].style.height = "25px";
        dots[(this.slideIndex-1) % 4].style.opacity = 1;
      }

    },
  },
  beforeDestroy(){
    clearInterval(this.interval);
  }
};
</script>

<style>
@media (max-width: 1600px){  
  .contact_info {
    flex-direction: column; 
  }
  .description_div{
    text-align: left;
    margin-top:20px;
  }
}
@media (min-width: 1600px){  
  .contact_info {
    flex-direction: row; 
  }
  .description_div{
    text-align: right;
  }
}
.description_div{
  flex:7;
}
.email_div{
  margin-top: 35px;
  flex:3;
}
.contact_info{
  width: 64%; 
  display: flex; 
  position: relative;
  font-size: max(2.3rem, 23px);
  font-weight: 700; 
  line-height: 1.25;
  margin-bottom: 20px;
}
.slider_image{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slider_container{
  position: absolute;
  top: 0;
  right: -5vw;
  width: 38vw;
  height: 100vh;
}
@media (max-width: 960px){
  .slider_container {
      display: none;
  }
}
.c-services__wrapper {
  padding-top: 115px;
}
.second_line_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.second_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.second_line_fade-enter {  opacity: 0;}
.second_line_fade-leave-to {opacity: 0; }

.first_line_face-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.first_line_face-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.first_line_face-enter { transform: translateY(150px); opacity: 0;}
.first_line_face-leave-to {opacity: 0; transform: translateY(-150px);}

.heading_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.heading_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.heading_fade-enter { transform: translateY(-50px); opacity: 0;}
.heading_fade-leave-to {opacity: 0; transform: translateY(-80px);}

.intro_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { opacity: 0;}
.intro_fade-leave-to {opacity: 0;}

.section_fade-enter-active { transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.section_fade-leave-active { transition: all 1s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.section_fade-enter { transform: translateY(100vh);}
.section_fade-leave-to {transform: translateY(100vh);}

.slider_fade-enter-active { transition: all 0.7s cubic-bezier(.71,.17,.14,.93);}
.slider_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.slider_fade-enter { transform: translateY(100vh);}
.slider_fade-leave-to {transform: translateY(-100vh);}

.dots_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.dots_fade-leave-active { transition: all 1s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.dots_fade-enter { opacity: 0;}
.dots_fade-leave-to {opacity: 0;}


</style>
