<template>
    <div id="app">
        <!--<loading-screen v-if="!$data"/>-->
        <loading-screen v-if="isLoading" />
        <router-view v-if="isShow" />
        <!--<router-view v-if="false" />-->
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
                this.isShow = val;
            });

            this.$on('isLoading', (val) => {
                this.isLoading = val;
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