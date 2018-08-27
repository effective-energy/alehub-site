<template>
    <div class="verification">
        <header-block :white-list="true"/>
        <h3>
            Heading
        </h3>
        <p>
            Description
        </p>
        <form @prevent.submit="send">
            <input type="text"
                   title="type your email"
                   :placeholder="placeholder"
                   v-model="email">
            <button type="submit">
                {{ sendButtonText }}
            </button>
        </form>
    </div>
</template>

<script>
    import HeaderBlock from './layouts/HeaderBlock';

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
                sendButtonText: 'Send email'
            }
        },
        methods: {
            send: function () {
                if (this.checkCorrectEmail(this.email)) {
                    this.loader = true;
                    this.status = false;

                    this.$http.post(`https://alehub-4550.nodechef.com/subscribe/new`, {
                        'email': this.email
                    }, {
                        headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        this.loader = false;
                        // if (response.body.message === 'Email already exist') {
                        //     localStorage.setItem('subscriber-email', this.subscriber.email);
                        //     return this.subscriber.status = 'exist';
                        // }
                        this.status = 'success';
                        localStorage.setItem('subscriber-email', this.subscriber.email);
                    }, response => {
                        this.loader = false;
                        this.status = 'error';
                    })
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

</style>