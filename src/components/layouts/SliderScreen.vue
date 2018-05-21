<template>
    <div class="wrap"
         :class="{ 'direction-ltr': isRtl }"
         @mouseover="(options.autoplay) ? stopAutoplay : 'false'"
         @mouseout="(options.autoplay) ? startAutoplay : 'false'">

        <div class="b-carousel js-carousel"
             @mousedown="dragStart($event)"
             @mouseup="dragEnd()"
             @mousemove="(xDrag && yDrag) ? dragMove($event) : 'false'">

            <div class="b-carousel__wrap js-carousel__wrap">
                <div class="image b-carousel__item"
                     v-for="(member, i) in items"
                     :key="i">

                    <img class="layer__bottom b-carousel__img"
                         :src="member">
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
            },
            isRtl: {
                type: Boolean,
                required: true
            }
        },
        watch: {
            isRtl: function (val) {
                console.log(val, 'is rtl in slider screen');
            }
        },
        data() {
            return {
                autoplay: null,
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
        methods: {
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
                if (this.options.autoplay)
                    this.autoplay = setInterval(() => {
                        this.nextSlide();
                    }, delay);
            },
            stopAutoplay: function () {
                clearInterval(this.autoplay);
            },
            startAutoplay: function () {
                this.initAutoplay(5000);
            },
        },
        mounted() {
            document.querySelector('.js-carousel__wrap').appendChild(document.querySelector('.js-carousel__wrap').children[0].cloneNode(true));

            if (this.options.autoplay)
                this.initAutoplay(5000);
        }
    }
</script>

<style lang="stylus" scoped>

    .wrap
        width 100%
        display flex
        justify-content center
        user-select none

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
                    width 100%

                    img
                        width 100%


</style>