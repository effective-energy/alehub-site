<template>
	<b-jumbotron class="solutions">
		<b-container>
			<b-row>
				<b-col md="12">
					<h1 class="title">Suggested solutions</h1>
				</b-col>

				<b-col md="4">
					<div class="solution-item">
						<img src="http://via.placeholder.com/64x45" alt="" />
						<span class="text">Consensus of trust of the  parties through BlockChain, backed by financial guarentees.</span>
					</div>
				</b-col>

				<b-col md="4">
					<div class="solution-item">
						<img src="http://via.placeholder.com/47x41" alt="" />
						<span class="text">Unification and maximum automation of participant verification processes.</span>
					</div>
				</b-col>

				<b-col md="4">
					<div class="solution-item">
						<img src="http://via.placeholder.com/43x37" alt="" />
						<span class="text">Capitalization of settlement means, control and management of exprenses.</span>
					</div>
				</b-col>

				<b-col md="4">
					<div class="solution-item">
						<img src="http://via.placeholder.com/51x43" alt="" />
						<span class="text">Automatism of the mechanisms of mutual settlements of the parties to the contract.</span>
					</div>
				</b-col>

				<b-col md="4">
					<div class="solution-item">
						<img src="http://via.placeholder.com/46x43" alt="" />
						<span class="text">Widely authoritative verification agents.</span>
					</div>
				</b-col>

				<b-col md="4">
					<div class="solution-item">
						<img src="http://via.placeholder.com/39x50" alt="" />
						<span class="text">Security of own operating environment.</span>
					</div>
				</b-col>

			</b-row>
		</b-container>
	</b-jumbotron>
</template>

<script>
	export default {
		name: 'Solutions'
	}
</script>

<style lang="stylus" scoped>
	.solutions
		background-color #fbfbfc
		margin-top 60px
		box-shadow 0px 15px 5em 0px rgba(0,0,0,.3)
		margin-bottom 0

		.title
			padding-bottom 30px
			font-size 60px
			font-weight 400
			color #0F1118


	.solution-item
		display flex
		margin-bottom 4em

		img
			align-self center

		.text
			margin-left 25px

</style>