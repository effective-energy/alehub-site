<template>
    <div>
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
                         :key="i">

                        <img class="layer__bottom b-carousel__img"
                             :src="member.src"
                             :alt="member.name">
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
            settings: {
                type: Object,
                required: true
            },
            options: {
                type: Object,
                required: true
            }
        },
        computed: {},
        methods: {
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
        }
    }
</script>

<style lang="stylus" scoped>

</style>