<template>
    <div class="team" id="team">

        <div class="our-team">

            <h3 class="title">
                Our team
            </h3>

            <div class="separator">
            </div>

            <div class="serokell">
                <p>Serokell</p>
                <!--v-show="!isMobileScreen"-->
                <div class="images" id="serokell-gallery">
                    <div class="image"
                         v-for="(member, i) in team.serokell" :key="i"
                         :style="{ 'background-color': (i % 2 === 0) ? '#e8ebef' : '#abb8c6' }">
                        <img class="layer__bottom"
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
                                    <img class="telegram" src="../../static/images/telegram-ic.svg" alt="telegram">
                                    <img class="vk" src="../../static/images/vk.svg" alt="vk">
                                    <img class="fb" src="../../static/images/fb.svg" alt="fb">
                                    <img class="in" src="../../static/images/in.svg" alt="in">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--<slider :items="team.serokell"-->
                        <!--:settings="settings"-->
                        <!--:options="options"-->
                        <!--:privates1="Object.assign(settings, options)"/>-->
            </div>

            <div class="effective-energy" style="width: 100%;">
                <p>Effective Energy team</p>

                <slider :items="team.energy"
                        :settings="settings"
                        :options="options"
                        :privates1="Object.assign(settings, options)"/>

            </div>
        </div>
        <div class="advisors" id="advisors">
            <h3 class="title">
                Advisors
            </h3>

            <div class="separator">
            </div>

            <div class="advisors-team">
                <div class="images">
                    <div class="image"
                         style=""
                         v-for="(member, i) in team.advisors" :key="i"
                         :style="{ 'background-color': (i % 2 === 0) ? '#e2e8e8' : '#abb8c6' }">

                        <img class="layer__bottom"
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
                                    <img class="telegram" src="../../static/images/telegram-ic.svg" alt="telegram">
                                    <img class="vk" src="../../static/images/vk.svg" alt="vk">
                                    <img class="fb" src="../../static/images/fb.svg" alt="fb">
                                    <img class="in" src="../../static/images/in.svg" alt="in">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TinySlider from 'vue-tiny-slider';
    import Slider from './layouts/Slider';

    export default {
        name: 'Screen5',
        components: {
            TinySlider,
            Slider
        },
        props: {
            isTeam: {
                type: [Boolean],
                required: true
            }
        },
        watch: {
            'isTeam': function (isAutoplay) {
                this.options.autoplay = isAutoplay;
            }
        },
        data() {
            return {
                settings: {
                    main: '.js-carousel',
                    wrap: '.js-carousel__wrap',
                    prev: '.js-carousel__prev',
                    next: '.js-carousel__next'
                },
                options: {
                    touch: true,
                    autoplay: false,
                    autoplayDelay: 3000,
                    pauseOnFocus: true,
                    pauseOnHover: true,
                    positionMultiplier: 25,
                },
                team: {
                    serokell: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../../static/images/avatars/seroka@3x.png'
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../../static/images/avatars/rukin@3x.png'
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../../static/images/avatars/elagin@3x.png'
                        },
                    ],
                    energy: [
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../../static/images/avatars/gromyko@3x.png'
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Blockchain Expert',
                            src: '../../static/images/avatars/grudinin@3x.png'
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Chief Operating Officer',
                            src: '../../static/images/avatars/osipenko@3x.png'
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../../static/images/avatars/elena@3x.png'
                        },
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Marketing Officer',
                            src: '../../static/images/avatars/loktev@3x.png'
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../../static/images/avatars/levashow@3x.png'
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../../static/images/avatars/dudin@3x.png'
                        },
                        {
                            name: 'Alexander Voroncov',
                            position: 'Fullstack Developer',
                            src: '../../static/images/avatars/voroncov@3x.png'
                        },
                        {
                            name: 'Denis Tikhonov',
                            position: 'Frontend Developer',
                            src: '../../static/images/avatars/tikhonov@3x.png'
                        },
                        {
                            name: 'Galina Sergeeva',
                            position: 'Frontend Developer',
                            src: '../../static/images/avatars/sergeeva@3x.png'
                        },
                        {
                            name: 'Dmitry Zhuravlev',
                            position: 'Mobile developer',
                            src: '../../static/images/avatars/zhuravlev@3x.png'
                        },
                    ],
                    advisors: [
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../../static/images/avatars/gromyko@3x.png'
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Blockchain Expert',
                            src: '../../static/images/avatars/grudinin@3x.png'
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Chief Operating Officer',
                            src: '../../static/images/avatars/osipenko@3x.png'
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../../static/images/avatars/elena@3x.png'
                        },
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Marketing Officer',
                            src: '../../static/images/avatars/loktev@3x.png'
                        }
                    ]
                }
            }
        },
        computed: {
            //добавить чек по типу устройства (браузера с которого заходили)
            isMobileScreen: function () {
                return window.innerWidth <= 425;
            },
            positionMultiplier: function () {
                let windowWidth = window.innerWidth;

                //вынести значения ширины экрана наружу и сравнивать свичем стринги (mobile, laptop, laptopL, wideScreen)
                if (windowWidth <= 425)
                    return 100;
                else if (windowWidth > 425 && windowWidth <= 1024)
                    return 50;
                else if (windowWidth > 1024 && windowWidth <= 1440)
                    return 33.333;
                else
                    return 25;
            },
            // subtrahendMaxPosition: function () {
            //     let windowWidth = window.innerWidth;
            //
            //     if (windowWidth <= 425)
            //         return 1;
            //     else if (windowWidth > 425 && windowWidth <= 1024)
            //         return 2;
            //     else if (windowWidth > 1024 && windowWidth <= 1440)
            //         return 3;
            //     else
            //         return 4;
            // }
        },
        methods: {
            Timer: function (callback, delay) {

                let timerId, start, remaining = delay;

                /* Public methods */
                this.resume = () => {
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

                privates.sel.wrap.appendChild(privates.sel.children[0].cloneNode(true));

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
                    privates.sel.next.addEventListener('click', () => {
                        this.next_slide();
                    });
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
            this.options.positionMultiplier = this.positionMultiplier;
            // this.options.subtrahendMaxPosition = this.subtrahendMaxPosition;
        },
        mounted() {
            // console.log(window.innerWidth, 'window.innerWidth');
            // this.Carousel({
            //     main: '.js-carousel',
            //     wrap: '.js-carousel__wrap',
            //     prev: '.js-carousel__prev',
            //     next: '.js-carousel__next'
            // }, {
            //     touch: true,
            //     autoplay: true,
            //     autoplayDelay: 3000,
            //     pauseOnFocus: true,
            //     pauseOnHover: true
            // });

            document.getElementById('effective-energy').style.width = document.getElementById('serokell-gallery').offsetWidth + 'px';
        }
    }
</script>

<style lang="stylus" scoped>
    .b-carousel__prev
        margin-right 20px

    .team
        background-color #ffffff
        .our-team
            padding 80px 5% 40px 5%
            display flex
            flex-direction column
            justify-content center
            align-items center
            background-color #ffffff

            .title
                font-size 40px

        .advisors
            padding 80px 5% 40px 5%
            display flex
            flex-direction column
            justify-content center
            align-items center
            background-color #ececf0

            .title
                font-size 40px

            .separator
                margin-bottom 50px

        .separator
            width 76px
            height 2px
            margin 25px 0
            background-color #34343e

        .effective-energy
            .image,
            .image *
                box-sizing border-box

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

            p
                margin-bottom 50px
                font-size 20px

        .serokell
            p
                margin-bottom 30px
                font-size 20px

        .serokell, .effective-energy
            display flex
            flex-direction column
            justify-content center
            align-items center
            margin-bottom 60px

        .advisors-team
            width 100%
            margin-bottom 60px

            .images
                width 100%
                justify-content center !important

        .serokell, .advisors-team

            .images
                display flex
                flex-wrap wrap
                justify-content center

            .image,
            .image *
                box-sizing border-box

            .image
                cursor pointer
                position relative
                display inline-block
                max-width 100%
                margin 0 15px 30px 15px
                padding 20px 40px 0 40px
                height 304px
                width 304px
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
                    top: 0
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

    @media (max-width: 425px)
        .team
            .our-team
                .title
                    font-size 30px

            .advisors
                .title
                    font-size 30px

            .separator
                margin 12px 0 24px

</style>