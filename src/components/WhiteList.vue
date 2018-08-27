<template>
    <div class="verification">
        <header-block :white-list="true"/>
        <h3>
            Heading
        </h3>
        <p>
            Description
        </p>
        <!--<form @prevent.submit="send">-->
        <input type="text"
               title="type your email"
               :placeholder="placeholder"
               v-model="email">
        <button type="submit"
                @click="send">
            {{ sendButtonText }}
        </button>
        <p :class="calcAlertClass">
            Alert text
        </p>
        <!--</form>-->
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
                email: '',
                loader: false,
                placeholder: 'Type your email for allow access to buying our tokens',
                sendButtonText: 'Send email',
                status: {
                    success: false,
                    exist: false,
                    incorrect: false
                }
            }
        },
        computed: {
            /**
             *
             *
             * @returns {string}
             */
            calcAlertClass: function () {
                console.log(this.status, 'status');
                for (let key in this.status) {
                    if (this.status[key]) {
                        switch (key) {
                            case SUCCESS:
                                return 'green';
                            case EXIST:
                                return 'blue';
                            case INCORRECT:
                                return 'red';
                            default:
                                return 'default';
                        }
                    }
                }
            }
        },
        methods: {
            /**
             *
             */
            send: function () {
                if (this.checkCorrectEmail(this.email)) {
                    this.loader = true;
                    // this.status = false;

                    this.$http.post(`https://alehub-4550.nodechef.com/ale-whitelist/new`, {
                            'email': this.email
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json; charset=UTF-8',
                                'Accept': 'application/json'
                            }
                        }).then(resp => {
                            this.loader = false;

                            if (resp.status === EMAIL_SUCCESS) {
                                for (let key in this.status) {
                                    if (this.status[key] && key !== SUCCESS)
                                        this.status[key] = false;
                                    if (!this.status[key] && key === SUCCESS)
                                        this.status[key] = true;
                                }
                            } else {
                                //processing
                            }

                        }, err => {
                            if (err.status === EMAIL_ALREADY_EXIST) {
                                for (let key in this.status) {
                                    if (this.status[key] && key !== EXIST)
                                        this.status[key] = false;
                                    if (!this.status[key] && key === EXIST)
                                        this.status[key] = true;
                                }
                            }
                            if (err.status === EMAIL_INCORRECT) {
                                for (let key in this.status) {
                                    if (this.status[key] && key !== INCORRECT)
                                        this.status[key] = false;
                                    if (!this.status[key] && key === INCORRECT)
                                        this.status[key] = true;
                                }
                            }

                            this.loader = false;
                        }
                    )
                } else {
                    for (let key in this.status) {
                        if (this.status[key] && key !== INCORRECT)
                            this.status[key] = false;
                        if (!this.status[key] && key === INCORRECT)
                            this.status[key] = true;
                    }
                }
            },
            checkCorrectEmail: function (email) {
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (email.length === 0)
                    return true;

                return re.test(String(email).toLowerCase());
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .default
        color black

    .red
        color red

    .green
        color green

    .blue
        color blue
</style>