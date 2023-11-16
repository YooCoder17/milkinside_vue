<!-- eslint-disable -->
<template>
  <div class="c-what-we-do__products">
      <transition-group
          name="footer_fade"
          mode="out-in"
          tag="div"
        >
        <AboutSection5Value
          v-for="(item, index) in values"
          @getValueIndex="getValueIndex(index)"
          @removeValueIndex="removeValueIndex"
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
import AboutSection5Value from '@/components/AboutView/AboutSection5/AboutSection5Value.vue';
import { bounceAnimationY } from '@/helpers/animations';

export default {
  name: 'AboutSection5Values',
  components: { AboutSection5Value },
  props: {

  },
  data() {
    return {
      values: [{
          id: 13,
          title: 'Getting Better at \n Listening?',
          description: "01",
          link:'https://medium.com/milkinside/getting-better-at-listening-ef6da24f60b9'
        }, {
          id: 14,
          title: "Why a Discovery \n Process is Crucial.",
          description: '02',
          link:'https://medium.com/milkinside/why-a-discovery-process-is-crucial-e0109ffc88a6'
        }, {
          id: 15,
          title: 'Finding the Nrrative: On\n Storytelling in Design',
          description: '03',
          link:'https://medium.com/milkinside/finding-the-narrative-on-storytelling-in-design-c2d4311602e3'
        },]
    }
  },
  methods: {
    getValueIndex(index) {
      // this.$emit('valueIndex', index);
    },
    removeValueIndex() {
      // this.$emit('removeValueIndex');
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
