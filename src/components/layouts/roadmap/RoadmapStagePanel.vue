<template>
    <div class="roadmap-stage-panel"
    :class="{ 'active': state.active }">
        <h3>
            {{ stage.title }}
        </h3>
        <p>
            {{ stage.date }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'RoadmapStagePanel',
        props: {
            stage: {
                type: Object,
                required: true
            },
            state: {
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
        background-color #3e4452
        padding 25px 40px
        margin-bottom 20px

        &.active
            -webkit-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            -moz-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            box-shadow 0 3px 25px 0 rgba(0, 0, 0 ,.36)


        h3
            font-size 24px
            color #ffffff

        p
            font-size 18px
            color #ffffff

</style>