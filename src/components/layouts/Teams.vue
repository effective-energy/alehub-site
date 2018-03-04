<template>
	<section class="teams wrapper">
		<div class="b-grid__list">
			<div class="b-grid__item b-grid__item--1-1">
				<div class="serokell" v-if="false">
					<h1 class="title">{{ content.partners.title }}</h1>
				  <img src="https://serokell.io/images/logo-white.svg" alt="">
				</div>

				<h1 class="title" v-if="content">{{ content.participants.title }}</h1>
				<br /><br />


				<div class="b-grid__list">
					<div class="b-grid__item b-grid__item--1-3 team-list" v-if="content" v-for="(item, indexMember) in content.participants.members" :key="indexMember">
						<div class="team-row">
							<div class="team-info">
								<div class="avatar">
									<img :src="$host + '/ale-files/'+item.image" alt="">
								</div>
								<div class="info">
									<h1>{{ item.name }}</h1>
									<p>{{ item.position }}</p>
								</div>
							</div>
							<div class="team-links" v-if="false">
								<div class="social-item">
									<i class="fa fa-vk"></i>
								</div>
								<div class="social-item">
									<i class="fa fa-github"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- <div class="team-list">
					<div class="item" v-if="content" v-for="(item, indexMember) in content.participants.members" :key="indexMember">
						<img :src="$host + '/ale-files/'+item.image" style="border-radius: 100%;" width="300" height="300" />
						<h1>{{ item.name }}</h1>
						<h3>{{ item.position }}</h3>
					</div>
				</div> -->

			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Teams',
	props: ['content']
}
</script>

<style scoped lang="stylus">
	.team-list
		border-radius 4px
		margin-top 0px

		.team-row
			background black
			padding-top 35px
			padding-left 0
			border-radius 4px

			.team-info
				display flex
				flex-direction column
				margin-bottom 30px

				.avatar
					margin-bottom 10px

					img
						width 80%
						border-radius 50%

				.info
					h1
						color #fff
						font-size 28px
						line-height 32px
						margin-bottom 0px
						margin-top 20px

					p
						color #fff
						margin 0px
						margin-top 5px

			.team-links
				width 100%
				display flex
				align-items center
				justify-content center
				margin -10px 0

				.social-item
					width 30px
					height 30px
					margin 0px 10px
					border-radius 4px
					margin-left 0
					font-size 24px
					color #fff

					&:first-child
						margin-left 0

					&:hover {
						cursor: pointer;
					}
</style>