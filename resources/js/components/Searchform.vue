<template>
  <form v-on:submit="onSubmit">
    <div>
      <label for="inputKeyword">Keyword</label>
      <input
        type="text"
        id="inputKeyword"
        placeholder="Let's find some fungi!"
        autocomplete="off"
        v-model="searchKeyword"
      />
      <div>
        <button type="submit">Search</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      searchKeyword: ''
    }
  },
  methods: {
    ...mapActions(['fetchFungi']),
    onSubmit(e) {
      e.preventDefault();
      this.fetchFungi(this.searchKeyword);
    },
  },
}
</script>
