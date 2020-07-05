<template>
  <div id="Portfolio">
    <section class="hero">
      <div class="container">
        <h3 class="title">Portfolio</h3>
      </div>
    </section>
    <section class="container pt-8">
      <div class="collections">
        <div
          v-for="(collection, i) in filteredCollection"
          :key="`collection-${i}`"
          class="collection"
        >
          <nuxt-link :to="`/portfolio/${collection.slug}`">
            <img
              :src="`${collection.cover}?fm=webp&h=640&w=640&fit=fill`"
              :title="collection.title"
            />
          </nuxt-link>
        </div>
      </div>
    </section>
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
    title: 'Collections',
  },
})
</script>

<style scoped>
.collections {
  @apply grid grid-cols-1 gap-4;
}
@screen sm {
  .featured__details {
    @apply flex flex-row-reverse;
  }
  .collections {
    @apply grid-cols-3;
  }
}
</style>
