<template>
    <div class="application" id="features">
        <vue-particles v-if="isFeatures"
                       color="#fff"
                       :particleOpacity="0.4"
                       :particlesNumber="80"
                       shapeType="circle"
                       :particleSize="4"
                       linesColor="#fff"
                       :linesWidth="1"
                       :lineLinked="true"
                       :lineOpacity="0.4"
                       :linesDistance="150"
                       :moveSpeed="3"
                       :hoverEffect="true"
                       hoverMode="grab"
                       :clickEffect="false">
        </vue-particles>

        <div class="section-1">
            <h3 class="title">
                Alehub - first application
            </h3>
            <p class="description">
                <b>Alehub</b> is the first project using the <b>ALE</b> platform. <b>Alehub</b> is aimed at the IT
                industry
                and provides an
                opportunity to carry out the project "from scratch": from the Contractor's search, to mutual
                settlements.
            </p>
            <div class="watch">
                <button class="play-button">
                    <div class="wrap-ic">
                        <img src="../../static/images/play-ic.svg">
                    </div>
                </button>

                <p class="watch-text">Watch demo</p>
            </div>
        </div>

        <div class="section-2">
            <h3 class="title">
                Solving problems
            </h3>

            <div class="list-items">
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-money.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            Legality of means of payment
                        </p>
                        <p>
                            Explanation text can be placed here
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-pen.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            Legal significance of electronic documents
                        </p>
                        <p>
                            Explanation text can be placed here
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-contract.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            The inevitability of the fulfillment of the obligations of the parties to the contract
                        </p>
                        <p>
                            Explanation text can be placed here
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-integration.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            Integrity and unalterability of project communication and documentation
                        </p>
                        <p>
                            Explanation text can be placed here
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-money.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            Volatility of the payment instrument
                        </p>
                        <p>
                            Explanation text can be placed here
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-3" id="main-features">

            <div class="figure">
                <img src="../../static/images/layer.png" alt="" style="width: 100%;">
            </div>

            <div class="info-block">
                <h3 class="title">
                    The main distinguishing
                    <br>
                    features of ALE
                </h3>
                <div class="list-items">
                    <div class="item">
                        <div class="left">
                            <img src="../../static/images/icon-lock.svg">
                        </div>
                        <div class="right">
                            <p class="right__title">
                                Choice of encryption algorithm for communication and documentation
                            </p>
                            <p>
                                In accordance with legislation
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img src="../../static/images/icon-relationship.svg">
                        </div>
                        <div class="right">
                            <p class="right__title">
                                Automating relationships with TTP
                            </p>
                            <p>
                                Explanation text can be placed here
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img src="../../static/images/icon-adjust.svg">
                        </div>
                        <div class="right">
                            <p class="right__title">
                                The choice of any methodology for project management
                            </p>
                            <p>
                                Users of services based on ALE have the opportunity to create their own methodological
                                algorithms, in addition to the well known <span style="opacity: 0.5">(DIN 69901, GOST R 54869 - 2011, PMBOK Guide,
                                ISO 10006-97, APM Body of Knowledge, Prince 2, OPM 3)</span>
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img src="../../static/images/icon-process.svg">
                        </div>
                        <div class="right">
                            <p class="right__title">
                                Mutual settlements are made using an internal token
                            </p>
                            <p>
                                A container of phiatic or cryptographic cost
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen4',
        props: {
            isFeatures: {
                required: true
            }
        },
        data() {
            return {}
        },
    }
</script>

<style>
    #particles-js {
        width: 100%;
        height: 100%;
        position: absolute;
        margin-top: 15%;
    }
</style>

