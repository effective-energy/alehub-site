<template>
    <div class="info2-distribution-tokens">
        <h2 class="info-title">
            {{ title }}
        </h2>
        <v-layout class="layout-margin-top">
            <v-flex xs6 v-for="item in items">
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

    .info2-distribution-tokens
        color white

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