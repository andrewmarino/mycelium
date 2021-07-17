<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  components: {
    Footer,
    Header,
    Main,
  },
}
</script>
