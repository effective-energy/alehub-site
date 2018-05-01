<template>
    <div id="app">
        <!--<loading-screen />-->
        <!--<loading-screen v-if="isLoading" />-->
        <!--<router-view v-if="isShow" />-->
        <router-view />
    </div>
</template>

<script>
    import LoadingScreen from './components/LoadingScreen';

    export default {
        name: 'app',
        components: {
            LoadingScreen
        },
        data() {
            return {
                isLoading: true,
                isShow: false,
                loadingTimer: 0
            }
        },
        created() {

        },
        mounted() {
            this.$on('isShow', (val) => {
                console.log('content');
                this.isShow = val;
            });

            this.$on('endOfLoadingWideScreen', (val) => {
                console.log('preloader');
                this.isLoading = !val;
            });

            this.$on('endOfLoadingNarrowScreen', (val) => {
                this.isLoading = !val;
            });
        }
    }
</script>

<style lang="stylus">
    body
        background-color #ededf1

    [v-cloak]
        display none

</style>