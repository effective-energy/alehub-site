<template>
    <a id="telegram-alert-mobile"
       class="telegram-alert-mobile"
       href="https://t.me/alehub"
       target="_blank"
       v-if="openedMobileAlert && !openedModalMenu"
       :class="tgButtonMobileClass">

        <div class="telegram-alert-mobile__wrap">
            <img alt="telegram"
                 :src="(tgMobileInDarkSection) ? icon.dark: icon.white">
            <span>{{ 'Join us in telegram' }}</span>
        </div>

        <img :src="(tgMobileInDarkSection) ? close.white : close.dark"
             @click.prevent="doCloseTelegramAlertMobile">
    </a>
</template>

<script>
    export default {
        name: 'TelegramAlertButtonMobile',
        props: {
            tgButtonMobileClass: {
                type: String,
                required: true
            },
            openedModalMenu: {
                type: Boolean,
                required: true
            },
            tgMobileInDarkSection: {
                type: Boolean,
                required: true
            }
        },
        watch: {
            tgMobileInDarkSection: function (val) {
                console.log(val, 'watch tgMobileInDarkSection');
            }
        },
        data() {
            return {
                openedMobileAlert: true,
                icon: {
                    white: '../../../../static/images/telegram-ic-default.svg',
                    dark: '../../../../static/images/telegram-ic-dark.svg'
                },
                close: {
                    white: '../../../../static/images/cancel-light.svg',
                    dark: '../../../../static/images/cancel-dark.svg'
                }
            }
        },
        methods: {
            doCloseTelegramAlertMobile: function () {
                this.openedMobileAlert = !this.openedMobileAlert;
            }
        },
        mounted() {
            console.log(this.tgMobileInDarkSection, 'tgMobileInDarkSection');
        }
    }
</script>

<style lang="stylus" scoped>
    .telegram-alert-mobile
        z-index 1100
        cursor pointer
        -webkit-transition all .3s ease-in-out
        -o-transition all .3s ease-in-out
        transition all .3s ease-in-out
        display flex
        align-items center
        justify-content space-between
        position fixed
        top 74px
        width 100%
        height 40px
        padding 0 40px

        .telegram-alert-mobile__wrap
            display flex
            align-items center

            img
                margin-right 10px
                margin-bottom 2px

            span
                font-family MuseoSansCyrl500
                font-weight 500

        img
            height 15px
            width 15px

        @media (min-width 768px)
            display none !important

        &.telegram-alert-mobile__dark
            background-color #343a49

            .telegram-alert-mobile__wrap
                span
                    color #f7f7f7

        &.telegram-alert-mobile__yellow
            background-color #ffd24f

            .telegram-alert-mobile__wrap
                span
                    color #343a49
</style>