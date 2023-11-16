<!-- eslint-disable -->
<template>
  <div class="c-what-we-do__product-clients-wrapper" style="min-height: 10vh;">
    <div
      class="c-what-we-do__product-clients-header"
      :class="{'c-what-we-do__product-clients-header--hidden': index > 1}"
      style="font-size: max(2rem, 20px); font-weight: 700;margin-left:1.6vw"
    >
      {{ index > 1 ? '' : 'OUR CLIENTS' }}
    </div>
    <div
      v-if="clients?.[0]?.text"
      class="c-line c-what-we-do__product-clients-line"
    ></div>
    <div
      v-if="clients?.[0]?.text"
      class="c-what-we-do__product-clients-list"     
      style="margin-left:1.6vw"
    >
      <div
        v-for="(client, index) in clients"
        class="black c-what-we-do__product-clients-list-item"
        :key="client.text + index"
      >
        {{ client.text }}
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'WhatWeDoProductClients',
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    clients: {
      type: Array,
    },
  },
  computed:{
    activeStatus(){
      return this.activeSectionIndex === 1;
    },
  },
};
</script>

