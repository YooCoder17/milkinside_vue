<template>
  <!-- eslint-disable -->
  <div class="c-services__section c-services__section--no-padding c-what-we-do-mobile" style="height:90vh; padding-top:30px;overflow-y: auto;">
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
              <p class="c-intro__text">WE'VE BEEN WAITING FOR YOU</p></div>
            <div class="c-intro__right"><p class="c-intro__text">Our Process</p></div>
          </div>
        </div>
        <div style="width:100%; margin-top:auto; margin-bottom: auto;position: relative;height:40vh; overflow: hidden;">
            <transition appear name="title_fade" mode="out-in">
              <div v-if="step != 5" id="mobile_title" :class="{ 'active_zoomin': title_status == 1, 'active_zoomout': title_status == 2 }">What's your name?</div>
            </transition>

            <transition appear name="text_fade" mode="out-in">
              <input v-if="step == 1"  @input="handleTextareaChange(1)" ref="mobile_step1" type="text" class="form_input" required placeholder="Introduce yourself"/>
            </transition>

            <transition appear name="text_fade" mode="out-in">
              <input v-if="step == 2" ref="mobile_step2" type="text" class="form_input" required placeholder="Enter your email"/>
            </transition>

            <transition appear name="text_fade" mode="out-in">
              <input v-if="step == 3" ref="mobile_step3" type="text" class="form_input" required placeholder="A few words"/>
            </transition>

            <transition appear name="text_fade" mode="out-in">
              <input v-if="step == 4" ref="mobile_step4" type="text" class="form_input" @input="handleTextareaChange(4)" required placeholder="Describe"/>
              <!-- <div v-if="step == 4" id="introduce_txt" style="vertical-align: bottom; height:200px; width:100%"><TextArea placeholder="Describe" type="text" class="form_input" @input="handleTextareaChange" @focus="onMessageFocus" @blur="onTextAreaBlur" required style="height:210px;resize: none;border:none"></TextArea></div> -->
            </transition>
            <transition appear name="progress_fade" mode="out-in">
              <div v-if="step != 5" ref="mobile_progress" class="mobile_progress">
                <div class="mobile_left"></div>
                <div class="mobile_right"></div>
              </div>
            </transition>
            <transition appear name="button_fade" mode="out-in">
              <button
                v-if="step != 5" 
                class="c-services__down-button"
                @click="onNext"
                style="bottom: 20px;right: 0;position: absolute;width: 65px;height: 65px;"
              >
                  <svg width="24" height="24" color="#000" fill="none">
                    <use xlink:href="@/assets/sprites/icons.svg#right"></use>
                  </svg>
              </button>
            </transition>
            <transition appear name="success_fade" mode="out-in">
              <div v-if = "step == 5" style="font-size:max(2.1rem, 21px); font-weight: 700;margin-top: 12vh;">
                <div style="font-size: 7rem;">Thank you!</div>
                <div style="margin-top:25px">Your application has been successfully sent.</div>
                <div>We will contact you.</div>
              </div>
            </transition>
        </div>
        <div style="font-size: max(2rem, 19px);font-weight: 700; line-height: 1.25;margin-top: 8vh;">
          <div> <a style="color:rgb(252, 16, 126)">interact</a>@milkinside.com</div>                            
          <div style="margin-top: 30px;"> 
                At Milkinside, we work with fewer clients to allow our creative
                teams to focus on building ground-breaking experiences.
          </div>   
        </div>       
      </div>
    </div>  
    <div style="height: 1px; bottom:7vh; background-color: rgb(216, 216, 216);position: absolute; width: 100%;"></div>
    <div style="position: absolute; text-align: center;bottom:22px;width: 100%;opacity: 0.6;">milkinside.com</div>
    <div style="width: 100%;position: absolute;bottom: 10px;">
      <div style="border-radius: 4px;margin-left: auto;margin-right: auto;height: 6px;background-color: rgb(14, 13, 13);width: 40%;"></div>
    </div>
    <div style="top:90vh; position: absolute;">
      <div class="bg-black">
              <div class="c-partners-mobile__inner ">
                  <div class="c-partners-mobile__intro-wrapper ">
                      <div class="c-intro">
                          <h1 class="no_hd-7" style="margin-top:40px">We Create</h1>
                          <h2 class="bg-hd-7"  >Inspiring Design, Building Brilliance</h2>
                          <router-link to="/contact" style="margin-top: 50px; display: block; width: 100%;  max-width: 450px;">
                              <div class="section4-footer-left">
                                <span
                                  class="section-footer-arrow"
                                  style="background:linear-gradient(217.27deg,#d1bddb -17.84%,#f2eff0 100%)"
                                >
                                  <svg width="20" height="20" color="#000" fill="none">
                                    <use xlink:href="@/assets/sprites/icons.svg#right"></use>
                                  </svg>
                                </span>
                                <p class="section-footer-left-title" style="font-size: max(1.6rem, 16px);color:white;font-weight:100;opacity:0.6;margin-top: 4px;margin-bottom:5px">Let's build future together</p>
                                <p class="section-footer-left-title" style="font-size: max(2.2rem, 18px);font-weight:400; color:white">
                                    Get in touch with us
                                </p>
                              </div>
                          </router-link>
                      </div>
                  </div>
              </div>
              <!-- <img class="c-partners-mobile__video" width="100%" src="/assets/images/Bitmap2.png"> -->
              <div class="video-container">
                  <video id="intro-video" autoplay loop class="c-partners-mobile__video">
                      <source src="@/assets/videos/globe_animation.mp4" type="video/mp4" />
                      <track kind="captions" label="English captions" lang="en" default />
                      Your browser does not support the video tag.
                  </video>
              </div>
      </div>
      <div class="bg_black" style="margin-top:-100px">
          <div class="c-partners-mobile__inner">
              <div class="c-partners-mobile__intro-wrapper">
                  <div class="c-intro">
                      
                      <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
                              <div class="" style="display:flex;align-items: start; margin-bottom: 30px;">
                                  <div class="left" style="flex: 1;">
                                      <p class="main-text">Service </p>    
                                  </div>                                
                                  <div class="right-block" style="flex: 1;">
                                      <ul class="footer-links">
                                          <li class="link">
                                              <a href="">Product Strategy</a>
                                          </li>
                                          <li class="link">
                                              <a href="">What we do?</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Partners</a>
                                          </li>
                                          <li class="link">
                                              <a href="">FAQ</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Schedule</a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>

                              <div class="" style="display:flex;align-items: start; margin-bottom: 30px;">
                                  <div class="left" style="flex: 1;">
                                      <p class="main-text">Work  </p>    
                                  </div>
                              
                                  <div class="right-block" style="flex: 1;">
                                      <ul class="footer-links">
                                          <li class="link">
                                              <a href="">Product Design</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Motion Graphics</a>
                                          </li>
                                          <li class="link">
                                              <a href="">AI-based products </a>
                                          </li>
                                          <li class="link">
                                              <a href="">iOS applications</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Automotive</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Branding and Identity</a>
                                          </li>
                                      </ul>
                                        
                                  </div>
                              </div>

                              <div class="" style="display:flex;align-items: start;    margin-bottom: 30px;">
                                  <div class="left" style="flex: 1;">
                                      <p class="main-text">About  </p>    
                                  </div>                                
                                  <div class="right-block" style="flex: 1;">
                                      <ul class="footer-links">
                                          <li class="link">
                                              <a href="">About us </a>
                                          </li>
                                          <li class="link">
                                              <a href="">Values</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Culture </a>
                                          </li>
                                          <li class="link">
                                              <a href="">Awards</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Сareer </a>
                                          </li>
                                      </ul>
                                        
                                  </div>
                              </div>
                              <div class="social-block" style="display:flex;align-items: start;">
                                      <p class="social-icon"><a href=""> 
                                          <img src="/assets/images/facebook.png" width="30" height="30" alt="fb">
                                      </a>  </p>
                                      <p class="social-icon"><a href=""> 
                                          <img src="/assets/images/behance.png" width="30" height="30" alt="behance">
                                      </a>  </p>
                                      <p class="social-icon"><a href=""> 
                                          <img src="/assets/images/linkedin.png" width="30" height="30" alt="linkedin">
                                      </a>  </p>
                                      <p class="social-icon"><a href=""> 
                                          <img src="/assets/images/facebook.png" width="30" height="30" alt="fb">
                                      </a>  </p>
                              </div>
                              <div class="social-block" style="display:flex;align-items: start;">
                                  <p class="social-icon"><a href=""> 
                                      <img src="/assets/images/vimeo.png" width="25" height="25" alt="fb">
                                  </a>  </p>
                                  <p class="social-icon"><a href=""> 
                                      <img src="/assets/images/instagram.png" width="30" height="30" alt="behance">
                                  </a>  </p>
                                  <p class="social-icon"><a href=""> 
                                      <img src="/assets/images/pinterest.png" width="30" height="30" alt="linkedin">
                                  </a>  </p>
                                  <p class="social-icon"><a href=""> 
                                      <img src="/assets/images/twitter.png" width="30" height="30" alt="twitter">
                                  </a>  </p>
                              </div>    
                              <p class="copyright">©2022 Milkinside. All rights reserved.</p>
                      </div>
                  </div>
              </div>
            
          </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'ContactViewMobile',
  props: {
    
  },
  created() {
  },
  data() {
    return {
      step: 1,
      title_status: 0,
      first_name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    onNext(e) {
      switch(this.step){
        case 1:
          this.first_name = this.$refs.mobile_step1.value; break;
        case 2:
          this.email = this.$refs.mobile_step2.value; break;
        case 4:
          this.message = this.$refs.mobile_step4.value; break;
      }
      this.step ++;
      let title = document.getElementById("mobile_title");
      this.title_status = 1;

      const leftDiv = document.querySelector('.mobile_left');
      const rightDiv = document.querySelector('.mobile_right');

      const newLeftPercentage = 25 * (this.step - 1);
      const newRightPercentage = 100 - newLeftPercentage;

      leftDiv.style.flex = `${newLeftPercentage}%`;
      rightDiv.style.flex = `${newRightPercentage}%`;

      setTimeout(() => {
        if(this.step == 2)
          title.textContent = "What's your email?";
        if(this.step == 3)
          title.textContent = "Tell me everything";
        if(this.step == 4)
          title.textContent = "I work for:";
        console.log(title.textContent);
        this.title_status = 2;
        setTimeout(() => {
          this.title_status = 0;
        }, 200);
      }, 200);      

      if(this.step == 5){
        e.preventDefault();
        const url =
          "https://vl5w2lg4m2.execute-api.us-east-1.amazonaws.com/dev/contact";
        let bodyObject = {};
        bodyObject['first_name'] = this.first_name;
        bodyObject['email'] =  this.email;
        bodyObject['message'] =  this.message;
        let bodyJSON = JSON.stringify(bodyObject);
        // fetch(url, {
        //   mode: "no-cors",
        //   method: "POST",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json"
        //   },
        //   body: bodyJSON
        // })
        //   .then(response => {
        //     console.log(response);
        //     console.log(response.text());
        //     response.text();
        //   })
        //   .then(text => {});
      }
    },
    handleTextareaChange(step){
      let dom = null;
      switch(step){
        case 1:
          dom = this.$refs.mobile_step1; break;
        case 2:
          dom = this.$refs.mobile_step2; break;
        case 3:
          dom = this.$refs.mobile_step3; break;
        case 4:
          dom = this.$refs.mobile_step4; break;
      }
      if(dom.value.length > 15)
         dom.style.fontSize = '5rem';
      if(dom.value.length > 20)
         dom.style.fontSize = '4.5rem';
      if(dom.value.length > 25)
         dom.style.fontSize = '4rem';
    }
  },
  computed:{
   
  },
  watch: {    
    
  },
};
</script>

