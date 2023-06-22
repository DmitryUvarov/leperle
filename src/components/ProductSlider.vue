<template>
  <section class="product-block">
    <div class="product-block__container">
      <div class="product-block__body">
        <div class="product-block__top">
          <h2 class="product-block__title title">New Collection</h2>
          <div class="product-block__navigation navigation">
            <button class="navigation__btn btn-prev" @click="prevSlide"></button>
            <button class="navigation__btn btn-next" @click="nextSlide"></button>
          </div>
        </div>
        <swiper
          class="product-slider"
          :modules="modules"
          :observer="true"
          :observeParents="true"
          :slides-per-view="4"
          :space-between="50"
          :scrollbar="{
            draggable: true,
          }"
          :navigation="false"
          ref="swiper"
        >
          <swiper-slide><ProductCart /></swiper-slide>
          <swiper-slide><ProductCart /></swiper-slide>
          <swiper-slide><ProductCart /></swiper-slide>
          <swiper-slide><ProductCart /></swiper-slide>
          <swiper-slide><ProductCart /></swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Scrollbar, Navigation } from "swiper"
import ProductCart from "./ProductCart.vue"
import "swiper/css"

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductCart,
  },
  setup() {
    return {
      modules: [Scrollbar, Navigation],
    }
  },
  methods: {
    prevSlide() {
      //   this.$refs.swiper.swiper.slidePrev()
    },
    nextSlide() {
      //   this.$refs.swiper.swiper.slideNext()
      console.log(this.$refs.swiper)
      console.log(this.$refs.swiper.swiper)
    },
  },
}
</script>

<style></style>