<style lang="stylus" scoped>
    .application
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding 80px 10%
        background rgba(253, 208, 74, 1)
        background -moz-linear-gradient(top, rgba(253, 208, 74, 1) 0%, rgba(255, 160, 7, 1) 100%)
        background -webkit-gradient(left top, left bottom, color-stop(0%, rgba(253, 208, 74, 1)), color-stop(100%, rgba(255, 160, 7, 1)))
        background -webkit-linear-gradient(top, rgba(253, 208, 74, 1) 0%, rgba(255, 160, 7, 1) 100%)
        background -o-linear-gradient(top, rgba(253, 208, 74, 1) 0%, rgba(255, 160, 7, 1) 100%)
        background -ms-linear-gradient(top, rgba(253, 208, 74, 1) 0%, rgba(255, 160, 7, 1) 100%)
        background linear-gradient(to bottom, rgba(253, 208, 74, 1) 0%, rgba(255, 160, 7, 1) 100%)

        .section-1
            display flex
            flex-direction column
            justify-content center
            align-items center
            /*margin-bottom 80px*/

            .title
                font-size 40px
                margin-bottom 40px

            .description
                font-size 18px
                text-align center
                margin-bottom 60px

            .watch
                display flex
                flex-direction column
                align-items center
                justify-content center

                .play-button
                    cursor pointer
                    width 85px
                    height 85px
                    border none
                    border-radius 50%
                    background-color #ffffff
                    margin-bottom 20px

                    &:focus
                        outline 0

                    .wrap-ic
                        padding-left 7px

                        img
                            width 25px
                            height 25px

                .watch-text
                    font-family MuseoSansCyrl500
                    font-size 26px

        .section-2
            padding-top 80px
            width 100%
            display flex
            flex-direction column
            justify-content center
            align-items center

            .title
                font-size 40px
                margin-bottom 25px

            .list-items
                width 100%
                display flex
                flex-wrap wrap

                .item
                    display flex
                    padding-top 35px
                    padding-right 70px
                    width 33%

                    .right
                        .right__title
                            font-weight 700
                            margin-bottom 10px

                    .left
                        margin-right 30px

        .section-3
            padding-top 105px
            width 100%
            display flex
            .figure
                width 30%
            .info-block
                width 70%
                padding-left 5%
                .title
                    font-size 40px
                    margin-bottom 60px

                .list-items
                    width 100%
                    display flex
                    flex-wrap wrap

                    .item
                        display flex
                        margin-bottom 35px
                        padding-right 35px
                        width 50%

                        .right
                            .right__title
                                font-weight 700
                                margin-bottom 10px

                        .left
                            margin-right 30px

    @media (max-width: 1650px) and (min-width: 1250px)
        .application
            padding 80px 10%

    @media (max-width: 1250px)
        .application
            padding 80px 5%

    @media (max-width: 768px)
        .application
            .section-2
                .list-items
                    .item
                        width 50%
                        padding-right 16px
                        margin-bottom 24px

            .section-3
                .figure
                    width 50%
                    display flex
                    flex-direction column
                    justify-content center

                .info-block
                    width 50%
                    padding-left 0

                    .title
                        margin-bottom 24px
                        font-size 34px

                    .list-items
                        .item
                            width 100%
                            padding-right 0
                            margin-bottom 24px

    @media (max-width: 575px)
        .application
            .section-3
                .figure
                    display none

                .info-block
                    width 100%

    @media (max-width: 425px)
        .application
            .section-1
                margin-bottom 24px

                .title
                    text-align center
                    font-size 30px
                    margin-bottom 24px

                .description
                    font-size 16px

                .watch
                    .play-button
                        width 75px
                        height 75px

            .section-2
                margin-bottom 24px

                .title
                    font-size 30px
                    margin-bottom 24px

                .list-items
                    .item
                        width 100%
                        padding-right 0
                        padding-left 15px

                        &:nth-child(4)
                            .left
                                margin-right 20px

            .section-3
                .info-block
                    .title
                        font-size 30px
                        margin-bottom 24px
                        text-align center

                    .list-items
                        .item
                            padding-left 15px

                            &:first-child
                                .left
                                    margin-right 38px

    @media (max-width: 320px)
        .application
            .section-2
                .list-items
                    .item
                        display flex
                        flex-direction column
                        padding-left 0
                        align-items center

                        &:nth-child(4)
                            .left
                                margin-right 0

                        .left
                            margin-right 0
                            margin-bottom 12px

                        .right
                            text-align center

            .section-3
                .info-block
                    .list-items
                        .item
                            display flex
                            flex-direction column
                            padding-left 0
                            align-items center

                            &:first-child
                                .left
                                    margin-right 0

                            .left
                                margin-right 0
                                margin-bottom 12px

                            .right
                                text-align center

</style>