<template>
  <div class="bg-[var(--p-surface-ground)] md:block hidden py-3 md:py-4 overflow-x-auto">
    <div class="container mx-auto text-[var(--p-text-color)] px-4">
      <!-- На мобильных: горизонтальный скролл, на планшетах и десктопе: обычный flex -->
      <ul class="flex gap-4 md:gap-8 lg:gap-16 items-center min-w-max md:min-w-0">
        <li class="hover:text-[#5f63e0] transition-colors duration-300 whitespace-nowrap">
          <RouterLink to="/about" class="text-sm md:text-base lg:text-lg">О магазине</RouterLink>
        </li>
        <li class="flex items-center gap-1 md:gap-2 whitespace-nowrap">
          <RouterLink to="/payment" class="text-sm md:text-base lg:text-lg hover:text-[#5f63e0] transition-colors duration-300">
            Доставка и оплата
          </RouterLink>
          <span
            class="text-[10px] md:text-[12px] ml-1 md:ml-2 rounded-full text-white p-1 md:p-1.5 !bg-[var(--p-info-color)] hidden sm:inline-flex items-center"
            >Доступна рассрочка</span
          >
          <!-- На мобильных показываем только иконку -->
          <span
            class="rounded-full flex items-center justify-center text-white w-4 h-4 md:w-5 md:h-5 !bg-[var(--p-info-color)] sm:hidden"
            ><i class="text-[8px] md:text-[10px] pi pi-info"></i
          ></span>
        </li>
        <li class="hover:text-[#5f63e0] transition-colors duration-300 whitespace-nowrap">
          <RouterLink to="/testing" class="text-sm md:text-base lg:text-lg">Тест-драйв</RouterLink>
        </li>
        <li class="hover:text-[#5f63e0] transition-colors duration-300 whitespace-nowrap">
          <RouterLink to="/blog" class="text-sm md:text-base lg:text-lg">Блог</RouterLink>
        </li>
        <li class="hover:text-[#5f63e0] transition-colors duration-300 whitespace-nowrap">
          <RouterLink to="/contacts" class="text-sm md:text-base lg:text-lg">Контакты</RouterLink>
        </li>
        <li class="hover:text-[#5f63e0] transition-colors duration-300 flex items-center gap-1 md:gap-2 text-sm md:text-base lg:text-lg cursor-pointer whitespace-nowrap">
          <RouterLink to="/discounts">Акции</RouterLink>
          <span
            class="rounded-full flex items-center justify-center text-white w-4 h-4 md:w-5 md:h-5 !bg-[var(--p-info-color)]"
            ><i class="text-[8px] md:text-[10px] pi pi-percentage"></i
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
