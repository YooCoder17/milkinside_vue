<template>
  <!-- eslint-disable -->
    <div
            class="c-clients-mobile c-services__section c-services__section--mobile-section c-services__section--no-padding"  style="overflow-y: auto;">
        <div class="c-clients-mobile__intro-wrapper">
            <div class="c-intro">
                <div class="c-line__wrapper" data-start-divider="" data-section-item="">
                    <div class="c-line"></div>
                </div>
                <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
                    <div class="c-intro__content" data-intro-content="">
                        <div class="c-intro__left"><p class="c-intro__number">03</p>
                            <div class="c-line__wrapper">
                                <div class="c-intro__line c-line"></div>
                            </div>
                            <p class="c-intro__text">Our Heart</p></div>
                        <div class="c-intro__right"><p class="c-intro__text">Milkinside San Francisco</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-clients-mobile__title" style="font-size:max(3.8rem, 32px);">We design digital products and services used by
            billions globally
        </div>
        <div class="c-clients-mobile__clients">
            <p class="c-clients-mobile__client"
                v-for="(user, index) in users"
                :key="user.text + index"
            >{{ user.text }}</p>
        </div>           
        <div class="globe" style="--size: 350px;margin:auto">
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
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'ServicesSectionMobile2',
  data() {
    return {
        users: [{
          id: 13,
          text: 'Spotfiy',
          color: 'black',
        }, {
          id: 16,
          text: 'Lyft',
          color: 'black',
        }, {
          id: 17,
          text: 'PWC',
          color: 'black',
        }, {
          id: 18,
          text: 'Alphabet',
          color: 'black',
        }, {
          id: 21,
          text: 'Daimler',
          color: 'black',
        }, {
          id: 20,
          text: 'Microsoft',
          color: 'black',
        }, {
          id: 28,
          text: 'Ripple',
          color: 'black',
        }, {
          id: 30,
          text: 'Google',
          color: 'black',
        }, {
          id: 31,
          text: 'Xiaomi',
          color: 'black',
        }, {
          id: 36,
          text: 'Oppo',
          color: 'black',
        }, {
          id: 34,
          text: 'Samsung',
          color: 'black',
        }, {
          id: 35,
          text: 'Vital Card',
          color: 'black',
        }, {
          id: 33,
          text: 'Mitsubishi',
          color: 'black',
        }, {
          id: 39,
          text: 'ASKA',
          color: 'black',
        }, {
          id: 40,
          text: 'Starlabs',
          color: 'black',
        }, {
          id: 41,
          text: 'Apple',
          color: 'black',
        }, {
          id: 42,
          text: 'Nokia',
          color: 'black',
        }, {
          id: 43,
          text: 'GAC Motors',
          color: 'black',
        }, {
          id: 44,
          text: 'Lufthansa',
          color: 'black',
        }, {
          id: 45,
          text: 'Airbus',
          color: 'black',
        }, {
          id: 46,
          text: 'Aston Martin',
          color: 'black',
        }, {
          id: 47,
          text: 'T-Mobile',
          color: 'black',
        }, {
          id: 48,
          text: 'Honda',
          color: 'black',
        }, {
          id: 49,
          text: 'SAS',
          color: 'black',
        }, {
          id: 50,
          text: 'Corti',
          color: 'black',
        }, {
          id: 51,
          text: 'Mapbox',
          color: 'black',
        }, {
          id: 52,
          text: 'Netflix',
          color: 'black',
        }, {
          id: 53,
          text: 'Mapbox',
          color: 'black',
        }]
    };
 },
};
</script>
