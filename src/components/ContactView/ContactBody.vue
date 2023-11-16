<!-- eslint-disable -->
<template>
  <div style="width:64%; margin-top:auto; margin-bottom: auto;position: relative;height:180px;">
    <transition appear name="title_fade" mode="out-in">
      <div v-if="step != 5" ref="title" id="title"
        :class="{ 'active_zoomin': title_status == 1, 'active_zoomout': title_status == 2 }">What's your name?</div>
    </transition>
    <transition appear name="text_fade" mode="out-in">
      <input v-if="step == 1" ref="step1" type="text" class="form_input" @input="handleTextareaChange(1)" required
        placeholder="Introduce yourself" />
    </transition>

    <transition appear name="text_fade" mode="out-in">
      <input v-if="step == 2" ref="step2" type="text" class="form_input" @input="handleTextareaChange(2)" required
        placeholder="Enter your email" />
    </transition>

    <transition appear name="text_fade" mode="out-in">
      <input v-if="step == 3" ref="step3" type="text" class="form_input" @input="handleTextareaChange(3)" required
        placeholder="A few words" />
    </transition>

    <transition appear name="text_fade" mode="out-in">
      <div v-if="step == 4" id="introduce_txt" style="vertical-align: bottom; height:180px; width:100%">
        <textarea class="form_input" rows="1" ref="textarea" @input="adjustTextarea" v-model="describeText"
          style="resize: none;border:none; writing-mode: vertical-rl; overflow-y: auto;" required
          placeholder="Describe"></textarea>
      </div>
    </transition>
    <transition appear name="progress_fade" mode="out-in">
      <div v-if="step != 5" ref="progress" class="progress">
        <div class="left"></div>
        <div class="right"></div>
      </div>
    </transition>
    <transition appear name="button_fade" mode="out-in">
      <button v-if="step != 5" class="c-services__down-button" @click="onNext"
        style="bottom: 25px;right: 0;position: absolute;width: 80px;height: 80px;">
        <svg width="24" height="30" color="#000" fill="none">
          <use xlink:href="@/assets/sprites/icons.svg#right"></use>
        </svg>
      </button>
    </transition>
    <transition appear name="success_fade" mode="out-in">
      <div v-if="step == 5" style="font-size:max(2.5rem, 25px); font-weight: 700;">
        <div style="font-size: 5rem;">Thank you!</div>
        <div style="margin-top:25px">Your application has been successfully sent.</div>
        <div style="margin-top:10px">We will contact you.</div>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';
