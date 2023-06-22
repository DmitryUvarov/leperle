<template>
  <main class="page">
    <section class="hero">
      <div class="hero__container">
        <div class="hero__body">
          <swiper
            :modules="modules"
            :observer="true"
            :observeParents="true"
            :speed="800"
            :breakpoints="{
              320: {
                slidesPerView: 1,
              },
              767: {
                slidesPerView: 2,
              },
            }"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 3000 }"
            class="hero__slider"
          >
            <swiper-slide class="hero__slide-ibg"><img src="../assets/img/banners/01.jpg" alt="" /></swiper-slide>
            <swiper-slide class="hero__slide-ibg"><img src="../assets/img/banners/02.jpg" alt="" /></swiper-slide>
          </swiper>
        </div>

        <swiper
          :modules="modules"
          :observer="true"
          :observeParents="true"
          :speed="800"
          :navigation="{
            prevEl: '.hero__navigation .btn-prev',
            nextEl: '.hero__navigation .btn-next',
          }"
          :breakpoints="{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            991: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1270: {
              slidesPerView: 5,
              spaceBetween: 48,
            },
          }"
          class="hero__items"
        >
          <swiper-slide class="hero__item">Тільки натуральні камінці та перлинки</swiper-slide>
          <swiper-slide class="hero__item">Ручна робота та власне виробництво</swiper-slide>
          <swiper-slide class="hero__item">Унікальні та актуальні моделі прикрас</swiper-slide>
          <swiper-slide class="hero__item">Люксова фурнітура високої якості</swiper-slide>
          <swiper-slide class="hero__item">Великий асортимент та вибір прикрас</swiper-slide>
        </swiper>
        <div class="hero__navigation navigation">
          <button class="navigation__btn btn-prev"></button>
          <button class="navigation__btn btn-next"></button>
        </div>
      </div>
    </section>

    <ProductSlider id="1" />
    <ProductSlider id="2" />

    <section class="types">
      <div class="types__container">
        <div class="types__items">
          <a href="#" class="types__item-ibg types__item-ibg_big">
            <img src="../assets/img/types/01.jpg" alt="" />
            <div class="types__text _icon-arrow-right">Каблучки</div>
          </a>
          <a href="#" class="types__item-ibg">
            <img src="../assets/img/types/02.jpg" alt="" />
            <div class="types__text types__text_left _icon-arrow-right">Сережки</div>
          </a>
          <a href="#" class="types__item-ibg">
            <img src="../assets/img/types/03.jpg" alt="" />
            <div class="types__text _icon-arrow-right">Кольє</div>
          </a>
        </div>
      </div>
    </section>

    <!--
  <section class="page">
    <div class="page__container">
      <div class="page__body"></div>
    </div>
  </section> -->
  </main>
</template>

<script>
import { Pagination, Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import ProductSlider from "./ProductSlider.vue"

import "swiper/css"

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductSlider,
  },
  data() {
    return {}
  },
  setup() {
    return {
      modules: [Pagination, Autoplay, Navigation],
    }
  },
  methods: {},
}
</script>

<style></style>
