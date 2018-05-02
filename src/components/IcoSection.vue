<template>
    <div class="section economy-section" id="ico">
        <div class="container">
            <h1 class="section-title is-center">
                {{ $t('economy.title') }}
            </h1>
            <p class="section-subtitle is-center">
                {{ $t('economy.subTitle') }}
            </p>

            <div class="row figures-panel">
                <div class="col-4 is-center is-white">
                    <h1 class="figures-title">{{ $t('economy.ICOinfo.emission.title') }}</h1>
                    <h3 class="figures-subtitle">{{ $t('economy.ICOinfo.emission.amount') }} ALE</h3>
                </div>
                <div class="col-4 is-center is-white">
                    <h1 class="figures-title">{{ $t('economy.ICOinfo.hardCap.title') }}</h1>
                    <h3 class="figures-subtitle">{{ $t('economy.ICOinfo.hardCap.amount') }} ETH</h3>
                </div>
                <div class="col-4 is-center is-white">
                    <h1 class="figures-title">{{ $t('economy.ICOinfo.softCap.title') }}</h1>
                    <h3 class="figures-subtitle">{{ $t('economy.ICOinfo.softCap.amount') }} ETH</h3>
                </div>
            </div>
            <div class="row distribution">
                <Circle1 :index="this.selectedDistributionIndex"></Circle1>
                <div class="col-lg-3 col-md-3 col-sm-6 col-6">
                    <div class="steep-list">
                        <div class="item-list" v-for="(dist, distIndex) in distributionList" @mouseover="showDist(distIndex)">
                            <div class="color-steep steep-sale" :class="['steep-'+dist.type]"></div>
                            <span>{{ dist.title }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-5 col-sm-12">
                    <h1 class="section-title is-white is-right mt0">{{ $t('economy.distribution.title') }}</h1>
                    <div class="divider"></div>
                    <p class="small">
                        {{ $t('economy.distribution.description') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Circle1 from "./layouts/Circle";
    export default {
        name: 'Economy',
        components:{
          Circle1
        },
        data () {
            return {
                selectedDistributionIndex: -1,
                distributionList: [{
                    title: 'Sale for ICO',
                    type: 'sale',
                    count: 77,
                    color: '#139ac9'
                }, {
                    title: 'Team',
                    type: 'team',
                    count: 11,
                    color: '#6289fd'
                }, {
                    title: 'Referral program, advisors',
                    type: 'referral',
                    count: 10,
                    color: '#80ff89'
                }, {
                    title: 'Bounty',
                    type: 'bounty',
                    count: 2,
                    color: '#fab604'
                }]
            }
        },
        computed: {
            activeDistribution () {
                if(this.selectedDistributionIndex === -1) return '100%';
                else return this.distributionList[this.selectedDistributionIndex];
            }
        },
        methods: {
            showDist (index) {
                this.selectedDistributionIndex = index;
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .section
        padding 71px 0

    .economy-section
        background-color #343a49

    .is-center
        text-align center

    .divider
        width 120px
        height 2px
        background-color #ffffff
        margin-bottom 30px

    .is-white
        color #ffffff

    .is-right
        text-align left

    .mt0
        margin-top 0 !important

    .section-title
        font-family MuseoSansCyrl300
        font-size 3em
        font-weight 300
        font-style normal
        font-stretch normal
        line-height normal
        letter-spacing normal
        color #ffffff
        margin 24px 0

    .section-subtitle
        font-family MuseoSansCyrl300
        font-size 1.4em
        font-weight 300
        font-style normal
        font-stretch normal
        line-height 1.5
        letter-spacing normal
        text-align center
        color #ffffff
        padding 12px 0 24px 0

        .bold
            font-family MuseoSansCyrl500
            font-weight bold

    .figures-panel
        padding 24px 0 71px 0

        .figures-title
            font-family MuseoSansCyrl500
            font-size 24px
            font-weight 500
            font-style normal
            font-stretch normal
            line-height 1.5
            letter-spacing normal
            text-align center
            color #ffffff
            margin 0 0 24px 0

        .figures-subtitle
            font-family MuseoSansCyrl300
            font-size 32px
            font-weight 300
            font-style normal
            font-stretch normal
            line-height 0.82
            letter-spacing normal
            text-align center
            color #ffffff
            white-space nowrap

    .distribution
        padding 64px
        .small
            font-family MuseoSansCyrl300
            font-size 14px
            font-weight 300
            font-style normal
            font-stretch normal
            line-height 1.67
            letter-spacing normal
            text-align left
            color #ffffff

        .steep-statis
            width 220px
            height 220px
            border-radius 50%
            display flex
            justify-content center
            align-items center

            &.steep-sale
                border 2px solid #139ac9;

            .steep-team
                width 180px
                height 180px
                border-radius 50%
                border 2px solid #6289fd
                display flex
                justify-content center
                align-items center

                .steep-referral
                    width 140px
                    height 140px
                    border-radius 50%
                    border 2px solid #80ff89
                    display flex
                    justify-content center
                    align-items center

                    .steep-bounty
                        width 100px
                        height 100px
                        border-radius 50%
                        border 2px solid #fab604
                        display flex
                        justify-content center
                        align-items center

                        .steep-count
                            font-family MuseoSansCyrl300
                            font-size 22px
                            font-weight 300
                            font-style normal
                            font-stretch normal
                            line-height normal
                            letter-spacing normal
                            color #ffffff

        .steep-list
            display flex
            flex-direction column

            .item-list
                width 100%
                height 30px
                margin 10px 0
                display flex
                align-items center

                .color-steep
                    width 20px
                    height 20px
                    border-radius 50%
                    margin-right 15px

                    &.steep-sale
                        border solid 2px #139ac9

                    &.steep-team
                        border solid 2px #6289fd

                    &.steep-referral
                        border solid 2px #80ff89

                    &.steep-bounty
                        border solid 2px #fab604

                span
                    color red
                    font-family MuseoSansCyrl300
                    font-size 16px
                    font-weight 300
                    font-style normal
                    font-stretch normal
                    line-height 1.25
                    letter-spacing normal
                    color #ffffff

    @media(max-width: 1199px)
        .figures-panel
            .figures-subtitle
                font-size 26px

        .distribution
            padding 24px

            .steep-statis
                &.steep-sale
                    width 200px
                    height 200px

                    .steep-team
                        width 160px
                        height 160px

                        .steep-referral
                            width 120px
                            height 120px

                            .steep-bounty
                                width 80px
                                height 80px

            .section-title
                font-size 2.5em

    @media(max-width: 991px)
        .figures-panel
            .figures-subtitle
                font-size 20px

        .section-title
            font-size 2.5em

        .section-subtitle
            font-size 1.2em

        .distribution
            .section-title
                font-size 1.6em
                margin 16px 0

            .divider
                margin-bottom 24px

            .steep-list
                .item-list
                    span
                        font-size 14px

                    .color-steep
                        width 12px
                        height 12px
                        margin-right 10px

            .steep-statis
                &.steep-sale
                    width 180px
                    height 180px

                    .steep-team
                        width 140px
                        height 140px

                        .steep-referral
                            width 100px
                            height 100px

                            .steep-bounty
                                width 60px
                                height 60px

                                .steep-count
                                    font-size 18px

        .col-lg-3
            padding-right 0

    @media(max-width: 767px)
        .figures-panel
            .figures-title
                font-size 20px
                margin-bottom 12px

            .figures-subtitle
                font-size 16px

        .figures-panel
            padding 12px 0 32px

        .col-lg-3
            padding-right 15px

        .distribution
            .steep-statis
                &.steep-sale
                    width 220px
                    height 220px
                    margin-bottom 24px

                    .steep-team
                        width 180px
                        height 180px

                        .steep-referral
                            width 140px
                            height 140px

                            .steep-bounty
                                width 100px
                                height 100px

                                .steep-count
                                    font-size 22px

            .steep-list
                .item-list
                    span
                        font-size 16px

                    .color-steep
                        width 20px
                        height 20px
                        margin-right 15px

            .section-title
                font-size 2.5em
                text-align center

            .divider
                display none

            .small
                text-align justify

    @media(max-width: 575px)
        .distribution
            .steep-list
                .item-list
                    span
                        font-size 14px

                    .color-steep
                        width 12px
                        height 12px
                        margin-right 10px

            .steep-statis
                &.steep-sale
                    width 180px
                    height 180px

                    .steep-team
                        width 140px
                        height 140px

                        .steep-referral
                            width 100px
                            height 100px

                            .steep-bounty
                                width 60px
                                height 60px

                                .steep-count
                                    font-size 18px

    @media(max-width: 425px)
        .section-title
            font-size 1.9em
        .section-subtitle
            font-size 1em
            margin-bottom 0

        .figures-panel
            padding 12px 0 0
            display flex
            flex-direction column
            align-items center

            .figures-title
                font-size 20px

            .figures-subtitle
                font-size 20px
                margin-bottom 24px
                width 100%

        .col-6
            min-width 100%
            display flex
            justify-content center

        .col-4
            min-width 100%

        .distribution
            .section-title
                font-size 1.9em

            .steep-statis
                &.steep-sale
                    width 220px
                    height 220px
                    margin-bottom 24px

                    .steep-team
                        width 180px
                        height 180px

                        .steep-referral
                            width 140px
                            height 140px

                            .steep-bounty
                                width 100px
                                height 100px

                                .steep-count
                                    font-size 22px

            .steep-list
                margin-bottom 32px

                .item-list
                    span
                        font-size 16px

                    .color-steep
                        width 20px
                        height 20px
                        margin-right 15px


</style>