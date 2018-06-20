<template>
    <div id="telegram-alert"
         class="telegram-alert"
         :class="tgButtonClass">
        <a href="https://t.me/alehub" target="_blank">
            <img alt="telegram"
                 :src="(tgInDarkSection) ? icon.dark : icon.white">
        </a>
        <div class="alert-message"
             :class="tgButtonMessagesClass">
            <span>{{ randomNumMessages }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TelegramAlertButton',
        props: {
            tgButtonClass: {
                type: String,
                required: true
            },
            tgButtonMessagesClass: {
                type: String,
                required: true
            },
            tgInDarkSection: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                randomNumMessages: null,
                icon: {
                    white: '../../../static/images/telegram-ic-dark.svg',
                    dark: '../../../static/images/telegram-ic-default.svg'
                }
            }
        },
        mounted() {
            this.randomNumMessages = Math.round(Math.random() * 10) + 1;
        }
    }
</script>

<style lang="stylus" scoped>
    .telegram-alert
        z-index 1000
        cursor pointer
        position relative
        width 100%
        height 70px
        border-radius 50%
        -webkit-transition all .3s ease-in-out
        -o-transition all .3s ease-in-out
        transition all .3s ease-in-out
        -webkit-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        -moz-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)

        @media (min-width 768px) and (max-width 1024px)
            height 60px

        @media (min-width 1024px) and (max-width 1440px)
            height 60px

        .alert-message
            border-radius 50%
            width 25px
            height 25px
            display flex
            justify-content center
            align-items center
            position absolute
            top 0
            right -10px
            -webkit-transition all .3s ease-in-out
            -o-transition all .3s ease-in-out
            transition all .3s ease-in-out

            @media (min-width 768px) and (max-width 1024px)
                width 15px
                height 15px
                top 0
                right -5px

                span
                    font-size 12px

            @media (min-width 1024px) and (max-width 1440px)
                width 20px
                height 20px
                top 0
                right -5px

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