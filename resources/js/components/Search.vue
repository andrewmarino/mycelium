<template>
  <div class="container mx-auto px-6 my-6">
    <form class="max-w-xl" v-on:submit="onSubmit">
      <InputText
        v-model="searchKeyword"
        type="text"
        :name="'inputSearchKeyword'"
        :label="'Keyword'"
      />
      <InputSelect
        v-model="searchGroup"
        :name="'inputGroup'"
        :label="'Group'"
        :options="getGroups"
      />
      <InputSubmit />
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import InputText from './InputText.vue';
import InputSelect from './InputSelect.vue';
import InputSubmit from './InputSubmit.vue';

export default {
  data() {
    return {
      searchKeyword: '',
      searchGroup: null,
    }
  },
  components: {
    InputText,
    InputSelect,
    InputSubmit,
  },
  computed: {
    ...mapGetters(['getGroups']),
  },
  methods: {
    ...mapActions(['fetchFungi', 'fetchGroups']),
    onSubmit(e) {
      e.preventDefault();
      this.fetchFungi(this.searchKeyword, this.searchGroup);
    },
  },
  mounted() {
    this.fetchGroups();
  },
}
</script>
