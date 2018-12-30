<template>
		<ul class="menu-list">
			<li class="logo">
				<div>findMe</div>
			</li>
			<li>
				<nuxt-link :to="{ name: 'index' }">
					<h3>Home</h3>
				</nuxt-link>
			</li>
		</ul>
</template>


<script>
export default {
  name: 'Menu',
  props: {}
};
</script>

<style scoped>
li {
	list-style-type: none;
}

li a {
	display: table;
	width: 100%;
}

.menu-list {
	height: 100%;
}

@media screen and (max-width: 767px) {
	li {
		color: black;
		border-bottom: 1px solid grey;
		padding-left: 20px;
	}

	li.logo {
		color: white;
		padding: 15px 0px;
		text-align: center;
		pointer-events: none;
		background-color: black;
	}

	.menu-list {
		width: 60%;
		background: #fff;
	}
}
@media screen and (min-width: 768px) {
	li {
		color: white;
		margin-right: 20px;
	}

	li.logo {
		display: none;
	}

	.menu-list {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}
}
</style>

