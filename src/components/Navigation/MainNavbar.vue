<template>
  <div class="bg-[var(--p-surface-section)]">
    <InfoNavigation />
    <SearchNavbar />
    <NavigationTabs />
  </div>
</template>

<script>
import InfoNavigation from "./InfoNavigation.vue";
import NavigationTabs from "./NavigationTabs.vue";
import SearchNavbar from "./SearchNavbar.vue";

export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>
