<template>
    <h1 class="main-title">
        {{ title }}
    </h1>
</template>

<script>
    export default {
        name: 'TitleMain',
        data: () => ({
            title: 'Новая эра управления проектами'
        })
    }
</script>

<style lang="stylus" scoped>
    .main-title
        color #ffffff
        font-family MuseoSansCyrl700
        font-size 72px
        line-height 1.33
        text-transform uppercase

        @media (min-width 0)
            font-size 32px
            line-height 1.5

        @media (min-width 600px)
            font-size 44px

        @media (min-width 960px)
            font-size 56px

        @media (min-width 1264px)
            font-size 72px
</style>