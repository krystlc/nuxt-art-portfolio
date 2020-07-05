<template>
  <div id="Contact">
    <section class="hero">
      <div class="container">
        <h3 class="title">Contact</h3>
        <p>Let's connect!</p>
      </div>
    </section>
    <section class="container">
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        netlify
        data-netlify="true"
        action="/"
      >
        <input type="text" name="bot-field" value />
        <div class="flex flex-wrap -mx-3 md:mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="Name">Name</label>
            <input id="Name" class="py-3 px-4" type="text" value />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="Email">Email</label>
            <input id="Email" class="py-3 px-4" type="email" value />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 md:mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label for="Message">Message</label>
            <textarea id="Message" class="py-3 px-4" value />
          </div>
        </div>
        <button class="btn btn-primary" type="submit">
          <i class="fas fa-paper-plane mr-2" />Send
        </button>
      </form>
    </section>
    <hr />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageContact',
  head: {
    title: 'Contact',
  },
})
</script>

<style scoped>
form {
  @apply w-full max-w-lg mx-auto py-8;
}
@screen sm {
  form {
    @apply py-16;
  }
}
</style>
