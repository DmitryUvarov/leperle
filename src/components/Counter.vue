<template>
  <div class="counter">
    <button class="counter__button" @click="decreaseCounter">-</button>
    <input type="text" class="counter__input" v-model="counter" @input="handleInput" />
    <button class="counter__button" @click="increaseCounter">+</button>
  </div>
</template>

<script>
export default {
  name: "CounterApp",
  data() {
    return {
      counter: 1,
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      if (this.counter > 1) {
        this.counter--
      }
    },
    handleInput() {
      this.counter = this.counter.replace(/\D/g, "")
    },
  },
}
</script>

<style></style>
