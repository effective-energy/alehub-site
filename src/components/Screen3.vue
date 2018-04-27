<template>
    <div class="advantages" id="advantages">
        <h3 class="advantages-title">
            ALE advantages
        </h3>
        <div class="separator"></div>
        <div class="advantages-body">
            <div class="select-point">
                <div class="point" :class="{
                    'point-left-active' : selectedType === 0,
                    'point-left-inactive' : selectedType === 1
                }" @click="selectedType = 0">
                    <div class="point__inner">
                        ALE vs Project Management Systems
                    </div>
                </div>
                <div class="point" :class="{
                    'point-right-active' : selectedType === 1,
                    'point-right-inactive' : selectedType === 0
                }" @click="selectedType = 1">
                    <div class="point__inner">
                        ALE vs Other Blockchain Platforms
                    </div>
                </div>
            </div>

            <!-- <div class="block-advantages"
                 :class="{'block-advantages__active': advantagesFlag === 'first', 'block-advantages__right': advantagesFlag === 'second'}">
                <div class="advantage">
                    <div class="item item-title left left-title">
                        <p>
                            ALE
                        </p>
                    </div>
                    <div class="item item-title right right-title">
                        <p>
                            Other Blockchain Platforms
                        </p>
                    </div>
                </div>
                <div class="advantage" v-for="(advantage, index) in advantages.first" :key="index">
                    <div class="item left">
                        <p>
                            {{ advantage.first }}
                        </p>
                    </div>
                    <div class="item right">
                        <p>
                            {{ advantage.second }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="block-advantages"
                 :class="{'block-advantages__active': advantagesFlag === 'second', 'block-advantages__left': advantagesFlag === 'first'}">
                <div class="advantage">
                    <div class="item item-title">
                        <p>
                            ALE
                        </p>
                    </div>
                    <div class="item item-title">
                        <p>
                            Other Blockchain Platforms
                        </p>
                    </div>
                </div>
                <div class="advantage" v-for="(advantage, index) in advantages.second" :key="index">
                    <div class="item">
                        <p>
                            {{ advantage.first }}
                        </p>
                    </div>
                    <div class="item">
                        <p>
                            {{ advantage.second }}
                        </p>
                    </div>
                </div>
            </div> -->

            <transition name="fade">
                <div class="project-managment" v-if="selectedType === 1" key="OBP">
                    <div class="left-block">
                        <div class="title">
                            <h1>Other Blockchain Platforms</h1>
                        </div>
                        <ul>
                            <li v-for="(item, index) in advantages.first" :key="index">
                                {{ item.second }}
                            </li>
                        </ul>
                    </div>
                    <div class="right-block">
                        <div class="title">
                            <h1 class="title">ALE</h1>
                        </div>
                        <ul>
                            <li v-for="(item, index) in advantages.first" :key="index">
                                {{ item.first }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="other-blockchain" v-if="selectedType === 0" key="PMS">
                    <div class="left-block">
                        <div class="title">
                            <h1 class="title">Project Management Systems</h1>
                        </div>
                        <ul>
                            <li v-for="(item, index) in advantages.second" :key="index">
                                {{ item.second }}
                            </li>
                        </ul>
                    </div>
                    <div class="right-block">
                        <div class="title">
                            <h1 class="title">ALE</h1>
                        </div>
                        <ul>
                            <li v-for="(item, index) in advantages.second" :key="index">
                                {{ item.first }}
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
            <div class="project-managment" v-if="selectedType === 1" style="opacity: 0; position: unset;">
                <div class="left-block">
                    <h1 class="title">Other Blockchain Platforms</h1>
                    <ul>
                        <li v-for="(item, index) in advantages.first" :key="index">
                            {{ item.second }}
                        </li>
                    </ul>
                </div>
                <div class="right-block">
                    <h1 class="title">ALE</h1>
                    <ul>
                        <li v-for="(item, index) in advantages.first" :key="index">
                            {{ item.first }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="other-blockchain" v-if="selectedType === 0" style="opacity: 0; position: unset;">
                <div class="left-block">
                    <h1 class="title">Project Management Systems</h1>
                    <ul>
                        <li v-for="(item, index) in advantages.second" :key="index">
                            {{ item.second }}
                        </li>
                    </ul>
                </div>
                <div class="right-block">
                    <h1 class="title">ALE</h1>
                    <ul>
                        <li v-for="(item, index) in advantages.second" :key="index">
                            {{ item.first }}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen3',
        data() {
            return {
                advantagesFlag: 'first',
                selectedType: 1,
                advantages: {
                    first: [
                        {
                            first: 'Multilateral Smart-Contract',
                            second: 'Unilateral contract or DAO'
                        },
                        {
                            first: 'Smart contract regulates contractual relations',
                            second: 'Smart contract regulates all'
                        },
                        {
                            first: 'Possibility of formal arbitration',
                            second: 'The entire arbitration is automated by smart contracts or with the involvement of a third, non-state party'
                        },
                        {
                            first: 'Full compliance with jurisdictions of different countries',
                            second: 'Inability to comply, as there are no legally significant documents'
                        },
                        {
                            first: 'Payment by an internal token - a container of a phiatic or crypto cost',
                            second: 'Payment in cryptocurrency or not through a blockchain'
                        },
                        {
                            first: 'Isolation of sensitive data in private blockchains',
                            second: 'Lack of a unified approach'
                        },
                    ],
                    second: [
                        {
                            first: 'Text first 1 1',
                            second: 'Text second 1 1'
                        },
                        {
                            first: 'Text first 1 2',
                            second: 'Text second 1 2'
                        },
                        {
                            first: 'Text first 1 3',
                            second: 'Text second 1 3'
                        },
                        {
                            first: 'Text first 1 4',
                            second: 'Text second 1 4'
                        },
                        {
                            first: 'Text first 1 5',
                            second: 'Text second 1 5'
                        },
                        {
                            first: 'Text first 1 6',
                            second: 'Text second 1 6'
                        },
                    ]
                }
            }
        },
        watch: {
            advantagesFlag: function (val) {
                console.log(val, 'val');
            }
        },
        computed: {},
        methods: {},
        mounted() {
            // let self = this;
            // document.querySelector('.point-left-inactive').addEventListener('click', function () {
            //     if (!this.classList.contains('point-left-active')) {
            //         this.classList.add('point-left-active');
            //         this.classList.remove('point-left-inactive');

            //         document.querySelector('.point-right-active').classList.add('point-right-inactive');
            //         document.querySelector('.point-right-active').classList.remove('point-right-active');

            //         self.advantagesFlag = 'second';
            //     }
            // });


            // document.querySelector('.point-right-active').addEventListener('click', function () {
            //     if (!this.classList.contains('point-right-active')) {
            //         this.classList.add('point-right-active');
            //         this.classList.remove('point-right-inactive');

            //         document.querySelector('.point-left-active').classList.add('point-left-inactive');
            //         document.querySelector('.point-left-active').classList.remove('point-left-active');

            //         self.advantagesFlag = 'first';
            //     }
            // });
        }
    }
</script>

<style lang="stylus" scoped>
    @media screen and (max-width: 748px) {
        .item{
            height 190px !important
        }
        .left-title{
            background-color #ffc107aa !important
        }
        .right-title{
            background-color #6c757dfa !important
        }
        .left{
            margin-right 5px
            background-color #ffc1078a
            box-shadow 0px 0px 20px #ffc1078a
        }
        .right{
            margin-right 5px
            background-color #6c757d8a
            box-shadow 0px 0px 20px #6c757d8a
        }
    }
    .advantages
        font-family MuseoSansCyrl500
        display flex
        align-items center
        justify-content start
        flex-direction column
        width 100%
        padding 0 15%
        background-color #f5f5f7

        .separator
            width 152px
            height 2px
            margin 25px 0
            background-color #34343e

        .advantages-title
            font-size 60px
            display flex
            justify-content center
            width 100%
            font-family MuseoSansCyrl300
            margin-top 60px

        .advantages-body
            width 100%
            display flex
            flex-direction column
            margin-bottom 60px
            position relative

            .select-point
                width 100%
                padding 0 10%
                margin-bottom 30px
                position relative
                /*display flex*/
                /*justify-content center*/

                .point
                    cursor pointer
                    width 33%
                    display inline-block
                    font-size 18px
                    text-align center
                    color #34343e
                    opacity 0.3
                    -webkit-transition -webkit-transform 0.5s
                    transition all 0.5s
                    -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                    -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                    transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)

                .point-right-active, .point-left-active
                    cursor default
                    opacity 1

                    .point__inner
                        height 27px
                        display inline
                        border-bottom 2px solid #ffbc00
                        -webkit-transition -webkit-transform 0.5s
                        transition all 0.5s
                        -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                        -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                        transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)

                .point-right-active
                    transform translateX(0)

                .point-left-active
                    transform translateX(100%)

                .point-right-inactive
                    cursor pointer
                    opacity 0.3
                    transform translateX(100%)

                    .point__inner
                        border-bottom 2px solid transparent

                .point-left-inactive
                    cursor pointer
                    opacity 0.3
                    transform translateX(0)

                    .point__inner
                        border-bottom 2px solid transparent

            .block-advantages__active
                transform translateX(0)

            .block-advantages__left
                position absolute
                transform translateX(-150%)

            .block-advantages__right
                position absolute
                transform translateX(150%)

            .block-advantages
                display flex
                flex-direction column
                width 100%
                -webkit-transition -webkit-transform 0.5s
                transition all 0.5s
                -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                -webkit-transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)
                transition-timing-function cubic-bezier(0.46, 0.05, 0.46, 0.79)

                .advantage
                    width 100%
                    display flex
                    flex-direction row

                .item
                    width 100%
                    height 70px
                    display flex
                    justify-content center
                    align-items center
                    border-bottom 2px solid transparent
                    -webkit-border-image -webkit-gradient(left top, right top, color-stop(0%, rgba(227, 227, 230, 0)), color-stop(50%, #ceced1), color-stop(100%, rgba(227, 227, 230, 0)))
                    -webkit-border-image -webkit-linear-gradient(left, rgba(227, 227, 230, 0) 0%, #ceced1 50%, rgba(227, 227, 230, 0) 100%)
                    -moz-border-image -moz-linear-gradient(left, rgba(227, 227, 230, 0) 0%, #ceced1 50%, rgba(227, 227, 230, 0) 100%)
                    -o-border-image -o-linear-gradient(left, rgba(227, 227, 230, 0) 0%, #ceced1 50%, rgba(227, 227, 230, 0) 100%)
                    border-image linear-gradient(to right, rgba(227, 227, 230, 0), #ceced1 50%, rgba(227, 227, 230, 0))
                    border-image-slice 1

                    p
                        text-align center
                        margin 0

                .item-title
                    font-weight 700
                    border-bottom 2px solid transparent
                    -webkit-border-image -webkit-gradient(left top, right top, color-stop(0%, rgba(227, 227, 230, 0)), color-stop(50%, #b0b0b5), color-stop(100%, rgba(227, 227, 230, 0)))
                    -webkit-border-image -webkit-linear-gradient(left, rgba(227, 227, 230, 0) 0%, #b0b0b5 50%, rgba(227, 227, 230, 0) 100%)
                    -moz-border-image -moz-linear-gradient(left, rgba(227, 227, 230, 0) 0%, #b0b0b5 50%, rgba(227, 227, 230, 0) 100%)
                    -o-border-image -o-linear-gradient(left, rgba(227, 227, 230, 0) 0%, #b0b0b5 50%, rgba(227, 227, 230, 0) 100%)
                    border-image linear-gradient(to right, rgba(227, 227, 230, 0), #b0b0b5 50%, rgba(227, 227, 230, 0))
                    border-image-slice 1

            /*.advantage-item*/
            /*width 50%*/

            .advantages-list
                list-style none
                display flex
                flex-direction column
                align-items center
                padding 0

                /*li*/
                /*width 100%*/
                /*margin-bottom 10px*/
                /*border-bottom 1px solid #34343e*/

                .list-title
                    font-weight 700

    @media (max-width: 1655px)
        .select-point
            padding 0 !important

    @media (max-width: 1330px)
        .advantages
            padding 0 10%
    .project-managment, .other-blockchain
        display flex
        justify-content center
        position absolute
        top 50px
        width 100%
        .left-block, .right-block
            width 50%
            max-width 650px
            display flex
            flex-direction column
            padding 20px 20px
            .title
                h1
                    font-size 18px
                    text-transform uppercase
                    margin 0
                    height 40px
                    display flex
                    justify-content center
                    align-items center
                    text-align center
        .left-block
            opacity .6
            .title
                background #fff
            ul
                padding 5px 0px
                li
                    list-style none
                    height 60px
                    display flex
                    align-items center
                    line-height 1.2
                    justify-content flex-end
                    text-align right
                    margin 10px 0
                    background #fff
                    padding 0 40px
                    border-right solid 4px #e2e2e2
        .right-block
            .title
                box-shadow 0 0 7px 0px rgba(0, 0, 0, 0.1)
                background #fff
            ul
                padding 5px 0px
                li
                    list-style none
                    height 60px
                    display flex
                    align-items center
                    line-height 1.2
                    justify-content flex-start
                    text-align left
                    margin 10px 0
                    background #fff
                    padding 0 40px
                    &:nth-child(even)
                        border-left solid 4px #34343e
                    &:nth-child(odd)
                        border-left solid 4px #fdd04a

    .fade-enter-active, 
    .fade-leave-active
        transition all .5s
    .fade-enter, 
    .fade-leave-active
        opacity 0
    .other-blockchain.fade-enter
        transform translateX(-100%)
    .project-managment.fade-enter
        transform translateX(100%)
    .other-blockchain.fade-leave-active
        transform translateX(-100%)
    .project-managment.fade-leave-active
        transform translateX(100%)
    @media (max-width: 1440px)
        .project-managment, .other-blockchain
            .left-block, .right-block
                ul
                    li
                        height 70px
                .title
                    height 60px
    @media (max-width: 1024px)
        .project-managment, .other-blockchain
            .left-block, .right-block
                ul
                    li
                        height 90px
                        padding 0 20px
                .title
                    height 60px
    @media (max-width: 768px)
        .project-managment, .other-blockchain
            .left-block, .right-block
                ul
                    li
                        height 120px
                        padding 0 20px
                .title
                    height 80px
        .advantages 
            .advantages-body 
                .select-point
                    display flex
                    justify-content space-between
                    .point
                        width 50%
                    .point-left-active,
                    .point-right-inactive
                        transform: translateX(0%)
    @media (max-width: 630px)
        .project-managment, .other-blockchain
            top 100px
            .left-block, .right-block
                ul
                    li
                        height 180px
                        padding 0 10px
                        text-align center
                .title
                    height 100px
    @media (max-width: 425px)
        .project-managment, .other-blockchain
            .left-block, .right-block
                padding 0
                ul
                    li
                        height 180px
                        padding 0 10px
                        text-align center
                        margin 5px 0
                .title
                    height 100px
        .advantages
            padding 0 10px
</style>