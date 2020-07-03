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
        <li
          v-for="cat in categories"
          :key="cat"
          class="tabs__item"
          :class="{ active: tab === cat }"
          @click.prevent="tab = cat"
        >{{ cat }}</li>
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
  data() {
    return {
      tab: 'Acrylic',
      categories: ['Acrylic', 'Pencil', 'Oil'],
    }
  },
  head: {
    title: 'Home',
  },
})
</script>

<style scoped>
.gallery {
  @apply py-20;
}
.gallery__items {
  @apply grid grid-cols-1 gap-4;
}
.tabs {
  @apply flex justify-center mb-10;
}
.tabs__item {
  @apply cursor-pointer;
}
.tabs__item.active {
  @apply border-b-2 border-dark-lava;
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
