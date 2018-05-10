<template>
    <div>


        <button type="button" id="prev"
                @click="prevSlide">
            prev
        </button>


        <button type="button" id="next"
                @click="nextSlide">
            next
        </button>


        <div class="wrap" style="user-select: none;"
            @mouseover="stopAutoplay"
             @mouseout="startAutoplay">

            <!--@mousedown="dragStart($event)"-->
            <!--@mouseup="dragEnd()"-->
            <!--@mousemove="(xDrag && yDrag) ? dragMove($event) : 'false'"-->

            <div class="b-carousel js-carousel">

                <!--@touchstart="(options.touch) ? touchStart($event) : 'false'"-->
                <!--@touchmove="(options.touch) ? touchMove($event) : 'false'"-->

                <div class="b-carousel__wrap js-carousel__wrap">

                    <!--@mouseover="stopAutoplay"-->
                    <!--@mouseleave="startAutoplay('true')"-->

                    <div class="image b-carousel__item"
                         v-for="(member, i) in items"
                         :key="i">

                        <img class="layer__bottom b-carousel__img"
                             :src="member">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SliderScreen',
        props: {
            items: {
                type: Array,
                required: true
            },
            options: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                autoplayAccess: false,
                opt: {
                    position: 0,
                    maxPosition: 3
                },
                xDown: 0,
                yDown: 0,
                xDrag: 0,
                yDrag: 0,
            }
        },
        computed: {
            isAutoplayAccess: function () {
                return this.autoplayAccess;
            }
        },
        methods: {
            dragStart: function (e) {
                // this.xDrag = e.pageX;
                // this.yDrag = e.pageY;
            },
            dragEnd: function (e) {
                // this.xDrag = 0;
                // this.yDrag = 0;
            },
            dragMove: function (e) {
                // console.log(e.pageX, 'mouse move X');

                // let xMove = e.pageX;
                // let yMove = e.pageY;
                //
                // let xDiff = this.xDrag - xMove;
                // let yDiff = this.yDrag - yMove;
                //
                // // console.log(xDiff, 'xDiff');
                // // console.log(yDiff, 'yDiff');
                //
                // if (Math.abs(xDiff) > Math.abs(yDiff)) {
                //     //ширина фотки получать из DOM
                //
                //     if (xDiff > 0) {
                //
                //         if (Math.abs(xDiff) > 152) {
                //             this.nextSlide();
                //             this.xDrag = 0;
                //             this.yDrag = 0;
                //         }
                //
                //     }
                //
                //     if (xDiff < 0) {
                //
                //         if (Math.abs(xDiff) > 152) {
                //             this.prevSlide();
                //             this.xDrag = 0;
                //             this.yDrag = 0;
                //         }
                //
                //     }
                // }

            },
            touchStart: function (e) {
                // console.log(e, 'event touch start');
                // console.log('touchStart');
                // this.xDown = e.touches[0].clientX;
                // this.yDown = e.touches[0].clientY;
            },
            touchMove: function (e) {
                // console.log(e, 'event touch move');
                // if (!this.xDown || !this.yDown)
                //     return;
                //
                // let xUp = e.touches[0].clientX;
                // let yUp = e.touches[0].clientY;
                //
                // let xDiff = this.xDown - xUp;
                // let yDiff = this.yDown - yUp;
                //
                // if (Math.abs(xDiff) > Math.abs(yDiff))
                //     (xDiff > 0) ? this.nextSlide() : this.prevSlide();
                //
                // this.xDown = 0;
                // this.yDown = 0;
            },
            prevSlide: function () {
                let sel = {
                    wrap: document.querySelector('.js-carousel__wrap'),
                    children: document.querySelector('.js-carousel__wrap').children,
                    prev: document.getElementById('prev'),
                    next: document.getElementById('next')
                };

                --this.opt.position;

                if (this.opt.position < 0) {
                    sel.wrap.style['transition'] = '0s';
                    sel.wrap.style['transform'] = `translateX(-${ this.opt.maxPosition * 100 }%)`;
                    this.opt.position = this.opt.maxPosition - 1;
                }

                if (this.opt.position === 0) {
                    sel.wrap.style['transform'] = 'translateX(0)';
                    this.opt.position = 0;
                }

                setTimeout(() => {
                    sel.wrap.style['transition'] = '';
                    sel.wrap.style['transform'] = `translateX(-${ this.opt.position * 100 }%)`;
                }, 40);
            },
            nextSlide: function () {
                let sel = {
                    wrap: document.querySelector('.js-carousel__wrap'),
                    children: document.querySelector('.js-carousel__wrap').children,
                    prev: document.getElementById('prev'),
                    next: document.getElementById('next')
                };

                if (this.opt.position < this.opt.maxPosition) {
                    ++this.opt.position;
                }

                sel.wrap.style['transition'] = '';
                sel.wrap.style['transform'] = `translateX(-${ this.opt.position * 100 }%)`;

                sel.wrap.addEventListener('transitionend', () => {
                    if (this.opt.position >= this.opt.maxPosition) {
                        sel.wrap.style['transform'] = 'translateX(0)';
                        sel.wrap.style['transition'] = '0s';
                        this.opt.position = 0;
                    }
                });
            },
            initAutoplay: function (delay) {
                clearInterval(this.autoplay);
                if (this.isAutoplayAccess)
                    this.autoplay = setInterval(() => {
                        this.nextSlide();
                    }, delay);
            },
            stopAutoplay: function () {
                if (this.autoplayAccess)
                    this.autoplayAccess = false;
            },
            startAutoplay: function () {
                if (!this.autoplayAccess)
                    this.autoplayAccess = true;
            },
        },
        mounted() {
            document.querySelector('.js-carousel__wrap').appendChild(document.querySelector('.js-carousel__wrap').children[0].cloneNode(true));

            if (this.options.autoplay) {
                this.autoplayAccess = this.options.autoplay;
                this.initAutoplay(3000);
            }

            console.log(this.options, 'this.options');

            console.log(this.items, 'this.items');
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
                    flex 0 0 100%
                    overflow hidden
                    display flex
                    align-items center
                    justify-content center
                    width 304px


</style>