export default {
  name: 'ContactBody',
  data() {
    return {
      step: 1,
      first_name: '',
      email: '',
      message: '',
      title_status: 0,
      describeText: '',
      describeFontSize: 5,
      textAreaRows: 1,
    };
  },
  methods: {
    enterIntroContent,
    leaveIntroContent,
    onNext(e) {
      switch (this.step) {
        case 1:
          this.first_name = this.$refs.step1.value; break;
        case 2:
          this.email = this.$refs.step2.value; break;
        case 3:
          this.email = this.$refs.step3.value; break;
        case 4:
          this.message = this.$refs.textarea.value; break;
      }
      this.step++;
      let title = document.getElementById("title");
      this.title_status = 1;

      const leftDiv = document.querySelector('.left');
      const rightDiv = document.querySelector('.right');

      const newLeftPercentage = 25 * (this.step - 1);
      const newRightPercentage = 100 - newLeftPercentage;

      leftDiv.style.flex = `${newLeftPercentage}%`;
      rightDiv.style.flex = `${newRightPercentage}%`;

      setTimeout(() => {
        if (this.step == 2)
          title.textContent = "What's your email?";
        if (this.step == 3)
          title.textContent = "Tell me everything";
        if (this.step == 4)
          title.textContent = "I work for:";

        this.title_status = 2;
        setTimeout(() => {
          this.title_status = 0;
        }, 200);
      }, 200);

      if (this.step == 5) {
        e.preventDefault();
        const url =
          "https://vl5w2lg4m2.execute-api.us-east-1.amazonaws.com/dev/contact";
        let bodyObject = {};
        bodyObject['first_name'] = this.first_name;
        bodyObject['email'] = this.email;
        bodyObject['message'] = this.message;
        let bodyJSON = JSON.stringify(bodyObject);
        // fetch(url, {
        //   mode: "no-cors",
        //   method: "POST",
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json"
        //   },
        //   body: bodyJSON
        // })
        //   .then(response => {
        //     console.log(response);
        //     console.log(response.text());
        //     response.text();
        //   })
        //   .then(text => {});
      }
    },
    handleTextareaChange(step) {
      let dom = null;
      switch (step) {
        case 1:
          dom = this.$refs.step1; break;
        case 2:
          dom = this.$refs.step2; break;
        case 3:
          dom = this.$refs.step3; break;
        case 4:
          dom = this.$refs.step4; break;
      }
      if (dom.value.length > 30)
        dom.style.fontSize = '4rem';
      if (dom.value.length > 40)
        dom.style.fontSize = '3.5rem';
      if (dom.value.length > 50)
        dom.style.fontSize = '3rem';
      if (dom.value.length > 65)
        dom.style.fontSize = '2.5rem';
    },
    adjustTextarea() {
      const element = this.$refs.textarea;
      let progressElement = document.querySelector('.progress');
      let title = document.querySelector('#title');
      element.style.height = "auto";
      element.style.height = element.scrollHeight + "px";
      // Adjust font size based on content length
      const contentLength = element.value.length;
      let fontSize = this.describeFontSize; // Initial font size
      const maxWidth = element.offsetWidth / (parseFloat(getComputedStyle(document.documentElement).fontSize) * 2.5);
      const rowLength = element.offsetWidth / (parseFloat(getComputedStyle(document.documentElement).fontSize) * fontSize); // Width of the textarea
      const maxLettersPerRow = 6; // Maximum number of letters per row




      if (contentLength < rowLength) {
        fontSize = 5
        element.style.top = "110px";
      }
      else {
        if (contentLength < maxWidth) {
          const extraLetters = contentLength - rowLength;
          const fontSizeChange = Math.floor(
            (2 * extraLetters) / maxLettersPerRow
          ); // Decrease font size for every 4 extra letters
          fontSize -= (fontSizeChange / 4).toFixed(2);
          // console.log(fontSize)
        } else {
          
          fontSize = 3.5;
        }

      }
      element.style.fontSize = fontSize + "rem";
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const rows = Math.floor(element.scrollHeight / lineHeight);

      if(rows > 1) {
        fontSize = 3.5
        element.style.fontSize = "3.5rem";
      }
      // Adjust textarea position based on row count
      if (rows < 5) {
        let topOffset = 160;
        if(rows == 1) topOffset = 110;
        else topOffset = 160 - parseFloat(getComputedStyle(element).lineHeight) * rows;
        element.style.top = topOffset + "px";
        progressElement.style.top = "180px";
        if (rows <= 3) {
          title.style.top = -(rows - 1) * 20 + "px";
        }
      }
      if (rows >=5 ) {
        const topOffset = 160 - parseFloat(getComputedStyle(element).lineHeight) * 4;
        element.style.top = topOffset + "px";
        // console.log(rows, parseFloat(getComputedStyle(element).lineHeight), element.scrollHeight)
        if (rows > 7) {
          element.style.overflowY = "scroll";
          const scroll_height = parseFloat(getComputedStyle(element).fontSize) * 7;
          element.style.height = scroll_height + "px";
        } else {
          const topY = 180 + (rows - 4) * parseFloat(getComputedStyle(element).lineHeight);
          progressElement.style.top = topY + "px";
        }
      }

    },
    updateTextareaSize($event) {
      this.handleTextareaChange(4);
      const textarea = this.$refs.step4;
      // if ($event.target.value.length * this.describeFontSize * 0.6 > textarea.clientWidth) {
      //   if (this.describeFontSize > 30) {
      //     this.describeFontSize = this.describeFontSize * 0.7;
      //   }
      // }

      const cTitle = this.$refs.title;

      switch (this.textAreaRows) {
        case 2:
          this.describeFontSize > 42 ? textarea.style.top = '30px' : textarea.style.top = '90px';
          break;
        case 3:
          textarea.style.top = '60px';
          break;
        case 4:
          textarea.style.top = '30px';
          break;
      }

      const tempTextarea = document.createElement('textarea');
      tempTextarea.style.cssText = getComputedStyle(textarea).cssText;
      tempTextarea.style.height = 'auto';
      tempTextarea.style.visibility = 'hidden';
      tempTextarea.value = 'X'; // Single character to measure line height

      document.body.appendChild(tempTextarea);
      const lineHeight = tempTextarea.scrollHeight;
      document.body.removeChild(tempTextarea);


      const scrollHeight = tempTextarea.scrollHeight;
      const clientHeight = textarea.clientHeight;
      this.textAreaRows = Math.floor(scrollHeight / lineHeight);


      this.describeText = $event.target.value;
    },
  },
};
/* eslint-disable */
</script>
<style scoped lang="scss">
.progress {
  height: 3px;
  top: 180px;
  position: absolute;
  width: 100%;
  display: flex;
}

