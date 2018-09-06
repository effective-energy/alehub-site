<template>
    <div class="section roadmap-section section__dark"
         id="roadmap">
        <div class="container">
            <h1 class="section-title is-center">
                {{ $t('roadmap.title') }}
            </h1>
        </div>

        <roadmap/>

    </div>
</template>

<script>
    import Roadmap from './layouts/roadmap/Roadmap';

    export default {
        name: 'RoadmapSection',
        components: {
            Roadmap
        },
        props: {
            isRtl: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                currStageIndex: 0,
                isRight: true,
                isLeft: false,
                xDrag: 0,
                yDrag: 0,
                xDown: 0,
                yDown: 0,
                scrollContentWidth: 0,
                slideWidth: 0,
                disableControls: false,
                disableTouch: false,

            }
        },
        computed: {
        },
        methods: {
        },
        created() {
        },
        mounted() {
            this.currStageIndex = this.$t('roadmap.stages').findIndex((item) => {
                return item.status;
            });
        }
    }
</script>

<style lang="stylus" scoped>
    h6.top-line
        border-top #343a49 1px solid
        margin-bottom 12px
        padding-top 12px

    .section
        padding 74px 0
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
        color #f7f7f7
        margin 24px 0 48px 0

    .is-center
        text-align center

    .is-white
        color #f7f7f7

    .scroll-block
        display flex
        justify-content center
        align-items center
        margin-top 50px

        .arrow-prev, .arrow-next
            cursor pointer
            background-color transparent
            border none
            width 15px
            height 20px
            padding 0

            &:focus
                outline none

        .arrow-prev
            background-image url('../../static/images/roadmap/arrow-left.svg')
            background-size cover

        .arrow-next
            background-image url('../../static/images/roadmap/arrow-right.svg')
            background-size cover

        .arrow-prev__rtl
            background-image url('../../static/images/roadmap/arrow-right.svg')

        .arrow-next__rtl
            background-image url('../../static/images/roadmap/arrow-left.svg')

        .scroll-element
            cursor pointer
            max-width 768px
            width 768px
            overflow-x scroll
            margin 0 12px

            .scroll-content
                height 1px

            @media (max-width 420px)
                width 75%

    .roadmap-slides
        position relative
        user-select none
        margin-top 46px

        &:hover
            .slide-to-left, .slide-to-right
                opacity .3

        .topline
            width 100%
            height 2px
            background-color #ffbc00

        .slide-to-left
            position absolute
            left 0
            padding-left 36px
            top 25%
            height 50%
            display flex
            justify-content center
            align-items center

            &:active
                padding-left 18px

        .slide-to-right
            position absolute
            right 0
            padding-right 36px
            top 25%
            height 50%
            display flex
            justify-content center
            align-items center

            &:active
                padding-right 18px

        .slide-to-left, .slide-to-right
            cursor pointer
            -webkit-transition all .3s ease-in-out
            -o-transition all .3s ease-in-out
            transition all .3s ease-in-out
            opacity 0

            &:hover
                opacity 1

            @media (max-width 768px)
                display none

            button
                cursor pointer
                padding 0
                height 100%
                background-color transparent
                border none
                &:focus
                    outline none

                img
                    height 100%

        .slides-body
            max-height 600px
            padding-bottom 5px
            display flex
            overflow-y hidden
            overflow-x hidden
            cursor -webkit-grab
            -webkit-overflow-scrolling touch
            font-size 14px
            font-weight 300
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing normal
            text-align left
            color #f7f7f7

            &:active
                cursor -webkit-grabbing

            .slide
                min-width 512px
                max-width 512px
                padding 0 18px

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
                    -webkit-transition all .3s ease-in-out
                    -o-transition all .3s ease-in-out
                    transition all .3s ease-in-out

                    h6
                        margin-bottom 18px

                    &:hover
                        /*background-color #31394f*/
                        -webkit-box-shadow 0 0 1px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                        -moz-box-shadow 0 0 1px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                        box-shadow 0 0 1px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)

                        .slide-title
                            color #ffbc00

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
                        color #f7f7f7
                        -webkit-transition color .3s ease-in-out
                        -o-transition color .3s ease-in-out
                        transition color .3s ease-in-out

                    .date
                        font-family MuseoSansCyrl100
                        font-size 18px

        .responsible
            width 100%
            max-height 216px
            margin 16px 0 0 0
            display flex
            flex-wrap wrap
            justify-content flex-start

            .avatar
                width 48px
                height 48px
                margin 6px 12px 6px 0
                overflow hidden
                text-align center
                background-color #6f757f
                -webkit-clip-path circle(50% at center)
                clip-path circle(50% at center)

                @media (max-width: 320px)
                    width 45px
                    height 45px

                img
                    height 48px
                    width auto

        .slide-progress
            margin-top 18px

            .progress-line-outer
                background-color rgba(226, 232, 232, .3)

            .progress-line
                margin 10px 0
                height 4px
                background-color #ffbc00
                -webkit-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                -moz-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)

            .state
                display flex
                justify-content space-between
                align-items center

                .status
                    margin 0
                    text-transform uppercase

                    .bold
                        font-family MuseoSansCyrl500
                        font-weight 900
                        letter-spacing 0.2px

                .count
                    margin 0

    @media (max-width: 800px)
        .slide
            min-width 100% !important
            max-width 100% !important
</style>