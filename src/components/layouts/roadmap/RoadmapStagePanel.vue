<template>
    <div class="roadmap-stage-panel">
        <h1>
            {{ stage.title }}
        </h1>
    </div>
</template>

<script>
    export default {
        name: 'RoadmapStagePanel',
        props: {
            stage: {
                type: Object,
                required: true
            }
        },
        created() {
            console.log(this.stage, 'stage');
        }
    }
</script>

<style lang="stylus" scoped>
    .roadmap-stage-panel
        background-color black
        padding 25px 40px

        h1
            color #ffffff

</style>