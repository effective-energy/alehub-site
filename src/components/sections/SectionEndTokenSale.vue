<template>
    <div class="section-end-token-sale">
        <v-container grid-list-md>
            <v-layout row>
                <v-flex xs5>
                    <title-end-token-sale/>
                </v-flex>
                <v-flex xs7>
                    <timer-end-token-sale/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TitleEndTokenSale from '../layouts/section-end-token-sale/TitleEndTokenSale';
    import TimerEndTokenSale from '../layouts/section-end-token-sale/TimerEndTokenSale';

    export default {
        name: 'SectionEndTokenSale',
        components: {
            TitleEndTokenSale,
            TimerEndTokenSale
        }
    }
</script>

<style lang="stylus" scoped>
    .section-end-token-sale
        height 50vh
        background-color #020449
        color white

        .container
            height 100%

            .layout
                height 100%

</style>