<template>
  <main class="flex flex-col flex-1 justify-center items-center">
    <section>
      <the-bag-hero
        :initial-words-count="wordsCount"
        :initial-examples-count="examplesCount"
      />
    </section>
    <section>
      <div class="w-screen my-10 self-center">
        <hr class="w-4/5 border border-grey-light opacity-10">
      </div>
      <div class="my-6">
        <h1 class="font-raleway font-normal text-blue-dark text-center">
          Your Bag Currently Contains
        </h1>
      </div>
    </section>
    <section>
      <div class="flex justify-center flex-wrap">
        <template v-for="(word, index) in words">
          <nuxt-link
            :key="index"
            :to="getWordLinkPage(word.id)"
          >
            <bag-word
              :bag-word="word"
              class="p-4"
            />
          </nuxt-link>
        </template>
      </div>
    </section>
  </main>
</template>

<script>
import TheBagHero from '@@/components/bag/TheBagHero.vue'
import BagWord from '@@/components/bag/BagWord.vue'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  components: { TheBagHero, BagWord },
  data: function() {
    return {
      wordsCount: 1,
      examplesCount: 0,
      words: []
    }
  },
  computed: {
    ...mapGetters(['getAllWords'])
  },
  created() {
    this.words = this.getAllWords

    this.words.map(word => {
      word.humanCreatedAt = moment(
        word.createdAt,
        'DD/MM/YYYY, h:mm:ss a'
      ).fromNow()

      this.examplesCount += word.examples.length
    })

    this.wordsCount = this.words.length
  },
  methods: {
    getWordLinkPage(wordId) {
      return 'word/' + wordId
    }
  }
}
</script>
