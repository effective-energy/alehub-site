<template>
    <div style="width: 100%; display: flex; justify-content: center;">
        <button class="b-carousel__prev js-carousel__prev"
                style="background: transparent; border: none; cursor: pointer;">
            <img src="../../../static/images/arrow-left-dark.svg" alt="prev">
        </button>

        <div class="wrap" style="display: flex; justify-content: center;" id="effective-energy">
            <div class="b-carousel js-carousel">
                <div class="b-carousel__wrap js-carousel__wrap">
                    <div class="image b-carousel__item"
                         v-for="(member, i) in items" :key="i">

                        <div style="margin: 0 15px; width: 100%;">
                            <div style="padding: 40px 20px 0 20px;"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="b-carousel__next js-carousel__next">
            <img src="../../../static/images/arrow-left-dark.svg" alt="prev"
                 style="transform: rotate(180deg);">
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
            }
        },
        data() {
            return {
                carousel: null,
                opt: {
                    position: 0,
                    maxPosition: 0
                }
            }
        },
        watch: {
            'options.autoplay': function (val) {
                console.log(this.options, 'options');
                console.log(val, 'autoplay');
                this.Carousel(this.settings, this.options);
            }
        },
        methods: {
            nextSlide: function () {
                console.log(123);

                console.log(this.privates, 'privates');

                let sel = {
                    wrap: document.querySelector(this.privates.wrap),
                    children: document.querySelector(this.privates.wrap).children,
                    prev: document.querySelector(this.privates.prev),
                    next: document.querySelector(this.privates.next)
                };

                // console.log(sel.wrap, 'sel.wrap');

                // let opt = {
                //     position: 0,
                //     max_position: document.querySelector(this.privates.wrap).children.length - 3
                // };

                this.opt.maxPosition = document.querySelector(this.privates.wrap).children.length - 3;

                // console.log(this.privates, 'animation');

                // if (!this.privates.isAnimationEnd) {
                //     return;
                // }
                //
                // this.privates.isAnimationEnd = false;

                if (this.opt.position < this.opt.maxPosition) {
                    ++this.opt.position;
                }

                sel.wrap.style['transform'] = `translateX(-${this.opt.position * 25}%)`;

                console.log(sel.wrap, 'sel.wrap');

                // sel.wrap.addEventListener('transitionstart', () => {
                    if (this.opt.position >= this.opt.maxPosition) {
                        sel.wrap.style['transform'] = 'translateX(0)';
                        this.opt.position = 0;
                    }

                    // this.privates.isAnimationEnd = true;
                // });

                // if (this.privates.settings.autoplay === true) {
                //     this.privates.timer.become();
                // }
            },
            resume1: function (delay) {
                setInterval(() => {
                    this.nextSlide();
                }, delay);
            },

            Timer: function (callback, delay) {

                let timerId, start, remaining = delay;

                /* Public methods */
                this.resume = () => {
                    console.log('resume');

                    start = new Date();
                    timerId = setTimeout(() => {
                        remaining = delay;
                        this.resume();
                        callback();
                    }, remaining);

                };

                this.pause = () => {
                    clearTimeout(timerId);
                    remaining -= new Date() - start;
                };

                this.become = () => {
                    clearTimeout(timerId);
                    remaining = delay;

                    this.resume();
                };

                this.resume();
            },
            Carousel: function (settings, options) {

                let privates = {},
                    xDown, yDown, xUp, yUp, xDiff, yDiff;

                privates.default = options;
                privates.default.autoplay = false;

                // console.log(privates.default, 'privates.default');
                // privates.default.autoplay = this.isTeam;

                // console.log(privates.default, 'privates.default');

                privates.settings = Object.assign(privates.default, settings);

                privates.isAnimationEnd = true;

                privates.sel = {
                    wrap: document.querySelector(privates.settings.wrap),
                    children: document.querySelector(privates.settings.wrap).children,
                    prev: document.querySelector(privates.settings.prev),
                    next: document.querySelector(privates.settings.next)
                };

                privates.opt = {
                    position: 0,
                    max_position: document.querySelector(privates.settings.wrap).children.length - 3
                };

                //с помощью этого сделать loop слайдера
                // privates.sel.wrap.appendChild(privates.sel.children[0].cloneNode(true));

                // Prev slide
                this.prev_slide = () => {
                    console.log(2);
                    if (!privates.isAnimationEnd) {
                        return;
                    }

                    privates.isAnimationEnd = false;

                    --privates.opt.position;

                    if (privates.opt.position < 0) {
                        privates.sel.wrap.style['transform'] = `translateX(-${privates.opt.max_position * 25}%)`;
                        privates.opt.position = privates.opt.max_position - 1;
                    }

                    setTimeout(() => {
                        privates.sel.wrap.style['transform'] = `translateX(-${privates.opt.position * 25}%)`;
                    }, 10);

                    privates.sel.wrap.addEventListener('transitionend', () => {
                        privates.isAnimationEnd = true;
                    });

                    if (privates.settings.autoplay === true) {
                        privates.timer.become();
                    }
                };


                // Next slide
                this.next_slide = () => {
                    console.log(1);
                    if (!privates.isAnimationEnd) {
                        return;
                    }

                    privates.isAnimationEnd = false;

                    if (privates.opt.position < privates.opt.max_position) {
                        ++privates.opt.position;
                    }

                    privates.sel.wrap.style['transform'] = `translateX(-${privates.opt.position * 25}%)`;

                    privates.sel.wrap.addEventListener('transitionend', () => {
                        if (privates.opt.position >= privates.opt.max_position) {
                            privates.sel.wrap.style['transform'] = 'translateX(0)';
                            privates.opt.position = 0;
                        }

                        privates.isAnimationEnd = true;
                    });

                    if (privates.settings.autoplay === true) {
                        privates.timer.become();
                    }
                };

                // Autoplay
                if (privates.settings.autoplay === true) {
                    privates.timer = new this.Timer(this.next_slide, privates.settings.autoplayDelay);
                }


                // Control
                if (privates.sel.prev !== null) {
                    privates.sel.prev.addEventListener('click', () => {
                        this.prev_slide();
                    });
                }

                if (privates.sel.next !== null) {
                    // privates.sel.next.addEventListener('click', () => {
                    //     this.next_slide();
                    // });
                }

                // Touch events
                if (privates.settings.touch === true) {
                    privates.sel.wrap.addEventListener('touchstart', privates.hts, false);
                    privates.sel.wrap.addEventListener('touchmove', privates.htm, false);
                }

                // Pause on hover
                if (privates.settings.autoplay === true && privates.settings.pauseOnHover === true) {
                    privates.sel.wrap.addEventListener('mouseenter', () => {
                        privates.timer.pause();
                    });

                    privates.sel.wrap.addEventListener('mouseleave', () => {
                        privates.timer.become();
                    });
                }

                privates.hts = (e) => {
                    xDown = e.touches[0].clientX;
                    yDown = e.touches[0].clientY;
                };

                privates.htm = (e) => {
                    if (!xDown || !yDown)
                        return;

                    xUp = e.touches[0].clientX;
                    yUp = e.touches[0].clientY;

                    xDiff = xDown - xUp;
                    yDiff = yDown - yUp;

                    if (Math.abs(xDiff) > Math.abs(yDiff))
                        (xDiff > 0) ? this.next_slide() : this.prev_slide();

                    xDown = 0;
                    yDown = 0;
                }
            }
        },
        created() {
            this.privates = this.privates1;
        },
        mounted() {

            document.querySelector(this.privates.next).addEventListener('click', () => {
                this.nextSlide();
            });

            this.Carousel(this.settings, this.options);
        }
    }
