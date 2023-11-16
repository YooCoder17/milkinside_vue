<template>
  <!-- eslint-disable -->
    <div class="c-services__section-mobile c-services__section--no-padding c-what-we-do-mobile c-services__section--mobile-section">
      <div class="c-what-we-do-mobile__intro-wrapper">
        <div class="c-intro">
          <transition appear name="top_line_fade" mode="out-in">
            <div v-if="activeStatus" class="c-line__wrapper" data-start-divider="" data-section-item="">
              <div class="c-line"></div>
            </div>
          </transition>
          <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
            <transition appear name="intro_fade" mode="out-in">
              <div v-if="activeStatus"  class="c-intro__content" data-intro-content="">
                <div class="c-intro__left"><p class="c-intro__number">02</p>
                  <div class="c-line__wrapper">
                    <div class="c-intro__line c-line"></div>
                  </div>
                  <p class="c-intro__text">WHAT WE DO?</p></div>
              </div>
            </transition>
            <transition appear name="body_content_fade" mode="out-in">
               <h2 v-if="activeStatus" class="main-hd">Once upon a byte, software took a giant bite out of the world.</h2>
            </transition>
            <transition appear name="body_image_fade" mode="out-in">
              <div v-if="activeStatus" style="width: 100%; text-align: center;">
                <img src="@/assets/images/about1-img.png" class="about-img" alt="about" width="100%" style="max-width: 600px;">
              </div>
            </transition>
          </div>
          <transition appear name="bottom_line_fade" mode="out-in">
            <div v-if="activeStatus" class="c-line__wrapper about0-line" data-start-divider="" data-section-item="">
              <div class="c-line"></div>
            </div>
          </transition>
          <transition appear name="bottom_line_fade" mode="out-in">
            <div v-if="activeStatus">
                <div class="row">
                  <div class="col">
                    <h2 class="sub-hd"></h2>
                  </div>
                  <div class="col">
                    <h2 class="sub-hd" v-html="convertNewLineToBreak('Spotfiy \n Lyft \n PWC')"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <h2 class="sub-hd" v-html="convertNewLineToBreak('Alphabet \n Daimler \n Microsoft')"/>                    
                  </div>
                  <div class="col">
                    <h2 class="sub-hd" v-html="convertNewLineToBreak('T-Mobile \n Honda \n SAS')"/>
                  </div>
                </div>
                <div class="row" style="margin-bottom: 150px;">
                  <div class="col">
                    <h2 class="sub-hd" v-html="convertNewLineToBreak('Google \n Xiaomi \n Oppo')"/>
                  </div>
                  <div class="col">
                    <h2 class="sub-hd" v-html="convertNewLineToBreak('Samsung \n LG \n Mutisbishi')"/>
                  </div>
                </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
</template>
<script>
/* eslint-disable */ 
import { convertNewLineToBreak } from '@/helpers/helpers';
export default {
  name: 'AboutSectionMobile1',
  created() {
    // this.$store.commit('SET_NAV_LIGHT', true);
  },
  props: {
      activeSectionIndex: {
        type: Number,
        required: true,
      },
  },
  computed:{
    activeStatus(){
      if(this.activeSectionIndex === 1)
        this.$store.commit('SET_NAV_LIGHT', true);

      return this.activeSectionIndex === 1;
    }
  },
  methods: {
    convertNewLineToBreak,
  },
};
</script>

<style scoped>
.top_line_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.top_line_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.top_line_fade-enter { transform:translateY(30px); opacity: 0; }
.top_line_fade-leave-to {transform:translateY(30px); opacity: 0;}

.intro_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.intro_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.intro_fade-enter { transform:translateY(120px);opacity: 0; }
.intro_fade-leave-to { transform:translateY(120px); opacity: 0;}

.body_content_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body_content_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_content_fade-enter { transform:translateX(350px);opacity: 0; }
.body_content_fade-leave-to { transform:translateX(350px); opacity: 0;}

.body_image_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body_image_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.body_image_fade-enter { transform:translateX(-350px);opacity: 0; }
.body_image_fade-leave-to { transform:translateX(-350px); opacity: 0;}

.bottom_line_fade-enter-active { width: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.bottom_line_fade-leave-active { transition: all 0.8s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.bottom_line_fade-enter { transform:translateY(150px);opacity: 0; }
.bottom_line_fade-leave-to { transform:translateY(150px); opacity: 0;}

.main-hd{
  font-size: 32px;
  font-weight: 500;
  margin-top: 5rem;
}
.sub-hd{
  font-size: 24px;
  font-weight: 500;
  margin-top: 5rem;
}
.row{
  display: flex;
}
.col{
  flex: 1;
  padding: 10px;
  font-weight: 500;
}
</style>
