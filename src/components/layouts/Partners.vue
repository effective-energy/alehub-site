<template>
	<div class="partners">
		<b-row>
			<b-col md="4">
				<p class="title">Our partners:</p>
			</b-col>

			<b-col md="2">
				<div class="partner">
					<img src="../../assets/img/partners/serokell.png" alt="Serokell" />
				</div>
			</b-col>
			<b-col md="2">
				<div class="partner">
					<img src="../../assets/img/partners/itmo.png" alt="Itmo" />
				</div>
			</b-col>
			<b-col md="2">
				<div class="partner">
					<img src="../../assets/img/partners/cryptob2b.png" alt="Cryptob2b" />
				</div>
			</b-col>
			<b-col md="2">
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

</style>