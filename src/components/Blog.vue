<template>
	<div class="section blog-section" id="blog">
		<div class="container">
			<h1 class="section-title is-center">
				{{ $t("blog.title") }}
			</h1>
			<div class="divider"></div>

			<div class="row news-section">
				<div class="col-md-6 col-sm-12" v-for="(n, i) in news" :key="i">
					<div class="news-block">
						<img :src="'https://alehub.eu-4.evennode.com/'+n.preview_image" alt="" class="picture">
						<div class="news-info">
                            <router-link tag="a" :to="`/blog/${n._id}`" class="news-title">
                                {{ n.title }}
                            </router-link>
							<i class="news-date">{{ n.date/1000 | moment("ddd  DD, YYYY") }}</i>
						</div>
					</div>
				</div>
				<div class="col-12 news-button">
					<div class="form-group is-center">
						<router-link tag="a" to="/blog" class="btn btn-warning">
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
		methods: {
			getNews: function () {
				this.$http.get('https://alehub.eu-4.evennode.com/ale-news').then(response => {
					this.news = response.body.reverse();
				}, response => {
					console.log('Error getting news', response);
				});
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
				padding 10px 28px
				font-size 18px
				color #34343e
				font-family MuseoSansCyrl300

		.news-block
			width 100%
			height 94px
			margin 32px 16px
			display flex
			justify-content flex-start

			.picture
				max-width 150px
				width 150px
				-o-object-fit cover
				object-fit cover

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
</style>