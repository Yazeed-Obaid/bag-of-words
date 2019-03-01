<template>
  <main class="flex flex-col flex-1 justify-center items-center">
    <section class="container flex xs:flex-col lg:flex-row justify-between items-center">
      <div class="xs:w-full lg:w-4/5 mt-10 align-center leading-loose">
        <label
          for="word"
          class="font-raleway font-semibold text-grey-light mb-2"
        >
          The Word
        </label>
        <input
          id="word"
          v-model="word"
          type="text"
          name="word"
          placeholder="Enter a word"
          class="w-full h-12 border border-blue-lighter rounded shadow pl-4 
          font-raleway font-light opacity-75"
        >
      </div>
      <div class="xs:w-full lg:w-auto pt-16">
        <button
          class="xs:w-full lg:w-auto px-6 py-3 bg-blue-light no-underline font-raleway text-white 
        rounded shadow-md text-center"
          @click.prevent="addWord"
        >
          Add to Bag
        </button>
      </div>
    </section>
    <section class="container">
      <div class="w-full my-16 self-center">
        <hr class="w-4/5 border border-grey-light opacity-10">
      </div>
      <examples-form :initial-examples="examples" />
    </section>
    <section>
      <img
        src="~/assets/images/letters-shape.svg"
        alt=""
        width="600"
        height="600"
        class="absolute mt-20 mb-0 pin-r"
      >
    </section>
  </main>
</template>

<script>
import { EventBus } from '@@/assets/js/eventBus.js'
import ExamplesForm from '@@/components/word/ExamplesForm.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    ExamplesForm
  },
  data: function() {
    return {
      word: '',
      examples: {
        firstExample: '',
        secondExample: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getWordByText'])
  },
  mounted() {
    EventBus.$on('update:examples', (example, index) => {
      this.examples[index] = example
    })
  },
  methods: {
    ...mapMutations(['addWordToBag']),

    addWord() {
      this.addWordToBag({ wordText: this.word, examples: this.examples })
      const word = this.getWordByText(this.word)
      this.$router.push(`/word/${word.id}`)
    }
  }
}
</script>