.left {
  flex: 0%;
  background-color: rgb(32, 32, 32);
  transition: flex 0.5s,
}

.right {
  flex: 100%;
  background-color: rgb(255, 255, 255);
  transition: flex 0.5s,
}

.success_fade-enter-active {
  opacity: 1;
  transition: all 0.5s cubic-bezier(.71, .17, .14, .93);
}

.success_fade-leave-active {
  transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);
}

.success_fade-enter {
  opacity: 0;
  transform: translateY(-250px);
}

.success_fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.button_fade-enter-active {
  opacity: 1;
  transition: all 0.5s cubic-bezier(.71, .17, .14, .93);
}

.button_fade-leave-active {
  transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);
}

.button_fade-enter {
  opacity: 0;
}

.button_fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.progress_fade-enter-active {
  opacity: 1;
  transition: all 0.5s cubic-bezier(.71, .17, .14, .93);
}

.progress_fade-leave-active {
  transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);
}

.progress_fade-enter {
  opacity: 0;
}

.progress_fade-leave-to {
  opacity: 0;
  transform: translateY(-350px);
}

.title_fade-enter-active {
  opacity: 1;
  transition: all 0.5s cubic-bezier(.71, .17, .14, .93);
}

.title_fade-leave-active {
  transition: all 0.5s cubic-bezier(0.66, 0.00, 0.00, 1.00);
}

.title_fade-enter {
  opacity: 0;
  transform: translateY(-60px);
}

.title_fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.text_fade-enter-active {
  opacity: 1;
  transition: all 0.4s cubic-bezier(.71, .17, .14, .93);
}

.text_fade-leave-active {
  transition: all 0.4s cubic-bezier(0.66, 0.00, 0.00, 1.00);
}

.text_fade-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.text_fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.text_fade-enter-active {
  opacity: 1;
  transition: all 0.4s cubic-bezier(.71, .17, .14, .93);
}

.text_fade-leave-active {
  transition: all 0.4s cubic-bezier(0.66, 0.00, 0.00, 1.00);
}

.text_fade-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.text_fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

textarea {
  font-family: inherit;
}

#title {
  position: absolute;
  width: 350px;
  padding-left: 10px;
  font-size: max(2.5rem, 25px);
  font-weight: 700;
  // margin-bottom: 40px;

  &.active_zoomin {
    animation: zoominAnimation 0.2s cubic-bezier(.71, .17, .14, .93);
    animation-fill-mode: forwards;
  }

  &.active_zoomout {
    animation: zoomoutAnimation 0.2s cubic-bezier(.71, .17, .14, .93);
    animation-fill-mode: forwards;
  }
}

.form_input {
  position: absolute;
  top: 110px;
  caret-color: #1d6197;
  font-size: 5rem;
  font-weight: 700;
  width: 85%;
  outline: 0;
  border-width: 0;
  background: #f5f4f8;
  line-height: 1;
  resize: none;
  min-height: 5rem;

}


@keyframes zoominAnimation {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}

@keyframes zoomoutAnimation {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>