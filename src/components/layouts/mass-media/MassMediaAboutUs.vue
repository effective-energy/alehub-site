<template>
    <div class="mass-media-about-us">
        <div class="media-block__header">
            <div class="title">
                Mass Media about us
            </div>
            <div class="separator">
            </div>
        </div>
        <div class="media-block__list">
            <div class="logo-wrap"
                 v-for="item in media">
                <a target="_blank"
                   :href="item.href"
                   :key="item.id">
                    <img class="logo"
                         :src="item.src"
                         :alt="item.alt">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MassMediaAboutUs',
        data() {
            return {
                media: [
                    {
                        id: 1,
                        href: 'https://nasdaq.com/article/blockchain-based-architecture-for-project-management-cm971453',
                        src: '../../../../static/images/logo/nasdaq-logo.png',
                        alt: 'nasdaq'
                    },
                    {
                        id: 2,
                        href: 'https://www.yahoo.com/amphtml/finance/news/promoted-blockchain-based-architecture-project-150559234.html',
                        src: '../../../../static/images/logo/yahoo-finance-logo.png',
                        alt: 'yahoo finance'
                    }
                ]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .mass-media-about-us
        display flex
        flex-direction column
        padding 40px 150px 100px 150px

        @media (min-width 1024px) and (max-width 1440px)
            padding 20px 100px 80px 100px

        @media (min-width 768px) and (max-width 1024px)
            padding 50px 75px 50px 75px

        @media (min-width 425px) and (max-width 768px)
            flex-direction column
            align-items center
            padding 75px 50px

        @media (max-width 425px)
            padding 50px 10% 50px 10%

        .media-block__header
            margin 0 0 60px 0
            display flex
            flex-direction column
            align-items center

            @media (max-width 768px)
                margin 0

            .title
                font-size 3em
                font-weight 500
                text-align center

                @media (max-width 425px)
                    font-size 3em

            .separator
                width 120px
                height 2px
                margin 25px 0
                background-color #34343e

        .media-block__list
            display flex
            flex-direction row

            @media (max-width 768px)
                flex-basis unset
                flex-direction column
                align-items center

            .logo-wrap
                padding 0 50px

                @media (max-width 768px)
                    padding 0
                    margin 30px 0

                .logo
                    height 80px
</style>