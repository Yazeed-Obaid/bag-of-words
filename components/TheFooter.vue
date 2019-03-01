<template>
  <div class="absolute h-24 w-full bg-blue-light">
    <div class="container h-full mx-auto flex items-center justify-between">
      <div class="flex flex-row items-center font-raleway leading-none">
        <site-logo :name-classes="siteNameClasses" />
        <span class="font-bold text-blue">
          &nbsp;{{ currentYear }}
        </span>
      </div>
      <div class="flex items-center leading-loose">
        <a href="https://twitter.com/yazeed_obaid" target="_blank" class="mr-1">
          <img src="~/assets/images/twitter.svg" alt="Twitter" width="25" height="25">
        </a>
        <a href="https://www.linkedin.com/in/yazeed-obaid-4bb479145" target="_blank">
          <img src="~/assets/images/linkedin.svg" alt="LinkedIn" width="25" height="25">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SiteLogo from './SiteLogo.vue'

export default {
  name: 'TheFooter',
  components: { SiteLogo },
  data: () => ({
    siteNameClasses: ['text-lg', 'font-bold', 'text-blue'],
    currentYear: new Date().getFullYear()
  })
}
</script>
