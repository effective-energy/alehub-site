<template>
    <div class="download-app" id="download-application">
        <h3 class="title">
            Download
        </h3>
        <div class="os-avail-list">
            <div class="logo">

                <div class="logo__fade">
                </div>

                <div class="test">
                    <div class="test1">

                    </div>
                    <div class="test1">
                        <button type="button" class="button button__fade">
                            <img src="../../static/images/request-ic.svg" alt="Download">
                        </button>
                    </div>
                </div>

                <div class="logo__wrap">
                    <img class="logo__apple" src="../../static/images/logo/apple-logo.svg" alt="Apple logo">
                </div>
                <h4 class="logo__title">
                    macOS
                </h4>
                <p class="version">
                    Version 0.0.977
                </p>
                <p class="bit">
                    64bit
                </p>
                <p class="release">
                    Release notes - 05/2018
                </p>

                <!--<button type="button" class="button button__download">-->
                    <!--Download-->
                <!--</button>-->
            </div>
            <div class="logo">

                <div class="logo__fade">
                </div>

                <div class="test">
                    <div class="test1">

                    </div>
                    <div class="test1">
                        <button type="button" class="button button__fade">
                            <img src="../../static/images/request-ic.svg" alt="Download">
                        </button>
                    </div>
                </div>

                <button type="button" class="button button__fade">
                    <img src="../../static/images/request-dark-ic.svg" alt="Download">
                </button>

                <div class="logo__wrap">
                    <img class="logo__windows" src="../../static/images/logo/windows-logo.svg" alt="Windows logo">
                </div>
                <h3 class="logo__title">
                    Windows
                </h3>
                <p class="version">
                    Version 0.0.632
                </p>
                <p class="bit">
                    64bit
                </p>
                <p class="release">
                    Release notes - 05/2018
                </p>

                <!--<button type="button" class="button button__download">-->
                    <!--Download-->
                <!--</button>-->
            </div>
            <div class="logo">

                <div class="logo__fade">
                </div>

                <div class="test">
                    <div class="test1">

                    </div>
                    <div class="test1">
                        <button type="button" class="button button__fade">
                            <img src="../../static/images/request-ic.svg" alt="Download">
                        </button>
                    </div>
                </div>

                <button type="button" class="button button__fade">
                    <img src="../../static/images/request-dark-ic.svg" alt="Download">
                </button>

                <div class="logo__wrap">
                    <img class="logo__linux" src="../../static/images/logo/linux-logo.svg" alt="Linux logo">
                </div>
                <h3 class="logo__title">
                    Linux
                </h3>
                <p class="version">
                    Version 0.0.704
                </p>
                <p class="bit">
                    64bit
                </p>
                <p class="release">
                    Release notes - 05/2018
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
        background-color #fff
        height 100vh
        width 100%
        padding 80px 20%

        .title
            text-align center
            font-size 40px

        .os-avail-list
            height 100%
            width 100%
            display flex
            flex-direction row
            justify-content center
            align-items center

            /*.apple-block*/
                /*width 250px*/

            /*.windows-block*/
                /*width 200px*/

            /*.linux-block*/
                /*width 150px*/

            .logo
                position relative
                display flex
                flex-direction column
                justify-content center
                align-items center
                /*background-color #888*/
                /*height 500px*/
                width 33.33333%
                padding 50px 50px

                .test
                    position absolute
                    width 100%
                    height 100%
                    display flex
                    flex-direction column
                    justify-content center
                    align-self center

                    .test1
                        position relative
                        width 100%
                        height 50%
                        display flex
                        flex-direction row
                        justify-content center
                        align-self center

                        .button__fade
                            cursor pointer
                            position absolute
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

                        img
                            width 40px
                            height 40px


                &:hover
                    .logo__fade
                        opacity .4

                    .test
                        .test1
                            .button__fade
                                opacity 1

                                &:hover
                                    -webkit-box-shadow 0 0 7px 0 rgba(0, 0, 0, .4)
                                    -moz-box-shadow 0 0 7px 0 rgba(0, 0, 0, .4)
                                    box-shadow 0 0 7px 0 rgba(0, 0, 0, .4)

                .button__fade
                    cursor pointer
                    position absolute
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

                    img
                        width 40px
                        height 40px


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

                .logo__wrap
                    flex-direction row
                    justify-content center
                    align-items center
                    height 180px
                    margin-bottom 20px

                    img
                        height auto

                    .logo__apple
                        width 110px

                    .logo__windows
                        width 110px

                    .logo__linux
                        width 150px

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

                .release
                    font-size 12px
                    color #34343e
                    text-transform uppercase
                    /*margin-bottom 36px*/

                .button__download
                    cursor pointer
                    color #34343e
                    font-family MuseoSansCyrl500
                    font-weight 500
                    /*background-color #ffd24f*/
                    /*border 1px solid transparent*/
                    padding 8px 20px
                    border-radius 3px
                    -webkit-transition all .3s ease-in-out
                    -o-transition all .3s ease-in-out
                    transition all .3s ease-in-out

                    &:focus
                        outline none

                    &:active
                        border 1px solid #ffd24f

</style>