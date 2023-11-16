<!-- eslint-disable -->
<template>
  <div class="c-what-we-do__products" style="grid-template-columns: repeat(5, 1fr);position:relative">
      <transition-group
          name="footer_fade"
          mode="out-in"
          tag="div"
        >
        <AboutSection2Value
          v-for="(item, index) in values"
          @getValueIndex="getValueIndex(index)"
          @removeValueIndex="removeValueIndex"
          :activeSectionIndex="activeSectionIndex"
          :index="index"
          :value="item"
          :key="item.title + index"
          ref="item"
        />
     </transition-group>
  </div>
</template>

<script>
/* eslint-disable */
import AboutSection2Value from '@/components/AboutView/AboutSection2/AboutSection2Value.vue';
import { bounceAnimationY } from '@/helpers/animations';

export default {
  name: 'AboutSection2Values',
  components: { AboutSection2Value },
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      values: [{
          id: 7,
          title: 'Perfection',
          description: "Our commitment to \ncreating designs that \ndeeply resonate with \npeople is unwavering.  ",
        }, {
          id: 9,
          title: 'People',
          description: "We're resolute in our \ndedication to enriching lives \nin the digital realm, making it \nmore inclusive, accessible,\nand enjoyable for all.",
          }, {
          id: 10,
          title: 'Passion',
          description: "We're passionate about \nsimplifying and enhancing\ndigital journeys, making them \nnot just seamless but \nextraordinary",
          }, {
          id: 12,
          title: 'Purpose',
          description: "Milkinside's mission \nextends beyond design; it's\n about forging a digital \nfuture that transcends \nboundaries.",
          }, {
          id: 11,
          title: 'Partnership',
          description: "With Milkinside, your vision \ndoesn't just take shape; it \nbecomes an indomitable \ndigital reality that reshapes \nindustries and inspires awe.",
          }]
    };
  },
  methods: {
    getValueIndex(index) {
      this.$emit('valueIndex', index);
    },
    removeValueIndex() {
      this.$emit('removeValueIndex');
    },
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