<style scoped>

.mobile_progress{
  height: 3px; top:39vh; position: absolute; width: 100%;display: flex;
}
.mobile_left {
  flex: 0%;
  background-color: rgb(32, 32, 32);
  transition: flex 0.5s,
}

.mobile_right {
  flex: 100%;
  background-color: rgb(255, 255, 255);
  transition: flex 0.5s,
}
.success_fade-enter-active { opacity: 1; transition: all 0.5s cubic-bezier(.71,.17,.14,.93);}
.success_fade-leave-active { transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.success_fade-enter { opacity: 0; transform: translateY(-250px);}
.success_fade-leave-to {opacity: 0; transform: translateY(-50px);}

.button_fade-enter-active { opacity: 1; transition: all 0.5s cubic-bezier(.71,.17,.14,.93);}
.button_fade-leave-active { transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.button_fade-enter { opacity: 0;}
.button_fade-leave-to {opacity: 0; transform: translateY(-50px);}

.progress_fade-enter-active { opacity: 1; transition: all 0.5s cubic-bezier(.71,.17,.14,.93);}
.progress_fade-leave-active { transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.progress_fade-enter { opacity: 0;}
.progress_fade-leave-to {opacity: 0; transform: translateY(-350px);}

.title_fade-enter-active { opacity: 1; transition: all 0.5s cubic-bezier(.71,.17,.14,.93);}
.title_fade-leave-active { transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.title_fade-enter { opacity: 0; transform: translateY(-60px);}
.title_fade-leave-to {opacity: 0; transform: translateY(-50px);}
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
.text_fade-enter-active { opacity: 1; transition: all 0.4s cubic-bezier(.71,.17,.14,.93);}
.text_fade-leave-active { transition: all 0.4s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.text_fade-enter { opacity: 0; transform: translateY(-30px);}
.text_fade-leave-to {opacity: 0; transform: translateY(30px);}

#mobile_title{
  position:absolute;
  font-size: max(6.5rem, 34px); font-weight: 700; margin-bottom: 40px; margin-top:30px;
  &.active_zoomin{
     animation: zoominAnimation 0.2s cubic-bezier(.71,.17,.14,.93);
     animation-fill-mode: forwards;
  }
  &.active_zoomout{
     animation: zoomoutAnimation 0.2s cubic-bezier(.71,.17,.14,.93);
     animation-fill-mode: forwards;
  }
}
.form_input{
  position: absolute;
  bottom:35px;
  caret-color: #1d6197;
  font-size: 6rem;
  font-weight: 700;
  width: 100%; 
  outline: 0; 
  border-width: 0;
  background: #f5f4f8;
}
@keyframes zoominAnimation {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8); 
  }
}
@keyframes zoomoutAnimation {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1); 
  }
}
.video-container{
    position: relative;
    width: 100%;
}
.video-container::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(0 0 0 / 100%));
}
.video-container::before {
    content: "";
    top: 0;
    position: absolute;
    width: 100%;
    height: 20%;
    background: linear-gradient(to top, rgb(0 0 0 / 0%), rgb(0 0 0 / 100%));
}

