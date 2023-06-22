<template>
  <header class="header">
      <div class="header__container">
          <div class="header__top">
              <div class="header__text"></div>
              <div class="header__timer timer">
                 <div class="timer__text"></div>
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
          <div class="header__body">
              <!-- <a href="#" class="header__logo"><img src="../../../img/logo.svg" alt=""></a> -->
          </div>
      </div>
  </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style>

</style>