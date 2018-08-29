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
                else if (this.state.inactiveTop)
                    return 'inactive-top';
                else if (this.state.inactiveBottom)
                    return 'inactive-bottom';
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
        width calc(100% - 2 * 15px)
        padding 25px 40px
        transition all .4s ease-out
        position absolute
        height 150px

        &.active
            transform translateY(175px)
            -webkit-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            -moz-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)

        &.active-bottom
            transform translateY(400px) scale(0.9)
            background-color transparent
            opacity .5
            /*background-color #cccccc*/

        &.active-top
            transform translateY(-50px) scale(0.9)
            background-color transparent
            opacity .5
            /*background-color #cccccc*/

        &.inactive-bottom
            transform translateY(550px)
            visibility hidden

        &.inactive-top
            transform translateY(-250px)
            visibility hidden

        h3
            font-size 24px
            color #ffffff

        p
            font-size 18px
            color #ffffff

</style>