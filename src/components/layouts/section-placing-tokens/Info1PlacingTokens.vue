<template>
    <div class="info1-distribution-tokens">
        <h2 class="info-title">
            {{ title }}
        </h2>
        <v-layout class="layout-margin-top"
                  row
                  wrap>
            <v-flex class="item-flex"
                    v-for="(item, i) in items"
                    :key="i"
                    xs12
                    sm12
                    md4
                    lg4
                    xl4>
                <div class="item-img">
                    <img :src="item.src"
                         :alt="item.alt">
                </div>
                <p class="item-text">
                    {{ item.text }}
                </p>
            </v-flex>
        </v-layout>
        <h4 class="additional-info-title">
            {{ additionalInfo.title }}
        </h4>
        <p class="additional-info-text">
            {{ additionalInfo.text }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Info1PlacingTokens',
        data: () => ({
            title: 'Security token ale',
            items: [
                {
                    src: '../../../../static/images/icons/placing-tokens/placing-tokens-11-ic.svg',
                    alt: 'pay-ic',
                    text: 'Выплаты раз в квартал'
                },
                {
                    src: '../../../../static/images/icons/placing-tokens/placing-tokens-12-ic.svg',
                    alt: 'voice-ic',
                    text: 'Право голоса'
                },
                {
                    src: '../../../../static/images/icons/placing-tokens/placing-tokens-13-ic.svg',
                    alt: 'increase-ic',
                    text: 'Аналог акций'
                }
            ],
            additionalInfo: {
                title: 'Ликвидность',
                text: 'Размещение на биржах'
            }
        })
    }
</script>

<style lang="stylus" scoped>
    .item-img
        flex-shrink 0

        @media (min-width 0)
            text-align center

            img
                height 32px

        @media (min-width 600px)
            text-align center

            img
                height 32px

        @media (min-width 960px)
            text-align center

            img
                height 48px

        @media (min-width 1264px)
            text-align center

            img
                height 48px

    .item-flex
        @media (min-width 0)
            display flex
            align-items center

            .item-img
                width 25%

        @media (min-width 600px)
            display flex
            align-items center

            .item-img
                width 20%

        @media (min-width 960px)
            display block

            .item-img
                width auto

        @media (min-width 1264px)
            display block

            .item-img
                width auto

    .layout-margin-top
        margin-top 40px !important

    .item-text
        font-size 18px
        line-height 1.33

        @media (min-width 0)
            margin 0

        @media (min-width 600px)
            margin-top 0

        @media (min-width 960px)
            margin-top 32px

        @media (min-width 1264px)
            margin-top 32px

    .item-text, .additional-info-title
        font-family MuseoSansCyrl500
        font-weight 500
        letter-spacing normal
        text-align left
        color #ffffff

    .additional-info-title
        font-size 18px
        line-height 1.33

        @media (min-width 0)
            margin-top 24px

        @media (min-width 600px)
            margin-top 24px

        @media (min-width 960px)
            margin-top 0

        @media (min-width 1264px)
            margin-top 0

    .info-title
        font-family MuseoSansCyrl300
        text-align left
        color #ffffff
        text-transform uppercase

        @media (min-width 0)
            font-size 24px
            line-height 1.33

        @media (min-width 600px)
            font-size 24px
            line-height 1.33

        @media (min-width 960px)
            font-size 48px
            line-height .67

        @media (min-width 1264px)
            font-size 48px
            line-height .67

    .additional-info-text
        opacity .97
        font-family MuseoSansCyrl300
        font-size 18px
        line-height 1.33
        text-align left
        color #ffffff
</style>