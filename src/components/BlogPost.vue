<template>
    <div class="section section-full-news">
        <header-block :show="'blog'"/>

        <div class="spinner" v-if="blogStatus === 'loading'">
            <spinner/>
        </div>
        <div class="not-found" v-if="blogStatus === 'error'">
            <p>News not found</p>
        </div>

        <div class="container container-news"
             v-if="blogStatus === 'success'">
            <social-sharing :url="newsUrl"
                            inline-template>
                <div class="share-block">
                    <network class="icon" network="twitter">
                        <img src="../../static/images/share-ic/twitter.svg" alt="twitter" class="share-item">
                    </network>
                    <network class="icon" network="facebook">
                        <img src="../../static/images/share-ic/fb.svg" alt="fb" class="share-item">
                    </network>
                    <network class="icon" network="googleplus">
                        <img src="../../static/images/share-ic/g-plus.svg" alt="gplus" class="share-item">
                    </network>
                    <network class="icon" network="vk">
                        <img src="../../static/images/share-ic/vk.svg" alt="vk" class="share-item">
                    </network>
                    <network class="icon" network="telegram">
                        <img src="../../static/images/share-ic/telegram-ic.svg" alt="telegram" class="share-item">
                    </network>
                    <network class="icon" network="email">
                        <img src="../../static/images/share-ic/mail.svg" alt="mail" class="share-item">
                    </network>
                </div>
            </social-sharing>
            <div class="news-block">
                <h1 class="title">
                    {{ selectedPost.title }}
                </h1>
                <div class="news-info">
                    <img class="news-author-image"
                         :src="'https://alehub-4550.nodechef.com/' + selectedPost.author_image"
                         :alt="selectedPost.title"/>
                    <div class="info">
                        <span class="datetime">
                            {{ selectedPost.date / 1000 | moment("HH:mm dddd, MMMM DD, YYYY") }}
                        </span>
                        <span class="author-name">
                            {{ selectedPost.author_name }}
                        </span>
                    </div>
                </div>
                <div class="picture-block">
                    <img class="image"
                         :src="'https://alehub-4550.nodechef.com/' + selectedPost.preview_image"
                         :alt="selectedPost.title"/>
                </div>
                <div class="news-content"
                     v-html="selectedPost.content">
                </div>

                <div class="more-news"
                     v-if="blogLastNews.length !== 0">
                    <router-link class="more-news-title"
                                 tag="h1"
                                 to="/blog/categories/all">
                        More news
                    </router-link>

                    <div class="more-news-content row">
                        <div class="news-item col-lg-3 col-md-6 col-sm-6 col-12"
                             v-for="item in blogLastNews"
                             :key="item.url">
                            <router-link tag="a"
                                         :to="`./${item.url}`">
                                <img :src="'https://alehub-4550.nodechef.com/' + item.preview_image"
                                     :alt="item.title"/>
                            </router-link>
                            <router-link class="news-link"
                                         tag="a"
                                         :to="`./${item.url}`">
                                {{ item.title }}
                            </router-link>
                            <i class="date">
                                {{ item.date / 1000 | moment("ddd DD, YYYY") }}
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer-block :is-rtl="false"/>
    </div>
</template>

<script>
    import HeaderBlock from './layouts/HeaderBlock';
    import FooterBlock from './layouts/FooterBlock';
    import Spinner from './layouts/Spinner.vue';

    import {mapGetters} from 'vuex';

    export default {
        name: 'BlogPost',
        components: {
            HeaderBlock,
            FooterBlock,
            Spinner
        },
        data() {
            return {
                content: '',
                more: '',
                isError: false,
                newsUrl: '',
                isLoader: false
            }
        },
        watch: {
            '$route'() {
                this.getNews();
            }
        },
        computed: {
            ...mapGetters(
                [
                    'blogAll',
                    'blogLastNews',
                    'blogStatus'
                ]
            ),
            selectedPost: function () {
                return this.blogAll.find((item) => {
                    return item.url.toLowerCase() === this.$route.params.id.toLowerCase();
                });
            }
        },
        methods: {},
        created() {
        }
    }
</script>

<style lang="stylus">
    body
        background-color #fff !important

    blockquote
        padding 14px 30px
        position relative
        font-family MuseoSansCyrl900
        font-size 32px

        &:before
            content " "
            width 26px
            height 20px
            background-image url('../../static/images/invalid-name.svg')
            position absolute
            top -5px

        .title
            font-family MuseoSansCyrl900
            font-size 32px
            font-weight 900
            line-height 1.22
            color #34343e
            margin-top 4px

        .subtitle
            font-family MuseoSansCyrl300
            font-size 14px
            font-weight 300
            line-height 1.21
            text-align left
            color #34343e

    .news-content
        p
            margin 0

    .not-found
        display flex
        justify-content center
        align-items center
        height calc(100vh - 165px - 74px)

        p
            font-family MuseoSansCyrl300
            font-size 30px

            @media (max-width: 425px)
                font-size 26px
    .share-item
        cursor pointer
    img[alt="twitter"]
        &:hover
            content url("../../static/images/share-ic/twitter-hover.svg")
    img[alt="fb"]
        &:hover
            content url("../../static/images/share-ic/fb-hover.svg")
    img[alt="gplus"]
        &:hover
            content url("../../static/images/share-ic/g-plus-hover.svg")
    img[alt="vk"]
        &:hover
            content url("../../static/images/share-ic/vk-hover.svg")
    img[alt="telegram"]
        &:hover
            content url("../../static/images/share-ic/telegram-ic-hover.svg")
    img[alt="mail"]
        &:hover
            content url("../../static/images/share-ic/mail-hover.svg")

</style>


