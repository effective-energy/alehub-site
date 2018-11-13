<template>
    <div id="section-main"
         class="section-main">
        <v-layout>
            <v-flex>
                <background-title-main/>
            </v-flex>
        </v-layout>
        <v-layout fill-height
                  row
                  wrap>
            <v-flex class="increase-z"
                    xs12>
                <v-layout row wrap>
                    <v-flex xs12
                            sm12
                            md6
                            lg6
                            xl6>
                        <title-main/>
                    </v-flex>
                    <v-flex class="timer-margin"
                            xs12
                            sm12
                            md5 offset-md1
                            lg5 offset-lg1
                            xl5 offset-xl1>
                        <timer-sales-end/>
                        <get-to-whitelist/>
                    </v-flex>
                </v-layout>
                <v-layout row
                          wrap>
                    <v-flex xs12
                            sm12
                            md6
                            lg6
                            xl6>
                        <v-layout class="buttons-padding"
                                  row
                                  wrap>
                            <v-flex>
                                <button-watch-video/>
                            </v-flex>
                            <v-flex>
                                <button-get-whitepaper/>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex>
                                <social-block class="social-margin"/>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex xs12
                            sm12
                            md5 offset-md1
                            lg5 offset-lg1
                            xl5 offset-xl1>
                        <soft-cap/>
                        <hard-cap/>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
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
    .buttons-padding
        @media (min-width 0)
            padding-top 32px

        @media (min-width 600px)
            padding-top 32px

        @media (min-width 960px)
            padding-top 0

        @media (min-width 1264px)
            padding-top 0

    .timer-margin
        @media (min-width 0)
            margin-top 32px

        @media (min-width 600px)
            margin-top 32px

        @media (min-width 960px)
            margin-top 0

        @media (min-width 1264px)
            margin-top 0

    .social-margin
        @media (min-width 0)
            margin-top 60px

        @media (min-width 600px)
            margin-top 60px

        @media (min-width 960px)
            margin-top 0

        @media (min-width 1264px)
            margin-top 0

    .full-height
        height 100%

    .section-main
        color white

        @media (min-width 0)
            height calc(170vh - 50px)

        @media (min-width 600px)
            height calc(140vh - 50px)

        @media (min-width 960px)
            height calc(120vh - 100px)

        @media (min-width 1264px)
            height calc(100vh - 100px)

    .increase-z
        z-index 2
</style>