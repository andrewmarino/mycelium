<template>
  <main class="container mx-auto my-24 px-6">
    <div class="grid gap-6 grid-cols-3">
      <Card v-for="fungus in getResults" :key="fungus.slug" :fungus="fungus" />
    </div>
  </main>
</template>

<script>
import Card from './Card.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Card,
  },
  methods: {
    ...mapActions(['fetchFungi']),
  },
  computed: mapGetters(['getResults']),
  mounted() {
    this.fetchFungi();
  }
}
</script>
