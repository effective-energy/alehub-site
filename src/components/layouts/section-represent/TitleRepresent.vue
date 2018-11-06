<template>
    <h2 class="title-represent">
        {{ title }}
    </h2>
</template>

<script>
    export default {
        name: 'TitleRepresent',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .title-represent
        color white
        font-family MuseoSansCyrl700
        line-height 1.33
        text-transform uppercase

        @media (min-width 0)
            font-size 38px

        @media (min-width 600px)
            font-size 38px

        @media (min-width 960px)
            font-size 48px

        @media (min-width 1264px)
            font-size 48px
</style>