<template>
  <div class="popup modal modal_big popup-show">
    <div class="popup__wrapper">
      <div class="popup__content">
        <div class="popup__close _icon-close"></div>

        <div class="modal__title">Адресна книга</div>
        <div class="modal__row row-inputs">
          <div class="modal__col row-inputs__col">
            <div class="modal__line row-inputs__line">
              <label for="inp1" class="modal__label row-inputs__label">Ім’я одержувача</label>
              <input id="inp2" class="modal__input row-inputs__input input_line" type="text" value="Ольга Чечеткина" />
            </div>
            <div class="modal__line row-inputs__line">
              <label for="inp2" class="modal__label row-inputs__label">Прізвище одержувача</label>
              <input id="inp2" class="modal__input row-inputs__input input_line" type="text" value="Токар" />
            </div>
            <div class="modal__line row-inputs__line">
              <label for="inp3" class="modal__label row-inputs__label">Телефон</label>
              <input
                id="inp3"
                class="modal__input row-inputs__input input_line"
                type="text"
                value="+38 (096) 456 7 678"
              />
            </div>
            <div class="modal__line row-inputs__line">
              <label for="inp4" class="modal__label row-inputs__label">Місто</label>
              <input
                id="inp4"
                class="modal__input row-inputs__input input_line"
                type="text"
                value="Чернівці, Чернівецька обл., Чернівецький р-н"
              />
            </div>
            <div class="modal__line row-inputs__line">
              <label for="inp5" class="modal__label row-inputs__label">Відділення НП</label>
              <input id="inp5" class="modal__input row-inputs__input input_line" type="text" value="11" />
            </div>
          </div>
        </div>
        <button class="modal__button button button_line">Зберегти зміни</button>
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
