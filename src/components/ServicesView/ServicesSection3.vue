<template>
  <!-- eslint-disable -->
    <div class="c-services__wrapper">
        <div class="c-services__sections">
          <svg class="c-services__down-icon" width="24" height="24" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#down"></use>
          </svg>
          <div class="c-partners c-services__section" data-services-section="3" style="padding-bottom:5vh">
            <transition
                  name="intro_fade"
                  mode="out-in"
                >
              <div v-if="activeStatus" class="c-partners__intro-wrapper">
                <ServicesSectionIntro
                  :number="sectionAttributes.number"
                  :category="sectionAttributes.category"
                  :title="sectionAttributes.title"
                />
              </div>
            </transition>
            <transition
                  name="heading_fade"
                  mode="out-in"
            >
              <ServicesSection3Heading
                v-if="activeStatus"
                class="c-partners__heading-row"
                :slideIndex="slideIndex"
                @changeSlideIndex="changeSlideIndex"
                @stopInterval="stopInterval"
              />
            </transition>
            <transition
                  name="first_line_fade"
                  mode="out-in"
                >
              <SectionLine v-if="activeStatus" class="c-partners__line-wrapper"/>
            </transition>

            <ServicesSection3Reviews
              :activeSectionIndex="activeSectionIndex"
              :slideIndex="slideIndex"
              :intervalStatus="intervalStatus"
              @changeSlideIndex="changeSlideIndex"
              @stopInterval="stopInterval"
            />
            <ServicesSection3Statistics :activeSectionIndex="activeSectionIndex"/>
            <transition
                  name="second_line_fade"
                  mode="out-in"
            >
              <SectionLine v-if="activeStatus" :activeSectionIndex="activeSectionIndex" class="c-partners__bottom-line-wrapper"/>
            </transition>
            <transition
                  name="footer_fade"
                  mode="out-in"
            >
              <ServicesSection3Bottom v-if="activeStatus"/>
            </transition>
          </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import ServicesSection3Heading from '@/components/ServicesView/ServicesSection3/ServicesSection3Heading.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import ServicesSection3Bottom from '@/components/ServicesView/ServicesSection3/ServicesSection3Bottom.vue';
import ServicesSection3Statistics from '@/components/ServicesView/ServicesSection3/ServicesSection3Statistics.vue';
import ServicesSection3Reviews from '@/components/ServicesView/ServicesSection3/ServicesSection3Reviews.vue';

export default {
  name: 'ServicesSection3',
  components: {
    ServicesSection3Reviews,
    ServicesSection3Statistics,
    ServicesSection3Bottom,
    SectionLine,
    ServicesSection3Heading,
    ServicesSectionIntro,
  },
  data() {
    return {
      slideIndex: 1,
      intervalStatus: false,
    }
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
  computed:{
    activeStatus(){
      return this.activeSectionIndex === 3;
    },
  },
  methods: {
    changeSlideIndex(index) {
      this.slideIndex = index;
    },
    stopInterval(value){
      this.intervalStatus = value;
    }
  }
};
</script>
<style scoped>

.footer_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.footer_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.footer_fade-enter { transform: translateY(100px); opacity: 0;}
.footer_fade-leave-to {opacity: 0; transform: translateY(-100px);}

.second_line_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.second_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.second_line_fade-enter { opacity: 0;}
.second_line_fade-leave-to {opacity: 0; }

.first_line_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.first_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.first_line_fade-enter { transform: translateY(-150px); opacity: 0;}
.first_line_fade-leave-to {opacity: 0; transform: translateY(-50px);}

.heading_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.heading_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.heading_fade-enter { transform: translateY(10px); opacity: 0;}
.heading_fade-leave-to {opacity: 0; transform: translateY(-10px);}

.intro_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { opacity: 0;}
.intro_fade-leave-to {opacity: 0;}
</style>
