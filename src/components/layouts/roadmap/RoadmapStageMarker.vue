<template>
    <div class="roadmap-stage-marker"
         :class="calcStagePanelClass">
        <h4>
            {{ stage.marker.title }}
        </h4>
        <h4>
            {{ stage.marker.date }}
        </h4>
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
        },
        computed: {
            calcStagePanelClass: function () {
                if (this.state.active)
                    return 'active';
                else if (this.state.activeTop)
                    return 'active-top';
                else if (this.state.activeBottom)
                    return 'active-bottom';
                else if (this.state.inactiveTop)
                    return 'inactive-top';
                else if (this.state.inactiveBottom)
                    return 'inactive-bottom';
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .roadmap-stage-marker
        z-index 2
        border-radius 50%
        height 120px
        width 120px
        background-color #3e4452
        display flex
        flex-direction column
        justify-content center
        align-items center
        transition all .4s ease-out
        position absolute
        border 2px solid #ffd24f
        color #ffffff

        &.active
            transform translateY(240px)
            -webkit-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            -moz-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)

        &.active-bottom
            transform translateY(400px) scale(.7)
            border 1px solid #9e8b4f
            background-color #393f4d
            color #aaaaaa

        &.active-top
            transform translateY(80px) scale(.7)
            border 1px solid #9e8b4f
            background-color #393f4d
            color #aaaaaa

        &.inactive-bottom
            transform translateY(600px) scale(.8)
            visibility hidden

        &.inactive-top
            transform translateY(-300px) scale(.8)
            visibility hidden

        h4
            font-weight 700
            margin 0

</style>