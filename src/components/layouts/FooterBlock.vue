<template>
    <div id="footer"
         class="footer"
         :class="{ 'footer__sticky': isNotIndex }">
        <div class="row footer-row">
            <div class="col-5 copyright-block"
                 :class="{ 'text-align-right-rtl': isRtl }">
                <router-link class="footer-logo" tag="a" to="/">
                    <div class="ale-logo"
                         :class="{ 'ale-logo__rtl': isRtl }">
                        <img src="../../../static/images/ale-logo-grey.svg"
                             alt="ale-logo">
                        <span>alehub</span>
                    </div>
                </router-link>
                <span class="copyright-text">
				    {{ $t('footer.left.copyright') }}
				<div class="creator-and-terms">
					<a href="https://alehub.io/terms_and_conditions.pdf"
                       target="_blank"
                       class="terms"
                       :class="{ 'terms__rtl': isRtl }">
                        {{ $t('footer.left.terms') }}
                    </a>
                    <a href="https://alehub.io/disclaimer.pdf"
                       target="_blank"
                       class="terms footer-docs-margin"
                       :class="{ 'terms__rtl': isRtl }">
                        Disclaimer
                    </a>
                    <a href="https://alehub.io/сookies_privacy_and_policy.pdf"
                       target="_blank"
                       class="terms footer-docs-margin"
                       :class="{ 'terms__rtl': isRtl }">
                        Cookies Privacy and Policy
                    </a>
				</div>
                    <div class="creator-and-terms">
                        <span class="copyright-text" >
                            <a class="telephone"
                               :class="{ 'terms__rtl': isRtl }"
                               href="tel:+75281916064">
                                +852 8191 6064
                            </a>
                                Hong Kong
                        </span>
                    </div>
                    <div class="creator-and-terms">
                    <div class="creator">
                        <div class="rukin-logo"
                             :class="{ 'rukin-logo__rtl': isRtl }"></div>
                        <span class="rukin-about">
                            {{ $t('footer.left.designBy') }}
                        </span>
                    </div>
                </div>
			</span>
            </div>

            <div class="col-2 back-to-top">
            </div>

            <div class="col-5 footer-social-block">
                <!--<div class="social-networks">-->
                    <social-block :footer="true"/>
                <!--</div>-->
                <div class="subscribe-form">
                    <div class="subscribe-form__wrap"
                         :class="{ 'subscribe-form__wrap-rtl': isRtl }"
                         v-if="!isSuccess">
                        <input class="subscribe-form__email"
                               :class="{ 'error': isError || alreadyExist }"
                               type="text"
                               :placeholder="$t('footer.right.input')"
                               v-model="email"
                               @blur="checkCorrectEmail"
                               @input="inputCheckCorrectEmail"
                               :disabled="isLoader"/>
                        <label class="subscribe-form__error" v-if="isError">
                            {{ $t('footer.right.error') }}
                        </label>
                        <label class="subscribe-form__error" v-if="alreadyExist">
                            Email already exist
                        </label>
                    </div>
                    <button class="subscribe-form__submit"
                            @click="subscribe"
                            :class="{ 'btn-loading': isLoader, 'subscribe-form__submit-rtl': isRtl }"
                            :disabled="isLoader"
                            v-if="!isSuccess">
                        <spinner v-if="isLoader"/>
                        <span v-else>
                            {{ $t('footer.right.btn') }}
                        </span>
                    </button>
                    <p v-else class="subscribe-form__success">
                        You have successfully subscribed to the newsletter. Check your email to confirm your
                        subscription.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SocialBlock from './SocialBlock';
    import Spinner from './Spinner';

    export default {
        name: 'FooterSection',
        components: {
            Spinner,
            SocialBlock
        },
        props: {
            isRtl: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                email: '',
                error: false,
                initialFocus: false,
                success: false,
                exist: false,
                isLoader: false
            }
        },
        watch: {
            error: function (val) {
                console.log(val, 'error');
            }
        },
        computed: {
            isCorrectEmail: function () {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (this.email.length === 0) {
                    return true;
                }
                return re.test(String(this.email).toLowerCase());
            },
            isError: function () {
                // console.log(this.error, 'this.error');
                return this.error;
            },
            isInitialFocus: function () {
                return this.initialFocus;
            },
            isSuccess: function () {
                return this.success;
            },
            alreadyExist: function () {
                return this.exist;
            },
            isNotIndex: function () {
                return this.$route.path !== '/';
            }
        },
        methods: {
            subscribe: function () {
                if (this.isCorrectEmail) {
                    this.isLoader = true;
                    this.$http.post(`https://alehub-4550.nodechef.com/subscribe/new`, {
                        'email': this.email
                    }, {
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        this.isLoader = false;
                        // console.log(response.body);
                        if (response.body.message === 'Email already exist')
                            return this.exist = true;
                        this.success = true;
                    }, response => {
                        this.isLoader = false;
                        this.error = true;
                    })
                }
            },
            inputCheckCorrectEmail: function () {
                if (this.isInitialFocus)
                    this.error = !this.isCorrectEmail;
                this.exist = false;
            },
            checkCorrectEmail: function () {
                (this.email.length === 0) ? this.initialFocus = false : this.initialFocus = true;
                this.error = !this.isCorrectEmail;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .spinner
        height 19px !important
        width 19px !important

    .btn-loading
        background-color #fff !important

    .footer__sticky
        width 100%
        position absolute
        bottom 0

    .footer
        background-color #ececf0
        padding 32px 0
        padding-top 12px
        padding-left 64px
        padding-right 64px

        .footer-logo
            text-decoration: none;

        .footer-row
            display flex
            align-items center

        .back-to-top
            cursor pointer
            display flex
            justify-content center

        .footer-social-block
            display flex
            flex-direction column

            .subscribe-form
                display flex
                justify-content flex-end

                .subscribe-form__wrap
                    position relative
                    text-align right
                    width 100%

                    @media (max-width 1023px)
                        margin-bottom 14px

                    @media (max-width 425px)
                        width 100% !important
                        margin-bottom 30px

                    .subscribe-form__email
                        order 2
                        background none
                        border-radius 3px
                        border solid .5px #a3a3a9
                        border-bottom-width 1.5px
                        font-family MuseoSansCyrl300
                        font-size 14px
                        color #a3a3a9
                        padding 7px 20px 7px 20px
                        font-weight 700
                        min-width 250px
                        -webkit-transition all .3s ease-out
                        -o-transition all .3s ease-out
                        transition all .3s ease-out

                        @media (max-width 1023px)
                            margin-bottom 0

                        @media (max-width 425px)
                            font-size 16px
                            height 50px
                            text-align center

                        @media (max-width 320px)
                            min-width 100%

                        &:focus
                            color #34343e
                            border-color #34343e
                            outline none

                    .error
                        border-color #ff4f4f !important
                        color #ff4f4f !important

                    .subscribe-form__error
                        order 1
                        font-size 10px
                        background-color #ececf0
                        padding 0
                        color #ff4f4f
                        margin-bottom 0
                        position absolute
                        top 40px
                        right 170px

                        @media ( max-width 1023px)
                            margin-bottom 10px
                            left 0
                            right unset

                        @media ( max-width 425px)
                            top 54px

                .subscribe-form__wrap-rtl
                    text-align left

                .subscribe-form__submit
                    cursor pointer
                    background-color #ffd24f
                    font-family MuseoSansCyrl300
                    font-size 14px
                    font-weight 700
                    font-style normal
                    font-stretch normal
                    line-height normal
                    letter-spacing normal
                    color #34343e
                    padding 8px 20px
                    margin 0 0 0 12px
                    border 1px solid #ffd24f
                    border-radius 3px
                    white-space nowrap
                    -webkit-transition all .3s ease-out
                    -o-transition all .3s ease-out
                    transition all .3s ease-out
                    max-height 37px

                    @media (max-width 425px)
                        font-size 16px
                        height 50px
                        margin-bottom 15px

                    &:active
                        border 1px solid #d39e00

                    &:focus
                        outline none

                .subscribe-form__submit-rtl
                    margin 0 12px 0 0

                .subscribe-form__success
                    font-size 14px
                    text-align right
                    padding-right 20px

                    @media (max-width 767px)
                        text-align center
                        padding-right 0

            .social-networks
                display flex
                margin-bottom 10px
                justify-content flex-end

                @media (max-width 425px)
                    justify-content center
                    margin-bottom 30px

                .social-item
                    width 46px
                    height 36px
                    margin 0 6px
                    display flex
                    justify-content center
                    align-items center

                    &:hover

                        .social-icon-fb
                            background-image url(../../../static/images/fb-hovered.svg)

                        .social-icon-insta
                            background-image url(../../../static/images/instagram-hovered.svg)

                        .social-icon-youtube
                            background-image url(../../../static/images/yt-hovered.svg)

                        .social-icon-twitter
                            background-image url(../../../static/images/twitter-hovered.svg)

                        .social-icon-tg
                            background-image url(../../../static/images/telegram-ic-hovered.svg)

                        .social-icon-vk
                            background-image url(../../../static/images/vk-hovered.svg)

                        .social-icon-btc-talk
                            background-image url(../../../static/images/social/btc-talk-hovered.svg)

                        .social-icon-github
                            background-image url(../../../static/images/social/github-ic-hovered.svg)

                    .social-icon
                        background-repeat no-repeat
                        background-size contain
                        -webkit-transition background .3s ease-in-out
                        -o-transition background color .3s ease-in-out
                        transition background color .3s ease-in-out

                    .social-icon-fb
                        width 8.4px
                        height 16.8px
                        background-image url(../../../static/images/social/fb.svg)

                    .social-icon-insta
                        width 16.08px
                        height 16.08px
                        background-image url(../../../static/images/social/instagram.svg)

                    .social-icon-youtube
                        width 19.2px
                        height 13.68px
                        background-image url(../../../static/images/social/yt.svg)

                    .social-icon-twitter
                        width 16.8px
                        height 14.4px
                        background-image url(../../../static/images/social/twitter.svg)

                    .social-icon-tg
                        width 16.8px
                        height 14.4px
                        background-image url(../../../static/images/social/tg.svg)

                    .social-icon-btc-talk
                        width 23px
                        height 21px
                        background-image url(../../../static/images/social/btc-talk.svg)

                    .social-icon-github
                        width 24px
                        height 22px
                        background-image url(../../../static/images/social/github-ic.svg)

                    .social-icon-vk
                        width 19.2px
                        height 10.8px
                        background-image url(../../../static/images/social/vk.svg)

        .copyright-block
            a.router-link-exact-active
                &:hover
                    text-decoration none

            .ale-logo
                font-family Fairview
                font-size 40px
                display flex
                align-items center
                width 127px
                height 40px
                margin-bottom 16px
                background-repeat no-repeat
                background-size contain
                text-transform uppercase
                text-decoration none
                underline none
                color #919198
                padding-top 12px

                img
                    margin 0 8px 0 0

            .ale-logo__rtl
                img
                    margin 0 0 0 8px

            .copyright-text
                opacity 0.4
                font-family MuseoSansCyrl500
                font-size 14px
                font-weight 500
                font-style normal
                line-height 1.57
                letter-spacing normal
                color #34343e

                @media (max-width 425px)
                    text-align center

            .creator-and-terms
                display flex
                flex-direction row

                .creator
                    display flex
                    align-items center

                    .rukin-logo
                        width 20px
                        height 12px
                        background-image url('../../../static/images/ar-logo.svg')
                        background-size cover
                        margin 0 8px 0 0

                    .rukin-logo__rtl
                        margin 0 0 0 8px

                    .rukin-about
                        opacity 0.4
                        font-family MuseoSansCyrl500
                        font-size 14px
                        font-weight 500
                        font-style normal
                        line-height 1.57
                        letter-spacing normal
                        color #34343e

                .terms
                    opacity 0.4
                    font-family MuseoSansCyrl500
                    font-size 14px
                    font-weight 500
                    font-style normal
                    line-height 1.57
                    letter-spacing normal
                    color #34343e
                    text-decoration underline
                    white-space nowrap
                    margin 0 0 3px 0    
                .footer-docs-margin
                    margin 0 0 0 12px    

                .telephone
                    color #34343e

                .terms__rtl
                    margin 0 12px 0 0

    /*.top-icon*/
    /*width 32px*/
    /*height 8px*/

    @media (max-width 1199px)
        .footer
            .back-to-top
                min-width 100px
                align-self stretch

            .footer-row
                align-items flex-end

            .copyright-block
                .copyright-text
                    white-space nowrap

                .creator-and-terms
                    .creator
                        white-space nowrap

    @media (max-width 1023px)
        .footer
            .copyright-block
                .creator-and-terms
                    flex-direction column
                    align-items flex-start

                    .terms
                        margin-left 0 !important

            .footer-social-block
                align-items flex-end

                .subscribe-form
                    display flex
                    flex-direction column
                    align-items flex-end
                    width 100%
                    max-width 280px

                    input
                        margin-bottom 8px
                        width 100%

                    button
                        margin-left 0
                        width 100%

    @media (max-width 768px)
        .footer
            padding-right 32px
            padding-left 32px

            .footer-row
                flex-direction column
                align-items center

                .copyright-block
                    order 3

                    .ale-logo
                        margin 0 auto
                        margin-bottom 12px

                    &.col-5
                        max-width 100%
                        display flex
                        flex-direction column
                        align-items center

                    .creator-and-terms
                        align-items center

                .back-to-top
                    order 1
                    align-self center
                    margin-bottom 24px

                .footer-social-block
                    order 2
                    margin-bottom 24px

                    &.col-5
                        max-width 100%
                        display flex
                        flex-direction column
                        align-items center

                    .social-networks
                        width 280px

                        .social-item
                            &:last-child
                                margin-right 0

    @media (max-width 760px)
        .footer
            .footer-row
                .footer-social-block
                    .social-networks
                        width 100%
                        justify-content center
            .copyright-block
                .copyright-text
                    white-space normal
                .creator-and-terms
                    .creator
                        white-space normal

</style>
			
