<template>
    <div class="logo">
        <span class="text">
            Alehub
        </span>
        <!--<div class="circle-orange"></div>-->
    </div>
</template>

<script>
    export default {
        name: 'Logo'
    }
</script>

<style lang="stylus" scoped>
    h = 38px
    w = 38px
    orange = #fc8435

    .logo
        position relative

        .text
            z-index 2
            position inherit
            color white
            font-family MuseoSansCyrl700
            text-transform uppercase

            @media (min-width 0)
                font-size 20px
                line-height 1.2
                letter-spacing .8px

            @media (min-width 600px)
                font-size 24px
                line-height 1.2
                letter-spacing .8px

            @media (min-width 960px)
                font-size 26px

            @media (min-width 1264px)
                font-size 32px

        .circle-orange
            z-index 1
            top 0
            left 0
            position absolute
            height h
            width w
            border-radius 50%
            background-color orange
</style>