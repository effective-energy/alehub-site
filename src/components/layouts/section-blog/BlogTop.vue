<template>
    <v-layout row>
        <v-flex xs7>
            <blog-main-video :text="textMainVideo"/>
        </v-flex>
        <v-flex xs5>
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