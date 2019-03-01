<template>
  <div class="flex flex-col w-2/3 justify-center mb-6">
    <label
      :for="fieldId"
      class="font-raleway font-semibold text-grey-light mb-2"
    >
      {{ fieldLabel }}
    </label>
    <input
      :id="fieldId"
      :type="fieldType"
      :name="fieldName"
      :placeholder="fieldPlaceholder"
      class="h-10 border border-blue-lighter rounded shadow pl-4 font-raleway font-light opacity-75"
    >
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    fieldLabel: {
      type: String,
      required: true
    },
    fieldPlaceholder: {
      type: String,
      default: ''
    },
    fieldType: {
      type: String,
      default: 'text'
    },
    fieldName: {
      type: String,
      required: true
    },
    fieldId: {
      type: String,
      required: true
    }
  }
}
</script>
