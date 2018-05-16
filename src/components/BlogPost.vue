<template>
	<div class="section section-full-news">
		<header-block :show="'blog'" />
		<div class="container container-news" v-if="content && !isLoader">
			<social-sharing :url="newsUrl" inline-template>
				<div class="share-block">
					<network network="twitter">
						<img src="../../static/images/share-ic/twitter.svg" alt="" class="share-item">
					</network>
					<network network="facebook">
						<img src="../../static/images/share-ic/fb.svg" alt="" class="share-item">
					</network>
					<network network="googleplus">
						<img src="../../static/images/share-ic/g-plus.svg" alt="" class="share-item">
					</network>
					<network network="vk">
						<img src="../../static/images/share-ic/vk.svg" alt="" class="share-item">
					</network>
					<network network="telegram">
        				<img src="../../static/images/share-ic/telegram-ic.svg" alt="" class="share-item">
      				</network>
					<network network="email">
						<img src="../../static/images/share-ic/mail.svg" alt="" class="share-item">
					</network>
				</div>
			</social-sharing>
			<div class="news-block">
				<h1 class="title">{{ content.title }}</h1>
				<div class="news-info">
					<img :src="'https://alehub-4550.nodechef.com/' + content.author_image" alt="" class="news-author-image" />
					<div class="info">
						<span class="datetime">{{ content.date/1000 | moment("HH:mm dddd, MMMM DD, YYYY") }}</span>
						<span class="author-name">{{ content.author_name }}</span>
					</div>
				</div>
				<div class="picture-block">
					<img :src="'https://alehub-4550.nodechef.com/' + content.preview_image" alt="" class="image" />
				</div>
				<div class="news-content" v-html="content.content">

				</div>

				<div class="more-news" v-if="more.length !== 0">
					<h1 class="more-news-title">More news</h1>

					<div class="more-news-content row">
						<div class="news-item col-lg-3 col-md-3 col-sm-6 col-12" v-for="item in more" :key="item._id">
							<router-link tag="a" :to="`./${item._id}`">
                                <img :src="'https://alehub-4550.nodechef.com/' + item.preview_image" alt="" />
                            </router-link>
							<router-link tag="a" :to="`./${item._id}`" class="news-link">
                                {{ item.title }}
                            </router-link>
							<i class="date">{{ item.date/1000 | moment("ddd  DD, YYYY") }}</i>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="spinner" v-if="isLoader">
			<spinner />
		</div>
		<div class="not-found" v-if="isError">
			<p>News not found</p>
		</div>
		<footer-block />
	</div>
</template>

<script>
    import HeaderBlock from './layouts/HeaderBlock';
	import FooterBlock from './layouts/FooterBlock';
	import Spinner from './layouts/Spinner.vue';

    export default {
        name: 'BlogPost',
        components: {
            HeaderBlock,
			FooterBlock,
			Spinner
		},
		data () {
			return {
				content: '',
				more: '',
				isError: false,
				newsUrl: '',
				isLoader: false
			}
		},
		watch: {
			'$route' () {
				this.getNews();
			}
		},
		methods: {
			getNews: function () {
				this.isLoader = true;
				this.content = '';
				this.$http.get(`https://alehub-4550.nodechef.com/ale-news/${this.$route.params.id}`, {
                    headers : {
                        'Content-Type' : 'application/json; charset=UTF-8',
                        'Accept' : 'application/json'
                    }
                }).then(response => {
                	this.newsUrl = 'https://alehub.io/blog/' + this.$route.params.id;
					this.content = response.body[0];
;					document.title = this.content.title;
					return this.getLastNews();
				}, response => {
					this.isError = true;
					this.isLoader = false;
					document.title = 'News Not Found';
				});
			},
			getLastNews: function () {
				this.$http.post(`https://alehub-4550.nodechef.com/ale-news/last/4/`, {
					"withoutNewsId": this.$route.params.id
				}, {
                    headers : {
                        'Content-Type' : 'application/json; charset=UTF-8',
                        'Accept' : 'application/json'
                    }
                }).then(response => {
                	this.isLoader = false;
                	if (response.body.code === 2) {
                		return this.more = [];
                	} else {
                		return this.more = response.body;
                	}
				}, response => {
					this.isError = true;
					this.isLoader = false;
				});
			},
			goToNews: function (id) {
				this.$router.push(`/blog/${id}`)
			}
		},
		created () {
			this.getNews();
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

	.not-found
		display flex
		justify-content center 
		align-items center 
		height calc(100vh - 165px - 74px)

		p
			font-family MuseoSansCyrl300
			font-size 30px

			@media(max-width: 425px)
				font-size 26px
</style>


<style lang="stylus" scoped>
	body
		/*padding-top 74px*/
		/*background-color #ffffff !important*/

	.spinner
		min-height calc(100vh - 165px)
		display flex
		justify-content center

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
			height 240px
			position absolute 
			display flex 
			flex-direction column
			align-items center
			justify-content space-around
			left -70px
			top 80px
			 
			img 
				margin 12px


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
					justify-content flex-start

					.news-item
						display flex
						flex-direction column

						img
							width 100%
							height 130px
							-o-object-fit cover
							object-fit cover
							cursor pointer

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
				flex-direction row
				top 50px
				left -10px
				padding-left 42px
				padding-left 42px
				height 30px
				width 280px
				justify-content space-between


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
						height auto

	@media(max-width: 375px)
		.container-news
			.news-block
				.title
					font-size 20px
					text-align left

				.news-info
					justify-content flex-start

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
						justify-content center

						.news-item
							width 100%
							max-width 260px

							.news-link
								text-align center

							.date
								text-align center

</style>