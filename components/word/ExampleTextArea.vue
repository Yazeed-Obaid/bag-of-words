<template>
  <textarea
    v-model="example"
    rows="4"
    cols="40"
    class="xs:w-full lg:w-4/5 pl-4 py-4 xs:mb-10 lg:mb-auto border border-blue-lighter rounded shadow"
    @change="emitExampleText"
  />
</template>

<script>
import { EventBus } from '@@/assets/js/eventBus.js'

export default {
  name: 'ExampleTextArea',
  props: {
    wordExample: {
      type: String,
      required: true
    },
    index: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      example: this.wordExample
    }
  },
  mounted() {
    /*
     ** Register handler to detect removal of second example to clear the
     ** local data value
     */
    EventBus.$on('update:clear-second-example', exampleIndex => {
      if (exampleIndex === this.index) {
        this.example = ''
      }
    })
  },
  methods: {
    /*
     ** Handler for changing example text to emit an event for parent
     ** detection of this change
     */
    emitExampleText() {
      EventBus.$emit('update:examples', this.example, this.index)
    }
  }
}
</script>
