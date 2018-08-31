<template>
    <div class="section roadmap-section section__dark"
         id="roadmap">
        <div class="container">
            <h1 class="section-title is-center">
                {{ $t('roadmap.title') }}
            </h1>
        </div>

        <div class="roadmap-slides">
            <div class="topline"></div>

            <div class="scroll-block" style="margin-top: 0; position: absolute; top: -4px;">
                <div id="scroll-element"
                     class="scroll-element"
                     style="max-width: 100%; margin: 0;"
                     :style="{ 'width': scrollHorizontalWidth }"
                     v-on:scroll="scrollForSlide($event)">

                    <div id="scroll-content"
                         class="scroll-content"
                         :style="'width: ' + roadmapPanelWidth + 'px'">
                    </div>
                </div>
            </div>

            <div class="slide-to-left" v-if="isLeft">
                <button type="button" :disabled="disableControls" @click="prevSlide">
                    <img src="../../static/images/arrow-left-roadmap.svg" alt="slide-to-left">
                </button>
            </div>

            <div class="slide-to-right" v-if="isRight">
                <button type="button" :disabled="disableControls" @click="nextSlide">
                    <img src="../../static/images/arrow-right-roadmap.svg" alt="slide-to-right">
                </button>
            </div>

            <div class="slides-body"
                 @mousedown="dragStart($event)"
                 @mouseup="dragEnd()"
                 @mousemove="(xDrag && yDrag && !isDisableTouch) ? dragMove($event) : 'false'"
                 @touchstart="touchStart($event)"
                 @touchmove="touchMove($event)">

                <div class="slide"
                     v-for="(slide, slideIndex) in $t('roadmap.stages')"
                     :key="slideIndex">
                    <div class="line"></div>
                    <div class="slide-content"
                         :class="{ 'deployed': slide.progress === 100, 'text-align-right-rtl': isRtl }">
                        <h1 class="slide-title">
                            {{ slide.title }}
                        </h1>
                        <h6 class="top-line">
                            {{ slide.desk }}
                        </h6>
                        <h6>
                            {{ slide.result}}
                        </h6>
                        <span class="date">
                            {{ slide.date }}
                        </span>

                        <div class="slide-progress">
                            <div class="progress-line-outer">
                                <div class="progress-line"
                                     :style="{ width: slide.progress + '%' }">
                                </div>
                            </div>
                            <div class="state">
                                <p class="status">
                                    {{ $t('roadmap.stateLabel') }}:
                                    <span class="bold">
                                        {{ slide.state }}
                                    </span>
                                </p>
                                <p class="count">
                                    {{ slide.progress }}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <roadmap/>

        <!--<roadmap :stages="stages"-->
                 <!--:states="states"/>-->

    </div>
</template>

