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
        <p>Released: {{ entry.fields.released | date }}</p>
        <div v-html="body" />
      </div>
      <div class="collection__items">
        <figure v-for="item in items" :id="item.id" :key="item.id" class="collection__item">
          <picture>
            <source :srcset="`${item.image}?fm=webp&w=960&q=80`" type="image/webp" />
            <source :srcset="`${item.image}?fm=jpg&w=960&q=90`" type="image/jpeg" />
            <img :src="`${item.image}?fm=jpg&w=960&q=90`" :alt="item.title" :title="item.title" />
          </picture>
          <figcaption>
            <strong>{{ item.title }}.</strong>
            <span>{{ item.tags }}.</span>
            <span>{{ item.description }}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import EntryMixin from '~/mixins/entryMixin'

export default EntryMixin.extend({
  name: 'PageCollection',
  asyncData({ params }) {
    const entry = require('~/static/data/collection.json').find(
      (e: any) => e.fields.slug === params.slug
    )
    return { entry }
  },
  filters: {
    date(val: string) {
      return val ? dayjs(val).format('MMMM D, YYYY') : 'Ongoing'
    },
  },
  computed: {
    items(): any[] {
      return (this as any).entry.fields.items.map((item: any) => {
        return {
          id: item.fields.title.replace(/ /g, ''),
          title: item.fields.title,
          description: item.fields.description,
          tags: item.fields.tags.join(', '),
          image: item.fields.image.fields.file.url,
        }
      })
    },
  },
  head() {
    return {
      title: (this as any).title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: (this as any).description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: (this as any).description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: (this as any).title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https:${(this as any).items[0].image}`,
        },
      ],
    }
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
