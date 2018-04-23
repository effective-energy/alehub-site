<template>
    <div class="advantages">
        <h3 class="advantages-title">
            ALE advantages
        </h3>
        <div class="separator"></div>
        <div class="advantages-body">
            <div class="select-point">
                <div class="point">
                    ALE vs Project Management Systems
                </div>
                <div class="point point-right-active">
                    ALE vs Other Blockchain Platforms
                </div>
            </div>
            <div class="block-advantages">
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
                <div class="advantage" v-for="advantage in advantages.first">
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

                <!--<div class="advantage-item">-->
                    <!--<ul class="advantages-list">-->
                        <!--<li class="list-title">-->
                            <!--ALE-->
                        <!--</li>-->
                        <!--<li v-for="item in advantage.first">-->
                            <!--{{ item }}-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
                <!--<div class="advantage-item">-->
                    <!--<ul class="advantages-list">-->
                        <!--<li class="list-title">-->
                            <!--Other Blockchain Platforms-->
                        <!--</li>-->
                        <!--<li v-for="item in advantage.second">-->
                            <!--{{ item }}-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen3',
        data() {
            return {
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
                    ],
                    third: [
                        {
                            first: 'Text first 2 1',
                            second: 'Text second 2 1'
                        },
                        {
                            first: 'Text first 2 2',
                            second: 'Text second 2 2'
                        },
                        {
                            first: 'Text first 2 3',
                            second: 'Text second 2 3'
                        },
                        {
                            first: 'Text first 2 4',
                            second: 'Text second 2 4'
                        },
                        {
                            first: 'Text first 2 5',
                            second: 'Text second 2 5'
                        },
                        {
                            first: 'Text first 2 6',
                            second: 'Text second 2 6'
                        },
                    ]
                }
            }
        },
        computed: {},
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    .advantages
        font-family MuseoSansCyrl500
        display flex
        align-items center
        justify-content center
        flex-direction column
        width 100%
        padding 0 10%
        min-height 100vh
        background-color #f5f5f7

        .separator
            width 76px
            height 2px
            margin 25px 0
            background-color #34343e

        .advantages-title
            font-size 30px
            display flex
            justify-content center
            width 100%

        .advantages-body
            width 100%
            display flex
            flex-direction column

            .select-point
                width 100%
                margin-bottom 30px
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
                    /*margin-right 30px*/

                .point-right-active
                    cursor default
                    opacity 1
                    border-bottom 2px solid #ffbc00

                .point-left-active
                    margin-left 33%


            .block-advantages
                display flex
                flex-direction column
                width 100%

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
                    -webkit-border-image  -webkit-linear-gradient(left, rgba(227, 227, 230, 0) 0%, #ceced1 50%, rgba(227, 227, 230, 0) 100%)
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
                    -webkit-border-image  -webkit-linear-gradient(left, rgba(227, 227, 230, 0) 0%, #b0b0b5 50%, rgba(227, 227, 230, 0) 100%)
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


</style>