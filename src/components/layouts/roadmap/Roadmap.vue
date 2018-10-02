<template>
    <div class="roadmap">
        <div class="container container-fluid-sm">
            <div class="row row-flex">
                <div class="col-md-2 hidden-sm roadmap-stage-marker-wrap">
                    <roadmap-stage-marker-list :stages="stages"
                                               :states="states"/>
                </div>
                <div class="col-md-2 col-sm-2 hidden-xs roadmap-stage-switcher-wrap">
                    <roadmap-stage-switcher :stage-count="stages.length"
                                            :stage-index-active="stageIndexActive"/>
                </div>
                <div class="col-md-8 col-sm-10 col-xs-12 roadmap-stage-panel-wrap">
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
                        date: 'Q1 2017',
                        title: 'The Idea',
                        text: [
                            'Expertise from specialists in project management',
                            'Definition of requirements'
                        ],
                        marker: {
                            title: 'Q1',
                            date: '2017'
                        }
                    },
                    {
                        id: 2,
                        date: 'Q2 2017',
                        title: 'Mathematical modeling in cooperation with the University of ITMO',
                        text: [
                            'Consultations with blockchain experts and developer',
                            'Formation of the Terms of Reference'
                        ],
                        marker: {
                            title: 'Q2',
                            date: '2017'
                        }
                    },
                    {
                        id: 3,
                        date: 'Q3 2017',
                        title: 'Partnership with Serokell OU',
                        text: [
                            'The beginning of development'
                        ],
                        marker: {
                            title: 'Q3',
                            date: '2017'
                        }
                    },
                    {
                        id: 4,
                        date: 'Q4 2017',
                        title: 'Private presale',
                        text: [
                            '1.2 mln $ raised'
                        ],
                        marker: {
                            title: 'Q4',
                            date: '2017'
                        }
                    },
                    {
                        id: 5,
                        date: 'Q1 2018',
                        title: 'Partnership with ITMO University',
                        text: [
                            'MVP blockchain published (GitHub)',
                            'Demo platform published (http://demo.alehub.io)'
                        ],
                        marker: {
                            title: 'Q1',
                            date: '2018'
                        }
                    },
                    {
                        id: 6,
                        date: 'Q2 2018',
                        title: 'MVP applications published',
                        text: [
                            'Bounty campaign',
                            'PreICO completed'
                        ],
                        marker: {
                            title: 'Q2',
                            date: '2018'
                        }
                    },
                    {
                        id: 7,
                        date: 'Q3 2018',
                        title: 'STO completed',
                        text: [
                            'Exchanges listing'
                        ],
                        marker: {
                            title: 'Q3',
                            date: '2018'
                        }
                    },
                    {
                        id: 8,
                        date: 'Q4 2018',
                        tabs: [
                            {
                                id: 1,
                                title: 'Development',
                                text: [
                                    'Formalization of the top level blockchain',
                                    'Formalization of mining procedure',
                                    'Formalization of embedded blockchain'
                                ]
                            },
                            {
                                id: 2,
                                title: 'Testing',
                                text: [
                                    'Partnership with 3 major universities for testing purposes',
                                    'Preparations for pilot projects on with Bayer AG management'
                                ]
                            }
                        ],
                        marker: {
                            title: 'Q4',
                            date: '2018'
                        }
                    },
                    {
                        id: 9,
                        date: 'Q1 2019',
                        tabs: [
                            {
                                id: 1,
                                title: 'Development',
                                text: [
                                    'Formalization of a dispute system',
                                    'Development of a virtual machine',
                                    'Formalization of changes procedure',
                                    'Technical description of system modules'
                                ]
                            },
                            {
                                id: 2,
                                title: 'Testing',
                                text: [
                                    'Start of first projects in cooperation with partner Universities',
                                    'Pilot project with Bayer AG management',
                                    'Preparations for pilot projects with Siemens AG management'
                                ]
                            }
                        ],
                        marker: {
                            title: 'Q1',
                            date: '2019'
                        }
                    },
                    {
                        id: 10,
                        date: 'Q2 2019',
                        tabs: [
                            {
                                id: 1,
                                title: 'Development',
                                text: [
                                    'Development of technical description of system modules',
                                    'Development of technical description of a top level blockchain',
                                    'Technical description of an embedded blockchain'
                                ]
                            },
                            {
                                id: 2,
                                title: 'Testing',
                                text: [
                                    'Pilot projects with universities',
                                    'Multiple pilot projects with Bayer AG management',
                                    'First pilot project with Siemens AG management'
                                ]
                            },
                            {
                                id: 3,
                                title: 'Sales & Marketing',
                                text: [
                                    'First conference in Switzerland, presenting results of pilot projects with universities & companies',
                                    'Panel sessions with business representatives'
                                ]
                            }
                        ],
                        marker: {
                            title: 'Q2',
                            date: '2019'
                        }
                    },
                    {
                        id: 11,
                        date: 'Q3 2019',
                        tabs: [
                            {
                                id: 1,
                                title: 'Development',
                                text: [
                                    'MVP solution Decentralizing',
                                    'Implementation of peer-to-peer network',
                                    'Implementation of basic blockchain and mining',
                                    'Implementation of application logic'
                                ]
                            },
                            {
                                id: 2,
                                title: 'Testing',
                                text: [
                                    'Projects with Bayer AG & Siemens AG management on a constant basis'
                                ]
                            },
                            {
                                id: 3,
                                title: 'Sales & Marketing',
                                text: [
                                    'Foundation of sales network & first representative offices',
                                    'Panel sessions with legal advisors in USA, EU, China, Japan & Sinagapore',
                                    'Multiple partnership agreements with business entities'
                                ]
                            }
                        ],
                        marker: {
                            title: 'Q3',
                            date: '2019'
                        }
                    },
                    {
                        id: 12,
                        date: 'Q4 2019',
                        tabs: [
                            {
                                id: 1,
                                title: 'Development',
                                text: [
                                    'Implementation of template for building embedded blockchains'
                                ]
                            },
                            {
                                id: 2,
                                title: 'Testing',
                                text: [
                                    'Testnet start',
                                    'More than 15 Universities all around the world are connected to the testnet applications for testing purposes'
                                ]
                            },
                            {
                                id: 3,
                                title: 'Sales & Marketing',
                                text: [
                                    'Foundation of sales offices in USA, Germany, Japan & Singapore'
                                ]
                            }
                        ],
                        marker: {
                            title: 'Q4',
                            date: '2019'
                        }
                    },
                    {
                        id: 13,
                        date: 'Q1 2020',
                        tabs: [
                            {
                                id: 1,
                                title: 'Development',
                                text: [
                                    'Implementation of verification agents logic',
                                    'Implementation of a dispute system'
                                ]
                            },
                            {
                                id: 2,
                                title: 'Testing',
                                text: [
                                    'Testnet is supported by more than 5,000 nodes',
                                    'Pilot projects are implemented in to corporate structure'
                                ]
                            },
                            {
                                id: 3,
                                title: 'Sales & Marketing',
                                text: [
                                    'More than 1,000 advance contracts',
                                    'First clients are being connected to testnet'
                                ]
                            }
                        ],
                        marker: {
                            title: 'Q1',
                            date: '2020'
                        }
                    },
                    {
                        id: 14,
                        date: 'Q2 2020',
                        tabs: [
                            {
                                id: 1,
                                title: 'Development',
                                text: [
                                    'Implementation of system of voting for monetary policy',
                                    'Implementation of system of voting for technological upgrade'
                                ]
                            },
                            {
                                id: 2,
                                title: 'General',
                                text: [
                                    'Putting the system into operation',
                                    'First dividends being distributed among ALE token holders'
                                ]
                            }
                        ],
                        marker: {
                            title: 'Q2',
                            date: '2020'
                        }
                    }
                ]
            }
        },
        computed: {
            /**
             * calculating stage active index
             *
             * @returns {number}
             */
            stageIndexActive: function () {
                return this.states.findIndex(state => state.active) + 1;
            }
        },
        methods: {
            /**
             * switch next active panel
             */
            nextPanel: function () {
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
            },
            /**
             * switch prev active panel
             */
            prevPanel: function () {
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
            },
            /**
             * handler for click event listener for roadmap stage panel
             */
            handlerSwitchPanel: function (panel) {
                return () => {
                    if (panel.classList.contains('active-bottom'))
                        this.nextPanel();
                    else if (panel.classList.contains('active-top'))
                        this.prevPanel();
                }
            },
            /**
             * add click event listener to roadmap stage panel
             */
            addListenterToPanel: function () {
                let panels = document.getElementsByClassName('roadmap-stage-panel');
                for (let i = 0; i < panels.length; i++)
                    panels[i].addEventListener('click', this.handlerSwitchPanel(panels[i]), false);
            },
            /**
             * remove click event listener from roadmap stage panel
             */
            removeListenerFromPanel: function () {
                let panels = document.getElementsByClassName('roadmap-stage-panel');
                for (let i = 0; i < panels.length; i++)
                    panels[i].removeEventListener('click', this.handlerSwitchPanel(panels[i]), false);
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
            if (document.body.clientWidth < 576)
                this.addListenterToPanel();

            window.addEventListener('resize', () => {
                if (document.body.clientWidth < 576)
                    this.addListenterToPanel();
                else
                    this.removeListenerFromPanel();
            });

            this.$on('increaseStage', value => {
                this.nextPanel();
            });

            this.$on('decreaseStage', value => {
                this.prevPanel();
            });
        }
    }
</script>

<style lang="stylus" scoped>
    .hidden-sm
        @media (max-width 768px)
            display none

    .hidden-xs
        @media (max-width 576px)
            display none !important

    .container-fluid-sm
        @media (max-width 768px)
            max-width unset

    .col-xs-12
        @media (max-width 576px)
            flex 0 0 100%
            max-width 100%

    .roadmap
        height 600px
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

                .roadmap-stage-switcher-wrap
                    display flex
                    align-items center
                    justify-content center
</style>