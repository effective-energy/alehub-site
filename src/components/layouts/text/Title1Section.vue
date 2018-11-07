<template>
    <h1 class="title-1-section">
        {{ title }}
    </h1>
</template>

<script>
    export default {
        name: 'TitleSection',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .title-1-section
        color white
        font-family MuseoSansCyrl700
        letter-spacing 1.9px
        text-transform uppercase

        @media (min-width 0)
            font-size 32px
            line-height 1.5
            text-align left

        @media (min-width 600px)
            font-size 32px
            line-height 1.5
            text-align left

        @media (min-width 960px)
            font-size 48px
            line-height 1.33
            text-align center

        @media (min-width 1264px)
            font-size 48px
            line-height 1.33
            text-align center
</style>