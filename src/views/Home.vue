<script setup>
  import Member from '@/components/Member.vue'
</script>

<style>
  .has-bg-img {
    background: url("https://cdna.artstation.com/p/assets/images/images/008/690/618/large/shawn-kok-1.jpg?1514594849")center center;
    background-size: cover;
    transform: scaleX(-1);
  }

  .has-bg-img * {
    transform: scaleX(-1);
  }

  .has-bg-img-lol {
    background: url("https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3")center center;
    background-size: cover;
  }

  .has-bg-img-valo {
    background: url("https://www.riotgames.com/darkroom/1440/d0807e131a84f2e42c7a303bda672789:3d02afa7e0bfb75f645d97467765b24c/valorant-offwhitelaunch-keyart.jpg")center center;
    background-size: cover;
  }
</style>

<template>
  <section class="hero is-primary is-large block has-bg-img">
    <div class="hero-body">
      <div class="has-text">
        <p class="title">The Damocles Sword</p>
        <p class="subtitle ">Bienvenue dans la TDS ! Nous sommes une famille d'esprits créatifs, de compétiteurs avides et de passionnés de jeux vidéo. <br>
          Que vous soyez un joueur chevronné ou un novice curieux, nous sommes ravis de vous accueillir au sein de notre communauté dynamique et engagée.</p>
      </div>
    </div>
  </section>

  <section class="container is-fluid columns block is-vcentered is-centered is-multiline">
    <Member/>
    <Member/>
  </section>

  <section class="hero is-link is-large has-bg-img-lol">
    <div class="hero-body">
      <div class="has-text-right">
        <p class="title">League Of Legends</p>
        <p class="subtitle">On a trois équipes remplies de ultra BG</p>
      </div>
    </div>
  </section>

  <section class="hero is-danger is-large has-bg-img-valo">
    <div class="hero-body">
      <div class="has-text">
        <p class="title has-text-danger">Valorant</p>
        <p class="subtitle has-text-danger-dark">Une équipe d'ancien joueur pro Osu!</p>
      </div>
    </div>
  </section>
</template>