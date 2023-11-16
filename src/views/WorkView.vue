<!-- eslint-disable -->
<template>
  <div @mousewheel="handleScroll">
    <div class="c-services c-services--active">
      <GLBackground
        @animating="handleAnimating"
        @endAnimation="handleEndAnimation"
        @allPlaceholderSourcesLoaded="handleAllPlaceholderSourcesLoaded"
        ref="background"
        :assets="GLBackgroundAssets"
      />
      <Loader
            ref="loader"
            :nColumnDividors="nColumnDividors"
            :columnWidth="columnWidth"
            :asset="loaderAsset"
            :in_status="loader"
            :transition_status="loaderTransition"
            @onFinishTransition="handleFinishLoaderTransition"
      />
      <div style="position: absolute; background: black; width: 100vw; height: 5.8vw; top: 0px; transform: matrix(1, 0, 0, 1, 0, 0);z-index: 98;"></div>
      <div style="position: absolute; background: black; width: 100vw; height: 5.8vw; bottom: 0px; transform: matrix(1, 0, 0, 1, 0, 0);z-index: 98;"></div>
      <div style="position: absolute; height: 15.44vw; width: 27.02vw; top: 50%; left: 50%; transform: translate(-50%, -50%);z-index: 98;">
        <button @click="showVimeo" style="position: absolute; height: 100%; width: 100%; box-shadow: rgba(0, 0, 0, 0.6) 0px 0px 0px 1370px; left: 0px; opacity: 1;"></button>
      </div>
      <div class="title_container">
        <div style="position: relative; width: 100%; height:100%">
          <transition
            appear
            v-for="(asset, index) in GLBackgroundAssets"
            :id="'work_title' + index"
            name="title_fade"
            mode="out-in"
          >
            <div v-show="title_index == index" class="c-partners__review-title work_title">
              {{asset.title}}
            </div>
          </transition>

          <transition
            appear
            v-for="(asset, index) in GLBackgroundAssets"
            :id="'work_subtitle' + index"
            name="subtitle_fade"
            mode="out-in"
          >
          <div v-show="title_index == index" class="c-partners__review-name work_subtitle">
            {{asset.subtitle}}
          </div>
          </transition>

        </div>
      </div>
      <div class="c-what-we-do__control-buttons" style="z-index:1000; top:65vh; left:10vw; position: absolute;">
        <button class="c-what-we-do__control-button" @click="prev">
          <svg width="24" height="24" color="#FFF" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#left"></use>
          </svg>
        </button>
        <button class="c-what-we-do__control-button" @click="next">
          <svg width="24" height="24" color="#FFF" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#right"></use>
          </svg>
        </button>
      </div>
      <div style="z-index:1000; top:55vh; left:calc(63.51vw - 35px); position: absolute; display: flex;">
        <div style="height:1px; background:white; width:70px;margin-top:10px;margin-right:10px"></div><a style="color:white;font-size:1.6rem">WATCH VIDEO</a>
      </div>
    </div>
    <transition appear name="vimeo_fade" mode="out-in">
      <div
        ref="vimeoBG"
        v-if="vimeo_visible"
        style="position: absolute; height: 100vh; width: 100%; background: rgb(0, 0, 0);z-index: 1000; top:0;"
      >
          <iframe
            :src="videoSource"
            :width="iframeWidth"
            :height="iframeHeight"
            style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
         />
        <img
          @click="closeVimeo"
          :style="buttonStyle"
          src="@/assets/images/close.png"
        />
      </div>
    </transition>
    <transition appear name="section_fade" mode="out-in">
        <SectionFooter v-show="footer_visible" :footer_visible="footer_visible" style="height:100vh; position: absolute; z-index: 1000;opacity: 1; top:0"/>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import GLBackground from "@/components/WorkView/GLBackground.vue";
