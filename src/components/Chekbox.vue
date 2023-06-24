<template>
  <div :class="{ filter__chekbox: true, chekbox: true, active: isCheked }" @click="handleCheckboxClick">
    <div class="chekbox__box"></div>
    <slot></slot>
    <div class="chekbox__title" v-if="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: "ChekboxBtn",
  data() {
    return {
      isCheked: false,
    }
  },
  props: {
    title: String,
  },
  methods: {
    handleCheckboxClick(event) {
      if (!event.target.closest("a")) {
        this.isCheked = !this.isCheked
      }
    },
  },
}
</script>

<style></style>
