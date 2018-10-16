<template>
    <v-layout column>
        <v-flex>
            <button-to-whitelist/>
        </v-flex>
        <v-flex>
            <p class="text">
                Принимаем к сборам:
            </p>
            <p class="text">
                BTC, ETH, BCH, LTC, DASH, USD
            </p>
        </v-flex>
    </v-layout>
</template>

<script>
    import ButtonToWhitelist from './ButtonToWhitelist';

    export default {
        name: 'GetToWhitelist',
        components: {
            ButtonToWhitelist
        }
    }
</script>

<style lang="stylus" scoped>
    .text
        font-family MuseoSansCyrl300
        font-size 18px
        margin 0

</style>