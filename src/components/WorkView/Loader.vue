<!-- eslint-disable -->
<template>
  <transition
    name="fade"
    appear
    mode="out-in"
    :duration="1300"
  >
    <div v-show="in_status"
          style="
            position: fixed;
            width: 100vw;
            height: 101vh;
            backdrop-filter: blur(7px);
            -Webkit-backdrop-filter: blur(7px);
            opacity: 1;
            z-index: 30
          "
        >
          <div
            ref="background"
            style="
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: black;
              opacity: 0.8
            "
          >
            <div
              :style="{
                position: 'absolute',
                top: '35%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: `${(this.nColumnDividors ? 0.724 * 0.8 : 0.5531) * this.columnWidth / 0.61}vw`,
                height: `${((this.nColumnDividors ? 0.724 * 0.8 : 0.5531) * this.columnWidth / 0.61) * (720 / 1280)}vw`
              }"
            >
              <LoaderLine
                ref="bar"
                :width="`${(this.nColumnDividors ? 0.70 * 0.8 : 0.5331) * this.columnWidth}vw`"
                :height="`${(2 / 297) * this.columnWidth}vw`"
                :wrapStyle="{ bottom: '33%', left: '51.5%', transform: 'translateX(-50%)' }"
              />
            </div>
          </div>
    </div>
  </transition>
</template>

<script>
/* eslint-disable */
import LoaderLine  from "@/components/WorkView/LoaderLine.vue";
const VideoStyle = width => `
  width: ${(width / 0.61) * 0.8}vw;
  height: ${((width / 0.61) * 0.8) * (720 / 1280)}vw;
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translateX(-50%);
`;
export default {
  name: 'Loader',
  components: {
    LoaderLine,
  },
  data() {
    return {
      assetsLoaded : false,
      video: null,
      currentWorkIdx: 0
    };
  },
  props: {
    nColumnDividors: {
      type: Number,
      required: true,
    },    
    columnWidth: {
      type: Number,
      required: true,
    }, 
    asset: {
      type: HTMLVideoElement,
      required: false,
    }, 
    in_status: {
      type: Boolean,
      required: true,
    }, 
    transition_status: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    hideLoader() {
      this.$refs.bar.hide();
      opacityRouteAnimation(this.video, false);
    },
    handleLoaderAppear(entering, done) {
      // let duration = 3.6;
      // if (entering) {
      //   if (this.$refs.background.childNodes.length === 1 && this.video) {
      //     this.$refs.background.insertBefore(
      //       this.video,
      //       this.$refs.background.childNodes[0]
      //     );
      //   }
      //   this.$refs.background.style.visibility = "visible";
      //   TweenMax.fromTo(
      //     this.$refs.background,
      //     duration,
      //     {
      //       opacity: 0.0
      //     },
      //     {
      //       opacity: 0.9,
      //       delay: 0,
      //       ease: CustomEase.create("custom", "0.33, 0.00, 0.67, 1.00")
      //     }
      //   );
      // }
      // if (entering && this.video) {
      //   this.video.currentTime = 0;
      //   this.video.playbackRate = this.transition_status ? 1.85 : 1.0;
      //   this.video.play().then(e => {
      //     if (this.transition_status) {
      //       this.$refs.bar.animation.restart();
      //       this.$refs.bar.animation.play();
      //       setTimeout(() => {
      //         if (this.onFinishTransition) {
      //           this.onFinishTransition();
      //         }
      //       }, 800);
      //     }
      //   });
      // } else if (!entering) {
      //   TweenMax.fromTo(
      //     this.$refs.background,
      //     duration,
      //     {
      //       opacity: 0.9
      //     },
      //     {
      //       opacity: 0,
      //       delay: !this.transition_status ? 1.0 : 0,
      //       onComplete: () => {
      //         done();
      //       },
      //       ease: CustomEase.create("custom", "0.33, 0.00, 0.83, 0.83")
      //     }
      //   );
      // }
    },
    barWidth() {
      return (
        (this.nColumnDividors ? 0.724 : 0.5531) * this.columnWidth
      );
    },
    startLoading(asset) {
      this.video = asset;
      this.video.style = VideoStyle(this.barWidth());
      this.video.currentTime = 0;
      this.$refs.background.insertBefore(
        this.video,
        this.$refs.background.childNodes[0]
      );
      this.video.play().then(e => {
        if (this.$refs.bar) {
          this.$refs.bar.play();
        }
      });
    }
  },
  watch: {
    nColumnDividors(newValue, oldValue) {
      if (this.video) {
        this.video.style = VideoStyle(this.barWidth());
      }
    },
    asset(newValue, oldValue) {
      console.log("asset-watch");
      console.log(newValue);
      this.startLoading(newValue);
    }
  },
  created() {
    
  },
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>