<!-- eslint-disable -->
<template>
    <div class="c-services__wrapper">
        <div class="c-services__sections">
          <svg class="c-services__down-icon" width="24" height="24" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#down"></use>
          </svg>
            <div class="c-clients c-services__section" data-services-section="2">

                  <transition
                    name="intro_fade"
                    mode="out-in"
                  >
                    <ServicesSectionIntro
                      v-if="activeStatus"
                      :number="sectionAttributes.number"
                      :category="sectionAttributes.category"
                      :title="sectionAttributes.title"
                      style="width:64%"
                    />
                  </transition>
                  <transition
                    name="heading_fade"
                    mode="out-in"
                  >
                    <ServicesSectionHeading
                      v-if="activeStatus"
                      :subtitle="sectionAttributes.subtitle"
                      style="width:64%"
                    />
                  </transition>
                  <transition
                    name="first_line_face"
                    mode="out-in"
                  >
                    <SectionLine v-if="activeStatus" class="c-clients__line" style="width:64%;margin:0"/>
                  </transition>
                  <ServicesSection2Body
                      v-if="sectionAttributes.body"
                      :activeSectionIndex="activeSectionIndex"
                      :title="sectionAttributes.body[0].title"
                      :users="sectionAttributes.body[0].users"
                      style="margin-bottom: auto; min-height:50vh"
                    />            
                
                <transition
                    name="second_line_fade"
                    mode="out-in"
                  >
                <SectionLine v-if="activeStatus" class="c-clients__bottom-line-wrapper" style="width:64%"/>
              </transition>
              <transition
                    name="footer_fade"
                    mode="out-in"
                  >
                <ServicesSection2ClientsBottom
                  v-if="activeStatus && sectionAttributes.body"
                  :statistics="sectionAttributes.body[0].statistics"
                />
              </transition>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import ServicesSectionIntro from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionIntro.vue';
import ServicesSectionHeading from '@/components/ServicesView/ServicesSectionCommon/ServicesSectionHeading.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import ServicesSection2ClientsBottom from '@/components/ServicesView/ServicesSection2/ServicesSection2ClientsBottom.vue';
import ServicesSection2Body from '@/components/ServicesView/ServicesSection2/ServicesSection2Body.vue';

export default {
  name: 'ServicesSection2',
  components: {
    ServicesSection2Body,
    ServicesSection2ClientsBottom,
    SectionLine,
    ServicesSectionHeading,
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
  computed:{
    activeStatus(){
      return this.activeSectionIndex === 2;
    },
  },
};
</script>
<!-- eslint-disable -->
<style scoped>


.body_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.body_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_fade-enter { transform: translateY(350px); opacity: 0;}
.body_fade-leave-to {opacity: 0; transform: translateY(-350px);}
.footer_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.footer_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.footer_fade-enter { transform: translateY(100px); opacity: 0;}
.footer_fade-leave-to {opacity: 0; transform: translateY(-100px);}

.second_line_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.second_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.second_line_fade-enter { opacity: 0;}
.second_line_fade-leave-to {opacity: 0;}

.first_line_face-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.first_line_face-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.first_line_face-enter { transform: translateY(-150px); opacity: 0;}
.first_line_face-leave-to {opacity: 0; transform: translateY(-150px);}

.heading_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.heading_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.heading_fade-enter { transform: translateY(10px); opacity: 0;}
.heading_fade-leave-to {opacity: 0; transform: translateY(-10px);}

.intro_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { opacity: 0;}
.intro_fade-leave-to {opacity: 0;}

.globe{
  margin-left: 150px;
  margin-top: 150px;
}
</style>