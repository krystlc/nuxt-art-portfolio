<template>
  <footer class="container">
    <Logo />
    <div class="footer__socials space-x-3">
      <a
        v-for="social in socials"
        :key="social.icon"
        target="_blank"
        :href="social.url"
        class="icon"
        :title="social.label"
      >
        <i class="fab" :class="social.icon" />
      </a>
    </div>
    <nav>
      <ul class="space-x-5">
        <li v-for="item in items" :key="item.route">
          <nuxt-link :to="{ name: item.route }" exact v-text="item.label" />
        </li>
      </ul>
    </nav>
    <div class="footer__legal">©2020 Loren Valle. All rights reserved.</div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

class Social {
  label: string
  url: string
  icon: string
  constructor(label: string, url: string, icon: string) {
    this.label = label
    this.url = url
    this.icon = icon
  }
}

export default Vue.extend({
  name: 'AppFooter',
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
  computed: {
    socials(): Social[] {
      return [
        new Social(
          'Facebook',
          'https://www.facebook.com/lorenvalleart',
          'fa-facebook-f'
        ),
        new Social(
          'Instagram',
          'https://www.instagram.com/lorenvalleart/',
          'fa-instagram'
        ),
        new Social(
          'YouTube',
          'https://www.youtube.com/channel/UCafeShiZ-qkA1izJzcp6ntg',
          'fa-youtube'
        ),
        new Social(
          'Etsy',
          'https://www.etsy.com/shop/lorenvalleart',
          'fa-etsy'
        ),
      ]
    },
  },
})
</script>

<style scoped>
footer {
  @apply flex flex-col items-center justify-between h-40 my-32 text-pale-silver;
}
footer nav ul {
  @apply flex justify-center tracking-wider uppercase text-xs;
}
.footer__socials {
  @apply flex justify-center;
}
.footer__socials .icon {
  @apply rounded-full h-8 w-8 flex items-center justify-center bg-melon text-white;
}
.footer__socials .icon:hover {
  @apply bg-middle-grey;
}
</style>
