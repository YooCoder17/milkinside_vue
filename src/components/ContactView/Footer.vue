<!-- eslint-disable -->
<template>
  <div class="footer_container">
    <div
        v-for="(item, index) in date_list"
        :key="item.time + index"
    >
       <div class="time_section"> {{item.time}}</div>
       <div class="location_section"> {{item.location}} </div>
       <div class="date_section"> {{item.date}} </div>
       <div class="date_section"> {{item.timezone}} </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Footer',
  data() {
    const options1 = {
      timeZone: 'America/Los_Angeles',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    const formatter1 = new Intl.DateTimeFormat('en-US', options1);
    const SanFranciscoTime = formatter1.format(new Date());

    const options2 = {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    const formatter2 = new Intl.DateTimeFormat('en-US', options2);
    const newYorkTime = formatter2.format(new Date());

    
    const options3 = {
      timeZone: 'Europe/London',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    const formatter3 = new Intl.DateTimeFormat('en-US', options3);
    const londonTime = formatter3.format(new Date());

    const options4 = {
      timeZone: 'Europe/Paris',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    const formatter4 = new Intl.DateTimeFormat('en-US', options4);
    const parisTime = formatter3.format(new Date());

    return {
      date_list:[
        {time:SanFranciscoTime, location:'San Francisco', date:'Saturday, 10 Nov', timezone:'(GMT-7)'},
        {time: newYorkTime, location:'New York', date:'Fri, 10 Nov', timezone:'(GMT-4)'},
        {time:londonTime, location:'London', date:'Saturday, 10 Nov', timezone:'(GMT+1)'},
        {time:parisTime, location:'Zurich', date:'Saturday, 10 Nov', timezone:'(CEST)'},
      ]
    };
  },
  mounted(){
  },
};
</script>
<style scoped>
.time_section{
  font-size: 5rem;
  font-weight: 700;
}
.location_section{
  font-size: 1.8rem;
  font-weight: 800;
}
.date_section{
  font-size: 1.8rem;
  opacity: 0.5;
}

.footer_container{
  display: grid;
  flex-grow: 1;
  grid-template-columns: repeat(4, 1fr);
}
</style>
