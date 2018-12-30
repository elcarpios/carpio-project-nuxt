<template>
	<router-link :to="{ name: 'index' }">
		<div class="logo">
			findMe
		</div>
	</router-link>
</template>

<script>

export default {
  name: "Logo",
  components: {},
  props: {}
};
</script>

<style scoped>
.logo {
	border: 1px solid white;
	padding: 5px 10px;
	border-radius: 5px;
	margin-left: 20px;
}
</style>
