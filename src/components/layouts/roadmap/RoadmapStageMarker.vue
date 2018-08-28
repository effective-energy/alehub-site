<template>
    <div class="roadmap-stage-marker"
         :class="{ 'active': state.active }">
        <h3>
            {{ stage.title }}
        </h3>
    </div>
</template>

<script>
    export default {
        name: 'RoadmapStageMarker',
        props: {
            stage: {
                type: Object,
                required: true
            },
            state: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .roadmap-stage-marker
        border-radius 50%
        height 150px
        width 150px
        background-color #3e4452
        display flex
        justify-content center
        align-items center

        &.active
            border 2px solid #ffd24f

        h3
            font-size 24px
            color #ffffff
</style>