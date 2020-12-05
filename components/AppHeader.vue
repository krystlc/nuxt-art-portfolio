<template>
  <header>
    <div class="container">
      <Logo />
      <nav :class="{ open }">
        <ul class="sm:space-x-5">
          <li v-for="item in items" :key="item.route">
            <a
              v-if="item.external"
              :href="item.route"
              target="_blank"
              v-text="item.label"
            />
            <nuxt-link
              v-else
              :to="{ name: item.route }"
              exact
              v-text="item.label"
            />
          </li>
        </ul>
      </nav>
      <button class="menu-btn" @click.prevent="open = !open">
        <i class="fas" :class="menuIcon" />
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
  data() {
    return {
      open: false,
    }
  },
  computed: {
    menuIcon(): string {
      return (this as any).open ? 'fa-times' : 'fa-bars'
    },
  },
  watch: {
    $route() {
      this.open = false
    },
  },
})
</script>

<style scoped>
.container {
  @apply flex items-center justify-between h-full;
}
nav {
  @apply hidden font-semibold;
}
nav.open {
  @apply block fixed top-0 bottom-0 left-0 right-0 bg-melon flex items-center;
}
nav ul {
  @apply tracking-wide uppercase font-display text-4xl p-8;
}
.menu-btn {
  @apply text-xl z-30;
}
@screen sm {
  nav {
    @apply block;
  }
  nav.open {
    @apply relative bg-transparent block;
  }
  nav ul {
    @apply flex font-body text-xs p-0;
  }
  .menu-btn {
    @apply hidden;
  }
}
</style>
