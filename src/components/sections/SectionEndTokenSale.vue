<template>
    <div class="section-end-token-sale">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl>
            <v-layout row>
                <v-flex xs12
                        sm6
                        md5
                        lg4
                        xl4>
                    <title-end-token-sale/>
                    <button-to-white-list class="margin-top"/>
                </v-flex>
                <v-flex xs12
                        sm6
                        md6 offset-md1
                        lg7 offset-lg1
                        xl4 offset-xl1>
                    <timer-end-token-sale/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TitleEndTokenSale from '../layouts/section-end-token-sale/TitleEndTokenSale';
    import ButtonToWhiteList from '../layouts/section-end-token-sale/ButtonToWhiteList';
    import TimerEndTokenSale from '../layouts/section-end-token-sale/TimerEndTokenSale';

    export default {
        name: 'SectionEndTokenSale',
        components: {
            TitleEndTokenSale,
            ButtonToWhiteList,
            TimerEndTokenSale
        }
    }
</script>

<style lang="stylus" scoped>
    .margin-top
        margin-top 48px

    .section-end-token-sale
        height 50vh
        background-color #020449
        color white

        .container
            height 100%

            .layout
                height 100%
</style>