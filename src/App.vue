<script setup>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <AppFooter />
  </footer>
</template>
