<template>
    <div class="slider-navbar"
         :class="{ 'width-79': isDeutsch && isUpTo1200 || isFrench && isUpTo1200,
                   'width-78': isSpanish && isUpTo1200 || isDeutsch && isUpTo1150 || isFrench && isUpTo1350,
                   'width-77': isSpanish && (isUpTo1150 || isUpTo1300 || isUpTo1350) || isFrench && isUpTo1300 || isArabic && (isUpTo1350 || isUpTo1200),
                   'width-76': isDeutsch && (isUpTo1250 || isUpTo1100) || isFrench && isUpTo1250 || isArabic && isUpTo1300,
                   'width-75': isSpanish && (isUpTo1100 || isUpTo1250) || isFrench && isUpTo1100 || isArabic && isUpTo1150,
                   'width-74': isArabic && (isUpTo1250 || isUpTo1100),
                   'slider-navbar__dark': isDark }">
        <button class="b-carousel__prev n-js-carousel__prev"
                :class="{ 'transparent': !isLeft, 'b-carousel__prev-rtl': isRtl }"
                :disabled="!isLeft"
                @click="prevSlide">
            <img class="arrow-prev"
                 src="../../../static/images/arrow-left-black.svg"
                 alt="more navbar items"
                 v-if="!isDark && !isRtl">
            <img class="arrow-prev"
                 src="../../../static/images/arrow-left-white.svg"
                 alt="more navbar items"
                 v-if="isDark && !isRtl">
            <img class="arrow-prev"
                 src="../../../static/images/arrow-right-black.svg"
                 alt="more navbar items"
                 v-if="!isDark && isRtl">
            <img class="arrow-prev"
                 src="../../../static/images/arrow-right-white.svg"
                 alt="more navbar items"
                 v-if="isDark && isRtl">
        </button>
        <div class="wrap"
             :class="{ 'width-95': isFrench && isUpTo1150,
                       'width-85': isDeutsch && (isUpTo1300 || isUpTo1250 || isUpTo1200 || isUpTo1150 || isUpTo1100) ||  isFrench &&
                       (isUpTo1250 || isUpTo1200 || isUpTo1150) || isRussian && isUpTo1150 || isEnglish && isUpTo1100 || isSpanish && (isUpTo1100 || isUpTo1150),
                       'width-80': isRussian && isUpTo1100 || isFrench && isUpTo1100 }">
            <div class="b-carousel n-js-carousel">
                <div class="b-carousel__wrap n-js-carousel__wrap"
                     @touchstart="(options.touch) ? touchStart($event) : 'false'"
                     @touchmove="(options.touch) ? touchMove($event) : 'false'">
                    <div class="b-carousel__item"
                         :class="{
                            'flex-basis-20': isFrench && (isUpTo1350 || isUpTo1300) || isDeutsch && (isUpTo1350 || isUpTo1300) ||
                            isRussian && (isUpTo1350 || isUpTo1300) || isArabic && (isUpTo1350 || isUpTo1300) ||
                            isEnglish && isUpTo1150 || isSpanish && (isUpTo1300 || isUpTo1350),
                            'flex-basis-25': isFrench && (isUpTo1200 || isUpTo1250) || isArabic && (isUpTo1250 || isUpTo1200),
                             'flex-basis-33': isUpTo1100 && (isRussian || isFrench) }"
                         v-for="(item, index) in items"
                         :key="index">

                        <a class="b-carousel__link"
                           :href="item.path"
                           v-scroll-to="item.path">
                            {{ item.name }}
                        </a>

                        <div class="nav-line-slider"
                             :class="{ 'nav-line-slider__yellow': isYellow, 'nav-line-slider__black': isDark,
                                   'nav-line-slider__white': !isYellow && !isDark }"
                             v-if="index === 0">
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <button class="b-carousel__next n-js-carousel__next"
                :class="{ 'transparent': !isRight, 'b-carousel__next-rtl': isRtl }"
                :disabled="!isRight"
                @click="nextSlide">
            <img class="arrow-next"
                 src="../../../static/images/arrow-right-black.svg"
                 alt="more navbar items"
                 v-if="!isDark && !isRtl">
            <img class="arrow-next"
                 src="../../../static/images/arrow-right-white.svg"
                 alt="more navbar items"
                 v-if="isDark && !isRtl">
            <img class="arrow-next"
                 src="../../../static/images/arrow-left-black.svg"
                 alt="more navbar items"
                 v-if="!isDark && isRtl">
            <img class="arrow-next"
                 src="../../../static/images/arrow-left-white.svg"
                 alt="more navbar items"
                 v-if="isDark && isRtl">
        </button>
    </div>
