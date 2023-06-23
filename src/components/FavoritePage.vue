<template>
  <div class="top-page">
    <div class="top-page__container">
      <div class="top-page__breadcrumbs breadcrumbs">
        <ul class="breadcrumbs__list">
          <li class="breadcrumbs__item"><a href="" class="breadcrumbs__link">Le’Perle</a></li>
          <li class="breadcrumbs__item"><span class="breadcrumbs__current">Мій список бажань</span></li>
        </ul>
      </div>
      <div class="top-page__body">
        <h1 class="top-page__title" data-title="my wishlist">Мій список бажань</h1>
        <div class="top-page__control">
          <Sorting />
          <button class="top-page__button top-page__button_hide _icon-filter" @click="toggleOpenFilter">Фільтри</button>
          <Filter class="top-page__filter" :isFilterOpen="isFilterOpen" :closeFilter="toggleOpenFilter" />
        </div>
      </div>
    </div>
  </div>

  <section class="favorite-page">
    <div class="favorite-page__container">
      <div class="favorite-page__items product-items">
        <ProductCartFavorite />
        <ProductCartFavorite />
        <ProductCartFavorite />
        <ProductCartFavorite />
      </div>
    </div>
  </section>

  <ProductSlider id="1" />
  <ProductSlider id="2" />
</template>

<script>
import Sorting from "./Sorting.vue"
import Filter from "./Filter.vue"
import ProductCartFavorite from "./ProductCartFavorite.vue"
import ProductSlider from "./ProductSlider.vue"
export default {
  components: {
    Sorting,
    Filter,
    ProductCartFavorite,
    ProductSlider,
  },
  data() {
    return {
      isFilterOpen: false,
    }
  },
  methods: {
    toggleOpenFilter() {
      this.isFilterOpen = !this.isFilterOpen
    },
  },
}
</script>

<style></style>
