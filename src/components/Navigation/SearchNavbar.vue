<template>
  <div class="container mx-auto my-4 py-1">
    <div class="flex items-center gap-20">
      <RouterLink to="/">
        <h1
          class="text-4xl font-bold custom_hover uppercase text-[var(--p-text-color)]"
        >
          Kugoo
        </h1>
      </RouterLink>
      <div class="w-full flex gap-4 items-center">
        <div class="catalog_selection">
          <Button @click="toggleVisible" class="relative">
            <i class="pi pi-bars"></i>
            Каталог
          </Button>
          <div class="absolute">
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
      <ul class="search_icons flex gap-6">
        <li>
          <RouterLink to="/profile">
            <i
              class="pi pi-percentage custom_hover text-[var(--p-text-color)] !text-lg"
            ></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/favorite">
            <i
              class="pi pi-heart !text-lg custom_hover text-[var(--p-text-color)]"
            ></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/cart"
            class=""
          >
            <span
              class="flex items-center group-hover:custom_hover gap-2 text-lg font-semibold custom_hover text-[var(--p-text-color)]"
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
    };
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style></style>
