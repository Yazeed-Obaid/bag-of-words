<template>
  <div class="flex">
    <div class="relative font-raleway text-blue-dark">
      <span class="absolute w-full h-full flex flex-col items-center justify-center">
        <h1 class="text-3xl text-blue-dark font-normal">
          {{ word.wordText }}
        </h1>
      </span>
      <span class="absolute w-full h-full flex items-end justify-end p-4">
        <h6 class="font-open-sans font-light text-grey-light">
          {{ word.humanCreatedAt }}
        </h6>
      </span>
      <img
        src="~/assets/images/word-shape.svg"
        alt=""
        width="200"
        height="200"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BagWord',
  props: {
    bagWord: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      word: this.bagWord
    }
  }
}
</script>
