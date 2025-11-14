<template>
  <div class="bg-[var(--p-surface-section)] h-full">
    <HomeHeader />
    <Scooters />
    <div class="flex container mx-auto sm:flex-row flex-col items-center justify-center gap-5">
      <FirstAdverb />
      <SecondAdverb />
    </div>
  </div>
</template>
<script>
import HomeHeader from "../components/HomeHeader.vue";
import Scooters from "../components/Scooters.vue";
import FirstAdverb from "../components/FirstAdverb.vue";

export default {};
</script>
<style lang=""></style>
