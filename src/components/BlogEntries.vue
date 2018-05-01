<template>
    <div class="blog-entries">
        <Header :show="'blog'"/>
        <div class="section blogEntries-section">
            <h1 class="section-title is-center is-divider">Blog</h1>


            <div class="blog-content">
                <div class="date-filter">
                    <div class="arrow-next"></div>
                    <ul class="filter-list">
                        <li class="filter-item">2018</li>
                        <ul v-if="false">
                            <li>March</li>
                            <li class="active">February</li>
                            <li>January</li>
                        </ul>
                        <li class="filter-item">2017</li>
                        <li class="filter-item">2016</li>
                        <li class="filter-item">2015</li>
                    </ul>
                    <div class="arrow-prev"></div>
                </div>

                <div class="posts" v-if="content !== ''">

                    <div class="blog-post" v-for="item in content" :key="item._id">
                        <img :src="'http://alehub.io:8099/'+item.preview_image" alt="" class="image-preview">
                        <div class="post-content">
                            <router-link tag="a" :to="`/blog/${item._id}`" class="title">
                                {{ item.title }}
                            </router-link>
                            <div class="post-info">
                                <span class="date">{{ item.date/1000 | moment("MMMM DD") }}</span>
                                <span v-if="false" class="author">Vadim Dudin</span>
                            </div>
                        </div>
                        <div class="divider"></div>
                    </div>

                    
                </div>

                <div class="tags-filter">
                    <ul class="filter-list">
                        <li class="filter-item">All</li>
                        <li class="filter-item">ALE</li>
                        <li class="filter-item">crypta</li>
                        <li class="filter-item">cool thing</li>
                        <li class="filter-item">meme</li>
                        <li class="filter-item">CEO</li>
                        <li class="filter-item">hot</li>
                        <li class="filter-item">from Dudin</li>
                        <li class="filter-item">PVA</li>
                        <li class="filter-item">win</li>
                    </ul>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from './layouts/Header';
    import Footer from './layouts/Footer';

    export default {
        name: 'BlogEntries',
        components: {
            Header,
            Footer
        },
        data() {
            return {
                content: ''
            }
        },
        methods: {
			getNews: function () {
				this.$http.get(`http://alehub.io:8099/ale-news`).then(response => {
					this.content = response.body;
				}, response => {
					console.log('Error getting news', response);
				});
			}
		},
		created () {
			this.getNews();
		}
    }
</script>

<style>
    body {
        /*padding-top: 74px;*/
        background-color: #ffffff !important;
    }

    .footer {
        background-color: #e8ebef;
    }
</style>

<style lang="stylus" scoped>
    body
        /*padding-top 74px*/
        background-color #ffffff !important

    .section
        padding 141px 80px

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

        .posts
            padding-right 77.5px
            padding-left 77.5px

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
            padding-top 40px
            padding-bottom 40px

        .blog-post
            margin 24px 0

            .post-content
                padding 0


</style>