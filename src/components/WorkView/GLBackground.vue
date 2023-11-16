<!-- eslint-disable -->
<template>
  <div>
    <MappedFOVShaderSlideshow
      ref="slideshow"
      @animating="handleAnimating"
      @endAnimation="handleEndAnimation"
      :prop_assets="projectsAssets"
      style="
        position: absolute:
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: black;
      "
      :type="FOVTransitionType.SLIDESHOW"
    />
  </div>
</template>

<script>
/* eslint-disable */
import MappedFOVShaderSlideshow from "@/components/WorkView/MappedFOVShaderSlideshow.vue"; 
import { mod } from "@/helpers/utils.js";
import { MediaLoader } from "@/helpers/MediaLoader.js";
export default {
  name: 'GLBackground',
  data() {
    return {
      FOVTransitionType: {
        SLIDESHOW: "slideshow",
      },
      projectsAssets: [],
      currentWorkIdx: 0
    };
  },
  props: {
    assets: {
      type: Array,
      required: true,
    },    
  },
  methods: {
    handleAnimating() {
      this.$emit("animating");
    },
    handleEndAnimation() {
      this.$emit("endAnimation");
    },
    startCurrentVideoLoading() {
      this.$refs.slideshow.lazyload(0, this.projectsAssets[0].video);
    },
    next() {
        this.currentWorkIdx += 1;
        let workVideoIdx = mod(
            this.currentWorkIdx,
            this.projectsAssets.length
        );
        this.$refs.slideshow.transitionScene(workVideoIdx);
    },
    previous() {
        this.currentWorkIdx -= 1;
        let workVideoIdx = mod(
            this.currentWorkIdx,
            this.projectsAssets.length
        );
        this.$refs.slideshow.transitionScene(workVideoIdx);
    },
    handlePlaceholderAssetsLoaded() {
      for (const name in this.placeholderAssetLoader.loadedAssets) {
        if (name.includes("work")) {
          const workIndex = name[name.length - 1];
          if (!this.projectsAssets) {
            this.projectsAssets = {};
          }
          this.projectsAssets[parseInt(workIndex, 10)] = {
            name: name,
            img: this.placeholderAssetLoader.loadedAssets[name],
            video: this.placeholderNameMap[name].video,
          };
        }
      }
      this.projectsAssets.length = Object.keys(this.projectsAssets).length;
      this.projectsAssets = Array.from(this.projectsAssets);

      this.$emit('allPlaceholderSourcesLoaded');
      this.startCurrentVideoLoading();
    }
  },
  watch: {

  },
  components: {
     MappedFOVShaderSlideshow,
  },
  created() {
    // Load the assets
    this.placeholderNameMap = {};
    this.assets.forEach((e) => {
      this.placeholderNameMap[e.name] = {
        video: e.video || null,
      };
    });
    let placeholderAssets = this.assets.map((e) => {
      return {
        src: e.placeholder,
        type: "img",
        name: e.name,
      };
    });

    this.placeholderAssetLoader = new MediaLoader(placeholderAssets);
    this.placeholderAssetLoader.onAllSourcesLoaded(this.handlePlaceholderAssetsLoaded);
    this.placeholderAssetLoader.loadAll();
  },
  mounted() {
    if (this.$props.onRef) {
      this.$props.onRef(this);
    }
  },  
};
</script>