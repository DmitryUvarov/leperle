<template>
  <div class="popup modal popup-show">
    <div class="popup__wrapper">
      <div class="popup__content">
        <div class="popup__close _icon-close"></div>
        <div class="modal__image-ibg">
          <img src="../assets/img/modal/01.jpg" alt="" />
        </div>
        <div class="modal__maintitle">Отримай 5% знижки на перше замовлення</div>
        <div class="modal__text">
          Залишай свій e-mail та отримай промо-код на знижку. Отримуй нові пропозиції раніше за всіх!
        </div>
        <div class="modal__row row-inputs">
          <div class="modal__col row-inputs__col">
            <div class="modal__line row-inputs__line">
              <input id="inp3" class="modal__input row-inputs__input input" type="text" placeholder="E-mail" />
            </div>
          </div>
        </div>
        <div class="modal__buttons">
          <button class="modal__button button button_line">Продовжити покупки</button>
          <button class="modal__button button">Отримати промокод</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalApp",
}
</script>

<style></style>
