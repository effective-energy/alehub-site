<template>
    <div class="section-blog">
        <v-layout row>
            <v-flex>
                <title-blog :title="title"/>
            </v-flex>
        </v-layout>
        <v-layout row style="margin-top: 24px;">
            <v-flex>
                <subtitle-blog :subtitle="subtitle"/>
            </v-flex>
        </v-layout>
        <v-layout row style="margin-top: 40px;">
            <v-flex>
                <blog/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import TitleBlog from '../layouts/section-blog/TitleBlog';
    import SubtitleBlog from '../layouts/section-blog/SubtitleBlog';
    import Blog from '../layouts/section-blog/Blog';

    export default {
        name: 'SectionBlog',
        components: {
            TitleBlog,
            SubtitleBlog,
            Blog
        },
        data: () => ({
            title: 'Блог & СМИ',
            subtitle: 'Статьи и конференции'
        })
    }
</script>

<style lang="stylus" scoped>
    .section-blog
        color white

        @media (min-width 0px)
            height 200vh

        @media (min-width 600px)
            height 170vh

        @media (min-width 960px)
            height 120vh

        @media (min-width 1264px)
            height 100vh
</style>