<template>
    <div class="section-media">
        <v-container>
            <v-layout>
                <v-flex>
                    <title-section title="Публикации"/>
                </v-flex>
            </v-layout>
            <v-layout row style="margin-top: 68px;">
                <v-flex xs12>
                    <div class="media-block__list">
                        <a target="_blank"
                           v-for="item in media"
                           :href="item.href">
                            <img class="filter"
                                 :src="item.src"
                                 :alt="item.title">
                        </a>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TitleSection from '../layouts/text/Title1Section';

    export default {
        name: 'SectionMedia',
        components: {
            TitleSection
        },
        data() {
            return {
                media: [
                    {
                        title: 'Bitcoin Magazine',
                        src: '../../../static/images/logo/bitcoin-magazine.svg',
                        hoverSrc: '../../../static/images/logo/bitcoin-magazine-hover.svg',
                        href: 'https://bitcoinmagazine.com/articles/alehubs-new-blockchain-based-architecture-project-manageme/',
                        isHover: false
                    },
                    {
                        title: 'CCN',
                        src: '../../../static/images/logo/ccn.svg',
                        hoverSrc: '../../../static/images/logo/ccn-hover.svg',
                        href: 'https://www.ccn.com/alehub-revolutionizing-the-project-management-landscape-with-blockchain/',
                        isHover: false
                    },
                    {
                        title: 'BtcManager',
                        src: '../../../static/images/logo/btc-manager.svg',
                        hoverSrc: '../../../static/images/logo/btc-manager-hover.svg',
                        href: ' https://btcmanager.com/alehub-introducing-the-next-generation-freelancing-platform/',
                        isHover: false
                    },
                    {
                        title: 'CryptoNinjas',
                        src: '../../../static/images/logo/crypto-ninjas.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas-hover.svg',
                        href: 'https://www.cryptoninjas.net/2018/05/24/ale-combining-blockchain-and-classic-project-management-services/',
                        isHover: false
                    },
                    {
                        title: 'CoinStaker',
                        src: '../../../static/images/logo/coin-staker.svg',
                        hoverSrc: '../../../static/images/logo/coin-staker-hover.svg',
                        href: 'https://www.coinstaker.com/alehub-decentralized-project-management/',
                        isHover: false
                    },
                    {
                        title: 'CoinNewsAsia',
                        src: '../../../static/images/logo/coin-news-asia.svg',
                        hoverSrc: '../../../static/images/logo/coin-news-asia-hover.svg',
                        href: 'http://www.coinnewsasia.com/alehub-decentralization-mining-and-anonymity/',
                        isHover: false
                    },
                    {
                        title: 'Bitjournal',
                        src: '../../../static/images/logo/bitjournal.svg',
                        hoverSrc: '../../../static/images/logo/bitjournal-hover.svg',
                        href: 'https://bitjournal.media/17-04-2018/alehub-universalnaya-platforma-dlya-upravleniya-proektami/',
                        isHover: false
                    },
                    {
                        title: 'Nasdaq',
                        src: '../../../../static/images/logo/nasdaq-logo.svg',
                        hoverSrc: '../../../../static/images/logo/nasdaq-logo-hover.svg',
                        href: 'https://nasdaq.com/article/blockchain-based-architecture-for-project-management-cm971453',
                        alt: 'nasdaq',
                        isHover: false
                    },
                    {
                        title: 'Yahoo',
                        href: 'https://www.yahoo.com/amphtml/finance/news/promoted-blockchain-based-architecture-project-150559234.html',
                        hoverSrc: '../../../../static/images/logo/yahoo-finance-logo-hover.svg',
                        src: '../../../../static/images/logo/yahoo-finance-logo.svg',
                        alt: 'yahoo-finance',
                        isHover: false
                    }
                ]
            }
        },
        methods: {
            enterMediaHover: function (item) {
                item.isHover = true;
            },
            leaveMediaHover: function (item) {
                item.isHover = false;
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .section-media
        height 75vh
        width 100%
        padding 80px 150px 80px 150px
        display flex
        flex-direction column
        justify-content space-between
        align-items center

        @media (min-width 1024px) and (max-width 1440px)
            padding 60px 100px 60px 100px

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

            .separator
                width 120px
                height 2px
                margin 25px 0
                background-color #34343e

        .media-block__list
            display flex
            flex-direction row
            flex-wrap wrap
            justify-content space-evenly

            @media (max-width 768px)
                flex-basis unset
                flex-direction column
                align-items center

            @media (min-width 425px) and (max-width 768px)
                height 150vh

            @media (max-width 425px)
                height 200vh

            .title__list
                display none
                font-size 22px
                font-weight 700

                @media (max-width 768px)
                    display block

            a
                flex-basis 25%
                margin 0 0 80px 0
                display flex
                justify-content center

                @media (max-width 768px)
                    margin 0
                    flex-basis unset

                .fade-media-hover-enter-active, .fade-media-hover-leave-active
                    -webkit-transition all .3s ease-in-out
                    -o-transition all .3s ease-in-out
                    transition all .3s ease-in-out

                .fade-media-hover-enter, .fade-media-hover-leave-active
                    opacity 0

                .hover
                    position absolute

                .light__transparent, .dark__transparent
                    opacity 0
                    -webkit-transition all .4s ease-in-out
                    -o-transition all .4s ease-in-out
                    transition all .4s ease-in-out
                .filter
                    filter  invert(.5)
                    transition .3s
                    &:hover
                        filter invert(0)
                        transform: scale(1.1);


                img
                    height 60px

                    @media (max-width 768px)
                        height unset
                        width 100%
                        max-height 60px

</style>