<template>
    <div class="section-main">
        <navigation/>
        <background-title-main/>
        <v-container grid-list-md
                     class="parent-z">
            <v-layout row wrap>
                <v-flex d-flex xs7>
                    <v-layout column>
                        <v-flex d-flex>
                            <title-main/>
                        </v-flex>
                        <v-flex d-flex>
                            <v-layout row>
                                <v-flex d-flex>
                                    <button-watch-video/>
                                </v-flex>
                                <v-flex d-flex>
                                    <button-get-whitepaper/>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex d-flex>
                            <social-block/>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex d-flex xs5>
                    <v-layout column>
                        <v-flex d-flex>
                            <timer-sales-end/>
                        </v-flex>
                        <v-flex d-flex>
                            <get-to-whitelist/>
                        </v-flex>
                        <v-flex d-flex>
                            <soft-cap/>
                        </v-flex>
                        <v-flex d-flex>
                            <hard-cap/>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import Navigation from '../layouts/navigation/Navigation';
    import TitleMain from '../layouts/section-main/TitleMain';
    import ButtonWatchVideo from '../layouts/section-main/ButtonWatchVideo';
    import ButtonGetWhitepaper from '../layouts/section-main/ButtonOpenWhitepaper';
    import SocialBlock from '../layouts/SocialBlock';
    import TimerSalesEnd from '../layouts/section-main/TimerSalesEnd';
    import GetToWhitelist from '../layouts/section-main/GetToWhitelist';
    import SoftCap from '../layouts/section-main/SoftCap';
    import HardCap from '../layouts/section-main/HardCap';
    import BackgroundTitleMain from '../layouts/section-main/BackgroundTitleMain';

    export default {
        name: 'SectionMain',
        components: {
            Navigation,
            TitleMain,
            ButtonWatchVideo,
            ButtonGetWhitepaper,
            SocialBlock,
            TimerSalesEnd,
            GetToWhitelist,
            SoftCap,
            HardCap,
            BackgroundTitleMain
        },
        data: () => ({})
    }
</script>

<style lang="stylus" scoped>
    .section-main
        height 100vh
        background-color #020449
        color white

    .parent-z
        z-index 2
        position relative
</style>