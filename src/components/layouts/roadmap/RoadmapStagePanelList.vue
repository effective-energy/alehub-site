<template>
    <div class="roadmap-stage-panel-list">
        <roadmap-stage-panel v-for="(stage, i) in stages"
                             :key="i"
                             :state="states[i]"
                             :stage="stage"/>
    </div>
</template>

<script>
    import RoadmapStagePanel from './RoadmapStagePanel';

    export default {
        name: 'RoadmapStagePanelList',
        components: {
            RoadmapStagePanel
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
        data() {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>