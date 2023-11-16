<template>
  <!-- eslint-disable -->
  <div class="c-services__section c-services__section--no-padding c-what-we-do-mobile c-services__section--mobile-section">
    <div class="c-what-we-do-mobile__intro-wrapper">
      <div class="c-intro">
        <transition appear name="top_line_fade" mode="out-in">
          <div v-if="activeStatus" class="c-line__wrapper" data-start-divider="" data-section-item="">
            <div class="c-line"></div>
          </div>
        </transition>
        <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
          <transition appear name="intro_fade" mode="out-in">
            <div v-if="activeStatus" class="c-intro__content" data-intro-content="">
              <div class="c-intro__left"><p class="c-intro__number">08</p>
                <div class="c-line__wrapper">
                  <div class="c-intro__line c-line"></div>
                </div>
                <p class="c-intro__text">CAREER</p></div>
            </div>
          </transition>
          <transition appear name="body_title_fade" mode="out-in">
            <h2 v-if="activeStatus" class="main-hd">Milkinside always looking for like-minded people:</h2> 
          </transition>
          <br>
          <transition appear name="body_content_fade" mode="out-in">
            <p v-if="activeStatus" >Designers, Art & Technical Directors, Creative Coders and other Creatives.</p>
          </transition>
          <br>
          <transition-group appear name="bottom_fade" mode="out-in">
              <div v-if="activeStatus" v-for="(item, index) in carouselItems" :key="index">
                <CollapseItem :item="item"/>
              </div>
          </transition-group>
          <transition appear name="bottom_image_fade" mode="out-in">
            <video v-if="activeStatus" width="120%" id="back-video" autoplay loop muted class="c-partners-mobile__video" style="position: relative;left:-9%;margin-top: 0; margin-bottom: 30px;">
                  <source src="@/assets/videos/asset1_white.mp4" type="video/mp4" />
                  <track kind="captions" label="English captions" lang="en" default />
                  Your browser does not support the video tag.
            </video>
          </transition>
        </div>
      </div>
    </div>
    <transition appear name="bottom_fade" mode="out-in">
      <div v-if="activeStatus" class="bg-black">
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
        <div class="video-container">
            <video id="intro-video" autoplay loop class="c-partners-mobile__video">
                <source src="@/assets/videos/globe_animation.mp4" type="video/mp4" />
                <track kind="captions" label="English captions" lang="en" default />
                Your browser does not support the video tag.
            </video>
          </div>
      </div>
    </transition>
    <transition appear name="bottom_image_fade" mode="out-in">
      <div v-if="activeStatus" class="bg_black">
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
    </transition>
    <!-- <svg class="c-services__mobile-down-icon" width="18" height="47" fill="none" style="position:absolute;z-index:2;bottom:250px">
      <use xlink:href="@/assets/sprites/icons.svg#mouse-down"></use>
    </svg> -->
  </div>
  
