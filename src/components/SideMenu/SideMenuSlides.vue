<!-- eslint-disable -->
<template>
    <div class="c-menu__windows" id="c-menu__windows" :style="{ transform: translateY }" @mousewheel="handleScroll">
      <router-link
        to="/"
      >
        <img class="c-menu__window"
            :class="{'active':selectedMenuImage === 0}"
            :id="'thumb_0'"
            :src="require('@/assets/images/menu_home.jpg')"
            @click="onImgClick()">      
      </router-link>
      <router-link
        to="/about"
      >
        <img class="c-menu__window"
            :class="{'active':selectedMenuImage === 1}"
            :id="'thumb_0'"
            :src="require('@/assets/images/menu_about.jpg')"
            @click="onImgClick()">      
      </router-link>
      <router-link
        to="/work"
      >
        <img class="c-menu__window"
            :class="{'active':selectedMenuImage === 2}"
            :id="'thumb_0'"
            :src="require('@/assets/images/menu_work.jpg')"
            @click="onImgClick()">      
      </router-link>
      
      <router-link
        to="/services"
      >
        <img class="c-menu__window"
            :class="{'active':selectedMenuImage === 3}"
            :id="'thumb_0'"
            :src="require('@/assets/images/menu_services.jpg')"
            @click="onImgClick()">      
      </router-link>
      <router-link
        to="/contact"
      >
        <img class="c-menu__window"
            :class="{'active':selectedMenuImage === 4}"
            :id="'thumb_0'"
            :src="require('@/assets/images/menu_contact.jpg')"
            @click="onImgClick()">      
      </router-link>
      <!-- <img v-for="(n, index) in 10" 
          class="c-menu__window"
          :class="{'active':selected_item === n}"
          :id="'thumb_' + n" 
          :src="require('@/assets/images/menu_' + n + '.jpg')"
          @click="onImgClick(n)"
          @mouseover="onImgOver(n, $event)">   --> 
    </div> 
</template>

