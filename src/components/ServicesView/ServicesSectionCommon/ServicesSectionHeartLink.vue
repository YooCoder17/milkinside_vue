<template>
  <!-- eslint-disable -->
  <div class="heart-container">
    <a v-for="heart in hearts"
      :key="'heart'+heart.id"
      class="heart"
      :class="{ 'animated': heart.flying }"
      @animationend="removeHeart(heart)"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 22 19">
        <use xlink:href="@/assets/sprites/icons.svg#black-heart"></use>
      </svg>
    </a>
    <a  v-for="heart in hearts"
      :key="'heart1'+heart.id"
      class="heart1"
      :class="{ 'animated': heart.flying }"
      @animationend="removeHeart(heart)"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 22 19">
        <use xlink:href="@/assets/sprites/icons.svg#black-heart"></use>
      </svg>
    </a>
    <a  v-for="heart in hearts"
      :key="'heart2'+ heart.id"
      class="heart2"
      :class="{ 'animated': heart.flying }"
      @animationend="removeHeart(heart)"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 22 19">
        <use xlink:href="@/assets/sprites/icons.svg#black-heart"></use>
      </svg>
    </a>
    <a class="c-partners__heart-link" href="#" @click="addHeart"  id="heart_avatar" style="transition: transform 0.5s cubic-bezier(.71,.17,.14,.93);">
      <svg width="24" height="24" fill="none" viewBox="0 0 22 19">
        <use v-if="!heart_status" xlink:href="@/assets/sprites/icons.svg#heart"></use>
        <use v-if="heart_status" xlink:href="@/assets/sprites/icons.svg#black-heart"></use>
      </svg>
    </a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ServicesSectionHeartLink',
  methods: {
    addHeart() {
      this.hearts.push({ id: this.idCounter++, flying: true });
      // Remove the heart after animation
      setTimeout(() => {
        this.hearts.shift();
      }, 800);
      this.heart_status = true;

      const heart_avatar = document.getElementById('heart_avatar');

      heart_avatar.style.transform = 'scale(0.8)';

      setTimeout(() => {
        heart_avatar.style.transform = 'scale(1)';
      }, 300);

    },
    removeHeart(heart) {
      heart.flying = false;
    },
  },
  data() {
    return {
      heart_status:false,
      hearts: [],
      idCounter: 1,
    };
  },
};
</script>

<style scoped>
.heart-container {
  /* position: absolute; */
  /* width: 100%; */
  height: 50px;
  /* overflow: hidden; */
  /* z-index: -1; */
}

.heart {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(25px) scale(0.8);
  width: 30px;
  height: 30px;
  animation-name: heartFly;
  animation-duration: 0.8s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes heartFly {
  0% {
    transform: translateX(25px) translateY(-40px) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translateX(45px) translateY(-80px) scale(0.5);
    opacity: 0;
  }
}
.heart1 {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(15px) scale(0.5);
  width: 30px;
  height: 30px;
  animation-name: heartFly1;
  animation-duration: 0.8s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes heartFly1 {
  0% {
    transform: translateX(15px) translateY(-35px) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translateX(-2px) translateY(-55px) scale(0.3);
    opacity: 0;
  }
}
.heart2 {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(20px) scale(0.4);
  width: 30px;
  height: 30px;
  animation-name: heartFly2;
  animation-duration: 0.8s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
@keyframes heartFly2 {
  0% {
    transform: translateX(20px) translateY(-35px) scale(0.4);
    opacity: 1;
  }
  100% {
    transform: translateX(25px) translateY(-60px) scale(0.2);
    opacity: 0;
  }
}
.animated {
  animation-play-state: running;
}

</style>