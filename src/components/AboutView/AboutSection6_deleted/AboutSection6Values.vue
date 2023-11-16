<!-- eslint-disable -->
<template>
  <div class="c-what-we-do__products">
      <transition-group
          name="footer_fade"
          mode="out-in"
          tag="div"
        >
        <AboutSection6Value
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
import AboutSection6Value from '@/components/AboutView/AboutSection6/AboutSection6Value.vue';
import { bounceAnimationY } from '@/helpers/animations';

export default {
  name: 'AboutSection6Values',
  components: { AboutSection6Value },
  props: {

  },
  data() {
    return {
      values: [{
          id: 13,
          title: 'Milkinsdie Enters \n a New Era',
          description: "01",
        }, {
          id: 14,
          title: "How Organizations \n Can Experience.",
          description: '02',
          }, {
          id: 15,
          title: 'The Design Mind \n milkinside is named',
          description: '03'
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
