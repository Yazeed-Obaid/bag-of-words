<template>
  <span @click="activateLink">
    <nuxt-link
      :to="link.linkRoute"
      class="font-medium text-sm no-underline mx-2"
      :class="activeLinkTextColor"
      v-text="link.linkTitle"
    />
  </span>
</template>
<script>
import { EventBus } from '@@/assets/js/eventBus'

export default {
  name: 'NavLink',
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  computed: {
    activeLinkTextColor() {
      return this.link.isActive ? 'text-blue-light' : 'text-grey-light'
    }
  },
  methods: {
    activateLink() {
      EventBus.$emit('activateLink', this.link.id)
    }
  }
}
</script>
