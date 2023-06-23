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
          <Sorting />
          <button class="top-page__button top-page__button_hide _icon-filter" @click="toggleOpenFilter">Фільтри</button>
        </div>
      </div>
    </div>
  </div>

  <section class="catalog">
    <div class="catalog__container">
      <div class="catalog__body">
        <Filter class="catalog__filter" :isFilterOpen="isFilterOpen" :closeFilter="toggleOpenFilter" />
        <div class="catalog__content">
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
          <div class="more">
            <div class="more__pagination pagination-more">
              <a href="#" class="pagination-more__item active">1</a>
              <a href="#" class="pagination-more__item">2</a>
              <a href="#" class="pagination-more__item">3</a>
              <a href="#" class="pagination-more__item">4</a>
            </div>

            <div class="more__body">
              <button class="more__button button">Показати більше</button>
              <div class="more__view">переглянуто <b>9</b> товарів з <b>45</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ProductSlider id="1" />
  <ProductSlider id="2" />
</template>

<script>
import Filter from "./Filter.vue"
import Sorting from "./Sorting.vue"
import ProductCart from "./ProductCart.vue"
import ProductSlider from "./ProductSlider.vue"
export default {
  components: {
    Filter,
    Sorting,
    ProductCart,
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
