<template>
  <Header />
  <Search />
  <Main />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Search from './components/Search.vue';

export default {
  components: {
    Footer,
    Header,
    Main,
    Search,
  },
}
</script>
