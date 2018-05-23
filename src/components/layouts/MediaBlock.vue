<template>
    <div class="media-block">
        <div class="title">
            Mass media:
        </div>
        <div class="media-block__list">
            <div class="title__list">
                Mass media:
            </div>
            <a target="_blank"
               v-for="item in media"
               :href="item.href">
                <img :src="item.src"
                     :alt="item.title">
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MediaBlock',
        data() {
            return {
                media: [
                    {
                        title: 'Bitcoin Magazin',
                        src: '../../../static/images/logo/bitcoin-magazine.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas.svg',
                        href: 'https://www.cryptoninjas.net/'
                    },
                    {
                        title: 'Coin Telegraph',
                        src: '../../../static/images/logo/coin-telegraph.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas.svg',
                        href: 'https://www.cryptoninjas.net/'
                    },
                    {
                        title: 'Forklog',
                        src: '../../../static/images/logo/forklog.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas.svg',
                        href: 'https://www.cryptoninjas.net/'
                    },
                    {
                        title: 'TheMerkle',
                        src: '../../../static/images/logo/the-merkle.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas.svg',
                        href: 'https://www.cryptoninjas.net/'
                    },
                    {
                        title: 'CCN',
                        src: '../../../static/images/logo/ccn.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas.svg',
                        href: 'https://www.cryptoninjas.net/'
                    },
                    {
                        title: 'BtcManager',
                        src: '../../../static/images/logo/btc-manager.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas.svg',
                        href: 'https://www.cryptoninjas.net/'
                    },
                    {
                        title: 'CryptoNinjas',
                        src: '../../../static/images/logo/crypto-ninjas.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas.svg',
                        href: 'https://www.cryptoninjas.net/'
                    },
                    {
                        title: 'CoinStaker',
                        src: '../../../static/images/logo/coin-staker.svg',
                        hoverSrc: '../../../static/images/logo/crypto-ninjas.svg',
                        href: 'https://www.cryptoninjas.net/'
                    }
                ]
            }
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

                img
                    height 60px

                    @media (max-width 768px)
                        height unset
                        width 100%
                        max-height 60px
</style>