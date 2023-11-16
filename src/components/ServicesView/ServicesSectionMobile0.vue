<template>
  <!-- eslint-disable -->
  <div class="c-services__section c-services__section--no-padding c-what-we-do-mobile" style="padding-top:30px;overflow-y: auto;">
    <div class="c-what-we-do-mobile__intro-wrapper" style="position:absolute;z-index:2;width:100%">
      <div class="c-intro">
        <div class="c-line__wrapper" data-start-divider="" data-section-item="">
          <div class="c-line"></div>
        </div>
        <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
          <div class="c-intro__content" data-intro-content="">
            <div class="c-intro__left"><p class="c-intro__number">01</p>
              <div class="c-line__wrapper">
                <div class="c-intro__line c-line"></div>
              </div>
              <p class="c-intro__text">DIGITAL INNOVATION TEAM</p></div>
            <div class="c-intro__right"><p class="c-intro__text">Our Process</p></div>
          </div>
        </div>

        <div class="c-intro__content__wrapper" data-intro-content-wrapper="" style="margin-top: 50px;">
          <div class="c-intro__content" data-intro-content="">
            <div class="c-intro__left" style="width:100%;position: relative;">
               <transition name="subtitle" mode="out-in">
                  <div :key="subtitle" style="width:80%;font-size: 18px;">{{ subtitle }}</div> 
               </transition>
               <button
                class="c-strategy__dropdown-btn"
                @click="dropdownToggle"
              >
                <svg class="" width="15" height="15" fill="none" :class="{'active':isOpened}">
                  <use xlink:href="@/assets/sprites/icons.svg#down-arrow-large"></use>
                </svg>
              </button>
            </div> 
          </div>
        </div>
        <div class="c-line__wrapper" data-start-divider="" data-section-item="" style="margin-top: 10px;">
          <div class="c-line"></div>
        </div>
        <div style="position: relative;">
        <transition   
          name="body1_fade"
          mode="out-in"
        >
          <div v-show="!isOpened" class="c-intro__content__wrapper" data-intro-content-wrapper="" style="position:absolute;margin-top: 20px; width: 90%;">
            <div class="c-intro__content" data-intro-content="">
              <div class="c-intro__left">
                <h2 class="hd-1">Craft experiences that touch hearts and lives</h2></div> 
            </div>
          </div>
        </transition>
        <transition
          name="service_list_slide_fade"
          mode="out-in"
        >
          <div v-show="isOpened" class="service_list_container">
              <transition
                name="service_list_slide_fade"
                mode="out-in"
              >
                  <div v-show="service_list_index === 0" class="service_list">
                      <div>Design-to-Development</div>
                      <div>Accessibility Audits</div>
                      <div>Gap Analysis</div>
                      <div>UX + Heuristic Audits</div>
                      <div>User Research</div>
                      <div>Personas</div>
                      <div>User Experience Design (UX)</div>            
                  </div>
              </transition>
              <transition
                name="service_list_slide_fade"
                mode="out-in"
              >
                  <div v-show="service_list_index === 1" class="service_list">
                      <div>User Interface Design (UI)</div>
                      <div>Microinteraction Animation</div>
                      <div>Rapid Prototyping</div>
                      <div>Wireframing</div>
                      <div>Lottie Animation</div>
                      <div>UX Copywriting</div>
                      <div>Information Architecture</div>            
                  </div>
              </transition>
              <transition
                name="service_list_slide_fade"
                mode="out-in"
              >
                <div v-show="service_list_index === 2" class="service_list">
                    <div>Design Systems</div>
                    <div>User Flows</div>
                    <div>User Interviews</div>
                    <div>Usability Testing</div>
                    <div>Support</div>
                    <div>Pathents</div>
                    <div>User Experience Design (UX)</div>            
                </div>
              </transition>
              <div style="width:100%;text-align: center;margin-top:420px;">
                <div style="margin-right:auto;margin-left:auto;display: flex;width:50px">
                    <div id="dot1" class="dots" style="border-radius: 4px; background: black;width: 18px;height: 6px;opacity:1;margin-right:8px"></div>
                    <div id="dot2" class="dots" style="border-radius: 4px; background: black;width: 6px;height: 6px;opacity:0.4;margin-right:8px"></div>
                    <div id="dot3" class="dots" style="border-radius: 4px; background: black;width: 6px;height: 6px;opacity:0.4;margin-right:8px"></div>
                </div>
              </div>   
          </div>
        </transition>
        </div>
      </div>
    </div>
    <transition
          name="body1_fade"
          mode="out-in"
        >
      <div v-show="!isOpened" style="position:absolute;z-index:2; bottom: 15%;">
        <div class="c-what-we-do-mobile__section">
          <div class="c-what-we-do-mobile__section-title" >But what do we <br> actually do?</div>       
        </div>    
      </div>
    </transition>
    <svg class="c-services__mobile-down-icon" width="18" height="47" fill="none" style="position:absolute;z-index:2;bottom:25%;">
      <use xlink:href="@/assets/sprites/icons.svg#mouse-down"></use>
    </svg>
    <video id="intro-video" autoplay loop style="width: 330%;right: -145%; position: absolute;">
          <source src="@/assets/videos/back_1.mp4" type="video/mp4" />
          <track kind="captions" label="English captions" lang="en" default />
          Your browser does not support the video tag.
    </video>
    <!-- <img src="/assets/images/Bitmap.png" style="width: 100%; position: absolute;height:80%; bottom: 10%;"> -->
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'ServicesSectionMobile0',
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
  },
  created() {
    this.changeSubTitleInterval = setInterval(this.changeSubTitle, 2000);
  },
  data() {
    return {
      subtitles:['Digital Product Strategy', 'Design-to-Development', 'Accessibility Audits', 'Gap Analysis', 'UX + Heuristic Audits', 'User Research', 'Personas',
      'User Experience Design (UX)', 'User Interface Design (UI)', 'Microinteraction Animation', 'Rapid Prototyping', 'Wireframing', 'Lottie Animation', 'UX Copywriting',
      'Information Architecture', 'Design Systems', 'User Flows', 'User Interviews', 'Usability Testing', 'Support', 'Pathents'],
      subtitle: 'Digital Product Strategy',
      subtitle_index: 0,
      isOpened: false,
      service_list_index:0,
      changeSubTitleInterval:null,
      serviceListInterval:null,

    }
  },
  methods: {
    changeSubTitle(){
        this.subtitle_index ++;
        if(this.subtitle_index >= this.subtitles.length)
          this.subtitle_index = 0;
        this.subtitle = this.subtitles[this.subtitle_index];
    },
    changeServiceList(){
        this.service_list_index ++;
        if(this.service_list_index >= 3)
          this.service_list_index = 0;
        let dots = document.getElementsByClassName("dots");
        let index;
        if(dots && dots.length === 3){
          for (index = 0; index < 3; index++) {
            dots[index].style.opacity = 0.4;
            dots[index].style.width = '6px';
          }
          dots[this.service_list_index].style.width = "18px";
          dots[this.service_list_index].style.opacity = 1;
        }
    },
    dropdownToggle() {
      this.isOpened = !this.isOpened;
    },
  },
  computed:{
    activeStatus(){
      if(this.activeSectionIndex !== 0){
        clearInterval(this.serviceListInterval);
        clearInterval(this.changeSubTitleInterval);        
      }
      return this.activeSectionIndex === 0;
    }
  },
  watch: {    
    isOpened(newValue, oldValue) {
      if(newValue === true){
        clearInterval(this.changeSubTitleInterval);
        this.serviceListInterval = setInterval(this.changeServiceList, 2000);
      }else{
        clearInterval(this.serviceListInterval);
        this.changeSubTitleInterval = setInterval(this.changeSubTitle, 2000);
      }
    },
  },
  beforeDestroy(){
    clearInterval(this.serviceListInterval);
    clearInterval(this.changeSubTitleInterval);
  }
};
</script>

<style scoped>
.service_list_container{
  margin-top:30px;
  position: absolute;
  width: 100%;
}
.service_list{
  position: absolute;
}
.service_list div{
  font-size: 23px;
  margin-top:20px;
}
.subtitle-enter-active {
  opacity: 0.3;
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.subtitle-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.subtitle-enter
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale( 1.3 );
  opacity: 0;
}
.subtitle-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale( 0.9 );
  opacity: 0;
}
.section0_body0, .section0_body1{ position:absolute; width:100%; height: 100%;}
.service_list_slide_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.service_list_slide_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.service_list_slide_fade-enter{  transform: translateX(650px); opacity: 0;}
.service_list_slide_fade-leave-to{  transform: translateX(-650px); opacity: 0;}
.body1_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body1_fade-leave-active { transition: all 0.3s }
.body1_fade-enter { transform: translateY(300px); opacity: 0;}
.body1_fade-leave-to { transform: translateY(50px); opacity: 0;  }
  .hd-1{
    font-size: 33px;
    font-weight: 600;
  }
  .c-what-we-do-mobile__section-title{
    font-size: 24px;
    font-weight: 600;
  }
  .c-what-we-do-mobile__section{
    height: 80%;
  }
</style>
