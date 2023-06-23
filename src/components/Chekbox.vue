<template>
  <div :class="{ filter__chekbox: true, chekbox: true, active: isCheked }" @click="addCheked">
    <div class="chekbox__box"></div>
    <div class="chekbox__title">{{ title }}</div>
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
    addCheked() {
      this.isCheked = !this.isCheked
    },
  },
}
</script>

<style></style>
