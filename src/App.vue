<template>
  <div id="app">
    <Searchform />
    <section>
      <Card v-for="fungus in getResults" :key="fungus.slug" :fungus="fungus" />
    </section>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import Searchform from './components/Searchform.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Card,
    Searchform
  },
  methods: {
    ...mapActions(['fetchFungi']),
  },
  computed: mapGetters(['getResults', 'fetchMoreAvailable']),
  mounted() {
    this.fetchFungi();
  }
}
</script>
