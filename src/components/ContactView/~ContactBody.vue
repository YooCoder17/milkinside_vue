<!-- eslint-disable -->
<template>
  <div style="width:85%; margin-left:2.5vw; margin-right:auto">
      <transition
        appear
        name="title_fade"
        mode="out-in"
      >
        <div class="c-strategy__top-title" style="font-size: max(8rem, 55px); font-weight: 100; margin-top:4vh">The future awaits</div>
      </transition>
      <transition
        appear
        name="title_fade"
        mode="out-in"
      >
        <div style="background: black; width:2.2vw;height:0.7vh;margin-top:1.5vh"></div>
      </transition>
      <div style="display: flex; margin-top:4vh">
        <transition
          appear
          name="description_fade"
          mode="out-in"
        >
        <div style="width:50%">
          <div style="top: 9.37517vw;width: 25.6289vw;left: 0px;" >
            <p style="left: 0px; width: 100%; color: rgb(111, 111, 111);
                font-weight: lighter; 
                font-size: 2vh; 
                line-height: 1.45562vw; 
                text-align: left; 
                position: relative; 
                opacity: 1; 
                transform: matrix(1, 0, 0, 1, 0, 0);">
                At Milkinside, we work with fewer clients to allow our creative teams to focus on building ground-breaking experiences.
            </p><br>
            <p style="left: 0px; width: 100%; 
                color: rgba(111, 111, 111, 0.9); 
                font-weight: 400; font-style: normal; 
                font-size: 2vh; 
                line-height: 1.45562vw; 
                text-align: left; 
                position: relative; 
                opacity: 1; 
                transform: matrix(1, 0, 0, 1, 0, 0);">
                Whether we’re working on a fixed project basis, or for equity and a monthly retainer, we select partners where we can create maximum business value.
            </p>
          </div>
        </div>
        </transition>
        <transition
          appear
          name="form_fade"
          mode="out-in"
        >
          <div style="width:50%; height: 210px; position:relative; display: grid; grid-template-rows: repeat(3, 1fr); gap: 5vh;">
            <transition
              appear
              name="field_fade"
              mode="out-in"
            >
              <div v-show="!edit_message_status" style="width:100%;display: flex;">
                <div style="width:45%;margin-right:5%">
                    <div class="inputbox-content">
                      <input ref="t_first_name" id="t_first_name" type="text" class="form_input" @input="handleTextareaChange" required/>
                      <label for="t_first_name">First Name</label>
                      <span class="underline"></span>
                    </div>
                </div>
                <div style="width:45%;">
                  <div class="inputbox-content">
                      <input ref="t_last_name" id="t_last_name" type="text" class="form_input" @input="handleTextareaChange" required/>
                      <label for="t_last_name">Last Name</label>
                      <span class="underline"></span>
                    </div>
                </div>
              </div>
            </transition>
            <transition
              appear
              name="field_fade"
              mode="out-in"
            >
              <div v-show="!edit_message_status" style="width:100%;display: flex;">
                <div style="width:45%;margin-right:5%">
                    <div class="inputbox-content">
                      <input ref="t_email" id="t_email" type="text" class="form_input" @input="handleTextareaChange" required/>
                      <label for="t_email">Email</label>
                      <span class="underline"></span>
                    </div>
                </div>
                <div style="width:45%;">
                   <div class="inputbox-content">
                      <input ref="t_company" id="t_company" type="text" class="form_input" @input="handleTextareaChange" required/>
                      <label for="t_company">Company</label>
                      <span class="underline"></span>
                    </div>
                </div>
              </div>
            </transition>
            <div class="inputbox-content" style="position:absolute; width:95%; margin-top: 210px;">
                  <TextArea ref="message" style="height:210px;resize: none;border:none" id="message" type="text" class="form_input" @input="handleTextareaChange" @focus="onMessageFocus" @blur="onTextAreaBlur" required></TextArea>
                  <label for="message" ref="message_label" id="message_label">Message</label>
                  <span class="textarea_underline"></span>
            </div>
            <transition
              appear
              name="field_fade"
              mode="out-in"
            >
              <div v-show="submit_status" style="position: absolute;cursor: pointer; margin-top: 260px;" @click="onSubmit">
                <a style="font-size:23px;margin-right:10px">Submit</a>
                <img src="@/assets/images/submit_arrow.svg" style="width: 1.97478vw; height: 0.58672vw; top: 0px; left: 0px;">
              </div>
            </transition>
            <div v-show="submit_result" style="position: absolute;cursor: pointer; margin-top: 260px;" @click="onSubmit">
                <a style="font-size:23px;margin-right:10px">An email has been successfully sent</a>                
            </div>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import { enterIntroContent, leaveIntroContent } from '@/helpers/animations';

