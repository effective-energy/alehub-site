<template>
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
</template>

<script>
    export default {
        name: 'EmailAlertButton'
    }
</script>

<style lang="stylus" scoped>
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
</style>