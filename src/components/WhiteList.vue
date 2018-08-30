<template>
    <div class="verification">
        <header-block :white-list="true"/>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-lg-6 col-xl-6">
                    <div class="panel">
                        <h3>
                            White List
                        </h3>
                        <p>
                            {{ $t('whiteList.description') }}
                        </p>
                        <form @submit.prevent="send"
                              class="form-group">
                            <label class="label-top"
                                   :class="calcTopLabelClass"
                                   v-if="isStatus">
                                <span>{{ calcTopLabelText }}</span>
                            </label>
                            <input type="text"
                                   class="email"
                                   title="type your email"
                                   autocomplete="off"
                                   :placeholder="placeholder"
                                   :class="calcEmailClass"
                                   :disabled="loader"
                                   v-model="email.value">
                            <button type="submit"
                                    class="submit"
                                    :disabled="loader">
                                {{ sendButtonText }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBlock from './layouts/HeaderBlock';

    const EMAIL_SUCCESS = 200;
    const EMAIL_ALREADY_EXIST = 409;
    const EMAIL_INCORRECT = 422;

    const SUCCESS = 'success';
    const EXIST = 'exist';
    const INCORRECT = 'incorrect';

    export default {
        name: 'Verification',
        components: {
            HeaderBlock
        },
        data() {
            return {
                placeholder: 'Enter your email',
                sendButtonText: 'Send email',
                loader: false,
                status: {
                    success: false,
                    exist: false,
                    incorrect: false
                },
                email: {
                    value: '',
                    class: {
                        success: 'email-success',
                        exist: 'email-exist',
                        incorrect: 'email-incorrect'
                    }
                },
                label: {
                    class: {
                        success: 'label-success',
                        exist: 'label-exist',
                        incorrect: 'label-incorrect'
                    },
                    text: {
                        success: this.$t('whiteList.form.topLabel.success'),
                        exist: this.$t('whiteList.form.topLabel.exist'),
                        incorrect: this.$t('whiteList.form.topLabel.incorrect')
                    },
                }
            }
        },
        computed: {
            /**
             *
             * @returns {string}
             */
            calcEmailClass: function () {
                for (let key in this.status) {
                    if (this.status.hasOwnProperty(key)) {
                        if (this.status[key]) {
                            switch (key) {
                                case SUCCESS:
                                    return this.email.class.success;
                                case EXIST:
                                    return this.email.class.exist;
                                case INCORRECT:
                                    return this.email.class.incorrect;
                                default:
                                    return '';
                            }
                        }
                    }
                }
            },
            /**
             *
             *
             * @returns {string}
             */
            calcTopLabelText: function () {
                for (let key in this.status) {
                    if (this.status.hasOwnProperty(key)) {
                        if (this.status[key]) {
                            switch (key) {
                                case SUCCESS:
                                    return this.label.text.success;
                                case EXIST:
                                    return this.label.text.exist;
                                case INCORRECT:
                                    return this.label.text.incorrect;
                                default:
                                    return '';
                            }
                        }
                    }
                }
            },
            /**
             *
             * @returns {string}
             */
            calcTopLabelClass: function () {
                for (let key in this.status) {
                    if (this.status.hasOwnProperty(key)) {
                        if (this.status[key]) {
                            switch (key) {
                                case SUCCESS:
                                    return this.label.class.success;
                                case EXIST:
                                    return this.label.class.exist;
                                case INCORRECT:
                                    return this.label.class.incorrect;
                                default:
                                    return '';
                            }
                        }
                    }
                }
            },
            /**
             * check the truth of at least one of the fields of the 'status'
             *
             * @returns {Boolean}
             */
            isStatus: function () {
                for (let key in this.status) {
                    if (this.status.hasOwnProperty(key)) {
                        if (this.status[key])
                            return true;
                    }
                }
                return false;
            }
        },
        methods: {
            /**
             *
             */
            send: function () {
                if (this.validateEmail(this.email.value)) {
                    this.loader = true;

                    this.$http.post(`https://alehub-4550.nodechef.com/ale-whitelist/new`,
                        {
                            'email': this.email.value
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8',
                                'Accept': 'application/json'
                            }
                        }
                    ).then(
                        resp => {
                            this.loader = false;

                            if (resp.status === EMAIL_SUCCESS) {
                                for (let key in this.status) {
                                    if (this.status.hasOwnProperty(key)) {
                                        if (this.status[key] && key !== SUCCESS)
                                            this.status[key] = false;
                                        if (!this.status[key] && key === SUCCESS)
                                            this.status[key] = true;
                                    }
                                }
                            } else {
                                //processing
                            }

                        }, err => {
                            this.loader = false;
                            if (err.status === EMAIL_ALREADY_EXIST) {
                                for (let key in this.status) {
                                    if (this.status.hasOwnProperty(key)) {
                                        if (this.status[key] && key !== EXIST)
                                            this.status[key] = false;
                                        if (!this.status[key] && key === EXIST)
                                            this.status[key] = true;
                                    }
                                }
                            }
                            if (err.status === EMAIL_INCORRECT) {
                                for (let key in this.status) {
                                    if (this.status.hasOwnProperty(key)) {
                                        if (this.status[key] && key !== INCORRECT)
                                            this.status[key] = false;
                                        if (!this.status[key] && key === INCORRECT)
                                            this.status[key] = true;
                                    }
                                }
                            }
                        }
                    )
                } else {
                    for (let key in this.status) {
                        if (this.status.hasOwnProperty(key)) {
                            if (this.status[key] && key !== INCORRECT)
                                this.status[key] = false;
                            if (!this.status[key] && key === INCORRECT)
                                this.status[key] = true;
                        }
                    }
                }
            },
            /**
             *
             *
             * @param email
             * @returns {boolean}
             */
            validateEmail: function (email) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (email.length === 0)
                    return true;

                return re.test(String(email).toLowerCase());
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .verification
        min-height 100vh
        background-color white

        .container
            padding-top 74px

            .panel
                margin-top 50px

                .form-group
                    position relative
                    display flex
                    align-items center

                    .label-top
                        position absolute
                        top -10px
                        left 15px
                        margin 0
                        font-size 12px
                        font-family MuseoSansCyrl500
                        font-weight 700
                        letter-spacing .4px
                        padding 0 7px

                        &.label-success
                            background-color green
                            color #f7f7f7

                        &.label-exist
                            background-color #2e86ce
                            color #f7f7f7

                        &.label-incorrect
                            background-color #ff4f4f
                            color #f7f7f7

                    input.email
                        flex-basis 67%
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

                        &.email-success
                            border-color green

                        &.email-exist
                            border-color #2e86ce

                        &.email-incorrect
                            border-color #ff4f4f

                    button.submit
                        flex-basis 30%
                        cursor pointer
                        background-color #ffd24f
                        font-family MuseoSansCyrl300
                        font-size 14px
                        font-weight 700
                        color #34343e
                        padding 8px 5px
                        margin 0 0 0 3%
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


    .default
        color black

    .red
        color red

    .green
        color green

    .blue
        color blue
</style>