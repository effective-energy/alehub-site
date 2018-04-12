<template>
	<b-jumbotron class="teams">
		<b-container>
			<b-row>
				<b-col md="12">
					<h1 class="title">Meet the team</h1>
					<p class="subtitle">Effective Energy team</p>
				</b-col>

				<b-col md="3">
					<b-card 
				          img-src="https://alehub.eu-4.evennode.com/ale-files/img/team/gromyko.jpg"
				          tag="article"
				          class="mb-2">
				    <p class="card-text">
				      Mikhail Gromyko
				    </p>
				    <p class="position">Chief Execute Officer</p>
				  </b-card>
				</b-col>

				<b-col md="12">
					<div class="resume">
						<p>We’d be happy to welcome you to our team. Come and change the world with us!</p>
						<b-button size="sm" variant="primary" :size="'sm'">Submit a resume</b-button>
					</div>
				</b-col>

			</b-row>
		</b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Teams'
	}
</script>

<style lang="stylus" scoped>
	.teams
		background-color #D7D7E0
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			font-size 60px
			font-weight 400
			color #0F1118

		.subtitle
			margin-bottom 40px

		.card
			border none
			background none
			font-size 18px
			color #0F1118
			margin-bottom 20px!important

			img
				border-radius 0

			.card-text
				margin-bottom 0
				font-size 18px

			.position
				margin 0
				color #0F1118
				font-size 16px

		.card:hover
			background-color #FCB332
			cursor pointer


		.resume
			background-color #FCB332
			width 100%
			padding 40px
			display flex
			justify-content space-between
			align-items center

			p
				letter-spacing 0.34px
				font-size 18px
				color #131C36

</style>