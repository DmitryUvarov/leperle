<template>
  <div class="sizes">
    <div class="sizes__title">{{ title }}</div>
    <div class="sizes__items">
      <div
        class="sizes__item"
        v-for="(item, index) in sizes"
        :key="index"
        :class="{ active: activeIndex === index }"
        @click="selectSize(index)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SizesProduct",
  props: {
    title: String,
    sizes: Array,
  },
  data() {
    return {
      activeIndex: 0,
    }
  },
  methods: {
    selectSize(index) {
      this.activeIndex = index
    },
  },
}
</script>

<style></style>
