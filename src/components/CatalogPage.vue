<template>
  <div class="top-page">
    <div class="top-page__container">
      <div class="top-page__breadcrumbs breadcrumbs">
        <ul class="breadcrumbs__list">
          <li class="breadcrumbs__item"><a href="" class="breadcrumbs__link">Le’Perle</a></li>
          <li class="breadcrumbs__item"><span class="breadcrumbs__current">Сережки</span></li>
        </ul>
      </div>
      <div class="top-page__body">
        <h1 class="top-page__title" data-title="EARRINGS">Сережки</h1>

        <div class="top-page__control">
          <button class="top-page__button top-page__button_hide _icon-filter">Фільтри</button>
          <Sorting />
        </div>
      </div>
    </div>
  </div>

  <section class="catalog">
    <div class="catalog__container">
      <div class="catalog__body">
        <Filter class="catalog__filter" :isFilterOpen="isFilterOpen" />
        <div class="catalog__items product-items">
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Filter from "./Filter.vue"
import Sorting from "./Sorting.vue"
import ProductCart from "./ProductCart.vue"
export default {
  components: {
    Filter,
    Sorting,
    ProductCart,
  },
  data() {
    return {
      isFilterOpen: false,
    }
  },
}
</script>

<style></style>
