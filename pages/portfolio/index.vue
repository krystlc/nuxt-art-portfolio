<template>
  <div id="Portfolio">
    <section class="hero">
      <div class="container">
        <h3 class="title">Portfolio</h3>
      </div>
    </section>
    <section class="container gallery">
      <div class="gallery__items">
        <nuxt-link
          v-for="(collection, i) in filteredCollection"
          :key="`collection-${i}`"
          :to="`/portfolio/${collection.slug}`"
          class="gallery__item"
        >
          <picture>
            <source
              :srcset="`${collection.cover}?fm=webp&h=640&w=640&fit=thumb&q=80`"
              type="image/webp"
            />
            <source
              :srcset="`${collection.cover}?fm=jpg&h=640&w=640&fit=thumb&q=90`"
              type="image/jpeg"
            />
            <img
              :src="`${collection.cover}?fm=jpg&h=640&w=640&fit=thumb&q=90`"
              :alt="collection.title"
              :title="collection.title"
            />
          </picture>
          <h4 v-text="collection.title" />
        </nuxt-link>
      </div>
    </section>
    <hr />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PagePortfolio',
  asyncData() {
    const collections = require('~/static/data/collection.json')
    return {
      collections,
    }
  },
  computed: {
    filteredCollection(): any[] {
      return (this as any).collections.map((collection: any) => {
        return {
          title: collection.fields.title,
          slug: collection.fields.slug,
          cover: collection.fields.items[0].fields.image.fields.file.url,
        }
      })
    },
  },
  head: {
    title: 'Portfolio',
  },
})
</script>
