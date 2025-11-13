<template>
  <div class="scooters py-8 ">
    <div class="container mx-auto">
      <div class="scooter_title flex items-center justify-between">
        <h1 class="uppercase text-4xl">Электросамокаты</h1>
        <div class="scooter_filter justify-end flex gap-4 items-center">
          <button
            class="border-2 px-4 py-2 rounded cursor-pointer"
            @click="filterByAudience('')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]': activeFilter === '',
              'border-transparent': activeFilter !== '',
            }"
          >
            Хиты продаж
          </button>
          <button
            class="border-2 px-4 py-2 rounded cursor-pointer"
            @click="filterByAudience('city')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]': activeFilter === 'city',
              'border-transparent': activeFilter !== 'city',
            }"
          >
            Для города
          </button>
          <button
            class="border-2 px-4 py-2 rounded cursor-pointer"
            @click="filterByAudience('adults')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]': activeFilter === 'adults',
              'border-transparent': activeFilter !== 'adults',
            }"
          >
            Для взрослых
          </button>
          <button
            class="border-2 px-4 py-2 rounded cursor-pointer"
            @click="filterByAudience('kids')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]': activeFilter === 'kids',
              'border-transparent': activeFilter !== 'kids',
            }"
          >
            Для детей
          </button>
          <button
            class="border-2 px-4 py-2 rounded cursor-pointer"
            @click="filterByAudience('seniors')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]': activeFilter === 'seniors',
              'border-transparent': activeFilter !== 'seniors',
            }"
          >
            Для пожилых
          </button>
        </div>
      </div>
      <div class="scooters_date mt-8">
        <div
          v-if="visibleScooters.length"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <article
            v-for="item in visibleScooters"
            :key="item.id"
            class="rounded-xl bg-[var(--p-surface-overlay)] shadow-md flex flex-col justify-between"
          >
            <header class="mb-4">
              <img src="../assets/scooter.jpg" class="rounded-t-2xl" alt="">
              <p class="p-2 text-xs uppercase tracking-wide text-[var(--p-text-secondary-color)]">
                {{ item.category }}
              </p>
              <h2 class="p-2 mt-2 text-lg font-semibold text-[var(--p-text-color)]">
                {{ item.title }}
              </h2>
            </header>
            <p class="p-2 text-sm text-[var(--p-text-secondary-color)] line-clamp-3">
              {{ item.description }}
            </p>
            <footer class="p-2 mt-6 flex items-center justify-between">
              <span class="text-xl font-semibold text-[var(--p-primary-color)]">
                {{ item.price.toLocaleString("ru-RU") }} ₽
              </span>
              <span class="text-xs text-[var(--p-text-secondary-color)]">
                В наличии: {{ item.stock }}
              </span>
            </footer>
          </article>
        </div>
        <div v-else class="py-12 text-center text-[var(--p-text-secondary-color)]">
          Товары не найдены.
        </div>
        <div v-if="canLoadMore" class="mt-10 flex justify-center">
          <button
            type="button"
            class="cursor-pointer px-6 py-3 rounded-lg border border-[var(--p-primary-color)] text-[var(--p-primary-color)] font-medium hover:bg-[var(--p-primary-color)] hover:text-[var(--p-primary-contrast-color)] transition-colors duration-300"
            @click="loadMore"
          >
            Просмотреть ещё
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useScooterStore } from "../store/scooterStore";

export default {
  name: "Scooters",
  data() {
    return {
      store: useScooterStore(),
      initialVisibleCount: 8,
      visibleCount: 8,
      activeFilter: "",
    };
  },
  computed: {
    filteredScooters() {
      if (!this.activeFilter) {
        return this.store.topSellers;
      }
      return this.store.filteredByType(this.activeFilter);
    },
    visibleScooters() {
      if (!this.filteredScooters.length) {
        return [];
      }

      const limit = Math.min(this.visibleCount, this.filteredScooters.length);
      return this.filteredScooters.slice(0, limit);
    },
    canLoadMore() {
      return this.visibleCount < this.filteredScooters.length;
    },
  },
  watch: {
    activeFilter: {
      immediate: true,
      handler() {
        this.resetVisibleCount();
      },
    },
    filteredScooters() {
      this.resetVisibleCount();
    },
  },
  methods: {
    loadMore() {
      if (!this.canLoadMore) {
        return;
      }
      const nextCount = this.visibleCount + this.initialVisibleCount;
      this.visibleCount = Math.min(nextCount, this.filteredScooters.length);
    },
    resetVisibleCount() {
      this.visibleCount = Math.min(
        this.initialVisibleCount,
        this.filteredScooters.length || this.initialVisibleCount
      );
    },
    filterByAudience(filter) {
      this.activeFilter = this.activeFilter === filter ? "" : filter;
      this.resetVisibleCount();
    },
  },
};
</script>

<style scoped></style>
