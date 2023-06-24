<template>
  <div class="cart order__cart">
    <div class="order__cart-item" :class="{ active: activeIndex === 1 }">
      <div class="order__cart-header" @click="toggleAccordion(1)">Ваше замовлення</div>
      <transition
        name="accordion"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
      >
        <div v-if="activeIndex === 1" ref="content" class="order__cart-content">
          <div class="cart__overflow">
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
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue"
export default {
  name: "CartOrderApp",
  components: {
    Counter,
  },
  data() {
    return {
      activeIndex: 1,
    }
  },
  methods: {
    toggleAccordion() {
      this.activeIndex = this.activeIndex === 1 ? null : 1
    },
    beforeEnter(el) {
      el.style.maxHeight = "0"
    },
    enter(el) {
      el.style.maxHeight = `${el.scrollHeight}px`
    },
    beforeLeave(el) {
      el.style.maxHeight = `${el.scrollHeight}px`
    },
    leave(el) {
      el.style.maxHeight = "0"
    },
    setMaxHeight() {
      this.$nextTick(() => {
        const contentEl = this.$refs.content
        if (contentEl) {
          contentEl.style.maxHeight = `${contentEl.scrollHeight}px`
        }
      })
    },
  },
  mounted() {
    this.setMaxHeight()
  },
}
</script>

<style></style>
