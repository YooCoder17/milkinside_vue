<!-- eslint-disable -->
<template>
    <div style="width: 100%;height: 100%;">
        <div style="width: 100%;height: 100%; position: relative">
            <div
              :id="containerName"
              style="width: 100%;height: 100%; position: absolute"
            ></div>
            <div
              ref="plane1"
              style="position: absolute;
                    top: 50%;
                    left: 50%;
                    width: auto;
                    height: auto;
                    min-width: 100%;
                    min-height: 100%;
                    transform: translate(-50%, -50%)"
            ></div>
            <div
            ref="plane2"
              style="position: absolute;
                    top: 50%;
                    left: 50%;
                    width: auto;
                    height: auto;
                    min-width: 100%;
                    min-height: 100%;
                    transform: translate(-50%, -50%)"
            ></div>
        </div>
      </div>
</template>
<script>
/* eslint-disable */
import { Curtains, Plane } from "curtainsjs";
import { TweenMax  } from "gsap";
import { CustomEase } from "@/helpers/CustomEase.min.js";
import { fragShader, vertShader } from "@/helpers/FOVTileScaleTransition";
const { v4: uuidv4 } = require("uuid");
// gsap.registerPlugin(CustomEase);
export const mod = (i, N) => {
  return ((i % N) + N) % N;
};
export const FOVTransitionType = {
  SLIDESHOW: "slideshow",
  HOMEPAGE: "homepage"
};
export default {
  name: 'FOVShaderImage',
  components: {
  },
  props: {
    assets: {
      type: Array,
      required: true,
    },
    startAssetIdx: {
      type: Number,
      required: true,
    },
  },
  mounted(){
    this.curtain = new Curtains({
      container: this.containerName,
      autoRender: false,
      production: true
    });
    this.curtain.disableDrawing();

    let params = {
      autoloadSources: false,
      shareProgram: true,
      vertexShader: vertShader,
      fragmentShader: fragShader,
      uniforms: {
        opacity: {
          name: "uOpacity",
          type: "1f",
          value: 1.0
        },
        scale: {
          name: "uScale",
          type: "1f",
          value: 1.0
        },
        fov: {
          name: "uFOV",
          type: "1f",
          value: 0.0
          // value: 0.8,
        },
        fovCenter: {
          name: "uFOVCenter",
          type: "2fv",
          // value: [0.5, 0.5],
          value: [0.0, 0.0]
        },
        // Anchor mode: 0 (top left), 1 (bottom right), 2 (top right), 3 (bottom left)
        anchorMode: {
          name: "uAnchorMode",
          type: "1f",
          value: 1.0
        }
      }
    };
    // this.glPlane1 = new Plane(this.curtain, this.$refs.plane1, params);
    // this.glPlane2 = new Plane(this.curtain, this.$refs.plane2, params);
    this.glPlane1 = this.curtain.addPlane(this.$refs.plane1, params);
    this.glPlane2 = this.curtain.addPlane(this.$refs.plane2, params);
    this.glPlane1.enableDepthTest(false);
    this.glPlane2.enableDepthTest(false);
    this.glPlane1.moveToFront();

    this.plane1Texture = this.glPlane1.createTexture("assetTexture");
    this.plane2Texture = this.glPlane2.createTexture("assetTexture");

    if (this.preloaded) {
      this.setupRendering(
        this.loader.loadedAssets[`${this.focusIndex || 0}`],
        null
      );
    }
  },
  destroyed() {
    console.log("distroyed--------");
    this.curtain.dispose();
  },
  created(){
    this.assets.forEach((e, i) => {
      this.loader.loadedAssets[i.toString()] = e;
    });
  },
  data() {
    return {
      isDropdownOpened : '',
      preloaded : null,
      curtain : null,
      curtainPlanes : [],
      containerName : "canvas" + uuidv4(),
      isAnimating : false,
      isPlane1Top : true,
      preloaded : true,
      loader : { loadedAssets: {} },      
      focusIndex: this.startAssetIdx || 0 
    };
  },
  methods: {    
    previous() {
      let nextImageIdx = mod(this.focusIndex - 1, this.assets.length);
      this.setImageIndex(nextImageIdx);
    },
    next() {
      let nextImageIdx = mod(this.focusIndex + 1, this.assets.length);
      this.setImageIndex(nextImageIdx);
    },
    setAnchorPosition(plane, appear) {
        plane.uniforms.anchorMode.value = 3.0;
        plane.uniforms.fovCenter.value = appear ? [0.5, 0.5] : [0.35, 0.35];
    },
    setImageIndex(idx, animate = true, completionBlock) {
      if (this.isAnimating) return;

      let currentBackPlane;
      let currentFrontPlane;
      let currentBackTexture;
      let currentFrontTexture;

      if (!this.isPlane1Top) {
        currentBackPlane = this.glPlane1;
        currentFrontPlane = this.glPlane2;
        currentBackTexture = this.plane1Texture;
        currentFrontTexture = this.plane2Texture;
      } else {
        currentBackPlane = this.glPlane2;
        currentFrontPlane = this.glPlane1;
        currentBackTexture = this.plane2Texture;
        currentFrontTexture = this.plane1Texture;
      }
      currentBackPlane.moveToFront();
      let nextImageIdx = mod(idx, this.assets.length);
      if (!animate) {
        currentBackPlane.uniforms.opacity.value = 0.0;
        currentBackPlane.uniforms.fov.value = 0.0;
        currentBackPlane.uniforms.scale.value = 1.0;
        currentBackTexture.setSource(
          this.loader.loadedAssets[nextImageIdx.toString()]
        );
        currentBackPlane.uniforms.opacity.value = 1.0;
        currentBackPlane.playVideos();
        currentBackPlane.planeResize();

        currentFrontPlane.uniforms.opacity.value = 0.0;
        if (currentFrontTexture.source.tagName === "VIDEO") {
          this.loader.loadedAssets[this.focusIndex].pause();
        }
      } else {
        this.isAnimating = true;
        currentBackPlane.uniforms.opacity.value = 0.0;
        currentBackTexture.setSource(
          this.loader.loadedAssets[nextImageIdx.toString()]
        );
        if (this.loader.loadedAssets[this.focusIndex].pause) {
          this.loader.loadedAssets[this.focusIndex].pause();
        }

        currentBackPlane.playVideos();

        this.setAnchorPosition(currentBackPlane, true);
        this.setAnchorPosition(currentFrontPlane, false);

        this.transitionSlideshow(currentBackPlane, true, currentBackTexture);
        this.transitionSlideshow(currentFrontPlane, false, currentFrontTexture);
        setTimeout(() => {
          this.isAnimating = false;
          if (completionBlock) {
            completionBlock();
          }
        }, 800);
      }
      this.focusIndex = nextImageIdx;
      this.isPlane1Top = !this.isPlane1Top;

    },
    updateAssets(index, video) {
      this.loader.loadedAssets[index.toString()] = video;

      if (index === this.focusIndex) {
        let currentFrontPlane;
        let currentFrontTexture;

        if (this.isPlane1Top) {
          currentFrontPlane = this.glPlane1;
          currentFrontTexture = this.plane1Texture;
        } else {
          currentFrontPlane = this.glPlane2;
          currentFrontTexture = this.plane2Texture;
        }
        currentFrontTexture.setSource(video);
        currentFrontPlane.planeResize();
        currentFrontPlane.playVideos();
      }
    },
    _setupRendering(texturePlane, isPlane2) {
      if (isPlane2) {
        this.plane2Texture.setSource(texturePlane);
      } else {
        this.plane1Texture.setSource(texturePlane);
      }
      this.glPlane1.playVideos();
      this.curtain.enableDrawing();
      this.glPlane1._shouldDraw = true;
      this.glPlane2._shouldDraw = true;
    },
    setupRendering(plane1Texture, plane2Texture) {
      if (plane1Texture.tagName === "VIDEO") {
        if (plane1Texture.readyState !== 0) {
          this._setupRendering(plane1Texture);
          this.curtain._animate();
        } else {
          plane1Texture.addEventListener("loadeddata", () => {
            this._setupRendering(plane1Texture);
            this.curtain._animate();
          });
        }
      } else if (plane1Texture.tagName === "IMG") {
        if (plane1Texture.complete) {
          this._setupRendering(plane1Texture);
          this.curtain._animate();
        } else {
          plane1Texture.onload = () => {
            if (plane1Texture.complete) {
              this._setupRendering(plane1Texture);
              this.curtain._animate();
            }
          };
        }
      }
    },
    transitionSlideshow(plane, isAppear, texture) {
      this.$emit('onAnimating');
      if (!isAppear) {
        //0.33, 0.00, 0.83, 0.83
        TweenMax.fromTo(
          plane.uniforms.scale,
          0.68,
          {
            value: 1.0
          },
          {
            value: 0.27,
            delay: 0.0,
            onComplete: () => {
              texture.shouldUpdate = false;
              if (texture.tagName === "VIDEO") {
                texture.pause();
              }
            },
            ease: CustomEase.create("custom1", "0.84, 0.00, 0.31, 1.00")
          }
        );

        TweenMax.fromTo(
          plane.uniforms.fov,
          0.68,
          {
            value: 0.0
          },
          {
            value: 9.0,
            delay: 0.0,
            ease: CustomEase.create("custom2", "0.33, 0.00, 0.83, 0.83")
          }
        );
      } else {
        TweenMax.fromTo(
          plane.uniforms.fov,
          0.68,
          {
            value: 9.0
          },
          {
            value: 0.0,
            delay: 0.08,
            ease: CustomEase.create("custom1", "0.17, 0.17, 0.67, 1.00")
          }
        );

        TweenMax.fromTo(
          plane.uniforms.scale,
          0.44,
          {
            value: 0.27
          },
          {
            value: 1.0,
            delay: 0.32,
            onComplete: () => {
              this.$emit('onEndAnimation');              
            },
            ease: CustomEase.create("custom2", "0.69, 0.00, 0.16, 1.00")
          }
        );

        TweenMax.fromTo(
          plane.uniforms.opacity,
          0.12,
          {
            value: 0.0
          },
          {
            value: 1.0,
            delay: 0.48,
            ease: CustomEase.create("custom3", "0.17, 0.17, 0.83, 0.83")
          }
        );
      }
    }
  },
  computed:{
  },
};
</script>
<style>

</style>
