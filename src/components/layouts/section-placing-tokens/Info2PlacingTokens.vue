<template>
    <div class="info2-distribution-tokens">
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
                    md6
                    lg6
                    xl6>
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
        name: 'Info2PlacingTokens',
        data: () => ({
            title: 'Utility token axel',
            items: [
                {
                    src: '../../../../static/images/icons/placing-tokens/placing-tokens-21-ic.svg',
                    alt: 'reduce-ic',
                    text: 'Уменьшает количество конверсий валют'
                },
                {
                    src: '../../../../static/images/icons/placing-tokens/placing-tokens-21-ic.svg',
                    alt: 'destroy-ic',
                    text: 'Уничтожается при выводе'
                }
            ],
            additionalInfo: {
                title: 'Ликвидность',
                text: 'Не торгуется на биржах'
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

    .info2-distribution-tokens
        color white

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