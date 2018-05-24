<template>
    <div class="media-block"
         :class="{ 'media-block__dark': isDark }">
        <div class="title">
            Mass media:
        </div>
        <div class="media-block__list">
            <div class="title__list">
                Mass media:
            </div>
            <a target="_blank"
               v-for="item in media"
               :href="item.href"
               @mouseenter="enterMediaHover(item)"
               @mouseleave="leaveMediaHover(item)">
                <transition name="fade-media">
                    <img class="light"
                         :class="{ 'light__transparent': item.isHover }"
                         :src="item.src"
                         :alt="item.title"
                         v-if="!isDark">
                </transition>
                <transition name="fade-media">
                    <img class="dark"
                         :class="{ 'dark__transparent': item.isHover }"
                         :src="item.darkSrc"
                         :alt="item.title"
                         v-if="isDark">
                </transition>
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
            isDark: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                media: [
                    {
                        title: 'Bitcoin Magazine',
                        src: '../../../static/images/logo/bitcoin-magazine.svg',
                        darkSrc: '../../../static/images/logo/bitcoin-magazine-light.svg',
                        hoverSrc: '../../../static/images/logo/bitcoin-magazine-hover.svg',
                        href: 'https://www.cryptoninjas.net/',
                        isHover: false
                    },
                    {
                        title: 'Coin Telegraph',
                        src: '../../../static/images/logo/coin-telegraph.svg',
                        darkSrc: '../../../static/images/logo/coin-telegraph-light.svg',
                        hoverSrc: '../../../static/images/logo/coin-telegraph-hover.svg',
                        href: 'https://www.cryptoninjas.net/',
                        isHover: false
                    },
                    {
                        title: 'Forklog',
                        src: '../../../static/images/logo/forklog.svg',
                        darkSrc: '../../../static/images/logo/forklog-light.svg',
                        hoverSrc: '../../../static/images/logo/forklog-hover.svg',
                        href: 'https://www.cryptoninjas.net/',
                        isHover: false
                    },
                    {
                        title: 'TheMerkle',
                        src: '../../../static/images/logo/the-merkle.svg',
                        darkSrc: '../../../static/images/logo/the-merkle-light.svg',
                        hoverSrc: '../../../static/images/logo/the-merkle-hover.svg',
                        href: 'https://www.cryptoninjas.net/',
                        isHover: false
                    },
                    {
                        title: 'CCN',
                        src: '../../../static/images/logo/ccn.svg',
                        darkSrc: '../../../static/images/logo/ccn-light.svg',
                        hoverSrc: '../../../static/images/logo/ccn-hover.svg',
                        href: 'https://www.cryptoninjas.net/',
                        isHover: false
                    },
                    {
                        title: 'BtcManager',
                        src: '../../../static/images/logo/btc-manager.svg',
                        darkSrc: '../../../static/images/logo/btc-manager-light.svg',
                        hoverSrc: '../../../static/images/logo/btc-manager-hover.svg',
                        href: 'https://www.cryptoninjas.net/',
                        isHover: false
                    },
                    {
                        title: 'CryptoNinjas',
                        src: '../../../static/images/logo/crypto-ninjas.svg',
                        darkSrc: '../../../static/images/logo/crypto-ninjas-light.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas-hover.svg',
                        href: 'https://www.cryptoninjas.net/',
                        isHover: false
                    },
                    {
                        title: 'CoinStaker',
                        src: '../../../static/images/logo/coin-staker.svg',
                        darkSrc: '../../../static/images/logo/coin-staker-light.svg',
                        hoverSrc: '../../../static/images/logo/coin-staker-hover.svg',
                        href: 'https://www.cryptoninjas.net/',
                        isHover: false
                    },
                    {
                        title: 'CoinNewsAsia',
                        src: '../../../static/images/logo/coin-news-asia.svg',
                        darkSrc: '../../../static/images/logo/coin-news-asia-light.svg',
                        hoverSrc: '../../../static/images/logo/coin-news-asia-hover.svg',
                        href: 'https://www.cryptoninjas.net/',
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
        padding 150px 150px 0 150px
        display flex
        flex-direction row
        justify-content space-between
        background-color #ececf0

        @media (min-width 1024px) and (max-width 1440px)
            padding 100px 100px 0 100px

        @media (min-width 768px) and (max-width 1024px)
            padding 50px 75px 0 75px

        @media (min-width 425px) and (max-width 768px)
            flex-direction column
            align-items center
            padding 75px 50px

        @media (max-width 425px)
            padding 50px 10% 50px 10%

        .title
            flex-basis 20%
            font-size 22px
            font-weight 700

            @media (max-width 768px)
                display none

        .media-block__list
            flex-basis 80%
            display flex
            flex-direction row
            flex-wrap wrap
            justify-content space-between

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
                margin 0 0 60px 0
                flex-basis 25%
                display flex
                justify-content center

                @media (max-width 768px)
                    margin 0
                    flex-basis unset

                .fade-media-enter-active
                    -webkit-transition all .5s ease-in-out
                    -o-transition all .5s ease-in-out
                    transition all .5s ease-in-out

                .fade-media-enter
                    opacity 0

                .hover
                    position absolute

                .fade-media-hover-enter-active, .fade-media-hover-leave-active
                    -webkit-transition all .5s ease-in-out
                    -o-transition all .5s ease-in-out
                    transition all .5s ease-in-out

                .fade-media-hover-enter, .fade-media-hover-leave-active
                    opacity 0

                .light__transparent, .dark__transparent
                    opacity 0
                    -webkit-transition all 1s ease-in-out
                    -o-transition all 1s ease-in-out
                    transition all 1s ease-in-out

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