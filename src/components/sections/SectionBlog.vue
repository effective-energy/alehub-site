<template>
    <div class="section-blog">
        <v-container grid-list-md>
            <v-layout row>
                <v-flex>
                    <title-blog :title="title"/>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex>
                    <subtitle-blog :subtitle="subtitle"/>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex>
                    <blog/>
                </v-flex>
            </v-layout>
        </v-container>
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
        height 100vh
        color white
</style>