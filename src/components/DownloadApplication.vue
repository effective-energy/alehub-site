<template>
    <div class="download-app" id="download-application">
        <h3 class="title">
            Download
        </h3>
        <div class="os-avail-list">
            <div class="logo">

                <!--<div class="logo__fade">-->

                <!--</div>-->

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

                <button type="button" class="button button__download">
                    Download
                </button>
            </div>
            <div class="logo">
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

                <button type="button" class="button button__download">
                    Download
                </button>
            </div>
            <div class="logo">
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

                <button type="button" class="button button__download">
                    Download
                </button>
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
        padding 80px 10%

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
                display flex
                flex-direction column
                justify-content center
                align-items center
                /*background-color #888*/
                height 500px
                width 33.33333%
                padding 0 50px

                .logo__fade
                    /*position absolute*/
                    height 100%
                    width 100%
                    /*background-color #8f9292*/
                    opacity 0.1

                .logo__wrap
                    height 250px
                    margin-bottom 20px

                    img
                        height auto

                    .logo__apple
                        width 190px

                    .logo__windows
                        width 190px

                    .logo__linux
                        width 230px

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
                    margin-bottom 36px

                .button__download
                    cursor pointer
                    color #34343e
                    font-family MuseoSansCyrl500
                    font-weight 500
                    background-color #ffd24f
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

</style>