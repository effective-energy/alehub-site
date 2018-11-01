<template>
    <div class="logo">
        <span class="text">
            Alehub
        </span>
        <div class="circle-orange"></div>
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
            font-size 32px
            text-transform uppercase

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