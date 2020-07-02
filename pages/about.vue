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
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageAbout',
})
</script>

<style scoped>
.profile {
  @apply grid grid-cols-1 col-gap-8 my-8;
}
@screen sm {
  .profile {
    @apply grid-cols-2;
  }
}
.profile__picture {
  @apply mb-4;
}
</style>
