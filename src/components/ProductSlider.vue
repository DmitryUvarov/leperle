<template>
  <section class="product-block">
    <div class="product-block__container">
      <div class="product-block__body">
        <div class="product-block__top">
          <h2 class="product-block__title title">New Collection</h2>
          <div class="product-block__navigation navigation navigation_slider">
            <button
              :class="{ navigation__btn: true, 'btn-prev': true, [`prev-${id}`]: true }"
              @click="prevSlide"
            ></button>
            <button
              :class="{ navigation__btn: true, 'btn-next': true, [`next-${id}`]: true }"
              @click="nextSlide"
            ></button>
          </div>
        </div>
        <swiper
          class="product-slider"
          :modules="modules"
          :observer="true"
          :observeParents="true"
          :speed="300"
          :scrollbar="{
            draggable: true,
          }"
          :navigation="{
            prevEl: `.product-block__navigation .prev-${id}`,
            nextEl: `.product-block__navigation .next-${id}`,
          }"
          :breakpoints="swiperOptions.breakpoints"
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
  props: {
    id: {
      type: Number,
    },
  },
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          767: {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1270: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      },
    }
  },
  setup() {
    return {
      modules: [Scrollbar, Navigation],
    }
  },
  methods: {},
}
</script>

<style></style>
