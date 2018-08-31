<template>
    <div class="roadmap-stage-panel"
         :class="calcStagePanelClass">
        <h3>
            {{ stage.title }}
        </h3>
        <p>
            {{ stage.date }}
        </p>
        <button type="button"
                class="btn btn-yellow"
                v-if="haveStages"
                @click="showInnerStages">
            {{ 'Show details' }}
        </button>
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
                handler(val) {
                    console.log(val, val.id);
                },
                deep: true
            }
        },
        computed: {
            /**
             *
             *
             * @returns {string}
             */
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
            },
            haveStages: function () {
                if (this.stage.hasOwnProperty('stages')) {
                    if (this.stage.stages.length !== 0) {
                        return true;
                    }
                }
                return false;
            }
        },
        methods: {
            showInnerStages: function () {

            }
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
            transform translateY(400px) scale(.9)
            background-color transparent
            opacity .5

        &.active-top
            transform translateY(-50px) scale(.9)
            background-color transparent
            opacity .5

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