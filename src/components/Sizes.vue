<template>
  <div class="sizes">
    <div class="sizes__title">Обери суму:</div>
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
  data() {
    return {
      sizes: ["500 грн", "1000 грн", "1500 грн", "2000 грн", "3000 грн"],
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
