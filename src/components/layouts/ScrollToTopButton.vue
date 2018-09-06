<template>
    <div>
        <div class="wrap__pointer"
             :class="{ 'wrap-pointer__rtl': rtl }"
             id="wrap-pointer"
             @click="changePosition">
            <img class="pointer-to-top"
                 :class="{ 'pointer-to-bottom': afterClickToTop }"
                 :src="(inDark) ? img.yellow : img.dark"
                 alt="to top">
        </div>

        <div class="scroll-to-top"
             :class="{ 'scroll-to-top__rtl': rtl }">
            <a @click="clickToTop"
               v-if="!afterClickToTop"></a>
            <a @click="returnPosition" v-else></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ScrollToTopButton',
        props: {
            inDark: {
                type: Boolean,
                required: true
            },
            rtl: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                afterClickToTop: false,
                position: 0,
                img: {
                    dark: '../../../static/images/arrow-top-34343e.svg',
                    yellow: '../../../static/images/arrow-top-yellow.svg'
                }
            }
        },
        methods: {
            changePosition: function () {
                (!this.afterClickToTop) ? this.clickToTop() : this.returnPosition();
            },
            clickToTop: function () {
                this.afterClickToTop = true;
                document.getElementById('screen1').scrollIntoView({block: 'start', behavior: 'smooth'});
                this.position = window.scrollY;
            },
            returnPosition: function () {
                this.afterClickToTop = false;
                window.scrollTo(
                    {
                        top: this.position,
                        behavior: 'smooth'
                    }
                );
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .wrap__pointer
        cursor pointer
        position fixed
        width 20px
        right 10px
        top 100px
        z-index 110

        @media (min-width 690px) and (max-width 1024px)
            right 7.5px
            width 15px

        @media (max-width 690px)
            display none

        @media (max-width 768px)
            top 150px

        .pointer-to-top
            width 100%
            -webkit-transition all .3s ease
            -o-transition all .3s ease
            transition all .3s ease

        .pointer-to-bottom
            transform rotateX(180deg)

        &.wrap-pointer__rtl
            left 10px
            right auto

            @media (min-width 690px) and (max-width 1024px)
                left 7.5px
                right auto
                width 15px

    .scroll-to-top
        z-index 100
        cursor pointer
        width 40px
        height 100%
        position fixed
        right 0
        display flex
        align-items center
        justify-content center

        @media (min-width 690px) and (max-width 1024px)
            width 30px

        @media (max-width 690px)
            display none

        a
            -webkit-transition all .3s ease
            -o-transition all .3s ease
            transition all .3s ease
            opacity 0
            background-color #e3e3e6
            height 100%
            width 40px

        &:hover
            a
                opacity .5

        &.scroll-to-top__rtl
            left 0
            right auto
</style>