<template>
    <div class="partners-block"
         :class="{ 'partners-block__dark': isDark }">
        <div class="title">
            {{ $t("partners.title") }}:
        </div>
        <div class="partners-block__list">
            <div class="title__list">
                {{ $t("partners.title") }}:
            </div>
            <a target="_blank"
               v-for="item in partners"
               :href="item.href">
                <transition name="fade-partners">
                    <img class="light"
                         :src="calcImgSrc(item)"
                         :alt="item.title"
                         v-if="!isDark">
                </transition>
                <transition name="fade-partners">
                    <img class="dark"
                         :src="calcImgDarkSrc(item)"
                         :alt="item.title"
                         v-if="isDark">
                </transition>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PartnersBlock',
        props: {
            isDark: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                partners: [
                    {
                        title: 'ITMO University',
                        src: '../../../static/images/logo/itmo-en.svg',
                        darkSrc: '../../../static/images/logo/itmo-en-fff.svg',
                        srcRu: '../../../static/images/logo/itmo.svg',
                        srcDarkRu: '../../../static/images/logo/itmo-light.svg',
                        href: 'http://en.ifmo.ru/en/'
                    },
                    {
                        title: 'Crypto b2b',
                        src: '../../../static/images/logo/b2b.svg',
                        darkSrc: '../../../static/images/logo/b2b-light.svg',
                        href: 'https://cryptob2b.io/ru/'
                    },
                    {
                        title: 'Blockchain Spb',
                        src: '../../../static/images/logo/bear.svg',
                        darkSrc: '../../../static/images/logo/bear-light.svg',
                        href: 'https://www.blockchain-spb.org/'
                    },
                    {
                        title: 'Serokell',
                        src: '../../../static/images/logo/serokell.svg',
                        darkSrc: '../../../static/images/logo/serokell-light.svg',
                        href: 'https://serokell.io/'
                    }
                ]
            }
        },
        methods: {
            calcImgSrc: function (item) {
                if (item.hasOwnProperty('srcRu') && this.$i18n.locale === 'ru')
                    return item.srcRu;
                return item.src;
            },
            calcImgDarkSrc: function (item) {
                if (item.hasOwnProperty('srcDarkRu') && this.$i18n.locale === 'ru')
                    return item.srcDarkRu;
                return item.darkSrc;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .partners-block
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

        .partners-block__list
            flex-basis 80%
            display flex
            flex-direction row
            flex-wrap wrap
            justify-content space-evenly

            @media (max-width 768px)
                flex-basis unset
                flex-direction column
                align-items center

            @media (min-width 425px) and (max-width 768px)
                height 75vh

            @media (max-width 425px)
                height 100vh

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

                .fade-partners-enter
                    opacity 0

                .fade-partners-enter-active
                    -webkit-transition all .5s ease-in-out
                    -o-transition all .5s ease-in-out
                    transition all .5s ease-in-out

                @media (max-width 768px)
                    margin 0
                    flex-basis unset

                img
                    height 60px

                    @media (max-width 768px)
                        height unset
                        width 100%
                        max-height 60px

    .partners-block__dark
        background-color #343a49

        .title
            color #f7f7f7
</style>