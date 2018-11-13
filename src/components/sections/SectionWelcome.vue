<template>
    <div class="section-welcome">
        <v-layout align-center
                  fill-height
                  row>
            <v-flex class="z-index-2">
                <v-layout row>
                    <v-flex>
                        <title-welcome/>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <subtitle-welcome/>
                    </v-flex>
                </v-layout>
                <v-layout justify-center
                          row>
                    <v-flex xs12
                            sm12
                            md5
                            lg4
                            xl4>
                        <button-welcome-invest/>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <social/>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import TitleWelcome from '../layouts/section-welcome/TitleWelcome';
    import SubtitleWelcome from '../layouts/section-welcome/SubtitleWelcome';
    import ButtonWelcomeInvest from '../layouts/section-welcome/ButtonWelcomeInvest';
    import Social from '../layouts/section-welcome/Social';

    export default {
        name: 'SectionWelcome',
        components: {
            TitleWelcome,
            SubtitleWelcome,
            ButtonWelcomeInvest,
            Social
        }
    }
</script>

<style lang="stylus" scoped>
    .z-index-2
        z-index 2

    .section-welcome
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