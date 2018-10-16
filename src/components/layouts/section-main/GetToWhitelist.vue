<template>
    <v-layout column>
        <v-flex>
            <button-to-whitelist/>
        </v-flex>
        <v-flex>
            <p>
                Принимаем к сборам:
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

</style>