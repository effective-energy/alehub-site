<template>
    <div class="section roadmap-section"
         id="roadmap">
        <div class="container">
            <h1 class="section-title is-center">
                {{ $t('roadmap.title') }}
            </h1>
        </div>

        <div class="roadmap-slides">
            <div class="topline"></div>

            <div class="scroll-block" style="margin-top: 0; position: absolute; top: -4px;">
                <div id="scroll-element"
                     class="scroll-element" style="max-width: 100%; margin: 0;"
                     :style="{ 'width': scrollHorizontalWidth }"
                     v-on:scroll="scrollForSlide($event)">

                    <div id="scroll-content"
                         class="scroll-content"
                         :style="'width: ' + roadmapPanelWidth + 'px'">
                    </div>
                </div>
            </div>

            <div class="slide-to-left" v-if="isLeft">
                <button type="button" :disabled="disableControls" @click="prevSlide">
                    <img src="../../static/images/arrow-left-roadmap.svg" alt="slide-to-left">
                </button>
            </div>

            <div class="slide-to-right" v-if="isRight">
                <button type="button" :disabled="disableControls" @click="nextSlide">
                    <img src="../../static/images/arrow-right-roadmap.svg" alt="slide-to-right">
                </button>
            </div>

            <div class="slides-body"
                 @mousedown="dragStart($event)"
                 @mouseup="dragEnd()"
                 @mousemove="(xDrag && yDrag && !isDisableTouch) ? dragMove($event) : 'false'"
                 @touchstart="touchStart($event)"
                 @touchmove="touchMove($event)">

                <div class="slide"
                     v-for="(slide, slideIndex) in $t('roadmap.stages')"
                     :key="slideIndex">
                    <div class="line"></div>
                    <div class="slide-content"
                         :class="{ 'deployed': slide.progress === 100, 'text-align-right-rtl': isRtl }">
                        <h1 class="slide-title">
                            {{ slide.title }}
                        </h1>
                        <h6>
                            {{ slide.desk }}
                        </h6>
                        <span class="date">
                            {{ slide.date }}
                        </span>

                        <div class="slide-progress">
                            <div class="progress-line-outer">
                                <div class="progress-line"
                                     :style="{ width: slide.progress + '%' }">
                                </div>
                            </div>
                            <div class="state">
                                <p class="status">
                                    {{ $t('roadmap.stateLabel') }}:
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

            <!--<div class="scroll-block">-->
            <!--<button type="button"-->
            <!--class="arrow-prev"-->
            <!--v-if="!isRtl"-->
            <!--:disabled="disableControls"-->
            <!--@click="prevSlide">-->
            <!--</button>-->
            <!--<button type="button"-->
            <!--class="arrow-prev"-->
            <!--:class="{ 'arrow-prev__rtl': isRtl }"-->
            <!--v-else-->
            <!--:disabled="disableControls"-->
            <!--@click="nextSlide">-->
            <!--</button>-->

            <!--<div id="scroll-element"-->
            <!--class="scroll-element"-->
            <!--v-on:scroll="scrollForSlide($event)">-->

            <!--<div id="scroll-content"-->
            <!--class="scroll-content"-->
            <!--:style="'width: ' + roadmapPanelWidth + 'px'">-->
            <!--</div>-->
            <!--</div>-->

            <!--<button type="button"-->
            <!--class="arrow-next"-->
            <!--v-if="!isRtl"-->
            <!--:disabled="disableControls"-->
            <!--@click="nextSlide">-->
            <!--</button>-->
            <!--<button type="button"-->
            <!--class="arrow-next"-->
            <!--:class="{ 'arrow-next__rtl': isRtl }"-->
            <!--v-else-->
            <!--:disabled="disableControls"-->
            <!--@click="prevSlide">-->
            <!--</button>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Roadmap',
        props: {
            isRtl: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                isRight: true,
                isLeft: false,
                xDrag: 0,
                yDrag: 0,
                xDown: 0,
                yDown: 0,
                scrollContentWidth: 0,
                slideWidth: 0,
                disableControls: false,
                disableTouch: false
            }
        },
        computed: {
            roadmapPanelWidth: function () {
                return this.scrollContentWidth;
            },
            isDisableTouch: function () {
                return this.disableTouch;
            },
            scrollHorizontalWidth: function () {
                //9 ширина скролла
                return window.innerWidth - 9 + 'px';
            }
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

                if (Math.abs(xDiff) > Math.abs(yDiff) && !this.isDisableTouch) {
                    console.log('trigger move slide');
                    (xDiff > 0) ? this.nextSlide() : this.prevSlide();
                }

                this.xDown = 0;
                this.yDown = 0;
            },
            nextSlide: function () {
                this.disableControls = true;
                this.disableTouch = true;

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
                        this.disableTouch = false;
                    }
                };

                animateScroll();
            },
            prevSlide: function () {
                this.disableControls = true;
                this.disableTouch = true;

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
                        this.disableTouch = false;
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

            document.getElementById('scroll-element').addEventListener('scroll', () => {
                if (document.getElementById('scroll-content').getBoundingClientRect().right === document.getElementById('scroll-content').offsetWidth)
                    this.isLeft = false;
                else if (document.getElementById('scroll-content').getBoundingClientRect().right <= window.innerWidth - 9)
                    this.isRight = false;
                else {
                    this.isLeft = true;
                    this.isRight = true;
                }
            });
        }
    }
</script>

<style lang="stylus" scoped>
    h6
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
        margin 24px 0

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