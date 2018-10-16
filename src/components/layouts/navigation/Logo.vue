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
            color white
            font-family MuseoSansCyrl700
            font-size 32px

        .circle-orange
            height h
            width w
            background-color orange
</style>