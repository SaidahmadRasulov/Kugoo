<template>
  <div
    class="md:w-[700px] flex gap-10 rounded-2xl bg-[var(--p-surface-overlay)] md:min-h-[200px] p-2 shadow-md"
  >
    <div
      class="catalog_selection rounded-xl bg-[var(--p-surface-ground)] w-3/7 py-4 px-2"
    >
      <div
        v-for="(category, index) in categories"
        :key="index"
        @click="selectCategory(category.val)"
        class="catalog_item group-hover flex mb-2 gap-2 items-center cursor-pointer rounded-lg px-2 py-1 transition-all duration-200"
        :class="{
          'text-[var(--p-primary-color)]': activeCategory === category.val,
        }"
      >
        <v-icon
          :name="category.icon"
          scale="1.3"
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
          class="text-[1rem] text-center font-medium"
        >
          {{ category.title }}
        </span>
      </div>
    </div>
    <ul
      class="selection_title text-[var(--p-text-secondary-color)] pt-6 flex flex-col gap-2"
    >
      <li
        class="selection_item text-[var(--p-text-color)] selection_head text-lg font-semibold"
      >
        Особенности
      </li>
      <li class="selection_item">Внедорожный</li>
      <li class="selection_item">Городской</li>
      <li class="selection_item">Зимний</li>
      <li class="selection_item">С сиденьем</li>
      <li class="selection_item">Без сиденья</li>
    </ul>
    <ul
      class="selection_title text-[var(--p-text-secondary-color)] pt-6 flex flex-col gap-2"
    >
      <li
        class="selection_item selection_head text-[var(--p-text-color)] text-lg font-semibold"
      >
        Для кого
      </li>
      <li class="selection_item">Для детей и подростков</li>
      <li class="selection_item">Для взрослых</li>
      <li class="selection_item">Для пенсионеров</li>
    </ul>
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

<style scoped></style>
