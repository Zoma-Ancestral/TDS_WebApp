<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main class="has-navbar-fixed-top">
    <router-view />
  </main>
  <AppFooter />1
</template>
