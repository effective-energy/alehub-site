<template>
	<b-jumbotron class="distribution">
		<b-container>
			<b-row>
				<b-col md="12">
					<h1 class="title">
						Distribution of tokens
					</h1>
				</b-col>

				<b-col md="4">
					<div class="hueta">
						<img src="../../assets/img/hueta.png" alt="" />
						<div class="stats">
							<span class="count">77%</span>
							<div class="separator"></div>
							<span class="type">ICO</span>
						</div>
					</div>
				</b-col>

				<b-col md="3">
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

				<b-col md="5" class="description">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam temporibus id voluptas impedit officia, commodi saepe eius doloribus, magni ducimus culpa qui! Officia delectus id consequatur, repudiandae ab hic illum!</p>

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