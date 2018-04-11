<template>
	<div class="partners">
		<b-row>
			<b-col md="4">
				<p>Our partners:</p>
			</b-col>

			<b-col md="2">
				<div class="partner">
					<img src="https://alehub.eu-4.evennode.com/ale-files/img/partners/itmo.png" alt="">
				</div>
			</b-col>
			<b-col md="2">
				<div class="partner">
					<img src="https://alehub.eu-4.evennode.com/ale-files/img/partners/cryptob2b.png" alt="">
				</div>
			</b-col>
			<b-col md="2">
				<div class="partner">
					<img src="https://alehub.eu-4.evennode.com/ale-files/img/partners/blockchain-spb.png" alt="">
				</div>
			</b-col>
			<b-col md="2">
				<div class="partner">
					<img src="https://alehub.eu-4.evennode.com/ale-files/img/partners/serokell.svg" alt="">
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
	.partner
		img
			width 100%
</style>