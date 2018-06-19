<template>
    <div class="group-alert-button">
        <transition name="fade">
            <email-subscribe-panel v-if="openedEmailSubscribePanel"
                                   :in-dark-section="emailInDarkSection"/>
        </transition>

        <button type="button"
                id="email-subscribe-alert"
                class="email-subscribe-alert"
                :class="[emailButtonClass, {'email-subscribe-alert__stop': isScrollInFooter, 'email-subscribe-alert__rtl': isRtl }]"
                @click="toggleEmailSubscribeAlert">
            <div class="el-base">
                <div class="el-inner-space">
                    <div class="el-flap"
                         :class="{ 'el-flap-active': openedEmailSubscribePanel }">
                    </div>
                </div>
            </div>
        </button>

        <a id="telegram-alert-mobile"
           class="telegram-alert-mobile"
           href="https://t.me/alehub"
           target="_blank"
           v-if="!closedTelegramAlertMobile && !isOpenedModalMenu"
           :class="{ 'telegram-alert-mobile__yellow': isDarkSection }">

            <div class="telegram-alert-mobile__wrap">
                <img src="../../../static/images/telegram-ic-dark.svg"
                     v-if="!isDarkSection"
                     alt="telegram">
                <img src="../../../static/images/telegram-ic-default.svg"
                     v-if="isDarkSection"
                     alt="telegram">
                <span>{{ 'Join us in telegram' }}</span>
            </div>


            <img src="../../../static/images/cancel-light.svg"
                 v-if="!isDarkSection"
                 @click.prevent="doCloseTelegramAlertMobile">

            <img src="../../../static/images/cancel-dark.svg"
                 v-if="isDarkSection"
                 @click.prevent="doCloseTelegramAlertMobile">
        </a>

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
    </div>
</template>

<script>
    import EmailSubscribePanel from './EmailSubscribePanel';

    export default {
        name: 'GroupAlertButtons',
        components: {
            EmailSubscribePanel
        },
        props: {
            tgButtonClass: {
                type: String,
                required: true
            },
            emailButtonClass: {
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
            },
            emailInDarkSection: {
                type: Boolean,
                required: true
            },
            isRtl: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                openedEmailSubscribePanel: false,
                openedTelegramAlertMobile: true
            }
        },
        methods: {
            toggleEmailSubscribeAlert: function () {
                this.openedEmailSubscribePanel = !this.openedEmailSubscribePanel;
            },
            doCloseTelegramAlertMobile: function () {
                this.openedTelegramAlertMobile = false;
            },
        }
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

    .telegram-alert-mobile
        z-index 1100
        cursor pointer
        -webkit-transition all .3s ease-in-out
        -o-transition all .3s ease-in-out
        transition all .3s ease-in-out
        display flex
        align-items center
        justify-content space-between
        background-color #343a49
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
                color #f7f7f7

        img
            height 15px
            width 15px

        @media (min-width 768px)
            display none !important

    .telegram-alert-mobile__yellow
        background-color #ffd24f

        .telegram-alert-mobile__wrap
            span
                color #343a49

    .email-subscribe-alert
        cursor pointer
        position fixed
        display flex
        justify-content center
        align-items center
        right 100px
        bottom 180px
        width 70px
        height 70px
        border-radius 50%
        border none
        padding 0
        z-index 1000
        -webkit-transition all .3s ease-in-out
        -o-transition all .3s ease-in-out
        transition all .3s ease-in-out
        -webkit-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        -moz-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)

        &:focus
            outline none

        &:active
            -webkit-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .3)
            -moz-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .3)
            box-shadow none
            transform translateY(2px)

        @media (max-width 768px)
            display none !important

        @media (min-width 768px) and (max-width 1024px)
            right 60px
            bottom 140px
            width 60px
            height 60px

        @media (min-width 1024px) and (max-width 1440px)
            right 75px
            bottom 140px
            width 60px
            height 60px

        .el-base
            position relative
            height 22.5px
            width 36px
            border-radius 3px

            .el-inner-space
                border-radius 3px

                .el-flap
                    position absolute
                    top 0
                    left 0
                    border-radius 3px
                    border-right solid 18px transparent
                    border-left solid 18px transparent
                    -webkit-transition all 1s ease-in-out
                    -o-transition all 1s ease-in-out
                    transition all 1s ease-in-out

                .el-flap-active
                    border-top solid 11px #3292e0
                    transform rotateX(180deg)
                    transform-origin center top

        &.email-subscribe-alert__yellow
            background-color #ffd24f

            .el-base
                background-color #1a7bca

                .el-inner-space
                    border-top solid 11px transparent
                    border-right solid 18px #343a49
                    border-bottom solid 11px #343a49
                    border-left solid 18px #343a49

                    .el-flap
                        border-top solid 11px #3292e0

        &.email-subscribe-alert__dark
            background-color #343a49

            .el-base
                background-color #2e86ce

                .el-inner-space
                    border-top solid 11px transparent
                    border-right solid 18px #f7f7f7
                    border-bottom solid 11px #f7f7f7
                    border-left solid 18px #f7f7f7

                    .el-flap
                        border-top solid 11px #ffd24f

        &.email-subscribe-alert__stop
            bottom 290px

            @media (min-width 1024px) and (max-width 1440px)
                bottom 275px

            @media (min-width 768px) and (max-width 1024px)
                bottom 315px

        &.email-subscribe-alert__rtl
            left 100px
            right auto

            @media (min-width 768px) and (max-width 1024px)
                left 60px
                right auto

            @media (min-width 1024px) and (max-width 1440px)
                left 75px
                right auto

    .fade-enter-active,
    .fade-leave-active
        -webkit-transition all .5s ease-in-out
        -o-transition all .5s ease-in-out
        transition all .5s ease-in-out

    .fade-enter,
    .fade-leave-active
        opacity 1
        bottom -150px
</style>