</template>

<script>
    export default {
        name: 'SliderNavbar',
        props: {
            isDark: {
                type: Boolean,
                required: true
            },
            isYellow: {
                type: Boolean,
                required: true
            },
            isRtl: {
                type: Boolean,
                required: true
            },
            items: {
                type: Array,
                required: true
            },
            options: {
                type: Object,
                required: true
            },
        },
        watch: {
            '$i18n.locale'() {
                setTimeout(() => {
                    this.multiplier = parseFloat(getComputedStyle(document.querySelector('.b-carousel__item')).flexBasis);
                    this.opt.maxPosition = this.items.length - Math.round(100 / parseFloat(getComputedStyle(document.querySelector('.b-carousel__item')).flexBasis));


                    this.activeItems = [];
                    let numInViewedCarousel = Math.round(100 / this.multiplier);
                    if (this.activeItem <= this.opt.maxPosition)
                        for (let i = 0, j = 0; i < numInViewedCarousel; i++, j++)
                            this.activeItems[i] = this.activeItem + i;
                    else
                        for (let i = numInViewedCarousel - 1, j = 0; i >= 0; i--, j++)
                            this.activeItems[i] = this.activeItem - j;

                    this.opt.position = this.activeItems[0];

                    document.querySelector('.n-js-carousel__wrap').style['transform'] = `translateX(-${ this.opt.position * this.multiplier }%)`;

                    this.changeLineWidth(this.activeItem);

                    (this.opt.position === 0) ? this.left = false : this.left = true;
                    (this.opt.position === this.opt.maxPosition) ? this.right = false : this.right = true;
                }, 0);
            },
            activeItem: function (index) {
                this.changeLineWidth(index);

                if (index > this.activeItems[this.activeItems.length - 1])
                    this.nextSlide();
                else if (index < this.activeItems[0])
                    this.prevSlide();
            },
        },
        data() {
            return {
                activeItems: [],
                activeItem: 0,
                opt: {
                    position: 0,
                    maxPosition: 4
                },
                right: true,
                left: false,
                multiplier: 0,
                xDown: 0,
                yDown: 0
            }
        },
        computed: {
            isRight: function () {
                return this.right;
            },
            isLeft: function () {
                return this.left;
            },
            isDeutsch: function () {
                return this.$i18n.locale === 'de';
            },
            isFrench: function () {
                return this.$i18n.locale === 'fr';
            },
            isRussian: function () {
                return this.$i18n.locale === 'ru';
            },
            isArabic: function () {
                return this.$i18n.locale === 'ar';
            },
            isEnglish: function () {
                return this.$i18n.locale === 'en';
            },
            isSpanish: function () {
                return this.$i18n.locale === 'es';
            },
            isUpTo1350: function () {
                return window.innerWidth > 1300 && window.innerWidth <= 1350;
            },
            isUpTo1300: function () {
                return window.innerWidth > 1250 && window.innerWidth <= 1300;
            },
            isUpTo1250: function () {
                return window.innerWidth > 1200 && window.innerWidth <= 1250;
            },
            isUpTo1200: function () {
                return window.innerWidth > 1150 && window.innerWidth <= 1200;
            },
            isUpTo1150: function () {
                return window.innerWidth > 1100 && window.innerWidth <= 1150;
            },
            isUpTo1100: function () {
                return window.innerWidth > 1024 && window.innerWidth <= 1100;
            }
        },
        methods: {
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
            prevSlide: function () {
                let sel = {
                    wrap: document.querySelector('.n-js-carousel__wrap'),
                    children: document.querySelector('.n-js-carousel__wrap').children,
                    prev: document.querySelector('.n-js-carousel__prev'),
                    next: document.querySelector('.n-js-carousel__next')
                };

                --this.opt.position;

                if (this.opt.position < this.opt.maxPosition) {
                    if (!this.isRtl)
                        sel.wrap.style['transform'] = `translateX(-${ this.opt.position * this.multiplier }%)`;
                    else
                        sel.wrap.style['transform'] = `translateX(${ this.opt.position * this.multiplier }%)`;
                }

                this.activeItems.pop();
                this.activeItems.unshift(this.activeItems[0] - 1);

                if (this.opt.position < this.opt.maxPosition)
                    this.right = true;

                if (this.opt.position === 0) {
                    sel.wrap.style['transform'] = 'translateX(0)';
                    this.left = false
                } else {
                    this.left = true
                }
            },
            nextSlide: function () {
                let sel = {
                    wrap: document.querySelector('.n-js-carousel__wrap'),
                    children: document.querySelector('.n-js-carousel__wrap').children,
                    prev: document.querySelector('.n-js-carousel__prev'),
                    next: document.querySelector('.n-js-carousel__next')
                };

                if (this.opt.position < this.opt.maxPosition) {
                    ++this.opt.position;
                }

                if (this.opt.position > 0) {
                    this.left = true;
                }

                sel.wrap.style['transition'] = '';
                if (!this.isRtl)
                    sel.wrap.style['transform'] = `translateX(-${ this.opt.position * this.multiplier }%)`;
                else
                    sel.wrap.style['transform'] = `translateX(${ this.opt.position * this.multiplier }%)`;

                this.activeItems.shift();
                this.activeItems.push(this.activeItems[this.activeItems.length - 1] + 1);

                (this.opt.position === this.opt.maxPosition) ? this.right = false : this.right = true;
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
            changeLineWidth: function (index) {
                if (!document.querySelector('.nav-line-slider'))
                    return false;

                let elWidth = document.querySelectorAll('.b-carousel__link')[index].offsetWidth,
                    currentNavbarItem = this.getCoords(document.querySelectorAll('.b-carousel__item')[index]).left,
                    firstNavbarItem = this.getCoords(document.querySelector('.b-carousel__item')).left;

                document.querySelector('.nav-line-slider').style.width = elWidth + 'px';
                document.querySelector('.nav-line-slider').style.transform = `translate3D(${ currentNavbarItem - firstNavbarItem }px,0,0)`;
            },
            checkActive: function () {
                let menu = this.$t('navbar.menuList');
                for (let i = 0; i < menu.length; i++) {
                    if (document.querySelector(menu[i].path) === null)
                        return false;

                    let offset = document.querySelector(menu[i].path).offsetTop - 74,
                        height = document.querySelector(menu[i].path).offsetHeight;

                    if (window.scrollY > offset && window.scrollY <= offset + height)
                        this.activeItem = i;

                }
            },
        },
        mounted() {
            let items = document.querySelector('.n-js-carousel__wrap').children;

            this.multiplier = parseFloat(getComputedStyle(document.querySelector('.b-carousel__item')).flexBasis);
            this.opt.maxPosition = items.length - Math.round(100 / parseFloat(getComputedStyle(document.querySelector('.b-carousel__item')).flexBasis));

            let numInViewedCarousel = Math.round(100 / this.multiplier);

            for (let i = 0; i < numInViewedCarousel; i++) {
                this.activeItems.push(i);
            }

            setTimeout(() => {
                this.changeLineWidth(this.activeItem);

                if (this.activeItem > this.activeItems[this.activeItems.length - 1])
                    for (let i = this.activeItems.length - 1, j = 0; i >= 0; i--, j++)
                        this.activeItems[i] = this.activeItem - j;

                this.opt.position = this.activeItems[0];
                document.querySelector('.n-js-carousel__wrap').style['transform'] = `translateX(-${ this.opt.position * this.multiplier }%)`;

                if (this.activeItems[0] === this.opt.maxPosition)
                    this.right = false;

            }, 1000);


            window.addEventListener('scroll', () => {
                this.checkActive();
            });
        }
    }
</script>

<style lang="stylus" scoped>
    .slider-navbar
        width 80%
        display flex
        justify-content center

    .wrap
        width 100%
        display flex
        justify-content center

        .b-carousel
            width 100%
            overflow hidden
            position relative
            -webkit-box-sizing border-box
            -moz-box-sizing border-box
            box-sizing border-box
            display flex
            flex-direction column

            .b-carousel__wrap
                display flex
                -webkit-transition transform .5s
                -o-transition transform .5s
                transition transform .5s
                will-change transform
                position relative
                z-index 1
                height 100%

                .b-carousel__item
                    font-size 18px
                    font-family MuseoSansCyrl300
                    font-weight 600
                    overflow hidden
                    display flex
                    align-items center
                    justify-content center

                    &:focus
                        outline none

                    a
                        color #0f1118

                        &:hover
                            text-decoration none

                        &:focus
                            outline none

                    @media (min-width 1250px) and (max-width 1350px)
                        flex-grow 0
                        flex-shrink 0
                        flex-basis 16.666666%

                    @media (min-width 1150px) and (max-width 1250px)
                        flex-grow 0
                        flex-shrink 0
                        flex-basis 20%

                    @media (min-width 1024px) and (max-width 1150px)
                        flex-grow 0
                        flex-shrink 0
                        flex-basis 25%

    .slider-navbar__dark
        .wrap
            .b-carousel
                .b-carousel__wrap
                    .b-carousel__item
                        a
                            color #ffffff

    .b-carousel__prev
        @media (min-width 1250px) and (max-width 1350px)
            margin 0 0 0 25px

        @media (min-width 1150px) and (max-width 1250px)
            margin 0 0 0 20px

        @media (min-width 1024px) and (max-width 1150px)
            margin 0 0 0 15px

    .b-carousel__next
        @media (min-width 1250px) and (max-width 1350px)
            margin 0 25px 0 0

        @media (min-width 1150px) and (max-width 1250px)
            margin 0 20px 0 0

        @media (min-width 1024px) and (max-width 1150px)
            margin 0 15px 0 0

    .b-carousel__prev-rtl
        @media (min-width 1250px) and (max-width 1350px)
            margin 0 25px 0 0

        @media (min-width 1150px) and (max-width 1250px)
            margin 0 20px 0 0

        @media (min-width 1024px) and (max-width 1150px)
            margin 0 15px 0 0

    .b-carousel__next-rtl
        @media (min-width 1250px) and (max-width 1350px)
            margin 0 0 0 25px

        @media (min-width 1150px) and (max-width 1250px)
            margin 0 0 0 20px

        @media (min-width 1024px) and (max-width 1150px)
            margin 0 0 0 15px

    .b-carousel__prev, .b-carousel__next
        padding 0
        opacity 1
        cursor pointer
        position relative
        background-color transparent
        border none
        -webkit-transition all .3s ease-in-out
        -o-transition all .3s ease-in-out
        transition all .3s ease-in-out

        .arrow-prev, .arrow-next
            width 50%
            -webkit-transition all .3s ease-in-out
            -o-transition all .3s ease-in-out
            transition all .3s ease-in-out

        &:focus
            outline none

    .b-carousel__prev
        &:active
            .arrow-prev
                transform translateX(-10px)

    .b-carousel__next
        &:active
            .arrow-next
                transform translateX(10px)

    .nav-line-slider
        position absolute
        height 2px
        background-color #34343e
        bottom 10px
        -webkit-transition all .5s ease
        -o-transition all .5s ease
        transition all .5s ease

    .nav-line-slider__white
        background-color #ffbc00 !important

    .nav-line-slider__yellow
        background-color #343a49 !important

    .nav-line-slider__black
        background-color #ffbc00 !important

    .transparent
        opacity 0

    .flex-basis-20
        flex-basis 20% !important

    .flex-basis-25
        flex-basis 25% !important

    .flex-basis-33
        flex-basis 33.333333% !important

    .width-74
        width 74% !important

    .width-75
        width 75% !important

    .width-76
        width 76% !important

    .width-77
        width 77% !important

    .width-78
        width 78% !important

    .width-79
        width 79% !important

    .width-80
        width 80% !important

    .width-85
        width 85% !important

    .width-90
        width 90% !important

</style>