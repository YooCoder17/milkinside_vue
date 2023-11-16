<template>
  <!-- eslint-disable -->
    <div class="c-partners-mobile c-services__section c-services__section--mobile-section c-services__section--no-padding"  style="overflow-y: auto;">
        <div class="c-partners-mobile__inner" style="margin-top: 10px;">
            <div class="c-partners-mobile__intro-wrapper">
                <div class="c-intro">
                    <p class="top-text">People are always asking same questions</p>
                    <div class="c-line__wrapper" style="margin-top:20px;" data-start-divider="" data-section-item="">
                        <div class="c-line"></div>
                    </div>
                    <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
                            <div class="c-intro__left" style="align-items: start;">
                                <h2 class="bg-hd" :class="{ 'active': showFaq }"  @click="toggleContent('faq')">FAQ</h2>
                                <h2 class="bg-hd" :class="{ 'active': showSch }" style="margin-left: 50px;"  @click="toggleContent('schedule')">Schedule</h2>
                            </div>
                    </div>
                    <div style="position: relative; overflow: hidden;height:1110px">
                        <!-- //Faq TAB -->
                        <transition
                            name="faq_schedule_fade"
                            mode="out-in"
                        >
                            <div class="faq-tab" id="faq-tab"  v-show="showFaq" style="position: absolute;">
                                <div
                                    v-for="(item, index) in this.Faq"
                                    :key="index + item.id"
                                    ref="FaqItem"
                                    class="item_div"
                                >
                                    <FaqItem :item="item"/>
                                </div>
                            </div>
                        </transition>
                        <!-- //SChedule TAB -->
                        <transition
                            name="faq_schedule_fade"
                            mode="out-in"
                        >
                            <div class="schedule-tab" id="schedule-tab" v-show="showSch" style="position: absolute;">
                                <div
                                    v-for="(item, index) in this.Schedule"
                                    :key="index + item.id"
                                    ref="ScheduleItem"
                                    class="item_div"
                                >
                                    <ScheduleItem :item="item"/>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
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
         <div class="bg_black">
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
</template>
<script>
/* eslint-disable */
import FaqItem from '@/components/ServicesView/ServicesSectionMobile4/FaqItem.vue';
import ScheduleItem from '@/components/ServicesView/ServicesSectionMobile4/ScheduleItem.vue';
export default {
  name: 'ServicesSectionMobile4',
  components: {
    FaqItem,
    ScheduleItem
  },
  data() {
    return {
      showFaq: true,
      showSch: false,
      Faq: [{
          id: 1,
          title: 'What Is Your Design Process?',
          description: "Our design process is a comprehensive journey that begins with thorough research and discovery, where we dive deep into understanding your users, their needs, and your business objectives. This phase informs every subsequent step of our process. We then move into the creative ideation phase, where we brainstorm concepts that align with your goals. Following this, our talented team of designers and UX engineers work meticulously to bring these concepts to life.Our commitment to user-centric design means that we continuously validate our designs through user testing and feedback. We also prioritize the creation of visually stunning and intuitive user interfaces (UI), which seamlessly integrate motion and interaction elements for a truly immersive experience.",
          value_number: '1-3',
          value_title: 'Availability\nweeks',
          value_description: null,
        }, {
          id: 2,
          title: 'Show Us Your Portfolio?',
          description: "Certainly! While we offer a glimpse of our work in our portfolio, we typically provide an in-depth showcase during our Statement of Work (SOW) call when we first meet with clients. Our portfolio spans various projects for Fortune 100 and start, showcasing our expertise in visual UI design, motion, interaction, and CGI for immersive experiences.",
          value_number: '4',
          value_title: 'Availability\nweeks',
          value_description: null,
        }, {
          id: 3,
          title: 'What Sets Your Agency Apart?',
          description: "Milkinside is much more than a typical agency. It is an innovation agency that supports the client's product development from beginning to end. It offers services such as product narrative, product branding, product design, UI user experience, motion design, design languages, motion design languages, and more.",
          value_number: '5-6',
          value_title: 'Availability\nweeks',
          value_description: null,
        }, {
          id: 4,
          title: 'What Is Your Approach to User-Centered Design?',
          description: "User research is our compass, guiding us from concept to creation. We champion intuitive visual UI design, captivating motion, and interaction elements, ensuring users are not just engaged but empowered. In the realm of immersive storytelling, we wield CGI as a force to transport users to extraordinary realms. ",
          value_number: '8-9',
          value_title: 'Availability\nweeks',
          value_description: null,
        }, {
          id: 50,
          title: 'What type of Design can you offer?',
          description: "Full-service design partner: Milkinside supports the client's product development from beginning to end. It offers services such as product narrative, product branding, product design, UI user experience, motion design, logo design, design languages, motion design systems and style guides, and more.",
          value_number: '8-9',
          value_title: 'Availability\nweeks',
          value_description: null,
        }],
        Schedule: [{
          id: 5,
          title: 'CES 2016-2023',
          description: "As a testament to our excellence, we proudly visit and present our products with our esteemed clients at CES, the renowned annual trade show organized by the Consumer Technology Association. Held in January at the Las Vegas Convention Center in Winchester, Nevada, United States, CES is where we unveil the future of consumer electronics, year after year.",
          value_number: '13',
          value_title: '18 Jun 2022',
          value_description: 'San-Francisco',
        }, {
          id: 6,
          title: 'TechCrunch Disrupt 2022',
          description: "TechCrunch Disrupt is an annual tech conference that stands as a beacon for innovation, a hotbed for disruptive ideas, and a gathering of some of the brightest minds in the tech and startup ecosystem. Our leaders frequently grace the stage at TechCrunch Disrupt, where they share their visionary insights and expertise with the world, further solidifying our position as industry pioneers.",
          value_number: '18',
          value_title: 'Aug 2022',
          value_description: 'Berlin',
        }, {
          id: 7,
          title: 'Web Summit 2018 ',
          description: "We've had the honor of joining the esteemed Web Summit not once, but twice, showcasing our unwavering dedication to shaping the ever-evolving digital frontier. For Milkinside, the privilege of participating in Web Summit has been transformative. It's not just about showcasing our expertise in design and technology; it's about being part of a global movement that propels the boundaries of innovation forward.",
          value_number: '02',
          value_title: 'Sep 2022',
          value_description: 'Zurich',
        }, {
          id: 8,
          title: 'Apple Worldwide Developers Conference',
          description: "We've had the privilege of being part of the prestigious Apple Worldwide Developers Conference, an experience that not only allowed us to shape the tech landscape but also introduced us to remarkable individuals. These invaluable connections continue to fuel our ongoing collaboration with Apple, emphasizing our shared commitment to innovation.",
          value_number: '11',
          value_title: 'Nov 2022',
          value_description: 'New-York',
        }, {
          id: 9,
          title: 'Mobile World Congress',
          description: "For our team at Milkinside, participating in the Mobile World Congress is not just an opportunity; it's a privilege. It allows us to immerse ourselves in the pulse of the mobile industry, gain insights into emerging trends, and connect with remarkable individuals who share our passion for innovation. Our experiences at MWC have been nothing short of inspiring, and the connections we've made continue to drive our mission of pushing the boundaries of what's possible in the realm of mobile design and technology.",
          value_number: '11',
          value_title: 'Nov 2022',
          value_description: 'New-York',
        }],      
    };
  },
  methods: {
    toggleContent(data) {
      if (data === 'faq') {
        this.showFaq = true;
        this.showSch = false;
      } else {
        this.showFaq = false;
        this.showSch = true;
      }
    },
  },
};
</script>

<style scoped>
.faq_schedule_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.faq_schedule_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.faq_schedule_fade-enter{ transform: translateX(350px); opacity: 0;}
.faq_schedule_fade-leave-to{ transform: translateX(-350px); opacity: 0;}

.description_fade-enter-active { opacity: 1; transform: scaleY(1); transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.description_fade-leave-active { transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.description_fade-enter { opacity: 0; transform: scaleY(0)}
.description_fade-leave-to {opacity: 0; transform: scaleY(0);}
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
