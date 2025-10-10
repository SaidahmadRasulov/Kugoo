<template>
  <div class="border-b-1 border-gray-300 py-4 bg-white">
    <div class="container mx-auto">
      <div class="top_navbar flex items-center justify-between">
        <ul class="top_group flex items-center gap-10">
          <li class="top_item font-semibold text-lg !custom_hover">
            <RouterLink
              to="/services"
              style="color: var(--p-text-secondary-color)"
              class="custom_hover"
              >Сервисы</RouterLink
            >
          </li>
          <li class="top_item font-semibold text-lg">
            <RouterLink
              to="/partner"
              style="color: var(--p-text-secondary-color)"
              class="custom_hover"
              >Сотрудничество</RouterLink
            >
          </li>
          <li class="top_item font-semibold text-lg">
            <RouterLink
              to="/caller"
              style="color: var(--p-text-secondary-color)"
              class="custom_hover"
              >Заказать звонок</RouterLink
            >
          </li>
          <li class="top_item">
            <ul class="top_icons flex gap-4 items-center">
              <li class="icons_item">
                <a href="tel:+79261234567">
                  <i
                    class="custom_hover pi pi-phone !text-sm"
                    style="color: var(--p-text-secondary-color)"
                  ></i>
                </a>
              </li>
              <li class="icons_item">
                <a href="https://wa.me/79261234567" target="_blank">
                  <i
                    class="custom_hover pi pi-whatsapp !text-sm"
                    style="color: var(--p-text-secondary-color)"
                  ></i>
                </a>
              </li>
              <li class="icons_item">
                <a href="https://t.me/yourtelegram" target="_blank">
                  <i
                    class="custom_hover pi pi-telegram !text-sm"
                    style="color: var(--p-text-secondary-color)"
                  ></i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="top_contact flex items-center gap-2">
          <a href="tel:+7 (800) 505-54-61" class="custom_hover">+7 (800) 505-54-61 </a>
          <ContactsPanel />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import ContactsPanel from "../ContactsPanel.vue";

export default {};
</script>
<style scoped>
.custom_hover:hover {
  color: #5f63e0 !important;
  transition: 0.3s ease-in-out !important;
}
</style>
