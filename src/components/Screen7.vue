<template>
    <div class="section roadmap-section" id="roadmap">
        <div class="container">
            <h1 class="section-title is-center">
                Roadmap
            </h1>
        </div>

        <div class="roadmap-slides">
            <div class="topline"></div>
            <div class="slides-body">
                <div class="slide"
                     v-for="(slide, slideIndex) in slides"
                     :key="slideIndex">
                    <div class="line"></div>
                    <div class="slide-content"
                         :class="{ 'deployed': slide.state === 'Deployed' }">
                        <h1 class="slide-title">
                            {{ slide.title }}
                        </h1>
                        <i class="date">{{ slide.date }}</i>
                        <div class="responsible">
                            <img class="avatar"
                                 v-for="item in slide.members"
                                 :src="item">
                        </div>
                        <div class="slide-progress">
                            <div class="progress-line"></div>
                            <div class="state">
                                <p class="status">
                                    State:
                                    <span class="bold">{{ slide.state }}</span>
                                </p>
                                <p class="count">{{ slide.progress }}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Roadmap',
        data() {
            return {
                slides: [
                    {
                        title: 'Launch and publication MVP version of ALEHUB in centralised mode',
                        date: 'Sunday, April 15, 2018',
                        responsibles: [1, 2, 3],
                        members: [
                            '../../static/images/gromyko@3x.png',
                            '../../static/images/elena@3x.png',
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Deployed',
                        progress: 100
                    },
                    {
                        title: 'YellowPaper publication – description of  AleVirtualMachine running smart-contracts',
                        date: 'Wednesday, August 1, 2018',
                        responsibles: [1],
                        members: [
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Review',
                        progress: 72
                    },
                    {
                        title: 'Launch of full ALEHUB version in centralised mode',
                        date: 'Saturday, September 1, 2018',
                        responsibles: [1, 2],
                        members: [
                            '../../static/images/osipenko@3x.png',
                            '../../static/images/grudinin@3x.png'
                        ],
                        state: 'Implementing',
                        progress: 24
                    },
                    {
                        title: 'Launch and publication MVP version of ALEHUB in centralised mode',
                        date: 'Sunday, April 15, 2018',
                        responsibles: [1, 2, 3],
                        members: [
                            '../../static/images/gromyko@3x.png',
                            '../../static/images/grudinin@3x.png',
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Deployed',
                        progress: 100
                    },
                    {
                        title: 'YellowPaper publication – description of  AleVirtualMachine running smart-contracts',
                        date: 'Wednesday, August 1, 2018',
                        responsibles: [1],
                        members: [
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Review',
                        progress: 72
                    },
                    {
                        title: 'Launch of full ALEHUB version in centralised mode',
                        date: 'Saturday, September 1, 2018',
                        responsibles: [1, 2],
                        members: [
                            '../../static/images/osipenko@3x.png',
                            '../../static/images/grudinin@3x.png'
                        ],
                        state: 'Implementing',
                        progress: 24
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .section
        padding 71px 0
        padding-bottom 130px

    .roadmap-section
        background-color #343a49

    .section-title
        font-family MuseoSansCyrl300
        font-size 3em
        font-weight 300
        font-style normal
        font-stretch normal
        line-height normal
        letter-spacing normal
        text-align center
        color #ffffff
        margin 24px 0

    .is-center
        text-align center

    .is-white
        color #ffffff

    .roadmap-slides
        margin-top 46px
        .topline
            width 100%
            height 2px
            background-color #ffbc00

        .slides-body
            height 400px
            display flex
            overflow-x scroll

            .slide
                min-width 512px
                max-width 512px
                margin 0 18px
                .slide-content
                    background-color rgba(255, 255, 255, 0.05)
                    min-height 273px

                .line
                    width 2px
                    height 36px
                    background #ffbc00
                    display flex
                    margin 0 auto

                .slide-content
                    padding 32px 24px

                    &.deployed
                        background-color rgba(255, 188, 0, 0.05)

                        .slide-title
                            color #ffbc00

                    .slide-title
                        font-family MuseoSansCyrl300
                        font-size 24px
                        font-weight 300
                        font-style normal
                        font-stretch normal
                        line-height 1.5
                        letter-spacing normal
                        color #ffffff

                    .date
                        font-family MuseoSansCyrl300
            font-size 14px
            font-weight 300
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing normal
            text-align left
            color #ffffff

        .responsible
            width 100%;
            height 48px
            margin 16px 0
            display flex

            .avatar
                width 36px
                height 48px

            .avatar:not(:first-child)
                margin-left 12px

        .slide-progress
            .progress-line
                margin 10px 0
                height 4px
                background-color #ffbc00
                box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
            .state
                display flex
                justify-content space-between
                align-items center

                .status
                    margin 0
                    text-transform uppercase

                .count
                    margin 0
</style>