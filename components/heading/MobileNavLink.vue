<template>
  <span @click="activateLink">
    <nuxt-link
      :to="link.linkRoute"
      class="h-full flex justify-center items-center font-medium text-2xl no-underline text-grey-light nuxt-link-exact-active nuxt-link-active"
      v-text="link.linkTitle"
    />
  </span>
</template>

<script>
import { EventBus } from '@@/assets/js/eventBus'

export default {
  name: 'MobileNavLink',
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  methods: {
    activateLink() {
      EventBus.$emit('activateLink', this.link.id)
    }
  }
}
</script>
