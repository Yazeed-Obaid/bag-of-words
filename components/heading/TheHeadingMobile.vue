<template>
  <header class="font-raleway">
    <section class="container h-24 mx-auto flex justify-between items-center">
      <div>
        <img
          src="~/assets/images/menu-icon-open.svg"
          alt=""
          @click="toogleSideMenu"
        >
      </div>
      <site-logo />
    </section>
    <transition name="slide-fade">
      <nav
        v-show="show"
        class="absolute pin-t pin-l w-2/3 h-screen bg-blue-lightest z-20"
      >
        <div class="container h-24">
          <img
            src="~/assets/images/menu-icon-close.svg"
            alt=""
            class="pin-l mt-8 ml-16"
            @click="toogleSideMenu"
          >
        </div>

        <ul class="list-reset flex flex-col">
          <li
            v-for="link in links"
            :key="link.id"
            class="h-24"
            :class="link.linkStyles"
          >
            <mobile-nav-link :link="link" />
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
import { EventBus } from '@@/assets/js/eventBus.js'
import SiteLogo from './../SiteLogo.vue'
import MobileNavLink from './MobileNavLink.vue'

export default {
  name: 'TheHeadingMobile',
  components: { SiteLogo, MobileNavLink },
  data: function() {
    return {
      show: false,
      activeLinkStyles: ['text-blue-light', 'bg-blue-light'],
      links: [
        {
          id: 1,
          linkTitle: 'My Bag',
          linkRoute: '/',
          routeName: 'index',
          isActive: true,
          linkStyles: []
        },
        {
          id: 2,
          linkTitle: 'Add Word',
          linkRoute: '/word/create',
          routeName: 'word-create',
          isActive: false,
          linkStyles: []
        },
        {
          id: 3,
          linkTitle: 'Signout',
          linkRoute: '/',
          routeName: 'signout',
          isActive: false,
          linkStyles: []
        }
      ]
    }
  },
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
      this.toogleSideMenu()
    })
  },
  methods: {
    toogleSideMenu() {
      this.show = !this.show
    },
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
<style>
.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
