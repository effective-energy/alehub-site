<template>
    <div id="app">
        <!--<loading-screen v-if="!$data"/>-->
        <loading-screen v-if="true"/>
        <router-view v-else />
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
                loadingTimer: 0
            }
        },
        created() {
            console.time('created');

            console.timeEnd('created');
        },
        mounted() {
            console.time('mounted');

            console.timeEnd('mounted');

            setTimeout(() => {
                this.isLoading = false;
            }, 5000);
        }
    }
</script>

<style lang="stylus">
    body
        background-color #ededf1

    [v-cloak]
        display none

</style>