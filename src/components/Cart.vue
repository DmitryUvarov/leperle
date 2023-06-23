<template>
  <div class="popup popup-cart popup-show">
    <div class="popup__wrapper">
      <div class="popup__content">
        <div class="cart">
          <div class="cart__top top-cart">
            <div class="top-cart__title">Кошик</div>
            <button type="button" class="popup__close _icon-close"></button>
          </div>
          <div class="cart__progress-block">
            <div class="cart__progress"><span style="width: 70%"></span></div>
            <span>До безкоштовної доставки залишилось:</span>
            <span>1285 грн.</span>
          </div>

          <div class="cart__items">
            <div class="cart__item item-cart">
              <a href="#" class="item-cart__image-ibg">
                <img src="../assets/img/cart/01.jpg" alt="" />
              </a>
              <div class="item-cart__content">
                <div class="item-cart__info">
                  <div class="item-cart__title"><a href="#">Каблучка corset</a></div>
                  <div class="item-cart__material">Розмір: безрозмірна</div>
                  <Counter class="item-cart__counter counter_small" />
                </div>
                <div class="item-cart__price">
                  <div class="item-cart__number">715 грн.</div>
                  <button class="item-cart__button _icon-delete"></button>
                </div>
              </div>
            </div>
          </div>

          <div class="cart__title">Рекомендовані товари</div>

          <div class="cart__items">
            <div class="cart__item item-cart">
              <a href="#" class="item-cart__image-ibg">
                <img src="../assets/img/cart/01.jpg" alt="" />
              </a>
              <div class="item-cart__content">
                <div class="item-cart__info">
                  <div class="item-cart__title"><a href="#">Каблучка corset</a></div>
                  <div class="item-cart__material">Розмір: безрозмірна</div>
                </div>
                <div class="item-cart__price">
                  <div class="item-cart__number">715 грн.</div>
                </div>
                <button class="item-cart__add button">Додати</button>
              </div>
            </div>
          </div>

          <div class="cart__order order-cart">
            <div class="order-cart__title">Ваше замовлення</div>
            <div class="order-cart__line">
              <span>Сума замовлення:</span>
              <span>715 грн.</span>
            </div>
            <div class="order-cart__line">
              <span>Знижка:</span>
              <span>0 грн.</span>
            </div>
            <div class="order-cart__all">
              <span>Разом:</span>
              <span>715 грн.</span>
            </div>
          </div>
          <div class="order-cart__buttons">
            <button class="order-cart__button button button_line">Продовжити покупки</button>
            <button class="order-cart__button button">Перейти до оплати</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue"
export default {
  name: "CartApp",
  data() {
    return {}
  },
  components: {
    Counter,
  },
  methods: {},
}
</script>

<style></style>
