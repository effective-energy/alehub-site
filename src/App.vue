<template>
    <div id="app">
        <loading-screen v-if="dataProcessing"/>
        <router-view/>
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
            }
        },
        computed: {
            ...mapGetters(
                [
                    'cryptoPriceStatus',
                    'downloadAppStatus',
                    'blogStatus'
                ]
            ),
            dataProcessing: function () {
                return !(this.cryptoPriceStatus === 'success' && this.downloadAppStatus === 'success' && this.blogStatus === 'success');
            }
        },
    }
</script>

<style lang="stylus">
    body
        background-color #ededf1
</style>