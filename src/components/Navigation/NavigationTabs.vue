<template>
  <div class="bg-[var(--p-surface-ground)] py-4">
    <div class="container mx-auto text-[var(--p-text-color)]">
      <ul class="flex gap-16 items-center">
        <li class="custom_hover">
          <RouterLink to="/about" class="text-lg">О магазине</RouterLink>
        </li>
        <li class="custom_adverb">
          <RouterLink to="/payment" class="text-lg custom_hover">
            Доставка и оплата
          </RouterLink>
          <span
            class="adverbs text-[12px] ml-2 rounded-full text-white text-lg p-1 !bg-[var(--p-info-color)]"
            >Доступна рассрочка</span
          >
        </li>
        <li class="custom_hover text-lg">
          <RouterLink to="/testing">Тест-драйв</RouterLink>
        </li>
        <li class="custom_hover text-lg">
          <RouterLink to="/blog">Блог</RouterLink>
        </li>
        <li class="custom_hover text-lg">
          <RouterLink to="/contacts">Контакты</RouterLink>
        </li>
        <li class="custom_hover flex items-center gap-2 text-lg cursor-pointer">
          <RouterLink to="/discounts">Акции</RouterLink>
          <span
            class="adverbs rounded-full flex items-center justify-center text-white w-[20px] h-[20px] !bg-[var(--p-info-color)]"
            ><i class="!text-[10px] pi pi-percentage"></i
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
