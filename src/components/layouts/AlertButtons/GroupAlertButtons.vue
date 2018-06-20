<template>
    <div class="group-alert-button">
        <transition name="fade">
            <email-subscribe-alert-panel v-if="openedEmailSubscribePanel"
                                         :opened-email-subscribe-panel="openedEmailSubscribePanel"
                                         :in-dark-section="emailInDarkSection"/>
        </transition>

        <email-subscribe-alert-button :email-button-class="emailButtonClass"
                                      :opened-email-subscribe-panel="openedEmailSubscribePanel"/>

        <!--<telegram-alert-button-mobile/>-->

        <telegram-alert-button :tg-button-class="tgButtonClass"
                               :tg-button-messages-class="tgButtonMessagesClass"
                               :tg-in-dark-section="tgInDarkSection"/>


    </div>
</template>

<script>
    import EmailSubscribeAlertPanel from './EmailSubscribeAlertPanel';
    import EmailSubscribeAlertButton from './EmailSubscribeAlertButton';
    import TelegramAlertButtonMobile from './TelegramAlertButtonMobile';
    import TelegramAlertButton from './TelegramAlertButton';

    export default {
        name: 'GroupAlertButtons',
        components: {
            EmailSubscribeAlertPanel,
            EmailSubscribeAlertButton,
            TelegramAlertButtonMobile,
            TelegramAlertButton
        },
        props: {
            emailButtonClass: {
                type: String,
                required: true
            },
            emailInDarkSection: {
                type: Boolean,
                required: true
            },
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
            },
            scrollInFooter: {
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
        },
        mounted() {
            this.$on('toggleEmailSubscribePanel', toggle => {
                this.openedEmailSubscribePanel = toggle;
            });
        }
    }
</script>

<style lang="stylus" scoped>
    .group-alert-button
        z-index 1000
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        position fixed
        right 100px
        bottom 75px
        width 70px
        height 180px

        @media (max-width 768px)
            display none !important

        @media (min-width 768px) and (max-width 1024px)
            right 60px
            bottom 50px
            width 60px
            height 160px

        @media (min-width 1024px) and (max-width 1440px)
            right 75px
            bottom 50px
            width 60px
            height 160px

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