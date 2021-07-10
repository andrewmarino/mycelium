<template>
  <article :key="fungus.id">
    <h2>{{ fungus.title }}</h2>
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
