<template>
    <div class="roadmap">
        <div class="container">
            <div class="row row-flex">
                <div class="col-sm-3 roadmap-stage-marker-wrap">
                    <roadmap-stage-marker-list :stages="stages"
                                               :states="states"/>
                </div>
                <div class="col-sm-1 roadmap-stage-switcher-wrap">
                    <roadmap-stage-switcher :stage-count="stages.length"
                                            :stage-index-active="stageIndexActive"/>
                </div>
                <div class="col-sm-8 roadmap-stage-panel-wrap">
                    <roadmap-stage-panel-list :stages="stages"
                                              :states="states"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RoadmapStageMarkerList from './RoadmapStageMarkerList';
    import RoadmapStagePanelList from './RoadmapStagePanelList';
    import RoadmapStageSwitcher from './RoadmapStageSwitcher';

    export default {
        name: 'Roadmap',
        components: {
            RoadmapStageMarkerList,
            RoadmapStagePanelList,
            RoadmapStageSwitcher
        },
        data() {
            return {
                states: [],
                stages: [
                    {
                        id: 1,
                        title: 'Conception',
                        date: '01.01.2017 - 01.07.2017',
                        stages: [
                            {
                                id: 1,
                                title: 'The Idea',
                                date: '01.01.2017'
                            },
                            {
                                id: 2,
                                title: 'Expertise from specialists in project management. Definition of requirements. ' +
                                '(Consultations with specialists in project management from the real sector of' +
                                ' the economy. Collection of requirements and defining problems)',
                                date: '01.02.2017 - 01.03.2017'
                            },
                            {
                                id: 3,
                                title: 'Mathematical modeling. (Consultations with financial experts. Mathematical' +
                                ' modeling in cooperation with the University of ITMO)',
                                date: '01.01.2017 - 01.05.2017'
                            },
                            {
                                id: 4,
                                title: 'Formation of the Terms of Reference. (Consultations with blockchain experts and ' +
                                'developers. Forming an image of a product and the terms of reference) ',
                                date: '01.06.2017 - 01.07.2017'
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'Development',
                        date: '01.08.2017 - 15.05.2018',
                        stages: [
                            {
                                id: 1,
                                title: 'Partnership with Serokell OU. The beginning of development.',
                                date: '01.08.2017'
                            },
                            {
                                id: 2,
                                title: 'Publishing MVP.',
                                date: '15.05.2018'
                            }
                        ]
                    },
                    {
                        id: 3,
                        title: 'Token Sale',
                        date: '01.11.2017 - 24.09.2018',
                        stages: [
                            {
                                id: 1,
                                title: 'PreSale (Raised more 1.2 mln $)',
                                date: '01.11.2017 - 01.12.2017'
                            },
                            {
                                id: 2,
                                title: 'PreICO',
                                date: '25.05.2018 - 25.06.2018'
                            },
                            {
                                id: 2,
                                title: 'ICO',
                                date: '25.07.2018 - 24.09.2018'
                            }
                        ]
                    },
                    {
                        id: 4,
                        title: 'Listing',
                        date: '25.09.2018 - 10.10.2018',
                        stages: [
                            {
                                id: 1,
                                title: 'Listing on first exchange',
                                date: '25.09.2018'
                            },
                            {
                                id: 2,
                                title: 'Listing on second exchange ',
                                date: '10.10.2018'
                            }
                        ]
                    },
                    {
                        id: 5,
                        title: 'Marketing',
                        date: '09.05.2018 - 25.09.2018',
                        stages: [
                            {
                                id: 1,
                                title: 'Bounty Campaign',
                                date: '09.05.2018 - 25.05.2018'
                            },
                            {
                                id: 2,
                                title: 'Listing Coinmarketcap.com',
                                date: '28.09.2018'
                            },
                            {
                                id: 3,
                                title: 'Road show',
                                date: '05.09.2018 - 28.09.2018'
                            },
                            {
                                id: 4,
                                title: 'Participation in conference',
                                date: '23.05.2018 - 25.09.2018',
                                stages: [
                                    {
                                        id: 1,
                                        title: 'Tokenomics',
                                        date: '23.05.2018 - 24.05.2018'
                                    },
                                    {
                                        id: 2,
                                        title: 'New York road show',
                                        date: '12.06.2018'
                                    },
                                    {
                                        id: 3,
                                        title: 'Singapore',
                                        date: ''
                                    },
                                    {
                                        id: 4,
                                        title: 'Korean blockchain summit',
                                        date: '05.09.2018 - 25.09.2018'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 6,
                        title: 'Legal',
                        date: '09.10.2019 - 25.09.2020',
                        stages: [
                            {
                                id: 1,
                                text: 'Opening representatives offices in Japan, Korea, China, USA, Cyprus, Germany, ' +
                                'Estonia, France, Switzerland, Vietnam, UAE',
                                date: '09.10.2019 - 25.09.2020'
                            },
                            {
                                id: 2,
                                text: 'Partnership agreement',
                                date: '09.10.2019 - 25.09.2020'
                            }
                        ]
                    },
                    // {
                    //     id: 7,
                    //     title: 'Technical Description',
                    //     date: '01.11.2017 - 24.09.2018',
                    //     stages: [
                    //         {
                    //             id: 1,
                    //             text: 'PreSale (Raised more 1.2 mln $)',
                    //             date: '01.11.2017 - 01.12.2017'
                    //         },
                    //         {
                    //             id: 2,
                    //             text: 'PreICO',
                    //             date: '25.05.2018 - 25.06.2018'
                    //         },
                    //         {
                    //             id: 2,
                    //             text: 'ICO',
                    //             date: '25.07.2018 - 24.09.2018'
                    //         }
                    //     ]
                    // }
                ]
            }
        },
        computed: {
            stageIndexActive: function () {
                return this.states.findIndex(state => state.active) + 1;
            }
        },
        created() {
            this.states = this.stages.map((stage, i) => {
                if (!i)
                    return {
                        id: stage.id,
                        active: true,
                        activeTop: false,
                        activeBottom: false,
                        inactiveTop: false,
                        inactiveBottom: false
                    };

                if (i === 1)
                    return {
                        id: stage.id,
                        active: false,
                        activeTop: false,
                        activeBottom: true,
                        inactiveTop: false,
                        inactiveBottom: false
                    };

                return {
                    id: stage.id,
                    active: false,
                    activeTop: false,
                    activeBottom: false,
                    inactiveTop: false,
                    inactiveBottom: true
                }
            });
        },
        mounted() {
            this.$on('decreaseStage', value => {
                let activeStateIndex = this.states.findIndex(state => state.active);

                if (activeStateIndex !== 0) {
                    this.states[activeStateIndex].active = false;
                    this.states[activeStateIndex].activeBottom = true;

                    this.states[activeStateIndex - 1].active = true;
                    this.states[activeStateIndex - 1].activeTop = false;

                    if (activeStateIndex !== this.states.length - 1) {
                        this.states[activeStateIndex + 1].activeBottom = false;
                        this.states[activeStateIndex + 1].inactiveBottom = true;
                    }

                    if (activeStateIndex !== 1) {
                        this.states[activeStateIndex - 2].activeTop = true;
                        this.states[activeStateIndex - 2].inactiveTop = false;
                    }
                }
            });

            this.$on('increaseStage', value => {
                let activeStateIndex = this.states.findIndex(state => state.active);

                if (activeStateIndex !== this.states.length - 1) {
                    this.states[activeStateIndex].active = false;
                    this.states[activeStateIndex].activeTop = true;

                    this.states[activeStateIndex + 1].active = true;
                    this.states[activeStateIndex + 1].activeBottom = false;

                    if (activeStateIndex !== 0) {
                        this.states[activeStateIndex - 1].activeTop = false;
                        this.states[activeStateIndex - 1].inactiveTop = true;
                    }

                    if (activeStateIndex !== this.states.length - 2) {
                        this.states[activeStateIndex + 2].activeBottom = true;
                        this.states[activeStateIndex + 2].inactiveBottom = false;
                    }
                }
            });
        }
    }
</script>

<style lang="stylus" scoped>
    .roadmap
        height 500px
        overflow hidden
        position relative

        .container
            height 100%

            .row-flex
                height 100%
                display flex
                flex-direction row

                .roadmap-stage-panel-wrap
                    height 100%

                    &:before
                        background rgba(52,58,73,1)
                        background -moz-linear-gradient(top, rgba(52, 58, 73, 1) 0%, rgba(52, 58, 73, .2) 100%)
                        background -webkit-gradient(left top, left bottom, color-stop(0%, rgba(52, 58, 73, 1)), color-stop(100%, rgba(52, 58, 73, .2)))
                        background -webkit-linear-gradient(top, rgba(52, 58, 73, 1) 0%, rgba(52, 58, 73, .2) 100%)
                        background -o-linear-gradient(top, rgba(52, 58, 73, 1) 0%, rgba(52, 58, 73, .2) 100%)
                        background -ms-linear-gradient(top, rgba(52, 58, 73, 1) 0%, rgba(52, 58, 73, .2) 100%)
                        background linear-gradient(to bottom, rgba(52, 58, 73, 1) 0%, rgba(52, 58, 73, .2) 100%)
                        top 0
                        content ''
                        display block
                        position absolute
                        left 0
                        width 100%
                        height 50px
                        z-index 2

                    &:after
                        background rgba(52, 58, 73, 1)
                        background -moz-linear-gradient(top, rgba(52, 58, 73, 1) 0%, rgba(52, 58, 73, 0) 100%)
                        background -webkit-gradient(left top, left bottom, color-stop(0%, rgba(52, 58, 73, 1)), color-stop(100%, rgba(52, 58, 73, 0)))
                        background -webkit-linear-gradient(top, rgba(52, 58, 73, 1) 0%, rgba(52, 58, 73, 0) 100%)
                        background -o-linear-gradient(top, rgba(52, 58, 73, 1) 0%, rgba(52, 58, 73, 0) 100%)
                        background -ms-linear-gradient(top, rgba(52, 58, 73, 1) 0%, rgba(52, 58,73, 0) 100%)
                        background linear-gradient(to bottom, rgba(52, 58, 73, 1) 0%, rgba(52, 58, 73, 0) 100%)
                        bottom 0
                        content ''
                        display block
                        position absolute
                        left 0
                        width 100%
                        height 50px
                        z-index 2

                .roadmap-stage-switcher-wrap
                    display flex
                    align-items center


</style>