<script>
/* eslint-disable */
import { eventBus, BUS_EVENT_RESET_SECTION_TO_INITIAL } from '@/helpers/eventBus';
import { EVENT_ROUTER_CLICK, ROUTES, ROUTES_WITH_LIGHT_BG } from '@/helpers/constants';
import { DEBOUNCE_DELAY, debounceOptions } from '@/helpers/constants';
import { debounce } from 'lodash';
export default {
  name: 'SideMenuSlides',
  mounted(){
  },
  props: {
    selected_item: {
      type: Number,
      required: true,
    },
    click_status: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      selectedMenuImage: 0,
      translateY_value: (this.selected_item) * window.innerHeight * 0.3,
    };
  },
  created() {    
    this.translateY_value = (this.selected_item) * window.innerHeight * 0.3;
  },
  mounted(){
  },
  watch: {
    selectedMenuImage(newValue, oldValue) {
      this.translateY_value = (newValue) * window.innerHeight * 0.3;
    },  
    click_status(newValue, oldValue){      
      this.show_selected_page(this.selected_item);
    }  
  },
  computed:{
    translateY() {
      return `translateY(-${this.translateY_value}px)`;
    },
  },
  methods: { 
    backgroundStyles(image) {
      return `
      background: url('@/assets/images/${image}');
      background-size: cover;
      `;
    },   
    onImgClick(){
      // this.show_selected_page(index);
      // switch(index){
      //   case 0:
      //     this.$router.push('/');break;
      //   case 1:
      //     this.$router.push('/about');break;
      //   case 2:
      //     this.$router.push('/work');break;
      //   case 3:
      //     this.$router.push('/services');break;
      //   case 4:
      //     this.$router.push('/contact');break;
      // }
      this.$emit("onHideMenu");              
    },
    show_selected_page(page_index){
            if (page_index >= 1 && page_index <= 5 && this.$route.path !== '/services') {
              this.$router.push('/services');
            } else if (page_index >= 6 && page_index <= 10 && this.$route.path !== '/about') {
              this.$router.push('/about');
            }

            // let clone = document.querySelector('#thumb_1').cloneNode( true );
            // clone.setAttribute('id', 'cloned_sidemenu_img');
            // if(page_index === 0)
            //   clone.src=require(`@/assets/images/home.jpg`);
            // else
            //   clone.src=require(`@/assets/images/menu_${page_index}.jpg`);
            // var rect = document.querySelector('#thumb_' + page_index).getBoundingClientRect();
            // clone.setAttribute('style', "position:absolute");        
            // clone.style.width = "32.5vw";
            // clone.style.height = "32.5vh";
            // clone.style.borderRadius = "1.4rem";
            // clone.style.left = rect.left+"px";
            // clone.style.top = rect.top+"px";
            // clone.classList.remove("c-menu__window");
            // document.body.appendChild(clone);
            // document.querySelector('#thumb_' + page_index).remove();
            // clone.classList.add("to_fullscreen");
            if(page_index === 0) this.logoOnClickHandler();
            else if(page_index === 1) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 0);  
            else if(page_index === 2) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 1);  
            else if(page_index === 3) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 3);  
            else if(page_index === 4) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 4);  
            else if(page_index === 5) this.$store.commit('SET_MENU_SERVICES_SELECTED_SECTIONINDEX', 4);
            else if(page_index === 6) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 0);  
            else if(page_index === 7) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 2);  
            else if(page_index === 8) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 3);  
            else if(page_index === 9) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 4);  
            else if(page_index === 10) this.$store.commit('SET_MENU_ABOUT_SELECTED_SECTIONINDEX', 6);              
            setTimeout(() => {
              this.$emit("onHideMenu");              
            }, 500);

            // setTimeout(() => {
            //   clone.remove();
            // }, 1000);
      // setTimeout(() => {
            
      //     }, 300);
    },
    logoOnClickHandler() {
      eventBus.$emit(BUS_EVENT_RESET_SECTION_TO_INITIAL);
      this.onRouterClick();
    },
    onRouterClick() {
      this.$emit(EVENT_ROUTER_CLICK);
    },
    handleScroll: debounce(function (event) {
      if(event.deltaY > 0){
        if(this.selectedMenuImage >= 5)
          return;
        this.selectedMenuImage += 1;
      } else{
        if(this.selectedMenuImage === 0)
          return;
          this.selectedMenuImage -= 1;
      }
        
    }, DEBOUNCE_DELAY, debounceOptions),    
    onImgOver(index, event){
      event.preventDefault();
      this.$emit('changeSelectedItem', index);
    }
  },
};
</script>

<style scoped lang="scss">
.img_scale{
  transform:scale(1.3);
  transition-delay: 0.5s;
  transition: all 1s cubic-bezier(.71,.17,.14,.93);
}
.c-menu__windows {
  width:30vw;
  position: absolute;
  top:35vh;
  left:68vw;
  /* transition: top 0.5s; */
  transition: all 1s cubic-bezier(.71,.17,.14,.93);
}

.active {
  opacity: 1;
}
.c-menu__window {
  width:100%;
  height:auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  /* padding-bottom: 10%; */
}

.c-menu__window:not(.current):hover {
  opacity: 0.9;
  cursor: pointer;
}
.to_fullscreen{
  animation: scale_move  1s cubic-bezier(.71,.17,.14,.93);
  animation-fill-mode: forwards ;
  @keyframes scale_move {
    0% {
      transform-origin: left top;
      transform: scale(1);
      opacity:1;
    }
    70% {
      transform-origin: left top;
      left:0;
      top:0;
      transform: scale(4.5);
      opacity:0.5;
    }
    100% {
      transform-origin: left top;
      left:0;            
      top:0;
      transform: scale(4.5);    
      opacity:0;
    }
  }
}
.control_opacity{
  animation: ctl_opacity  0.3s ease-in-out;
  animation-fill-mode: forwards ;
  @keyframes ctl_opacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
