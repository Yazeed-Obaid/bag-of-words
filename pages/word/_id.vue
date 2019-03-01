<template>
  <main>
    <section>
      <div class="w-screen flex flex-col justify-center items-center mt-8">
        <div class="font-raleway font-semibold text-5xl text-grey-light mb-10">
          {{ word.wordText }}
        </div>
        <div>
          <img
            src="~/assets/images/empty-bag-view-word.svg"
            alt="Empty Bag"
          >
        </div>
      </div>
    </section>
    <section>
      <div class="flex xs:flex-col lg:flex-row justify-center items-center mt-10">
        <div class="xs:w-full xs:text-left xs:pl-10 lg:w-auto lg:pl-24 my-8 font-open-sans font-thin text-xs text-grey-light text-center">
          Your Examples:
        </div>
        <div class="xs:px-10 lg:mx-32 lg:pr-16">
          <word-example :example="word.examples[0]" />
          <div class="my-10 align-center">
            <hr class="w-2/3 border border-grey-light opacity-10">
          </div>
          <word-example
            v-if="word.examples.length = 2"
            :example="word.examples[1]"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import WordExample from '@@/components/word/WordExample.vue'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  validate({ params, store }) {
    // Check if `params.id` is an existing word
    return store.state.words.some(word => word.id === parseInt(params.id))
  },
  name: 'Word',
  components: {
    WordExample
  },
  data: () => ({
    word: {}
  }),
  computed: {
    ...mapGetters({ getWordById: 'getWordById' })
  },
  created() {
    const wordId = this.$route.params

    this.word = this.getWordById(wordId)

    this.word.humanCreatedAt = moment(
      this.word.createdAt,
      'DD/MM/YYYY, h:mm:ss a'
    ).fromNow()
  }
}
</script>
