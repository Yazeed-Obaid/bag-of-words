<template>
  <header class="container font-raleway mx-auto w-full h-24 justify-between items-center">
    <site-logo />
    <nav>
      <ul>
        <li
          v-for="link in links"
          :key="link.id"
          class="inline"
        >
          <nav-link :link="link" />
        </li>
        <li class="inline">
          <nuxt-link
            class="border border-blue-light rounded py-2 px-3 font-medium text-sm 
            text-blue no-underline mx-2 hover:border-blue-ligther hover:text-white hover:bg-blue"
            to="/"
            v-text="'Signout'"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { EventBus } from '@@/assets/js/eventBus'
import NavLink from './NavLink.vue'
import SiteLogo from './../SiteLogo.vue'

export default {
  name: 'TheHeading',
  components: { NavLink, SiteLogo },
  data: () => ({
    links: [
      {
        id: 1,
        linkTitle: 'My Bag',
        linkRoute: '/',
        routeName: 'index',
        isActive: false
      },
      {
        id: 2,
        linkTitle: 'Add Word',
        linkRoute: '/word/create',
        routeName: 'word-create',
        isActive: false
      }
    ]
  }),
  created() {
    const currentRouteName = this.$route.name
    const currentLink = this.links.find(
      link => link.routeName === currentRouteName
    )

    if (currentLink) {
      this.activateLink(currentLink.id)
    }
  },
  mounted() {
    EventBus.$on('activateLink', linkId => {
      this.activateLink(linkId)
    })
  },
  methods: {
    /*
     * Activate a link by setting isActive to true and adding active link styles
     * all other links are deactivated
     */
    activateLink(linkId) {
      this.links.forEach(link => {
        if (link.id !== linkId) {
          link.isActive = false
          link.linkStyles = []
          return
        }

        link.isActive = true
        link.linkStyles = this.activeLinkStyles
      })
    }
  }
}
</script>
