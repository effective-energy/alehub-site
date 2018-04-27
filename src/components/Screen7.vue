<template>
    <div class="section roadmap-section" id="roadmap">
        <div class="container">
            <h1 class="section-title is-center">
                Roadmap
            </h1>
        </div>

        <div class="roadmap-slides">
            <div class="topline"></div>
            <div class="slides-body">
                <div class="slide"
                     v-for="(slide, slideIndex) in slides"
                     :key="slideIndex">
                    <div class="line"></div>
                    <div class="slide-content"
                         :class="{ 'deployed': slide.state === 'Deployed' }">
                        <h1 class="slide-title">
                            {{ slide.title }}
                        </h1>
                        <span class="date">{{ slide.date }}</span>
                        <div class="responsible">
                            <div class="avatar" v-for="(item, index) in slide.members" :key="index">
                                <img :src="item" alt="">
                            </div>
                        </div>
                        <div class="slide-progress">
                            <div class="progress-line-outer">
                                <div class="progress-line" :style="{width: slide.progress+'%'}"></div>
                            </div>
                            <div class="state">
                                <p class="status">
                                    State:
                                    <span class="bold">{{ slide.state }}</span>
                                </p>
                                <p class="count">{{ slide.progress }}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="scroll-block">
            	<div class="arrow-prev"></div>
            	<div class="scroll-element" v-on:scroll="scrollForSlide" id="scroll-element">
            		<div class="scroll-content" :style="'width:'+slidesPanelWidth+'px'" id="scroll-content"></div>
            	</div>
            	<div class="arrow-next"></div>
            </div>

        </div>
    </div>
</template>

<script>
	import Dragscroll from 'dragscroll';

    export default {
        name: 'Roadmap',
        data() {
            return {
            	slidesWidth: 0,
                slides: [
                    {
                        title: 'Launch and publication MVP version of ALEHUB in centralised mode',
                        date: 'Sunday, April 15, 2018',
                        responsibles: [1, 2, 3],
                        members: [
                            '../../static/images/gromyko@3x.png',
                            '../../static/images/elena@3x.png',
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Deployed',
                        progress: 100
                    },
                    {
                        title: 'YellowPaper publication – description of  AleVirtualMachine running smart-contracts',
                        date: 'Wednesday, August 1, 2018',
                        responsibles: [1],
                        members: [
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Review',
                        progress: 72
                    },
                    {
                        title: 'YellowPaper publication – description of  AleVirtualMachine running smart-contracts',
                        date: 'Wednesday, August 1, 2018',
                        responsibles: [1],
                        members: [
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Review',
                        progress: 72
                    },
                    {
                        title: 'YellowPaper publication – description of  AleVirtualMachine running smart-contracts',
                        date: 'Wednesday, August 1, 2018',
                        responsibles: [1],
                        members: [
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Review',
                        progress: 72
                    },
                    {
                        title: 'YellowPaper publication – description of  AleVirtualMachine running smart-contracts',
                        date: 'Wednesday, August 1, 2018',
                        responsibles: [1],
                        members: [
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Review',
                        progress: 72
                    },
                    {
                        title: 'YellowPaper publication – description of  AleVirtualMachine running smart-contracts',
                        date: 'Wednesday, August 1, 2018',
                        responsibles: [1],
                        members: [
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Review',
                        progress: 72
                    },
                    {
                        title: 'YellowPaper publication – description of  AleVirtualMachine running smart-contracts',
                        date: 'Wednesday, August 1, 2018',
                        responsibles: [1],
                        members: [
                            '../../static/images/osipenko@3x.png'
                        ],
                        state: 'Review',
                        progress: 72
                    }
                ]
            }
        },
        methods: {
        	scrollForSlide () {
        		document.getElementsByClassName('slides-body')[0].scrollLeft = 891.5-document.getElementById('scroll-content').getBoundingClientRect().left;
        	}
        },
        computed: {
        	slidesPanelWidth () {
        		return this.slidesWidth
        	}
        },
        mounted () {
        	this.slidesWidth = 768+(document.querySelectorAll(".slide")[0].offsetWidth*document.querySelectorAll(".slide").length)-screen.width;
        }
    }
</script>

<style lang="stylus" scoped>

    .section
        padding 71px 0
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
        color #ffffff
        margin 24px 0

    .is-center
        text-align center

    .is-white
        color #ffffff

    .scroll-block
    	display flex
    	justify-content center
    	align-items center

    	.arrow-prev
    		width 8px
    		height 12px
    		background-image url('../../static/images/roadmap/arrow-left.svg')
    		background-size cover

    	.arrow-next
    		width 8px
    		height 12px
    		background-image url('../../static/images/roadmap/arrow-right.svg')
    		background-size cover

    	.scroll-element
    		max-width 768px
    		height 6px
    		overflow-x scroll
    		border-radius 2px
    		margin 0 12px

    		.scroll-content
    			height 1px

    .roadmap-slides
        margin-top 46px
        .topline
            width 100%
            height 2px
            background-color #ffbc00

        .slides-body
            height 400px
            display flex
            overflow-x scroll
            cursor -webkit-grab
            overflow hidden
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
                        color #ffffff

                    .date
                        font-family MuseoSansCyrl100
                        font-size 18px

            font-size 14px
            font-weight 300
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing normal
            text-align left
            color #ffffff

        .responsible
            width 100%;
            height 48px
            margin 16px 0 16px
            display flex

            .avatar
                width 48px
                height 48px
                overflow hidden
                border-radius 50%
                text-align center
                img
                    height 48px
                    width auto

            .avatar:not(:first-child)
                margin-left 12px

        .slide-progress
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

                .count
                    margin 0
</style>