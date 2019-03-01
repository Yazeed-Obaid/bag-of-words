<template>
  <section class="min-h-screen flex flex-col">
    <the-heading class="xs:hidden md:flex" />
    <the-heading-mobile class="md:hidden" />
    <nuxt />
  </section>
</template>

<script>
import TheHeading from '@@/components/heading/TheHeading.vue'
import TheHeadingMobile from '@@/components/heading/TheHeadingMobile.vue'

export default {
  components: { TheHeading, TheHeadingMobile }
}
</script>
