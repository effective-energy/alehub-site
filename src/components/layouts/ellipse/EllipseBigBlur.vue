<template>
    <div class="ellipse-big-blur"></div>
</template>

<script>
    export default {
        name: 'EllipseBigBlur'
    }
</script>

<style lang="stylus" scoped>
    .ellipse-big-blur
        opacity .5
        border-radius 50%
        -webkit-filter blur(120px)
        filter blur(120px)
        background-color rgba(252,130,53, .5)
        z-index 1
        position absolute

        @media (min-width 600px)
            width 350px
            height 350px
            top "calc(50% - %s)" % 175px

        @media (min-width 960px)
            width 600px
            height 600px
            top "calc(50% - %s)" % 300px

        @media (min-width 1264px)
            width 780px
            height 780px
            top "calc(50% - %s)" % 390px
</style>