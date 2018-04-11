<template>
	<b-jumbotron class="about">
		<b-container>
			<b-row>
				<b-col md="6">
					<h3>We are attracting blockchain technology in the world of HR</h3>
					<img src="https://cdn.dribbble.com/users/30252/screenshots/1198467/attachments/158890/MacBook-Pro-mockup.png" alt="" width="100%">
				</b-col>
				<b-col md="6">
					<h1>What is alehub</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ut ipsum at ab esse inventore laborum iste nam. Iusto laborum explicabo culpa soluta? Totam reprehenderit cupiditate rerum sunt, animi consequatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore consequuntur adipisci quasi soluta dolorum quaerat sequi! Fuga repudiandae, rerum corporis! Et aspernatur minima, fugit culpa necessitatibus natus laudantium quaerat odio.</p>

					<b-button variant="outline-warning">White paper</b-button>
					<b-button variant="outline-warning">Technical details of pre ICO</b-button>
					  
				</b-col>
			</b-row>
		</b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'About'
	}
</script>

<style lang="stylus" scoped>
	.about
		background linear-gradient(270deg,#282a37,#303643)
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-weight 300
			font-size 48px
			letter-spacing 2px
			color #fff
			padding-bottom 50px

		.description
			p
				color #fff

		.hueta
			display flex
			text-align center
			justify-content center
			align-items center

			img
				width 100%

			.stats
				position absolute
				font-size 1.5em
				font-weight lighter

				.count, .type
					color #fff
					letter-spacing 2px

				.separator
					width 100%
					height 2px
					background #fff

		.distribution-list

			.list-group-item
				background none
				border none
				color #fff
				display flex
				align-items center
				justify-content flex-start

				.badge
					min-width 37px
					min-height 37px
					display block
					border-radius 50%
					margin-right 20px

					&.badge-darkblue
						background-color #3a87ff
					&.badge-green
						background-color #00b271
					&.badge-lightblue
						background-color #00a3e1
					&.badge-yellow
						background-color #ffb419
</style>