</script>

<style lang="stylus" scoped>
    .b-carousel__prev
        margin-right 20px

    .b-carousel__next
        margin-left 20px

    .b-carousel__next
        &:active
            transform translateX(20px)

    .b-carousel__prev
        &:active
            transform translateX(-20px)

    .b-carousel__prev, .b-carousel__next
        background transparent
        border none
        cursor pointer
        transition transform 0.5s ease

        &:focus
            outline 0

    .b-carousel
        width 100%
        overflow hidden
        position relative
        box-sizing border-box

    .b-carousel__wrap
        display flex
        transition transform .5s
        will-change transform
        position relative
        z-index 1
        height 100%

    .b-carousel__item
        flex 0 0 25%
        overflow hidden
        display flex
        align-items center
        justify-content center

    .b-carousel__img
        width 100%
        display block

    .image
        cursor pointer
        position relative
        max-width 100%
        height 304px
        overflow hidden
        text-align center

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
            left 15px
            right 0
            bottom 0
            width calc(100% - 30px)
            height 100%
            background rgba(255, 210, 79, 0.8)
            color #fff
            padding 15px
            -moz-transition all 0.4s ease-in-out 0s
            -webkit-transition all 0.4s ease-in-out 0s
            -ms-transition all 0.4s ease-in-out 0s
            transition all 0.4s ease-in-out 0s

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
</style>