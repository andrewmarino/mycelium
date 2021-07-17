<template>
  <form class="max-w-xl" v-on:submit="onSubmit">
    <div class="space-y-2 mb-4">
      <div class="space-y-1">
        <label for="inputKeyword" class="block font-medium font-gray-900">Search by keyword</label>
        <p id="keyword-help" class="text-sm">For example, search for a fungi by its common name), group, etc.</p>
      </div>
      <input class="w-full text-gray-700 p-2 border-2 border-gray-700 outline-none focus:outline-black focus:shadow-none focus:ring-0" type="text" id="inputKeyword" autocomplete="off" aria-describedby="keyword-help" v-model="searchKeyword" />
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4" type="submit">Search</button>
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
