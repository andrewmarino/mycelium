<template>
  <div class="space-y-2 mb-4">
    <div class="space-y-1">
      <label :for="name" class="block font-medium font-gray-900">{{ label }}</label>
    </div>
    <select
      class="w-full text-gray-700 p-2 border-2 border-gray-700 outline-none focus:outline-black focus:shadow-none focus:ring-0"
      :name="name"
      :id="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">Any {{ label }}</option>
      <option v-for="option in options" :key="option.slug" :value="option.slug">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    modelValue: String,
    options: Array
  },
  emits: ['update:modelValue']
}
</script>
