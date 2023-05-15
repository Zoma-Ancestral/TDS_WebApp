<script setup>
// import here
</script>

<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/Logo.png" loading="lazy" alt="Logo de l'association The Damocles Sword"/>
        <p class="navbar-item">
          The Damocles Sword
        </p>
      </a>
      <router-link class="navbar-item" to="/register">
        Register
      </router-link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
                Espace Adhérents
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>