<template>
  <div class="container mx-auto py-2 md:my-4 px-4">
    <!-- Мобильная версия: вертикальная раскладка -->
    <div class="flex flex-col md:hidden gap-3">
      <div class="flex items-center justify-around">
        <RouterLink to="/">
          <h1
            class="text-2xl font-bold hover:text-[#5f63e0] transition-colors duration-300 uppercase text-[var(--p-text-color)]"
          >
            Kugoo
          </h1>
        </RouterLink>
        <ul class="md:flex hidden gap-3 items-center">
          <li>
            <RouterLink
              to="/profile"
              class="hover:text-[#5f63e0] transition-colors duration-300"
            >
              <i
                class="pi pi-percentage text-[var(--p-text-color)] text-base"
              ></i>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/favorite"
              class="hover:text-[#5f63e0] transition-colors duration-300"
            >
              <i class="pi pi-heart text-base text-[var(--p-text-color)]"></i>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/cart"
              class="hover:text-[#5f63e0] transition-colors duration-300"
            >
              <i
                class="pi pi-shopping-bag text-base text-[var(--p-text-color)]"
              ></i>
            </RouterLink>
          </li>
        </ul>
        <div class="mobile_menu flex items-center justify-center gap-4">
          <Button @click="toggleMode" class="p-2 md:p-3" aria-label="Переключить тему">
            <i class="pi pi-moon text-sm md:text-base"></i>
          </Button>
          <RouterLink to="/caller" class="">
            <i
              class="pi pi-phone text-base text-[var(--p-primary-hover-color)]"
            ></i>
          </RouterLink>
          <div class="relative">
            <Button
              @click="toggleMobileMenu"
              class="ml-2 p-2 w-10 flex items-center justify-center"
              :aria-expanded="isMobileMenuOpen"
              aria-controls="mobile-navigation-menu"
            >
              <i class="pi pi-bars text-base"></i>
            </Button>
            <!-- Меню-панель -->
            <div
              v-if="isMobileMenuOpen"
              id="mobile-navigation-menu"
              class="absolute top-full h-[92vh] -right-7.5 w-screen mx-auto z-50 bg-[var(--p-surface-overlay)] rounded-b-xl"
              @click.self="closeMobileMenu"
            >
              <div class="flex items-center justify-center">
                <ul
                  class="flex text-[var(--p-text-color)] flex-col gap-4 w-full"
                >
                  <li class="w-full">
                    <RouterLink
                      to="/about"
                      class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                      @click="closeMobileMenu"
                    >
                      О магазине
                    </RouterLink>
                  </li>
                  <li class="w-full">
                    <RouterLink
                      to="/payment"
                      class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                      @click="closeMobileMenu"
                    >
                      Доставка и оплата
                    </RouterLink>
                  </li>
                  <li class="w-full">
                    <RouterLink
                      to="/testing"
                      class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                      @click="closeMobileMenu"
                    >
                      Тест-драйв
                    </RouterLink>
                  </li>
                  <li class="w-full">
                    <RouterLink
                      to="/blog"
                      class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                      @click="closeMobileMenu"
                    >
                      Блог
                    </RouterLink>
                  </li>
                  <li class="w-full">
                    <RouterLink
                      to="/contacts"
                      class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                      @click="closeMobileMenu"
                    >
                      Контакты
                    </RouterLink>
                  </li>
                  <li class="w-full">
                    <RouterLink
                      to="/discounts"
                      class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full gap-2"
                      @click="closeMobileMenu"
                    >
                      Акции <i class="pi pi-percentage"></i>
                    </RouterLink>
                  </li>
                </ul>
              </div>
              <div class="menu_subitems flex gap-10 justify-center items-center">
                <RouterLink
                  to="/service"
                  class="text-[var(--p-text-color)] px-2 text-sm hover:bg-[var(--p-surface-section)] transition rounded"
                >
                  Сервис
                </RouterLink>
                <RouterLink
                  to="/partner"
                  class="text-[var(--p-text-color)] text-center text-sm hover:bg-[var(--p-surface-section)] transition rounded"
                >
                  Сотрудничество
                </RouterLink>
                <a
                  href="tel:+7XXXXXXXXXX"
                  class="text-[var(--p-text-color)] text-sm hover:bg-[var(--p-surface-section)] transition rounded cursor-pointer"
                >
                  Заказать звонок
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="catalog_selection relative md:block hidden">
          <Button
            @click="toggleCatalogVisibility"
            class="relative w-full"
            :aria-expanded="isCatalogVisible"
            aria-controls="mobile-catalog-menu"
          >
            <i class="pi pi-bars"></i>
            Каталог
          </Button>
          <div class="absolute left-0 top-full mt-2 z-50" id="mobile-catalog-menu">
            <CatalogMenu
              v-if="isCatalogVisible"
              @select-category="onCategorySelect"
              @select-filter="onFilterSelect"
            />
          </div>
        </div>
        <InputGroup class="w-full">
          <InputText
            class="!w-full"
            v-model="searchQuery"
            placeholder="Искать самокат KUGO"
            @keyup.enter="executeSearch('manual')"
          />
          <Button @click="executeSearch('manual')" aria-label="Выполнить поиск">
            <i class="pi pi-search"></i>
          </Button>
        </InputGroup>
      </div>
    </div>
    <!-- Планшетная и десктопная версия: оригинальная структура -->
    <div class="hidden md:flex items-center gap-4 lg:gap-20">
      <RouterLink to="/">
        <h1
          class="text-3xl lg:text-4xl font-bold hover:text-[#5f63e0] transition-colors duration-300 uppercase text-[var(--p-text-color)]"
        >
          Kugoo
        </h1>
      </RouterLink>
      <div class="w-full flex gap-4 items-center">
        <div class="catalog_selection relative">
          <Button
            @click="toggleCatalogVisibility"
            class="relative"
            :aria-expanded="isCatalogVisible"
            aria-controls="desktop-catalog-menu"
          >
            <i class="pi pi-bars"></i>
            Каталог
          </Button>
          <div class="absolute left-0 top-full mt-2 z-50" id="desktop-catalog-menu">
            <CatalogMenu
              v-if="isCatalogVisible"
              @select-category="onCategorySelect"
              @select-filter="onFilterSelect"
            />
          </div>
        </div>
        <InputGroup>
          <Select
            v-model="selectedPlace"
            :options="places"
            optionLabel="name"
            placeholder="Везде"
            class="!w-1/6"
            @change="executeSearch('place')"
          />
          <InputText
            class="!w-full"
            v-model="searchQuery"
            placeholder="Искать самокат KUGO"
            @keyup.enter="executeSearch('manual')"
          />
          <Button @click="executeSearch('manual')" aria-label="Выполнить поиск">
            <i class="pi pi-search"></i>
          </Button>
        </InputGroup>
      </div>
      <ul class="search_icons flex gap-4 lg:gap-6">
        <li>
          <RouterLink
            to="/profile"
            class="hover:text-[#5f63e0] transition-colors duration-300"
          >
            <i class="pi pi-percentage text-[var(--p-text-color)] !text-lg"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/favorite"
            class="hover:text-[#5f63e0] transition-colors duration-300"
          >
            <i class="pi pi-heart !text-lg text-[var(--p-text-color)]"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/cart"
            class="hover:text-[#5f63e0] transition-colors duration-300"
          >
            <span
              class="flex items-center gap-2 !text-lg font-semibold text-[var(--p-text-color)]"
            >
              <i class="pi pi-shopping-bag"></i>
              Корзина
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapStores } from "pinia";
import Select from "primevue/select";
import CatalogMenu from "./CatalogMenu.vue";
import { useScooterStore } from "../../store/scooterStore";

