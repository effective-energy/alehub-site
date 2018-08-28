<template>
    <div class="roadmap-stage-panel"
         :class="calcStagePanelClass">
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
        watch: {
            state: {
                handler (val) {
                    console.log(val, val.id);
                },
                deep: true
            }
        },
        computed: {
            calcStagePanelClass: function () {
                if (this.state.active)
                    return 'active';
                else if (this.state.activeTop)
                    return 'active-top';
                else if (this.state.activeBottom)
                    return 'active-bottom';
                return 'inactive';
            }
        },
        created() {
            console.log(this.state, this.state.id);
        }
    }
</script>

<style lang="stylus" scoped>
    .roadmap-stage-panel
        background-color #3e4452
        padding 25px 40px
        margin-bottom 20px
        transition all .3s linear

        &.active
            transform translateY(0)
            -webkit-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            -moz-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)

        &.active-bottom
            background-color #535a6d
            transform translateY(100px)

        &.active-top
            background-color #535a6d
            transform translateY(-100px)

        &.inactive
            display none

        h3
            font-size 24px
            color #ffffff

        p
            font-size 18px
            color #ffffff

</style>