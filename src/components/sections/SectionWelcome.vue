<template>
    <div class="section-welcome">
        <v-container grid-list-md
                     class="section-slogan-container">
            <v-layout align-center row>
                <v-flex>
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
                    <v-layout justify-center row>
                        <v-flex xs3>
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
        </v-container>
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
    .section-welcome
        height 50vh
        color white

        .container
            height 100%

            .layout
                height 100%
</style>