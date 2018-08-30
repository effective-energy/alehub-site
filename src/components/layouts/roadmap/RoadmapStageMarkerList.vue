<template>
    <div class="roadmap-stage-marker-list">
        <div class="line-wrap"
             :class="calcLineWrapClass">
            <div class="line"
                 :class="calcLineClass">
            </div>
        </div>
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
        },
        computed: {
            calcLineClass: function () {
                if (this.states.findIndex(state => state.active) === 0) {
                    return 'line-first';
                } else if (this.states.findIndex(state => state.active) === this.states.length - 1) {
                    return 'line-last';
                }
                return '';
            },
            calcLineWrapClass: function () {
                if (this.states.findIndex(state => state.active) === 0) {
                    return 'line-wrap-first';
                } else if (this.states.findIndex(state => state.active) === this.states.length - 1) {
                    return 'line-wrap-last';
                }
                return '';
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .roadmap-stage-marker-list
        position relative
        display flex
        flex-direction column
        align-items center
        height 100%


        .line-wrap
            height 100%
            display flex
            align-items center
            position absolute

            &.line-wrap-first
                align-items flex-end

            &.line-wrap-last
                align-items flex-start

            .line
                height 100%
                z-index 1
                background-color #ffd24f
                width 2px

                &.line-first
                    height 60%

                &.line-last
                    height 60%
</style>