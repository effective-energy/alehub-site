<template>
    <div class="info1-distribution-tokens">
        <h2 class="info-title">
            {{ title }}
        </h2>
        <v-layout class="layout-margin-top">
            <v-flex xs4 class="item"
                    v-for="item in items">
                <img :src="item.src"
                     :alt="item.alt">
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
    .layout-margin-top
        margin-top 40px !important

    .item-text
        margin-top 32px

    .item-text, .additional-info-title
        font-family MuseoSansCyrl500
        font-size 18px
        font-weight 500
        line-height 1.33
        letter-spacing normal
        text-align left
        color #ffffff

    .info-title
        font-family MuseoSansCyrl300
        font-size 48px
        line-height .67
        text-align left
        color #ffffff
        text-transform uppercase

    img
        height 48px

    .additional-info-text
        opacity .97
        font-family MuseoSansCyrl300
        font-size 18px
        line-height 1.33
        text-align left
        color #ffffff
</style>