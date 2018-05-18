<template>
    <div class="blog-entries">
        <header-block :show="'blog'"/>
        <div class="section blogEntries-section">
            <h1 class="section-title is-center is-divider">
                {{ $t("blog.title") }}
            </h1>

            <div class="wrap-spinner"
                 v-if="blogStatus === 'loading'">
                <spinner/>
            </div>

            <div class="blog-content" v-if="blogStatus === 'success'">
                <div class="posts">
                    <div class="blog-post"
                         v-for="item in blogAll" :key="item._id"
                         onclick="yaCounter48802643.reachGoal('Blog'); return true;">
                        <img class="image-preview"
                             :src="'https://alehub-4550.nodechef.com/' + item.preview_image"
                             :alt="item.title">
                        <div class="post-content">
                            <router-link class="title"
                                         tag="a"
                                         :to="`/blog/${item._id}`">
                                {{ item.title }}
                            </router-link>
                            <div class="post-info">
                                <span class="date">{{ item.date / 1000 | moment("MMMM DD") }}</span>
                                <span class="author">{{ item.author_name }}</span>
                            </div>
                        </div>
                        <div class="divider"></div>
                    </div>
                </div>

                <div class="tags-filter">
                    <ul class="filter-list">
                        <router-link tag="li" :to="`/blog`" class="filter-item active">
                            All
                        </router-link>
                        <router-link class="filter-item"
                                     tag="li"
                                     :to="`/blog/categories/${item}`"
                                     v-for="item in filtersBlogAll"
                                     :key="item">
                            {{ item }}
                        </router-link>
                    </ul>
                </div>
            </div>

        </div>
        <footer-block :is-rtl="false"/>
    </div>
</template>

<script>
    import HeaderBlock from './layouts/HeaderBlock';
    import FooterBlock from './layouts/FooterBlock';
    import Spinner from './layouts/Spinner';

    import {mapGetters} from 'vuex';

    export default {
        name: 'Blog',
        components: {
            HeaderBlock,
            FooterBlock,
            Spinner
        },
        data() {
            return {
                content: '',
                filters: []
            }
        },
        watch: {
            '$i18n.locale'() {
                this.getNews();
            }
        },
        computed: {
            ...mapGetters(
                [
                    'blogAll',
                    'filtersBlogAll',
                    'blogStatus'
                ]
            )
        },
        methods: {
        },
        created() {
        }
    }
</script>

<style lang="stylus">
    body
        background-color #ffffff !important

    .footer
        background-color #e8ebef

    .blog-entries
        min-height 100vh

    .blog-post
        cursor pointer

</style>

<style lang="stylus" scoped>
    .wrap-spinner
        width 100%
        display flex
        justify-content center
        align-items center
        margin-top 100px

    body
        background-color #ffffff !important

    .section
        padding 142px 80px

    .is-center
        text-align center

    .blog-content
        max-width 1600px
        margin 0 auto
        display flex
        flex-direction row

        .date-filter
            width 190px
            height auto
            display flex
            justify-content center
            align-items flex-start
            padding-top 170px
            min-width 90px

            .filter-list
                text-align center
                list-style none
                padding 0

        .tags-filter
            width 190px
            height auto
            display flex
            justify-content center
            align-items flex-start
            padding-top 110px
            min-width 90px

            .filter-list
                text-align center
                list-style none
                padding 0

                .filter-item
                    white-space nowrap
                    cursor pointer
                    &.active
                        color #f3b300

        .posts
            padding-right 77.5px
            padding-left 77.5px
            min-width 70%

            .divider
                background-color #000000
                height 0.8px
                opacity 0.2

    .is-divider
        width 120px
        border-bottom 2px solid #34343e
        margin 0 auto
        padding 0 0 16px 0

    .blog-post
        width 100%
        margin 49px 0 49px 0
        display flex

        .image-preview
            -o-object-fit cover
            object-fit cover
            width 200px
            height 120px

        .post-content
            display flex
            flex-direction column
            justify-content center
            padding 0 24px

            .title
                font-family MuseoSansCyrl500
                font-size 22px
                font-weight 500
                line-height 1.45
                color #34343e
                text-decoration underline

                &:hover
                    color #f3b300

            .post-info
                margin 12px 0 0 0

                span
                    opacity 0.4
                    font-family MuseoSansCyrl500
                    font-size 16px
                    font-weight 500
                    line-height 1.25
                    text-align left
                    color #34343e

    @media (max-width: 1200px)
        .blog-post
            .post-content
                .title
                    font-size 16px

    @media (max-width: 1024px)
        .blog-post
            .post-content
                .post-info
                    span
                        font-size 14px

    @media (max-width: 991px)
        .blog-content
            .posts
                padding-right 32px
                padding-left 32px

        .blog-post
            align-items center

    @media (max-width: 900px)
        .blog-post
            flex-direction column

            .image-preview
                margin-bottom 12px

            .post-content
                .title
                    text-align center
                    margin-bottom 12px

                .post-info
                    margin 0 auto

                    span
                        font-size 12px

    @media (max-width: 660px)
        .blog-content
            .date-filter, .tags-filter
                display none

            .posts
                padding-right 0
                padding-left 0

        .section
            padding-right 32px
            padding-left 32px

            .section-title
                font-size 2rem
                padding-bottom 12px

        .blog-post
            flex-direction row

    @media (max-width: 575px)
        .blog-post
            .post-content
                .title
                    font-size 14px
                    text-align left
                    margin-bottom 0

                .post-info
                    margin 12px 0 0 0

    @media (max-width: 500px)
        .blog-post
            flex-direction column

            .post-content
                .title
                    text-align center
                    margin-bottom 12px

                .post-info
                    margin 0 auto

    @media (max-width: 320px)
        .section
            padding-top 100px
            padding-bottom 40px

        .blog-post
            margin 24px 0

            .post-content
                padding 0


</style>