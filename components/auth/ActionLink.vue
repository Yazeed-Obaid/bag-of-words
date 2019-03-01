<template>
  <nuxt-link
    class="px-6 py-3 bg-blue-light no-underline font-raleway text-white rounded shadow-md 
    text-center font-semibold"
    :to="linkAddress"
  >
    {{ linkText }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'ActionLink',
  props: {
    linkText: {
      type: String,
      required: true
    },
    linkAddress: {
      type: String,
      required: true
    }
  }
}
</script>
