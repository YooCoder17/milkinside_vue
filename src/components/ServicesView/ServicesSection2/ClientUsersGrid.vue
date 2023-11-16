<template>
  <div class="c-clients__users-grid" style="grid-template-rows: repeat(7, auto);">
    <transition-group appear name="fade" tag="div">
      <p v-for="(user, index) in users"
         class="black c-clients__user"
         :key="user.text + index"
         ref="user"
         style="font-size: 2.6rem;"
      >{{ user.text }}</p>
    </transition-group>
  </div>
</template>

<script>
import { bounceAnimationY } from '@/helpers/animations';

export default {
  name: 'ClientUsersGrid',
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.users
        .forEach((user, index) => bounceAnimationY(this.$refs.user[index], index));
    });
  },
};
</script>

<style scoped>
.c-clients__users-grid > div {
  display: contents;
}
</style>