</template>
<script>
/* eslint-disable */ 
import CollapseItem from '@/components/AboutView/AboutSectionMobile6/CollapseItem.vue';
export default {
  name: 'AboutSectionMobile6',
  data() {
    return {
      carouselItems: [{
            id: 13,
            heading: 'Senior Digital Producer',
            role: "San Francisco",
            about:"Milkinside is a renowned California-based product design agency committed to innovation, human-centric design, and creating exceptional digital experiences. With a strong focus on simplicity, elegance, and user-centricity, we strive to push the boundaries of technology while maintaining brand consistency across our diverse portfolio of projects serving Fortune 500 clients.",
            job_description:"Milkinside is seeking a dynamic and experienced Senior Digital Producer to join our California office. As a Senior Digital Producer at Milkinside, you will play a pivotal role in driving the successful execution of innovative digital projects. You will collaborate closely with multidisciplinary teams to ensure the seamless delivery of exceptional product designs that reflect our commitment to excellence.",
            key_responsibilities:`Project Leadership: Lead cross-functional project teams, collaborating with designers, engineers, and other stakeholders to ensure the successful delivery of digital products.\n
                                  Client Engagement: Serve as a key point of contact for clients, fostering strong relationships, and ensuring client satisfaction throughout the project lifecycle.\n
                                  Project Planning: Develop and manage project plans, including timelines, budgets, and resource allocation, to ensure projects are delivered on time and within scope.\n
                                  Quality Assurance: Maintain the highest standards of quality and ensure that all project deliverables align with our commitment to user-centric design and innovation.\n
                                  Risk Management: Proactively identify and mitigate project risks, providing solutions and guidance to maintain project momentum and success.\n
                                  Team Collaboration: Foster a collaborative and innovative environment, encouraging cross-functional teams to bring out their best in design and development.\n
                                  Process Improvement: Continuously evaluate and refine our project management processes to enhance efficiency and project outcomes.\n
                                  `,
            qualifications:`Bachelor's degree in a related field (Project Management, Design, Engineering, etc.). \n
                            Proven experience as a Digital Producer or Project Manager, preferably in a design-focused agency.\n
                            Strong understanding of design and development processes, including UX/UI design and user-centered methodologies.\n
                            Excellent communication, leadership, and client management skills.\n
                            Exceptional organizational and problem-solving abilities.\n
                            A passion for innovation and a commitment to delivering exceptional digital products\n
                            `,
          }, {
            id: 14,
            heading: "Art Director",
            role: 'Worldwide',
            about:"Milkinside is a leading California-based product design agency dedicated to the pursuit of innovation, excellence, and the creation of extraordinary digital experiences. With a strong emphasis on user-centric design, simplicity, and timeless aesthetics, we continuously push the boundaries of technology while upholding brand consistency across our diverse range of projects",
            job_description:"Milkinside is currently seeking a visionary and accomplished Art Director to join our California office. As an Art Director at Milkinside, you will assume a pivotal role in shaping the creative direction of our digital projects. Your leadership and artistic vision will contribute significantly to the delivery of exceptional product designs that reflect our unwavering commitment to excellence.",
            key_responsibilities:`Creative Leadership: Provide artistic direction and lead a team of designers, ensuring that all design work aligns with our brand's creative vision and core values. \n
                                Conceptualization: Spearhead the ideation and conceptualization of design solutions that seamlessly blend innovation, simplicity, and elegance. \n
                                Design Strategy: Collaborate with cross-functional teams to develop design strategies that enhance user experiences and drive product success.\n
                                Artistic Excellence: Elevate the quality and artistic excellence of design deliverables, maintaining the highest standards in visual aesthetics and user-centered design.\n
                                Client Engagement: Act as a key liaison between clients and the design team, fostering strong client relationships, and ensuring that creative solutions meet and exceed client expectations.\n
                                Mentorship: Provide mentorship and guidance to team members, nurturing their creative talents and fostering a culture of continuous improvement.\n
                                Brand Consistency: Uphold and reinforce brand consistency across all design projects and touchpoints, ensuring alignment with Milkinside's values and vision.
                                `,
            qualifications:`Bachelor's degree in Art, Design, or a related field. \n
                            Proven experience as an Art Director, with a portfolio showcasing exceptional design work.\n
                            Strong understanding of design principles, visual aesthetics, and user-centered design methodologies.\n
                            Proficiency in design software and tools.\n
                            Exceptional leadership, communication, and client management skills.\n
                            A deep passion for innovation and an unwavering commitment to delivering creative excellence.\n
                            `,
          }, {
            id: 15,
            heading: 'Houdini Artist',
            role: 'Worldwide',
            about:"Milkinside is a leading California-based product design agency committed to pioneering innovation, excellence, and the creation of exceptional digital experiences. With a strong emphasis on user-centric design, we consistently push the boundaries of technology while maintaining brand consistency across our diverse portfolio of projects.",
            job_description:"Milkinside is in search of a talented and imaginative Houdini Artist to join our California office. As a Houdini Artist at Milkinside, you will play a pivotal role in crafting stunning visual effects and dynamic simulations that enhance our digital product designs. Your expertise in Houdini will be instrumental in delivering captivating and innovative design solutions.",
            key_responsibilities:`Visual Effects Mastery: Utilize Houdini to create stunning visual effects, simulations, and animations that elevate our digital projects to new heights of excellence.\n
                                  Dynamic Simulations: Develop dynamic simulations that enhance user experiences and bring our digital products to life, pushing the boundaries of creative innovation.\n
                                  Collaborative Creativity: Collaborate closely with multidisciplinary teams, including designers and developers, to seamlessly integrate Houdini-generated elements into our projects.\n
                                  Quality Assurance: Ensure the highest standards of quality and attention to detail in all Houdini-generated assets, aligning with our user-centric design philosophy.\n
                                  Innovation and Exploration: Continually explore and experiment with Houdini's capabilities to drive innovation and bring fresh, cutting-edge visual effects to our projects.\n
                                  Client Engagement: Participate in client meetings and presentations to demonstrate the impact of Houdini-generated visuals and simulations on the overall project.\n
                                  `,
            qualifications:`Proven experience as a Houdini Artist, with a portfolio showcasing exceptional visual effects and dynamic simulations.\n
                            Proficiency in Houdini and related software tools.\n
                            Strong understanding of design principles, visual aesthetics, and user-centered design methodologies.\n
                            Excellent communication and collaboration skills.\n
                            A passion for innovation and a commitment to delivering visually stunning and impactful design solutions.\n
                            `,
          },{
            id: 16,
            heading: 'Motion Designer',
            role: 'Worldwide',
            about:"Milkinside is a distinguished California-based product design agency that thrives on innovation, excellence, and the creation of captivating digital experiences. Our dedication to user-centric design, combined with our commitment to simplicity and aesthetic appeal, drives us to push the boundaries of technology while maintaining brand consistency across our diverse portfolio of projects.",
            job_description:"Milkinside is on the lookout for a highly creative and skilled Motion Designer to join our California office. As a Motion Designer at Milkinside, you will play a pivotal role in bringing our digital product designs to life through dynamic and engaging animations. Your talent and artistic vision will contribute significantly to the delivery of visually stunning and user-centric design solutions.",
            key_responsibilities:`Creative Animation: Develop captivating animations and motion graphics that enhance user experiences and effectively convey our design concepts.\n
                                  Storyboarding: Collaborate with multidisciplinary teams to create storyboards and concepts that align with project goals and user-centered design principles.\n
                                  Visual Storytelling: Use animation to tell compelling visual stories that resonate with our audience and evoke emotion.\n
                                  Cross-Platform Integration: Seamlessly integrate animations into various digital platforms and applications, ensuring consistent brand representation.\n
                                  Quality Assurance: Maintain high-quality standards in animation deliverables, with an acute attention to detail and precision.\n
                                  Client Engagement: Act as a creative liaison with clients, presenting and discussing animation concepts and design solutions.\n
                                  `,
            qualifications:`Proven experience as a Motion Designer, with a portfolio showcasing exceptional motion graphics and animations.\n
                            Proficiency in animation software and tools, including After Effects, Cinema 4D, and Adobe Creative Suite.\n
                            Strong understanding of design principles, visual aesthetics, and user-centered design methodologies.\n
                            Excellent communication and collaboration skills.\n
                            A passion for innovation and a commitment to delivering visually captivating and impactful design solutions.\n
                            `,
          }
        ],
    };
  },
  components: {
    CollapseItem
  },
  props: {
      activeSectionIndex: {
        type: Number,
        required: true,
      },
  },  
  computed:{
    activeStatus(){
      if(this.activeSectionIndex === 6){
        this.$store.commit('SET_NAV_LIGHT', true);
      }

      return this.activeSectionIndex === 6;
    }
  },
  methods: {
    toggleCollapse(index) {
      this.carouselItems[index].collapsed = !this.carouselItems[index].collapsed;
    },
  },
};
</script>

