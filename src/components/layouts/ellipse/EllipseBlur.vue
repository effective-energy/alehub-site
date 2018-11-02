<template>
    <div class="ellipse-blur"></div>
</template>

<script>
    export default {
        name: 'EllipseBlur'
    }
</script>

<style lang="stylus" scoped>
    .ellipse-blur
        opacity .5
        border-radius 50%
        -webkit-filter blur(120px)
        filter blur(120px)
        background-color rgba(252,130,53, .5)
        z-index 1
        position absolute

        @media (min-width 600px)
            width 200px
            height 200px
            top "calc(50% - %s)" % 100px

        @media (min-width 960px)
            width 380px
            height 380px
            top "calc(50% - %s)" % 190px

        @media (min-width 1264px)
            width 560px
            height 560px
            top "calc(50% - %s)" % 280px
</style>