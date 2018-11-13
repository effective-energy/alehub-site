<template>
    <v-layout align-end
              row
              wrap>
        <v-flex xs12
                sm12
                md10
                lg10
                xl10>
            <blog-video-list/>
        </v-flex>
        <v-flex xs12
                sm12
                md2
                lg2
                xl2>
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