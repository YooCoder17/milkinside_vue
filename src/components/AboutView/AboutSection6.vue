<!-- eslint-disable -->
<template>
   <div class="c-services__wrapper">

        <div class="c-services__sections">
          <!-- <svg class="c-services__down-icon" width="24" height="24" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#down"></use>
          </svg> -->
          <div class="c-faq-schedule c-services__section c-services__section--no-padding"
              data-services-section="4">
            <div class="c-faq-schedule__content-wrapper">
              <div style="display:flex;margin-bottom:auto">
                  <div class="c-faq-schedule__content">
                      <transition
                        name="intro_fade"
                        mode="out-in"
                      >
                        <ServicesSectionIntro
                          v-if="activeStatus"
                          :number="'08'"
                          :category="'DIGITAL INNOVATION TEAM'"
                          :title="'OUR PROCESS'"
                        />
                      </transition>
                    <!-- <ServicesSectionHeadingFAQ :activeType="sectionAttributes.body[0].type"/> -->
                      <transition
                          name="heading_fade"
                          mode="out-in"
                      >
                        <div v-if="activeStatus"  class="c-faq-schedule__heading-row" style="position:relative">
                          <div class="c-faq-schedule__heading-text">Career</div>
                          <div class="c-faq-schedule__heading-text" style="position:absolute;right:0">{{ "Milkinside always looking for like-minded people" }}</div>
                        </div>
                      </transition>
                      <transition
                        name="first_line_fade"
                        mode="out-in"
                      >
                        <SectionLine v-if="activeStatus" class="c-faq-schedule__line"/>
                      </transition>

                      <div class="items_top_container" id="collapse_scroll_container" style="overflow-y:auto; height:60vh;flex-grow: 1;" @mousewheel="parentContainerScroll">
                        <transition name="faq_fade" tag="div">
                          <div v-show="activeStatus && activeType == 0" class="items_sub_container">
                            <div
                              v-for="(item, index) in values"
                              :key="index + item.id"
                              ref="FaqScheduleItem"
                              class="item_div"
                            >
                              <FaqScheduleItem :item="item" @expanded_item="expanded_item" @closed_item="closed_item"/>
                            </div>                            
                        </div>
                        </transition>
                      </div>
                  </div>
                  <transition
                        name="vido_fade"
                        mode="out-in"
                      >
                    <div v-if="activeStatus" class="section4_back_anime">
                        <video width="100%" id="back-video" autoplay loop muted>
                          <source src="@/assets/videos/asset1_white.mp4" type="video/mp4" />
                          <track kind="captions" label="English captions" lang="en" default />
                          Your browser does not support the video tag.
                        </video>
                    </div>
                  </transition>
                  <div v-if="activeStatus" id="mouse-scroll" ref="MouseScroll">
                    <div class="mouse">
                      <div class="mouse-in"></div>
                    </div>
                    <!-- <div>
                        <span class="down-arrow-1"></span>
                        <span class="down-arrow-2"></span>
                        <span class="down-arrow-3"></span>
                    </div> -->
                  </div>
              </div>
            </div>
            <transition
                        name="footer_fade"
                        mode="out-in"
                      >
                <FaqScheduleFooter v-if="activeStatus"/>
              </transition>
          </div>
        </div>

  </div>
</template>

<script>
/* eslint-disable */
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
// import ServicesSectionHeadingFAQ from '@/components/ServicesView/ServicesSection4/ServicesSectionHeadingFAQ.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import FaqScheduleItem from '@/components/AboutView/AboutSection6/FaqScheduleItem.vue';
import FaqScheduleFooter from '@/components/AboutView/AboutSection6/FaqScheduleFooter.vue';
import { bounceAnimationY, DURATION_BOUNCE_ANIMATION } from '@/helpers/animations';

export default {
  name: 'ServicesSection6',
  components: {
    FaqScheduleFooter,
    FaqScheduleItem,
    SectionLine,
    // ServicesSectionHeadingFAQ,
    ServicesSectionIntro,
  },
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      expanded_count: 0,
      activeType: 0,
      buttons: [
        'FAQ',
        'Schedule',
      ],
      values: [{
            id: 13,
            title: 'Senior Digital Producer',
            description: "San Francisco",
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
            title: "Art Director",
            description: 'Worldwide',
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
            title: 'Houdini Artist',
            description: 'Worldwide',
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
            title: 'Motion Designer',
            description: 'Worldwide',
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
        ]
    };
  },
  computed: {
    DURATION_BOUNCE_ANIMATION() {
      return DURATION_BOUNCE_ANIMATION;
    },
    activeStatus(){
      if(this.activeSectionIndex === 6)
        this.$store.commit('SET_NAV_LIGHT', true);
      return this.activeSectionIndex === 6;
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.sectionAttributes.body[0].Faq
    //     .forEach((item, index) => bounceAnimationY(this.$refs.FaqScheduleItem[index], index));
    // });
  },
  methods: {
    expanded_item(){
      this.expanded_count ++;
      this.$refs.MouseScroll.style.display="block"
    },
    closed_item(){
      this.expanded_count --;
      if(this.expanded_count > 0)
        this.$refs.MouseScroll.style.display="block"
      else
        this.$refs.MouseScroll.style.display="none"
    },
    parentContainerScroll(event) {
      event.stopPropagation();  
    },
    onButtonClick(index) {
      if(this.activeType == index)
        return;
      else{
        this.activeType = index;
      }
      // eventBus.$emit(index > 0 ? BUS_EVENT_GOTO_NEXT_SECTION : BUS_EVENT_GOTO_PREV_SECTION);
    },
  },
};
</script>
<style scoped>
#collapse_scroll_container::-webkit-scrollbar {
  width: 0; /* Chrome, Safari, Edge */
  display: none; /* Firefox */
}
#collapse_scroll_container::-webkit-scrollbar-track {
  display: none; /* Chrome, Safari, Edge */
}
#collapse_scroll_container::-webkit-scrollbar-thumb {
  display: none; /* Chrome, Safari, Edge */
}
/* #collapse_scroll_container::-webkit-scrollbar {
    display: block;
    width: 12px; 
    background-color: #f1f1f1;
} */

