<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <div class="footer__menu menu-footer">
          <div class="menu-footer__column menu-footer__column_logo">
            <a href="#" class="footer__logo"><img src="../assets/img/footer/logo.svg" alt="" /></a>
            <ul class="menu-footer__list">
              <li class="menu-footer__item">
                <a href="tel:+380956415128" class="menu-footer__link menu-footer__link_phone">+38 (095) 641 51 28</a>
              </li>
              <li class="menu-footer__item">Дзвінки по Україні</li>
            </ul>
          </div>
          <div class="menu-footer__column">
            <a href="#" class="menu-footer__mainlink">Головна</a>
            <div class="menu-footer__title">Інформація</div>
            <ul class="menu-footer__list">
              <li class="menu-footer__item"><a href="#" class="menu-footer__link">Угода користувача </a></li>
              <li class="menu-footer__item"><a href="#" class="menu-footer__link">Доставка та оплата</a></li>
              <li class="menu-footer__item"><a href="#" class="menu-footer__link">Контакти</a></li>
            </ul>
          </div>
          <div class="menu-footer__column">
            <div class="menu-footer__title">Мій профіль</div>
            <ul class="menu-footer__list">
              <li class="menu-footer__item"><a href="#" class="menu-footer__link">Вхід та реєстрація </a></li>
              <li class="menu-footer__item"><a href="#" class="menu-footer__link">Забули пароль?</a></li>
            </ul>
          </div>
          <div class="menu-footer__column">
            <div class="menu-footer__title">Приєднатися до нас</div>
            <ul class="menu-footer__list">
              <li class="menu-footer__item"><a href="#" class="menu-footer__link _icon-instagram">Instagram </a></li>
              <li class="menu-footer__item"><a href="#" class="menu-footer__link _icon-facebook">Facebook</a></li>
            </ul>
          </div>
          <div class="menu-footer__column menu-footer__column_form">
            <div class="menu-footer__title">Підпишись та дізнавайся першим про акції та знижки</div>
            <div class="menu-footer__form form-footer">
              <input type="text" class="form-footer__input" placeholder="Ваш E-mail" />
              <button class="form-footer__btn _icon-next"></button>
            </div>
          </div>
          <div class="menu-footer__column menu-footer__column_hide">
            <div class="footer__pays">
              <div class="footer__pay"><img src="../assets/img/footer/mastercard.png" alt="" /></div>
              <div class="footer__pay"><img src="../assets/img/footer/visa.png" alt="" /></div>
              <div class="footer__pay"><img src="../assets/img/footer/mono.png" alt="" /></div>
            </div>
          </div>
        </div>
        <div class="footer__pays footer__pays_hide">
          <div class="footer__pay"><img src="../assets/img/footer/mastercard.png" alt="" /></div>
          <div class="footer__pay"><img src="../assets/img/footer/visa.png" alt="" /></div>
          <div class="footer__pay"><img src="../assets/img/footer/mono.png" alt="" /></div>
        </div>
        <div class="footer__copy">
          <div>©2023 All Rights Reserved. Le’Perle.</div>
          <div>Designed by Katarina Tokar</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default { name: "AppFooter" }
</script>

<style></style>
