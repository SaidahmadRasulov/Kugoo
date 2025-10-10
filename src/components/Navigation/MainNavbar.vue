<template>
  <div>
    <InfoNavigation />
    <SearchNavbar />
  </div>
</template>

<script>
import InfoNavigation from "./InfoNavigation.vue";
import SearchNavbar from "./SearchNavbar.vue";

export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang=""></style>
