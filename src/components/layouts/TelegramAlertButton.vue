<template>
    <div id="telegram-alert"
         class="telegram-alert"
         :class="[ tgButtonClass, { 'telegram-alert__stop': isScrollInFooter, 'telegram-alert__rtl': isRtl }]">
        <a href="https://t.me/alehub" target="_blank">
            <img src="../../../static/images/telegram-ic-dark.svg"
                 alt="telegram"
                 v-if="!tgInDarkSection">
            <img src="../../../static/images/telegram-ic-default.svg"
                 alt="telegram"
                 v-if="tgInDarkSection">
        </a>
        <div class="alert-message"
             :class="[ tgButtonMessagesClass, { 'telegram-message__stop': isScrollInFooter, 'telegram-message__rtl': isRtl }]">
            <span>{{ randomNumMessages }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TelegramAlertButton'
    }
</script>

<style lang="stylus" scoped>
    .telegram-alert
        cursor pointer
        position fixed
        right 100px
        bottom 75px
        width 70px
        height 70px
        border-radius 50%
        z-index 1000
        -webkit-transition all .3s ease-in-out
        -o-transition all .3s ease-in-out
        transition all .3s ease-in-out
        -webkit-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        -moz-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)

        @media (max-width 768px)
            display none !important

        @media (min-width 768px) and (max-width 1024px)
            right 60px
            bottom 50px
            width 60px
            height 60px

        @media (min-width 1024px) and (max-width 1440px)
            right 75px
            bottom 50px
            width 60px
            height 60px

        .alert-message
            border-radius 50%
            width 25px
            height 25px
            display flex
            justify-content center
            align-items center
            position fixed
            bottom 125px
            right 95px
            -webkit-transition all .3s ease-in-out
            -o-transition all .3s ease-in-out
            transition all .3s ease-in-out

            @media (min-width 768px) and (max-width 1024px)
                right 60px
                bottom 90px
                width 15px
                height 15px

                span
                    font-size 12px

            @media (min-width 1024px) and (max-width 1440px)
                right 75px
                bottom 95px
                width 20px
                height 20px

                span
                    font-size 12px

        .alert-messages__grey
            background-color #747c8e
            color #fff

        .alert-messages__yellow
            background-color #ffd24f
            color #343a49

        .telegram-message__rtl
            left 95px
            right auto

            @media (min-width 768px) and (max-width 1024px)
                left 60px
                right auto

            @media (min-width 1024px) and (max-width 1440px)
                left 75px
                right auto

        .telegram-message__stop
            bottom 235px

            @media (min-width 768px) and (max-width 1024px)
                bottom 265px

            @media (min-width 425px) and (max-width 768px)
                bottom 433px

        a
            width 100%
            height 100%
            display flex
            align-items center
            justify-content center

            img
                width 45%

        &.telegram-alert__yellow
            background-color #ffd24f

        &.telegram-alert__dark
            background-color #343a49

        &.telegram-alert__stop
            bottom 185px

            @media (min-width 768px) and (max-width 1024px)
                bottom 226px

        &.telegram-alert__rtl
            left 100px
            right auto

            @media (min-width 768px) and (max-width 1024px)
                left 60px
                right auto

            @media (min-width 1024px) and (max-width 1440px)
                left 75px
                right auto
</style>