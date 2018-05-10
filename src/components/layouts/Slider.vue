<template>
    <div style="width: 100%; display: flex; justify-content: center;">

        <button :class="['b-carousel__prev', settings.prev]"
                v-if="isControlButton"
                @click="clickPrev">
            <img src="../../../static/images/arrow-left-dark.svg" alt="prev">
        </button>

        <div class="wrap" style="user-select: none;">

            <div :class="['b-carousel', settings.main]"
                 @mousedown="dragStart($event)"
                 @mouseup="dragEnd()"
                 @mousemove="(xDrag && yDrag) ? dragMove($event) : 'false'">

                <div :class="['b-carousel__wrap', settings.wrap]"
                     @touchstart="(privates1.touch) ? touchStart($event) : 'false'"
                     @touchmove="(privates1.touch) ? touchMove($event) : 'false'">

                    <div class="image b-carousel__item"
                         @mouseover="stopAutoplay"
                         @mouseleave="startAutoplay('true')"
                         v-for="(member, i) in items"
                         :key="i"
                         :style="`flex: 0 0 ${ multiplierPosition }%`">

                        <div class="b-carousel__inner">

                            <img class="layer__bottom b-carousel__img"
                                 :src="member.src"
                                 :alt="member.name">

                            <div class="layer__top">
                                <div class="layer__text">
                                    <h3>
                                        {{ member.name }}
                                    </h3>
                                    <p>
                                        {{ member.position }}
                                    </p>

                                    <div class="icons" v-if="member.social !== undefined && member.length !== 0">
                                        <a :href="social.link" v-for="social in member.social" target="_blank">
                                            <img :class="{ 'in': social.type === 'linkedin' }"
                                                 src="../../../static/images/in.svg"
                                                 alt="in" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button :class="['b-carousel__next', settings.next]"
                v-if="isControlButton"
                @click="clickNext">
            <img src="../../../static/images/arrow-right-dark.svg" alt="prev">
        </button>

    </div>
</template>

