<template>
  <!-- <div class="popup popup-cart popup-show">
    <div class="popup__wrapper">
      <div class="popup__content">
        <Cart />
      </div>
    </div>
  </div> -->

  <Header />
  <HomePage />
  <Footer />

  <!-- <CatalogPage /> -->

  <!-- <CertificatesPage /> -->

  <!-- <FavoritePage /> -->

  <!-- <ProductPage /> -->

  <!-- <OrderPage /> -->

  <!-- <Modal /> -->
  <!-- <Modal2 /> -->
  <!-- <Modal3 /> -->
  <!-- <Modal4 /> -->

  <Account />
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
// import Cart from "./components/Cart"
// import OrderPage from "./components/OrderPage"
// import Modal from "./components/Modal"
// import Modal2 from "./components/Modal2"
// import Modal3 from "./components/Modal3"
// import Modal4 from "./components/Modal4"

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
    // Cart,
    // OrderPage,
    // Modal2,
    // Modal3,
    // Modal4,
  },
}
</script>

<style lang="scss">
#app {
}
</style>