<style lang="stylus" scoped>
    .spinner
        min-height calc(100vh - 165px)
        display flex
        justify-content center

    .footer
        background-color #e8ebef

    .section-full-news
        position relative
        padding 70px 0 205px 0

    .container-news
        display flex
        padding 71px 0
        position relative

        .share-block
            min-width 36px
            height 240px
            position absolute
            display flex
            flex-direction column
            align-items center
            justify-content space-around
            left -70px
            top 80px

            img
                margin 12px

        .news-block
            .title
                font-family MuseoSansCyrl500
                font-size 50px
                font-weight bold
                line-height 1.12
                color #34343e

            .news-info
                display flex
                margin-bottom 18px

                .news-author-image
                    width 38px
                    height 38px
                    border-radius 50%

                .info
                    display flex
                    flex-direction column
                    margin-left 12px

                    span
                        opacity 0.4
                        font-family MuseoSansCyrl500
                        font-size 16px
                        font-weight 500
                        line-height 1.25
                        color #34343e

            .picture-block
                margin-bottom 20px

                .image
                    width 100%
                    height auto
                    -o-object-fit contain
                    object-fit contain

                .resource-image
                    padding 12px 0
                    margin-bottom 0
                    opacity 0.4
                    font-family MuseoSansCyrl500
                    font-size 14px
                    font-weight 500
                    line-height 1.21
                    color #34343e

            .news-content
                border-bottom 1px solid rgba(52, 52, 62, 0.2)
                padding-bottom 16px

                p
                    font-family MuseoSansCyrl300
                    font-size 18px
                    font-weight 300
                    line-height 1.22
                    color #34343e

                blockquote
                    padding 14px 30px

                    .quote
                        width 26px
                        height 20px
                        background-image url('../../static/images/invalid-name.svg')

                    .title
                        font-family MuseoSansCyrl900
                        font-size 32px
                        font-weight 900
                        line-height 1.22
                        color #34343e
                        margin-top 4px

                    .subtitle
                        font-family MuseoSansCyrl300
                        font-size 14px
                        font-weight 300
                        line-height 1.21
                        text-align left
                        color #34343e

                i
                    font-weight 300
                    font-style italic
                    font-size 18px

                b
                    font-family MuseoSansCyrl300
                    font-size 18px
                    font-weight bold
                    color #34343e

                .tags-block
                    display flex

                    .tag-item
                        border-radius 13px
                        border solid 1px #34343e
                        opacity 0.4
                        padding 2px 6px

                        span
                            font-family MuseoSansCyrl500
                            font-size 16px
                            font-weight 500
                            line-height 1.25
                            color #34343e

                        &:not(:first-child)
                            margin-left 12px

            .more-news
                margin-top 36px

                .more-news-title
                    text-transform uppercase
                    font-family MuseoSansCyrl500
                    font-size 24px
                    font-weight bold
                    line-height 1.21
                    color #34343e
                    margin-bottom 16px
                    width fit-content
                    cursor pointer
                    text-decoration underline
                    -webkit-transition all .3s ease
                    -o-transition all .3s ease
                    transition all .3s ease

                    &:hover
                        color #fea40f

                .more-news-content
                    display flex
                    justify-content flex-start

                    .news-item
                        display flex
                        flex-direction column

                        img
                            width 100%
                            height 130px
                            -o-object-fit cover
                            object-fit cover
                            cursor pointer

                        .news-link
                            font-family MuseoSansCyrl500
                            font-size 20px
                            font-weight bold
                            line-height 1.2
                            color #34343e
                            text-decoration underline
                            margin 8px 0

                        .date
                            opacity 0.4
                            font-family MuseoSansCyrl500
                            font-size 14px
                            font-weight 500
                            line-height 1.21
                            color #34343e

                    .news-item:first-child
                        margin-left 0

                    .news-item:last-child
                        margin-right 0

        @media (min-width 1024px) and (max-width 1440px)
            max-width 75%

        @media (min-width 768px) and (max-width 1024px)
            max-width 75%

            .news-block
                .title
                    font-size 40px

                .news-content
                    .quote-block
                        .title
                            font-size 24px

        @media (min-width 425px) and (max-width 768px)
            padding 50px 32px 200px 32px
            max-width unset
            display flex
            flex-direction column


            .share-block
                left auto
                top auto
                display flex
                flex-direction row
                height 30px
                justify-content space-between
                position relative

            .news-block
                margin-top 24px

                .title
                    font-size 30px

                .news-info
                    margin-bottom 12px

                    .info
                        span
                            font-size 14px

                .news-content
                    p, i, b
                        font-size 16px

                .more-news
                    .more-news-title
                        font-size 18px

                    .more-news-content
                        .news-item
                            margin-bottom 24px

                            .news-link
                                font-size 14px

        @media (max-width 425px)
            padding 50px 32px 300px 32px

            .news-block
                .more-news
                    .more-news-content
                        .news-item
                            padding-bottom 30px

                            &:last-child
                                padding-bottom 0

        @media (min-width 375px) and (max-width 425px)
            .news-block
                .title
                    font-size 24px
                    margin-bottom 12px

                .picture-block
                    .image
                        height auto

        @media (min-width 320px) and (max-width 375px)
            .news-block
                .title
                    font-size 20px
                    text-align left

                .news-info
                    justify-content flex-start

                .news-content
                    p
                        text-align justify

                    .tags-block
                        justify-content center

                .more-news
                    .more-news-title
                        text-align center

        @media (max-width 320px)
            .news-block
                .title
                    font-size 18px

                .news-info
                    .info
                        span
                            font-size 12px

                .more-news
                    .more-news-title
                        font-size 18px

                    .more-news-content
                        justify-content center

                        .news-item
                            width 100%
                            max-width 260px

                            .news-link
                                text-align center

                            .date
                                text-align center

</style>