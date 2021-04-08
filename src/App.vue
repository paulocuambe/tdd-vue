<template>
  <the-header />
  <main class="container main-content">
    <router-view />
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>

<style scoped>
.main-content {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
