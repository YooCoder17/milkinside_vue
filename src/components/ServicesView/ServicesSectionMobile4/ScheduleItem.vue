<!-- eslint-disable -->
<template>
  <div>
    <h2 class="sub-hd">{{item.title}}</h2>
    <div id="description" class="collapsible_content" :class="{'content_active':show_status}">  
        <p style="color: gray;">{{ item.description }}</p>
    </div>        
    <div class="row" :class="{'subtitle_active':show_status}" @click="changeStatus">
      <h1 class="no_hd">{{item.value_number}}</h1>
      <p class="side_txt">
        {{item.value_title}}<br>
        <small class="light_txt">{{item.value_description}}</small>
      </p>
    </div>
    <div class="item_divider"></div>                
  </div>
</template>
<script>
/* eslint-disable */
import { convertNewLineToBreak } from '@/helpers/helpers';
export default {
  name: 'ScheduleItem',
  data() {
    return {
      show_status: false,
    }
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    convertNewLineToBreak,
    changeStatus(){
        this.show_status = !this.show_status;
    },
  },
};
</script>
<style scoped>
.item_divider{
  height: 1px;
  width: 100%;
  background-color: white;
  margin: 24px 0;
}
.collapsible_content {
    margin-top: 10px;
    margin-bottom: 10px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
    &.content_active{
      max-height: 200px;
    }
}
.light_txt{
    color: darkgray;
}
.sub-hd{
    font-size: 22px;
}
.row{
    display: flex;
    background-color: white;
    border-radius: 50px;
    padding: 5px 30px;
    transition: 0.2s ease-in-out;
    &.subtitle_active{
      background-color:black;
      color:white;
    }
}
.no_hd{
    font-size: 48px;
    font-weight: 600;
    flex: 2;
}
.side_txt{
    min-width: 110px;
    margin-top: 10px;
    flex: 1;
}

</style>
