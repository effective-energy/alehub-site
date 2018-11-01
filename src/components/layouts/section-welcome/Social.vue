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
        display flex
        justify-content center

    .text
        color white
        font-family MuseoSansCyrl300
        font-size 24px
        opacity .72
        line-height 1.33
        margin-right 40px
</style>