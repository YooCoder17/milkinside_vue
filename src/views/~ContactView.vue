<!-- eslint-disable -->
<template>
  <div @mousewheel="handleScroll">
    <div class="c-services c-services--active">
      <div class="c-services__wrapper">
        <div class="c-services__sections">
          <svg class="c-services__down-icon" width="24" height="24" fill="none">
            <use xlink:href="@/assets/sprites/icons.svg#down"></use>
          </svg>
          <div
            class="c-services__section c-partners"
            data-services-section="0"
          >
              <transition
                name="intro_fade"
                mode="out-in"
              >
                <SectionIntro
                  :number="'01'"
                  :category="'DIGITAL INNOVATION TEAM'"
                  :title="'MILKINSIDE SAN FRANCISCO'"
                  style="width:64%"
                />
              </transition>
              <transition
                appear
                name="heading_fade"
                mode="out-in"
              >
                <ContactHeading style="width:64%"/>
              </transition>
              <transition
                appear
                name="first_line_face"
                mode="out-in"
              >
                <SectionLine style="width:64%"/>
              </transition>
              <ContactBody style="margin-bottom:auto"/>
              <transition
                appear
                name="footer_fade"
                mode="out-in"
              >
                <div style="margin-bottom:4vh;margin-left:0.5vw;font-size: 1.8vh;">
                  <div style="display: flex;"><div>A:</div> <div style="margin-left:1vw">San Francisco, CA, USA</div></div>
                  <div style="display: flex;"><div>E:</div> <div style="margin-left:1vw;color:blue"><a href="mailto:interact@milkinside.com">interact@milkinside.com</a></div></div>
                </div>
              </transition>
              <transition
                appear
                name="footer_fade"
                mode="out-in"
              >
                <div style="display: flex;margin-bottom:2vh;margin-left:0.5vw;">
                  <div style="width:30px;height:3px;background-color: rgb(231, 16, 16);opacity: 0.7;margin-top:1.1vh; margin-right:0.7vw"></div>
                  <div style="font-weight: 700;font-size: 1.7vh; ">WHAT SHOULD WE CREATE TOGETHER?</div>
                </div>
              </transition>
              <transition
                appear
                name="second_line_fade"
                mode="out-in"
              >
                <SectionLine style="width:64%;display: flex;"/>
              </transition>
              <transition
                appear
                name="footer_fade"
                mode="out-in"
              >
                <div class="c-menu__footer" style="width:64%">
                  <div class="c-menu__footer-content">
                    <CopyLocation />
                    <FooterLinks />
                  </div>
                </div>
              </transition>
          </div>
        </div>
      </div>
    </div>
    <transition appear name="section_fade" mode="out-in">
        <SectionFooter v-show="footer_visible" :footer_visible="footer_visible" style="height:100vh; position: absolute; z-index: 1000;opacity: 1; top:0"/>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import SectionIntro from '@/components/common/SectionIntro.vue';
import SectionFooter from '@/components/common/SectionFooter.vue';
import ContactHeading from '@/components/ContactView/ContactHeading.vue';
import ContactBody from '@/components/ContactView/ContactBody.vue';
import SectionLine from '@/components/common/SectionLine.vue';
import FooterLinks from '@/components/ContactView/FooterLinks.vue';
import CopyLocation from '@/components/ContactView/CopyLocation.vue';
import { debounce } from 'lodash';
export default {
  name: 'ContactView',
  components: {
    ContactHeading,
    ContactBody,
    SectionIntro,
    SectionLine,
    FooterLinks,
    CopyLocation,
    SectionFooter
  },
  mounted(){
    this.$store.commit('SET_NAV_LIGHT', true);
  },
  created() {
   
  },
  data() {
    return {
      footer_visible: false,
    };
  },
  watch: {
  },
  computed: {
  },
  methods: {
    handleScroll: debounce(function (event) {
      this.footer_visible = event.deltaY > 0 ?  true : false;
    })
  },
};
</script>

<style>
.c-services__wrapper {
  padding-top: 115px;
}
.second_line_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.second_line_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.second_line_fade-enter {  opacity: 0;}
.second_line_fade-leave-to {opacity: 0; }

.first_line_face-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.first_line_face-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.first_line_face-enter { transform: translateY(150px); opacity: 0;}
.first_line_face-leave-to {opacity: 0; transform: translateY(-150px);}

.heading_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.heading_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.heading_fade-enter { transform: translateY(-50px); opacity: 0;}
.heading_fade-leave-to {opacity: 0; transform: translateY(-80px);}

.intro_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { opacity: 0;}
.intro_fade-leave-to {opacity: 0;}

.section_fade-enter-active { transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.section_fade-leave-active { transition: all 1s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.section_fade-enter { transform: translateY(100vh);}
.section_fade-leave-to {transform: translateY(100vh);}
</style>
