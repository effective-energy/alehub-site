<template>
	<div class="section blog-section" id="blog">
		<div class="container">
			<h1 class="section-title is-center">
				{{ $t("blog.title") }}
			</h1>
			<div class="divider"></div>

			<div class="row news-section">
				<div class="animate col-md-6 col-sm-12 animate" v-for="(n, i) in news" :key="i">
					<span>
					<router-link  tag="div" :to="`/blog/${n._id}`" class="news-block">

						<router-link :to="`/blog/${n._id}`">
							<img :src="n.preview_image" alt="" class="picture" @click="goToNews(n._id)">
						</router-link>
						<div class="news-info">
                            <p class="news-title">
                                {{ n.title }}
                            </p>
							<i class="news-date">{{ n.date/1000 | moment("ddd  DD, YYYY") }}</i>
						</div>

					</router-link>
					</span>
				</div>
				<div class="col-12 news-button">
					<div class="form-group is-center">
						<h5 v-if="news.length === 0">{{ $t("blog.notFound") }}</h5>
						<router-link v-else tag="a" to="/blog" class="btn btn-warning">
							{{ $t("blog.allPostsBtn") }}
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
		name: "Blog",
		data () {
			return {
				news: []
			}
		},
		watch: {
			'$i18n.locale' () {
				this.getNews();
			}
		},
		methods: {
			getNews: function () {
				this.$http.get(`https://alehub.eu-4.evennode.com/ale-news${this.$i18n.locale === 'en'?'/last/6':'/last/'+this.$i18n.locale+'6'}`, {
                    headers : {
                        'Content-Type' : 'application/json; charset=UTF-8',
                        'Accept' : 'application/json'
                    }
                }).then(response => {
					this.news = response.body.reverse();
				}, response => {
					console.log('Error getting news', response);
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

<style>

	.blog-section {
		background-color: #ffffff;
	}
</style>

<style lang="stylus" scoped>
	@media screen and (max-width: 600px) {
		.news-title {
			font-size 5vw !important
		}
	}
	.section
		padding 71px 0 0 0

	.is-center
		text-align center

	.section-title
		font-family MuseoSansCyrl300
		font-size 3em
		font-weight 300
		font-style normal
		font-stretch normal
		line-height nornal
		letter-spacing normal
		color #34343e
		margin 24px 0

	.divider
		width 120px
		height 2px
		background-color #34343e
		margin-bottom 30px
		margin 0 auto

	.news-section
		padding 72px 0

		.news-button
			padding 72px 0

			.btn-warning
				background-color #ffd24f
				padding 8px 20px
				font-size 14px
				font-weight 700
				color #34343e
				font-family MuseoSansCyrl300
				border 1px solid #ffd24f
				border-radius 3px

				&:active
					border 1px solid #d39e00

				&:focus
					box-shadow none
		//z
	.animate::after
		left 0
		bottom 0
		transition-delay 0.4s

	.animate span::after
		transition-delay 0.2s
		right 0
		bottom 0

	.animate::before
		right 0
		top 0
		transition-delay 0.2s

	.animate span::before
		transition-delay 0s
		left 0
		top 0


	.animate:hover::after
		transition-delay 0s

	.animate:hover span::after
		transition-delay 0.2s

	.animate:hover::before
		transition-delay 0.4s

	.animate:hover span::before
		transition-delay 0.6s

	.animate
		background none
		border none
		color #fff
		cursor pointer

	.animate span
		padding 25px 80px

	.animate::before, .animate::after
		content ""
		width 0
		height 2px
		position absolute
		transition all 0.2s linear
		background #ffd24f


	.animate span::before, .animate span::after
		content ""
		width 2px
		height 0
		position: absolute
		transition all 0.2s linear
		background #ffd24f

	.animate:hover::before, .animate:hover::after
		width 100%

	.animate:hover span::before, .animate:hover span::after
		height: 100%

		/*z*/



		.news-block
			width 100%
			height 94px
			margin 32px 16px
			display flex
			justify-content flex-start
			transition 2s


			@media (max-width 320px)
				flex-direction column

			.picture
				max-width 150px
				height 100%
				width 150px
				-o-object-fit cover
				object-fit cover

				@media (max-width 320px)
					max-width 85%
					width 85%

			.news-info
				margin 4px 16px
				display flex
				flex-direction column

				.news-title
					font-family MuseoSansCyrl300
					font-size 22px
					font-weight 500
					font-style normal
					font-stretch normal
					line-height 1.33
					letter-spacing normal
					color #34343e
					margin-bottom 8px
					text-decoration: none;

					@media (max-width 320px)
						font-size 16px !important

				.news-date
					font-family MuseoSansCyrl300
					font-size 18px
					font-weight 300
					font-style normal
					font-stretch normal
					line-height normal
					letter-spacing normal
					text-align left
					color #34343e

					@media (max-width 320px)
						font-size 14px !important
						color #ccc
</style>