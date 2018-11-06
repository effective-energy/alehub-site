<template>
    <h2 class="title-slogan">
        {{ title }}
    </h2>
</template>

<script>
    export default {
        name: 'TitleSlogan',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .title-slogan
        text-align center
        color white
        font-family MuseoSansCyrl700
        letter-spacing .5px
        text-transform uppercase

        @media (min-width 0)
            font-size 22px
            line-height 2.22

        @media (min-width 600px)
            font-size 22px
            line-height 2.22

        @media (min-width 960px)
            font-size 30px
            line-height 1.6

        @media (min-width 1264px)
            font-size 30px
            line-height 1.6
</style>