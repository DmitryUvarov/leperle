<template>
  <Cart />

  <Header />
  <HomePage />
  <Footer />

  <!-- <CatalogPage /> -->

  <!-- <CertificatesPage /> -->

  <!-- <FavoritePage /> -->

  <!-- <ProductPage /> -->
</template>

<script>
import HomePage from "./components/HomePage.vue"
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
// import CatalogPage from "./components/CatalogPage.vue"
// import CertificatesPage from "./components/CertificatesPage.vue"
// import FavoritePage from "./components/FavoritePage.vue"
// import FavoritePage from "./components/FavoritePage.vue"
// import ProductPage from "./components/ProductPage"
import Cart from "./components/Cart"

export default {
  name: "App",
  components: {
    HomePage,
    Header,
    Footer,
    // CatalogPage,
    // CertificatesPage,
    // FavoritePage,
    // ProductPage,
    Cart,
  },
}
</script>

<style lang="scss">
#app {
}
</style>
