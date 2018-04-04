<template>
	<section class="teams wrapper" id="teams">
		<div class="b-grid__list">
			<div class="b-grid__item b-grid__item--1-1 team_grid">

				<h1 class="title" v-if="content">{{ content.partners.title }}</h1>

				<div class="b-grid__list">
					<div class="b-grid__item b-grid__item--1-3 team-list" v-for="(item, indexMember) in content.partners.members" :key="indexMember">
						<div class="team-row">
							<div class="team-info">
								<div class="avatar">
									<img :src="$host + '/ale-files/img/team/'+item.image" alt="">
								</div>
								<div class="info">
									<h1>{{ item.name }}</h1>
									<p>{{ item.position }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>


				<h1 class="title" v-if="content">{{ content.participants.title }}</h1>


				<div class="b-grid__list">
					<div class="b-grid__item b-grid__item--1-3 team-list" v-for="(item, indexMember) in content.participants.members" :key="indexMember">
						<div class="team-row">
							<div class="team-info">
								<div class="avatar">
									<img :src="$host + '/ale-files/img/team/'+item.image" alt="">
								</div>
								<div class="info">
									<h1>{{ item.name }}</h1>
									<p>{{ item.position }}</p>
								</div>
							</div>
							<div class="team-links" v-if="item.social !== undefined">
								<div class="social-item" v-for="soc in item.social">
									<a :href="parseLink(soc.type, soc.nickName)" target="_blank">
										<i class="fa" :class="'fa-'+soc.type"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Teams',
	props: ['content'],
	methods: {
		parseLink (social, nickName) {
			let foundedSocial = '';
			switch (social) {
			  case 'github':
			    foundedSocial = 'https://github.com/'
			    break;
			  case 'telegram':
			    foundedSocial = 'https://t.me/'
			    break;
			  case 'vk':
			    foundedSocial = 'https://vk.com/'
			    break;
			  case 'linkedin':
			    foundedSocial = 'https://linkedin.com/in/'
			    break;
			  case 'linkedin':
			    foundedSocial = 'https://facebook.com/'
			    break;
			  default:
			    foundedSocial = ''
			}
			return foundedSocial+''+nickName;
		}
	}
}
</script>

<style scoped lang="stylus">
	.serokell_logo
		margin 0 auto 40px
	#teams
		text-align center
		padding-top 0em
		.title
			margin-top 50px
	.team_grid
		padding 0
	.b-grid__item--1-3
		padding 7.5px
	.team-list
		border-radius 4px
		margin-top 0px

		.team-row
			background black
			padding-top 35px
			padding-left 0
			border-radius 4px
			width 100%

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
					padding 0 30px
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
						font-size 16px

			.team-links
				width 100%
				display flex
				align-items center
				justify-content center
				margin -10px 0
				padding-bottom 20px

				.social-item
					width 30px
					height 30px
					margin 0px 10px
					border-radius 4px
					margin-left 0
					font-size 24px
					color #fff

					a
						color #fff
						text-decoration none

					&:first-child
						margin-left 0

					&:hover
						cursor pointer

	.teams
		.b-grid__list
			.b-grid__item
				.title
					margin -35px 0 35px
	
	@media screen and (max-width: 1024px)
		.b-grid__item
			padding 0 0 15px 0
		.team-list
			&:nth-child(odd)
				padding 0 7.5px 15px 15px
			&:nth-child(even)
				padding 0 15px 15px 7.5px
		.teams
			.b-grid__list
				.b-grid__item
					.title
						margin -60px 0 25px

	@media screen and (max-width: 760px)
		.b-grid__item
			padding 0 0 15px 0
		.team-list
			&:nth-child(odd)
				padding 0 15px 15px 15px
			&:nth-child(even)
				padding 0 15px 15px 15px
		.teams
			.b-grid__list
				.b-grid__item
					.title
						margin 25px 0
		.serokell_logo
			margin-top 35px
</style>