<template>
    <div class="section-blog">
        <title-blog :title="title"/>
    </div>
</template>

<script>
    import TitleBlog from '../layouts/section-blog/TitleBlog';

    export default {
        name: 'SectionBlog',
        components: {
            TitleBlog
        },
        data: () => ({
            title: 'Блог & СМИ'
        })
    }
</script>

<style lang="stylus" scoped>
    .section-blog
        height 100vh
        background-color #020449
        color white
</style>