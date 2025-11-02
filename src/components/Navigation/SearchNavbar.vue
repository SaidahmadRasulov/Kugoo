<template>
  <div class="container mx-auto py-2 md:my-4 px-4">
    <!-- Мобильная версия: вертикальная раскладка -->
    <div class="flex flex-col md:hidden gap-3">
      <div class="flex items-center justify-between">
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
          <Button @click="toggleMode" class="p-2 md:p-3">
            <i class="pi pi-moon text-sm md:text-base"></i>
          </Button>
          <RouterLink to="/caller" class="">
            <i class="pi pi-phone text-base text-[var(--p-primary-hover-color)]"></i>
          </RouterLink>
          <div class="relative">
            <Button
              @click="showMenu = !showMenu"
              class="ml-2 p-2 w-10 flex items-center justify-center"
            >
              <i class="pi pi-bars text-base"></i>
            </Button>
            <!-- Меню-панель -->
            <div
              v-if="showMenu"
              class="absolute flex items-center justify-center top-full h-[70vh] -right-4 w-screen z-50 bg-[var(--p-surface-overlay)] rounded-b-xl"
              @click.self="showMenu = false"
            >
              <ul class="flex text-[var(--p-text-color)] flex-col gap-4 w-full">
                <li class="w-full">
                  <RouterLink
                    to="/about"
                    class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                    @click="showMenu = false"
                  >
                    О магазине
                  </RouterLink>
                </li>
                <li class="w-full">
                  <RouterLink
                    to="/payment"
                    class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                    @click="showMenu = false"
                  >
                    Доставка и оплата
                  </RouterLink>
                </li>
                <li class="w-full">
                  <RouterLink
                    to="/testing"
                    class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                    @click="showMenu = false"
                  >
                    Тест-драйв
                  </RouterLink>
                </li>
                <li class="w-full">
                  <RouterLink
                    to="/blog"
                    class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                    @click="showMenu = false"
                  >
                    Блог
                  </RouterLink>
                </li>
                <li class="w-full">
                  <RouterLink
                    to="/contacts"
                    class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full border-b border-b-[var(--p-surface-ground)]"
                    @click="showMenu = false"
                  >
                    Контакты
                  </RouterLink>
                </li>
                <li class="w-full">
                  <RouterLink
                    to="/discounts"
                    class="flex justify-center items-center py-4 transition hover:bg-[var(--p-surface-section)] text-center w-full gap-2"
                    @click="showMenu = false"
                  >
                    Акции <i class="pi pi-percentage"></i>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3">
        <div class="catalog_selection relative md:block hidden">
          <Button @click="toggleVisible" class="relative w-full">
            <i class="pi pi-bars"></i>
            Каталог
          </Button>
          <div class="absolute left-0 top-full mt-2 z-50">
            <CatalogMenu v-if="visible" />
          </div>
        </div>
        <InputGroup class="w-full">
          <InputText
            class="!w-full"
            v-model="text1"
            placeholder="Искать самокат KUGO"
          />
          <Button>
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
          <Button @click="toggleVisible" class="relative">
            <i class="pi pi-bars"></i>
            Каталог
          </Button>
          <div class="absolute left-0 top-full mt-2 z-50">
            <CatalogMenu v-if="visible" />
          </div>
        </div>
        <InputGroup>
          <Select
            v-model="selectedCity"
            :options="places"
            optionLabel="name"
            placeholder="Везде"
            class="!w-1/6"
          />
          <InputText
            class="!w-full"
            v-model="text1"
            placeholder="Искать самокат KUGO"
          />
          <Button>
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
import Select from "primevue/select";
import CatalogMenu from "./CatalogMenu.vue";
export default {
  components: { Select, CatalogMenu },
  data() {
    return {
      text1: "",
      selectedPlace: null,
      places: [
        { name: "Amazon", code: "AZ" },
        { name: "Google", code: "GG" },
        { name: "Yandex", code: "YX" },
        { name: "Mozilla", code: "MZ" },
        { name: "Opera", code: "OP" },
      ],
      visible: false,
      showMenu: false,
    };
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
    toggleMode() {
      document.body.classList.toggle("my-app-dark");
    },
  },
};
</script>
