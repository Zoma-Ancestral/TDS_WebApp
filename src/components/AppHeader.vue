<script setup>
import { RouterLink } from 'vue-router';

// import here
</script>

<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="/Logo.png" loading="lazy" alt="Logo de l'association The Damocles Sword"/>
        <p class="navbar-item">
          The Damocles Sword        
        </p>
      </router-link>
      <router-link class="navbar-item" to="/register">
        Register
      </router-link>
      <router-link class="navbar-item" to="/login">
        Log in
      </router-link>
      <router-link class="navbar-item" to="/logout">
        Log out
      </router-link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="button is-primary" to="/dashboard">
              Espace Adhérents
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>