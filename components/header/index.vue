<template>
	<header>
		<Nav/>
		<Logo/>
	</header>
</template>

<script>
import Logo from '@/components/header/subcomponents/logo'
import Nav from '@/components/header/subcomponents/nav';

export default {
  name: "Header",
  components: {
	  Logo, Nav
  },
  props: {}
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #4dc0b5;
	color: white;
	padding: 10px 30px;
	height: 46px;
}
</style>
