<template>
	<div class="blog-entries">
		<Header />
		<div class="section blogEntries-section">
			<h1 class="section-title is-center is-divider">Blog</h1>


			<div class="blog-content">
				<div class="date-filter">
					<div class="arrow-next"></div>
					<ul class="filter-list">
						<li class="filter-item">2018</li>
						<ul v-if="false">
							<li>March</li>
							<li class="active">February</li>
							<li>January</li>
						</ul>
						<li class="filter-item">2017</li>
						<li class="filter-item">2016</li>
						<li class="filter-item">2015</li>
					</ul>
					<div class="arrow-prev"></div>
				</div>

				<div class="posts">

					<div class="blog-post">
						<img src="../../static/images/news-pictures/news2.jpg" alt="" class="image-preview" />
						<div class="post-content">
							<a href="#" class="title">
								Push into billion-dollar Southeast Asian token markets. An now we just try to imagine that our news header is three lines ling. This title is so big, that it need to be separated like this example
							</a>
							<div class="post-info">
								<span class="date">February 23. Storyteller - </span>
								<span class="author">Vadim Dudin</span>
							</div>
						</div>
					</div>

					<div class="divider"></div>

					<div class="blog-post">
						<img src="../../static/images/news-pictures/news.jpg" alt="" class="image-preview" />
						<div class="post-content">
							<a href="#" class="title">
								How to invest in an ICO. An now we just try to imagine that this news header is two line long and this link was also already opened
							</a>
							<div class="post-info">
								<span class="date">February 17. Storyteller – </span>
								<span class="author">Alexej Osipenko</span>
							</div>
						</div>
					</div>

					<div class="divider"></div>

					<div class="blog-post">
						<img src="../../static/images/news-pictures/news.png" alt="" class="image-preview" />
						<div class="post-content">
							<a href="#" class="title">
								Alehub iOS application beta 1. Hovered link
							</a>
							<div class="post-info">
								<span class="date">February 11. Storyteller – </span>
								<span class="author">Alexander Voroncov</span>
							</div>
						</div>
					</div>

				</div>

				<div class="tags-filter">
					<ul class="filter-list">
						<li class="filter-item">All</li>
						<li class="filter-item">ALE</li>
						<li class="filter-item">crypta</li>
						<li class="filter-item">cool thing</li>
						<li class="filter-item">meme</li>
						<li class="filter-item">CEO</li>
						<li class="filter-item">hot</li>
						<li class="filter-item">from Dudin</li>
						<li class="filter-item">PVA</li>
						<li class="filter-item">win</li>
					</ul>
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
		name: 'BlogEntries',
		components: {
			Header,
			Footer
		}
	}
</script>

<style>
	body {
		padding-top: 74px;
		background-color: #ffffff!important;
	}
	.footer {
		background-color: #e8ebef;
	}
</style>

<style lang="stylus" scoped>
	.section
		padding 71px 80px

	.is-center
		text-align center

	.blog-content
		max-width 1600px
		margin 0 auto
		display flex
		flex-direction row

		.date-filter
			width 190px
			height auto
			display flex
			justify-content center
			align-items center

			.filter-list
				text-align center
				list-style none
				padding 0

		.tags-filter
			width 190px
			height auto
			display flex
			justify-content center
			align-items center

			.filter-list
				text-align center
				list-style none
				padding 0

				.filter-item
					white-space nowrap

		.posts
			padding-right 77.5px
			padding-left 77.5px

			.divider
				background-color #000000
				height 0.8px
				opacity 0.2

	.is-divider
		width 120px
		border-bottom 2px solid #34343e
		margin 0 auto
		padding 0 0 16px 0

	.blog-post
		width 100%
		height 130px
		margin 49px 0 49px 0
		display flex

		.image-preview
			object-fit cover

		.post-content
			display flex
			flex-direction column
			justify-content center
			padding 0 24px

			.title
				font-family MuseoSansCyrl500
				font-size 22px
				font-weight 500
				line-height 1.45
				color #34343e
				text-decoration underline

				&:hover
					color #f3b300

			.post-info
				margin 12px 0 0 0

				span
					opacity 0.4
					font-family MuseoSansCyrl500
					font-size 16px
					font-weight 500
					line-height 1.25
					text-align left
					color #34343e

	@media(max-width: 1200px)
		.blog-post
			.post-content
				.title
					font-size 16px
</style>