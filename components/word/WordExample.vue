<template>
  <div>
    <p class="text-xl font-open-sans font-normal text-grey-light">
      {{ example }}
    </p>
  </div>
</template>


<script>
export default {
  name: 'WordExample',
  props: {
    example: {
      type: String,
      required: true
    }
  }
}
</script>
