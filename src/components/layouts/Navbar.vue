<template>
	<b-navbar toggleable="md" variant="info" class="navbar">
		<b-container>
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			<b-navbar-brand href="#" class="logo">
		      <img src="../../assets/img/logo.png" alt="BV">
		  	</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item href="#">Home</b-nav-item>
					<b-nav-item href="#">Description</b-nav-item>
					<b-nav-item href="#">Advantages</b-nav-item>
					<b-nav-item href="#">Featurs</b-nav-item>
					<b-nav-item href="#">Bounty</b-nav-item>
					<b-nav-item href="#">Team</b-nav-item>
					<b-nav-item href="#">News</b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">

					<b-button size="sm" class="my-2 my-sm-0" variant="warning" :size="'sm'">Log in</b-button>

					<b-nav-item-dropdown text="en" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown>

				</b-navbar-nav>

			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style lang="stylus" scoped>
	.navbar
		background-color #fff!important
		height 80px

		.logo
			img
				width 80%
</style>