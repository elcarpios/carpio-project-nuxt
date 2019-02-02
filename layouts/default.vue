<template>
  <div id="app">
    <Header/>
      <Nuxt keep-alive/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header/";
import Footer from "@/components/footer/";

export default {
  name: 'App',
  scrollToTop: false,
  components: { Header, Footer }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
}

Header, Footer {
  flex-shrink: 0;
}
</style>
