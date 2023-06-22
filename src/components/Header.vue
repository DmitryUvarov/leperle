<template>
  <header class="header">
    <div class="header__top">
      <div class="header__container header__top-container">
        <div class="header__text">Безкоштовна доставка від 2 000 грн.</div>
        <div class="header__timer timer">
          <div class="timer__text">Знижки до Дня Закоханих діють ще:</div>
          <div class="timer__body">
            <div class="timer__numbers">00:08:00:00</div>
            <div class="timer__subs">
              <span>Дн.</span>
              <span>Год.</span>
              <span>Хв.</span>
              <span>Сек.</span>
            </div>
          </div>
        </div>
        <a href="tel:+380950781369" class="header__phone _icon-phone">+38 (095) 078 13 69</a>
      </div>
    </div>
    <div class="header__body">
      <div class="header__container header__container-body">
        <button type="button" class="menu__icon icon-menu"><span></span></button>
        <a href="" class="header__logo"><img src="../assets/img/logo.svg" alt="" /></a>

        <div class="header__search search-header">
          <button class="search-header__button _icon-search"></button>
          <input type="text" class="search-header__input" placeholder="Сережки з перлами та позолотою" />
        </div>

        <div class="header__actions actions-header">
          <a href="#" class="actions-header__link _icon-user"></a>
          <a href="#" class="actions-header__link _icon-favorite"></a>
          <a href="#" class="actions-header__link _icon-cart"><span>2</span></a>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="header__container header__container-bottom">
        <div class="header__menu menu">
          <nav class="menu__body">
            <ul class="menu__list">
              <li class="menu__item"><a href="" class="menu__link">Бестселлери</a></li>
              <li class="menu__item"><a href="" class="menu__link">New Collection</a></li>
              <li class="menu__item"><a href="" class="menu__link">Sale</a></li>
              <li class="menu__item"><a href="" class="menu__link">Сети прикрас</a></li>
              <li class="menu__item"><a href="" class="menu__link">Кольє</a></li>
              <li class="menu__item"><a href="" class="menu__link">Браслети</a></li>
              <li class="menu__item"><a href="" class="menu__link">Каблучки</a></li>
              <li class="menu__item"><a href="" class="menu__link">Сережки</a></li>
              <li class="menu__item"><a href="" class="menu__link">Кафи</a></li>
              <li class="menu__item"><a href="" class="menu__link">Анклети</a></li>
              <li class="menu__item"><a href="" class="menu__link">Сертифікати</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import menuInit from "../assets/js/burgerMenu.js"
// // console.log(menuInit)
// menuInit()
export default {
  name: "AppHeader",
}
</script>

<style></style>
