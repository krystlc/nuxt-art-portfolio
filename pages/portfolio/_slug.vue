<template>
  <div id="Collection">
    <section class="hero">
      <div class="container">
        <h3 class="title" v-text="title" />
        <p class="subtitle" v-text="description" />
      </div>
    </section>
    <section class="container collection">
      <div class="collection__details">
        <p class="tags" v-text="tags" />
        <div v-html="body" />
      </div>
      <div class="collection__items">
        <figure v-for="item in items" :id="item.id" :key="item.id" class="collection__item">
          <img :src="`${item.image}?fm=webp&w=960`" />
          <figcaption v-text="item.caption" />
        </figure>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import EntryMixin from '~/mixins/entryMixin'

export default EntryMixin.extend({
  name: 'PageCollection',
  asyncData({ params }) {
    const entry = require('~/static/data/collection.json').find(
      (e: any) => e.fields.slug === params.slug
    )
    return { entry }
  },
  computed: {
    tags(): string {
      return (this as any).entry.fields.items
        .reduce((arr: any[], item: any) => {
          return new Array(...arr, ...item.fields.tags)
        }, [])
        .join(', ')
    },
    items(): any[] {
      return (this as any).entry.fields.items.map((item: any) => {
        return {
          id: item.fields.title.replace(/ /g, ''),
          caption: `${item.fields.title}: ${item.fields.description}`,
          image: item.fields.image.fields.file.url,
        }
      })
    },
  },
})
</script>

<style scoped>
.collection {
  @apply mt-8;
}
.collection figcaption {
  @apply mt-4 italic;
}
.collection__item {
  @apply my-8;
}
.collection__item:last-child {
  @apply mb-0;
}
.collection__details .tags {
  @apply italic uppercase text-xs;
}
@screen sm {
  .collection {
    @apply grid grid-cols-3 gap-8;
  }
  .collection__items {
    @apply col-span-2;
  }
  .collection__item {
    @apply mt-0;
  }
}
</style>
