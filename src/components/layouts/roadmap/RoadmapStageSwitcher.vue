<template>
    <div class="roadmap-stage-switcher">
        <div class="arrow-top-wrap">
            <button type="button"
                    class="button-arrow"
                    @click="decreaseStage">
                <img src="../../../../static/images/arrows/arrow-top-ffffff.svg"
                     alt="arrow top">
            </button>
        </div>
        <div class="marker-counter">
            <span>
                {{ stageIndexActive }} / {{ stageCount }}
            </span>
        </div>
        <div class="arrow-bottom-wrap">
            <button type="button"
                    class="button-arrow"
                    @click="increaseStage">
                <img src="../../../../static/images/arrows/arrow-bottom-ffffff.svg"
                     alt="arrow bottom">
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RoadmapStageSwitcher',
        props: {
            stageCount: {
                type: Number,
                required: true
            },
            stageIndexActive: {
                type: Number,
                required: true
            }
        },
        methods: {
            decreaseStage: function () {
                this.$parent.$emit('decreaseStage', true);
            },
            increaseStage: function () {
                this.$parent.$emit('increaseStage', true);
            },
        },
    }
</script>

<style lang="stylus" scoped>
    .roadmap-stage-switcher
        .arrow-top-wrap,
        .arrow-bottom-wrap
            display flex
            justify-content center
            align-items center

            .button-arrow
                cursor pointer
                border none
                background-color transparent

                &:focus
                    outline none

        .marker-counter
            display flex
            justify-content center
            align-items center

            span
                font-size 18px
                color #ffffff
</style>