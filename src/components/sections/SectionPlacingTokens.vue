<template>
    <div class="section-placing-token">
        <v-layout fill-height
                  align-center>
            <v-flex>
                <v-layout justify-center row>
                    <v-flex>
                        <title1-placing-token/>
                    </v-flex>
                </v-layout>
                <v-layout justify-center row>
                    <v-flex>
                        <title2-placing-token/>
                    </v-flex>
                </v-layout>
                <v-layout justify-center row>
                    <v-flex>
                        <subtitle-placing-tokens class="subtitle-margin-top"/>
                    </v-flex>
                </v-layout>
                <v-layout class="layout-info-margin-top">
                    <v-flex lg6>
                        <info1-placing-tokens/>
                    </v-flex>
                    <v-flex lg5 offset-lg1>
                        <info2-placing-tokens/>
                    </v-flex>
                </v-layout>
                <v-layout class="layout-button-margin-top" justify-center row>
                    <v-flex xs12 sm6 md6 lg4 xl4>
                        <button-placing-tokens/>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import Title1PlacingToken from '../layouts/section-placing-tokens/Title1PlacingTokens';
    import Title2PlacingToken from '../layouts/section-placing-tokens/Title2PlacingTokens';
    import SubtitlePlacingTokens from '../layouts/section-placing-tokens/SubtitlePlacingTokens';
    import Info1PlacingTokens from '../layouts/section-placing-tokens/Info1PlacingTokens';
    import Info2PlacingTokens from '../layouts/section-placing-tokens/Info2PlacingTokens';
    import ButtonPlacingTokens from '../layouts/section-placing-tokens/ButtonPlacingTokens';

    export default {
        name: 'SectionPlacingTokens',
        components: {
            Title1PlacingToken,
            Title2PlacingToken,
            SubtitlePlacingTokens,
            Info1PlacingTokens,
            Info2PlacingTokens,
            ButtonPlacingTokens
        }
    }
</script>

<style lang="stylus" scoped>
    .layout-button-margin-top
        margin-top 64px !important

    .layout-info-margin-top
        margin-top 72px !important

    .subtitle-margin-top
        margin-top 32px

    .section-placing-token
        height 100vh
</style>