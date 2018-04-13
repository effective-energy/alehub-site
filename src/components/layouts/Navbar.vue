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
					<b-nav-item href="#">Features</b-nav-item>
					<b-nav-item href="#">Bounty</b-nav-item>
					<b-nav-item href="#">Team</b-nav-item>
					<b-nav-item href="#">News</b-nav-item>
				</b-navbar-nav>

				<b-navbar-nav class="ml-auto">

					<b-button size="sm" class="login-btn" variant="warning">Log in</b-button>

					<b-nav-item-dropdown
						:text="selectedLanguage"
						right
						class="language-dropdown"
					>
						<b-dropdown-item
							:active="selectedLanguage === lang"
							v-for="(lang, langIndex) in languageList"
							:key="langIndex"
							@click="selectLang(langIndex)"
						>
							{{ lang }}
						</b-dropdown-item>
					</b-nav-item-dropdown>

				</b-navbar-nav>

			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
	export default {
		name: 'Navbar',
		data() {
			return {
				selectedLanguage: 'En',
				languageList: ['En', 'Ru', 'Ch']
			}
		},
		methods: {
			selectLang (index) {
				this.selectedLanguage = this.languageList[index];
			}
		}
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
						margin-right 0.5rem
						margin-left 0.5rem

				&:not(.active)
					.nav-link:hover
						padding-bottom 0
						margin-bottom 0
						border-bottom 3px solid #fec108
						padding-left 0.1rem
						padding-right 0.1rem
						margin-right 0.5rem
						margin-left 0.5rem

	@media(max-width: 991px)
		.navbar
			.navbar-nav
				.nav-item:first-child
					.nav-link
						margin-right 0

	@media(max-width: 767px)
		.navbar
			.navbar-brand
				margin-right 0
				text-align right

</style>