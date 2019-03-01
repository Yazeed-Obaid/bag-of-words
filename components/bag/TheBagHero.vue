<template>
  <div class="flex xs:flex-col lg:flex-row mt-24">
    <div class="relative font-raleway text-blue-dark self-center xs:z-10 lg:z-0">
      <span class="absolute w-full h-full flex flex-col items-center justify-center">
        <h1 class="text-5xl">
          {{ wordsCount }}
        </h1>
        <h3 class="font-light text-3xl">
          Words
        </h3>
      </span>
      <img
        src="~/assets/images/hero-section-shape-words.svg"
        alt="Count of words examples image"
        width="250"
        height="250"
      >
    </div>
    <div class="flex flex-col justify-center xs:rotateZ-90deg lg:rotateZ-180deg-counter">
      <img
        src="~/assets/images/connector-shape-1.svg"
        alt=""
        width="300"
        class="mb-2"
      >
      <img
        src="~/assets/images/connector-shape-2.svg"
        alt=""
        width="300"
      >
    </div>
    <div class="relative font-raleway text-blue-dark self-center xs:z-10 lg:z-0">
      <span class="absolute w-full h-full flex flex-col items-center justify-center">
        <h1 class="text-5xl">
          {{ examplesCount }}
        </h1>
        <h3 class="font-light text-3xl">
          Examples
        </h3>
      </span>
      <img
        src="~/assets/images/hero-section-shape-examples.svg"
        alt="Count of examples image"
        width="250"
        height="250"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheBagHero',
  props: {
    initialWordsCount: {
      type: Number,
      default: 0
    },
    initialExamplesCount: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      wordsCount: this.initialWordsCount,
      examplesCount: this.initialExamplesCount
    }
  }
}
</script>
