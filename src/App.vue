<template lang="">
  <div>
    <MainNavbar />
    <Router-view />
  </div>
</template>
<script>
import MainNavbar from "./components/Navigation/MainNavbar.vue";

export default {
  components: { MainNavbar },
};
</script>
<style lang=""></style>
