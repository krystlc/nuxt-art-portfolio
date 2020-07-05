<template>
  <div id="About">
    <section class="hero">
      <div class="container">
        <h3 class="title">About</h3>
      </div>
    </section>
    <section class="profile container">
      <aside class="profile__picture">
        <img :src="`${cover}?fm=webp&h=960`" />
      </aside>
      <div class="profile__bio">
        <h4 v-if="description" class="headline">{{ description }}</h4>
        <div v-html="body" />
        <button class="btn mt-4" disabled>Hire me</button>
        <nuxt-link to="/portfolio" class="btn btn-secondary">View Portfolio</nuxt-link>
      </div>
    </section>
    <section
      v-for="(block, i) in blocks"
      :key="`block-${i}`"
      class="segment"
      :class="{ 'segment-inverse': i % 2 }"
    >
      <div class="segment__cover">
        <img :src="`${block.cover}?fm=webp&h=960&w=960&fit=fill`" />
      </div>
      <div class="segment__copy">
        <h4 class="headline">{{ block.headline }}</h4>
        <div v-html="block.body" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import pageMixin from '~/mixins/pageMixin'

export default pageMixin.extend({
  name: 'PageAbout',
  asyncData() {
    const entry = require('~/static/data/page.json').find(
      (e: any) => e.fields.slug === 'about'
    )
    return { entry }
  },
})
</script>

<style scoped>
.profile,
.segment {
  @apply grid grid-cols-1;
}
.profile {
  @apply col-gap-24 py-8;
}
.profile__picture {
  @apply mb-4;
}
.segment {
  @apply bg-pale-silver text-dark-lava;
}
.segment-inverse {
  @apply bg-melon;
}
.segment__copy {
  @apply p-8;
}
@screen sm {
  .segment,
  .profile {
    @apply grid-cols-2;
  }
  .profile {
    @apply py-16;
  }
  .segment-inverse .segment__cover {
    @apply order-last;
  }
  .segment__copy {
    @apply p-16;
  }
  .profile__picture {
    @apply mb-0;
  }
}
</style>
