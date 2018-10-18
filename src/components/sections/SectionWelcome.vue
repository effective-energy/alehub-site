<template>
    <div class="section-welcome">
        <v-container grid-list-md
                     class="section-slogan-container">
            <v-layout align-center row>
                <v-flex>
                    <v-layout column>
                        <v-flex>
                            <title-welcome/>
                        </v-flex>
                        <v-flex>
                            <subtitle-welcome/>
                        </v-flex>
                        <v-flex xs4>
                            <button-welcome-invest/>
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

    export default {
        name: 'SectionWelcome',
        components: {
            TitleWelcome,
            SubtitleWelcome,
            ButtonWelcomeInvest
        }
    }
</script>

<style lang="stylus" scoped>
    .section-welcome
        height 50vh
        background-color #020449
        color white

        .container
            height 100%

            .layout
                height 100%
</style>