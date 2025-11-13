<template>
  <div
    class="w-[90vw] sm:w-[400px] md:w-[600px] lg:w-[700px] flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 rounded-2xl bg-[var(--p-surface-overlay)] md:min-h-[200px] p-3 md:p-4 shadow-md z-50"
  >
    <!-- Категории - на мобильных полная ширина, на планшетах фиксированная -->
    <div
      class="catalog_selection rounded-xl bg-[var(--p-surface-ground)] w-full md:w-2/5 lg:w-3/7 py-3 md:py-4 px-2 md:px-3"
    >
      <button
        v-for="category in categories"
        :key="category.value"
        type="button"
        @click="handleCategoryClick(category)"
        class="catalog_item flex mb-2 gap-2 items-center cursor-pointer rounded-lg px-2 md:px-3 py-2 md:py-1.5 transition-all duration-200 hover:bg-[var(--p-surface-section)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--p-primary-color)]"
        :class="{
          'text-[var(--p-primary-color)] bg-[var(--p-surface-section)]': activeCategory === category.value,
        }"
      >
        <v-icon
          :name="category.icon"
          :scale="1.3"
          class="text-base md:text-lg"
          :fill="
            activeCategory === category.value
              ? 'var(--p-primary-color)'
              : 'var(--p-text-color)'
          "
        />
        <span
          :class="{
            'text-[var(--p-primary-color)]': activeCategory === category.value,
            'text-[var(--p-text-color)]': activeCategory !== category.value,
          }"
          class="text-sm md:text-base text-center font-medium"
        >
          {{ category.title }}
        </span>
      </button>
    </div>
    
    <!-- Фильтры - на мобильных в колонку, на планшетах и десктопе в ряд -->
    <div class="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 w-full md:w-auto">
      <div
        v-for="group in filterGroups"
        :key="group.value"
        class="selection_title text-[var(--p-text-secondary-color)] pt-0 md:pt-6 flex flex-col gap-2"
      >
        <p
          class="selection_item text-[var(--p-text-color)] selection_head text-base md:text-lg font-semibold"
        >
          {{ group.title }}
        </p>
        <button
          v-for="option in group.options"
          :key="option.value"
          type="button"
          class="selection_item text-sm md:text-base hover:text-[var(--p-text-color)] transition-colors duration-200 cursor-pointer text-left rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--p-primary-color)]"
          :class="{
            'text-[var(--p-primary-color)]': isFilterSelected(group.value, option.value),
            'text-[var(--p-text-color)]': !isFilterSelected(group.value, option.value),
          }"
          @click="handleFilterClick(group, option)"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const CATEGORIES = Object.freeze([
  { title: "Электросамокаты", icon: "gi-kick-scooter", value: "elo_scoot" },
  { title: "Электроскутеры", icon: "gi-scooter", value: "scoot" },
  { title: "Электровелосипеды", icon: "md-pedalbike-sharp", value: "elo_bike" },
  { title: "Робот-пылесосы", icon: "si-abbrobotstudio", value: "robot_vac" },
  { title: "Весы", icon: "fa-weight", value: "scales" },
]);

const FILTER_GROUPS = Object.freeze([
  {
    title: "Особенности",
    value: "features",
    options: [
      { label: "Внедорожный", value: "offroad" },
      { label: "Городской", value: "city" },
      { label: "Зимний", value: "winter" },
      { label: "С сиденьем", value: "with-seat" },
      { label: "Без сиденья", value: "without-seat" },
    ],
  },
  {
    title: "Для кого",
    value: "audience",
    options: [
      { label: "Для детей и подростков", value: "kids" },
      { label: "Для взрослых", value: "adults" },
      { label: "Для пенсионеров", value: "seniors" },
    ],
  },
]);

export default {
  name: "CatalogMenu",
  emits: ["select-category", "select-filter"],
  data() {
    return {
      activeCategory: CATEGORIES[0]?.value ?? null,
      selectedFilters: {},
    };
  },
  computed: {
    categories() {
      return CATEGORIES;
    },
    filterGroups() {
      return FILTER_GROUPS;
    },
  },
  methods: {
    handleCategoryClick(category) {
      if (this.activeCategory === category.value) {
        this.$emit("select-category", { category, isRepeat: true });
        return;
      }
      this.activeCategory = category.value;
      this.$emit("select-category", { category, isRepeat: false });
    },
    handleFilterClick(group, option) {
      const groupKey = group.value;
      const currentValues = this.selectedFilters[groupKey] || [];
      const exists = currentValues.includes(option.value);
      const nextValues = exists
        ? currentValues.filter((value) => value !== option.value)
        : [...currentValues, option.value];

      this.selectedFilters = {
        ...this.selectedFilters,
        [groupKey]: nextValues,
      };

      this.$emit("select-filter", {
        group,
        option,
        selectedValues: nextValues,
      });
    },
    isFilterSelected(groupValue, optionValue) {
      const groupFilters = this.selectedFilters[groupValue];
      return Boolean(groupFilters && groupFilters.includes(optionValue));
    },
  },
};
</script>
