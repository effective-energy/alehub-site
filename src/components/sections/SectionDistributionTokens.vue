<template>
    <div class="section-distribution-token">
        <v-layout>
            <v-flex>
                <background-title-distribution-tokens/>
            </v-flex>
        </v-layout>
        <v-layout fill-height
                  align-center>
            <v-flex class="increase-z">
                <v-layout row wrap>
                    <v-flex sm12 md5 lg5>
                        <h2 class="title-distribution">
                            {{ title }}
                        </h2>
                    </v-flex>
                    <v-flex sm12 md5 offset-md2 lg5 offset-lg2>
                        <p class="title-info">
                            {{ info.title }}
                        </p>
                        <p class="sum-info">
                            {{ info.sum }}
                        </p>
                    </v-flex>
                </v-layout>
                <v-layout class="layout-bottom-margin-top"
                          align-center row>
                    <v-flex lg5>
                        <donut-chart-distribution-tokens/>
                    </v-flex>
                    <v-flex lg5 offset-lg2>
                        <h4 class="title-bottom-distribution">
                            {{ titleBottom }}
                        </h4>
                        <p class="title-bottom-info">
                            {{ infoBottom.title }}
                        </p>
                        <p class="sum-bottom-info">
                            {{ infoBottom.sum }}
                        </p>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import BackgroundTitleDistributionTokens
        from '../layouts/section-distribution-tokens/BackgroundTitleDistributionTokens';
    import DonutChartDistributionTokens from '../layouts/section-distribution-tokens/DonutChartDistributionTokens';

    export default {
        name: 'SectionDistribution',
        components: {
            BackgroundTitleDistributionTokens,
            DonutChartDistributionTokens
        },
        data: () => ({
            title: 'Распределение токенов',
            info: {
                title: 'Всего будет продано',
                sum: '~ 211 000 000 ALE'
            },
            titleBottom: 'Ethereum ERC-20',
            infoBottom: {
                title: 'Возможный способ оплаты',
                sum: 'BTC, ETH, BCH, LTC, DASH, USD'
            }
        })
    }
</script>

<style lang="stylus" scoped>
    .layout-bottom-margin-top
        margin-top 200px !important

    .sum-bottom-info
        font-family MuseoSansCyrl700
        font-size 24px
        line-height 1.5
        text-align left
        color #ffffff

    .title-bottom-info
        opacity .72
        font-family MuseoSansCyrl300
        font-size 18px
        line-height 1.33
        text-align left
        color #ffffff
        margin-bottom 1px
        margin-top 40px

    .title-bottom-distribution
        font-family MuseoSansCyrl700
        font-size 24px
        line-height 1.33
        text-align left
        color #ffffff

    .title-info
        opacity .72
        font-family MuseoSansCyrl300
        font-size 24px
        line-height 1.33
        text-align left
        color #ffffff
        margin-bottom 1px

    .sum-info
        font-family MuseoSansCyrl700
        font-size 32px
        line-height 1.5
        text-align left
        color #ffffff

    .title-distribution
        color white
        font-size 48px
        font-family MuseoSansCyrl700
        line-height 1.33
        letter-spacing 1.9px
        text-transform uppercase
        text-align left

    .increase-z
        z-index 2

    .section-distribution-token
        height 100vh
</style>