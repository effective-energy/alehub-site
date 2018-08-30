<template>
    <div class="roadmap-stage-marker-list">
        <div class="line"></div>
        <roadmap-stage-marker v-for="(stage, i) in stages"
                              :key="i"
                              :state="states[i]"
                              :stage="stage"/>
    </div>
</template>

<script>
    import RoadmapStageMarker from './RoadmapStageMarker';

    export default {
        name: 'RoadmapStageMarkerList',
        components: {
            RoadmapStageMarker
        },
        props: {
            stages: {
                type: Array,
                required: true
            },
            states: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .roadmap-stage-marker-list
        display flex
        flex-direction column
        align-items center

        .line
            z-index 1
            position absolute
            background-color #ffd24f
            width 2px
            height 100%

</style>