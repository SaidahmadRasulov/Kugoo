<template>
  <div
    class="w-[90vw] sm:w-[400px] md:w-[600px] lg:w-[700px] flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 rounded-2xl bg-[var(--p-surface-overlay)] md:min-h-[200px] p-3 md:p-4 shadow-md z-50"
  >
    <!-- Категории - на мобильных полная ширина, на планшетах фиксированная -->
    <div
      class="catalog_selection rounded-xl bg-[var(--p-surface-ground)] w-full md:w-2/5 lg:w-3/7 py-3 md:py-4 px-2 md:px-3"
    >
      <div
        v-for="(category, index) in categories"
        :key="index"
        @click="selectCategory(category.val)"
        class="catalog_item flex mb-2 gap-2 items-center cursor-pointer rounded-lg px-2 md:px-3 py-2 md:py-1.5 transition-all duration-200 hover:bg-[var(--p-surface-section)]"
        :class="{
          'text-[var(--p-primary-color)] bg-[var(--p-surface-section)]': activeCategory === category.val,
        }"
      >
        <v-icon
          :name="category.icon"
          :scale="1.3"
          class="text-base md:text-lg"
          :fill="
            activeCategory === category.val
              ? 'var(--p-primary-color)'
              : 'var(--p-text-color)'
          "
        />
        <span
          :class="{
            'text-[var(--p-primary-color)]': activeCategory === category.val,
            'text-[var(--p-text-color)]': activeCategory !== category.val,
          }"
          class="text-sm md:text-base text-center font-medium"
        >
          {{ category.title }}
        </span>
      </div>
    </div>
    
    <!-- Фильтры - на мобильных в колонку, на планшетах и десктопе в ряд -->
    <div class="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 w-full md:w-auto">
      <ul
        class="selection_title text-[var(--p-text-secondary-color)] pt-0 md:pt-6 flex flex-col gap-2"
      >
        <li
          class="selection_item text-[var(--p-text-color)] selection_head text-base md:text-lg font-semibold"
        >
          Особенности
        </li>
        <li class="selection_item text-sm md:text-base hover:text-[var(--p-text-color)] transition-colors duration-200 cursor-pointer">Внедорожный</li>
        <li class="selection_item text-sm md:text-base hover:text-[var(--p-text-color)] transition-colors duration-200 cursor-pointer">Городской</li>
        <li class="selection_item text-sm md:text-base hover:text-[var(--p-text-color)] transition-colors duration-200 cursor-pointer">Зимний</li>
        <li class="selection_item text-sm md:text-base hover:text-[var(--p-text-color)] transition-colors duration-200 cursor-pointer">С сиденьем</li>
        <li class="selection_item text-sm md:text-base hover:text-[var(--p-text-color)] transition-colors duration-200 cursor-pointer">Без сиденья</li>
      </ul>
      <ul
        class="selection_title text-[var(--p-text-secondary-color)] pt-0 md:pt-6 flex flex-col gap-2"
      >
        <li
          class="selection_item selection_head text-[var(--p-text-color)] text-base md:text-lg font-semibold"
        >
          Для кого
        </li>
        <li class="selection_item text-sm md:text-base hover:text-[var(--p-text-color)] transition-colors duration-200 cursor-pointer">Для детей и подростков</li>
        <li class="selection_item text-sm md:text-base hover:text-[var(--p-text-color)] transition-colors duration-200 cursor-pointer">Для взрослых</li>
        <li class="selection_item text-sm md:text-base hover:text-[var(--p-text-color)] transition-colors duration-200 cursor-pointer">Для пенсионеров</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: "elo_scoot",
      categories: [
        { title: "Электросамокаты", icon: "gi-kick-scooter", val: "elo_scoot" },
        { title: "Электроскутеры", icon: "gi-scooter", val: "scoot" },
        {
          title: "Электровелосипеды",
          icon: "md-pedalbike-sharp",
          val: "elo_bike",
        },
        {
          title: "Робот-пылесосы",
          icon: "si-abbrobotstudio",
          val: "robot_vac",
        },
        { title: "Весы", icon: "fa-weight", val: "scales" },
      ],
    };
  },
  methods: {
    selectCategory(val) {
      this.activeCategory = val;
    },
  },
};
</script>
