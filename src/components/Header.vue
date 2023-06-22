<template>
  <header :class="{ header: true, 'menu-open': isMenuOpen }">
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
        <button type="button" class="icon-menu" @click="toggleMenu"><span></span></button>
        <button class="header__search-btn _icon-search" @click="toggleSearch"></button>
        <a href="#" class="header__logo"><img src="../assets/img/logo.svg" alt="" /></a>

        <div
          :class="{ header__search: true, 'search-header': true, 'search-open': isSearchOpen }"
          ref="searchContainer"
        >
          <button class="search-header__button search-header__button_close _icon-close" @click="toggleSearch"></button>
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
            <button type="button" class="menu__icon icon-menu" @click="toggleMenu"><span></span></button>
            <ul class="menu__list">
              <li class="menu__item"><a href="#" class="menu__link">Бестселлери</a></li>
              <li class="menu__item"><a href="#" class="menu__link">New Collection</a></li>
              <li class="menu__item"><a href="#" class="menu__link">Sale</a></li>
              <li class="menu__item"><a href="#" class="menu__link">Сети прикрас</a></li>
              <li class="menu__item"><a href="#" class="menu__link">Кольє</a></li>
              <li class="menu__item"><a href="#" class="menu__link">Браслети</a></li>
              <li class="menu__item"><a href="#" class="menu__link">Каблучки</a></li>
              <li class="menu__item"><a href="#" class="menu__link">Сережки</a></li>
              <li class="menu__item"><a href="#" class="menu__link">Кафи</a></li>
              <li class="menu__item"><a href="#" class="menu__link">Анклети</a></li>
              <li class="menu__item"><a href="#" class="menu__link">Сертифікати</a></li>
              <li class="menu__item menu__item_hide">
                <a href="tel:+380950781369" class="menu__link _icon-phone">+38 (095) 078 13 69</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false,
      isSearchOpen: false,
    }
  },

  mounted() {
    this.menuInit()
    this.addClickOutsideListener()
  },
  beforeUnmount() {
    this.removeClickOutsideListener()
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      this.bodyLockToggle()
    },
    bodyLockToggle(delay = 500) {
      if (document.documentElement.classList.contains("lock")) {
        this.bodyUnlock(delay)
      } else {
        this.bodyLock(delay)
      }
    },
    bodyUnlock(delay = 500) {
      let body = document.querySelector("body")
      if (this.bodyLockStatus) {
        let lock_padding = document.querySelectorAll("[data-lp]")
        setTimeout(() => {
          for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index]
            el.style.paddingRight = "0px"
          }
          body.style.paddingRight = "0px"
          document.documentElement.classList.remove("lock")
        }, delay)
        this.bodyLockStatus = false
        setTimeout(() => {
          this.bodyLockStatus = true
        }, delay)
      }
    },
    bodyLock(delay = 500) {
      let body = document.querySelector("body")
      if (this.bodyLockStatus) {
        let lock_padding = document.querySelectorAll("[data-lp]")
        for (let index = 0; index < lock_padding.length; index++) {
          const el = lock_padding[index]
          el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"
        }
        body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"
        document.documentElement.classList.add("lock")

        this.bodyLockStatus = false
        setTimeout(() => {
          this.bodyLockStatus = true
        }, delay)
      }
    },
    menuInit() {
      if (document.querySelector(".icon-menu")) {
        document.addEventListener("click", e => {
          if (this.bodyLockStatus && e.target.closest(".icon-menu")) {
            this.bodyLockToggle()
            document.documentElement.classList.toggle("menu-open")
          }
        })
      }
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen
    },

    addClickOutsideListener() {
      document.addEventListener("click", this.handleClickOutside)
    },
    removeClickOutsideListener() {
      document.removeEventListener("click", this.handleClickOutside)
    },
    handleClickOutside(event) {
      if (
        this.$refs.searchContainer &&
        !this.$refs.searchContainer.contains(event.target) &&
        !event.target.closest(".header__search-btn")
      ) {
        this.isSearchOpen = false
      }
    },
  },
}
</script>
