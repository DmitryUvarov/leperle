<template>
  <div class="order__chekboxs">
    <div
      v-for="(item, index) in chekboxItems"
      :key="index"
      :class="{ order__chekbox: true, 'chekbox-order': true, active: selectedOption === item }"
      @click="selectOption(item)"
    >
      <div class="chekbox-order__top">
        <img :src="item.image" alt="" />
      </div>
      <div class="chekbox-order__text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChekboxesOrder",
  data() {
    return {
      selectedOption: null,
      chekboxItems: this.items,
    }
  },
  props: {
    items: Array,
  },
  created() {
    this.selectedOption = this.chekboxItems[0]
  },
  methods: {
    selectOption(item) {
      this.selectedOption = item
    },
  },
}
</script>

<style></style>
