<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex d-flex xs6>
                <v-layout column>
                    <v-flex d-flex>
                        <main-title/>
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
            <v-flex d-flex xs6>
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
    <!--<v-container grid-list-md>-->
    <!--<v-layout row wrap>-->
    <!--<v-flex xs6>-->
    <!--<v-card dark color="primary">-->
    <!--<v-card-text class="px-0">12</v-card-text>-->
    <!--</v-card>-->
    <!--</v-flex>-->
    <!--<v-flex xs6>-->
    <!--<v-card dark color="primary">-->
    <!--<v-card-text class="px-0">12</v-card-text>-->
    <!--</v-card>-->
    <!--</v-flex>-->
    <!--</v-layout>-->
    <!--</v-container>-->
</template>

<script>
    import MainTitle from '../layouts/section-main/MainTitle';
    import ButtonWatchVideo from '../layouts/section-main/ButtonWatchVideo';
    import ButtonGetWhitepaper from '../layouts/section-main/ButtonGetWhitepaper';
    import SocialBlock from '../layouts/SocialBlock';
    import TimerSalesEnd from '../layouts/section-main/TimerSalesEnd';
    import GetToWhitelist from '../layouts/section-main/GetToWhitelist';
    import SoftCap from '../layouts/section-main/SoftCap';
    import HardCap from '../layouts/section-main/HardCap';

    export default {
        name: 'SectionMain',
        components: {
            MainTitle,
            ButtonWatchVideo,
            ButtonGetWhitepaper,
            SocialBlock,
            TimerSalesEnd,
            GetToWhitelist,
            SoftCap,
            HardCap
        },
        data: () => ({})
    }
</script>

<style lang="stylus" scoped>

</style>