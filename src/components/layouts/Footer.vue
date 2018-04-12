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
				<b-col md="6">
					<div class="actions">
						<div class="social-icons">
							<div class="icon-item">
								<a href="#">
									<img src="../../assets/img/social/telegram.svg" alt="" />
								</a>
							</div>
							<div class="icon-item">
								<a href="#">
									<img src="../../assets/img/social/facebook.svg" alt="" />
								</a>
							</div>
							<div class="icon-item">
								<a href="#">
									<img src="../../assets/img/social/twitter.svg" alt="" />
								</a>
							</div>
							<div class="icon-item">
								<a href="#">
									<img src="../../assets/img/social/vk.svg" alt="" />
								</a>
							</div>
							<div class="icon-item">
								<a href="#">
									<img src="../../assets/img/social/reddit.svg" alt="" />
								</a>
							</div>
						</div>
						<div class="subscribe">
							<b-btn variant="outline-secondary">Subscribe to news</b-btn>
						</div>
					</div>
					<ul class="menu">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Description</a>
						</li>
						<li>
							<a href="#">Advantages</a>
						</li>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">Bounty</a>
						</li>
						<li>
							<a href="#">Team</a>
						</li>
						<li>
							<a href="#">News</a>
						</li>
					</ul>
				</b-col>
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

			p
				margin-top 1.5em
				margin-bottom 0
				color #96969F
				font-size 12px

			a
				margin-top 0.5em
				margin-bottom 0
				color #96969F
				font-size 12px
				text-decoration underline

		.menu
			list-style none
			display flex
			justify-content space-between
			padding-left 0

			li
				font-size 14px
				letter-spacing 0.6px

				a
					color #96969F

		.actions
			display flex
			justify-content space-between
			margin-bottom 20px

			.social-icons
				display flex
				justify-content space-between

				.icon-item
					width 40px
					height 40px
					margin 0 10px
					display flex
					justify-content center
					align-items center

					a
						img
							width 50%

				.icon-item:first-child
					margin-left 0

				.icon-item:last-child
					margin-right 0
</style>