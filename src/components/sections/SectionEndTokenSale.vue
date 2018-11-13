<template>
    <div class="section-end-token-sale">
        <v-layout fill-height
                  align-center
                  row
                  wrap>
            <v-flex xs12
                    sm6
                    md5
                    lg4
                    xl4
                    class="z-index-2">
                <title-end-token-sale/>
                <button-to-white-list class="button-invest-wide"/>
            </v-flex>
            <v-flex xs12
                    sm6
                    md6 offset-md1
                    lg7 offset-lg1
                    xl4 offset-xl1
                    class="z-index-2">
                <timer-end-token-sale/>
            </v-flex>
            <v-flex xs12
                    sm12
                    hidden-md-and-up
                    class="z-index-2">
                <button-to-white-list class="button-invest-long"/>
            </v-flex>
        </v-layout>
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
    .z-index-2
        z-index 2

    .button-invest-wide
        margin-top 48px

        @media (min-width 0)
            display none

        @media (min-width 600px)
            display none

        @media (min-width 960px)
            display block

        @media (min-width 1264px)
            display block

    .section-end-token-sale
        height 50vh
        color white

        @media (min-width 0)
            height 100vh

        @media (min-width 600px)
            height 100vh

        @media (min-width 960px)
            height 75vh

        @media (min-width 1264px)
            height 50vh

        .container
            height 100%

            .layout
                height 100%
</style>