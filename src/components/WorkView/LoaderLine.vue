<!-- eslint-disable -->
<template>
  <div>
      <div
        :style="{ left: 300, top: 300,height: height, width: width, position:'absolute',overflow: 'hidden', ...wrapStyle} " 
      >
          <div
              ref="loaderRef"
              :style="{
                background: 'white',
                height: '100%',
                width: '100%',
                opacity: 0
              }"
            >
          </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import { TimelineMax } from "gsap";
import { CustomEase } from "@/helpers/CustomEase.min.js";
export default {
  name: 'LoaderLine',
  data() {
    return {
      animation : null,
    };
  },
  props: {
    // left: {
    //   type: Number,
    //   required: true,
    // },   
    // top: {
    //   type: Number,
    //   required: true,
    // },
    height: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    }, 
    wrapStyle: Object
  },
  methods: {
    play() {
      if (this.animation) {
        this.animation.play();
      }
    }
  },
  mounted(){
    this.animation = new TimelineMax({
      repeat: -1,
      repeatDelay: 0.1
    });

    this.animation
      .set(this.$refs.loaderRef, {
        transform: "translate(-100%, 0)",
        opacity: 1
      })
      .to(this.$refs.loaderRef, 0.56, {
        transform: "translate(0, 0)",
        ease: CustomEase.create("custom", "0.33, 0.00, 0.00, 1.00")
      })
      .to(this.$refs.loaderRef, 0.36, {
        transform: "translate(0, 0)",
        ease: CustomEase.create("custom", "0.33, 0.00, 0.00, 1.00")
      })
      .to(this.$refs.loaderRef, 0.56, {
        transform: "translate(100%, 0)",
        ease: CustomEase.create("custom", "1.00, 0.00, 0.67, 1.00")
      });
    this.animation.pause();
  },
  watch: {
  },
  created() {
  }
};
</script>