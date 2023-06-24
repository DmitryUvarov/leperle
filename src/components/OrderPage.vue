<template>
  <section class="order">
    <div class="order__container">
      <div class="order__body">
        <div class="order__content">
          <div class="order__top top-block">
            <h1 class="top-block__title title">Оформлення замовлення</h1>
          </div>
          <div class="order__maintabs maintabs tabs">
            <nav class="tabs__navigation maintabs__navigation">
              <button
                type="button"
                class="tabs__title maintabs__title"
                :class="{ _active: activeTab === 0 }"
                @click="changeTab(0)"
              >
                Новий покупець
              </button>
              <button
                type="button"
                class="tabs__title maintabs__title"
                :class="{ _active: activeTab === 1 }"
                @click="changeTab(1)"
              >
                Я постійний клієнт
              </button>
            </nav>
            <div class="tabs__content">
              <div class="tabs__body" :class="{ _active: activeTab === 0 }">
                <div class="order__title">1. Заповніть свої данні</div>
                <div class="order__col">
                  <div class="order__row">
                    <input class="input" type="text" placeholder="Ваше ім’я *" />
                    <input class="input" type="text" placeholder="Ваше прізвище *" />
                  </div>
                  <div class="order__row">
                    <input class="input" type="text" placeholder="Телефон *" />
                    <input class="input" type="text" placeholder="E-mail" />
                  </div>
                </div>

                <div class="order__title">2. Оберіть спосіб доставки</div>
                <ChekboxesOrder
                  :items="[
                    { image: require('../assets/img/order/novaposhta.png'), text: 'Нова пошта' },
                    { image: require('../assets/img/order/02.png'), text: 'Кур’єр' },
                    { image: require('../assets/img/order/ukrpochta.png'), text: 'Укр Пошта' },
                  ]"
                />
                <div class="order__inputs inputs-order">
                  <ImputsOrder />
                  <ImputsOrder />
                </div>
                <div class="order__title">3. Варіанти оплати</div>
                <ChekboxesOrder
                  :items="[
                    { image: require('../assets/img/order/pay.png'), text: 'При отриманні' },
                    { image: require('../assets/img/order/monopay.png'), text: 'Monopay' },
                  ]"
                />
                <div class="order__title">4. Маєш промокод?</div>
                <div class="order__col">
                  <div class="order__row">
                    <input class="input" type="text" placeholder="Ваш промокод" />
                  </div>
                  <div class="order__row">
                    <textarea class="textarea input" placeholder="Коментар до замовлення"></textarea>
                  </div>
                </div>

                <chekbox><span v-html="checkboxText"></span></chekbox>
                <Chekbox title="Я не потребую дзвінка менеджера" />
                <button class="order__button button">Перейти до оплати</button>
              </div>
              <div class="tabs__body" :class="{ _active: activeTab === 1 }">
                <!-- <div class="order__user-info user-info">
                  <div class="user-info__item">
                    <div class="user-info__title">Ім’я та прізвище</div>
                    <p class="user-info__text">Катерина Токар</p>
                  </div>
                  <div class="user-info__item">
                    <div class="user-info__title">E-mail</div>
                    <p class="user-info__text">cat@icloud.com</p>
                  </div>
                  <div class="user-info__item">
                    <div class="user-info__title">Телефон</div>
                    <p class="user-info__text">+38 (096) 456 7 678</p>
                    <button class="user-info__button">Змінити контактну інформацію</button>
                  </div>
                  <div class="user-info__item user-info__item_contact">
                    <div class="user-info__title">Адреса доставки</div>
                    <p class="user-info__text">
                      Ольга Чечеткина <br />
                      Відділення НП 11, вул. Руська, 126 <br />
                      Чернівці, Чернівецька обл., Чернівецький р-н <br />
                      тел. +38 (096) 456 7 678
                    </p>
                    <button class="user-info__button">Змінити адресу</button>
                  </div>
                </div> -->

                <div class="order__register register-order">
                  <div class="register-order__text">
                    Якщо ви вже зареєстрований клієнт, то введіть свій e-mail, а якщо ви ще не реєструвались то
                    перейдіть до кнопки “Новий покупець”
                  </div>

                  <!-- <div class="order__col">
                    <div class="order__row">
                      <input class="input" type="text" placeholder="Ваш промокод" />
                      <input class="input" type="text" placeholder="Ваш промокод" />
                    </div>
                  </div> -->

                  <div class="register-order__line">
                    <input class="input" type="text" placeholder="E-mail" />
                    <div class="register-order__buttons">
                      <button class="register-order__link">Забули пароль?</button>
                      <button class="register-order__button button">Увійти</button>
                    </div>
                  </div>
                </div>

                <!-- <div class="order__title">1. Варіанти оплати</div>
                <ChekboxesOrder
                  :items="[
                    { image: require('../assets/img/order/pay.png'), text: 'При отриманні' },
                    { image: require('../assets/img/order/monopay.png'), text: 'Monopay' },
                  ]"
                />
                <div class="order__title">2. Маєш промокод?</div>
                <div class="order__col">
                  <div class="order__row">
                    <input class="input" type="text" placeholder="Ваш промокод" />
                  </div>
                  <div class="order__row">
                    <textarea class="textarea input" placeholder="Коментар до замовлення"></textarea>
                  </div>
                </div>
                <chekbox><span v-html="checkboxText"></span></chekbox>
                <Chekbox title="Я не потребую дзвінка менеджера" />
                <button class="order__button button">Перейти до оплати</button> -->
              </div>
            </div>
          </div>
        </div>
        <!-- <Cart /> -->
        <CartOrder />
      </div>
    </div>
  </section>
</template>

<script>
// import Cart from "./Cart"
import CartOrder from "./CartOrder"
import Chekbox from "./Chekbox"
import ChekboxesOrder from "./ChekboxesOrder"
import ImputsOrder from "./ImputsOrder"
export default {
  components: {
    // Cart,
    CartOrder,
    Chekbox,
    ChekboxesOrder,
    ImputsOrder,
  },
  data() {
    return {
      activeTab: 0,
      checkboxText: `Я погоджуюся з <a href="#" >договором оферти і політикою конфіденційності</a>`,
    }
  },
  methods: {
    changeTab(index) {
      this.activeTab = index
    },
  },
}
</script>

<style></style>
