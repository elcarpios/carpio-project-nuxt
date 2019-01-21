<template>
	<footer>
		<div>© 2018 - findMe belongs to the <span>Carpio Foundation</span></div>
	</footer>
</template>

<script>

export default {
  name: 'Footer',
  components: {},
  props: {}
};
</script>

<style scoped>
footer {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	color: white;
	background-color: #ADAFBC;
	height: 36px;
	width: 100%;
	text-align: center;
  font-size: 12px;
}

span {
	font-weight: bolder;
}

</style>
