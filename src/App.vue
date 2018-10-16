<template>
    <div id="app">
        <!--<transition name="fade">-->
            <!--<loading-screen v-if="dataProcessing"/>-->
        <!--</transition>-->
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
    @import "~vuetify/src/stylus/main.styl"

    .fade-enter-active,
    .fade-leave-active
        -webkit-transition all 1s
        -o-transition all 1s
        transition all 1s

    .fade-enter,
    .fade-leave-active
        opacity 0

    body
        background-color #ededf1
</style>