<script>
    import Roadmap from './layouts/roadmap/Roadmap';

    export default {
        name: 'RoadmapSection',
        components: {
            Roadmap
        },
        props: {
            isRtl: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                currStageIndex: 0,
                isRight: true,
                isLeft: false,
                xDrag: 0,
                yDrag: 0,
                xDown: 0,
                yDown: 0,
                scrollContentWidth: 0,
                slideWidth: 0,
                disableControls: false,
                disableTouch: false,

                // states: [],
                // stages: [
                //     {
                //         id: 1,
                //         title: 'Conception',
                //         date: '01.01.2017 - 01.07.2017',
                //         marker: {
                //             title: 'Q1',
                //             date: '2017'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 title: 'The Idea',
                //                 date: '01.01.2017',
                //                 marker: {
                //                     title: 'Q1',
                //                     date: '2017'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 title: 'Expertise from specialists in project management. Definition of requirements. ' +
                //                 '(Consultations with specialists in project management from the real sector of' +
                //                 ' the economy. Collection of requirements and defining problems)',
                //                 date: '01.02.2017 - 01.03.2017',
                //                 marker: {
                //                     title: 'Q1',
                //                     date: '2017'
                //                 }
                //             },
                //             {
                //                 id: 3,
                //                 title: 'Mathematical modeling. (Consultations with financial experts. Mathematical' +
                //                 ' modeling in cooperation with the University of ITMO)',
                //                 date: '01.01.2017 - 01.05.2017',
                //                 marker: {
                //                     title: 'Q2',
                //                     date: '2017'
                //                 }
                //             },
                //             {
                //                 id: 4,
                //                 title: 'Formation of the Terms of Reference. (Consultations with blockchain experts and ' +
                //                 'developers. Forming an image of a product and the terms of reference) ',
                //                 date: '01.06.2017 - 01.07.2017',
                //                 marker: {
                //                     title: 'Q3',
                //                     date: '2017'
                //                 }
                //             }
                //         ]
                //     },
                //     {
                //         id: 2,
                //         title: 'Development',
                //         date: '01.08.2017 - 15.05.2018',
                //         marker: {
                //             title: 'Q3',
                //             date: '2017'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 title: 'Partnership with Serokell OU. The beginning of development.',
                //                 date: '01.08.2017',
                //                 marker: {
                //                     title: 'Q3',
                //                     date: '2017'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 title: 'Publishing MVP.',
                //                 date: '15.05.2018',
                //                 marker: {
                //                     title: 'Q2',
                //                     date: '2018'
                //                 }
                //             }
                //         ]
                //     },
                //     {
                //         id: 3,
                //         title: 'Token Sale',
                //         date: '01.11.2017 - 24.09.2018',
                //         marker: {
                //             title: 'Q4',
                //             date: '2017'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 title: 'PreSale (Raised more 1.2 mln $)',
                //                 date: '01.11.2017 - 01.12.2017',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2017'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 title: 'PreICO',
                //                 date: '25.05.2018 - 25.06.2018',
                //                 marker: {
                //                     title: 'Q2',
                //                     date: '2018'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 title: 'ICO',
                //                 date: '25.07.2018 - 24.09.2018',
                //                 marker: {
                //                     title: 'Q3',
                //                     date: '2018'
                //                 }
                //             }
                //         ]
                //     },
                //     {
                //         id: 4,
                //         title: 'Listing',
                //         date: '25.09.2018 - 10.10.2018',
                //         marker: {
                //             title: 'Q4',
                //             date: '2018'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 title: 'Listing on first exchange',
                //                 date: '25.09.2018',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2018'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 title: 'Listing on second exchange ',
                //                 date: '10.10.2018',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2018'
                //                 }
                //             }
                //         ]
                //     },
                //     {
                //         id: 5,
                //         title: 'Marketing',
                //         date: '09.05.2018 - 25.09.2018',
                //         marker: {
                //             title: 'Q2',
                //             date: '2018'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 title: 'Bounty Campaign',
                //                 date: '09.05.2018 - 25.05.2018',
                //                 marker: {
                //                     title: 'Q2',
                //                     date: '2018'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 title: 'Listing Coinmarketcap.com',
                //                 date: '28.09.2018',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2018'
                //                 }
                //             },
                //             {
                //                 id: 3,
                //                 title: 'Road show',
                //                 date: '05.09.2018 - 28.09.2018',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2018'
                //                 }
                //             },
                //             {
                //                 id: 4,
                //                 title: 'Participation in conference',
                //                 date: '23.05.2018 - 25.09.2018',
                //                 marker: {
                //                     title: 'Q2',
                //                     date: '2018'
                //                 },
                //                 stages: [
                //                     {
                //                         id: 1,
                //                         title: 'Tokenomics',
                //                         date: '23.05.2018 - 24.05.2018',
                //                         marker: {
                //                             title: 'Q2',
                //                             date: '2018'
                //                         }
                //                     },
                //                     {
                //                         id: 2,
                //                         title: 'New York road show',
                //                         date: '12.06.2018',
                //                         marker: {
                //                             title: 'Q3',
                //                             date: '2018'
                //                         }
                //                     },
                //                     {
                //                         id: 3,
                //                         title: 'Singapore',
                //                         date: '',
                //                         marker: {
                //                             title: 'Q3',
                //                             date: '2018'
                //                         }
                //                     },
                //                     {
                //                         id: 4,
                //                         title: 'Korean blockchain summit',
                //                         date: '05.09.2018 - 25.09.2018',
                //                         marker: {
                //                             title: 'Q4',
                //                             date: '2018'
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         id: 6,
                //         title: 'Legal',
                //         date: '09.10.2019 - 25.09.2020',
                //         marker: {
                //             title: 'Q4',
                //             date: '2018'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 text: 'Opening representatives offices in Japan, Korea, China, USA, Cyprus, Germany, ' +
                //                 'Estonia, France, Switzerland, Vietnam, UAE',
                //                 date: '09.10.2019 - 25.09.2020',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2018'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 text: 'Partnership agreement',
                //                 date: '09.10.2019 - 25.09.2020',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2018'
                //                 }
                //             }
                //         ]
                //     },
                //     {
                //         id: 7,
                //         title: 'Technical Description',
                //         date: '01.11.2017 - 24.09.2018',
                //         marker: {
                //             title: 'Q4',
                //             date: '2018'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 text: 'Development of Yellow Paper',
                //                 date: '25.09.2018 - 26.03.2019',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2018'
                //                 },
                //                 stages: [
                //                     {
                //                         id: 1,
                //                         text: 'Formalization of the top level blockchain',
                //                         date: '25.09.2018 - 30.10.2018',
                //                         marker: {
                //                             title: 'Q4',
                //                             date: '2018'
                //                         }
                //                     },
                //                     {
                //                         id: 2,
                //                         text: 'Formalization of mining procedure',
                //                         date: '30.10.2018 - 19.11.2018',
                //                         marker: {
                //                             title: 'Q4',
                //                             date: '2018'
                //                         }
                //                     },
                //                     {
                //                         id: 3,
                //                         text: 'Formalization of embedded',
                //                         date: '19.11.2018 - 22.12.2018',
                //                         marker: {
                //                             title: 'Q4',
                //                             date: '2018'
                //                         }
                //                     },
                //                     {
                //                         id: 4,
                //                         text: 'Formalization of a dispute system',
                //                         date: '25.12.2018 - 22.01.2019',
                //                         marker: {
                //                             title: 'Q1',
                //                             date: '2019'
                //                         }
                //                     },
                //                     {
                //                         id: 5,
                //                         text: 'Development of a virtual machine',
                //                         date: '22.01.2019 - 26.02.2019',
                //                         marker: {
                //                             title: 'Q1',
                //                             date: '2019'
                //                         }
                //                     },
                //                     {
                //                         id: 6,
                //                         text: 'Formalization of changes procedure',
                //                         date: '26.02.2018 - 26.03.2019',
                //                         marker: {
                //                             title: 'Q1',
                //                             date: '2019'
                //                         }
                //                     }
                //                 ]
                //             },
                //             {
                //                 id: 2,
                //                 text: 'Development of Blue Paper',
                //                 date: '26.03.2019 - 02.07.2019',
                //                 marker: {
                //                     title: 'Q2',
                //                     date: '2019'
                //                 },
                //                 stages: [
                //                     {
                //                         id: 1,
                //                         text: 'Development of technical description of system modules',
                //                         date: '26.03.2019 - 09.04.2019',
                //                         marker: {
                //                             title: 'Q2',
                //                             date: '2019'
                //                         }
                //                     },
                //                     {
                //                         id: 2,
                //                         text: 'Development of requirements for frontend-module',
                //                         date: '09.04.2019 - 23.04.2019',
                //                         marker: {
                //                             title: 'Q2',
                //                             date: '2019'
                //                         }
                //                     },
                //                     {
                //                         id: 3,
                //                         text: 'Development of technical description of a top level blockchain',
                //                         date: '23.04.2019 - 28.05.2019',
                //                         marker: {
                //                             title: 'Q2',
                //                             date: '2019'
                //                         }
                //                     },
                //                     {
                //                         id: 4,
                //                         text: 'Development of technical description of an embedded blockchain',
                //                         date: '28.05.2019 - 02.07.2019',
                //                         marker: {
                //                             title: 'Q2',
                //                             date: '2019'
                //                         }
                //                     }
                //                 ]
                //             }
                //         ]
                //     },
                //     {
                //         id: 8,
                //         title: 'MVP',
                //         date: '02.07.2019 - 12.11.2019',
                //         marker: {
                //             title: 'Q3',
                //             date: '2019'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 text: 'Implementation of peer-to-peer network',
                //                 date: '03.09.2019 - 12.11.2019',
                //                 marker: {
                //                     title: 'Q3',
                //                     date: '2019'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 text: 'Implementation of basic blockchain and mining',
                //                 date: '06.08.2019 - 03.09.2019',
                //                 marker: {
                //                     title: 'Q3',
                //                     date: '2019'
                //                 }
                //             },
                //             {
                //                 id: 3,
                //                 text: 'Implementation of application logic',
                //                 date: '03.09.2019 - 12.11.2019',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2019'
                //                 }
                //             }
                //         ]
                //     },
                //     {
                //         id: 9,
                //         title: 'Implementation of private blockchains',
                //         date: '12.11.2019 - 11.02.2020',
                //         marker: {
                //             title: 'Q4',
                //             date: '2019'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 text: 'Implementation of template for building embedded blockchains',
                //                 date: '12.11.2019 - 17.12.2019',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2019'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 text: 'Implementation of embedded blockchains based on a template',
                //                 date: '17.12.2019 - 14.01.2020',
                //                 marker: {
                //                     title: 'Q1',
                //                     date: '2020'
                //                 }
                //             },
                //             {
                //                 id: 3,
                //                 text: 'Integration of embedded blockchains into the platform',
                //                 date: '14.01.2020 - 11.02.2020',
                //                 marker: {
                //                     title: 'Q1',
                //                     date: '2020'
                //                 }
                //             }
                //         ]
                //     },
                //     {
                //         id: 10,
                //         title: 'Implementation of a dispute system',
                //         date: '11.02.2020 - 12.05.2020',
                //         marker: {
                //             title: 'Q1',
                //             date: '2020'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 text: 'Implementation of verification agents logic',
                //                 date: '11.02.2020 - 10.03.2020',
                //                 marker: {
                //                     title: 'Q1',
                //                     date: '2020'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 text: 'Implementation of a first level dispute',
                //                 date: '10.03.2020 - 24.03.2020',
                //                 marker: {
                //                     title: 'Q2',
                //                     date: '2020'
                //                 }
                //             },
                //             {
                //                 id: 3,
                //                 text: 'Implementation of a third level dispute',
                //                 date: '14.04.2020 - 12.05.2020',
                //                 marker: {
                //                     title: 'Q2',
                //                     date: '2020'
                //                 }
                //             }
                //         ]
                //     },
                //     {
                //         id: 11,
                //         title: 'Implementation of a system for voting for changes',
                //         date: '12.05.2020 - 23.06.2020',
                //         marker: {
                //             title: 'Q2',
                //             date: '2020'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 text: 'Implementation of system of voting for monetary policy',
                //                 date: '12.05.2020 - 02.06.2020',
                //                 marker: {
                //                     title: 'Q2',
                //                     date: '2020'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 text: '11.2. Implementation of system of voting for technological upgrade',
                //                 date: '02.06.2020 - 23.06.2020',
                //                 marker: {
                //                     title: 'Q3',
                //                     date: '2020'
                //                 }
                //             }
                //         ]
                //     },
                //     {
                //         id: 12,
                //         title: 'Release of the system',
                //         date: '23.06.2020 - 23.12.2020',
                //         marker: {
                //             title: 'Q3',
                //             date: '2020'
                //         },
                //         stages: [
                //             {
                //                 id: 1,
                //                 text: 'Closed testing of the system',
                //                 date: '23.06.2020-25.08.2020',
                //                 marker: {
                //                     title: 'Q3',
                //                     date: '2020'
                //                 }
                //             },
                //             {
                //                 id: 2,
                //                 text: 'Publication of the system source code and documentation',
                //                 date: '04.08.2020-25.08.2020',
                //                 marker: {
                //                     title: 'Q3',
                //                     date: '2020'
                //                 }
                //             },
                //             {
                //                 id: 3,
                //                 text: 'Putting the system into operation',
                //                 date: '25.08.2020 - 23.12.2020',
                //                 marker: {
                //                     title: 'Q4',
                //                     date: '2020'
                //                 }
                //             }
                //         ]
                //     }
                // ]

            }
        },
        computed: {
            roadmapPanelWidth: function () {
                return this.scrollContentWidth;
            },
            isDisableTouch: function () {
                return this.disableTouch;
            },
            scrollHorizontalWidth: function () {
                //9 ширина скролла
                return window.innerWidth - 9 + 'px';
            }
        },
        methods: {
            dragStart: function (e) {
                this.xDrag = e.pageX;
                this.yDrag = e.pageY;
            },
            dragEnd: function () {
                this.xDrag = 0;
                this.yDrag = 0;
            },
            dragMove: function (e) {
                let xMove = e.pageX;
                let yMove = e.pageY;

                let xDiff = this.xDrag - xMove;
                let yDiff = this.yDrag - yMove;

                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    if (xDiff > 0) {
                        if (Math.abs(xDiff) > this.slideWidth / 3) {
                            this.nextSlide();
                            this.xDrag = 0;
                            this.yDrag = 0;
                        }
                    } else if (xDiff < 0) {
                        if (Math.abs(xDiff) > this.slideWidth / 3) {
                            this.prevSlide();
                            this.xDrag = 0;
                            this.yDrag = 0;
                        }
                    }
                }

            },
            touchStart: function (e) {
                this.xDown = e.touches[0].clientX;
                this.yDown = e.touches[0].clientY;
            },
            touchMove: function (e) {
                if (!this.xDown || !this.yDown)
                    return;

                let xUp = e.touches[0].clientX;
                let yUp = e.touches[0].clientY;

                let xDiff = this.xDown - xUp;
                let yDiff = this.yDown - yUp;

                if (Math.abs(xDiff) > Math.abs(yDiff) && !this.isDisableTouch) {
                    console.log('trigger move slide');
                    (xDiff > 0) ? this.nextSlide() : this.prevSlide();
                }

                this.xDown = 0;
                this.yDown = 0;
            },
            nextSlide: function () {
                this.disableControls = true;
                this.disableTouch = true;

                let start = document.getElementById('scroll-element').scrollLeft,
                    gap = start % this.slideWidth,
                    to = start + this.slideWidth - gap,
                    change = to - start,
                    duration = 500,
                    currentTime = 0,
                    increment = 20;

                let animateScroll = () => {
                    currentTime += increment;
                    let val = Math.easeInOutQuad(currentTime, start, change, duration);
                    document.querySelector('.slides-body').scrollLeft = val;
                    document.getElementById('scroll-element').scrollLeft = val;
                    if (currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    } else {
                        this.disableControls = false;
                        this.disableTouch = false;
                    }
                };

                animateScroll();
            },
            prevSlide: function () {
                this.disableControls = true;
                this.disableTouch = true;

                let start = document.getElementById('scroll-element').scrollLeft,
                    gap = (start % this.slideWidth) ? start % this.slideWidth : this.slideWidth,
                    to = start - gap,
                    change = to - start,
                    duration = 500,
                    currentTime = 0,
                    increment = 20;

                let animateScroll = () => {
                    currentTime += increment;
                    let val = Math.easeInOutQuad(currentTime, start, change, duration);
                    document.querySelector('.slides-body').scrollLeft = val;
                    document.getElementById('scroll-element').scrollLeft = val;
                    if (currentTime < duration) {
                        setTimeout(animateScroll, increment);
                    } else {
                        this.disableControls = false;
                        this.disableTouch = false;
                    }
                };

                animateScroll();
            },
            scrollForSlide: function (e) {
                document.querySelector('.slides-body').scrollLeft = e.target.scrollLeft;
            },
            getCoords: function (elem) {
                if (!elem)
                    return false;
                let box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            },
        },
        created() {
            Math.easeInOutQuad = function (t, b, c, d) {
                t /= d / 2;
                if (t < 1)
                    return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };
        },
        mounted() {
            this.scrollContentWidth = document.querySelector('.slide').offsetWidth * document.getElementsByClassName('slide').length -
                this.getCoords(document.getElementById('scroll-element')).left * 2;

            this.slideWidth = document.querySelector('.slide').offsetWidth;

            document.getElementById('scroll-element').addEventListener('scroll', () => {
                if (document.getElementById('scroll-content').getBoundingClientRect().right === document.getElementById('scroll-content').offsetWidth)
                    this.isLeft = false;
                else if (document.getElementById('scroll-content').getBoundingClientRect().right <= window.innerWidth - 9)
                    this.isRight = false;
                else {
                    this.isLeft = true;
                    this.isRight = true;
                }
            });

            this.currStageIndex = this.$t('roadmap.stages').findIndex((item) => {
                return item.status;
            });

            setTimeout(() => {
                document.getElementById('scroll-element').scrollLeft = this.slideWidth * this.currStageIndex;
            }, 0);
        }
    }
