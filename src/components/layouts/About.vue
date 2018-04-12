<template>
	<b-jumbotron class="about">
		<b-container>
			<b-row>
				<b-col lg="6" md="12" class="description-block">
					<h3>
						We are attracting
						<br />
						blockchain technology
						<br />
						in the world of HR
					</h3>
					<img src="../../assets/img/macbook.png" alt="" width="100%">
				</b-col>
				<b-col lg="6" md="12" class="about-block">
					<h1>What is alehub</h1>
					<p>The ALE product is primarily a service for consumers to find counterparties for projects in the IT field and to manage these projects at the management and financial level. On the one hand, they are programmers or their associations, and on the other hand, they are IT Customers. ALE in this sense is an online distributed information and financial platform / project management system, the location and interaction of project parties (in the first stage of IT projects).</p>

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

	@media(max-width: 1199px)
		.about
			.about-block
				h1
					font-size 50px

	@media(max-width: 991px)
		.about
			.description-block
				margin-bottom 30px

	@media(max-width: 425px)
		.about
			.about-block
				h1
					font-size 36px

				.btn:last-child
					margin-top 15px

	@media(max-width: 375px)
		.about
			.about-block
				button 
					width 100%

</style>