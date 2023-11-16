<!-- eslint-disable -->
<template>
  <div class="c-what-we-do__products" style="grid-template-columns: repeat(4, 1fr);min-width: 1200px">
      <transition-group
          name="footer_fade"
          mode="out-in"
          tag="div"
        >
        <AboutSection3Value
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
import AboutSection3Value from '@/components/AboutView/AboutSection3/AboutSection3Value.vue';
import { bounceAnimationY } from '@/helpers/animations';

export default {
  name: 'AboutSection3Values',
  components: { AboutSection3Value },
  props: {
    activeSectionIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      values: [{
          id: 13,
          title: 'Build Better \n Products',
          description: "We foster an environment \nwhere understanding and \ncompassion for one \nanother are paramount",
        }, {
          id: 14,
          title: 'Figure it \nout shit',
          description: 'We provide our employees \nwith the freedom and \nencouragement to explore \ntheir creative potential, \nensuring that joy and fun \nare integral parts of the \ncreative process.',
          }, {
          id: 15,
          title: 'Families \n Together',
          description: 'By cultivating an atmosphere \nof mutual respect and shared \npurpose, we create an \nenvironment where \nemployees not only thrive but \nalso inspire one another.'
          }, {
          id: 16,
          title: 'Nurture \n Relationships',
          description: 'In essence, we recognize that \ninnovation is often the result \nof thinking outside the box, \nand sometimes that box may \neven turn out to be a \ncardboard spaceship in a \nplayful brainstorming session',
          },]
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
