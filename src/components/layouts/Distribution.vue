<template>
	<b-jumbotron class="distribution">
		<b-container>
			<b-row>
				<b-col md="12">
					<h1 class="title">
						Distribution of tokens
					</h1>
				</b-col>

				<b-col lg="4" md="7">
					<div class="chart">
						<img src="../../assets/img/hueta.png" alt="" />
						<div class="stats">
							<span class="count">77%</span>
							<div class="separator"></div>
							<span class="type">ICO</span>
						</div>
					</div>
				</b-col>

				<b-col lg="3" md="5" class="legend">
					<b-list-group class="distribution-list">
					  <b-list-group-item>
					    <div class="badge badge-darkblue"></div>
					    Sale for ICO
					  </b-list-group-item>
					  <b-list-group-item>
					  	<div class="badge badge-green"></div>
					    Team
					  </b-list-group-item>
					  <b-list-group-item>
					  	<div class="badge badge-lightblue"></div>
					    Reserve, referall program, adviser
					  </b-list-group-item>
					  <b-list-group-item>
					  	<div class="badge badge-yellow"></div>
					    Bounty
					  </b-list-group-item>
					</b-list-group>
				</b-col>

				<b-col lg="5" md="12" class="description">
					<p>The ALE product is primarily a service for consumers to find counterparties for projects in the IT field and to manage these projects at the management and financial level. On the one hand, they are programmers or their associations, and on the other hand, they are IT Customers.</p>

					<b-button variant="outline-warning">
		                Buy tokens
		            </b-button>
				</b-col>

			</b-row>
	    </b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Distribution'
	}
</script>

<style lang="stylus" scoped>
	.distribution
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
				font-size 16px
				letter-spacing 0.4px
				line-height 22px

		.chart
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

	@media(max-width: 991px)
		.distribution
			.description
				margin-top 40px

			.legend
				align-self center

	@media(max-width: 425px)
		.distribution
			.title
				font-size 36px
				padding-bottom 20px

			.legend
				margin-top 20px

	@media(max-width: 375px)
		.distribution
			.description
				button
					width 100%
</style>