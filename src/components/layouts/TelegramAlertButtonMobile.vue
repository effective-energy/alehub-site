<template>
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
</template>

<script>
    export default {
        name: 'TelegramAlertButtonMobile'
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
</style>