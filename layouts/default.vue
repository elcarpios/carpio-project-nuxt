<template>
  <div id="app">
    <Header/>
    	<Main/>
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
	height: 100vh;
	width: 100vw;
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
