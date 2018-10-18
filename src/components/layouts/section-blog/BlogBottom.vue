<template>
    <v-layout align-end row>
        <v-flex xs10>
            <blog-video-list/>
        </v-flex>
        <v-flex xs2>
            <to-blog-page :text="toBlog.text"/>
        </v-flex>
    </v-layout>
</template>

<script>
    import BlogVideoList from './BlogVideoList';
    import ToBlogPage from './ToBlogPage';

    export default {
        name: 'BlogBottom',
        components: {
            BlogVideoList,
            ToBlogPage
        },
        data: () => ({
            toBlog: {
                text: 'Все новости и события в нашем блоге'
            }
        })
    }
</script>

<style lang="stylus" scoped>

</style>