#mouse-scroll {
  display: none;
}
#mouse-scroll {
  position: absolute;
  margin: auto;
  left: 68vw;
  top: 45vh;
  transform: translateX(-50%);
  z-index: 9999;
}
#mouse-scroll span{
  display: block;
  width: 15px; 
  height: 15px;
  -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
       transform: rotate(45deg);
       transform: rotate(45deg);
  border-right: 5px solid rgb(66, 66, 66); 
  border-bottom: 5px solid rgb(75, 74, 74);
  margin: 0 0 3px 5px;
}
#mouse-scroll .mouse {
  height: 40px;
  width: 25px;
  border-radius: 15px;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  border: 3px solid rgb(80, 80, 80);
  top: 170px;
}
#mouse-scroll .down-arrow-1 {
  margin-top: 6px;
}
#mouse-scroll .down-arrow-1, #mouse-scroll .down-arrow-2, #mouse-scroll .down-arrow-3 {
  animation: mouse-scroll 1s infinite; 
  -moz-animation: mouse-scroll 1s infinite;
}
#mouse-croll .down-arrow-1 {
   animation-delay: .1s; 
   -moz-animation-delay: .1s;
   animation-direction: alternate;
}
#mouse-scroll .down-arrow-2 {
  animation-delay: .2s; 
  -moz-animation-delay: .2s;
  animation-direction: alternate;
}
#mouse-scroll .down-arrow-3 {
   animation-delay: .3s;
   -moz-animation-dekay: .3s;
   animation-direction: alternate;
}
#mouse-scroll .mouse-in {
  height: 12px;
  width: 4px;
  display: block; 
  margin: 5px auto;
  background: black;
  position: relative;
}
#mouse-scroll .mouse-in {
 animation: animated-mouse 1.2s ease infinite;
  moz-animation: mouse-animated 1.2s ease infinite;
}

@keyframes animated-mouse {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
     opacity: 0;
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
  }
}
@keyframes mouse-scroll {
  0% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  } 
}
@keyframes mouse-scroll {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.footer_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.footer_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.footer_fade-enter { transform: translateY(300px); opacity: 0;}
.footer_fade-leave-to {opacity: 0; transform: translateY(50px);}

.second_line_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.second_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.second_line_fade-enter { transform: translateY(100px); opacity: 0;}
.second_line_fade-leave-to {opacity: 0; transform: translateY(-100px);}

.vido_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.vido_fade-leave-active { transition: all 0.3s cubic-bezier(.71,.17,.14,.93);}
.vido_fade-enter { transform: translateY(750px); opacity: 0;}
.vido_fade-leave-to {opacity: 0; transform: translateY(-150px);}

.first_line_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.first_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.first_line_fade-enter { transform: translateY(-150px); opacity: 0;}
.first_line_fade-leave-to {opacity: 0; transform: translateY(-150px);}

.heading_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.heading_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.heading_fade-enter { transform: translateY(10px); opacity: 0;}
.heading_fade-leave-to {opacity: 0; transform: translateY(-10px);}

.intro_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { opacity: 0;}
.intro_fade-leave-to {opacity: 0;}

.c-faq-schedule__footer-wrapper {
    position: absolute;
    bottom: 8%;
}
.item_div{
  position: relative;
}
.items_top_container{
  position:relative; width:100%; height: 400px;
}
.items_sub_container{
  position:absolute; width:100%; height: 100%;
}
.section4_back_anime{
  position: relative;
  display: flex;
  height: 70vh;
}
@media (max-width: 1400px){
  .c-faq-schedule__content{
    width: 100%;
  }
  .section4_back_anime{
    display: none;
  }
}
@media (max-width: 1600px){
  #back-video{
    margin-left:20%;
  }
}
@media (max-width: 1500px){
  #back-video{
    margin-left:10%;
  }
}

#back-video{
  height: 70%;
  margin-left:30%;
  margin-top: auto;
  margin-bottom: auto;
}
.faq_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.faq_fade-leave-active { transition: all 0.3s cubic-bezier(.71,.17,.14,.93);}
.faq_fade-enter{ transform: translateY(-400px); opacity: 0.8;}
.faq_fade-leave-to{ transform: translateY(-30px); opacity: 0;}
.schedule_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.schedule_fade-leave-active { transition: all 0.3s cubic-bezier(.71,.17,.14,.93);}
.schedule_fade-enter{ transform: translateY(400px); opacity: 0.8;}
.schedule_fade-leave-to{ transform: translateY(30px); opacity: 0;}
</style>
