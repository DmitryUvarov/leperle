<template>
  <div class="top-page">
    <div class="top-page__container">
      <div class="top-page__breadcrumbs breadcrumbs">
        <ul class="breadcrumbs__list">
          <li class="breadcrumbs__item"><a href="" class="breadcrumbs__link">Le’Perle</a></li>
          <li class="breadcrumbs__item"><span class="breadcrumbs__current">Сертифікати</span></li>
        </ul>
      </div>
      <div class="top-page__body">
        <h1 class="top-page__title" data-title="Certificates">Сертифікати</h1>
      </div>
    </div>
  </div>

  <section class="certificates">
    <div class="certificates__container">
      <div class="certificates__body">
        <div class="certificates__content">
          <div class="certificates__text">
            <p>
              Зробіть вибір простим для ваших близьких - оберіть сертифікат Le'Perle, який дозволяє їм насолоджуватися
              безкінечними можливостями вибору з нашого розкішного асортименту.
            </p>
            <p>
              Це не просто подарунок, це можливість збудувати свою власну колекцію чарівних прикрас, які завжди
              нагадуватимуть про вашу любов. Наші сертифікати доступні на будь-яку суму.
            </p>
          </div>
          <Sizes
            title="Обери суму:"
            :sizes="['500 грн', '1000 грн', '1500 грн', '2000 грн', '3000 грн']"
            class="certificates__sizes-block"
          />

          <button class="certificates__button button">Замовити сертифікат</button>
        </div>

        <div class="certificates__image-ibg">
          <img src="../assets/img/about/01.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sizes from "./Sizes.vue"

export default {
  components: {
    Sizes,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
