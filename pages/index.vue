<template>
  <div>
    <section class="hero">
      <div class="container">
        <h3 class="title">Simple is the best design</h3>
        <p class="subtitle">We are Professional web developer and designer in this market.</p>
        <nuxt-link to="/about" class="btn">About</nuxt-link>
      </div>
    </section>
    <section class="container gallery">
      <ul class="tabs space-x-5">
        <li>Cat 1</li>
        <li>Cat 2</li>
        <li>Cat 3</li>
        <li>Cat 4</li>
      </ul>
      <div class="gallery__items">
        <div v-for="n in 9" :key="n" class="gallery__item" />
      </div>
      <div class="gallery__action">
        <nuxt-link to="/gallery" class="btn">View more</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageIndex',
  head: {
    title: 'Home',
  },
})
</script>

<style scoped>
.gallery {
  @apply py-20;
}
.tabs {
  @apply flex justify-center mb-10;
}
.gallery__items {
  @apply grid grid-cols-1 gap-4;
}
@screen sm {
  .gallery__items {
    @apply grid-cols-3;
  }
}
.gallery__item {
  @apply h-64 bg-gray-100;
}
.gallery__action {
  @apply text-center mt-10;
}
</style>
