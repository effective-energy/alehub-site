<template>
    <div class="roadmap">
        <div class="container">
            <div class="row row-flex">
                <div class="col-sm-3 roadmap-stage-marker-wrap">
                    <roadmap-stage-marker/>
                </div>
                <div class="col-sm-1 roadmap-stage-switcher-wrap">
                    <roadmap-stage-switcher/>
                </div>
                <div class="col-sm-8 roadmap-stage-panel-wrap">
                    <roadmap-stage-panel v-for="stage in stages"
                                         :stage="stage"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RoadmapStageMarker from './RoadmapStageMarker';
    import RoadmapStageSwitcher from './RoadmapStageSwitcher';
    import RoadmapStagePanel from './RoadmapStagePanel';

    export default {
        name: 'Roadmap',
        components: {
            RoadmapStageMarker,
            RoadmapStageSwitcher,
            RoadmapStagePanel
        },
        data() {
            return {
                stages: [
                    {
                        id: 1,
                        title: 'Conception',
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