<template>
    <h2 class="title-placing-token">
        {{ title }}
    </h2>
</template>

<script>
    import TitleSection from '../text/Title2Section';

    export default {
        name: 'Title1PlacingTokens',
        components: {
            TitleSection
        },
        data: () => ({
            title: 'Размещение токенизированных акций'
        })
    }
</script>

<style lang="stylus" scoped>
    .title-placing-token
        color white
        font-family MuseoSansCyrl500
        text-transform uppercase

        @media (min-width 0)
            font-size 24px
            line-height 1.33
            text-align left

        @media (min-width 600px)
            font-size 24px
            line-height 1.33
            text-align left

        @media (min-width 960px)
            font-size 32px
            line-height 1.5
            text-align center

        @media (min-width 1264px)
            font-size 32px
            line-height 1.5
            text-align center

</style>