<template>
    <div class="application" id="features">
        <div class="section-1">
            <h3 class="title">
                Alehub - frist application
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

        <div class="section-3">
            <div class="figure">

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
        name: 'Screen4'
    }
</script>

<style lang="stylus" scoped>
    .application
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding 80px 15%
        background rgba(253,208,74,1)
        background -moz-linear-gradient(top, rgba(253,208,74,1) 0%, rgba(255,160,7,1) 100%)
        background -webkit-gradient(left top, left bottom, color-stop(0%, rgba(253,208,74,1)), color-stop(100%, rgba(255,160,7,1)))
        background -webkit-linear-gradient(top, rgba(253,208,74,1) 0%, rgba(255,160,7,1) 100%)
        background -o-linear-gradient(top, rgba(253,208,74,1) 0%, rgba(255,160,7,1) 100%)
        background -ms-linear-gradient(top, rgba(253,208,74,1) 0%, rgba(255,160,7,1) 100%)
        background linear-gradient(to bottom, rgba(253,208,74,1) 0%, rgba(255,160,7,1) 100%)

        .section-1
            display flex
            flex-direction column
            justify-content center
            align-items center
            margin-bottom 80px

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
                    width 85px
                    height 85px
                    border none
                    border-radius 50%
                    background-color #ffffff
                    margin-bottom 20px

                    .wrap-ic
                        padding-left 7px

                        img
                            width 25px
                            height 25px

                .watch-text
                    font-family MuseoSansCyrl500
                    font-size 26px

        .section-2
            width 100%
            display flex
            flex-direction column
            justify-content center
            align-items center
            margin-bottom 60px

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
                    width 33%

                    .right
                        .right__title
                            font-weight 700
                            margin-bottom 10px

                    .left
                        margin-right 30px

        .section-3
            width 100%
            display flex
            .figure
                width 30%
            .info-block
                width 70%
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
</style>