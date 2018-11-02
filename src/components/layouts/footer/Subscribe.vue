<template>
    <div class="subscribe">
        <v-layout>
            <v-flex xs4>
                <label-subscribe style="display: flex; justify-content: flex-end; margin-right: 16px; margin-top: 10px;">
                    Подпишитесь на наши новости:
                </label-subscribe>
            </v-flex>
            <v-flex xs4>
                <input-email-subscribe/>
            </v-flex>
            <v-flex xs3>
                <button-subscribe style="height: 40px; font-size: 16px;margin-left: 16px;"/>
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

</style>