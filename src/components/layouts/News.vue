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

				<b-col md="3" v-for="n in 4">
					<b-card title="Card Title"
				          img-src="https://lorempixel.com/600/300/food/5/"
				          img-alt="Image"
				          img-top
				          tag="article"
				          style="max-width: 20rem;"
				          class="mb-2">
				    <p class="card-text">
				      Some quick example text to build on the card title and make up the bulk of the card's content.
				    </p>
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
</style>