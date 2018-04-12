<template>
	<b-jumbotron class="about">
		<b-container>
			<b-row>
				<b-col md="6" class="description-block">
					<h3>
						We are attracting
						<br />
						blockchain technology
						<br />
						in the world of HR
					</h3>
					<img src="../../assets/img/macbook.png" alt="" width="100%">
				</b-col>
				<b-col md="6" class="about-block">
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
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.description-block
			h3
				font-weight 300
				font-size 18px
				letter-spacing 1.34px
				color #ECECF0
				text-transform uppercase

			img
				padding 2.4em 0 0 0

		.about-block
			h1
				font-size 60px
				color #FBB841
				font-weight 300
				letter-spacing 1.12px

			p
				font-weight 300
				font-size 16px
				letter-spacing 0.4px
				color #fff
				padding 1.5em 0
</style>