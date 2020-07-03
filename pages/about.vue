<template>
  <div>
    <section class="hero">
      <div class="container">
        <h3 class="title">About</h3>
      </div>
    </section>
    <section class="profile container">
      <aside class="profile__picture">
        <img src="https://themepure.net/tf/akel-prv/akel/img/bg/me.jpg" />
      </aside>
      <div class="profile__bio">
        <h4 class="headline">Ut vel nostrum mollitia vero, quia, ab asperiores tenetur</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          odio voluptatum ipsum, et laudantium dolorem necessitatibus nam ipsa
          voluptatibus non quaerat ut vel nostrum mollitia vero, quia, ab
          asperiores tenetur!
        </p>
        <button class="btn mt-4">Hire me</button>
        <nuxt-link to="/gallery" class="btn btn-secondary">View Gallery</nuxt-link>
      </div>
    </section>
    <section v-for="n in 3" :key="n" class="segment" :class="{ 'segment-inverse': n % 2 }">
      <div class="segment__cover">
        <img src="https://themepure.net/tf/akel-prv/akel/img/bg/me.jpg" />
      </div>
      <div class="segment__copy">
        <h4 class="headline">Ab asperiores tenetur</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis,
          eos molestias dolorem atque eaque animi, inventore, autem voluptate
          sapiente officia dolor velit. Modi nesciunt itaque praesentium
          quisquam et assumenda.
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageAbout',
  head: {
    title: 'About',
  },
})
</script>

<style scoped>
.profile,
.segment {
  @apply grid grid-cols-1;
}
.profile {
  @apply col-gap-8 my-8;
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
  @apply p-10;
}
@screen sm {
  .segment,
  .profile {
    @apply grid-cols-2;
  }
  .segment-inverse .segment__cover {
    @apply order-last;
  }
  .segment__copy {
    @apply p-20;
  }
}
</style>
