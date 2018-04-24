<template>
	<div class="section blog-section" id="blog">
		<div class="container">
			<h1 class="section-title is-center">
				Blog
			</h1>
			<div class="divider"></div>

			<div class="row news-section">
				<div class="col-6">
					<div class="news-block">
						<img src="http://via.placeholder.com/150x94" alt="" class="picture">
						<div class="news-info">
							<h1 class="news-title">Alehub IOS application beta 1</h1>
							<i class="news-date">Feb 11, 2018</i>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="news-block">
						<img src="http://via.placeholder.com/150x94" alt="" class="picture">
						<div class="news-info">
							<h1 class="news-title">How to invest in an ICO</h1>
							<i class="news-date">Feb 17, 2018</i>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="news-block">
						<img src="http://via.placeholder.com/150x94" alt="" class="picture">
						<div class="news-info">
							<h1 class="news-title">Push into billion-dollar Southeast Asian token markets</h1>
							<i class="news-date">Feb 23, 2018</i>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="news-block">
						<img src="http://via.placeholder.com/150x94" alt="" class="picture">
						<div class="news-info">
							<h1 class="news-title">Alehub iOS application beta 2</h1>
							<i class="news-date">Apr 12, 2018</i>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="news-block">
						<img src="http://via.placeholder.com/150x94" alt="" class="picture">
						<div class="news-info">
							<h1 class="news-title">Alehub Desktop application release</h1>
							<i class="news-date">Apr 12, 2018</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>    
</template>

<script>
    export default {
        name: "Blog"
    }
</script>

<style>
	.blog-section {
		background-color: #ffffff;
	}
</style>

<style lang="stylus" scoped>
	.section
		padding 71px 0
		padding-bottom 130px

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

		.news-block
			width 100%
			height 94px
			margin 32px 16px
			display flex
			justify-content flex-start

			.news-info
				margin 4px 16px

				.news-title
					font-family MuseoSansCyrl300
					font-size 22px
					font-weight 500
					font-style normal
					font-stretch normal
					line-height 1.33
					letter-spacing normal
					color #34343e

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