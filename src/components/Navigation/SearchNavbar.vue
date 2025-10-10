<template>
  <div class="container mx-auto my-4">
    <div class="flex items-center gap-20">
      <RouterLink to="/" class="custom_hover">
        <h1 class="text-4xl font-bold uppercase">Kugoo</h1>
      </RouterLink>
      <div class="w-full flex gap-4 items-center">
        <div class="catalog_selection">
          <Button>
            <i class="pi pi-bars"></i>
            Каталог
          </Button>
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
          <RouterLink to="/profile" class="custom_hover">
            <i class="pi pi-percentage !text-lg"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/favorite " class="custom_hover">
            <i class="pi pi-heart !text-lg"></i>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/cart" class="flex items-center gap-2 custom_hover">
            <i class="pi pi-shopping-bag !text-lg"></i>
            <span class="text-lg font-semibold">Корзина</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Select from "primevue/select";

export default {
  components: { Select },
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
    };
  },
};
</script>

<style >

</style>
