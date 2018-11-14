<template>
    <div class="slider-outer">
        <v-layout row>
            <v-flex xs1
                    class="flex-prev">
                <button @click="clickPrev"
                        class="prev">
                    <img src="../../../../static/images/arrows/arrow-left-777777.svg"
                         alt="left">
                </button>
            </v-flex>
            <v-flex xs10>
                <div class="wrap">
                    <div class="b-carousel"
                         @mousedown="dragStart($event)"
                         @mouseup="dragEnd()"
                         @mousemove="(xDrag && yDrag) ? dragMove($event) : 'false'">

                        <div id="carousel__wrap"
                             class="b-carousel__wrap"
                             @touchstart="(touch) ? touchStart($event) : 'false'"
                             @touchmove="(touch) ? touchMove($event) : 'false'">

                            <div class="image b-carousel__item"
                                 @mouseover="stopAutoplay"
                                 @mouseleave="startAutoplay"
                                 v-for="(member, i) in membersMd"
                                 :key="member.name"
                                 :style="`flex: 0 0 ${ 100 / numImg }%`">

                                <div class="b-carousel__inner">
                                    <v-layout column>
                                        <v-flex hidden-md-and-up
                                                class="member-top">
                                            <div class="member member-mobile">

                                                <div class="layer__bottom b-carousel__img photo">
                                                </div>

                                                <div class="info">
                                                    <div class="name-wrapper">
                                                        <h3 class="name">
                                                            {{ member.name }}
                                                        </h3>
                                                        <a href="#">
                                                            <img class="linkedin"
                                                                 src="../../../../static/images/icons/social/linkedin-ic.svg"
                                                                 alt="linkedin">
                                                        </a>
                                                    </div>
                                                    <p class="position">
                                                        {{ member.position }}
                                                    </p>
                                                    <p class="team">
                                                        {{ member.team }}
                                                    </p>
                                                </div>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                </div>
                            </div>

                            <div class="image b-carousel__item"
                                 @mouseover="stopAutoplay"
                                 @mouseleave="startAutoplay"
                                 v-for="(member, i) in membersLg"
                                 :key="i"
                                 :style="`flex: 0 0 ${ 100 / numImg }%`">

                                <div class="b-carousel__inner">
                                    <v-layout column>
                                        <v-flex hidden-lg-and-down
                                                class="member-top">
                                            <div class="member">

                                                <div class="layer__bottom b-carousel__img photo">
                                                </div>

                                                <div class="info">
                                                    <div class="name-wrapper">
                                                        <h3 class="name">
                                                            {{ member[0].name }}
                                                        </h3>
                                                        <a href="#">
                                                            <img class="linkedin"
                                                                 src="../../../../static/images/icons/social/linkedin-ic.svg"
                                                                 alt="linkedin">
                                                        </a>
                                                    </div>
                                                    <p class="position">
                                                        {{ member[0].position }}
                                                    </p>
                                                    <p class="team">
                                                        {{ member[0].team }}
                                                    </p>
                                                </div>
                                            </div>
                                        </v-flex>
                                        <v-flex hidden-lg-and-down>
                                            <div class="member">
                                                <div class="layer__bottom b-carousel__img photo">
                                                </div>

                                                <div class="info">
                                                    <div class="name-wrapper">
                                                        <h3 class="name">
                                                            {{ member[1].name }}
                                                        </h3>
                                                        <a href="#">
                                                            <img class="linkedin"
                                                                 src="../../../../static/images/icons/social/linkedin-ic.svg"
                                                                 alt="linkedin">
                                                        </a>
                                                    </div>
                                                    <p class="position">
                                                        {{ member[1].position }}
                                                    </p>
                                                    <p class="team">
                                                        {{ member[1].team }}
                                                    </p>
                                                </div>
                                            </div>
                                        </v-flex>
                                    </v-layout>
                                    <!--<img class="layer__bottom b-carousel__img"-->
                                    <!--:src="member.src"-->
                                    <!--:alt="member.alt">-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-flex>
            <v-flex xs1
                    class="flex-next">
                <button @click="clickNext"
                        class="next">
                    <img src="../../../../static/images/arrows/arrow-right-777777.svg"
                         alt="right">
                </button>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'SliderTeam',
        props: {
            autoplay: {
                type: Boolean,
                default: false
            },
            autoplayDelay: {
                type: Number,
                default: 3000
            },
            touch: {
                type: Boolean,
                default: true
            },
            drag: {
                type: Boolean,
                default: true
            },
            numImgXs: {
                type: Number,
                default: 1
            },
            numImgMd: {
                type: Number,
                default: 2
            },
            numImgLg: {
                type: Number,
                default: 3
            },
            membersLg: {
                type: Array,
                required: true
            },
            membersMd: {
                type: Array,
                required: true
            }
        },
        data: () => ({
            autoplayInterval: null,

            position: 0,
            maxPosition: 0,

            xDown: 0,
            yDown: 0,
            xDrag: 0,
            yDrag: 0,

            numImg: null
        }),
        computed: {},
        methods: {
            /**
             * next slide switch function
             */
            clickNext() {
                this.stopAutoplay();
                this.nextSlide();
                this.startAutoplay();
            },
            /**
             * prev slide switch function
             */
            clickPrev() {
                this.stopAutoplay();
                this.prevSlide();
                this.startAutoplay();
            },
            /**
             * calculation of the coordinates at drag
             * @param e
             */
            dragStart(e) {
                this.xDrag = e.pageX;
                this.yDrag = e.pageY;
            },
            /**
             * zeroing coordinates at drag
             */
            dragEnd() {
                this.xDrag = 0;
                this.yDrag = 0;
            },
            /**
             * drag move function images
             * @param e
             */
            dragMove(e) {
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
            /**
             * calculation of the coordinates at touch
             * @param e event object
             */
            touchStart(e) {
                this.xDown = e.touches[0].clientX;
                this.yDown = e.touches[0].clientY;
            },
            /**
             * touch move function images
             * @param e event object
             */
            touchMove(e) {
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
            /**
             *
             */
            prevSlide() {
                let wrap = document.getElementById('carousel__wrap'),
                    multiplierPosition = 100 / this.numImg;

                --this.position;

                if (this.position < 0) {
                    wrap.style['transition'] = '0s';
                    wrap.style['transform'] = `translateX(-${this.maxPosition * multiplierPosition}%)`;
                    this.position = this.maxPosition - 1;
                }

                if (this.position === 0) {
                    wrap.style['transform'] = 'translateX(0)';
                    this.position = 0;
                }

                setTimeout(() => {
                    wrap.style['transition'] = '';
                    wrap.style['transform'] = `translateX(-${this.position * multiplierPosition}%)`;
                }, 40);
            },
            nextSlide() {
                let wrap = document.getElementById('carousel__wrap'),
                    multiplierPosition = 100 / this.numImg;

                if (this.position < this.maxPosition)
                    ++this.position;

                wrap.style['transition'] = '';
                wrap.style['transform'] = `translateX(-${this.position * multiplierPosition}%)`;
                wrap.addEventListener('transitionend', () => {
                    if (this.position >= this.maxPosition) {
                        wrap.style['transform'] = 'translateX(0)';
                        wrap.style['transition'] = '0s';
                        this.position = 0;
                    }
                });
            },
            startAutoplay() {
                if (this.autoplay)
                    this.autoplayInterval = setInterval(() => {
                        this.nextSlide();
                    }, this.autoplayDelay);
            },
            stopAutoplay() {
                clearInterval(this.autoplayInterval);
            },
            calcNumImg() {
                if (document.body.clientWidth < 767) {
                    this.numImg = this.numImgXs;
                } else if (document.body.clientWidth < 992) {
                    this.numImg = this.numImgMd;
                } else {
                    this.numImg = this.numImgLg;
                }
            },
            resize() {
                window.addEventListener('resize', () => {
                    this.calcNumImg();
                })
            }
        },
        created() {
            this.calcNumImg();
            this.resize();
        },
        mounted() {
            this.startAutoplay();

            let wrap = document.getElementById('carousel__wrap');
            this.maxPosition = wrap.children.length;

            wrap.style['transform'] = 'translateX(0)';

            for (let i = 0; i < this.numImg; i++)
                wrap.appendChild(wrap.children[i].cloneNode(true));
        }
    }
</script>

<style lang="stylus" scoped>
    .flex-prev
        padding-right 0 !important

        @media (min-width 0px)
            padding-top 70px !important

        @media (min-width 600px)
            padding-top 70px !important

        @media (min-width 960px)
            padding-top auto !important

        @media (min-width 1264px)
            padding-top auto !important

    .flex-next
        padding-left 0 !important

        @media (min-width 0px)
            padding-top 70px !important

        @media (min-width 600px)
            padding-top 70px !important

        @media (min-width 960px)
            padding-top auto !important

        @media (min-width 1264px)
            padding-top auto !important

    .info
        width 100%

    .name-wrapper
        display flex
        justify-content space-between
        align-items center

        .linkedin
            height 24px
            width 24px

    .member-top
        margin-bottom 80px

    .member
        display flex
        flex-direction row
        align-items center
        padding 0 30px

    .member-mobile
        display flex
        flex-direction column
        align-items center

        .info
            margin-top 40px

    .photo
        height 160px
        width 160px
        border-radius 50%
        background-color #79daff
        flex-shrink 0

        @media (min-width 0px)
            margin-right 0

        @media (min-width 600px)
            margin-right 0

        @media (min-width 960px)
            margin-right 32px

        @media (min-width 1264px)
            margin-right 32px

    .sections-team
        height 75vh

    .team
        opacity .72
        font-family MuseoSansCyrl300
        font-weight 300
        font-style normal
        font-stretch normal
        line-height 1.5
        letter-spacing normal
        text-align left
        color #ffffff
        margin-top 18px

    .position
        font-family MuseoSansCyrl300
        font-size 16px
        font-style normal
        font-stretch normal
        line-height 1.5
        letter-spacing normal
        text-align left
        color #ffffff
        margin-top 32px

    .name
        font-family MuseoSansCyrl500
        font-size 24px
        font-style normal
        font-stretch normal
        line-height 1.33
        letter-spacing normal
        text-align left
        color #ffffff

    .slider-outer
        color white
        width 100%
        display flex
        justify-content center

        /*@media (min-width 768px) and (max-width 1440px)*/
        /*width 90%*/

        /*@media (max-width 425px)*/
        /*width 70%*/

        .wrap
            user-select none
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
                        /*height 400px*/
                        text-align center

                        @media (max-width 320px)
                            width 270px

                        @media (max-width 425px)
                            height 530px
                            flex 0 0 100% !important

                        &:active
                            cursor -webkit-grab !important

                        .b-carousel__name
                            font-size 20px

                        .b-carousel__inner
                            width 100%
                            /*position relative*/
                            /*margin 0 15px*/
                            /*padding 20px 20px 0 20px*/

                            /*img*/
                            /*max-width 100%*/
                            /*height 90%*/
                            /*width auto*/
                            /*margin auto*/

                            /*@media (min-width 768px) and (max-width 1024px)*/
                            /*max-height 230px*/

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
                                justify-content flex-end
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
                                    font-size 24px

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
                                /*width 180px*/
                                height 180px
                                margin 0

                            @media (min-width 320px) and (max-width 360px)
                                position relative
                                /*width 200px*/
                                height 200px
                                margin 0

                            @media (min-width 360px) and (max-width 425px)
                                position relative
                                /*width 300px*/
                                height 4400px
                                margin 0

                            @media (min-width 768px) and (max-width 1024px)
                                position relative
                                /*width 250px*/
                                height 250px
                                margin 0

                            &:active
                                cursor -webkit-grab !important

                            .b-carousel__img
                                display block

                                &:active
                                    cursor -webkit-grab !important

        .prev, .next
            background transparent
            border none
            cursor pointer
            transition transform 0.5s ease

            img
                height 28px

            &:focus
                outline 0
</style>
