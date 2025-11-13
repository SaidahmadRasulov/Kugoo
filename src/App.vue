<template>
  <div class="relative">
    <MainNavbar />
    <RouterView />
    <div
      v-if="visible"
      class="go_up fixed bottom-4 right-10 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer"
      @click="scrollToTop"
    >
      <i class="pi pi-arrow-up"></i>
    </div>
  </div>
</template>

<script>
import MainNavbar from "./components/Navigation/MainNavbar.vue";

export default {
  components: { MainNavbar },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleScroll() {
      this.visible = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.go_up {
  transition: opacity 0.3s ease;
}
</style>