export default {
  name: 'ContactBody',
  data() {
    return {
      text: '',
      row: 1,
      edit_message_status: false,
      submit_status: false,
      submit_result: false,
      message:'',
    };
  },
  methods: {
    enterIntroContent,
    leaveIntroContent,
    onHandleSubmitButton(){
      this.submit_result = false; 
      if(this.$refs.t_first_name.value != "" && 
         this.$refs.t_last_name.value != "" &&
         this.$refs.t_email.value != "" &&
         this.$refs.t_company.value != "" && 
         this.$refs.message.value != "")
         this.submit_status = true;
      else
         this.submit_status = false;
    },
    onMessageFocus() {
      this.onHandleSubmitButton();
      this.edit_message_status = true;
      this.$refs.message.style.height = "240px";
      this.$refs.message.style.transform = "translateY(-210px)";
      this.$refs.message_label.style.transform = "translateY(-250px)";      
    },
    handleTextareaChange(){
      this.onHandleSubmitButton();
      this.submit_result = false;
    },
    onTextAreaBlur(){
      this.onHandleSubmitButton();
      this.edit_message_status = false;
      this.$refs.message.style.transform = "translateY(0)";
      if(this.$refs.message.value != ""){
        const element = document.getElementById("message_label");
        element.style.transform = "translateY(-35px)";
      }else{
        this.$refs.message_label.style.transform = "translateY(0)";
      }
      this.$refs.message.style.height = "30px";
    },
    onSubmit(e){
      this.submit_status = false;
      setTimeout(() => {
        this.submit_result = true;  
      }, 400);

      e.preventDefault();
      const url =
        "https://vl5w2lg4m2.execute-api.us-east-1.amazonaws.com/dev/contact";
      let bodyObject = {};
      bodyObject['first_name'] = this.$refs.t_first_name.value;
      bodyObject['last_name'] = this.$refs.t_last_name.value;
      bodyObject['email'] = this.$refs.t_email.value;
      bodyObject['company'] = this.$refs.t_company.value;
      bodyObject['message'] = this.$refs.message.value;
      let bodyJSON = JSON.stringify(bodyObject);
      fetch(url, {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: bodyJSON
      })
        .then(response => {
          console.log(response);
          console.log(response.text());
          response.text();
        })
        .then(text => {});
    }
  },
};
/* eslint-disable */
</script>
<style scoped lang="scss">
input:focus {
  outline: none; 
  box-shadow: none; 
}

$primary-color: #1a237e;
$dark-primary-color: #0f1041;
$accent-color: #3f3f3f;
$sub-yellow: #ffca00;
#message{
  height: 30px; 
  transition: all 0.3s; 
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  line-height: 30px;
  font-size:2.2rem;
  border:0;
  background: none;
  border-bottom:1px solid #9e9e9e;
  outline:none;
  border-radius: 0;
  -webkit-appearance: none;
  &:focus,&:valid{
    &~label{
      color: $accent-color;
      transform: translateY(-250px);
      font-size:1.2em;
      transition: all 300ms ease-out;
      cursor:default;
    }
  }
  &:focus{
    &~.underline{
      width: 100%;
    }
    &~.textarea_underline{
      width: 100%;
      background: $accent-color;
    }
  }
}
.inputbox-content{
  position: relative;
  height:40px;
  width: 100%;
  input{
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    line-height: 2.2rem;
    font-size:2.2rem;
    border:0;
    background: none;
    border-bottom:1px solid #9e9e9e;
    outline:none;
    border-radius: 0;
    -webkit-appearance: none;
    &:focus,&:valid{
      &~label{
        color: $accent-color;
        transform: translateY(-30px);
        font-size:1.025em;
        cursor:default;
      }
    }
    &:focus{
      &~.underline{
        width: 100%;
      }      
    }
  }
  label{
    position: absolute;
    font-size: 2.2rem;
    font-weight: 300;
    top:0;
    left:0;
    height: 40px;
    line-height: 40px;
    color:#888888;
    cursor:text;
    transition: all 200ms ease-out;
    z-index:10;
  }
  .textarea_underline{
    content:'';
    position: absolute;
    bottom:-1px;
    left:0;
    width: 100%;
    height: 2px;
    background: #b9b9b9;
    transition: all 200ms ease-out;
  }
  .underline{
    content:'';
    display: block;
    position: absolute;
    bottom:-1px;
    left:0;
    width: 0;
    height: 3px;
    background: $accent-color;
    transition: all 200ms ease-out;
  }
}


.form_input{
  font-size: 2vh;width: 100%; outline: 0; border-width: 0 0 2px; border-color: black;opacity: 0.7;background: #f5f4f8;
}
.title_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.title_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.title_fade-enter { transform: translateY(-80px); opacity: 0;}
.title_fade-leave-to {opacity: 0; transform: translateY(80px);}

.description_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.description_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.description_fade-enter { transform: translateX(-580px); opacity: 0;}
.description_fade-leave-to {opacity: 0; transform: translateX(580px);}

.form_fade-enter-active { opacity: 1; transition: all 1s cubic-bezier(.71,.17,.14,.93);}
.form_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.form_fade-enter { transform: translateX(580px); opacity: 0;}
.form_fade-leave-to {opacity: 0; transform: translateX(-500px);}

.field_fade-enter-active { opacity: 1; transition: all 0.5s cubic-bezier(.71,.17,.14,.93);}
.field_fade-leave-active { transition: all 0.3s cubic-bezier(0.66, 0.00, 0.00, 1.00);}
.field_fade-enter { opacity: 0;}
.field_fade-leave-to {opacity: 0;}

</style>