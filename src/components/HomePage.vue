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

    <ProductItems />

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

    <ProductItems />

    <section class="reviews">
      <div class="reviews__container">
        <div class="reviews__top top-block">
          <h2 class="top-block__title">Відгуки від наших перлинок</h2>
          <div class="reviews__navigation navigation navigation_slider">
            <button class="navigation__btn btn-prev"></button>
            <button class="navigation__btn btn-next"></button>
          </div>
        </div>
        <swiper
          class="reviews-slider"
          :modules="modules"
          :observer="true"
          :observeParents="true"
          :speed="300"
          :autoplay="{ delay: 3000 }"
          :scrollbar="{
            draggable: true,
          }"
          :navigation="{
            prevEl: '.reviews__navigation .btn-prev',
            nextEl: '.reviews__navigation .btn-next',
          }"
          :breakpoints="swiperReviews.breakpoints"
        >
          <swiper-slide>
            <img src="../assets/img/reviews/01.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/reviews/02.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/reviews/03.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/reviews/04.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/reviews/02.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/reviews/03.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/img/reviews/04.jpg" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <ProductItems />

    <section class="links">
      <div class="links__container">
        <div class="links__top top-block">
          <h2 class="top-block__title links__title">Переходь до нас в інстаграм, щоб першою дізнаватись про новинки</h2>
        </div>
      </div>
      <div class="links__body">
        <div class="links__item-ibg"><img src="../assets/img/links/01.jpg" alt="" /></div>
        <div class="links__item-ibg"><img src="../assets/img/links/02.jpg" alt="" /></div>
        <div class="links__item-ibg"><img src="../assets/img/links/03.jpg" alt="" /></div>
        <div class="links__item-ibg"><img src="../assets/img/links/04.jpg" alt="" /></div>
        <div class="links__item-ibg links__item-ibg_hide"><img src="../assets/img/links/05.jpg" alt="" /></div>
      </div>
      <div class="links__container">
        <a href="#" class="links__link">@le.perle.ua</a>
      </div>
    </section>

    <ProductItems />

    <!--
  <section class="page">
    <div class="page__container">
      <div class="page__body"></div>
    </div>
  </section> -->
  </main>
</template>

<script>
import { Pagination, Autoplay, Navigation, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"
import ProductSlider from "./ProductSlider.vue"
import ProductItems from "./ProductItems.vue"

import "swiper/css"

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductSlider,
    ProductItems,
  },
  data() {
    return {
      swiperReviews: {
        breakpoints: {
          320: {
            slidesPerView: 2.2,
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
      modules: [Pagination, Autoplay, Navigation, Scrollbar],
    }
  },
  methods: {},
}
</script>

<style></style>
