<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
	@media screen and (max-width: 760px) {
		.greeting {
			.welcome {
				font-size: 3em !important;
			}
			.starting {
				font-size: 2em !important;
			}
		}
	}
</style>