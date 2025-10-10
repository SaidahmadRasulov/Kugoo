<template>
  <div class="card flex items-center justify-center  relative">
    <!-- Button that opens OverlayPanel -->
    <i
      @click="togglePanel"
      aria-haspopup="true"
      aria-controls="overlay_panel"
      class="custom_hover pi pi-plus-circle cursor-pointer"
      style="color: var(--p-text-secondary-color)"
    ></i>

    <!-- OverlayPanel -->
    <OverlayPanel ref="op" id="overlay_panel">
      <div class="w-[300px]">
        <div
          v-for="(item, index) in contacts"
          :key="index"
          class="pb-2 mb-2"
          :class="{ 'border-b': index !== contacts.length - 1 }"
        >
          <div class="font-semibold text-sm text-gray-600 dark:text-gray-300">
            {{ item.title }}
          </div>
          <div class="text-lg font-bold text-gray-900 dark:text-white">
            {{ item.phone }}
          </div>
          <div
            v-if="item.schedule"
            class="text-xs text-gray-500 dark:text-gray-400"
          >
            {{ item.schedule }}
          </div>
        </div>
      </div>
    </OverlayPanel>
  </div>
</template>

<script>
import OverlayPanel from "primevue/overlaypanel";
import Button from "primevue/button";

export default {
  name: "ContactsOverlay",
  components: { OverlayPanel, Button },

  data() {
    return {
      contacts: [
        {
          title: "Сервисный центр",
          phone: "+7 (499) 350 76 92",
        },
        {
          title: "Оптовый отдел",
          phone: "+7 (499) 281-64-52",
          schedule: "пн–сб 10:00–19:00",
        },
        {
          title: "Отдел рекламаций и претензий",
          phone: "+7 (499) 350-76-92",
          schedule: "ср–вс 10:00–19:00",
        },
      ],
    };
  },

  methods: {
    togglePanel(event) {
      this.$refs.op.toggle(event);
    },
  },
};
</script>

<style scoped>
:deep(.p-overlaypanel) {
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
</style>
