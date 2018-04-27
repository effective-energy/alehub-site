<template>
	<div class="footer">
		<div class="row footer-row">
			<div class="col-5 copyright-block">
				<div class="ale-logo"></div>
				<span class="copyright-text">
				Effective Energy LLC © 2018 All rights reserved.
				<div class="creator-and-terms">
					<div class="creator">
						<div class="rukin-logo"></div>
						<span class="rukin-about">Design by Alexander Rukin and ledesign</span>
					</div>
					<a href="#" class="terms">Terms and conditions</a>
				</div>
			</span>
			</div>
			<div class="col-2 back-to-top">
				<div class="top-icon" v-scroll-to="'#home'"></div>
			</div>
			<div class="col-5 social-block">
				<div class="social-networks">
					<a href="#" class="social-item" target="_blank">
						<i class="social-icon social-icon-fb"></i>
					</a>
					<a href="#" class="social-item" target="_blank">
						<i class="social-icon social-icon-insta"></i>
					</a>
					<a href="#" class="social-item" target="_blank">
						<i class="social-icon social-icon-youtube"></i>
					</a>
					<a href="#" class="social-item" target="_blank">
						<i class="social-icon social-icon-twitter"></i>
					</a>
					<a href="#" class="social-item" target="_blank">
						<i class="social-icon social-icon-tg"></i>
					</a>
					<a href="#" class="social-item" target="_blank">
						<i class="social-icon social-icon-vk"></i>
					</a>
				</div>
				<div class="subscribe-form">
					<input style="font-weight: 700;" type="text" placeholder="Your e-mail address" />
					<button style="font-weight: 700;">Subscribe to news</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="stylus" scoped>
	.footer
		padding 32px 0
		padding-left 64px
		padding-right 64px

		.footer-row
			display flex
			align-items center

		.back-to-top
			cursor pointer
			display flex
			justify-content center

		.social-block
			display flex
			flex-direction column

			.subscribe-form
				display flex
				justify-content flex-end

				button
					background-color #ffd24f
					font-family MuseoSansCyrl300
					font-size 16px
					font-weight 500
					font-style normal
					font-stretch normal
					line-height normal
					letter-spacing normal
					color #34343e
					padding 6px 20px
					margin-left 12px
					border 1px solid #ffd24f
					border-radius 3px
					white-space nowrap

				input
					background none
					opacity 0.4
					border-radius 3px
					border solid 0.5px rgba(13, 23, 23, 0.4)
					font-family MuseoSansCyrl300
					font-size 16px
					color #34343e
					padding 5px 14px

			.social-networks
				display flex
				margin-bottom 10px
				justify-content flex-end

				.social-item
					width 36px
					height 36px
					margin 0 6px
					display flex
					justify-content center
					align-items center

					.social-icon
						background-repeat no-repeat
						background-size contain

					.social-icon-fb
						width 8.4px
						height 16.8px
						background-image url('../../../static/images/social/fb.svg')

					.social-icon-insta
						width 16.08px
						height 16.08px
						background-image url('../../../static/images/social/instagram.svg')

					.social-icon-youtube
						width 19.2px
						height 13.68px
						background-image url('../../../static/images/social/yt.svg')

					.social-icon-twitter
						width 16.8px
						height 14.4px
						background-image url('../../../static/images/social/twitter.svg')

					.social-icon-tg
						width 16.8px
						height 14.4px
						background-image url('../../../static/images/social/tg.svg')

					.social-icon-vk
						width 19.2px
						height 10.8px
						background-image url('../../../static/images/social/vk.svg')

		.copyright-block
			.ale-logo
				width 127px
				height 40px
				background-image url('../../../static/images/alehub-logo.svg')
				background-repeat no-repeat
				background-size contain
				margin-bottom 16px

			.copyright-text
				opacity 0.4
				font-family MuseoSansCyrl500
				font-size 14px
				font-weight 500
				font-style normal
				line-height 1.57
				letter-spacing normal
				color #34343e

			.creator-and-terms
				display flex
				flex-direction row

				.creator
					display flex
					align-items center

					.rukin-logo
						width 20px
						height 12px
						background-image url('../../../static/images/ar-logo.svg')
						background-size cover
						margin-right 8px

					.rukin-about
						opacity 0.4
						font-family MuseoSansCyrl500
						font-size 14px
						font-weight 500
						font-style normal
						line-height 1.57
						letter-spacing normal
						color #34343e

				.terms
					margin-left 12px
					opacity 0.4
					font-family MuseoSansCyrl500
					font-size 14px
					font-weight 500
					font-style normal
					line-height 1.57
					letter-spacing normal
					color #34343e
					text-decoration underline
					white-space nowrap

		.top-icon
			width 32px
			height 8px
			background-image url('../../../static/images/go-home-ic.svg')

	@media(max-width: 1199px)
		.footer
			.back-to-top
				min-width 100px
				align-self stretch

			.footer-row
				align-items flex-end

			.copyright-block
				.copyright-text
					white-space nowrap
					
				.creator-and-terms
					.creator
						white-space nowrap

	@media(max-width: 1023px)
		.footer
			.copyright-block
				.creator-and-terms
					flex-direction column
					align-items flex-start

					.terms
						margin-left 0

			.social-block
				align-items flex-end

				.subscribe-form
					flex-direction column
					align-items flex-end
					width 100%
					max-width 280px

					input
						margin-bottom 8px
						width 100%

					button 
						margin-left 0
						width 100%


	@media(max-width: 768px)
		.footer
			padding-right 32px
			padding-left 32px

	@media(max-width: 760px)
		.footer
			.footer-row
				flex-direction column
				align-items center

				.copyright-block
					order 3
					
					.ale-logo
						margin 0 auto
						margin-bottom 12px

					&.col-5
						max-width 100%
						display flex
						flex-direction column
						align-items center

					.creator-and-terms
						align-items center

				.back-to-top
					order 1
					align-self center
					margin-bottom 24px

				.social-block
					order 2
					margin-bottom 24px

					&.col-5
						max-width 100%
						display flex
						flex-direction column
						align-items center

					.social-networks
						width 280px

						.social-item
							&:last-child
								margin-right 0

</style>
			