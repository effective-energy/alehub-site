<template>
    <div class="roadmap"
         ref="roadmap">
        <v-layout row>
            <v-flex xs1
                    d-flex
                    align-center
                    fill-height>
                <div class="control-buttons">
                    <button type="button"
                            @click="decreaseStep()"
                            class="control-button">
                        <img src="../../../../static/images/arrows/arrow-top-777777.svg" alt="arrow up">
                    </button>
                    <button type="button"
                            @click="increaseStep(items.length, itemsInLine)"
                            class="control-button">
                        <img src="../../../../static/images/arrows/arrow-bottom-777777.svg" alt="arrow down">
                    </button>
                </div>
            </v-flex>
            <v-flex xs4 offset-xs1>
                <div class="left"
                     id="left">
                    <div class="step"
                         v-for="(item, i) in items"
                         :key="i">
                        <h5 class="left-step-title">
                            {{ item.left.title }}
                        </h5>
                        <p class="left-step-date">
                            {{ item.left.date }}
                        </p>
                    </div>
                </div>
            </v-flex>
            <v-flex d-flex
                    justify-center
                    xs1>
                <div id="control-line"
                     class="control-line"
                     ref="controlLine">
                    <div id="line"
                         class="line">
                    </div>
                    <div class="dot"
                         v-for="(item, i) in items"
                         :class="{'active': item.active}"
                         @click="setActiveStep(item, i, items)"
                         :key="i">
                        {{ item.id }}
                    </div>
                </div>
            </v-flex>
            <v-flex d-flex
                    justify-start
                    xs5>
                <div class="right"
                     id="right">
                    <div class="step"
                         v-for="(item, i) in items"
                         v-if="item.active">
                        <h5 class="right-step-date">
                            {{ item.right.date }}
                        </h5>
                        <h4 class="right-step-title">
                            {{ item.right.title }}
                        </h4>
                        <p class="right-step-text"
                           v-for="string in item.right.text">
                            {{ string }}
                        </p>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: 'Roadmap',
        data: () => ({
            current_position: 0,
            itemsInLine: 7,
            pixelsForItem: null,
            items: [
                {
                    id: 1,
                    active: false,
                    left: {
                        title: 'The Idea',
                        date: 'Q1 2017'
                    },
                    right: {
                        date: 'January 2018',
                        title: 'Partnership with ITMO University',
                        text: [
                            'MVP blockchain published (GitHub)',
                            'Demo platform published (http://demo.alehub.io)'
                        ]
                    }
                },
                {
                    id: 2,
                    active: false,
                    left: {
                        title: 'Mathematical modeling in cooperation with the University of ITMO',
                        date: 'Q2 2017'
                    },
                    right: {
                        date: 'January 2018',
                        title: 'Partnership with ITMO University',
                        text: [
                            'MVP blockchain published (GitHub)',
                            'Demo platform published (http://demo.alehub.io)'
                        ]
                    }
                },
                {
                    id: 3,
                    active: false,
                    left: {
                        title: 'Partnership with Serokell OU',
                        date: 'Q3 2017'
                    },
                    right: {
                        date: 'January 2018',
                        title: 'Partnership with ITMO University',
                        text: [
                            'MVP blockchain published (GitHub)',
                            'Demo platform published (http://demo.alehub.io)'
                        ]
                    }
                },
                {
                    id: 4,
                    active: false,
                    left: {
                        title: 'Private presale',
                        date: 'Q4 2017'
                    },
                    right: {
                        date: 'January 2018',
                        title: 'Partnership with ITMO University',
                        text: [
                            'MVP blockchain published (GitHub)',
                            'Demo platform published (http://demo.alehub.io)'
                        ]
                    }
                },
                {
                    id: 5,
                    active: true,
                    left: {
                        title: 'Partnership with ITMO University',
                        date: 'Q1 2018'
                    },
                    right: {
                        date: 'January 2018',
                        title: 'Partnership with ITMO University',
                        text: [
                            'MVP blockchain published (GitHub)',
                            'Demo platform published (http://demo.alehub.io)'
                        ]
                    }
                },
                {
                    id: 6,
                    active: false,
                    left: {
                        title: 'MVP applications published',
                        date: 'Q2 2018'
                    },
                    right: {
                        date: 'January 2018',
                        title: 'Partnership with ITMO University',
                        text: [
                            'MVP blockchain published (GitHub)',
                            'Demo platform published (http://demo.alehub.io)'
                        ]
                    }
                },
                {
                    id: 7,
                    active: false,
                    left: {
                        title: 'STO completed',
                        date: 'Q3 2018'
                    },
                    right: {
                        date: 'January 2018',
                        title: 'Partnership with ITMO University',
                        text: [
                            'MVP blockchain published (GitHub)',
                            'Demo platform published (http://demo.alehub.io)'
                        ]
                    }
                },
                {
                    id: 8,
                    active: false,
                    left: {
                        title: 'Continue blockhain app development',
                        date: 'Q4 2018'
                    },
                    right: {
                        date: 'December 2018',
                        title: 'Blockhain app development',
                        text: [
                            'Lorem ipsum 1',
                            'Lorem ipsum 2'
                        ]
                    }
                },
                {
                    id: 9,
                    active: false,
                    left: {
                        title: 'New step',
                        date: 'Q1 2019'
                    },
                    right: {
                        date: 'January 2019',
                        title: 'Title lorem ipsum',
                        text: [
                            'Lorem ipsum 3',
                            'Lorem ipsum 4'
                        ]
                    }
                },
            ]
        }),
        methods: {
            setActiveStep(item, i, items) {
                let active_step = items.find(it => it.active);
            },
            decreaseStep() {
                if (this.current_position > 0) {
                    --this.current_position;
                    document.getElementById('control-line').style['transform'] = `translateY(-${this.pixelsForItem * this.current_position}px)`;
                    document.getElementById('left').style['transform'] = `translateY(-${this.pixelsForItem * this.current_position}px)`;
                }
            },
            increaseStep(items_length, items_in_line) {
                if (this.current_position < items_length - items_in_line) {
                    ++this.current_position;
                    document.getElementById('control-line').style['transform'] = `translateY(-${this.pixelsForItem * this.current_position}px)`;
                    document.getElementById('left').style['transform'] = `translateY(-${this.pixelsForItem * this.current_position}px)`;
                }
            },
            calcControlLineHeight(items) {
                let roadmapHight = this.$refs.roadmap.clientHeight;
                let pixelsForItem = Math.ceil(roadmapHight / this.itemsInLine);

                this.pixelsForItem = pixelsForItem;

                let diff = items.length - this.itemsInLine;


                document.getElementById('control-line').style.height = Number(roadmapHight + diff * pixelsForItem) + 'px';
                document.getElementById('left').style.height = Number(roadmapHight + diff * pixelsForItem) + 'px';
            },
        },
        mounted() {
            this.calcControlLineHeight(this.items);
        }
    }
