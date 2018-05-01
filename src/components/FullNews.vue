<template>
	<div class="section section-full-news">
		<Header :show="'blog'" />
		<div class="container container-news" v-if="content">
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
				<h1 class="title">{{ content.title }}</h1>
				<div class="news-info">
					<img :src="`https://alehub.eu-4.evennode.com/${content.author_image}`" alt="" class="news-author-image" />
					<div class="info">
						<span class="datetime">{{ content.date/1000 | moment("HH:mm dddd, MMMM DD, YYYY") }}</span>
						<span class="author-name">{{ content.author_name }}</span>
					</div>
				</div>
				<div class="picture-block">
					<img :src="`https://alehub.eu-4.evennode.com/${content.preview_image}`" alt="" class="image" />
					<p class="resource-image" v-if="false">Resource: <a href="https://unsplash.com">unsplash.com</a></p>
				</div>
				<div class="news-content" v-html="content.content">

				</div>

				<div class="more-news" v-if="more">
					<h1 class="more-news-title">More news</h1>

					<div class="more-news-content">
						<div class="news-item" v-for="item in more" :key="item._id">
							<img :src="`https://alehub.eu-4.evennode.com/${item.preview_image}`" alt="" />
							<router-link tag="a" :to="`./${item._id}`" class="news-link">
                                {{ item.title }}
                            </router-link>
							<i class="date">{{ item.date/1000 | moment("ddd  DD, YYYY") }}</i>
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
		},
		data () {
			return {
				content: '',
				more: ''
			}
		},
		watch: {
			'$route' () {
				this.getNews();
			}
		},
		methods: {
			getNews: function () {
				this.$http.get(`https://alehub.eu-4.evennode.com/ale-news/${this.$route.params.id}`).then(response => {
					this.content = response.body;
				}, response => {
					console.log('Error getting news', response);
				});
			},
			getLastNews: function () {
				this.$http.get(`https://alehub.eu-4.evennode.com/ale-news/last/4`).then(response => {
					this.more = response.body;
				}, response => {
					console.log('Error getting news', response);
				});
			}
		},
		created () {
			this.getNews();
			this.getLastNews();
		}
    }
</script>

<style lang="stylus">
	body
		background-color #fff !important

	blockquote
		padding 14px 30px
		position relative
		font-family MuseoSansCyrl900
		font-size 32px

		&:before
			content " "
			width 26px
			height 20px
			background-image url('../../static/images/invalid-name.svg')
			position absolute
			top -5px

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
	
	.news-content
		p
			margin 0
</style>


<style lang="stylus" scoped>
	body
		/*padding-top 74px*/
		/*background-color #ffffff !important*/

	.footer
		background-color #e8ebef

	.section-full-news
		padding-top 70px

	.container-news
		display flex
		padding 71px 0
		position relative

		.share-block
			min-width 36px
			height 300px
			position absolute
			left -70px
			top 80px

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

				.image
					width 100%
					height auto
					-o-object-fit contain
					object-fit contain

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

				blockquote
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
						max-width 200px

						img
							width 100%
							height 130px
							-o-object-fit cover
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

	@media(max-width: 1440px)
		.container-news
			max-width 1000px

	@media(max-width: 1200px)
		.container-news
			max-width 700px

	@media(max-width: 1024px)
		.container-news
			max-width 600px

			.news-block
				.title
					font-size 40px

				.news-content
					.quote-block
						.title
							font-size 24px

	@media(max-width: 860px)
		.container-news
			max-width 500px

			.news-block
				.title
					font-size 34px

				.news-content
					.quote-block
						.title
							font-size 20px

				.more-news
					.more-news-title
						font-size 20px

					.more-news-content
						flex-wrap wrap
						.news-item
							margin 0
							width 48%

							.news-link
								font-size 18px


	@media(max-width: 700px)
		.container-news
			padding-right 32px
			padding-left 32px
			max-width unset

			.share-block
				display flex
				top 48px
				left -10px
				padding-left 32px
				height 50px

			.news-block
				margin-top 24px

				.title
					font-size 30px

				.news-info
					margin-bottom 12px

					.info
						span
							font-size 14px

				.news-content
					p, i, b
						font-size 16px

				.more-news
					.more-news-title
						font-size 18px

					.more-news-content
						.news-item
							margin-bottom 24px

							.news-link
								font-size 14px

	@media(max-width: 425px)
		.container-news
			.news-block
				.title
					font-size 24px
					margin-bottom 12px

				.picture-block
					.image
						height 300px

	@media(max-width: 375px)
		.container-news
			.share-block
				width 100%
				justify-content center

			.news-block
				.title
					font-size 20px
					text-align center

				.news-info
					justify-content center

				.news-content
					p
						text-align justify

					.tags-block
						justify-content center

				.more-news
					.more-news-title
						text-align center

	@media(max-width: 320px)
		.container-news
			.news-block
				.title
					font-size 18px

				.news-info
					.info
						span
							font-size 12px

				.more-news
					.more-news-title
						font-size 18px

					.more-news-content
						.news-item
							width 100%
							max-width 260px

							.news-link
								text-align center

							.date
								text-align center

</style>