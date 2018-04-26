<template>
	<div class="partners">
		<b-row>
			<b-col md="4">
				<p class="title">Our partners:</p>
			</b-col>

			<b-col md="2" sm="6">
				<div class="partner">
					<img src="../../assets/img/partners/serokell.png" alt="Serokell" />
				</div>
			</b-col>
			<b-col md="2" sm="6">
				<div class="partner">
					<img src="../../assets/img/partners/itmo.png" alt="Itmo" />
				</div>
			</b-col>
			<b-col md="2" sm="6">
				<div class="partner">
					<img src="../../assets/img/partners/cryptob2b.png" alt="Cryptob2b" />
				</div>
			</b-col>
			<b-col md="2" sm="6">
				<div class="partner">
					<img src="../../assets/img/partners/blockchain-spb.png" alt="Blockchain SPb" />
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	export default {
		name: 'Partners'
	}
</script>

<style lang="stylus" scoped>
	.partners
		padding 4em 2em

		.title
			font-size 20px
			margin 0
			color #0F1118

		img
			width 100%
			height 68px
			object-fit scale-down

		.row
			display flex
			align-items center

	@media(max-width: 767px)
		.partners
			.row
				.partner
					padding-bottom 15px

	@media(max-width: 375px)
		.partners
			padding 4em 2em 2em

	@media(max-width: 320px)
		.partners
			padding-top 2em

</style>