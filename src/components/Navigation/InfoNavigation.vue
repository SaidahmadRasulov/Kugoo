<template>
  <div class=" md:block hidden border-b-1 border-gray-300 py-2 md:py-4">
    <div class="container mx-auto px-4">
      <div class="top_navbar flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
        <!-- Мобильная версия: скрываем текстовые ссылки, показываем только иконки -->
        <ul class="top_group flex flex-wrap items-center gap-4 md:gap-6 lg:gap-10 w-full md:w-auto">
          <!-- Текстовые ссылки - скрыты на мобильных, видны на планшете и десктопе -->
          <li class="top_item font-semibold text-base md:text-lg hidden md:block">
            <RouterLink
              to="/services"
              style="color: var(--p-text-secondary-color)"
              class="hover:text-[#5f63e0] transition-colors duration-300"
              >Сервисы</RouterLink
            >
          </li>
          <li class="top_item font-semibold text-base md:text-lg hidden lg:block">
            <RouterLink
              to="/partner"
              style="color: var(--p-text-secondary-color)"
              class="hover:text-[#5f63e0] transition-colors duration-300"
              >Сотрудничество</RouterLink
            >
          </li>
          <li class="top_item font-semibold text-base md:text-lg hidden lg:block">
            <RouterLink
              to="/caller"
              style="color: var(--p-text-secondary-color)"
              class="hover:text-[#5f63e0] transition-colors duration-300"
              >Заказать звонок</RouterLink
            >
          </li>
          <!-- Иконки социальных сетей - всегда видны -->
          <li class="top_item md:block hidden">
            <ul class="top_icons flex gap-2 md:gap-4 items-center">
              <li class="icons_item">
                <a href="tel:+79261234567" class="hover:text-[#5f63e0] transition-colors duration-300">
                  <i
                    class="pi pi-phone text-sm md:text-base"
                    style="color: var(--p-text-secondary-color)"
                  ></i>
                </a>
              </li>
              <li class="icons_item">
                <a href="https://wa.me/79261234567" target="_blank" class="hover:text-[#5f63e0] transition-colors duration-300">
                  <i
                    class="pi pi-whatsapp text-sm md:text-base"
                    style="color: var(--p-text-secondary-color)"
                  ></i>
                </a>
              </li>
              <li class="icons_item">
                <a href="https://t.me/yourtelegram" target="_blank" class="hover:text-[#5f63e0] transition-colors duration-300">
                  <i
                    class="pi pi-telegram text-sm md:text-base"
                    style="color: var(--p-text-secondary-color)"
                  ></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <!-- Контакты и переключатель темы -->
        <div class="top_contact md:flex hidden items-center gap-2 md:gap-3 w-full md:w-auto justify-end md:justify-start">
          <Button @click="toggleMode" class="p-2 md:p-3">
            <i class="pi pi-moon text-sm md:text-base"></i>
          </Button>
          <!-- Телефон - адаптивный размер -->
          <a 
            href="tel:+7 (800) 505-54-61" 
            class="hover:text-[#5f63e0] transition-colors duration-300 text-[var(--p-text-secondary-color)] font-semibold text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap"
          >
            +7 (800) 505-54-61
          </a>
          <ContactsPanel />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import ContactsPanel from "../ContactsPanel.vue";

export default {
  methods: {
    toggleMode() {
      document.body.classList.toggle("my-app-dark");
    },
    togglePanel() {
      this.$refs.op.toggle(event);
    },
  },
};
</script>
