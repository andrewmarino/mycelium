<template>
  <header class="container mx-auto px-6 my-6">
    <h1 class="text-4xl mb-12 font-sans">Mycelium</h1>
    <SearchForm />
  </header>
</template>

<script>
import SearchForm from './SearchForm.vue';

export default {
  components: {
    SearchForm
  },
}
</script>
