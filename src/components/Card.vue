<template>
  <article :key="fungus.id" :data-group="fungus.content.group">
    <div>
      <h2>{{ fungus.title }}</h2>
      <em>{{ fungus.content.common_name }}</em>
    </div>
    <figure v-if="fungus.content.main_image[0]">
      <img :src="`${fungus.content.main_image[0].image.url}`" :alt="``" />
    </figure>
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
