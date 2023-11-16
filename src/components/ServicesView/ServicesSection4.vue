<!-- eslint-disable -->
<template>
   <div class="c-services__wrapper">

        <div class="c-services__sections">
          <svg class="c-services__down-icon" width="24" height="24" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#down"></use>
          </svg>
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
                          :number="sectionAttributes.number"
                          :category="sectionAttributes.category"
                          :title="sectionAttributes.title"
                        />
                      </transition>
                    <!-- <ServicesSectionHeadingFAQ :activeType="sectionAttributes.body[0].type"/> -->
                      <transition
                          name="heading_fade"
                          mode="out-in"
                      >
                        <div v-if="activeStatus"  class="c-faq-schedule__heading-row">
                          <button
                            class="c-faq-schedule__heading-toggle-button"
                            :class="{'c-faq-schedule__heading-toggle-button--active': label === buttons[activeType]}"
                            v-for="(label, index) in buttons"
                            :key="label + index"
                            @click="onButtonClick(index)"
                          >
                            {{ label }}
                          </button>
                          <div class="c-faq-schedule__heading-text">{{ "Peoples are always asking same questions" }}</div>
                        </div>
                      </transition>
                      <transition
                        name="first_line_fade"
                        mode="out-in"
                      >
                        <SectionLine v-if="activeStatus" class="c-faq-schedule__line"/>
                      </transition>

                      <div class="items_top_container" style="overflow:hidden">
                        <transition name="faq_fade" tag="div">
                          <div v-show="activeStatus && activeType == 0" class="items_sub_container">
                            <div
                              v-for="(item, index) in this.sectionAttributes.body[0].Faq"
                              :key="index + item.id"
                              ref="FaqScheduleItem"
                              class="item_div"
                            >
                              <FaqScheduleItem :item="item"/>
                            </div>
                        </div>
                        </transition>
                        <transition name="schedule_fade" tag="div">
                          <div v-show="activeStatus && activeType == 1" class="items_sub_container">
                            <div
                              v-for="(item, index) in this.sectionAttributes.body[0].Schedule"
                              :key="index + item.id"
                              ref="FaqScheduleItem"
                              class="item_div"
                            >
                              <FaqScheduleItem :item="item"/>
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
                        <video width="100%" id="back-video" autoplay loop muted style="margin-top:8vh">
                          <source src="@/assets/videos/asset1.mp4" type="video/mp4" />
                          <track kind="captions" label="English captions" lang="en" default />
                          Your browser does not support the video tag.
                        </video>
                    </div>
                  </transition>
              </div>
            </div>
            <transition
                        name="footer_fade"
                        mode="out-in"
                      >
                <FaqScheduleFooter v-if="activeStatus" :attributesBody="sectionAttributes.body[0]"/>
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
import FaqScheduleItem from '@/components/ServicesView/ServicesSection4/FaqScheduleItem.vue';
import FaqScheduleFooter from '@/components/ServicesView/ServicesSection4/FaqScheduleFooter.vue';
import { bounceAnimationY, DURATION_BOUNCE_ANIMATION } from '@/helpers/animations';

export default {
  name: 'ServicesSection4',
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
    sectionAttributes: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activeType: 0,
      buttons: [
        'FAQ',
        'Schedule',
      ],
    };
  },
  computed: {
    DURATION_BOUNCE_ANIMATION() {
      return DURATION_BOUNCE_ANIMATION;
    },
    activeStatus(){
      return this.activeSectionIndex === 4;
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.sectionAttributes.body[0].Faq
    //     .forEach((item, index) => bounceAnimationY(this.$refs.FaqScheduleItem[index], index));
    // });
  },
  methods: {
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
.footer_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.footer_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.footer_fade-enter { transform: translateY(300px); opacity: 0;}
.footer_fade-leave-to {opacity: 0; transform: translateY(50px);}

.second_line_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.second_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.second_line_fade-enter { transform: translateY(100px); opacity: 0;}
.second_line_fade-leave-to {opacity: 0; transform: translateY(-100px);}

.vido_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.vido_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.vido_fade-enter { transform: translateY(750px); opacity: 0;}
.vido_fade-leave-to {opacity: 0; transform: translateY(-750px);}

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
  position:relative; width:100%; height: 100vh;
}
.items_sub_container{
  position:absolute; width:100%; height: 100%;
}
.section4_back_anime{
  position: relative;
  display: flex;
  height: 70vh;
}
#back-video{
  height: 70%;
  margin-left:30%;
  margin-top: auto;
  margin-bottom: auto;
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
.faq_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.faq_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.faq_fade-enter{ transform: translateY(-600px); opacity: 0.8;}
.faq_fade-leave-to{ transform: translateY(-600px); opacity: 0;}
.schedule_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.schedule_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.schedule_fade-enter{ transform: translateY(600px); opacity: 0.8;}
.schedule_fade-leave-to{ transform: translateY(600px); opacity: 0;}
</style>
