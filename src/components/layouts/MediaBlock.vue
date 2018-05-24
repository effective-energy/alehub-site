<template>
    <div class="media-block">
        <div class="media-block__header">
            <div class="title">
                Mass media
            </div>
            <div class="separator">
            </div>
        </div>
        <div class="media-block__list">
            <a target="_blank"
               v-for="item in media"
               :href="item.href"
               @mouseenter="enterMediaHover(item)"
               @mouseleave="leaveMediaHover(item)">
                <img class="light"
                     :class="{ 'light__transparent': item.isHover }"
                     :src="item.src"
                     :alt="item.title">
                <!--<transition name="fade-media">-->
                <!--<img class="dark"-->
                <!--:class="{ 'dark__transparent': item.isHover }"-->
                <!--:src="item.darkSrc"-->
                <!--:alt="item.title"-->
                <!--v-if="isDark">-->
                <!--</transition>-->
                <transition name="fade-media-hover">
                    <img class="hover"
                         :src="item.hoverSrc"
                         :alt="item.title"
                         v-if="item.isHover">
                </transition>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MediaBlock',
        props: {
            // isDark: {
            //     type: Boolean,
            //     required: true
            // }
        },
        data() {
            return {
                media: [
                    {
                        title: 'Bitcoin Magazine',
                        src: '../../../static/images/logo/bitcoin-magazine.svg',
                        darkSrc: '../../../static/images/logo/bitcoin-magazine-light.svg',
                        hoverSrc: '../../../static/images/logo/bitcoin-magazine-hover.svg',
                        href: 'https://bitcoinmagazine.com/',
                        isHover: false
                    },
                    {
                        title: 'Coin Telegraph',
                        src: '../../../static/images/logo/coin-telegraph.svg',
                        darkSrc: '../../../static/images/logo/coin-telegraph-light.svg',
                        hoverSrc: '../../../static/images/logo/coin-telegraph-hover.svg',
                        href: 'https://cointelegraph.com/',
                        isHover: false
                    },
                    {
                        title: 'Forklog',
                        src: '../../../static/images/logo/forklog.svg',
                        darkSrc: '../../../static/images/logo/forklog-light.svg',
                        hoverSrc: '../../../static/images/logo/forklog-hover.svg',
                        href: 'https://forklog.com/',
                        isHover: false
                    },
                    {
                        title: 'TheMerkle',
                        src: '../../../static/images/logo/the-merkle.svg',
                        darkSrc: '../../../static/images/logo/the-merkle-light.svg',
                        hoverSrc: '../../../static/images/logo/the-merkle-hover.svg',
                        href: 'https://themerkle.com/',
                        isHover: false
                    },
                    {
                        title: 'CCN',
                        src: '../../../static/images/logo/ccn.svg',
                        darkSrc: '../../../static/images/logo/ccn-light.svg',
                        hoverSrc: '../../../static/images/logo/ccn-hover.svg',
                        href: 'https://www.ccn.com/',
                        isHover: false
                    },
                    {
                        title: 'BtcManager',
                        src: '../../../static/images/logo/btc-manager.svg',
                        darkSrc: '../../../static/images/logo/btc-manager-light.svg',
                        hoverSrc: '../../../static/images/logo/btc-manager-hover.svg',
                        href: 'https://btcmanager.com//',
                        isHover: false
                    },
                    {
                        title: 'CryptoNinjas',
                        src: '../../../static/images/logo/crypto-ninjas.svg',
                        darkSrc: '../../../static/images/logo/crypto-ninjas-light.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas-hover.svg',
                        href: 'https://www.cryptoninjas.net/2018/05/24/ale-combining-blockchain-and-classic-project-management-services/',
                        isHover: false
                    },
                    {
                        title: 'CoinStaker',
                        src: '../../../static/images/logo/coin-staker.svg',
                        darkSrc: '../../../static/images/logo/coin-staker-light.svg',
                        hoverSrc: '../../../static/images/logo/coin-staker-hover.svg',
                        href: 'https://www.coinstaker.com/alehub-decentralized-project-management/',
                        isHover: false
                    },
                    {
                        title: 'CoinNewsAsia',
                        src: '../../../static/images/logo/coin-news-asia.svg',
                        darkSrc: '../../../static/images/logo/coin-news-asia-light.svg',
                        hoverSrc: '../../../static/images/logo/coin-news-asia-hover.svg',
                        href: 'http://www.coinnewsasia.com/',
                        isHover: false
                    },
                    {
                        title: 'Medium',
                        src: '../../../static/images/logo/medium.svg',
                        darkSrc: '../../../static/images/logo/medium-light.svg',
                        hoverSrc: '../../../static/images/logo/medium.svg',
                        href: 'https://medium.com/@alehub',
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
    .media-block
        width 100%
        padding 80px 150px 80px 150px
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        background-color #ececf0

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

                .fade-media-enter-active
                    -webkit-transition all .3s ease-in-out
                    -o-transition all .3s ease-in-out
                    transition all .3s ease-in-out

                .fade-media-enter
                    opacity 0

                .fade-media-hover-enter-active, .fade-media-hover-leave-active
                    -webkit-transition all .5s ease-in-out
                    -o-transition all .5s ease-in-out
                    transition all .5s ease-in-out
                .fade-media-hover-enter, .fade-media-hover-leave-active
                    opacity 0

                .hover
                    position absolute

                .light__transparent, .dark__transparent
                    opacity 0
                    -webkit-transition all .6s ease-in-out
                    -o-transition all .6s ease-in-out
                    transition all .6s ease-in-out

                img
                    height 60px

                    @media (max-width 768px)
                        height unset
                        width 100%
                        max-height 60px

    .media-block__dark
        background-color #343a49

        .title
            color #f7f7f7

</style>