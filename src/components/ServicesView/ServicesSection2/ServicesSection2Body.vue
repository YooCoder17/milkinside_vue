<!-- eslint-disable -->
<template>
  <div class="c-clients__body" style="display: flex;">
      <div style="overflow:hidden;position:relative; width:64%; display: flex; flex-direction: column;">
        <transition
            name="body_fade"
            mode="out-in"
        >
          <h1  v-if="activeStatus"
              class="c-clients__body-title"
              v-html="convertNewLineToBreak(title)"
              style="margin-top:auto; margin-bottom: auto;"
          ></h1>
        </transition>
        <transition
            name="body_fade"
            mode="out-in"
        >
          <ClientUsersGrid
            v-if="activeStatus && users"
            :users="users"
            style="width:80%; margin-bottom: auto;"
          />
        </transition>
        
      </div>
      <div style="width:35%">
      <transition
          name="globe_fade"
          mode="out-in"
          >
          <img v-if="activeStatus" src="@/assets/images/white_globe.png" alt="mobileImage.alternativeText" style="height:45vh;margin-left: 10vh;">
        <!-- <div v-if="activeStatus" class="globe">
            <div class="globe__wrapper">
                <div class="globe__data">
                    <div class="globe__points">
                        <div class="globe__point" style="--left:53%;--top:20%"></div>
                        <div class="globe__point" style="--left:58%;--top:40%"></div>
                        <div class="globe__point" style="--left:59%;--top:55%"></div>
                        <div class="globe__point active" style="--left:56%;--top:25%"></div>
                        <div class="globe__point" style="--left:45%;--top:23%"></div>
                    </div>
                    <img src="https://res.cloudinary.com/dm3bdznon/image/upload/v1672971107/globe_1ffb00c59c.png?updated_at=2023-01-06T02:11:47.887Z">
                </div>
            </div>
        </div> -->
        </transition>
        </div>
  </div>
</template>

<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';
import ClientUsersGrid from '@/components/ServicesView/ServicesSection2/ClientUsersGrid.vue';

export default {
  name: 'ServicesSection2Body',
  components: { ClientUsersGrid },
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    users: {
      type: Array,
    },
  },
  methods: {
    convertNewLineToBreak,
    enterIntroContent,
    leaveIntroContent,
  },
  computed:{
    activeStatus(){
      return this.activeSectionIndex === 2;
    },
  },
};
</script>
<style scoped>
.globe_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.globe_fade-leave-active { transition: all 1.2s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.globe_fade-enter { opacity: 0;transform: translateY(-450px);}
.globe_fade-leave-to {opacity: 0; transform: translateY(-450px);}
.body_fade-enter-active { opacity: 1; transition: all 1s ease-in-out;}
.body_fade-leave-active { transition: all 0.3s ease-in-out}
.body_fade-enter { transform: translateY(350px); opacity: 0;}
.body_fade-leave-to {opacity: 0; transform: translateY(-100px);}

</style>