<template>
    <div class="select-language">
        <img class="flag"
             src="../../../../static/images/languages/rus-ic.svg"
             alt="rus">
        <span class="lang">
            {{ lang }}
        </span>
        <img class="arrow"
             src="../../../../static/images/arrows/arrow-bottom-ffffff.svg"
             alt="arrow down">
    </div>
</template>

<script>
    export default {
        name: 'SelectLanguage',
        data: () => ({
            lang: 'RU'
        })
    }
</script>

<style lang="stylus" scoped>
    .select-language
        display flex
        align-items center
        width 100%
        justify-content space-between

        .flag
            width 24px
            height 24px

        .lang
            font-family MuseoSansCyrl700
            font-size 18px
            line-height 1.33
            text-align left
            color #ffffff 

        .arrow
            height 8px
</style>