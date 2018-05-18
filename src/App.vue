<template>
    <div id="app">
        <!--<loading-screen />-->
        <loading-screen v-if="dataProcessing"/>
        <router-view/>
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
                loadingTimer: 0,
                allow: false,
                allow2: true
            }
        },
        computed: {
            ...mapGetters([
                'cryptoPriceStatus',
                'downloadAppStatus'
            ]),
            dataProcessing: function () {
                return !(this.cryptoPriceStatus === 'success' && this.downloadAppStatus === 'success');
            }
        },
        methods: {},
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