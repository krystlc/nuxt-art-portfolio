<template>
  <div>
    <section class="hero">
      <div class="container">
        <h3 class="title">{{ description }}</h3>
        <div class="subtitle" v-html="body" />
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
import EntryMixin from '~/mixins/entryMixin'

export default EntryMixin.extend({
  name: 'PageIndex',
  data() {
    return {
      tab: 'Acrylic',
      categories: ['Acrylic', 'Pencil', 'Oil'],
    }
  },
  asyncData() {
    const entry = require('~/static/data/page.json').find(
      (e: any) => e.fields.slug === 'home'
    )
    return { entry }
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
