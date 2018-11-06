<template>
    <h1 class="background-title"
        :class="(blue) ? 'blue-orange' : 'orange-blue'">
        {{ title }}
    </h1>
</template>

<script>
    export default {
        name: 'BackgroundTitle',
        props: {
            title: {
                type: String,
                required: true
            },
            blue: {
                type: Boolean,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    gr-blue = #17136a
    gr-orange = #8d4b3e

    .background-title
        z-index 1
        position absolute
        font-family MuseoSansCyrl700
        text-transform uppercase
        user-select none

        @media (min-width 0)
            font-size 60px

        @media (min-width 600px)
            font-size 85px

        @media (min-width 960px)
            font-size 120px

        @media (min-width 1264px)
            font-size 150px

        &.blue-orange
            background linear-gradient(87deg, gr-blue, gr-orange)
            -webkit-background-clip text
            -webkit-text-fill-color transparent

        &.orange-blue
            background linear-gradient(to left, gr-blue, gr-orange)
            -webkit-background-clip text
            -webkit-text-fill-color transparent
</style>