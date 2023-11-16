<template>
  <!-- eslint-disable -->
  <div
    class="c-services__section c-services__section--no-padding c-what-we-do-mobile">
    <div class="c-what-we-do-mobile__intro-wrapper">
      <div class="c-intro">
        <div class="c-line__wrapper" data-start-divider="" data-section-item="">
          <div class="c-line"></div>
        </div>
        <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
          <div class="c-intro__content" data-intro-content="">
            <div class="c-intro__left"><p class="c-intro__number">02</p>
              <div class="c-line__wrapper">
                <div class="c-intro__line c-line"></div>
              </div>
              <p class="c-intro__text">BUT WHAT DO WE ACTUALLY DO?</p></div>
            <div class="c-intro__right"><p class="c-intro__text">Our Process</p></div>
          </div>
        </div>
      </div>
    </div>
    <div class="c-what-we-do-mobile__sections" style="position: relative;margin-top: 20px;">
      <transition
        name="body0_fade"
        mode="out-in"
      >
        <div v-show="mobilesection1_videosection_index === 0" class="c-what-we-do-mobile__section" style="margin-top: -30px;">
          <video width="100%" class="mobile-service-product-video" autoplay loop>
              <source src="@/assets/videos/service-sec-2-video-1.mp4" type="video/mp4" />
              <track kind="captions" label="English captions" lang="en" default />
              Your browser does not support the video tag.
          </video>
          <div class="c-what-we-do-mobile__section-index">01</div>
          <div class="c-what-we-do-mobile__section-title">Operating <br>System Design</div>
          <div class="c-what-we-do__product-line">
            <div class="c-what-we-do__product-line--bar"></div>
            <div class="c-what-we-do__product-line--faded-bar"></div>
          </div>
          <div class="c-what-we-do-mobile__section-description" style="font-weight: 600;">
            The biggest consumer electronics companies such as Xiaomi, Oppo, Google and other pick Milkinside as a one of the best possible design partner for OS design
          </div>
        </div>
      </transition>
      <transition
        name="body0_fade"
        mode="out-in"
      >
        <div v-show="mobilesection1_videosection_index === 1" class="c-what-we-do-mobile__section" style="margin-top: -30px;">
          <video width="100%" class="mobile-service-product-video" autoplay loop>
              <source src="@/assets/videos/service-sec-2-video-2.mp4" type="video/mp4" />
              <track kind="captions" label="English captions" lang="en" default />
              Your browser does not support the video tag.
          </video>
          <div class="c-what-we-do-mobile__section-index">02</div>
          <div class="c-what-we-do-mobile__section-title">Intelligence <br>products</div>
          <div class="c-what-we-do__product-line">
            <div class="c-what-we-do__product-line--bar"></div>
            <div class="c-what-we-do__product-line--faded-bar"></div>
          </div>
          <div class="c-what-we-do-mobile__section-description">
            The biggest consumer electronics<br> companies such as Xiaomi, Oppo,<br> Google and other pick Milkinside<br> as a one of the best possible<br> design partner for OS design
          </div>
        </div>
      </transition>
      <transition
        name="body0_fade"
        mode="out-in"
      >
        <div v-show="mobilesection1_videosection_index === 2" class="c-what-we-do-mobile__section" style="margin-top: -30px;">
          <video width="100%" class="mobile-service-product-video" autoplay loop>
              <source src="@/assets/videos/service-sec-2-video-3.mp4" type="video/mp4" />
              <track kind="captions" label="English captions" lang="en" default />
              Your browser does not support the video tag.
          </video>
          <div class="c-what-we-do-mobile__section-index">03</div>
          <div class="c-what-we-do-mobile__section-title">Voice <br>First products</div>
          <div class="c-what-we-do__product-line">
            <div class="c-what-we-do__product-line--bar"></div>
            <div class="c-what-we-do__product-line--faded-bar"></div>
          </div>
          <div class="c-what-we-do-mobile__section-description">
            The biggest consumer electronics<br> companies such as Xiaomi, Oppo,<br> Google and other pick Milkinside<br> as a one of the best possible<br> design partner for OS design
          </div>
        </div>
     </transition>
      <transition
        name="body0_fade"
        mode="out-in"
      >
          <div v-show="mobilesection1_videosection_index === 3" class="c-what-we-do-mobile__section" style="margin-top: -30px;">
            <video width="100%" class="mobile-service-product-video" autoplay loop>
                <source src="@/assets/videos/service-sec-2-video-4.mp4" type="video/mp4" />
                <track kind="captions" label="English captions" lang="en" default />
                Your browser does not support the video tag.
            </video>
            <div class="c-what-we-do-mobile__section-index">04</div>
            <div class="c-what-we-do-mobile__section-title">Ecommerce <br>innovation</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description">
              The biggest consumer electronics<br> companies such as Xiaomi, Oppo,<br> Google and other pick Milkinside<br> as a one of the best possible<br> design partner for OS design
            </div>
          </div>
      </transition>
      <transition
        name="body0_fade"
        mode="out-in"
      >
          <div v-show="mobilesection1_videosection_index === 4" class="c-what-we-do-mobile__section" style="margin-top: -30px;">
            <video width="100%" class="mobile-service-product-video" autoplay loop>
                <source src="@/assets/videos/service-sec-2-video-5.mp4" type="video/mp4" />
                <track kind="captions" label="English captions" lang="en" default />
                Your browser does not support the video tag.
            </video>
            <div class="c-what-we-do-mobile__section-index">05</div>
            <div class="c-what-we-do-mobile__section-title">Intellegence<br>products</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description">
              The biggest consumer electronics<br> companies such as Xiaomi, Oppo,<br> Google and other pick Milkinside<br> as a one of the best possible<br> design partner for OS design
            </div>
          </div>
      </transition>
      <transition
        name="body0_fade"
        mode="out-in"
      >
          <div v-show="mobilesection1_videosection_index === 5" class="c-what-we-do-mobile__section" style="margin-top: -30px;">
            <video width="100%" class="mobile-service-product-video" autoplay loop>
                <source src="@/assets/videos/service-sec-2-video-3.mp4" type="video/mp4" />
                <track kind="captions" label="English captions" lang="en" default />
                Your browser does not support the video tag.
            </video>
            <div class="c-what-we-do-mobile__section-index">06</div>
            <div class="c-what-we-do-mobile__section-title">B2B and Intellegence</div>
            <div class="c-what-we-do__product-line">
              <div class="c-what-we-do__product-line--bar"></div>
              <div class="c-what-we-do__product-line--faded-bar"></div>
            </div>
            <div class="c-what-we-do-mobile__section-description" style="font-weight: 600;">
              The biggest consumer electronics<br> companies such as Xiaomi, Oppo,<br> Google and other pick Milkinside<br> as a one of the best possible<br> design partner for OS design
            </div>
          </div>
      </transition>
    </div>
    <svg class="c-services__mobile-down-icon" width="18" height="47" fill="none" style="position:absolute;z-index:2;bottom:250px">
      <use xlink:href="@/assets/sprites/icons.svg#mouse-down"></use>
    </svg>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'ServicesSectionMobile1',
  props: {
    mobilesection1_videosection_index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {     
    }
  },
};
</script>
<style>
.body0_fade-enter-active { opacity: 1; transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body0_fade-leave-active { transition: all 0.8s cubic-bezier(.71,.17,.14,.93);}
.body0_fade-enter{ transform: translateX(350px); opacity: 0;}
.body0_fade-leave-to{ transform: translateX(-350px); opacity: 0;}
.mobile-service-product-video{
  position: absolute;
  top: 0;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
  transform-origin: center;
  left:0;
  width:100%;
}
</style>
