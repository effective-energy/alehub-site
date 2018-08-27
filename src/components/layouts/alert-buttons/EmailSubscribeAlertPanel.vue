<template>
    <div class="email-subscribe-panel__wrap">
        <transition name="fade">
            <div class="email-subscribe-panel"
                 v-if="openedEmailSubscribePanel"
                 :class="{ 'email-subscribe-panel__yellow': inDarkSection, 'email-subscribe-panel__rtl': rtl }">
                <div class="email-subscribe-panel__close"
                     @click="closeEmailSubscribePanel">
                    <img :src="inDarkSection ? close.dark : close.white"
                         alt="close subscribe">
                </div>
                <div class="email-subscribe__wrap">
                    <p>
                        {{ $t("emailSubscribePanel.newsletter") }}
                    </p>
                    <form @submit.prevent="subscribe">
                        <label class="top-label-subscribe"
                               :class="calcTopLabelClass"
                               v-if="subscriber.status">
                            <span>{{ calcTopLabelText }}</span>
                        </label>
                        <input id="subscribe-email-input"
                               type="text"
                               autocomplete="off"
                               required
                               :class="calcInputClass"
                               :placeholder='$t("emailSubscribePanel.yourAddress")'
                               :disabled="subscriber.loader"
                               v-model="subscriber.email"
                               @blur="blurCheckCorrectEmail(subscriber.email)"
                               @input="inputCheckCorrectEmail(subscriber.email)"
                               @keyup.enter="subscribe">
                        <button type="submit"
                                :disabled="subscriber.loader">
                            {{ $t("emailSubscribePanel.subscribe") }}
                        </button>
                    </form>
                </div>
                <div class="web-push-notif">
                    <label for="toggle-web-push">
                        {{ $t("emailSubscribePanel.turnOn") }}
                    </label>
                    <label class="switch-control"
                           id="toggle-web-push"
                           @click="toggleNotification">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'EmailSubscribePanel',
        components: {},
        props: {
            openedEmailSubscribePanel: {
                type: Boolean,
                required: true
            },
            inDarkSection: {
                type: Boolean,
                required: true
            },
            rtl: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                subscriber: {
                    email: '',
                    initialFocus: false,
                    loader: false,
                    status: false
                },
                close: {
                    white: '../../../static/images/cancel-light.svg',
                    dark: '../../../static/images/cancel-dark.svg'
                }
            }
        },
        watch: {
            openedEmailSubscribePanel: function (opened) {
                if (!opened) {
                    this.subscriber.email = '';
                    this.subscriber.initialFocus = false;
                    this.subscriber.loader = false;
                    this.subscriber.status = false;
                }
            }
        },
        computed: {
            calcTopLabelClass: function () {
                switch (this.subscriber.status) {
                    case 'success':
                        return 'success-label';
                    case 'exist':
                        return 'exist-label';
                    case 'error':
                        return 'error-label';
                    default:
                        return '';
                }
            },
            calcTopLabelText: function () {
                switch (this.subscriber.status) {
                    case 'success':
                        return this.$t('emailSubscribePanel.label.success');
                    case 'exist':
                        return this.$t('emailSubscribePanel.label.exist');
                    case 'error':
                        return this.$t('emailSubscribePanel.label.error');
                    default:
                        return '';
                }
            },
            calcInputClass: function () {
                switch (this.subscriber.status) {
                    case 'success':
                        return 'email-subscribe-input__success';
                    case 'exist':
                        return 'email-subscribe-input__exist';
                    case 'error':
                        return 'email-subscribe-input__error';
                    default:
                        return '';
                }
            }
        },
        methods: {
            closeEmailSubscribePanel: function () {
                this.$parent.$emit('toggleEmailSubscribePanel',);
            },
            blurCheckCorrectEmail: function (email) {
                this.subscriber.initialFocus = this.subscriber.email.length === 0;

                if (this.checkCorrectEmail(email))
                    this.subscriber.status = false;
                else
                    this.subscriber.status = 'error';
            },
            inputCheckCorrectEmail: function (email) {
                if (this.subscriber.initialFocus) {
                    if (this.checkCorrectEmail(email))
                        this.subscriber.status = false;
                    else
                        this.subscriber.status = 'error';
                }
            },
            checkCorrectEmail: function (email) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (email.length === 0)
                    return true;

                return re.test(String(email).toLowerCase());
            },
            subscribe: function () {
                if (this.checkCorrectEmail(this.subscriber.email)) {
                    this.subscriber.loader = true;
                    this.subscriber.status = false;

                    this.$http.post(`https://alehub-4550.nodechef.com/subscribe/new`, {
                        'email': this.subscriber.email
                    }, {
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        this.subscriber.loader = false;
                        if (response.body.message === 'Email already exist') {
                            localStorage.setItem('subscriber-email', this.subscriber.email);
                            return this.subscriber.status = 'exist';
                        }
                        this.subscriber.status = 'success';
                        localStorage.setItem('subscriber-email', this.subscriber.email);
                    }, response => {
                        this.subscriber.loader = false;
                        this.subscriber.status = 'error';
                    })
                }
            },
            toggleNotification: function () {

            },
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
        -webkit-transition all .3s ease-in-out
        -o-transition all .3s ease-in-out
        transition all .3s ease-in-out
        -webkit-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        -moz-box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)
        box-shadow 1px 2px 3px 0 rgba(0, 0, 0, .5)

        @media (min-width 768px) and (max-width 1024px)
            right 150px
            bottom 50px
            height 150px

        @media (min-width 1024px) and (max-width 1440px)
            right 170px
            bottom 50px
            height 150px

        .email-subscribe-panel__close
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

                    &.error-label
                        background-color #ff4f4f
                        color #f7f7f7
    
                    &.success-label
                        background-color green
                        color #f7f7f7
    
                    &.exist-label
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

                .email-subscribe-input__success
                    border-color green

                .email-subscribe-input__exist
                    border-color #2e86ce

                .email-subscribe-input__error
                    border-color #ff4f4f

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

    .fade-enter-active,
    .fade-leave-active
        -webkit-transition all .5s ease-in-out
        -o-transition all .5s ease-in-out
        transition all .5s ease-in-out

    .fade-enter,
    .fade-leave-active
        opacity 1
        bottom -200px
</style>