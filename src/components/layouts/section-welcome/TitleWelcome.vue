<template>
    <h2 class="title-welcome">
        {{ title }}
    </h2>
</template>

<script>
    import Title2Section from '../text/Title2Section';

    export default {
        name: 'TitleWelcome',
        components: {
            Title2Section
        },
        data: () => ({
            title: 'Добро пожаловать в систему управления будущего!'
        })
    }
</script>

<style lang="stylus" scoped>
    .title-welcome
        color white
        font-family MuseoSansCyrl500
        text-transform uppercase
        text-align center
        margin-bottom 20px

        @media (min-width 0)
            font-size 22px
            line-height 2.22
            font-weight 700

        @media (min-width 600px)
            font-size 22px
            line-height 2.22
            font-weight 700

        @media (min-width 960px)
            font-size 32px
            line-height 1.5

        @media (min-width 1264px)
            font-size 32px
            line-height 1.5
</style>