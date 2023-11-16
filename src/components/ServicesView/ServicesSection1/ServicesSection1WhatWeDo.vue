<template>
  <div class="c-what-we-do__products" style="grid-template-columns: repeat(6, 1fr);">
    <!-- <transition-group appear name="fade" tag="div"> -->
      <transition-group
          name="footer_fade"
          mode="out-in"
          tag="div"
        >
      <WhatWeDoProduct
        v-for="(product, index) in whatWeDo"
        @productIndex="productIndex(index)"
        @removeProductIndex="removeProductIndex"
        :activeSectionIndex="activeSectionIndex"
        :index="index"
        :product="product"
        :key="product.title + index"
        ref="product"
      />
    <!-- </div> -->
    </transition-group>
  </div>
</template>

<script>
import WhatWeDoProduct from '@/components/ServicesView/ServicesSection1/WhatWeDoProduct.vue';
import { bounceAnimationY } from '@/helpers/animations';

export default {
  name: 'ServicesSection1WhatWeDo',
  components: { WhatWeDoProduct },
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
    whatWeDo: {
      type: Array,
      required: true,
    },
  },
  methods: {
    productIndex(index) {
      this.$emit('serviceIndex', index);
    },
    removeProductIndex() {
      this.$emit('removeServiceIndex');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.whatWeDo
        .forEach((product, index) => bounceAnimationY(this.$refs.product[index].$el, index));
    });
  },
};
</script>

<style scoped>
.c-what-we-do__products {
  overflow-y: hidden;
}

.c-what-we-do__products > div {
  display: contents;
}
</style>
