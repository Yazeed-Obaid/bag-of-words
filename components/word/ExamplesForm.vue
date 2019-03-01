<template>
  <div class="container flex flex-col justify-center items-between font-raleway text-grey-light">
    <h3 class="font-semibold mb-2">
      My Usage Example(s)
    </h3>
    <p class="font-medium text-xs mb-4">
      <span class="opacity-75">
        Employ the word in an example of your own to add
      </span>
      <span class="text-blue">
        your touch
      </span>
    </p>
    <div class="flex xs:flex-col lg:flex-row justify-between">
      <example-text-area
        :word-example="examples.firstExample"
        index="firstExample"
      />
      <button
        class="xs:w-full lg:w-auto px-6 py-3 no-underline font-raleway text-grey-light 
          rounded shadow-md text-center self-start"
        :class="secondExampleButtonBg"
        @click="addSecondExample"
        v-text="scondExampleButtonText"
      />
    </div>
    <div class="mt-10">
      <example-text-area
        v-show="hasSecondExample"
        :word-example="examples.secondExample"
        index="secondExample"
      />
    </div>
  </div>
</template>


<script>
import { EventBus } from '@@/assets/js/eventBus.js'
import ExampleTextArea from '@@/components/word/ExampleTextArea.vue'

export default {
  name: 'ExamplesForm',
  components: {
    ExampleTextArea
  },
  props: {
    initialExamples: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      examples: this.initialExamples,
      hasSecondExample: false,
      secondExampleButtonBg: 'bg-blue-lighter'
    }
  },
  computed: {
    scondExampleButtonText() {
      return this.hasSecondExample ? '- Example' : '+ Example'
    }
  },
  methods: {
    /*
     ** Handler for adding or removing second example on word. It notifies
     ** parent component and child component to detect this change and take
     ** actions accordingly
     */
    addSecondExample() {
      this.hasSecondExample = !this.hasSecondExample

      if (this.hasSecondExample) {
        this.secondExampleButtonBg = 'bg-red-lighter'
        return
      }
      this.secondExampleButtonBg = 'bg-blue-lighter'
      EventBus.$emit('update:examples', '', 'secondExample')
      EventBus.$emit('update:clear-second-example', 'secondExample')
    }
  }
}
</script>
