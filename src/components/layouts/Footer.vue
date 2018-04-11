<template>
	<footer>
		<b-container>
			<b-row>
				<b-col md="6">
					<div class="info">
						<div class="logo"></div>
						<p>Effective Energy LLC © 2018 All rights reserved.</p>
						<a href="#">Terms and conditions</a>
					</div>
				</b-col>
				<b-col md="6">2</b-col>
			</b-row>
		</b-container>
	</footer>
</template>

<script>
	export default {
		name: 'Footer'
	}
</script>

<style lang="stylus" scoped>
	footer
		padding 3em 0
		.info
			.logo
				background-image url('../../assets/img/logo.png')
				width 167px
				height 28px
				background-size contain
</style>