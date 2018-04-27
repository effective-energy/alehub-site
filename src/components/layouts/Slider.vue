<template>
    <div style="width: 100%; display: flex; justify-content: center;">
        <button class="b-carousel__prev js-carousel__prev"
                v-if="isControlButton"
                @click="clickPrev">

            <img src="../../../static/images/arrow-left-dark.svg" alt="prev">
        </button>

        <div class="wrap" id="effective-energy" style="user-select: none;">
            <div class="b-carousel js-carousel"
                 @mousedown="dragStart($event)"
                 @mouseup="dragEnd()"
                 @mousemove="(xDrag && yDrag) ? dragMove($event) : 'false'">
                <div class="b-carousel__wrap js-carousel__wrap"
                     @touchstart="(privates1.touch) ? touchStart($event) : 'false'"
                     @touchmove="(privates1.touch) ? touchMove($event) : 'false'">
                    <div class="image b-carousel__item"
                         @mouseover="stopAutoplay"
                         @mouseleave="resume1(3000, 'false')"
                         v-for="(member, i) in items"
                         :key="i"
                         :style="`flex: 0 0 ${ multiplierPosition }%`">

                        <div class="b-carousel__inner"
                             :style="{ 'background-color': (i % 2 === 0) ? '#e8ebef' : '#abb8c6' }">

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

                                    <div class="icons">
                                        <img class="telegram" src="../../../static/images/telegram-ic.svg"
                                             alt="telegram">
                                        <img class="vk" src="../../../static/images/vk.svg" alt="vk">
                                        <img class="fb" src="../../../static/images/fb.svg" alt="fb">
                                        <img class="in" src="../../../static/images/in.svg" alt="in">
                                    </div>
                                </div>
                            </div>
                            <!--</div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="b-carousel__next js-carousel__next"
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
        },
        data() {
            return {
                autoplay: null,
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

                asd: false
            }
        },
        watch: {
            'options.autoplay': function (val) {
                // this.resume1(3000, val);
                this.resume1(3000, false);
            },
        },
        computed: {
            isControlButton: function () {
                return !(window.innerWidth <= 490);
            }
        },
        methods: {
            clickNext: function () {
                this.stopAutoplay();
                this.nextSlide();
                this.resume1(3000, true);
            },
            clickPrev: function () {
                this.stopAutoplay();
                this.prevSlide();
                this.resume1(3000, true);
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

                console.log(xDiff, 'xDiff');
                console.log(yDiff, 'yDiff');

                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    //ширина фотки всегда 304, но лучше получать из DOM

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
                    wrap: document.querySelector(this.privates.wrap),
                    children: document.querySelector(this.privates.wrap).children,
                    prev: document.querySelector(this.privates.prev),
                    next: document.querySelector(this.privates.next)
                };

                --this.opt.position;

                // console.log(this.opt.position, 'prev this.opt.position');

                // sel.wrap.addEventListener('transitionend', () => {
                if (this.opt.position < 0) {
                    // sel.wrap.classList.add('s-notransaction');
                    sel.wrap.style['transition'] = '0s';
                    // setTimeout(() => {
                    sel.wrap.style['transform'] = `translateX(-${this.opt.maxPosition * this.privates.multiplierPosition}%)`;
                    this.opt.position = this.opt.maxPosition - 1;
                    // }, 40);
                }

                // private.isAnimationEnd = true;
                // });

                // if (this.opt.position < 0) {
                //     sel.wrap.classList.add('s-notransaction');
                //     setTimeout(() => {
                //         sel.wrap.style['transform'] = `translateX(-${this.opt.maxPosition * this.privates.multiplierPosition}%)`;
                //         this.opt.position = this.opt.maxPosition - 1;
                //     }, 40);
                // }

                if (this.opt.position === 0) {
                    sel.wrap.style['transform'] = 'translateX(0)';
                    this.opt.position = 0;
                }

                setTimeout(() => {
                    // sel.wrap.classList.remove('s-notransaction');

                    sel.wrap.style['transition'] = '';

                    sel.wrap.style['transform'] = `translateX(-${this.opt.position * this.privates.multiplierPosition}%)`;
                }, 40);

                // sel.wrap.addEventListener('transitionend', () => {
                //     privates.isAnimationEnd = true;
                // });

                // if (privates.settings.autoplay === true) {
                //     privates.timer.become();
                // }
            },
            nextSlide: function () {

                // console.log(this.privates);

                // console.log('check autoplay');

                let sel = {
                    wrap: document.querySelector(this.privates.wrap),
                    children: document.querySelector(this.privates.wrap).children,
                    prev: document.querySelector(this.privates.prev),
                    next: document.querySelector(this.privates.next)
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

                    // private.isAnimationEnd = true;
                });
            },
            resume1: function (delay, autoplay) {
                clearInterval(this.autoplay);
                if (false) {
                    this.autoplay = setInterval(() => {
                        console.log('resume1');
                        this.nextSlide();
                    }, delay);
                }
            },

            stopAutoplay: function () {
                clearInterval(this.autoplay);
            },
        },
        created() {
            //в инит функцию
            this.privates = this.privates1;
        },
        mounted() {

            this.opt.maxPosition = document.querySelector(this.privates.wrap).children.length;

            document.querySelector(this.privates.wrap).style['transform'] = 'translateX(0)';

            document.querySelector(this.privates.wrap).appendChild(document.querySelector(this.privates.wrap).children[0].cloneNode(true));
            document.querySelector(this.privates.wrap).appendChild(document.querySelector(this.privates.wrap).children[1].cloneNode(true));
            document.querySelector(this.privates.wrap).appendChild(document.querySelector(this.privates.wrap).children[2].cloneNode(true));
            document.querySelector(this.privates.wrap).appendChild(document.querySelector(this.privates.wrap).children[3].cloneNode(true));


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
            box-sizing border-box
            display flex
            flex-direction column

            &:active
                cursor -webkit-grab !important

            .b-carousel__wrap
                display flex
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

                    &:active
                        cursor -webkit-grab !important

                    .b-carousel__inner
                        position relative
                        margin 0 15px
                        padding 40px 20px 0 20px
                        width 304px
                        /*width 100%*/

                        &:active
                            cursor -webkit-grab !important

                        .b-carousel__img
                            display block

                            &:active
                                cursor -webkit-grab !important

    /*.b-carousel__inner*/
    /*padding 40px 20px 0 20px*/

    /*.b-carousel__img*/
    /*display block*/

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
                width 304px
                //width calc(100% - 30px)
                height 100%
                background rgba(255, 210, 79, 0.8)
                color #fff
                padding 15px
                -moz-transition all 0.4s ease-in-out 0s
                -webkit-transition all 0.4s ease-in-out 0s
                -ms-transition all 0.4s ease-in-out 0s
                transition all 0.4s ease-in-out 0s

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
        transition 0s !important

    @media (max-width 425px)
        .b-carousel__prev, .b-carousel__next
            display none

        .b-carousel__item
            flex 0 0 100% !important

    /*.layer__top*/
    /*left 40px !important*/
</style>