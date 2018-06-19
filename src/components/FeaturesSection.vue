<template>
    <div class="section section__yellow" id="features">
        <vue-particles v-if="isFeatures && !isLessThanTablet"
                       id="particles-js"
                       color="#ffffff"
                       :particleOpacity="0.4"
                       :particlesNumber="80"
                       shapeType="circle"
                       :particleSize="4"
                       linesColor="#ffffff"
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
                {{ $t("alePlatform.title") }}
            </h3>
            <p class="description">
                {{ $t("alePlatform.subTitle") }}
            </p>
            <div class="watch">
                <div onclick="yaCounter48802643.reachGoal('SecVideo'); return true;"
                     class="play-video">
                    <button class="play-button"
                            @click="playVideo"
                            style="display: flex; justify-content: center; align-items: center;">
                        <div class="wrap-play"
                             :class="{ 'active': mainPlayer }">
                            <span class="line l-1"></span>
                            <span class="line l-2"></span>
                            <span class="line l-3"></span>
                        </div>
                    </button>

                    <p class="watch-text">
                        {{ $t("alePlatform.watchDemo") }}
                    </p>

                    <div class="main-player"
                         v-if="mainPlayer">
                        <iframe class="iframe"
                                src="https://www.youtube.com/embed/WOqQog8BCiM?ecver=1&autoplay=1&showinfo=0&controls=0&loop=1&playlist=WOqQog8BCiM"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-2">
            <h3 class="title">
                {{ $t("alePlatform.solvingProblems.title") }}
            </h3>

            <div class="list-items">
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-money.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            {{ $t("alePlatform.solvingProblems.list[0].title") }}
                        </p>
                        <p>
                            {{ $t("alePlatform.solvingProblems.list[0].description") }}
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-pen.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            {{ $t("alePlatform.solvingProblems.list[1].title") }}
                        </p>
                        <p>
                            {{ $t("alePlatform.solvingProblems.list[1].description") }}
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-contract.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            {{ $t("alePlatform.solvingProblems.list[2].title") }}
                        </p>
                        <p>
                            {{ $t("alePlatform.solvingProblems.list[2].description") }}
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-integration.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            {{ $t("alePlatform.solvingProblems.list[3].title") }}
                        </p>
                        <p>
                            {{ $t("alePlatform.solvingProblems.list[3].description") }}
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/icon-volatility.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            {{ $t("alePlatform.solvingProblems.list[4].title") }}
                        </p>
                        <p>
                            {{ $t("alePlatform.solvingProblems.list[4].description") }}
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <img src="../../static/images/integrity-ic.svg">
                    </div>
                    <div class="right">
                        <p class="right__title">
                            {{ $t("alePlatform.solvingProblems.list[5].title") }}
                        </p>
                        <p>
                            {{ $t("alePlatform.solvingProblems.list[5].description") }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="section-3" id="main-features">
            <!--v-if="isVideo"-->

            <div class="video__wrap">
                <video autoplay muted loop id="myVideoScale">
                    <source src="../../static/video/libra.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'/>
                    <source src="../../static/video/libra.webm" type='video/webm; codecs="vp8.0, vorbis"'/>
                </video>
            </div>


            <!--<div class="figure">-->
                <!--<img src="../../static/images/layer.png" alt="" style="width: 100%;">-->
            <!--</div>-->

            <div class="info-block">
                <h3 class="title">
                    {{ $t("features.title") }}
                </h3>
                <div class="list-items">
                    <div class="item">
                        <div class="left">
                            <img src="../../static/images/icon-lock.svg">
                        </div>
                        <div class="right">
                            <p class="right__title">
                                {{ $t("features.list[0].title") }}
                            </p>
                            <p>
                                {{ $t("features.list[0].description") }}
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img src="../../static/images/icon-relationship.svg">
                        </div>
                        <div class="right">
                            <p class="right__title">
                                {{ $t("features.list[1].title") }}
                            </p>
                            <p>
                                {{ $t("features.list[1].description") }}
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img src="../../static/images/icon-adjust.svg">
                        </div>
                        <div class="right">
                            <p class="right__title">
                                {{ $t("features.list[2].title") }}
                            </p>
                            <p>
                                {{ $t("features.list[2].description") }}
                            </p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            <img src="../../static/images/icon-process.svg">
                        </div>
                        <div class="right">
                            <p class="right__title">
                                {{ $t("features.list[3].title") }}
                            </p>
                            <p>
                                {{ $t("features.list[3].description") }}
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
            return {
                mainPlayer: false
            }
        },
        computed: {
            isLessThanTablet: function () {
                return window.innerWidth < 768;
            }
        },
        methods: {
            playVideo: function () {
                this.mainPlayer ? this.mainPlayer = false : this.mainPlayer = true
            },
        }
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
    .wrap-play
        .line
            display block
            width 20px
            height 1px
            background-color black
            -webkit-transition all .5s ease-in-out
            -o-transition all .5s ease-in-out
            transition all .5s ease-in-out

        .l-1
            transform translate(-6px) rotate(90deg)

        .l-2
            transform translate(3px, -6px) rotate(30deg)

        .l-3
            transform translate(3px, 3px) rotate(330deg)

    .active
        .l-1
            opacity 0

        .l-2
            transform translate(1px, 1px) rotate(135deg)

        .l-3
            transform translate(0, 0) rotate(45deg)

    .place-player
        position absolute
        bottom 7px
        opacity 0
        -webkit-transition all .5s ease-in-out
        -o-transition all .5s ease-in-out
        transition all .5s ease-in-out

        .place-player__frame
            background-color #000

    .main-player
        z-index 100

    .main-player, .place-player
        .iframe, .place-player__frame
            width 700px
            height 394px

            @media (max-width 1680px)
                width 600px
                height 336px

            @media (max-width 1600px)
                width 500px
                height 280px

            @media (max-width 1530px)
                width 500px
                height 280px

            @media (max-width 1274px)
                width 800px
                height 450px

            @media (max-width 1120px)
                width 700px
                height 394px

            @media (max-width 850px)
                width 600px
                height 336px

            @media (max-width 720px)
                width 500px
                height 280px

            @media (max-width 620px)
                width 400px
                height 225px

            @media (max-width 520px)
                width 100%
                height 292px

    @media (min-width 425px) and (max-width 520px)
        .play-video
            margin-top 0
            width 90%
            position relative !important

            .place-player
                display none

    @media (max-width 425px)
        .play-video
            margin-top 0
            width 90%
            position relative !important

            .place-player
                display none

    .play-video
        position relative
        display flex
        flex-direction column
        justify-content center
        align-items center

        .play-button
            cursor pointer
            width 110px
            height 110px
            border none
            border-radius 50%
            background-color #ffd24f
            margin-bottom 20px
            z-index 100

            @media (max-width 425px)
                width 80px
                height 80px

                .wrap-ic
                    img
                        width 25px !important
                        height 25px !important

            &:focus
                outline 0

            .wrap-ic
                padding-left 7px

                img
                    width 35px
                    height 35px

        @media (min-width 768px) and (max-width 1274px)
            text-align center
            margin 48px auto 0

            .play-button
                margin 0

        @media (max-width 768px)
            display flex
            justify-content center
            align-items center
            flex-direction column

    .section
        display flex
        flex-direction column
        justify-content center
        align-items center
        padding 80px 10%
        background-color #ffce4a

        .section-1
            z-index 100
            display flex
            flex-direction column
            justify-content center
            align-items center

            .title
                font-size 40px
                margin-bottom 40px
                z-index 100

            .description
                font-size 18px
                text-align center
                margin-bottom 60px
                z-index 100

            .watch
                width 100%
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
            z-index 100
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
                        text-align center

                        img
                            width 30px

        .section-3
            z-index 100
            padding-top 105px
            width 100%
            display flex
            align-items center

            .video__wrap
                width 30%
                display flex
                justify-content center
                align-items center

                @media (max-width 768px)
                    display none

                video
                    width 100%


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

    @media (min-width 1250px) and (max-width 1650px)
        .application
            padding 80px 10%

    @media (max-width 1250px)
        .application
            padding 80px 5%

    @media (min-width 768px) and (max-width 1024px)
        .application
            .section-2
                .list-items
                    .item
                        width 50%
                        padding-right 16px
                        margin-bottom 24px

    @media (min-width 575px) and (max-width 768px)
        .application
            .section-2
                .list-items
                    .item
                        width 50%
                        padding-right 16px
                        margin-bottom 24px

            .section-3
                display flex
                justify-content center

                .info-block
                    width 80%
                    padding-left 0

                    .title
                        margin-bottom 24px
                        font-size 34px

                    .list-items
                        .item
                            width 100%
                            padding-right 0
                            margin-bottom 24px

    @media (max-width 575px)
        .application
            .section-2
                .list-items
                    .item
                        width 100%
                        padding-right 0

            .section-3
                .figure
                    display none

                .info-block
                    width 100%

                    .list-items
                        .item
                            width 100%
                            padding-right 0
                            margin-bottom 24px

    @media (max-width 425px)
        .application
            padding-top 60px
            padding-bottom 60px

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
                margin-bottom 0
                padding-top 30px

                .title
                    font-size 30px
                    margin-bottom 24px

                .list-items
                    .item
                        width 100%
                        padding-right 0
                        padding-left 15px
                        padding-top 12px
                        margin-bottom 12px

                        &:nth-child(4)
                            .left
                                margin-right 20px

            .section-3
                padding-top 30px

                .info-block
                    .title
                        font-size 30px
                        margin-bottom 24px
                        text-align center

                    .list-items
                        .item
                            padding-left 15px
                            margin-bottom 12px

                            &:first-child
                                .left
                                    margin-right 38px

    @media (max-width 320px)
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