<template>
	<div class="section section-full-news">
		<Header />
		<div class="container container-news">
			<div class="share-block">
				<div class="share-item">
					<div class="icon-twitter"></div>
				</div>
				<div class="share-item">
					<div class="icon-facebook"></div>
				</div>
				<div class="share-item">
					<div class="icon-googleplus"></div>
				</div>
				<div class="share-item">
					<div class="icon-vkontakte"></div>
				</div>
				<div class="share-item">
					<div class="icon-telegram"></div>
				</div>
				<div class="share-item">
					<div class="icon-email"></div>
				</div>
			</div>
			<div class="news-block">
				<h1 class="title">Alehub iOS application beta 1.  <br /> Two line title.</h1>
				<div class="news-info">
					<img src="http://via.placeholder.com/36x36" alt="" class="news-author-image" />
					<div class="info">
						<span class="datetime">12:20 Friday, February 23, 2018</span>
						<span class="author-name">Storyteller – Alexander Voroncov</span>
					</div>
				</div>
				<div class="picture-block">
					<img src="https://images.unsplash.com/photo-1519895173443-d259e1fc4962?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b751cf508d1137fd7c06736b0811897&auto=format&fit=crop&w=2022&q=80" alt="" class="image" />
					<p class="resource-image">Resource: <a href="https://unsplash.com">unsplash.com</a></p>
				</div>
				<div class="news-content">
					<p>
						This is the week MCU fans everywhere have been eagerly awaiting, as Marvel Studios’ “Avengers: Infinity War” is released worldwide on Friday, April 27. Of course, everyone won’t be able to see the movie at the exact time, and with some audiences beginning to see the film before others, the filmmakers and cast of “Infinity War” have a special message.
					</p>
					<p>And one more line.</p>

					<div class="quote-block">
						<div class="quote"></div>
						<h1 class="title">I feel the POWER!</h1>
						<p class="subtitle">— commented CEO of ALEHUB</p>
					</div>

					<p>
						<i>Kind of interview:</i>
					</p>
					<p>
						<b>Is your system best in the world?</b>
					</p>
					<p>Yes, it is.</p>

					<div class="tags-block">
						<div class="tag-item">
							<span>Alehub</span>
						</div>
						<div class="tag-item">
							<span>crypto</span>
						</div>
						<div class="tag-item">
							<span>cool thing</span>
						</div>
					</div>

				</div>

				<div class="more-news">
					<h1 class="more-news-title">More news</h1>

					<div class="more-news-content">
						<div class="news-item">
							<img src="../../static/images/news-pictures/news.png" alt="" />
							<a href="#" class="news-link">Alehub IOS application beta 1</a>
							<i class="date">Feb 11, 2018</i>
						</div>

						<div class="news-item">
							<img src="../../static/images/news-pictures/news.jpg" alt="" />
							<a href="#" class="news-link">How to invest in an ICO</a>
							<i class="date">Feb 11, 2018</i>
						</div>

						<div class="news-item">
							<img src="../../static/images/news-pictures/news2.jpg" alt="" />
							<a href="#" class="news-link">Push into billion-dollar Southeast Asian token markets</a>
							<i class="date">Feb 11, 2018</i>
						</div>

						<div class="news-item">
							<img src="../../static/images/news-pictures/news3.jpg" alt="" />
							<a href="#" class="news-link">Alehub iOS application beta 2</a>
							<i class="date">Feb 11, 2018</i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
	import Header from './layouts/Header';
	import Footer from './layouts/Footer';

	export default {
		name: 'FullNews',
		components: {
			Header,
			Footer
		}
	}
</script>

<style lang="stylus">
	body
		padding-top 74px
		background-color #ffffff!important

	.footer
		background-color #e8ebef

	.container-news
		display flex
		padding 71px 0

		.share-block
			min-width 36px
			height 300px

			.share-item
				width 36px
				height 36px
				margin-bottom 8px
				display flex
				justify-content center
				align-items center

				&:last-child
					margin-bottom 0

				.icon-twitter
					width 14px
					height 12px
					background-image url('../../static/images/share-ic/twitter.svg')

				.icon-facebook
					width 7px
					height 14px
					background-image url('../../static/images/share-ic/fb.svg')

				.icon-googleplus
					width 14px
					height 15px
					background-image url('../../static/images/share-ic/g-plus.svg')

				.icon-vkontakte
					width 16px
					height 9px
					background-image url('../../static/images/share-ic/vk.svg')

				.icon-telegram
					width 14px
					height 12px
					background-image url('../../static/images/share-ic/telegram-ic.svg')

				.icon-email
					width 14px
					height 11px
					background-image url('../../static/images/share-ic/mail.svg')


		.news-block
			padding-left 48px

			.title
				font-family MuseoSansCyrl500
				font-size 50px
				font-weight bold
				line-height 1.12
				color #34343e

			.news-info
				display flex
				margin-bottom 18px

				.news-author-image
					width 38px
					height 38px
					border-radius 50%

				.info
					display flex
					flex-direction column
					margin-left 12px

					span
						opacity 0.4
						font-family MuseoSansCyrl500
						font-size 16px
						font-weight 500
						line-height 1.25
						color #34343e

			.picture-block
				margin-bottom 20px
				border-bottom 1px solid rgba(52, 52, 62, 0.2)

				.image
					width 100%
					height 400px
					object-fit cover

				.resource-image
					padding 12px 0
					margin-bottom 0
					opacity 0.4
					font-family MuseoSansCyrl500
					font-size 14px
					font-weight 500
					line-height 1.21
					color #34343e

			.news-content
				border-bottom 1px solid rgba(52, 52, 62, 0.2)
				padding-bottom 16px
				p
					font-family MuseoSansCyrl300
					font-size 18px
					font-weight 300
					line-height 1.22
					color #34343e

				.quote-block
					padding 14px 30px

					.quote
						width 26px
						height 20px
						background-image url('../../static/images/invalid-name.svg')

					.title
						font-family MuseoSansCyrl900
						font-size 32px
						font-weight 900
						line-height 1.22
						color #34343e
						margin-top 4px

					.subtitle
						font-family MuseoSansCyrl300
						font-size 14px
						font-weight 300
						line-height 1.21
						text-align left
						color #34343e

				i
					font-weight 300
					font-style italic
					font-size 18px

				b
					font-family MuseoSansCyrl300
					font-size 18px
					font-weight bold
					color #34343e

				.tags-block
					display flex

					.tag-item
						border-radius 13px
						border solid 1px #34343e
						opacity 0.4
						padding 2px 6px

						span
							font-family MuseoSansCyrl500
							font-size 16px
							font-weight 500
							line-height 1.25
							color #34343e

						&:not(:first-child)
							margin-left 12px

			.more-news
				margin-top 36px

				.more-news-title
					text-transform uppercase
					font-family MuseoSansCyrl500
					font-size 24px
					font-weight bold
					line-height 1.21
					color #34343e
					margin-bottom 16px

				.more-news-content
					display flex
					justify-content space-between

					.news-item
						display flex
						flex-direction column
						margin 0 10px
						width 25%

						img
							width 100%
							height 130px
							object-fit cover

						.news-link
							font-family MuseoSansCyrl500
							font-size 20px
							font-weight bold
							line-height 1.2
							color #34343e
							text-decoration underline
							margin 8px 0

						.date
							opacity 0.4
							font-family MuseoSansCyrl500
							font-size 14px
							font-weight 500
							line-height 1.21
							color #34343e

					.news-item:first-child
						margin-left 0

					.news-item:last-child
						margin-right 0
</style>