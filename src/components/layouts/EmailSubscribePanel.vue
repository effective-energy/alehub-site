<template>
    <div class="email-subscribe-panel"
         :class="{ 'email-subscribe-panel__yellow': inDarkSection,
                 'email-subscribe-panel__stop': isScrollInFooter, 'email-subscribe-panel__rtl': isRtl }">
        <div class="close__email-subscribe-panel"
             @click="toggleEmailSubscribeAlert">
            <img :src="alertButtonInDarkSection(emailButtonClass) ? '../../static/images/cancel-dark.svg' :
                         '../../static/images/cancel-light.svg'"
                 alt="close subscribe">
        </div>
        <div class="email-subscribe__wrap">
            <p>
                {{$t("emailSubscribePanel.newsletter")}}
            </p>
            <form @submit.prevent="subscribe">
                <label class="top-label-subscribe"
                       :class="{ 'error-label': subscriber.error,
                           'exist-label': subscriber.exist,
                           'success-label': subscriber.success }"
                       v-if="subscriber.error || subscriber.exist || subscriber.success">
                    <span v-if="subscriber.error">{{$t("footer.right.error")}}</span>
                    <span v-if="subscriber.success">successful subscription</span>
                    <span v-if="subscriber.exist">this email is already in use</span>
                </label>
                <input id="subscribe-email-input"
                       type="text"
                       :placeholder='$t("emailSubscribePanel.YourAddress")'
                       required
                       :class="{ 'error__email-subscribe-input': subscriber.error,
                               'success__email-subscribe-input': subscriber.success,
                               'exist__email-subscribe-input': subscriber.exist}"
                       v-model="subscriber.email"
                       @blur="blurCheckCorrectEmail(subscriber.email)"
                       @input="inputCheckCorrectEmail(subscriber.email)"
                       :disabled="subscriber.loader">
                <button type="submit"
                        :disabled="subscriber.loader">
                    {{$t("emailSubscribePanel.subscribe")}}
                </button>
            </form>
        </div>
        <div class="web-push-notif">
            <label for="toggle-web-push">
                {{$t("emailSubscribePanel.turnOn")}}
            </label>
            <label class="switch-control"
                   id="toggle-web-push"
                   @click="toggleNotification">
                <input type="checkbox">
                <span class="slider"></span>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EmailSubscribePanel',
        components: {

        },
        props: {
            inDarkSection: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .email-subscribe-panel
        z-index 1000
        position fixed
        bottom 75px
        right 200px
        display flex
        flex-direction column
        justify-content space-between
        width 400px
        height 175px
        padding 20px 25px 20px 20px
        background-color #343a49
        border-radius 4px
        -webkit-transition all .3s ease-out
        -o-transition all .3s ease-out
        transition all .3s ease-out
        -webkit-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        -moz-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)

        @media (max-width 768px)
            display none !important

        @media (min-width 768px) and (max-width 1024px)
            right 150px
            bottom 50px
            height 150px

        @media (min-width 1024px) and (max-width 1440px)
            right 170px
            bottom 50px
            height 150px

        .close__email-subscribe-panel
            cursor pointer
            position absolute
            right 10px
            left auto
            top 10px

            img
                width 15px

        .email-subscribe__wrap
            p
                color #f7f7f7
                font-family MuseoSansCyrl500
                font-weight 500
                margin-bottom 10px

            form
                position relative
                display flex
                justify-content space-between

                .top-label-subscribe
                    position absolute
                    top -10px
                    left 15px
                    margin 0
                    font-size 12px
                    font-family MuseoSansCyrl500
                    font-weight 700
                    letter-spacing .4px
                    padding 0 7px

                .error-label
                    background-color #ff4f4f
                    color #f7f7f7

                .success-label
                    background-color green
                    color #f7f7f7

                .exist-label
                    background-color #2e86ce
                    color #f7f7f7


                input
                    width 67%
                    background-color #f0f0f0
                    border-radius 3px
                    border solid 1px transparent
                    border-bottom-width 1.5px
                    font-family MuseoSansCyrl300
                    font-size 14px
                    color #666666
                    padding 7px 15px 7px 15px
                    font-weight 700
                    -webkit-transition all .3s ease-out
                    -o-transition all .3s ease-out
                    transition all .3s ease-out

                    &::-webkit-input-placeholder
                        color #909090

                    &::-moz-placeholder
                        color #909090

                    &:-ms-input-placeholder
                        color #909090

                    &:-moz-placeholder
                        color #909090

                    &:focus
                        color #333333
                        outline none

                    &:disabled
                        color #666666
                        background-color #cccccc

                .error__email-subscribe-input
                    border-color #ff4f4f

                .success__email-subscribe-input
                    border-color green

                .exist__email-subscribe-input
                    border-color #2e86ce

                button
                    width 30%
                    cursor pointer
                    background-color #ffd24f
                    font-family MuseoSansCyrl300
                    font-size 14px
                    font-weight 700
                    color #34343e
                    padding 8px 5px
                    margin 0 0 0 12px
                    border 1px solid #ffd24f
                    border-radius 3px
                    white-space nowrap
                    -webkit-transition all .2s ease-out
                    -o-transition all .2s ease-out
                    transition all .2s ease-out

                    &:active
                        background-color #ffbe00
                        border 1px solid #d39e00

                    &:focus
                        outline none

                    &:disabled
                        color #666666
                        background-color #cccccc
                        border 1px solid rgba(0, 0, 0, .75)
                        -webkit-box-shadow inset 0 0 6px 0 rgba(0, 0, 0, .75)
                        -moz-box-shadow inset 0 0 6px 0 rgba(0, 0, 0, .75)
                        box-shadow inset 0 0 6px 0 rgba(0, 0, 0, .75)

        .web-push-notif
            position relative
            display flex
            flex-direction row
            justify-content flex-start
            align-items center

            label
                color #dedfe1
                font-family MuseoSansCyrl500
                font-weight 500
                margin 0

            .switch-control
                right 0
                position absolute
                display inline-block
                width 40px
                height 22px

                input
                    display none !important

                    &:checked + .slider
                        background-color #3292e0

                        &:before
                            background-color #ffd24f
                            -webkit-transform translateX(18px)
                            -ms-transform translateX(18px)
                            transform translateX(18px)


                .slider
                    position absolute
                    cursor pointer
                    top 0
                    left 0
                    right 0
                    bottom 0
                    background-color #dedfe1
                    -webkit-transition .5s
                    transition .5s
                    border-radius 20px
                    -webkit-box-shadow inset 0 0 4px 0 rgba(0, 0, 0, .5)
                    -moz-box-shadow inset 0 0 4px 0 rgba(0, 0, 0, .5)
                    box-shadow inset 0 0 4px 0 rgba(0, 0, 0, .5)

                    &:before
                        position absolute
                        content ""
                        height 16px
                        width 16px
                        border-radius 50%
                        left 3px
                        bottom 3px
                        background-color #5a8bb3
                        -webkit-transition .4s ease
                        transition .4s ease
                        -webkit-box-shadow 0 0 4px 0 rgba(0, 0, 0, .3)
                        -moz-box-shadow 0 0 4px 0 rgba(0, 0, 0, .3)
                        box-shadow 0 0 4px 0 rgba(0, 0, 0, .3)
</style>