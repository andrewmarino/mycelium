<template>
  <article class="bg-gray-800 text-white p-4" :key="fungus.id">
    <h2 class="font-bold text-xl mb-2">{{ fungus.title }}</h2>
    <em>{{ fungus.common_name }}</em>
  </article>
</template>

<script>
export default {
  props: {
    fungus: {
      type: Object
    }
  }
};
</script>
