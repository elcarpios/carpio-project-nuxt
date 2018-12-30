<template>
	<section>
		<div class="toggle-button">
			<div/><div/><div/>
		</div>
		<nav class="menu">
			<Menu/>
		</nav>
	</section>
</template>

<script>
import Menu from '@/components/header/subcomponents/menu';

function initListeners() {
	const lateralMenu = this.$el;

	function toggleMenu(event) {
		lateralMenu.classList.toggle('collapsed');
	}

	lateralMenu.addEventListener('click', toggleMenu);
}

export default {
  name: 'Nav',
  props: {},
  components: { Menu },
  mounted: initListeners
};
</script>

<style scoped>
.menu {
	height: 100%;
}

.toggle-button > div {
	height: 5px;
	width: 40px;
	background-color: white;
    pointer-events: none;
    margin: 8px 0px;
}

@media only screen and (max-width: 767px) {
	.menu {
		position: absolute;
		opacity: 0;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		transform: translate3d(-100%, 0, 0);
		transition: all .3s ease-in;
	}

	.collapsed > .menu {
		opacity: 1;
		transform: translate3d(0, 0, 0);
		background-color: rgba(0,0,0,0.1);

	}
}
@media only screen and (min-width: 768px) {
	.toggle-button {
		display: none;
	}
}
</style>