import Loader from "@/components/WorkView/Loader.vue";
import { mod } from "@/helpers/utils.js";
import { debounce } from 'lodash';
import SectionFooter from '@/components/common/SectionFooter.vue';
export default {
  name: 'WorkView',
  components: {
    GLBackground,
    Loader,
    SectionFooter
  },
  mounted(){
    window.addEventListener('resize', this.updateIframeWidth);
    this.updateIframeWidth();
    this.$store.commit('SET_NAV_LIGHT', false);
    this.projectsAssets = [null, null, null];
    this.background = null;
    document.addEventListener("touchend", function(e) {
      e.preventDefault();
      e.target.click();
    });
    this.loaderAsset = this.$store.state.loader_video;
  },
  created() {
   
  },
  data() {
    return {
      vimeo_visible : false,
      iframe_width: 0,
      iframe_height: 0,
      reelIdx: 0,
      footer_visible: false,
      title_index: 0,
      nColumnDividors: 6,
      columnWidth: 30,
      isAnimating: true,
      autoadvance: false,
      loaderAsset: null,
      GLBackgroundAssets : [
        {
            name: "work0",
            placeholder:  "https://d1i4luv9ibe252.cloudfront.net/work/product_design.jpg",
            video: "https://d1i4luv9ibe252.cloudfront.net/work/product_short.mp4",
            vimeoID: "337038798",
            title:"Product Design",
            subtitle:"Some hire an agency to design their screens. The best partner with Milkinside to build products. Our partners choose us because we understand their business and their users, and together we define the future through elegant product design.",
          },
          {
            name: "work1",
            placeholder:  "https://d1i4luv9ibe252.cloudfront.net/work/motion_graphics.jpg",
            video: "https://d1i4luv9ibe252.cloudfront.net/work/motion_short_2.mp4",
            vimeoID: "391358922",
            title:"Motion Graphics",
            subtitle:"Digital product companies work with Milkinside to capture their product vision in motion. Whether the audience is investors and futurists at CES, or a global product release, our in-house CGI production teams bridge the virtual and real worlds to create moments of magic."
          },
          {
            name: "work2",
            placeholder: "https://d1i4luv9ibe252.cloudfront.net/work/cgi_poem.jpg",
            video: "https://d1i4luv9ibe252.cloudfront.net/work/cgi_poem.mp4",
            vimeoID: "381923863",
            title:"Milkinside knows AI",
            subtitle:"Artificial and algorithmic intelligence continues to reshape our every commercial interaction. With every product and experience we build, we are deeply aware that systems perform only as they are designed to. Designing for the protection and service of humanity is our conscious choice."
          },
          {
            name: "work3",
            placeholder: "https://d1i4luv9ibe252.cloudfront.net/work/airbus.jpg", 
            video: "https://d1i4luv9ibe252.cloudfront.net/work/Airbus_short_video.mp4",
            vimeoID: "283909154",
            title:"Airbus app Design",
            subtitle:"Travel planning is only beginning when you book your tickets, and Airbus saw the opportunity to be a companion throughout the journey.  We're proud to have partnered with them on several cutting edge mobile releases that support their carriers and their passengers."
          },
          {
            name: "work4",
            placeholder: "https://d1i4luv9ibe252.cloudfront.net/work/automotive.jpg",
            video: "https://d1i4luv9ibe252.cloudfront.net/work/automotive_short.mp4",
            vimeoID: "336892078",
            title:"Automotive HMI",
            subtitle:"We have worked with automakers in China, Japan, Germany and the US creating and improving countless aspects of the human machine interface. From console design, to AI integration and visualization, to companion mobile applications, Milkinside partners with the best to make them better."        
          },
          {
            name: "work5",
            placeholder: "https://d1i4luv9ibe252.cloudfront.net/work/gold.jpg",
            video: "https://d1i4luv9ibe252.cloudfront.net/work/gold_cgi.mp4",
            vimeoID: "337644485",
            title:"Brand Vision",
            subtitle:"Based in San Francisco, Milkinside works locally in Silicon Valley and across the globe. Our clients and partners from dozens of industries and every time zone turn to us to tell their brand story, and build their products."
          }
      ],
      loader: true,
      loaderTransition: true,
      title: "Milkinside",
    };
  },
  watch: {
  },
  computed: {
    videoSource() {
      return `https://player.vimeo.com/video/${this.GLBackgroundAssets[this.title_index].vimeoID}?autoplay=1&muted=0&playsinline=1`;
    },
    iframeWidth() {
      return `${this.iframe_width}px`;
    },
    iframeHeight() {
      this.iframe_height = this.iframe_width * (9 / 16);
      return `${this.iframe_height}px`;
    },
    buttonStyle() {
      const topPosition = (window.innerHeight - this.iframe_height) / 2 - 20;
      const rightPosition = window.innerWidth * 0.15 - 20;
      return `
        cursor:pointer;
        position: absolute;
        backgroundRepeat: no-repeat;
        backgroundSize: cover;
        backgroundPosition: center;
        top: ${topPosition}px;
        right:  ${rightPosition}px;
        height: 40px;
        width: 40px;
      `;
    },
  },
  methods: {   
    updateIframeWidth(){
      this.iframe_width = window.innerWidth * 0.7;
    },
    showVimeo(){
      this.vimeo_visible = true;
    },
    closeVimeo() {
      this.vimeo_visible = false;
    },    
    handleScroll: debounce(function (event) {
      this.footer_visible = event.deltaY > 0 ?  true : false;
    }),    
    handleFinishLoaderTransition() {
        this.loader = false;
    },
    handleAnimating() {
      this.isAnimating = true;
    },
    handleEndAnimation() {
      this.isAnimating = false;
    },
    handleAllPlaceholderSourcesLoaded() {
      this.isAnimating = false;
      this.loader = false;
      this.autoadvance = true;
    },
    next(){
      this.title_index += 1;
      this.title_index = mod(
          this.title_index,
          this.GLBackgroundAssets.length
      );
      this.$refs.background.next();
    },
    prev(){
      this.title_index -= 1;
      this.title_index = mod(
          this.title_index,
          this.GLBackgroundAssets.length
      );
      this.$refs.background.previous();
    },
  },
};
</script>

<style>
.title_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.title_fade-leave-active { transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.title_fade-enter { transform: translateY(150px); opacity: 0;}
.title_fade-leave-to {opacity: 0; transform: translateY(-50px);}

.subtitle_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.subtitle_fade-leave-active { transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.subtitle_fade-enter { transform: translateY(100px); opacity: 0;}
.subtitle_fade-leave-to {opacity: 0; transform: translateY(-50px);}

.vimeo_fade-enter-active { opacity: 1; transition: all 0.5s cubic-bezier(.71,.17,.14,.93);}
.vimeo_fade-leave-active { transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.vimeo_fade-enter { opacity: 0;}
.vimeo_fade-leave-to {opacity: 0;}

.title_container{z-index:1000; top:40vh; left:15vw; position: absolute;height: 400px; width: 30vw;}
.work_title{ position:absolute; color:white;font-size: max(5.7rem, 42px); }
.work_subtitle{ margin-top:110px; position: absolute; color:white; font-weight: 100;line-height: 1.5;font-size: max(1.8rem, 18px);}
</style>
