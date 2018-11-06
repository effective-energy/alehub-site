<template>
    <div class="section-main">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl
                     class="full-height">
            <v-layout>
                <v-flex>
                    <background-title-main/>
                </v-flex>
            </v-layout>
            <v-layout fill-height
                      align-center-md-and-up
                      row
                      wrap>
                <v-flex class="increase-z"
                        d-flex
                        xs12
                        sm12
                        md7
                        lg7
                        xl7>
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
                <v-flex class="increase-z"
                        d-flex
                        xs12
                        sm12
                        md5
                        lg5
                        xl5>
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
    .full-height
        height 100%

    .section-main
        height calc(100vh - 100px)
        color white

    .increase-z
        z-index 2
</style>