const PLACES = Object.freeze([
  { name: "Amazon", code: "AZ" },
  { name: "Google", code: "GG" },
  { name: "Yandex", code: "YX" },
  { name: "Mozilla", code: "MZ" },
  { name: "Opera", code: "OP" },
]);

export default {
  name: "SearchNavbar",
  components: {
    RouterLink,
    Select,
    CatalogMenu,
  },
  data() {
    return {
      searchQuery: "",
      selectedPlace: null,
      places: PLACES,
      isCatalogVisible: false,
      isMobileMenuOpen: false,
      selectedCategory: null,
      selectedFilters: {},
    };
  },
  computed: {
    ...mapStores(useScooterStore),
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.closeMobileMenu();
        this.applyRouteQuery(to?.query || {});
      },
    },
  },
  methods: {
    toggleCatalogVisibility() {
      this.isCatalogVisible = !this.isCatalogVisible;
    },
    closeCatalog() {
      this.isCatalogVisible = false;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    onCategorySelect({ category }) {
      if (!category) {
        return;
      }
      this.selectedCategory = category;
      this.closeCatalog();
      this.closeMobileMenu();
      this.executeSearch("category");
    },
    onFilterSelect({ group, selectedValues }) {
      if (!group) {
        return;
      }
      this.selectedFilters = {
        ...this.selectedFilters,
        [group.value]: selectedValues,
      };
      this.executeSearch("filter");
    },
    executeSearch(trigger) {
      const query = this.buildSearchQuery();
      const storePayload = this.buildStorePayload();
      this.scooterStore.setQuery(storePayload);

      if (!Object.keys(query).length && trigger !== "manual") {
        return;
      }
      this.$router
        .push({ path: "/catalog", query })
        .catch((error) => {
          if (error?.name !== "NavigationDuplicated") {
            throw error;
          }
          if (trigger === "manual") {
            this.searchQuery = "";
          }
        })
        .then(() => {
          if (trigger === "manual") {
            this.searchQuery = "";
          }
        });
    },
    buildSearchQuery() {
      const query = {};

      if (this.searchQuery.trim()) {
        query.q = this.searchQuery.trim();
      }

      if (this.selectedCategory?.value) {
        query.category = this.selectedCategory.value;
      }

      Object.entries(this.selectedFilters).forEach(([group, values]) => {
        if (Array.isArray(values) && values.length) {
          query[group] = values.join(",");
        }
      });

      if (this.selectedPlace?.code) {
        query.place = this.selectedPlace.code;
      }

      return query;
    },
    buildStorePayload() {
      return {
        category: this.selectedCategory?.value ?? null,
        filters: this.selectedFilters,
        search: this.searchQuery.trim(),
        place: this.selectedPlace?.code ?? null,
      };
    },
    applyRouteQuery(query) {
      const {
        q = "",
        category = null,
        place = null,
        ...restFilters
      } = query;

      this.searchQuery = typeof q === "string" ? q : "";

      this.selectedCategory = category
        ? { value: Array.isArray(category) ? category[0] : category }
        : null;

      const placeCode = Array.isArray(place) ? place[0] : place;
      this.selectedPlace = placeCode
        ? this.places.find((item) => item.code === placeCode) || {
            name: placeCode,
            code: placeCode,
          }
        : null;

      const parsedFilters = {};
      Object.entries(restFilters).forEach(([group, value]) => {
        if (!value) {
          return;
        }
        const valuesArray = Array.isArray(value)
          ? value
          : String(value)
              .split(",")
              .map((item) => item.trim())
              .filter(Boolean);
        if (valuesArray.length) {
          parsedFilters[group] = valuesArray;
        }
      });

      this.selectedFilters = parsedFilters;

      this.scooterStore.setQuery({
        category: this.selectedCategory?.value ?? null,
        filters: parsedFilters,
        search: this.searchQuery.trim(),
        place: this.selectedPlace?.code ?? null,
      });
    },
    toggleMode() {
      document.body.classList.toggle("my-app-dark");
    },
  },
};
</script>
