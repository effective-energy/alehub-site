<template>
    <div class="slider-outer">

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

                    <div class="b-carousel__item"
                         @mouseover="stopAutoplay"
                         @mouseleave="startAutoplay"
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
                                        {{ member.position }}
                                    </h3>
                                    <div class="icons" v-if="member.social !== undefined && member.length !== 0">
                                        <a :href="social.link"
                                           v-for="social in member.social"
                                           target="_blank">
                                            <img class="in"
                                                 :src="social.src"
                                                 :alt="social.type"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="b-carousel__name">
                            {{ member.name }}
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
        name: 'SliderAdvisors',
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
            },
            isAutoplay: {
                type: Boolean,
                required: true
            }
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
            }
        },
        watch: {
            isAutoplay: function (val) {
                if (val && this.isMobile)
                    this.initAutoplay(3000);
                else
                    clearInterval(this.autoplay);
            }
        },
        computed: {
            isMobile: function () {
                return window.innerWidth <= 425;
            },
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
                clearInterval(this.autoplay);
                this.nextSlide();
                this.initAutoplay(3000);
            },
            clickPrev: function () {
                clearInterval(this.autoplay);
                this.prevSlide();
                this.initAutoplay(3000);
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
                let xMove = e.pageX;
                let yMove = e.pageY;
                let xDiff = this.xDrag - xMove;
                let yDiff = this.yDrag - yMove;
                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0 && Math.abs(xDiff) > 152) {
                        this.nextSlide();
                        this.xDrag = 0;
                        this.yDrag = 0;
                    }
                    if (xDiff < 0 && Math.abs(xDiff) > 152) {
                        this.prevSlide();
                        this.xDrag = 0;
                        this.yDrag = 0;
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
            initAutoplay: function (delay) {
                if (this.isAutoplay && this.isMobile)
                    this.autoplay = setInterval(() => {
                        this.nextSlide();
                    }, delay);
            },
            stopAutoplay: function () {
                clearInterval(this.autoplay);
            },
            startAutoplay: function () {
                if (this.isAutoplay && this.isMobile)
                    this.initAutoplay(3000);
            },
        },
        created() {
            //в инит функцию
            this.privates = this.privates1;
        },
        mounted() {

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

    .slider-outer
        width 100%
        display flex
        justify-content center

        @media (min-width 768px) and (max-width 1440px)
            width 90%

        @media (max-width 425px)
            width 70%

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
                        overflow hidden
                        display flex
                        flex-direction column
                        align-items center
                        justify-content space-around
                        cursor pointer
                        position relative
                        max-width 100%
                        height 400px
                        text-align center

                        @media (max-width 320px)
                            width 270px

                        @media (max-width 425px)
                            flex 0 0 100% !important

                        &:active
                            cursor -webkit-grab !important

                        .b-carousel__name
                            font-size 20px

                        .b-carousel__inner
                            position relative
                            margin 0 15px
                            padding 20px 20px 0 20px
                            width 304px
                            clip-path circle(50% at center)
                            -webkit-clip-path circle(50% at center)

                            .layer__top-visible
                                opacity 1 !important

                            @media (min-width 425px)
                                &:hover
                                    .layer__top
                                        opacity 1

                            img
                                max-width 100%
                                height 284px
                                width auto
                                margin auto

                                @media (min-width 768px) and (max-width 1024px)
                                    max-height 230px

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
                                display flex
                                flex-direction column
                                justify-content space-around
                                align-items center
                                position absolute
                                width 80%
                                height 25%
                                top 75%
                                left 50%
                                -moz-transform translate(-50%, -50%)
                                -webkit-transform translate(-50%, -50%)
                                -ms-transform translate(-50%, -50%)
                                transform translate(-50%, -50%)

                                h3
                                    text-transform capitalize
                                    font-weight 500
                                    font-size 28px

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

                            @media (max-width 490px)
                                position relative
                                margin 0 5px

                            @media (max-width 320px)
                                position relative
                                width 180px
                                height 180px
                                margin 0

                            @media (min-width 320px) and (max-width 360px)
                                position relative
                                width 200px
                                height 200px
                                margin 0

                            @media (min-width 360px) and (max-width 425px)
                                position relative
                                width 220px
                                height 220px
                                margin 0

                            @media (min-width 768px) and (max-width 1024px)
                                position relative
                                width 250px
                                height 250px
                                margin 0

                            &:active
                                cursor -webkit-grab !important

                            .b-carousel__img
                                display block

                                @media (max-width 425px)
                                    height 100%

                                &:active
                                    cursor -webkit-grab !important

        .b-carousel__prev
            margin-right 20px

            &:active
                transform translateX(-20px)

            @media (max-width 425px)
                margin-right 10px

                img
                    width 20px

                &:active
                    transform translateX(-10px)

        .b-carousel__next
            margin-left 20px

            &:active
                transform translateX(20px)

            @media (max-width 425px)
                margin-left 10px

                img
                    width 20px

                &:active
                    transform translateX(10px)

        .b-carousel__prev, .b-carousel__next
            background transparent
            border none
            cursor pointer
            transition transform 0.5s ease

            &:focus
                outline 0
</style>