#intro-video{
    width: 100%;
    height: 80vh;
    object-fit: cover;
    transition: all 0.8s cubic-bezier(.71,.17,.14,.93);
}
.top-text{
    margin: 20px 20px;
    width: 200px;
    position: absolute;
    top: -12px;
    right: 0;
}
.right-block > .text{
    font-size: 22px;
    margin: 10px 0px;
}
.bg-hd{
    font-size: 28px;
    margin-top: 0px;
    padding-top: 10px;
    color: gray;
    border-top: 5px solid transparent;

}
.active{
    border-top: 8px solid black;
    color: black;
}

.faq-tab, .schedule-tab{
    overflow-y: auto;
    margin-top: 35px;
}
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-thumb {
    background-color: whitesmoke;
    border-radius: 6px;
}
.bg-hd-7{
    font-size: 30px;
    font-weight: 400;
    margin-top: 10px;
    padding-top: 10px;
    color: whitesmoke;
}
.sub-hd-7{
    font-size: 22px;
    margin-top: 25px;
}
.bg-black{
    background-color: black;
    color: white;
    border-radius: 20px;
    margin-top: 20px;
    padding-top:30px;
}
.no_hd-7{
    font-size: 48px;
    font-weight: 600;
    flex: 2;
}
.c-input{
    background-color: #161616;
    color: lightgray;
    padding: 25px;
    border-radius: 20px;
    border: 0px;
    width: 100%;
    margin-top: 20px;
}
.email-btn{
    color: black;
    background-color: aliceblue;
    border: 0px;
    padding: 12px 18px;
    border-radius: 15px;
    position: absolute;
    right: 33px;
    margin-top: 30px;
}
.main-text{
    font-size: 26px;
}
.footer-links{
    color: gray;
    list-style: none;
    font-weight: 400;
}
.footer-links >li{
   margin-bottom: 10px;
}
.bg_black{
    background-color: black;
    color: white;
    padding-bottom: 30rem;
    margin-top:-50px
}
.social-icon{
    width: 25%;
    text-align: center;
}
.social-block{
    margin-top:20px;
}
.copyright{
    margin-top:60px;
    margin-bottom:20px;
    color: gray;
    text-align: center;
}
.section4-footer-left {
  margin-right: auto;
  margin-top:7px;
  display: flex;
  height: 110px;
  flex-direction: column;
  justify-content: center;
  padding: 25px 24px;
  backdrop-filter: blur(50px);
  border-radius: 32px;
  background-color: rgb(33 32 32 / 70%);
  z-index: 4;
  position: relative;
}
</style>
