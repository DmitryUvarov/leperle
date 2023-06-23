<template>
  <Header />
  <HomePage />
  <Footer />
</template>

<script>
import HomePage from "./components/HomePage.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
    HomePage,
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
#app {
}
</style>
