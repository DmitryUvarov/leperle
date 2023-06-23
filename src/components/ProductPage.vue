<template>
  <div class="top-page top-page_empty">
    <div class="top-page__container">
      <div class="top-page__breadcrumbs breadcrumbs">
        <ul class="breadcrumbs__list">
          <li class="breadcrumbs__item"><a href="" class="breadcrumbs__link">Le’Perle</a></li>
          <li class="breadcrumbs__item"><a href="" class="breadcrumbs__link">Кольє</a></li>
          <li class="breadcrumbs__item"><a href="" class="breadcrumbs__link">Handmade</a></li>
          <li class="breadcrumbs__item"><span class="breadcrumbs__current">Кольє Pearl Lagoon </span></li>
        </ul>
      </div>
    </div>
  </div>

  <section class="product">
    <div class="product__container">
      <div class="product__body">
        <div class="product__images">
          <swiper
            :slides-per-view="1"
            :modules="modules"
            :speed="800"
            :thumbs="{ swiper: thumbsSwiper }"
            :pagination="{ el: '.main-slider__pagination', clickable: true }"
            :navigation="{
              prevEl: '.main-slider__navigation .btn-prev',
              nextEl: '.main-slider__navigation .btn-next',
            }"
            class="product__main-slider main-slider"
          >
            <swiper-slide class="main-slider__slide-ibg"
              ><img src="../assets/img/product/01.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="main-slider__slide-ibg"
              ><img src="../assets/img/product/01.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="main-slider__slide-ibg"
              ><img src="../assets/img/product/01.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="main-slider__slide-ibg"
              ><img src="../assets/img/product/01.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="main-slider__slide-ibg"
              ><img src="../assets/img/product/01.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="main-slider__slide-ibg"
              ><img src="../assets/img/product/01.jpg" alt=""
            /></swiper-slide>
            <div class="main-slider__navigation navigation-product">
              <button class="navigation-product__btn btn-prev"></button>
              <button class="navigation-product__btn btn-next"></button>
            </div>
            <div class="main-slider__pagination pagination"></div>
          </swiper>
          <swiper
            :slides-per-view="4"
            :space-between="6"
            :modules="modules"
            watch-slides-progress
            @swiper="setThumbsSwiper"
            class="product__trumb-slider trumb-slider"
          >
            <swiper-slide class="trumb-slider__slide-ibg"
              ><img src="../assets/img/product/02.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="trumb-slider__slide-ibg"
              ><img src="../assets/img/product/03.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="trumb-slider__slide-ibg"
              ><img src="../assets/img/product/04.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="trumb-slider__slide-ibg"
              ><img src="../assets/img/product/05.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="trumb-slider__slide-ibg"
              ><img src="../assets/img/product/02.jpg" alt=""
            /></swiper-slide>
            <swiper-slide class="trumb-slider__slide-ibg"
              ><img src="../assets/img/product/03.jpg" alt=""
            /></swiper-slide>
            ...
          </swiper>
        </div>

        <div class="product__content content-product">
          <div class="content-product__body">
            <h1 class="content-product__title">Кольє Pearl Lagoon</h1>
            <div class="content-product__material">Перламутр, позолота 18к</div>
            <div class="content-product__price price">
              <div class="price__current sale">1350 грн.</div>
              <div class="price__old">1500 грн.</div>
            </div>
            <Sizes
              class="sizes_small content-product__sizes"
              title="Довжина кольє:"
              :sizes="['36 см', '38 см', '40 см', '42 см', '44 см']"
            />
            <Clasp class="content-product__clasp" title="Застібка:" :clasp="['Срібло s925', 'Позолота 18к']" />
            <div class="content-product__amount amount-product">
              <div class="content-product__subtitle">Кількість:</div>

              <div class="amount-product__line">
                <Counter />
                <button class="amount-product__button button">Купити</button>
              </div>
              <div class="amount-product__line">
                <span>Є в наявності!</span>
                <span>код товару: 454047</span>
              </div>
            </div>
          </div>

          <div class="content-product__description description-product">
            <div class="content-product__subtitle">Опис товару:</div>

            <div class="description-product__text">
              <p>
                Погрузіться в чарівний світ елегантності з нашим кольє з натурального перламутру та позолотою - розкішна
                прикраса, яка додасть вашому образу неперевершену красу та блиск, створюючи неповторний акцент для
                будь-якого випадку.
              </p>
              <p>
                Використання високоякісних матеріалів та майстерність наших ювелірів гарантує вам надійність та
                довговічність прикраси.
              </p>
            </div>

            <div class="content-product__subtitle">Доставка та оплата:</div>
            <div class="description-product__text">
              <div class="description-product__line">
                <div class="description-product__img">
                  <img src="../assets/img/novaposhta.png" alt="" />
                </div>
                <div class="description-product__line-body">
                  <span>Нова пошта відділення або кур’єр</span>
                  <span>від 70 грн</span>
                </div>
              </div>
              <div class="description-product__line">
                <div class="description-product__img">
                  <img src="../assets/img/ukrposhta.png" alt="" />
                </div>

                <div class="description-product__line-body">
                  <span>Укр пошта відділення в Україні або Європа</span>
                  <span>від 30 грн</span>
                </div>
              </div>
            </div>
            <div class="description-product__text">
              <p>
                Накладний платіж з передплатою 150 грн. (додатково оплачується комісія за повернення коштів в розмірі 20
                грн і 2% від суми замовлення)
              </p>
              <p>Оплата за реквізитами ФОП - комісія 0%</p>
              <p>Через платіжну систему MonoPay - комісія 0%</p>
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
import { ref } from "vue"
import ProductSlider from "./ProductSlider.vue"
import Sizes from "./Sizes.vue"
import Clasp from "./Clasp.vue"
import Counter from "./Counter.vue"
import { Swiper, SwiperSlide } from "swiper/vue"
import { Thumbs, Navigation, Pagination } from "swiper"

// Import Swiper styles
import "swiper/css"

export default {
  components: {
    ProductSlider,
    Sizes,
    Clasp,
    Counter,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {}
  },
  methods: {},
  setup() {
    const thumbsSwiper = ref(null)
    const setThumbsSwiper = swiper => {
      thumbsSwiper.value = swiper
    }
    return {
      modules: [Thumbs, Navigation, Pagination],
      thumbsSwiper,
      setThumbsSwiper,
    }
  },
}
</script>

<style></style>
