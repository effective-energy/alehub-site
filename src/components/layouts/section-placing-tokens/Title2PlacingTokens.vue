<template>
    <div class="placing-tokens">
        <h2 class="title-placing-token">
            {{ title1 }}
        </h2>
        <h2 class="title-placing-token">
            {{ title2 }}
        </h2>
    </div>
</template>

<script>
    import TitleSection from '../text/Title2Section';

    export default {
        name: 'Title2PlacingTokens',
        components: {
            TitleSection
        },
        data: () => ({
            title1: 'Даты: ',
            title2: '25 июля - 25 ноября'
        })
    }
</script>

<style lang="stylus" scoped>
    .placing-tokens
        @media (min-width 0)
            text-align left

        @media (min-width 600px)
            text-align left

        @media (min-width 960px)
            text-align center

        @media (min-width 1264px)
            text-align center

    .title-placing-token
        color white
        font-family MuseoSansCyrl500
        text-transform uppercase

        @media (min-width 0)
            font-size 24px
            line-height 1.33
            text-align left
            display block

        @media (min-width 600px)
            font-size 24px
            line-height 1.33
            text-align left
            display block

        @media (min-width 960px)
            font-size 32px
            line-height 1.5
            text-align center
            display inline-block

        @media (min-width 1264px)
            font-size 32px
            line-height 1.5
            text-align center
            display inline-block
</style>