<template>
  <div class="scooters py-8 bg-[var(--p-surface-ground)]">
    <div class="container mx-auto">
      <div
        class="scooter_title flex sm:flex-row flex-col items-center justify-between"
      >
        <h1
          class="uppercase text-2xl lg:text-4xl mb-4 text-[var(--p-text-color)]"
        >
          Электросамокаты
        </h1>
        <div
          class="scooter_filter sm:justify-end sm:text-lg text-sm text-[var(--p-text-color)] flex flex-wrap md:flex-nowrap gap-2 items-center px-4 justify-between"
        >
          <button
            class="w-[10rem] border-2 px-2 py-2 rounded cursor-pointer"
            @click="filterByAudience('')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]':
                activeFilter === '',
              'border-gray-500 text-[var(--p-text-secondary-color)]':
                activeFilter !== '',
            }"
          >
            Хиты продаж
          </button>
          <button
            class="w-[10rem] border-2 px-4 py-2 rounded cursor-pointer"
            @click="filterByAudience('city')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]':
                activeFilter === 'city',
              'border-gray-500 text-[var(--p-text-secondary-color)]':
                activeFilter !== 'city',
            }"
          >
            Для города
          </button>
          <button
            class="w-[10rem] border-2 px-4 py-2 rounded cursor-pointer"
            @click="filterByAudience('adults')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]':
                activeFilter === 'adults',
              'border-gray-500 text-[var(--p-text-secondary-color)]':
                activeFilter !== 'adults',
            }"
          >
            Для взрослых
          </button>
          <button
            class="w-[10rem] border-2 px-4 py-2 rounded cursor-pointer"
            @click="filterByAudience('kids')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]':
                activeFilter === 'kids',
              'border-gray-500  text-[var(--p-text-secondary-color)]':
                activeFilter !== 'kids',
            }"
          >
            Для детей
          </button>
          <button
            class="w-[10rem] border-2 p-2 rounded cursor-pointer"
            @click="filterByAudience('seniors')"
            :class="{
              'active border-[var(--p-primary-color)] text-[var(--p-primary-color)]':
                activeFilter === 'seniors',
              'border-gray-500  text-[var(--p-text-secondary-color)]':
                activeFilter !== 'seniors',
            }"
          >
            Для пожилых
          </button>
        </div>
      </div>
      <div class="scooters_date mt-8 p-2">
        <div
          v-if="visibleScooters.length"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10"
        >
          <article
            v-for="item in visibleScooters"
            :key="item.id"
            class="rounded-xl sm:w-10/12 bg-[var(--p-surface-overlay)] shadow-md flex flex-col justify-between"
          >
            <header class="mb-4">
              <div class="header_content relative">
                <img
                  src="../assets/scooter.jpg"
                  class="z-0 rounded-t-xl"
                  alt=""
                />
                <p
                  class="absolute rounded-md bottom-0 z-50 top-0 m-2 bg-[var(--p-primary-color)]/80 p-1 h-fit uppercase text-white"
                  :class="{
                    'bg-green-400': item.badge.length > 3,
                    'bg-red-400': item.badge.length <= 3,
                    'bg-purple-400': item.badge === 'Новинка',
                  }"
                >
                  {{ item.badge }}
                </p>
              </div>
              <h2
                class="p-2 mt-2 text-lg font-semibold text-[var(--p-text-color)]"
              >
                {{ item.title }}
              </h2>
            </header>
            <ul class="item_static_group flex flex-wrap gap-4 px-4">
              <li
                class="static_item flex items-center gap-2 text-[var(--p-text-secondary-color)]"
              >
                <i class="pi pi-wrench"></i>
                <span>{{ item.battery }}</span>
              </li>
              <li
                class="static_item flex items-center gap-2 text-[var(--p-text-secondary-color)]"
              >
                <i class="pi pi-bolt"></i>
                <span>{{ item.power }}</span>
              </li>
              <li
                class="static_item flex items-center gap-2 text-[var(--p-text-secondary-color)]"
              >
                <i class="pi pi-gauge"></i>
                <span>{{ item.speed }}</span>
              </li>
            </ul>
            <footer class="p-2 mt-6 flex items-center justify-between">
              <span
                class="text-2xl font-semibold text-[var(--p-primary-color)]"
              >
                {{ item.price.toLocaleString("ru-RU") }} ₽
              </span>
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  class="group w-15 h-15 flex items-center justify-center rounded-full border-2 border-[var(--p-primary-color)] text-white hover:bg-[var(--p-primary-color)]/80 transition cursor-pointer"
                  title="Добавить в корзину"
                >
                  <i
                    class="pi pi-shopping-cart !text-2xl text-[var(--p-primary-color)] group-hover:!text-white transition-colors"
                  ></i>
                </button>
                <button
                  type="button"
                  class="group w-15 h-15 flex items-center justify-center rounded-full border-2 border-[var(--p-primary-color)] text-[var(--p-primary-color)] hover:text-white hover:bg-[var(--p-primary-color)]/80 transition cursor-pointer"
                  title="Добавить в избранное"
                >
                  <i
                    class="pi pi-heart !text-2xl text-[var(--p-primary-color)] group-hover:!text-white transition-colors"
                  ></i>
                </button>
              </div>
            </footer>
            <div class="buy_button text-center my-2">
              <button
                type="button"
                class="cursor-pointer px-6 py-3 rounded-lg border border-[var(--p-primary-color)] bg-[var(--p-primary-color)] text-white font-medium hover:bg-[var(--p-primary-color)]/80 hover:text-[var(--p-primary-contrast-color)] transition-colors duration-300"
                @click="buyScooter(item)"
              >
                Купить в 1 клик
              </button>
            </div>
          </article>
        </div>
        <div
          v-else
          class="py-12 text-center text-[var(--p-text-secondary-color)]"
        >
          Товары не найдены.
        </div>
        <div v-if="canLoadMore" class="mt-10 flex justify-center">
          <button
            type="button"
            class="cursor-pointer px-6 py-3 rounded-lg border border-[var(--p-primary-color)] text-[var(--p-primary-color)] font-medium hover:bg-[var(--p-primary-color)] hover:text-[var(--p-primary-contrast-color)] transition-colors duration-300"
            @click="loadMore"
          >
            Смотреть ещё
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
    buyScooter(item) {
      this.$router.push(`/scooter/${item.id}`);
    },
  },
};
</script>

<style scoped></style>
