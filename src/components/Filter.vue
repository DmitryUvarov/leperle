<template>
  <div :class="{ filter: true, active: isFilterOpen }">
    <div class="filter__body">
      <button class="filter__close _icon-close"></button>
      <div class="filter__line">
        <Chekbox title="В наявності" />
        <Chekbox title="Під замовлення" />
      </div>
    </div>
  </div>
</template>

<script>
import Chekbox from "./Chekbox.vue"
export default {
  name: "FilterBtn",
  components: {
    Chekbox,
  },
  props: {
    isFilterOpen: Boolean,
  },
}
</script>

<style></style>