</script>

<style lang="stylus" scoped>
    .control-buttons
        display flex
        flex-direction column
        justify-content space-between
        height 100px

        .control-button
            &:focus
                outline none

            img
                height 22px

    .roadmap
        overflow hidden
        margin-top 150px
        position relative
        height 920px
        color white
        display flex

        .right
            height 100%

            .step
                .right-step-date
                    opacity .72
                    font-family MuseoSansCyrl300
                    font-size 18px
                    line-height 1.33
                    text-align left
                    color #ffffff

                .right-step-title
                    margin-top 32px
                    font-family MuseoSansCyrl500
                    font-size 24px
                    line-height 1.33
                    text-align left
                    color #ffffff

                .right-step-text
                    margin-top 32px
                    font-family MuseoSansCyrl300
                    font-size 18px
                    line-height 1.33
                    text-align left
                    color #ffffff

                    &:last-child
                        margin-top 16px

        .left
            height 100%
            display flex
            flex-direction column
            justify-content space-around
            transition transform 400ms ease

            .left-step-title
                text-align right
                font-family MuseoSansCyrl300
                font-size 16px
                line-height 1.5
                color #ffffff

            .left-step-date
                text-align right
                opacity .72
                font-family MuseoSansCyrl300
                font-size 16px
                font-weight 300
                line-height 1.5
                color #ffffff
                margin-bottom 0

        .control-line
            position relative
            width 24px
            display flex
            flex-direction column
            justify-content space-around
            align-items center
            transition transform 400ms ease

            .dot
                z-index 2
                width 24px
                height 24px
                border-radius 50%
                background-color rgba(255, 255, 255, .16)
                display flex
                justify-content center
                align-items center

                &.active
                    -webkit-box-shadow inset 0 0 300px 78px rgba(252, 132, 53, .8)
                    -moz-box-shadow inset 0 0 300px 78px rgba(252, 132, 53, .8)
                    box-shadow inset 0 0 300px 78px rgba(252, 132, 53, .8)
                    background-color #ffffff
                    color #ffffff

            .line
                z-index 1
                position absolute
                width 1px
                height 100%
                background-color rgba(255, 255, 255, .16)


</style>