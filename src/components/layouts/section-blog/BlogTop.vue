<template>
    <v-layout row wrap>
        <v-flex xs12
                sm12
                md12
                lg7
                xl7>
            <blog-main-video :text="textMainVideo"/>
        </v-flex>
        <v-flex xs12
                sm12
                md12
                lg5
                xl5>
            <blog-news/>
        </v-flex>
    </v-layout>
</template>

<script>
    import BlogMainVideo from './BlogMainVideo';
    import BlogNews from './BlogNews';

    export default {
        name: 'BlogTop',
        components: {
            BlogMainVideo,
            BlogNews
        },
        computed: {
            textMainVideo() {
                return 'ALEHUB: On economy of project management system based on blockchain technology.';
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>