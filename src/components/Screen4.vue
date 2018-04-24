<template>
    <div class="application">
        <h3 class="title">
            Alehub - frist application
        </h3>
        <p class="description">
            <b>Alehub</b> is the first project using the <b>ALE</b> platform. <b>Alehub</b> is aimed at the IT industry
            and provides an
            opportunity to carry out the project "from scratch": from the Contractor's search, to mutual settlements.
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
        background-color #ffc839

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
</style>