<template>
  <div>
    <header>
      <div class="container header-container">
        <span class="logo">
          <nuxt-link exact to="/">Loren Valle</nuxt-link>
        </span>
        <nav>
          <ul class="space-x-5">
            <li v-for="item in items" :key="item.route">
              <nuxt-link :to="{ name: item.route }" v-text="item.label" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <nuxt class="pt-16" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

class MenuItem {
  label: string
  route: string
  constructor(label: string, route: string) {
    this.label = label
    this.route = route
  }
}

export default Vue.extend({
  name: 'LayoutDefault',
  data() {
    return {
      items: [
        new MenuItem('Home', 'home'),
        new MenuItem('Gallery', 'gallery'),
        new MenuItem('Contact', 'contact'),
      ],
    }
  },
})
</script>

<style scoped>
header {
  @apply fixed inset-x-0 h-16 top-0 border-b;
}
.header-container {
  @apply min-h-0 h-full justify-between;
}
.logo {
  @apply font-bold text-lg;
}
nav ul {
  @apply flex;
}
</style>
