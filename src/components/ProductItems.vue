<template>
  <section class="product-block">
    <div class="product-block__container">
      <div class="product-block__body">
        <div class="product-block__top top-block">
          <h2 class="top-block__title title">New Collection</h2>
          <a href="#" class="top-block__link _icon-next">дивитись усі</a>
        </div>
        <div class="product-block__items product-items">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
        <button class="product-block__button button">Показати більше</button>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCart from "./ProductCart.vue"

export default {
  components: {
    ProductCart,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
