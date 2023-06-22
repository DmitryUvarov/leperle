<template>
  <Header />
  <HomePage />
</template>

<script>
import HomePage from "./components/HomePage.vue"
import Header from "./components/Header.vue"

export default {
  name: "App",
  components: {
    HomePage,
    Header,
  },
}
</script>

<style lang="scss">
#app {
}
</style>
