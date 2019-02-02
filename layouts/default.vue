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
	height: 100%;
	width: 100%;
}

Header, Footer {
	flex-shrink: 0;
}

Nuxt {
	flex-grow: 1;
  overflow: auto;
  min-height: 2em;
}
</style>