<style scoped>
.collapsible_content {
    /* margin-top: 10px;
    margin-bottom: 10px; */
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
    &.content_active{
      max-height: 150px;
    }
}
.top_line_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.top_line_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.top_line_fade-enter { transform:translateY(30px); opacity: 0; }
.top_line_fade-leave-to {transform:translateY(30px); opacity: 0;}

.intro_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { transform:translateY(120px);opacity: 0; }
.intro_fade-leave-to { transform:translateY(120px); opacity: 0;}

.body_title_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body_title_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_title_fade-enter { transform:translateY(150px);opacity: 0; }
.body_title_fade-leave-to { transform:translateY(150px); opacity: 0;}

.body_content_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body_content_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_content_fade-enter { transform:translateX(350px);opacity: 0; }
.body_content_fade-leave-to { transform:translateX(350px); opacity: 0;}

.bottom_image_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.bottom_image_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.bottom_image_fade-enter { transform:translateX(-350px);opacity: 0; }
.bottom_image_fade-leave-to { transform:translateX(-350px); opacity: 0;}

.bottom_line_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.bottom_line_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.bottom_line_fade-enter { transform:translateY(150px);opacity: 0; }
.bottom_fade-leave-to { transform:translateY(150px); opacity: 0;}

.bottom_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.bottom_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.bottom_fade-enter { transform:translateX(350px);opacity: 0; }
.bottom_fade-leave-to { transform:translateX(350px); opacity: 0;}
.main-hd{
  font-size: 36px;
  font-weight: 500;
  margin-top: 5rem;
}
.about0-line{
  margin-top: 23rem;
}
.award-img{
  margin-top: 10rem;

}
.sub-hd{
  font-size: 24px;
  font-weight: 500;
}
.no-hd{
  font-size: 28px;
  font-weight: 500;
  color: darkgray;
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
