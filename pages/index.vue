<template>
  <div id="Home">
    <section class="hero">
      <div class="container">
        <h3 class="title">{{ description }}</h3>
        <div class="subtitle" v-html="body" />
        <nuxt-link to="/about" class="btn">About</nuxt-link>
      </div>
      <div class="hero-bg" :style="heroBg" />
    </section>
    <section class="container gallery">
      <div class="gallery__items">
        <nuxt-link
          v-for="(item, i) in gallery"
          :key="`item-${i}`"
          class="gallery__item"
          :to="item.slug"
        >
          <picture>
            <source :srcset="`${item.image}?h=640&w=640&fit=thumb&fm=webp&q=80`" type="image/webp" />
            <source :srcset="`${item.image}?h=640&w=640&fit=thumb&fm=jpg&q=90`" type="image/jpeg" />
            <img
              :src="`${item.image}?h=640&w=640&fit=thumb&fm=jpg&q=90`"
              :alt="item.title"
              :title="item.title"
            />
          </picture>
          <h4 v-text="item.title" />
        </nuxt-link>
      </div>
      <div class="gallery__action">
        <nuxt-link to="/portfolio" class="btn btn-secondary">View Portfolio</nuxt-link>
      </div>
    </section>
    <hr />
  </div>
</template>

<script lang="ts">
import pageMixin from '~/mixins/pageMixin'

function compareDates(a: any, b: any) {
  const dateA = a.date
  const dateB = b.date
  return new Date(dateB).getTime() - new Date(dateA).getTime()
}

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
      return (this as any).collections
        .reduce((arr: any[], collection: any) => {
          const items = collection.fields.items
            .filter((item: any) => item.fields.featured)
            .map((item: any) => ({
              date: item.sys.updatedAt,
              image: item.fields.image.fields.file.url,
              title: item.fields.title,
              slug: `/portfolio/${
                collection.fields.slug
              }#${item.fields.title.replace(/ /g, '')}`,
            }))
          arr = [...arr, ...items]
          return arr
        }, [])
        .sort(compareDates)
    },
    heroBg() {
      return { backgroundImage: `url('${this.cover}?fm=jpg&w=1280&q=80')` }
    },
  },
})
</script>

<style scoped>
.hero {
  @apply relative overflow-hidden;
}
.hero .title::before {
  content: none;
}
.hero .container {
  @apply items-start text-left relative z-10;
}
.hero-bg {
  @apply absolute top-0 bottom-0 left-0 right-0 opacity-25 bg-cover bg-center;
}
.gallery__action {
  @apply text-center pt-8;
}
@screen sm {
  .hero {
    @apply py-32;
  }
  .gallery__action {
    @apply pt-16;
  }
}
</style>
