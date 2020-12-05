<template>
  <div id="LandingPage" class="text-center">
    <section class="hero">
      <div class="container">
        <h3 class="title" v-text="title" />
        <p v-if="description" class="subtitle" v-text="description" />
      </div>
    </section>
    <section v-if="body" class="container landing__body">
      <div v-html="body" />
    </section>
    <section class="container links">
      <div v-for="link in links" :key="link.url" class="links__link">
        <a
          :href="link.url"
          target="_blank"
          class="btn btn-secondary"
          v-text="link.label"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import EntryMixin from '~/mixins/entryMixin'

export default EntryMixin.extend({
  name: 'PageLandingPage',
  asyncData({ params }) {
    const entry = require('~/static/data/landingPage.json').find(
      (e: any) => e.fields.slug === params.slug
    )
    return { entry }
  },
  computed: {
    links(): any[] {
      return (this as any).entry.fields.links.map((link: any) => {
        return link.fields
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
      ],
    }
  },
})
</script>

<style scoped>
.links,
.landing__body {
  @apply pt-8;
}
.links__link {
  @apply py-4;
}
.links__link .btn {
  @apply inline-block;
}
</style>
