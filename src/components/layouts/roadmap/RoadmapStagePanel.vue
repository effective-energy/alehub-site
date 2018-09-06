<template>
    <div class="roadmap-stage-panel"
         :id="'roadmap-stage-panel-' + stage.id"
         :class="calcStagePanelClass">
        <div class="content-wrap"
             :class="{ 'content-wrap-tabs': isStageTabs }">
            <h3>
                {{ stage.date }}
            </h3>
            <div class="content"
                 v-if="stage.hasOwnProperty('title') || stage.hasOwnProperty('text')">
                <h4 v-if="stage.hasOwnProperty('title')">
                    {{ stage.title }}
                </h4>
                <p v-if="stage.hasOwnProperty('text')"
                   v-for="text in stage.text">
                    {{ text }}
                </p>
            </div>
            <div class="tab-content"
                 v-if="isStageTabs">
                <h4>
                    {{ activeTab.title }}
                </h4>
                <p v-for="text in activeTab.text">
                    {{ text }}
                </p>
            </div>
        </div>
        <div class="tabs"
             v-if="isStageTabs">
            <button type="button"
                    class="tab"
                    v-for="tab in stage.tabs"
                    :class="{ 'tab-active': tab.id === activeTab.id }"
                    :disabled="tab.id === activeTab.id"
                    :style="calcTabHeight(stage.tabs)"
                    @click="changeActiveTab(tab)">
                {{ tab.title }}
            </button>
        </div>
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
        data() {
            return {
                activeTab: {}
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
            /**
             * checking property 'tabs' belonging to a object item stage and checking stage length
             *
             * @returns {boolean}
             */
            isStageTabs: function () {
                return this.stage.hasOwnProperty('tabs') && this.stage.tabs.length !== 0;
            }
        },
        methods: {
            /**
             * change active tab
             *
             * @param tab
             */
            changeActiveTab: function (tab) {
                if (document.getElementById('roadmap-stage-panel-' + this.stage.id).classList.contains('active'))
                    this.activeTab = tab;
            },
            /**
             *
             *
             * @param tabs
             * @returns {string}
             */
            calcTabHeight: function (tabs) {
                return 'height: ' + 100 / tabs.length + '%';
            }
        },
        created() {
            if (this.isStageTabs) {
                this.activeTab = this.stage.tabs[0];
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .roadmap-stage-panel
        background-color #3e4452
        width calc(100% - 2 * 15px)
        transition all .4s ease-out
        position absolute
        height 250px
        display flex
        justify-content space-between

        &.active
            transform translateY(175px)
            -webkit-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            -moz-box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)
            box-shadow 0 3px 25px 0 rgba(0, 0, 0, .36)

            .tabs
                .tab
                    &:first-child.tab-active
                        cursor default
                        border-bottom 1px solid #ffd24f
                        border-left 1px solid #ffd24f
                        //-webkit-box-shadow inset 0 0 5px 0 rgba(0, 0, 0, .7);
                        //-moz-box-shadow inset 0 0 5px 0 rgba(0, 0, 0, .7);
                        //box-shadow inset 2px -2px 4px 0px rgba(0, 0, 0, .7);
                        background-color transparent
                        color #ffffff

                    &:nth-child(2n):not(:last-child).tab-active
                        cursor default
                        border-top 1px solid #ffd24f
                        border-bottom 1px solid #ffd24f
                        border-left 1px solid #ffd24f
                        //-webkit-box-shadow inset 0 0 5px 0 rgba(0, 0, 0, 1);
                        //-moz-box-shadow inset 0 0 5px 0 rgba(0, 0, 0, 1);
                        //box-shadow inset 1px 0 7px 0 rgba(0, 0, 0, 1);
                        background-color transparent

                    &:last-child.tab-active
                        cursor default
                        border-left 1px solid #ffd24f
                        border-top 1px solid #ffd24f
                        //-webkit-box-shadow inset 0 0 5px 0 rgba(0, 0, 0, .7);
                        //-moz-box-shadow inset 0 0 5px 0 rgba(0, 0, 0, .7);
                        //box-shadow inset 2px 2px 4px 0px rgba(0, 0, 0, .7);
                        background-color transparent
                        color #ffffff


        &.active-bottom
            transform translateY(450px) scale(.9)
            background-color transparent
            opacity .5

        &.active-top
            transform translateY(-100px) scale(.9)
            background-color transparent
            opacity .5

        &.inactive-bottom
            transform translateY(725px)
            visibility hidden

        &.inactive-top
            transform translateY(-325px)
            visibility hidden

        h3
            font-size 24px
            color #ffffff
            font-weight 700

        h4
            font-size 20px
            color #ffffff
            font-weight 700
            margin-bottom .75rem

        p
            font-size 1em
            color #ffffff
            margin-bottom .5rem

        .content-wrap
            padding 25px 0 25px 40px

        .content-wrap
            display flex
            flex-direction column
            position relative
            height 100%
            overflow auto

            &.content-wrap-tabs
                flex-basis 75%

            .content
                padding 15px 0 0 0
                height 100%
                display flex
                flex-direction column
                justify-content flex-start

        .tabs
            display flex
            flex-direction column
            height 100%

            .tab
                cursor pointer
                border none
                text-align left
                padding-left 20px
                padding-right 20px
                transition all .3s ease

                &:focus
                    outline none

                &:nth-child(1),
                &:nth-child(2),
                &:nth-child(3)
                    background-color transparent
                    color #ffffff
</style>