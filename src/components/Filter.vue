<template>
  <div :class="{ filter: true, 'open-filter': isFilterOpen }">
    <div class="filter__body">
      <div class="filter__top top-filter">
        <div class="top-filter__title">Фільтри</div>
        <button class="top-filter__close _icon-close" @click="closeFilter"></button>
      </div>
      <div class="filter__line">
        <Chekbox title="В наявності" />
        <Chekbox title="Під замовлення" />
      </div>

      <div
        class="accordion-item"
        :class="{ filter__line: true, filter__line_active: activeIndex === index }"
        v-for="(item, index) in accordionItems"
        :key="index"
      >
        <div class="accordion-item__header" @click="toggleAccordion(index)">{{ item.title }}</div>
        <transition
          name="accordion"
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <div v-if="activeIndex === index" ref="content" class="accordion-item__content">
            <Chekbox v-for="(content, i) in item.content" :key="i" :title="content" />
          </div>
        </transition>
      </div>

      <div class="filter__line">
        <div class="filter__title">Вартість</div>

        <div class="filter__price-blocks">
          <div class="filter__price-block">
            від
            <input type="text" v-model="minPrice" @input="filterNumericInput" />
          </div>
          <div class="filter__price-block">
            до
            <input type="text" v-model="maxPrice" @input="filterNumericInput" />
          </div>
        </div>
        <div class="filter__price-labels">
          <span class="filter__price-label" @click="setMaxPrice(600)">до 600 ₴</span>
          <span class="filter__price-label" @click="setMaxPrice(700)">до 700 ₴</span>
          <span class="filter__price-label max" @click="setMaxPrice(800)">до 800 ₴</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chekbox from "./Chekbox.vue"
export default {
  name: "FilterBtn",
  components: {
    Chekbox,
  },
  data() {
    return {
      activeIndex: null,
      accordionItems: [
        { title: "Колір", content: ["Зелений", "Червоний", "Чорний"] },
        { title: "Метал", content: ["Зелений", "Червоний", "Чорний"] },
        { title: "Камінці", content: ["Зелений", "Червоний", "Чорний"] },
      ],
      contentHeights: [],
      minPrice: 310,
      maxPrice: 3000,
    }
  },
  props: {
    isFilterOpen: Boolean,
    closeFilter: Function,
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index
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
    setMaxPrice(price) {
      this.maxPrice = price
    },
    filterNumericInput(event) {
      const input = event.target
      input.value = input.value.replace(/\D/g, "")
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.contentHeights = this.accordionItems.map(() => 0)
    })
  },
}
</script>

<style></style>
