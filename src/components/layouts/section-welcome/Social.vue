<template>
    <div class="social">
        <span class="text">
            {{ text }}
        </span>
        <social-block/>
    </div>
</template>

<script>
    import SocialBlock from '../SocialBlock';

    export default {
        name: 'Social',
        components: {
            SocialBlock
        },
        data: () => ({
            text: 'Присоединяйтесь:'
        })
    }
</script>

<style lang="stylus" scoped>
    .social
        @media (min-width 0)
            display flex
            flex-direction column
            justify-content center

        @media (min-width 600px)
            display flex
            flex-direction column
            justify-content center

        @media (min-width 960px)
            display flex
            flex-direction row
            justify-content center

        @media (min-width 1264px)
            display flex
            flex-direction row
            justify-content center

    .text
        color white
        font-family MuseoSansCyrl300
        font-size 24px
        opacity .72
        line-height 1.33

        @media (min-width 0)
            text-align center
            margin-bottom 42px
            margin-right 0

        @media (min-width 600px)
            text-align center
            margin-bottom 42px
            margin-right 0

        @media (min-width 960px)
            text-align left
            margin-bottom 0
            margin-right 40px

        @media (min-width 1264px)
            text-align left
            margin-bottom 0
            margin-right 40px
</style>