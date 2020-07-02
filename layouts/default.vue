<template>
  <div class="pt-20">
    <header>
      <div class="container">
        <span class="logo">
          <nuxt-link exact to="/">Loren Valle</nuxt-link>
        </span>
        <nav class="font-semibold">
          <ul class="space-x-5">
            <li v-for="item in items" :key="item.route">
              <nuxt-link :to="{ name: item.route }" v-text="item.label" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <div class="container">
        <span class="logo">
          <nuxt-link exact to="/">Loren Valle</nuxt-link>
        </span>
        <div class="footer__socials space-x-1">
          <a v-for="n in 4" :key="n" href="http://" class="icon">i</a>
        </div>
        <nav>
          <ul class="space-x-5">
            <li v-for="item in items" :key="item.route">
              <nuxt-link :to="{ name: item.route }" v-text="item.label" />
            </li>
          </ul>
        </nav>
        <div class="footer__legal">All copyright © reserved by Loren Valle 2020.</div>
      </div>
    </footer>
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
        new MenuItem('Home', 'index'),
        new MenuItem('Gallery', 'gallery'),
        new MenuItem('Contact', 'contact'),
      ],
    }
  },
})
</script>

<style scoped>
header {
  @apply fixed inset-x-0 h-20 top-0 border-b bg-white;
}
header .container {
  @apply flex items-center justify-between h-full;
}
.logo {
  @apply font-bold text-xl font-display;
}
nav ul {
  @apply flex tracking-wide uppercase text-xs;
}
footer {
  @apply py-32 text-center;
}
footer nav ul {
  @apply justify-center my-8;
}
.footer__socials {
  @apply flex justify-center my-8;
}
.footer__socials .icon {
  @apply rounded-full h-10 w-10 flex items-center justify-center bg-gray-500 text-white;
}
</style>
