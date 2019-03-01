<template>
  <div class="flex">
    <img src="~/assets/images/logo.svg" alt="logo" width="20" height="20">
    <h1 class="leading-loose" :class="nameClasses">
      BagOfWords
    </h1>
  </div>
</template>
<script>
export default {
  name: 'SiteLogo',
  props: {
    nameClasses: {
      type: Array,
      default: function() {
        return ['text-xl', 'font-bold', 'text-blue']
      }
    }
  }
}
</script>
