<template>
	<b-navbar toggleable="md" variant="info" class="navbar">
		<b-container>
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			<b-navbar-brand href="#" class="logo">
		      <img src="../../assets/img/logo.png" alt="BV">
		  	</b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">

				<b-navbar-nav>
					<b-nav-item href="#" class="active">Home</b-nav-item>
					<b-nav-item href="#">Description</b-nav-item>
					<b-nav-item href="#">Advantages</b-nav-item>
					<b-nav-item href="#">Featurs</b-nav-item>
					<b-nav-item href="#">Bounty</b-nav-item>
					<b-nav-item href="#">Team</b-nav-item>
					<b-nav-item href="#">News</b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">

					<b-button size="sm" class="login-btn" variant="warning" :size="'sm'">Log in</b-button>

					<b-nav-item-dropdown text="en" right class="language-dropdown">
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

		.login-btn
			padding 0.25rem 1.5rem
			font-size 16px

		.language-dropdown
			padding-left 30px

		.navbar-nav
			.nav-link
				color #0F1118
				font-weight 400
				padding-right 0.6rem
				padding-left 0.6rem

			.nav-item 

				&.active
					.nav-link
						padding-bottom 0
						margin-bottom 0
						border-bottom 3px solid #fec108
						padding-left 0.1rem
						padding-right 0.1rem
						margin-right 0.6rem
						margin-left 0.6rem
</style>