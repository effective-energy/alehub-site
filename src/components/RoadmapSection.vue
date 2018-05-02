<template>
    <div class="section roadmap-section"
         id="roadmap">
        <div class="container">
            <h1 class="section-title is-center">
                Roadmap
            </h1>
        </div>

        <div class="roadmap-slides">
            <div class="topline"></div>
            <div class="slides-body"
                 @mousedown="dragStart($event)"
                 @mouseup="dragEnd()"
                 @mousemove="(xDrag && yDrag) ? dragMove($event) : 'false'"
                 @touchstart="touchStart($event)"
                 @touchmove="touchMove($event)">

                <div class="slide"
                     v-for="(slide, slideIndex) in slides"
                     :key="slideIndex">
                    <div class="line"></div>
                    <div class="slide-content"
                         :class="{ 'deployed': slide.state === 'Deployed' }">
                        <h1 class="slide-title">
                            {{ slide.title }}
                        </h1>
                        <span class="date">{{ slide.date }}</span>
                        <div class="responsible">
                            <div class="avatar"
                                 v-for="(item, index) in slide.members"
                                 :key="index">
                                <img :src="item" alt="">
                            </div>
                        </div>
                        <div class="slide-progress">
                            <div class="progress-line-outer">
                                <div class="progress-line"
                                     :style="{ width: slide.progress + '%' }">
                                </div>
                            </div>
                            <div class="state">
                                <p class="status">
                                    State:
                                    <span class="bold">
                                        {{ slide.state }}
                                    </span>
                                </p>
                                <p class="count">
                                    {{ slide.progress }}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="scroll-block">
                <button type="button"
                        class="arrow-prev"
                        :disabled="disableControls"
                        @click="prevSlide">
                </button>

                <div id="scroll-element"
                     class="scroll-element"
                     v-on:scroll="scrollForSlide($event)">

                    <div id="scroll-content"
                         class="scroll-content"
                         :style="'width: ' + roadmapPanelWidth + 'px'">
                    </div>

                </div>

                <button type="button"
                        class="arrow-next"
                        :disabled="disableControls"
                        @click="nextSlide">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Roadmap',
        data() {
            return {
                xDrag: 0,
                yDrag: 0,
                xDown: 0,
                yDown: 0,
                scrollContentWidth: 0,
                slideWidth: 0,
                disableControls: false,
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
                        title: 'YellowPaper publication – description of  AleVirtualMachine running smart-contracts',
                        date: 'Wednesday, August 1, 2018',
                        responsibles: [1],
                        members: [
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Review',
                        progress: 72
                    }
                ]
            }
        },
        computed: {
            roadmapPanelWidth: function () {
                return this.scrollContentWidth;
            },
        },
        methods: {
            dragStart: function (e) {
                this.xDrag = e.pageX;
                this.yDrag = e.pageY;
            },
            dragEnd: function () {
                this.xDrag = 0;
                this.yDrag = 0;
            },
            dragMove: function (e) {
                let xMove = e.pageX;
                let yMove = e.pageY;

                let xDiff = this.xDrag - xMove;
                let yDiff = this.yDrag - yMove;

                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0) {
                        if (Math.abs(xDiff) > this.slideWidth / 3) {
                            this.nextSlide();
                            this.xDrag = 0;
                            this.yDrag = 0;
                        }
                    } else if (xDiff < 0) {
                        if (Math.abs(xDiff) > this.slideWidth / 3) {
                            this.prevSlide();
                            this.xDrag = 0;
                            this.yDrag = 0;
                        }
                    }
                }

            },
            touchStart: function (e) {
                this.xDown = e.touches[0].clientX;
                this.yDown = e.touches[0].clientY;
            },
            touchMove: function (e) {
                if (!this.xDown || !this.yDown)
                    return;

                let xUp = e.touches[0].clientX;
                let yUp = e.touches[0].clientY;

                let xDiff = this.xDown - xUp;
                let yDiff = this.yDown - yUp;

                if (Math.abs(xDiff) > Math.abs(yDiff))
                    (xDiff > 0) ? this.nextSlide() : this.prevSlide();

                this.xDown = 0;
                this.yDown = 0;
            },
            nextSlide: function () {
                this.disableControls = true;

                let start = document.getElementById('scroll-element').scrollLeft,
                    gap = start % this.slideWidth,
                    to = start + this.slideWidth - gap,
                    change = to - start,
                    duration = 500,
                    currentTime = 0,
                    increment = 20;

                let animateScroll = () => {
                    currentTime += increment;
                    let val = Math.easeInOutQuad(currentTime, start, change, duration);
                    document.querySelector('.slides-body').scrollLeft = val;
                    document.getElementById('scroll-element').scrollLeft = val;
                    if (currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    } else {
                        this.disableControls = false;
                    }
                };

                animateScroll();
            },
            prevSlide: function () {
                this.disableControls = true;

                let start = document.getElementById('scroll-element').scrollLeft,
                    gap = (start % this.slideWidth) ? start % this.slideWidth : this.slideWidth,
                    to = start - gap,
                    change = to - start,
                    duration = 500,
                    currentTime = 0,
                    increment = 20;

                let animateScroll = () => {
                    currentTime += increment;
                    let val = Math.easeInOutQuad(currentTime, start, change, duration);
                    document.querySelector('.slides-body').scrollLeft = val;
                    document.getElementById('scroll-element').scrollLeft = val;
                    if (currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    } else {
                        this.disableControls = false;
                    }
                };

                animateScroll();
            },
            scrollForSlide: function (e) {
                document.querySelector('.slides-body').scrollLeft = e.target.scrollLeft;
            },
            getCoords: function (elem) {
                if (!elem)
                    return false;
                let box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            },
        },
        created() {
            Math.easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1)
                    return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };
        },
        mounted() {
            this.scrollContentWidth = document.querySelector('.slide').offsetWidth * document.getElementsByClassName('slide').length -
                this.getCoords(document.getElementById('scroll-element')).left * 2;

            this.slideWidth = document.querySelector('.slide').offsetWidth;
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

        .scroll-element
            cursor pointer
            height 6px
            max-width 768px
            width 768px
            overflow-x scroll
            border-radius 2px
            margin 0 12px

            .scroll-content
                height 1px

            @media (max-width 420px)
                width 75%


    .roadmap-slides
        user-select none
        margin-top 46px

        .topline
            width 100%
            height 2px
            background-color #ffbc00

        .slides-body
            /*width 3584px*/
            /*height 400px*/
            max-height 600px
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
            color #ffffff

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
                        font-family MuseoSansCyrl100
                        font-size 18px

        .responsible
            width 100%
            height 48px
            margin 16px 0 16px
            display flex

            .avatar
                width 48px
                height 48px
                overflow hidden
                border-radius 50%
                text-align center
                img
                    height 48px
                    width auto

            .avatar:not(:first-child)
                margin-left 12px

        .slide-progress
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

                .count
                    margin 0

    @media (max-width: 800px)
        .slide
            min-width 100% !important
            max-width 100% !important
</style>