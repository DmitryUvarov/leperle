<template>
  <div class="clasp">
    <div class="clasp__title">{{ title }}</div>
    <div class="clasp__items">
      <div
        class="clasp__item"
        v-for="(item, index) in clasp"
        :key="index"
        :class="{ active: activeIndex === index }"
        @click="selectClap(index)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "claspProduct",
  props: {
    title: String,
    clasp: Array,
  },
  data() {
    return {
      activeIndex: 0,
    }
  },
  methods: {
    selectClap(index) {
      this.activeIndex = index
    },
  },
}
</script>

<style></style>
