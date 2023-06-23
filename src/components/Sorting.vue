<template>
  <div class="sorting">
    <div :class="{ sorting__top: true, active: isOpenSorting }" @click="togleSortingActive" ref="sortingContainer">
      <div class="sorting__title">Сортувати:</div>
      <div class="sorting__current">
        <span>за замовчуванням</span>

        <ul class="sorting__list">
          <li class="sorting__item">від дешевших до дорогих</li>
          <li class="sorting__item">від дорогих до дешевших</li>
          <li class="sorting__item">по новизні</li>
          <li class="sorting__item">за популярністю</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortingBtn",
  components: {},
  data() {
    return {
      isOpenSorting: false,
    }
  },
  mounted() {
    this.addClickOutsideListener()
  },
  beforeUnmount() {
    this.removeClickOutsideListener()
  },
  methods: {
    togleSortingActive() {
      this.isOpenSorting = !this.isOpenSorting
    },
    addClickOutsideListener() {
      document.addEventListener("click", this.handleClickOutside)
    },
    removeClickOutsideListener() {
      document.removeEventListener("click", this.handleClickOutside)
    },
    handleClickOutside(event) {
      if (
        this.$refs.sortingContainer &&
        !this.$refs.sortingContainer.contains(event.target) &&
        !event.target.closest(".sorting__current")
      ) {
        this.isOpenSorting = false
      }
    },
  },
}
</script>

<style></style>
