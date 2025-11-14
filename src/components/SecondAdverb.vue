<template>
  <div class="w-full sm:w-1/2 mx-auto py-5">
    <div class="custom_background sm:bg-center bg-right-top p-5">
      <div class="w-2/3">
        <h1 class="text-2xl font-bold uppercase text-white sm:text-black/80">Сервисное
          обслуживание</h1>
        <p class="text-xl my-8 text-white sm:text-black/80">Крупнейший сервисный центр в России для продуктов Kugoo</p>
        <router-link
          to="/catalog"
          class="cursor-pointer text-white sm:text-[var(--p-primary-color)] hover:text-[var(--p-primary-color)]/80 transition-colors duration-300 mt-10"
        >
            Подобрать модель
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.custom_background {
  position: relative;
  background-image: url("@/assets/second_adverb.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 90%;
  max-width: 600px;
  height: 100%;
  max-height: 400px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
/* Потемнение только на мобильных */
.custom_background::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: rgba(0,0,0,0.4); 
  z-index: 1;
  pointer-events: none;
}
/* Убираем потемнение для >= sm (планшеты и ноутбуки) */
@media (min-width: 640px) {
  .custom_background::before {
    background: none;
  }
}
.custom_background > * {
  position: relative;
  z-index: 2;
}
</style>
