<template>
  <div class="pt-20">
    <AppHeader class="app-header" :items="items" />
    <main>
      <nuxt />
    </main>
    <AppFooter :items="items" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

class MenuItem {
  label: string
  route: string
  constructor(label: string, route: string) {
    this.label = label
    this.route = route
  }

  get external(): boolean {
    return this.route.includes('http')
  }
}

export default Vue.extend({
  name: 'LayoutDefault',
  components: {
    AppHeader,
    AppFooter,
  },
  computed: {
    items(): MenuItem[] {
      return [
        new MenuItem('Home', 'index'),
        new MenuItem('Portfolio', 'portfolio'),
        new MenuItem('About', 'about'),
        new MenuItem('Shop', 'https://www.etsy.com/shop/lorenvalleart'),
        new MenuItem('Contact', 'contact'),
      ]
    },
  },
})
</script>

<style scoped>
.app-header {
  @apply fixed inset-x-0 h-20 top-0 bg-white z-20;
}
</style>
