<template>
  <header>
    <div class="container">
      <Logo />
      <nav class="font-semibold">
        <ul class="space-x-5">
          <li v-for="item in items" :key="item.route">
            <nuxt-link :to="{ name: item.route }" exact v-text="item.label" />
          </li>
        </ul>
      </nav>
      <button class="sm:hidden">
        <i class="fas fa-bars" />
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  name: 'AppHeader',
  components: {
    Logo,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
})
</script>

<style scoped>
.container {
  @apply flex items-center justify-between h-full;
}
nav {
  @apply hidden;
}
@screen sm {
  nav {
    @apply block;
  }
}
nav ul {
  @apply flex tracking-wide uppercase text-xs;
}
</style>
