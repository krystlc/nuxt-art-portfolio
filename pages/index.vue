<template>
  <div id="Home">
    <section class="hero">
      <div class="container">
        <h3 class="title">{{ description }}</h3>
        <div class="subtitle" v-html="body" />
        <nuxt-link to="/about" class="btn">About</nuxt-link>
      </div>
    </section>
    <section class="container gallery">
      <div class="gallery__items">
        <nuxt-link
          v-for="(item, i) in gallery"
          :key="`item-${i}`"
          class="gallery__item"
          :to="item.slug"
        >
          <img :src="`${item.image}?fm=webp&h=640&w=640&fit=fill`" :title="item.title" />
        </nuxt-link>
      </div>
      <div class="gallery__action">
        <nuxt-link to="/portfolio" class="btn btn-secondary">View Portfolio</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import pageMixin from '~/mixins/pageMixin'

export default pageMixin.extend({
  name: 'PageIndex',
  asyncData() {
    const entry = require('~/static/data/page.json').find(
      (e: any) => e.fields.slug === 'home'
    )
    const collections = require('~/static/data/collection.json')
    return { entry, collections }
  },
  computed: {
    gallery(): any[] {
      return (this as any).collections.reduce((arr: any[], collection: any) => {
        const items = collection.fields.items.map((item: any) => ({
          image: item.fields.image.fields.file.url,
          title: item.fields.title,
          slug: `/portfolio/${
            collection.fields.slug
          }#${item.fields.title.replace(/ /g, '')}`,
        }))
        arr = [...arr, ...items]
        return arr
      }, [])
    },
  },
})
</script>

<style scoped>
.gallery {
  @apply pt-8;
}
.gallery__items {
  @apply grid grid-cols-1 gap-4;
}
.gallery__action {
  @apply text-center mt-8;
}
@screen sm {
  .gallery__items {
    @apply grid-cols-3;
  }
}
</style>
