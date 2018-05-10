<template>
    <div style="width: 100%; display: flex; justify-content: center;">

        <!--v-if="isControlButton"-->
        <!--@click="clickPrev"-->

        <button class="b-carousel__prev n-js-carousel__prev">
            <img src="../../../static/images/arrow-left-dark.svg" alt="prev">
        </button>

        <div class="wrap" style="user-select: none;">

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
                         v-for="(item, i) in items"
                         :key="i"
                         :style="`flex: 0 0 20%`">

                        {{ item.name }}

                    </div>
                </div>
            </div>
        </div>

        <!--v-if="isControlButton"-->
        <!--@click="clickNext"-->

        <button class="b-carousel__next n-js-carousel__next">
            <img src="../../../static/images/arrow-right-dark.svg" alt="prev">
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
        computed: {

        },
        methods: {

        },
        mounted() {
            console.log(this.items, 'this.items');
            console.log(this.options, 'this.options');
        }
    }
</script>

<style lang="stylus" scoped>
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
                    /*flex 0 0 25%*/
                    overflow hidden
                    display flex
                    align-items center
                    justify-content center

                    @media (max-width 320px)
                        width 270px

</style>