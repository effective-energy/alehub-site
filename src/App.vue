<template>
    <div id="app">
        <!--<loading-screen />-->
        <loading-screen v-if="dataProcessing" :data-processing="dataProcessing" />
        <router-view v-else />
         <!--<router-view />-->
    </div>
</template>

<script>
    import LoadingScreen from './components/LoadingScreen';

    import {mapGetters} from 'vuex';

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
        computed: {
            ...mapGetters([
                'cryptoPriceStatus'
            ]),
            dataProcessing: function () {
                if (this.cryptoPriceStatus === 'success')
                    return false;
                return true;
            }
        },
        methods: {

        },
        mounted() {
            this.$on('isShow', (val) => {
                console.log('content');
                this.isShow = val;
            });

            this.$on('endOfLoadingWideScreen', (val) => {
                console.log('preloader');
                this.isLoading = !val;
                window.preloaderState = true;
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
</style>