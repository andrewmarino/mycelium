<template>
  <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4" :value="value" />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: 'Submit',
    }
  }
}
</script>