</script>

<style lang="stylus" scoped>
    h6.top-line
        border-top #343a49 1px solid
        margin-bottom 12px
        padding-top 12px

    .section
        padding 74px 0
        padding-bottom 130px

    .roadmap-section
        background-color #343a49

    .section-title
        font-family MuseoSansCyrl300
        font-size 3em
        font-weight 300
        font-style normal
        font-stretch normal
        line-height normal
        letter-spacing normal
        text-align center
        color #f7f7f7
        margin 24px 0

    .is-center
        text-align center

    .is-white
        color #f7f7f7

    .scroll-block
        display flex
        justify-content center
        align-items center
        margin-top 50px

        .arrow-prev, .arrow-next
            cursor pointer
            background-color transparent
            border none
            width 15px
            height 20px
            padding 0

            &:focus
                outline none

        .arrow-prev
            background-image url('../../static/images/roadmap/arrow-left.svg')
            background-size cover

        .arrow-next
            background-image url('../../static/images/roadmap/arrow-right.svg')
            background-size cover

        .arrow-prev__rtl
            background-image url('../../static/images/roadmap/arrow-right.svg')

        .arrow-next__rtl
            background-image url('../../static/images/roadmap/arrow-left.svg')

        .scroll-element
            cursor pointer
            max-width 768px
            width 768px
            overflow-x scroll
            margin 0 12px

            .scroll-content
                height 1px

            @media (max-width 420px)
                width 75%

    .roadmap-slides
        position relative
        user-select none
        margin-top 46px

        &:hover
            .slide-to-left, .slide-to-right
                opacity .3

        .topline
            width 100%
            height 2px
            background-color #ffbc00

        .slide-to-left
            position absolute
            left 0
            padding-left 36px
            top 25%
            height 50%
            display flex
            justify-content center
            align-items center

            &:active
                padding-left 18px

        .slide-to-right
            position absolute
            right 0
            padding-right 36px
            top 25%
            height 50%
            display flex
            justify-content center
            align-items center

            &:active
                padding-right 18px

        .slide-to-left, .slide-to-right
            cursor pointer
            -webkit-transition all .3s ease-in-out
            -o-transition all .3s ease-in-out
            transition all .3s ease-in-out
            opacity 0

            &:hover
                opacity 1

            @media (max-width 768px)
                display none

            button
                cursor pointer
                padding 0
                height 100%
                background-color transparent
                border none
                &:focus
                    outline none

                img
                    height 100%

        .slides-body
            max-height 600px
            padding-bottom 5px
            display flex
            overflow-y hidden
            overflow-x hidden
            cursor -webkit-grab
            -webkit-overflow-scrolling touch
            font-size 14px
            font-weight 300
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing normal
            text-align left
            color #f7f7f7

            &:active
                cursor -webkit-grabbing

            .slide
                min-width 512px
                max-width 512px
                padding 0 18px

                .slide-content
                    background-color rgba(255, 255, 255, 0.05)
                    min-height 273px

                .line
                    width 2px
                    height 36px
                    background #ffbc00
                    display flex
                    margin 0 auto

                .slide-content
                    padding 32px 24px
                    -webkit-transition all .3s ease-in-out
                    -o-transition all .3s ease-in-out
                    transition all .3s ease-in-out

                    h6
                        margin-bottom 18px

                    &:hover
                        /*background-color #31394f*/
                        -webkit-box-shadow 0 0 1px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                        -moz-box-shadow 0 0 1px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                        box-shadow 0 0 1px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)

                        .slide-title
                            color #ffbc00

                    &.deployed
                        background-color rgba(255, 188, 0, 0.05)

                        .slide-title
                            color #ffbc00

                    .slide-title
                        font-family MuseoSansCyrl300
                        font-size 24px
                        font-weight 300
                        font-style normal
                        font-stretch normal
                        line-height 1.5
                        letter-spacing normal
                        color #f7f7f7
                        -webkit-transition color .3s ease-in-out
                        -o-transition color .3s ease-in-out
                        transition color .3s ease-in-out

                    .date
                        font-family MuseoSansCyrl100
                        font-size 18px

        .responsible
            width 100%
            max-height 216px
            margin 16px 0 0 0
            display flex
            flex-wrap wrap
            justify-content flex-start

            .avatar
                width 48px
                height 48px
                margin 6px 12px 6px 0
                overflow hidden
                text-align center
                background-color #6f757f
                -webkit-clip-path circle(50% at center)
                clip-path circle(50% at center)

                @media (max-width: 320px)
                    width 45px
                    height 45px

                img
                    height 48px
                    width auto

        .slide-progress
            margin-top 18px

            .progress-line-outer
                background-color rgba(226, 232, 232, .3)

            .progress-line
                margin 10px 0
                height 4px
                background-color #ffbc00
                -webkit-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                -moz-box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)
                box-shadow 0 0 2px 0 rgba(255, 188, 0, 0.7), 0 0 8px 0 rgba(255, 188, 0, 0.3)

            .state
                display flex
                justify-content space-between
                align-items center

                .status
                    margin 0
                    text-transform uppercase

                    .bold
                        font-family MuseoSansCyrl500
                        font-weight 900
                        letter-spacing 0.2px

                .count
                    margin 0

    @media (max-width: 800px)
        .slide
            min-width 100% !important
            max-width 100% !important
</style>