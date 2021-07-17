<template>
  <main class="container mx-auto my-24 px-6">
    <div class="grid gap-6 grid-cols-3">
      <Card v-for="fungus in getResults" :key="fungus.slug" :fungus="fungus" />
    </div>
    <div v-if="!getResults.length && getAppInitStatus === true">
      <Alert>No results found.</Alert>
    </div>
  </main>
</template>

<script>
import Alert from './Alert.vue';
import Card from './Card.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Alert,
    Card,
  },
  methods: {
    ...mapActions(['fetchFungi']),
  },
  computed: {
    ...mapGetters(['getResults', 'getAppInitStatus']),
  },
  mounted() {
    this.fetchFungi();
  }
}
</script>
