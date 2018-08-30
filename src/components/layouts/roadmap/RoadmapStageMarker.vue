<template>
    <div class="roadmap-stage-marker"
         :class="calcStagePanelClass">
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
        justify-content center
        align-items center
        transition all .4s ease-out
        position absolute
        border 2px solid #ffd24f
        color #ffffff

        &.active
            transform translateY(190px)
            -webkit-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            -moz-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)

        &.active-bottom
            transform translateY(350px) scale(.8)
            border 1px solid #9e8b4f
            background-color #393f4d
            color #aaaaaa

        &.active-top
            transform translateY(30px) scale(.8)
            border 1px solid #9e8b4f
            background-color #393f4d
            color #aaaaaa

        &.inactive-bottom
            transform translateY(550px) scale(.8)
            visibility hidden

        &.inactive-top
            transform translateY(-250px) scale(.8)
            visibility hidden

</style>