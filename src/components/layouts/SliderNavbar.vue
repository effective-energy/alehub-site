<template>
    <div class="slider-navbar"
         :class="{ 'width-79': isDeutsch && isUpTo1200 || isFrench && isUpTo1200,
                   'width-78': isSpanish && isUpTo1200 || isDeutsch && isUpTo1150 || isFrench && isUpTo1350,
                   'width-77': isSpanish && (isUpTo1150 || isUpTo1300 || isUpTo1350) || isFrench && isUpTo1300,
                   'width-76': isDeutsch && (isUpTo1250 || isUpTo1100) || isFrench && isUpTo1250,
                   'width-75': isSpanish && (isUpTo1100 || isUpTo1250) || isFrench && isUpTo1100}">

        <button class="b-carousel__prev n-js-carousel__prev"
                :class="{ 'transparent': !isLeft }"
                :disabled="!isLeft"
                @click="prevSlide">
            <img class="arrow-prev"
                 src="../../../static/images/arrow-left-black.svg"
                 alt="more navbar items">
        </button>

        <div class="wrap"
             :class="{ 'width-95': isFrench && isUpTo1150,
                       'width-85': isDeutsch && (isUpTo1300 || isUpTo1250 || isUpTo1200 || isUpTo1150 || isUpTo1100) ||  isFrench &&
                       (isUpTo1250 || isUpTo1200 || isUpTo1150) || isRussian && isUpTo1150 || isEnglish && isUpTo1100 || isSpanish && (isUpTo1100 || isUpTo1150),
                       'width-80': isRussian && isUpTo1100 || isFrench && isUpTo1100 }">

            <!--@mousedown="dragStart($event)"-->
            <!--@mouseup="dragEnd()"-->
            <!--@mousemove="(xDrag && yDrag) ? dragMove($event) : 'false'"-->

            <div class="b-carousel n-js-carousel">

                <!--@touchstart="(privates1.touch) ? touchStart($event) : 'false'"-->
                <!--@touchmove="(privates1.touch) ? touchMove($event) : 'false'"-->

                <div class="b-carousel__wrap n-js-carousel__wrap">

                    <!--@mouseover="stopAutoplay"-->
                    <!--@mouseleave="startAutoplay('true')"-->

                    <div class="b-carousel__item"
                         :class="{
                            'flex-basis-20': isFrench && (isUpTo1350 || isUpTo1300) || isDeutsch && (isUpTo1350 || isUpTo1300) ||
                            isRussian && (isUpTo1350 || isUpTo1300) ||
                            isEnglish && isUpTo1150 || isSpanish && (isUpTo1300 || isUpTo1350),
                            'flex-basis-25': isFrench && (isUpTo1200 || isUpTo1250),
                             'flex-basis-33': isUpTo1100 && (isRussian || isFrench) }"
                         v-for="(item, i) in items"
                         :key="i">

                        <a :href="item.path"
                           v-scroll-to="item.path">
                            {{ item.name }}
                        </a>

                    </div>
                </div>
            </div>
        </div>

        <!--v-if="isControlButton"-->
        <!--@click="clickNext"-->

        <button class="b-carousel__next n-js-carousel__next"
                :class="{ 'transparent': !isRight }"
                :disabled="!isRight"
                @click="nextSlide">
            <img class="arrow-next" src="../../../static/images/arrow-right-black.svg" alt="more navbar items">
        </button>

    </div>
</template>

<script>
    export default {
        name: 'SliderNavbar',
        props: {
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
                console.log('$i18n.locale');
                setTimeout(() => {
                    let tmp = this.multiplier;
                    this.multiplier = parseFloat(getComputedStyle(document.querySelector('.b-carousel__item')).flexBasis);
                    this.opt.maxPosition = this.items.length - Math.round(100 / parseFloat(getComputedStyle(document.querySelector('.b-carousel__item')).flexBasis));
                    if (tmp !== this.multiplier && this.opt.position !== 0) {
                        this.prevSlide();
                    }
                }, 0);
            },
            multiplier: function (val) {
                console.log(val, 'multiplier');
            },
            'opt.maxPosition': function (val) {
                console.log(val, 'opt.maxPosition');
            }
        },
        data() {
            return {
                opt: {
                    position: 0,
                    maxPosition: 4
                },
                right: true,
                left: false,
                multiplier: 0
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
            prevSlide: function () {
                let sel = {
                    wrap: document.querySelector('.n-js-carousel__wrap'),
                    children: document.querySelector('.n-js-carousel__wrap').children,
                    prev: document.querySelector('.n-js-carousel__prev'),
                    next: document.querySelector('.n-js-carousel__next')
                };

                --this.opt.position;

                if (this.opt.position < this.opt.maxPosition)
                    sel.wrap.style['transform'] = `translateX(-${ this.opt.position * this.multiplier }%)`;

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
                sel.wrap.style['transform'] = `translateX(-${ this.opt.position * this.multiplier }%)`;

                (this.opt.position === this.opt.maxPosition) ? this.right = false : this.right = true;
            },
        },
        mounted() {
            let items = document.querySelector('.n-js-carousel__wrap').children;

            this.multiplier = parseFloat(getComputedStyle(document.querySelector('.b-carousel__item')).flexBasis);
            this.opt.maxPosition = items.length - Math.round(100 / parseFloat(getComputedStyle(document.querySelector('.b-carousel__item')).flexBasis));
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

    .b-carousel__prev
        @media (min-width 1250px) and (max-width 1350px)
            margin-left 25px

        @media (min-width 1150px) and (max-width 1250px)
            margin-left 20px

        @media (min-width 1024px) and (max-width 1150px)
            margin-left 15px

    .b-carousel__next
        @media (min-width 1250px) and (max-width 1350px)
            margin-right 25px

        @media (min-width 1150px) and (max-width 1250px)
            margin-right 20px

        @media (min-width 1024px) and (max-width 1150px)
            margin-right 15px

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

    .transparent
        opacity 0

    .flex-basis-20
        flex-basis 20% !important

    .flex-basis-25
        flex-basis 25% !important

    .flex-basis-33
        flex-basis 33.333333% !important

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