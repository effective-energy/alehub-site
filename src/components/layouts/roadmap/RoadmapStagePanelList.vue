<template>
    <div class="roadmap-stage-panel-list">
        <roadmap-stage-panel v-for="(stage, i) in stages"
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
            }
        },
        data() {
            return {
                states: []
            }
        },
        created() {
            this.states = this.stages.map((stage, i) => {
                if (!i)
                    return {
                        id: stage.id,
                        active: true
                    };

                return {
                    id: stage.id,
                    active: false
                }
            });
        }
    }
</script>

<style lang="stylus" scoped>

</style>