<script>
    export default {
        name: 'Slider',
        props: {
            items: {
                type: Array,
                required: true
            },
            settings: {
                type: Object,
                required: true
            },
            options: {
                type: Object,
                required: true
            },
            privates1: {
                type: Object,
                required: true
            },
            multiplierPosition: {
                type: Number,
                required: true
            },
            numItemsInWrap: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                autoplay: null,
                isAutoplay: false,
                carousel: null,
                privates: null,
                tmpPos: 0,
                opt: {
                    position: 0,
                    maxPosition: 0
                },
                xDown: 0,
                yDown: 0,
                xDrag: 0,
                yDrag: 0,
            }
        },
        watch: {
            'options.inBlockTeam': function (inBlockTeam) {
                // this.startAutoplay(3000, val);
                // console.log(inBlockTeam, 'inBlockTeam');
                // if (this.options.autoplay && inBlockTeam)
                //     this.startAutoplay(3000, this.options.autoplay);  //true
                // else
                //     this.startAutoplay(3000, this.options.autoplay);  //false
                this.startAutoplay(true);
            },
            isAutoplay: function () {
                this.initAutoplay(3000);
            }
        },
        computed: {
            isControlButton: function () {
                return !(window.innerWidth <= 490);
            },
            inBlockTeam: function () {
                return this.options.inBlockTeam;
            },
            isOptAutoplay: function () {
                return this.options.autoplay;
            }
        },
        methods: {
            clickNext: function () {
                console.log('next');
                this.stopAutoplay();
                this.nextSlide();
                this.startAutoplay(true);
            },
            clickPrev: function () {
                console.log('prev');
                this.stopAutoplay();
                this.prevSlide();
                this.startAutoplay(true);
            },
            dragStart: function (e) {
                this.xDrag = e.pageX;
                this.yDrag = e.pageY;
            },
            dragEnd: function (e) {
                this.xDrag = 0;
                this.yDrag = 0;
            },
            dragMove: function (e) {
                // console.log(e.pageX, 'mouse move X');
                let xMove = e.pageX;
                let yMove = e.pageY;
                let xDiff = this.xDrag - xMove;
                let yDiff = this.yDrag - yMove;
                // console.log(xDiff, 'xDiff');
                // console.log(yDiff, 'yDiff');
                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    //ширина фотки получать из DOM
                    if (xDiff > 0) {
                        if (Math.abs(xDiff) > 152) {
                            this.nextSlide();
                            this.xDrag = 0;
                            this.yDrag = 0;
                        }
                    }
                    if (xDiff < 0) {
                        if (Math.abs(xDiff) > 152) {
                            this.prevSlide();
                            this.xDrag = 0;
                            this.yDrag = 0;
                        }
                    }
                }
            },
            touchStart: function (e) {
                // console.log(e, 'event touch start');
                // console.log('touchStart');
                this.xDown = e.touches[0].clientX;
                this.yDown = e.touches[0].clientY;
            },
            touchMove: function (e) {
                // console.log(e, 'event touch move');
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
            prevSlide: function () {
                let sel = {
                    wrap: document.querySelector('.' + this.privates.wrap),
                    children: document.querySelector('.' + this.privates.wrap).children,
                    prev: document.querySelector('.' + this.privates.prev),
                    next: document.querySelector('.' + this.privates.next)
                };
                --this.opt.position;
                if (this.opt.position < 0) {
                    sel.wrap.style['transition'] = '0s';
                    sel.wrap.style['transform'] = `translateX(-${this.opt.maxPosition * this.privates.multiplierPosition}%)`;
                    this.opt.position = this.opt.maxPosition - 1;
                }
                if (this.opt.position === 0) {
                    sel.wrap.style['transform'] = 'translateX(0)';
                    this.opt.position = 0;
                }
                setTimeout(() => {
                    sel.wrap.style['transition'] = '';
                    sel.wrap.style['transform'] = `translateX(-${this.opt.position * this.privates.multiplierPosition}%)`;
                }, 40);
            },
            nextSlide: function () {
                let sel = {
                    wrap: document.querySelector('.' + this.privates.wrap),
                    children: document.querySelector('.' + this.privates.wrap).children,
                    prev: document.querySelector('.' + this.privates.prev),
                    next: document.querySelector('.' + this.privates.next)
                };
                if (this.opt.position < this.opt.maxPosition) {
                    ++this.opt.position;
                }
                sel.wrap.style['transition'] = '';
                sel.wrap.style['transform'] = `translateX(-${this.opt.position * this.privates.multiplierPosition}%)`;
                sel.wrap.addEventListener('transitionend', () => {
                    if (this.opt.position >= this.opt.maxPosition) {
                        sel.wrap.style['transform'] = 'translateX(0)';
                        sel.wrap.style['transition'] = '0s';
                        this.opt.position = 0;
                    }
                });
            },
            startAutoplay: function (val) {
                if (this.inBlockTeam && this.isOptAutoplay)
                    this.isAutoplay = val;
            },
            initAutoplay: function (delay) {
                clearInterval(this.autoplay);
                if (this.isAutoplay) {
                    this.autoplay = setInterval(() => {
                        this.nextSlide();
                    }, delay);
                }
            },
            stopAutoplay: function () {
                this.isAutoplay = false;
                clearInterval(this.autoplay);
            },
        },
        created() {
            //в инит функцию
            this.privates = this.privates1;
        },
        mounted() {
            this.startAutoplay(true);
            this.opt.maxPosition = document.querySelector('.' + this.privates.wrap).children.length;
            document.querySelector('.' + this.privates.wrap).style['transform'] = 'translateX(0)';
            // в зависимости от количества на стартовом врэппе
            for (let i = 0; i < this.numItemsInWrap; i++) {
                document.querySelector('.' + this.privates.wrap).appendChild(document.querySelector('.' + this.privates.wrap).children[i].cloneNode(true));
            }
            let carouselInner = document.getElementsByClassName('b-carousel__inner');
            for (let i = 0; i < carouselInner.length; i++) {
                carouselInner[i].addEventListener('touchend', () => {
                    if (!carouselInner[i].querySelector('.layer__top').classList.contains('layer__top-visible'))
                        carouselInner[i].querySelector('.layer__top').classList.add('layer__top-visible');
                }, false)
            }
            document.querySelector('body').addEventListener('touchstart', () => {
                if (document.querySelector('body').querySelector('.layer__top-visible'))
                    document.querySelector('body').querySelector('.layer__top-visible').classList.remove('layer__top-visible');
            }, false);
            // if (this.privates.touch === true) {
            //     document.querySelector(this.privates.wrap).addEventListener('touchstart', this.touchStart, false);
            //     document.querySelector(this.privates.wrap).addEventListener('touchmove', this.touchMove, false);
            // }
            //if (this.privates.drag === true) {
            // document.querySelector('.js-carousel').addEventListener('mousedown', this.dragStart, false);
            // document.querySelector('.js-carousel').addEventListener('mousemove', this.dragMove, false);
        }
    }
