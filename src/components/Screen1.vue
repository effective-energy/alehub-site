<template>
    <div class="container-fluid">
        <section id="screen1">
            <div class="row">
                <div class="col-lg-5">
                    <h1 class="screen1 title">Welcome to the future of the HR industry</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7">
                    <div class="countdown">
                        <h2 class="title">
                            Round 1 will begin:
                        </h2>
                        <div class="timer">
                            <div class="days">
                                <div class="first">0</div>
                                <div class="second">1</div>
                                <div class="title">Days</div>
                            </div>
                            <div class="hours">
                                <div class="first">2</div>
                                <div class="second">4</div>
                                <div class="title">Hours</div>
                            </div>
                            <div class="minutes">
                                <div class="first">5</div>
                                <div class="second">9</div>
                                <div class="title">Minutes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Screen1'
}
</script>

<style lang="stylus">
    @font-face
        font-family PantonRegular
        src url('../assets/fonts/Panton.otf')
    @font-face
        font-family PantonBold
        src url('../assets/fonts/PantonBold.otf')

    .container-fluid
        padding-left 230px
        padding-right 230px

    .screen1
        &.title
            font-size 60px
            margin-top 150px
            font-family PantonRegular

    .countdown
        padding-top 40px
        .title
            font-size 20px
            font-family PantonBold
            padding-left 5px

    .timer
        width 310px
        display flex
        .hours
            margin 0 20px
        .first
            margin-right 5px
        .first, .second 
            font-size 57.08px
            background #3e3d42
            color #ececf0
            height 70px
            width 40px
            font-family PantonRegular
            border-radius: 3px
            padding 0 3px
        & div
            display flex
            align-items center
            justify-content center
</style>