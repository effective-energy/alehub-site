<template>
	<b-jumbotron class="news">
		<b-container>
			<b-row>

				<b-col md="12" class="oneline-header">
					<h1 class="title">News</h1>
					<b-button variant="secondary">
		                All news
		            </b-button>
				</b-col>

				<b-col md="3">
					<b-card 
				          img-src="http://via.placeholder.com/300x300"
				          tag="article"
				          class="mb-2">
				    <p class="card-text">
				      The ALE product is  primarily a service  for consumers
				    </p>
				    <p class="date">Feb 11, 2018</p>
				  </b-card>
				</b-col>

				<b-col md="3">
					<b-card 
				          img-src="http://via.placeholder.com/300x300"
				          tag="article"
				          class="mb-2">
				    <p class="card-text">
				      Alehub IOS application beta 1
				    </p>
				    <p class="date">Feb 11, 2018</p>
				  </b-card>
				</b-col>

				<b-col md="3">
					<b-card 
				          img-src="http://via.placeholder.com/300x300"
				          tag="article"
				          class="mb-2">
				    <p class="card-text">
				      How To Invest In An ICO
				    </p>
				    <p class="date">Feb 11, 2018</p>
				  </b-card>
				</b-col>

				<b-col md="3">
					<b-card 
				          img-src="http://via.placeholder.com/300x300"
				          tag="article"
				          class="mb-2">
				    <p class="card-text">
				      Push into billion-dollar Southeast Asian token markets
				    </p>
				    <p class="date">Feb 11, 2018</p>
				  </b-card>
				</b-col>

			</b-row>
		</b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'News'
	}
</script>

<style lang="stylus" scoped>
	.news
		background-color #fbfbfc
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.oneline-header
			display flex
			justify-content space-between
			padding-bottom 50px

			.title
				font-size 60px
				font-weight 400
				color #0F1118
				margin 0

			.btn
				align-self center
				background-color #D8D8DC
				border 1px solid #D8D8DC
				color #202226
				padding 0.375rem 1.75rem
				font-weight lighter
				text-transform uppercase
				font-size 14px

		.card
			border none
			background none
			font-size 18px
			color #0F1118

			img
				border-radius 0

			.date
				margin 0
				color #AAADB6
				font-size 14px

		.card:hover
			background-color #fff
			cursor pointer
			box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
</style>