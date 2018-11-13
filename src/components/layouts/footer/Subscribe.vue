<template>
    <div class="subscribe">
        <v-layout row
                  wrap>
            <v-flex xs12
                    sm12
                    md4
                    lg4
                    xl4>
                <label-subscribe class="label-subscribe">
                    Подпишитесь на наши новости:
                </label-subscribe>
            </v-flex>
            <v-flex xs12
                    sm12
                    md4
                    lg4
                    xl4>
                <input-email-subscribe/>
            </v-flex>
            <v-flex xs12
                    sm12
                    md3
                    lg3
                    xl3>
                <button-subscribe class="button-subscribe"/>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
    import LabelSubscribe from './LabelSubscribe';
    import InputEmailSubscribe from './InputEmailSubscribe';
    import ButtonSubscribe from './ButtonSubscribe';

    export default {
        name: 'Subscribe',
        components: {
            LabelSubscribe,
            InputEmailSubscribe,
            ButtonSubscribe
        }
    }
</script>

<style lang="stylus" scoped>
    .button-subscribe
        height 40px
        font-size 16px

        @media (min-width 0)
            margin-left 0

        @media (min-width 600px)
            margin-left 0

        @media (min-width 960px)
            margin-left 16px

        @media (min-width 1264px)
            margin-left 16px

    .label-subscribe
        display flex
        margin-top 10px

        @media (min-width 0)
            justify-content flex-start
            margin-right 0

        @media (min-width 600px)
            justify-content flex-start
            margin-right 0

        @media (min-width 960px)
            justify-content flex-end
            margin-right 16px

        @media (min-width 1264px)
            justify-content flex-end
            margin-right 16px
</style>