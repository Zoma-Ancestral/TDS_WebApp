<script setup>
  import Member from '@/components/Member.vue'
</script>

<template>
  <section class="hero is-primary is-medium block">
    <div class="hero-body">
      <div class="has-text-centered">
        <p class="title">The Damocles Sword</p>
        <p class="subtitle">Association d'esport tro bien tavu</p>
      </div>
    </div>
  </section>
  <section class="columns block is-vcentered is-centered is-multiline">
    <Member/>
    <Member/>
    <Member/>
    <Member/>
  </section>
  <section class="hero is-link is-medium">
    <div class="hero-body">
      <div class="has-text-right">
        <p class="title">League Of Legends</p>
        <p class="subtitle">On a trois équipes remplies de ultra BG</p>
      </div>
    </div>
  </section>
  <section class="hero is-danger is-medium">
    <div class="hero-body">
      <div class="has-text">
        <p class="title">Valorant</p>
        <p class="subtitle">Une équipe d'ancien joueur pro Osu!</p>
      </div>
    </div>
  </section>
</template>