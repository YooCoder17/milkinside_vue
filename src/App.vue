<template>
  <div id="milkinside" style="background:#f5f4f8;position: fixed;" :class="{'active_body':isOpenedSideMenu === true}" >
    <NavMenu
      @sideMenuClicked="toggleSideMenu"
      @onRouterClick="hideSideMenu"
      :isOpenedSideMenu="isOpenedSideMenu"
    />
    <SideMenu
      :isOpened="isOpenedSideMenu1"
      @onRouterClick="hideSideMenu"
    />
    <div id="placehere"></div>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import NavMenu from '@/components/NavMenu.vue';
import SideMenu from '@/components/SideMenu.vue';
import { MediaLoader } from "@/helpers/MediaLoader.js";
export default {
  name: 'AppWrapper',
  components: {
    NavMenu,
    SideMenu,
  },
  data() {
    return {
      isOpenedSideMenu: false,
      isOpenedSideMenu1: false,
      loaderAssetLoader : new MediaLoader([
        {
          name: "loader",
          src: "https://d1i4luv9ibe252.cloudfront.net/Logo_v3_1_rgb.mp4",
          type: "video",
          forceEntireLoad: true
        }
      ]),
    };
  },
  mounted(){
    this.loaderAssetLoader.onSourceLoaded(this.handleLoaderAsset.bind(this));
    this.loaderAssetLoader.loadAll();
  },
  methods: {
    handleLoaderAsset(_, asset) {
      this.$store.commit('SET_LOADER_VIDEO', asset); 
    },
    toggleSideMenu() {
      this.isOpenedSideMenu = !this.isOpenedSideMenu;
    },
    hideSideMenu() {
      this.isOpenedSideMenu1 = false;
      this.isOpenedSideMenu = false;
    },
  },
  watch: {
    isOpenedSideMenu(newValue, oldValue){
      if(newValue === true){
        // let clone = document.querySelector('#milkinside').cloneNode( true );
        // clone.setAttribute( 'id', 'cloned_fullscreen' );
        // clone.setAttribute( 'position', 'relative' );
        // clone.setAttribute( 'height', '100vh' );
        // clone.setAttribute( 'width', '100vw' );        
        // clone.setAttribute( 'style', 'background:none;position: fixed;' ); 
        // if(this.$route.path == '/about'){
        //   clone.querySelector('#AboutSection0').setAttribute('style', 'overflow: hidden;background-color:white');        
        //   clone.querySelector('#AboutSection7').setAttribute('style', 'overflow: hidden;');   
        // }else if(this.$route.path == '/services'){
        //   clone.querySelector('#ServicesSection0').setAttribute('style', 'background-color: rgb(245, 244, 248);');        
        //   clone.querySelector('#ServicesSection4').setAttribute('style', 'overflow: hidden;');        
        //   clone.querySelector('#ServicesSection2').setAttribute('style', 'overflow: hidden;');        
        // }
        // document.querySelector('body').appendChild(clone);
        
        setTimeout(() => {
          this.isOpenedSideMenu1 = true;
          // setTimeout(() => {
          //   var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

          //   if (isSafari) {
          //     clone.classList.add("cloned_fullscreen_animation_safari");
          //   } else {
          //     clone.classList.add("cloned_fullscreen_animation");
          //   }
            
          // }, 50)
        }, 100);

        // setTimeout(() => {
        //   if(document.getElementById("cloned_fullscreen"))
        //     document.getElementById("cloned_fullscreen").remove();  
        // }, 3500);
        
    //     const screenshotTarget = document.querySelector('#milkinside');

    //     html2canvas(screenshotTarget, {
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //     }).then((canvas) => {
    //       var elem = document.createElement("img");
    //       const base64image = canvas.toDataURL("image/png");
    //       elem.setAttribute("src", base64image);
    //       elem.setAttribute("height", window.innerHeight);
    //       elem.setAttribute("width", window.innerWidth);
    //       elem.setAttribute("alt", "Flower");
    //       document.getElementById('placehere').className = 'classname';
    //       document.getElementById("placehere").appendChild(elem);
    //     })
      }else{
        this.isOpenedSideMenu1 = false;
        if(document.getElementById("cloned_fullscreen"))
          document.getElementById("cloned_fullscreen").remove();
      }
    },    
  },
};
</script>

<style lang="scss">
@import '@/styles/index.scss';
.cloned_fullscreen_move_up{
  animation: move_up  0.8s cubic-bezier(.71,.17,.14,.93);
  animation-fill-mode: forwards ;
  // will-change: transform;
  @keyframes move_up {
    0% {
      left:32.5vw;
      top:32.5vh;
      transform: scale(0.25) translateY(0);
    }
    100% {
      left:32.5vw;
      top:32.5vh;
      transform: scale(0.25) translateY(-4000px);
    }
  }
}
.cloned_fullscreen_animation{
  animation: intro-preview1 0.7s cubic-bezier(.71,.17,.14,.93);
  animation-fill-mode: forwards ;
  will-change: transform;
  @keyframes intro-preview1 {
    0% {
      transform: scale(1);
      left:0;
      top:0;
      opacity: 1;
    }
    70% {
      transform: scale(0.25);
      left:32.5vw;
      top:31.5vh;
      opacity: 1;
    }
    100% {
      transform: scale(0.25);
      left:32.5vw;
      top:31.5vh;
      opacity: 0;
    }
  }
}

.cloned_fullscreen_animation_safari{
   will-change: transform;
  -webkit-animation: intro-preview1 0.7s cubic-bezier(.71,.17,.14,.93);
  -webkit-animation-fill-mode: forwards ;
  @-webkit-keyframes intro-preview1 {
    0% {
      transform: translate3d(1, 1, 0);
      left:0;
      top:0;
      opacity: 1;
    }
    100% {
      transform: translate3d(-25%, -25%, 0);
      left:32.5vw;
      top:31.5vh;
      opacity: 1;
    }
  }
}
</style>
