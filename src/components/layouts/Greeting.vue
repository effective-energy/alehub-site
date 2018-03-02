<template>
	<section class="greeting" id="greeting">
		<div v-if="!loader" class="b-grid__list">
			<div class="b-grid__item b-grid__item--1-1">
				<h3 class="welcome">{{ content?content.title:'' }}</h3>
				<!-- <h1 class="starting">Ico starts in</h1>
				<Countdown deadline="Feb 15, 2018" /> -->
				<h1 class="starting">ICO SOON</h1>
			</div>
		</div>
		<spinner v-if="loader" class="center-loader"/>
	</section>
</template>

<script>
import Countdown from 'vuejs-countdown';
import Spinner from '../layouts/Spinner'

export default {
	name: 'Greeting',
	props: ['content', 'loader'],
	components: {
		Countdown,
		Spinner
	}
}
</script>

<style lang="stylus">
	.center-loader
		position absolute
		top 50%
		left 50%
</style>