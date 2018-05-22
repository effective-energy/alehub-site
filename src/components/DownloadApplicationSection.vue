<template>
    <div class="download-app" id="download-application">
        <h3 class="title">
            {{ $t('download') }}
        </h3>
        <div class="separator"></div>
        <div class="loading-block"
             v-if="downloadAppStatus === 'loading'">
            <spinner/>
        </div>
        <div class="error-block"
             v-if="downloadAppStatus === 'error'">
            <p>{{$t('serverErr')}}</p>
        </div>
        <div class="os-avail-list" v-if="downloadAppStatus === 'success'">
            <div class="logo" v-for="app in apps">
                <div class="logo__wrap">
                    <img class="logo__apple"
                         alt="logo"
                         :src="getPlatformLogo(app.platformName)">
                </div>
                <h4 class="logo__title">
                    {{ app.platformName }}
                </h4>
                <p class="version">
                    Version {{ app.version }}
                </p>
                <p class="bit">
                    {{ app.capacity }}-bit
                </p>
                <p class="release" v-if="!app.isPublish">
                    Coming soon
                </p>
                <p class="release" v-if="app.isPublish">
                    {{ parseDate(app.releaseDate) }}
                </p>
                <a :href="'https://alehub.io/wallet/'+app.downloadLink"
                   v-if="app.isPublish">
                    <button onclick="yaCounter48802643.reachGoal('DownloadWallet'); return true;"
                            type="button"
                            class="button button__download">
                        {{$t('download')}}
                    </button>
                </a>
            </div>
        </div>
        <div class="os-avail-list">
            <div class="logo">
                <div class="logo__wrap">
                    <img class="logo__apple"
                         alt="logo"
                         src="../../static/images/android.svg">
                </div>
                <h4 class="logo__title">
                    Android
                </h4>
                <p class="version">
                    Version 0.0.1
                </p>
                <p class="release">
                    22.05.2018
                </p>
                <a href="https://alehub.io/wallet/alehub.apk">
                    <button onclick="yaCounter48802643.reachGoal('DownloadWallet'); return true;"
                            type="button"
                            class="button button__download">
                        {{$t('download')}}
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import Moment from 'moment';
    import Spinner from './layouts/Spinner';

    import {mapGetters} from 'vuex';

    export default {
        name: 'DownloadApplicationClient',
        components: {
            Spinner
        },
        computed: {
            ...mapGetters(
                [
                    'apps',
                    'downloadAppStatus'
                ]
            )
        },
        methods: {
            parseDate(date) {
                return Moment(date).format('DD.MM.YYYY')
            },
            getPlatformLogo(platform) {
                if (platform === 'macOS') {
                    return require('../../static/images/logo/macOS.svg');
                } else if (platform === 'Windows') {
                    return require('../../static/images/logo/windows.svg');
                } else {
                    return require('../../static/images/logo/linux.svg');
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .loading-block
        margin-top 50px

        img
            width 70px
            height 70px

    .download-app
        background-color #f5f5f7
        height 100%
        min-height 100vh
        width 100%
        padding 80px 20%
        display flex
        flex-direction column
        justify-content center
        align-items center

        @media (max-width 1024px)
            padding 80px 10%
            height auto

        @media (min-width 1024px) and (max-width 1440px)
            padding 80px 15%

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

                &:last-child
                    .logo__wrap
                        img
                            margin-top 30px

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