</script>

<style lang="stylus" scoped>
    .b-carousel__item
        &:nth-child(even)
            .b-carousel__inner
                background-color #e8ebef

        &:nth-child(odd)
            .b-carousel__inner
                background-color #abb8c6

    .a-js-carousel__wrap
        .b-carousel__item
            &:nth-child(even)
                .b-carousel__inner
                    background-color #dbe0e9

    .advisors-team
        .wrap
            width 80%
            @media (max-width 320px)
                width 100%
    .wrap
        width 100%
        display flex
        justify-content center

        &:active
            cursor -webkit-grab !important

        .b-carousel
            width 100%
            overflow hidden
            position relative
            -webkit-box-sizing border-box
            -moz-box-sizing border-box
            box-sizing border-box
            display flex
            flex-direction column

            &:active
                cursor -webkit-grab !important

            .b-carousel__wrap
                display flex
                -webkit-transition transform .5s
                -o-transition transform .5s
                transition transform .5s
                will-change transform
                position relative
                z-index 1
                height 100%

                &:active
                    cursor -webkit-grab !important

                .b-carousel__item
                    /*flex 0 0 25%*/
                    overflow hidden
                    display flex
                    align-items center
                    justify-content center

                    @media (max-width 320px)
                        width 270px

                    &:active
                        cursor -webkit-grab !important

                    .b-carousel__inner
                        position relative
                        margin 0 15px
                        padding 20px 20px 0 20px
                        width 304px
                        clip-path circle(50% at center)
                        -webkit-clip-path circle(50% at center)

                        @media (max-width 490px)
                            position relative
                            margin 0 5px

                        @media (max-width 320px)
                            position relative
                            width 220px
                            height 220px
                            margin 0

                        &:active
                            cursor -webkit-grab !important

                        .b-carousel__img
                            display block

                            @media (max-width 320px)
                                height 100%

                            &:active
                                cursor -webkit-grab !important


    .b-carousel__prev
        margin-right 20px

        &:active
            transform translateX(-20px)

    .b-carousel__next
        margin-left 20px

        &:active
            transform translateX(20px)

    .b-carousel__prev, .b-carousel__next
        background transparent
        border none
        cursor pointer
        transition transform 0.5s ease

        &:focus
            outline 0

    .image
        cursor pointer
        position relative
        max-width 100%
        height 304px
        overflow hidden
        text-align center

        .b-carousel__inner
            .layer__top-visible
                opacity 1 !important

            @media (min-width 420px)
                &:hover
                    .layer__top
                        opacity 1

            img
                max-width 100%
                height 284px
                width auto
                margin auto

            .layer__bottom
                display block

            .layer__top
                opacity 0
                position absolute
                z-index 10000
                top 0
                left 0
                right 0
                bottom 0
                width 100%
                height 100%
                background rgba(255, 210, 79, 0.8)
                color #fff
                padding 15px
                -moz-transition all 0.4s ease-in-out 0s
                -webkit-transition all 0.4s ease-in-out 0s
                -ms-transition all 0.4s ease-in-out 0s
                transition all 0.4s ease-in-out 0s
                clip-path circle(50% at center)

                &:active
                    cursor -webkit-grab !important

            .layer__text
                color #34343e
                text-align center
                font-size 18px
                display inline-block
                position absolute
                width 80%
                top 70%
                left 50%
                -moz-transform translate(-50%, -50%)
                -webkit-transform translate(-50%, -50%)
                -ms-transform translate(-50%, -50%)
                transform translate(-50%, -50%)

                .h3
                    font-weight 700
                    font-size 24px

                p
                    font-size 12px
                    margin-bottom 25px
                    text-transform uppercase
                    font-family MuseoSansCyrl500

                .icons
                    width 100%
                    display flex
                    justify-content center

                    .telegram
                        width 18px
                        height 14.5px

                    .vk
                        width 21px
                        height 13px

                    .fb
                        width 9px
                        height 18px

                    .in
                        width 17px
                        height 17px

                    img
                        margin auto 15px

    .s-notransition
        -webkit-transition 0s !important
        -o-transition 0s !important
        transition 0s !important

    @media (max-width 425px)
        .b-carousel__prev, .b-carousel__next
            display none

        .b-carousel__item
            flex 0 0 100% !important
</style>