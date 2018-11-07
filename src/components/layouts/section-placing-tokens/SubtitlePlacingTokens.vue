<template>
    <div class="subtitle-placing">
        <h3 class="subtitle-section">
            {{ subtitle1 }}
        </h3>
        <h3 class="subtitle-section">
            {{ subtitle2 }}
        </h3>
    </div>
</template>

<script>
    export default {
        name: 'SubtitleDistributionTokens',
        components: {

        },
        data: () => ({
            subtitle1: 'Принимаем к сборам:',
            subtitle2: 'BTC, ETH, BCH, LTC, DASH, USD'
        })
    }
</script>

<style lang="stylus" scoped>
    .subtitle-placing
        @media (min-width 0)
            text-align left

        @media (min-width 600px)
            text-align left

        @media (min-width 960px)
            text-align center

        @media (min-width 1264px)
            text-align center

    .subtitle-section
        color white
        font-family MuseoSansCyrl300

        @media (min-width 0)
            font-size 18px
            line-height 1.33
            text-align left
            display block

        @media (min-width 600px)
            font-size 18px
            line-height 1.33
            text-align left
            display block

        @media (min-width 960px)
            line-height 1.33
            font-size 24px
            text-align center
            display inline-block

        @media (min-width 1264px)
            line-height 1.33
            font-size 24px
            text-align center
            display inline-block
</style>