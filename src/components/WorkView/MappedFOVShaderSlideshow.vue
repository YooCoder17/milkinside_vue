<!-- eslint-disable -->
<template>
   <div ref="container" style="position: absolute; left: 0; top: 0; height: 100vh; width: 100vw; background: black;">
    <FOVShaderImage
      v-if="assetsExist"
      ref="slideshow"
      @animating="handleAnimating"
      @endAnimation="handleEndAnimation"
      :type="type"
      :assets="assets"
      :startAssetIdx="0"
    />
    <!-- <img v-else :src="placeholder" style="height: 100%; width: 100%" /> -->
  </div>
</template>
<script>
/* eslint-disable */
import { TweenMax } from "gsap";
import FOVShaderImage from "@/components/WorkView/FOVShaderImage.vue";
var upperCaseFirstLetter = function (str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
};

var propertyPrefixes = ["", "moz", "ms", "o", "webkit"];
var getPrefixedProperty = function (obj, propertyName) {
  for (var ii = 0; ii < propertyPrefixes.length; ++ii) {
    var prefix = propertyPrefixes[ii];
    var name = prefix + propertyName;
    var property = obj[name];
    if (property) {
      return property;
    }
    if (ii == 0) {
      propertyName = upperCaseFirstLetter(propertyName);
    }
  }
  return undefined;
};

var _requestAnimFrame;
var requestAnimFrame = function (callback) {
  if (!_requestAnimFrame) {
    _requestAnimFrame =
      getPrefixedProperty(window, "requestAnimationFrame") ||
      function (callback, element) {
        return window.setTimeout(callback, 1000 / 70);
      };
  }
  _requestAnimFrame.call(window, callback);
};

export default {
  name: 'MappedFOVShaderSlideshow',
  components: {
    FOVShaderImage
  },
  data() {
    return {
      assets: [],
      slideshow : null,
      imgAssets: [],
      assetsFull: [],
    };
  },
  watch: {
    prop_assets(newValue, oldValue) {
      this.imgAssets = [];
      this.assetsFull = [];
      newValue.forEach((e, i) => {
        this.imgAssets.push(e.img);
        this.assetsFull.push(e);
      });
      if (this.imgAssets) {
        this.assets = this.imgAssets;
      }
    }
  },
  created() {
    
  },
  methods: {
    handleAnimating() {
      if (this.$emit("animating")) {
        this.$emit("animating");
      }
    },
    handleEndAnimation() {
      if (this.$emit("endAnimation")) {
        this.$emit("endAnimation");
      }
    },
    transitionScene(index) {
      if (!this.assets) {
        return;
      }
      this.$refs.slideshow.setImageIndex(index, true, () => {
        let assetInQuestion = this.assetsFull[index];
        let isVideoUrl = typeof assetInQuestion.video === "string";

        if (!!assetInQuestion.video && isVideoUrl) {
          this.lazyload(index, assetInQuestion.video);
        }
      });
    },
    lazyload(index, videoURL) {
      var timeWatcher = function () {
        if (video.currentTime > 0) {
          video.pause();
          video.currentTime = 0.1;
          this.updateAsset(index, video);
        } else {
          requestAnimFrame.call(window, timeWatcher.bind(this));
        }
      };

      requestAnimFrame.call(window, timeWatcher.bind(this));

      let video = document.createElement("video");
      video.crossOrigin = this.crossOrigin || "anonymous";
      video.preload = "auto"; //true;
      video.muted = true;
      video.loop = true;
      video.setAttribute("playsinline", "");

      video.src = videoURL;

      if (video.readyState > 3) {
        this.updateAsset(index, video);
      } else {
        video.load();
      }

      video.oncanplaythrough = () => {
        video.oncanplaythrough = null;
        video.play();
      };
    },
    updateAsset(index, video) {
      this.imgAssets[index] = video;
      this.assetsFull[index].video = video;
      this.$refs.slideshow.updateAssets(index, video);
    },
    changeScene(index) {
      this.$refs.slideshow.setImageIndex(index, false); // no animation
      let assetInQuestion = this.assetsFull[index];
      if (!!assetInQuestion.video && typeof assetInQuestion.video === "string") {
        this.lazyload(index, assetInQuestion.video);
      }
    },
    fullscreen() {
      TweenMax.set(this.container.current, { height: "100vh" });
      this.$refs.slideshow.glPlane1.planeResize();
      this.$refs.slideshow.glPlane2.planeResize();
    }
  },
  props: {
    type: {
      type: String,
      required: true,
    },    
    prop_assets: {
      type: Array,
      required: true,
    },
  },
  computed:{
    assetsExist() {
      return this.assets.length > 0;
    },
  },
};
</script>
<style>

</style>
