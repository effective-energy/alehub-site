<template>
    <div class="roadmap">
        <div class="container">
            <div class="row row-flex">
                <div class="col-sm-3 roadmap-stage-marker-wrap">
                    <roadmap-stage-marker-list :stages="stages"
                                               :states="states"/>
                </div>
                <div class="col-sm-1 roadmap-stage-switcher-wrap">
                    <roadmap-stage-switcher :stage-count="stages.length"/>
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
                                text: 'The Idea',
                                date: '01.01.2017'
                            },
                            {
                                id: 2,
                                text: 'Expertise from specialists in project management. Definition of requirements. ' +
                                '(Consultations with specialists in project management from the real sector of' +
                                ' the economy. Collection of requirements and defining problems)',
                                date: '01.02.2017 - 01.03.2017'
                            },
                            {
                                id: 3,
                                text: 'Mathematical modeling. (Consultations with financial experts. Mathematical' +
                                ' modeling in cooperation with the University of ITMO)',
                                date: '01.01.2017 - 01.05.2017'
                            },
                            {
                                id: 4,
                                text: 'Formation of the Terms of Reference. (Consultations with blockchain experts and ' +
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
                                text: 'Partnership with Serokell OU. The beginning of development.',
                                date: '01.08.2017'
                            },
                            {
                                id: 2,
                                text: 'Publishing MVP.',
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
                                text: 'PreSale (Raised more 1.2 mln $)',
                                date: '01.11.2017 - 01.12.2017'
                            },
                            {
                                id: 2,
                                text: 'PreICO',
                                date: '25.05.2018 - 25.06.2018'
                            },
                            {
                                id: 2,
                                text: 'ICO',
                                date: '25.07.2018 - 24.09.2018'
                            }
                        ]
                    }
                ]
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
        },
        mounted() {
            this.$on('decreaseStage', value => {
                let activeStateIndex = this.states.findIndex(state => state.active);

                if (activeStateIndex !== 0) {
                    this.states[activeStateIndex - 1].active = true;
                    this.states[activeStateIndex].active = false;
                }
            });

            this.$on('increaseStage', value => {
                let activeStateIndex = this.states.findIndex(state => state.active);

                if (activeStateIndex !== this.states.length - 1) {
                    this.states[activeStateIndex + 1].active = true;
                    this.states[activeStateIndex].active = false;
                }
            });
        }
    }
</script>

<style lang="stylus" scoped>
    .roadmap
        .row-flex
            display flex
            flex-direction row

            .roadmap-stage-panel-wrap
                display flex
                flex-direction column

</style>