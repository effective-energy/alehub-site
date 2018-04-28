<template>
    <div class="index">
        <!--rename-->
        <Header />
        <screen1 />
        <screen2 />
        <screen3 />
        <screen4 :is-features="isFeatures"/>
        <screen5 :is-team="isTeam"/>
        <screen6 />
        <screen7 />
        <blog />
        <Footer />
    </div>
</template>

<script>
    import Header from './layouts/Header'
    import Screen1 from './Screen1'
    import Screen2 from './Screen2'
    import Screen3 from './Screen3'
    import Screen4 from './Screen4'
    import Screen5 from './Screen5'
    import Screen6 from './Screen6'
    import Screen7 from './Screen7'
    import Blog from './Blog'
    import Footer from './layouts/Footer'

    export default {
        name: 'Index',
        components: {
            Header,
            Screen1,
            Screen2,
            Screen3,
            Screen4,
            Screen5,
            Screen6,
            Screen7,
            Blog,
            Footer,
        },
        data() {
            return {
                isFeatures: false,
                isTeam: false,
                // isLoading: true
            }
        },
        mounted() {

            // console.time('loading');
            this.$on('checkIsFeatures', (isFeatures) => {
                this.isFeatures = isFeatures;
            });

            this.$on('checkIsTeam', (isTeam) => {
                this.isTeam = isTeam;
            });

            // console.timeEnd('loading');

            // this.isLoading = false;
        }
    }
</script>

<style lang="stylus">
    .index
        -webkit-transition opacity 2s cubic-bezier(1, 0, .6, .65)
        transition opacity 2s cubic-bezier(1, 0, .6, .65)
</style>