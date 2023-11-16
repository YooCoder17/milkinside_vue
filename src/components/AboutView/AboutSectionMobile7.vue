<template>
  <!-- eslint-disable -->
    <div
            class=" bg-black c-partners-mobile c-services__section c-services__section--mobile-section c-services__section--no-padding">
        <div class="c-partners-mobile__inner ">
            <div class="c-partners-mobile__intro-wrapper ">
                <div class="c-intro">
                    <h1 class="no_hd">We Create</h1>
                    <h2 class="bg-hd"  >Inspiring Design, Building Brilliance</h2>
                    <div class="form-group">
                        <input type="email" class="c-input" placeholder="interact@milkinside.com" name="" id="">
                        <button type="button" class="email-btn">
                            <svg class="" width="15" height="15" fill="none">
                                <use xlink:href="@/assets/sprites/icons.svg#right"></use>
                              </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <img class="c-partners-mobile__video" width="100%"
        src="/assets/images/Bitmap2.png">
         <!-- Section 8 Footer -->
         <div class="bg_black">

          <div class="c-partners-mobile__inner">
              <div class="c-partners-mobile__intro-wrapper">
                  <div class="c-intro">
                     
                      <div class="c-intro__content__wrapper" data-intro-content-wrapper="">
                              <div class="" style="display:flex;align-items: start;">
                                  <div class="left" style="flex: 1;">
                                      <p class="main-text">Service </p>
  
                                  </div>
                              
                                  <div class="right-block" style="flex: 1;">
                                      <ul class="footer-links">
                                          <li class="link">
                                              <a href="">Product Strategy</a>
                                          </li>
                                          <li class="link">
                                              <a href="">What we do?</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Partners</a>
                                          </li>
                                          <li class="link">
                                              <a href="">FAQ</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Schedule</a>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
  
                              <div class="" style="display:flex;align-items: start;">
                                  <div class="left" style="flex: 1;">
                                      <p class="main-text">Work  </p>
  
                                  </div>
                              
                                  <div class="right-block" style="flex: 1;">
                                      <ul class="footer-links">
                                          <li class="link">
                                              <a href="">Product Design</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Motion Graphics</a>
                                          </li>
                                          <li class="link">
                                              <a href="">AI-based products </a>
                                          </li>
                                          <li class="link">
                                              <a href="">iOS applications</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Automotive</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Branding and Identity</a>
                                          </li>
                                      </ul>
                                       
                                  </div>
                              </div>
  
                              <div class="" style="display:flex;align-items: start;">
                                  <div class="left" style="flex: 1;">
                                      <p class="main-text">About  </p>
  
                                  </div>
                              
                                  <div class="right-block" style="flex: 1;">
                                      <ul class="footer-links">
                                          <li class="link">
                                              <a href="">About us </a>
                                          </li>
                                          <li class="link">
                                              <a href="">Values</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Culture </a>
                                          </li>
                                          <li class="link">
                                              <a href="">Awards</a>
                                          </li>
                                          <li class="link">
                                              <a href="">Сareer </a>
                                          </li>
                                      </ul>
                                       
                                  </div>
                              </div>
                              <div class="social-block" style="display:flex;align-items: start;">
                                      <p class="social-icon"><a href=""> 
                                          <img src="/assets/images/facebook.png" width="30" height="30" alt="fb">
                                      </a>  </p>
                                      <p class="social-icon"><a href=""> 
                                          <img src="/assets/images/behance.png" width="30" height="30" alt="behance">
                                      </a>  </p>
                                      <p class="social-icon"><a href=""> 
                                          <img src="/assets/images/linkedin.png" width="30" height="30" alt="linkedin">
                                      </a>  </p>
                                      <p class="social-icon"><a href=""> 
                                          <img src="/assets/images/facebook.png" width="30" height="30" alt="fb">
                                      </a>  </p>
                              </div>
                              <div class="social-block" style="display:flex;align-items: start;">
                                  <p class="social-icon"><a href=""> 
                                      <img src="/assets/images/vimeo.png" width="25" height="25" alt="fb">
                                  </a>  </p>
                                  <p class="social-icon"><a href=""> 
                                      <img src="/assets/images/instagram.png" width="30" height="30" alt="behance">
                                  </a>  </p>
                                  <p class="social-icon"><a href=""> 
                                      <img src="/assets/images/pinterest.png" width="30" height="30" alt="linkedin">
                                  </a>  </p>
                                  <p class="social-icon"><a href=""> 
                                      <img src="/assets/images/twitter.png" width="30" height="30" alt="twitter">
                                  </a>  </p>
                              </div>
  
                              <p class="copyright">©2022 Milkinside. All rights reserved.</p>
                                  
                                  
                      </div>
                  </div>
              </div>
            
          </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'AboutSectionMobile7',
  data() {
    return {
      showFaq: true,
      showSch: false,
    };
  },
  methods: {
    toggleContent(data) {
      if (data === 'faq') {
        this.showFaq = true;
        this.showSch = false;
      } else {
        this.showFaq = false;
        this.showSch = true;
      }
    },
  },
};
</script>

<style scoped>
.bg-hd{
    font-size: 30px;
    font-weight: 400;
    margin-top: 10px;
    padding-top: 10px;
    color: whitesmoke;
}
.sub-hd{
    font-size: 22px;
    margin-top: 25px;
}
.bg-black{
  background-color: black;
  color: white;
  border-radius: 20px;
}
.no_hd-7{
  font-size: 48px;
  font-weight: 600;
  flex: 2;
}
.c-input{
  background-color: #161616;
  color: lightgray;
  padding: 25px;
  border-radius: 20px;
  border: 0px;
  width: 100%;
  margin-top: 20px;
}
.email-btn{
  color: black;
  background-color: aliceblue;
  border: 0px;
  padding: 12px 18px;
  border-radius: 15px;
  position: absolute;
  right: 33px;
  margin-top: 30px;
}
.main-text{
  font-size: 26px;
}
.footer-links{
  color: gray;
  list-style: none;
  font-weight: 400;
}
.footer-links >li{
 margin-bottom: 10px;
}
.bg_black{
  background-color: black;
  color: white;
  padding-bottom: 40rem;
}
.social-icon{
  width: 25%;
  text-align: center;
}
.social-block{
  margin-top:20px;
}
.copyright{
  margin:20px 0px;
  color: gray;
  text-align: center;
}
.bg_black{
  background-color: black;
  color: white;
  margin-top:-200px
}
</style>
