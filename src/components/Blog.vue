<template>
    <div class="blog-entries">
        <header-block :show="'blog'"/>
        <div class="section blog-entries-section">
            <h1 class="section-title is-center is-divider">
                {{ $t("blog.title") }}
            </h1>

            <div class="wrap-spinner"
                 v-if="blogStatus === 'loading'">
                <spinner/>
            </div>

            <div class="blog-content"
                 v-if="blogStatus === 'success'">
                <div class="posts">
                    <div class="blog-post"
                         v-for="item in selectedPost"
                         :key="item.url"
                         onclick="yaCounter48802643.reachGoal('Blog'); return true;">
                        <img class="image-preview"
                             :src="'https://alehub-4550.nodechef.com/' + item.preview_image"
                             :alt="item.title">
                        <div class="post-content">
                            <router-link class="title"
                                         tag="a"
                                         :to="`/blog/${item.url}`">
                                {{ item.title }}
                            </router-link>
                            <div class="post-info">
                                <span class="date">
                                    {{ item.date / 1000 | moment("MMMM DD") }}
                                </span>
                                <span class="author">
                                    {{ item.author_name }}
                                </span>
                            </div>
                        </div>
                        <div class="divider"></div>
                    </div>
                </div>

                <div class="tags-filter">
                    <ul class="filter-list">
                        <router-link tag="li"
                                     :to="`/blog/categories/all`"
                                     class="filter-item"
                                     active-class
                                     exact>
                            All
                        </router-link>
                        <router-link class="filter-item"
                                     tag="li"
                                     :to="`/blog/categories/${item}`"
                                     v-for="item in filtersBlogAll"
                                     :key="item"
                                     active-class
                                     exact>
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
            ),
            selectedPost: function () {
                if (this.$route.params.id === 'all') {
                    return this.blogAll;
                } else {
                    return this.blogAll.filter((news) => {
                        return news.categories.find((category) => {
                            return category.toLowerCase() === this.$route.params.id.toLowerCase();
                        });
                    });
                }
            },
            dataProcessing: function () {
                return !(this.cryptoPriceStatus === 'success');
            }
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
        position relative

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

    .blog-entries-section
        padding 142px 80px 205px 80px

        .is-center
            text-align center

        .is-divider
            width 120px
            border-bottom 2px solid #34343e
            margin 0 auto
            padding 0 0 16px 0

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

                        &.router-link-exact-active
                            color #f3b300

            .posts
                padding-right 77.5px
                padding-left 77.5px
                width 80%

                .divider
                    background-color #000000
                    height 0.8px
                    opacity 0.2
                    @media (max-width: 768)
                        background-color none
                        


                .blog-post
                    width 100%
                    margin 49px 0 49px 0
                    display flex

                    .image-preview
                        -o-object-fit cover
                        object-fit cover
                        // width 200px
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

        @media (min-width 1024px) and (max-width 1440px)
            .blog-post
                .post-content
                    .title
                        font-size 16px

        @media (min-width 768px) and (max-width 1024px)
            padding 130px 5% 205px 5%

            .blog-content
                .posts
                    padding 0 30px

                    .blog-post
                        .post-content
                            .post-info
                                span
                                    font-size 14px

        @media (max-width 768px)
            padding 130px 10% 400px 10%

            .blog-content
                display flex
                flex-direction column-reverse
                justify-content center

                .posts
                    padding 0
                    width 100%

                    .blog-post
                        flex-direction column

                        img
                            width 100% !important
                            height auto !important

                        .post-content
                            padding 24px

                            .title
                                text-align center
                                margin-bottom 12px

                            .post-info
                                margin 0 auto

                .tags-filter
                    padding 50px 0 0 0
                    width 100%

                    .filter-list
                        display flex
                        flex-direction row
                        justify-content flex-start
                        flex-wrap wrap

                        li
                            padding 5px 10px
                            margin-right 10px
                            background-color #343a49
                            color #f7f7f7
                            border-radius 5px
                            margin-bottom 10px


        @media (max-width 425px)
            padding 130px 10% 450px 10%

</style>