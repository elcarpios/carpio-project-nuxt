<template>
  <div id="app">
    <Header/>
    	<nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header/";
import Main from "@/components/main/";
import Footer from "@/components/footer/";

export default {
  name: 'App',
  components: { Header, Main, Footer }
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

Main {
	flex-grow: 1;
    overflow: auto;
    min-height: 2em;
}
</style>
