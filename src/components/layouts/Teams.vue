<template>
	<section class="teams wrapper">
		<div class="b-grid__list">
			<div class="b-grid__item b-grid__item--1-1">
				<div class="serokell">
					<h1 class="title">{{ content.partners.title }}</h1>
				  <img src="https://serokell.io/images/logo-white.svg" alt="">
				</div>

				<h1 class="title" v-if="content">{{ content.participants.title }}</h1>

				<div class="team-list">
					<div class="item" v-if="content" v-for="(item, indexMember) in content.participants.members" :key="indexMember">
						<img :src="$host + '/ale-files/'+item.image" style="border-radius: 100%;" width="300" height="300" />
						<h1>{{ item.name }}</h1>
						<h3>{{ item.position }}</h3>
					</div>
				</div>

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