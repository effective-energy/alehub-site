<template>
    <div class="download-app" id="download-application">
        <h3 class="title">
            {{$t('download')}}
        </h3>
        <div class="separator"></div>
        <div class="os-avail-list">
            <div class="logo">

                <!--<div class="logo__fade">-->
                <!--</div>-->

                <!--<button type="button" class="button button__fade">-->
                    <!--<img class="download-ic" src="../../static/images/request-ic.svg" alt="Download">-->
                <!--</button>-->

                <div class="logo__wrap">
                    <img class="logo__apple" src="../../static/images/logo/apple-logo.svg" alt="Apple logo">
                </div>
                <h4 class="logo__title">
                    macOS
                </h4>
                <p class="version">
                    Version 0.0.1
                </p>
                <p class="bit">
                    64bit
                </p>
                <p class="release">
                    05.05.2018
                </p>

                <button type="button" class="button button__download">
                    Download
                </button>
            </div>
            <div class="logo">

                <!--<div class="logo__fade">-->
                <!--</div>-->

                <!--<button type="button" class="button button__fade">-->
                    <!--<img class="download-ic" src="../../static/images/request-ic.svg" alt="Download">-->
                <!--</button>-->

                <div class="logo__wrap">
                    <img class="logo__windows" src="../../static/images/logo/windows-logo.svg" alt="Windows logo">
                </div>
                <h3 class="logo__title">
                    Windows
                </h3>
                <p class="version">
                    Version 0.0.0
                </p>
                <p class="bit">
                    64bit
                </p>
                <p class="release">
                    Coming soon
                </p>

                <!--<button type="button" class="button button__download">-->
                    <!--Download-->
                <!--</button>-->
            </div>
            <div class="logo">

                <!--<div class="logo__fade">-->
                <!--</div>-->

                <!--<button type="button" class="button button__fade">-->
                    <!--<img class="download-ic" src="../../static/images/request-ic.svg" alt="Download">-->
                <!--</button>-->

                <div class="logo__wrap">
                    <img class="logo__linux" src="../../static/images/logo/linux-logo.svg" alt="Linux logo">
                </div>
                <h3 class="logo__title">
                    Linux
                </h3>
                <p class="version">
                    Version 0.0.0
                </p>
                <p class="bit">
                    64bit
                </p>
                <p class="release">
                    Coming soon
                </p>

                <!--<button type="button" class="button button__download">-->
                    <!--Download-->
                <!--</button>-->
            </div>
            <!--Доступно для следующих дистрибутивов-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DownloadApplicationClient'
    }
</script>

<style lang="stylus" scoped>
    .download-app
        background-color #ffd24f
        height 100vh
        width 100%
        padding 80px 20%
        display flex
        flex-direction column
        justify-content center
        align-items center

        @media (max-width 1024px)
            padding 80px 10%

        @media (max-width 1024px)
            height auto

        .title
            text-align center
            font-size 40px

        .separator
            width 120px
            height 2px
            margin 25px 0
            background-color #343a49

        .os-avail-list
            height 100%
            width 100%
            display flex
            flex-direction row
            justify-content center
            align-items center
            flex-wrap wrap

            @media (max-width 768px)
                width 100%

            .logo
                position relative
                display flex
                flex-direction column
                justify-content center
                align-items center
                width 33.33333%
                padding 50px 50px

                &:hover
                    .logo__fade
                        opacity .4

                    .button__fade
                        opacity 1

                        &:hover
                            -webkit-box-shadow 0 0 7px 0 rgba(0, 0, 0, .4)
                            -moz-box-shadow 0 0 7px 0 rgba(0, 0, 0, .4)
                            box-shadow 0 0 7px 0 rgba(0, 0, 0, .4)

                            .download-ic
                                transform translateY(7px)


                @media (max-width 768px)
                    width 100%


                .button__fade
                    cursor pointer
                    position absolute
                    bottom 20%
                    opacity 0
                    width 80px
                    height 80px
                    /*border 2px solid #585d66*/
                    border none
                    border-radius 3px
                    //background-color rgba(255, 210, 79, 0.8)
                    background-color #343a49
                    /*background-color transparent*/
                    -webkit-transition all .3s ease-in-out
                    -o-transition all .3s ease-in-out
                    transition all .3s ease-in-out
                    z-index 1010

                    .download-ic
                        width 30px
                        height 30px
                        -webkit-transition all .25s ease-in-out
                        -o-transition all .25s ease-in-out
                        transition all .25s ease-in-out

                    @media (max-width 1024px)
                        display none

                .logo__fade
                    position absolute
                    height 100%
                    width 100%
                    background-color #8e9ab1
                    opacity 0
                    -webkit-transition all .3s ease-in-out
                    -o-transition all .3s ease-in-out
                    transition all .3s ease-in-out
                    z-index 1000

                    @media (max-width 1024px)
                        display none

                .logo__wrap
                    flex-direction row
                    justify-content center
                    align-items center
                    height 180px
                    margin-bottom 24px

                    img
                        height auto

                    .logo__apple
                        width 110px

                    .logo__windows
                        width 110px

                    .logo__linux
                        width 150px

                    @media (max-width 1024px)
                        margin-bottom 36px
                        height auto

                .logo__title
                    font-family MuseoSansCyrl500
                    font-size 24px
                    font-weight 500
                    color #434350
                    margin-bottom 18px

                .version
                    font-size 20px
                    color #434350
                    margin-bottom 0

                .bit
                    font-size 20px
                    color #434350
                    margin-bottom 36px

                    @media (max-width 1024px)
                        margin-bottom 12px

                .release
                    font-size 12px
                    color #34343e
                    text-transform uppercase

                    @media (max-width 1024px)
                        margin-bottom 24px

                .button__download
                    cursor pointer
                    color #ffffff
                    font-family MuseoSansCyrl500
                    font-weight 500
                    background-color #343a49
                    border 1px solid transparent
                    padding 8px 20px
                    border-radius 3px
                    -webkit-transition all .3s ease-in-out
                    -o-transition all .3s ease-in-out
                    transition all .3s ease-in-out

                    &:focus
                        outline none

                    &:active
                        border 1px solid #ffd24f

                    @media (max-width 1024px)
                        display block

</style>