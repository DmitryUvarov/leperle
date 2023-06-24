<template>
  <div :class="{ 'inputs-order__row': true, active: isOpen }" ref="dropdownContainer">
    <div class="inputs-order__top" @click="toggleDropdown">
      <input class="inputs-order__input" type="text" placeholder="Оберіть місто" />
    </div>
    <ul class="inputs-order__list">
      <li class="inputs-order__item">Lorem, ipsum.</li>
      <li class="inputs-order__item">Lorem, ipsum.</li>
      <li class="inputs-order__item">Lorem, ipsum.</li>
      <li class="inputs-order__item">Lorem, ipsum.</li>
      <li class="inputs-order__item">Lorem, ipsum.</li>
      <li class="inputs-order__item">Lorem, ipsum.</li>
      <li class="inputs-order__item">Lorem, ipsum.</li>
      <li class="inputs-order__item">Lorem, ipsum.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ImputsOrder",
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.addClickOutsideListener()
  },
  beforeUnmount() {
    this.removeClickOutsideListener()
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    addClickOutsideListener() {
      document.addEventListener("click", this.handleClickOutside)
    },
    removeClickOutsideListener() {
      document.removeEventListener("click", this.handleClickOutside)
    },
    handleClickOutside(event) {
      if (
        this.$refs.dropdownContainer &&
        !this.$refs.dropdownContainer.contains(event.target) &&
        !this.$refs.dropdownContainer.contains(event.target)
      ) {
        this.isOpen = false
      }
    },
  },
}
</script>

<style></style>
