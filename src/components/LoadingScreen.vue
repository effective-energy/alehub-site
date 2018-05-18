<template>
    <div id="loading-screen" class="loading-screen">

        <div class="wrap-loader">
            <div class="logo-block">
                <div class="logo-block__wrap">

                    <h3 class="logo-block__logo">
                        Alehub
                    </h3>
                </div>
            </div>

            <svg class="spinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="24" fill="none" stroke-width="1"></circle>
            </svg>

            <div class="tmp-blocker" v-if="!isXSMobile">
            </div>

            <!--<circle-slider v-if="!isXSMobile"-->
                           <!--v-model="loadValue"-->
                           <!--circle-color="#dedfe1"-->
                           <!--progress-color="#ffd24f"-->
                           <!--knob-color="#ffd24f"-->
                           <!--:side="sizeSideCircleSlider"-->
                           <!--:min="1"-->
                           <!--:max="100"-->
                           <!--:step-size="1"-->
                           <!--:circle-width="3"-->
                           <!--:progress-width="7"-->
                           <!--:knob-radius="6"-->
                           <!--style="position: absolute; z-index: 2;"-->
                           <!--class="circle-loader">-->
            <!--</circle-slider>-->

            <div class="xs-load-band" v-else>
                <div class="xs-loader">
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'LoadingScreen',
        data() {
            return {
                loadValue: 0,
                loadingInterval: null,
                closeAnimation: false
            }
        },
        computed: {
            ...mapGetters([
                'cryptoPriceStatus'
            ]),
            //добавить проверку на то, действительно ли человек сидит с мобильника (по клиенту браузера и ОСИ)
            isMobile: function () {
                return window.innerWidth <= 425;
            },
            isXSMobile: function () {
                return window.innerWidth <= 300;
            },
            sizeSideCircleSlider: function () {
                if (window.innerWidth > 425)
                    return 350;
                else if (window.innerWidth > 375 && window.innerWidth <= 425)
                    return 300;
                else if (window.innerWidth >= 320 && window.innerWidth <= 375)
                    return 250;
            },
        },
        methods: {

            // doProcessLoading: function () {
            //     this.loadingInterval = setInterval(() => {
            //         this.loadValue = this.loadValue + 2;
            //
            //         if (this.loadValue === 80) {
            //             //сделать тут отключение анимации и начало исчезновения свг
            //         }
            //
            //         if (this.loadValue === 100) {
            //                 clearInterval(this.loadingInterval);
            //
            //                 // this.closeAnimation = true;
            //
            //             setTimeout(() => {
            //
            //                 //если мобильник или планшет - то никаких подобных анимаций
            //                 if (!this.isMobile) {
            //                     document.getElementById('loading-screen').addEventListener('transitionend', () => {
            //                         this.$parent.$emit('endOfLoadingWideScreen', true);
            //                     });
            //                     document.getElementById('loading-screen').style['opacity'] = 0;
            //                 } else {
            //                     this.$parent.$emit('endOfLoadingNarrowScreen', true);
            //                 }
            //                 this.$parent.$emit('isShow', true);
            //
            //             }, 40);
            //         }
            //
            //     }, 10);
            // },
        },
        mounted() {

            // if (document.querySelector('.logo-block__logo') && !this.isXSMobile)
            //     document.querySelector('.logo-block__logo').style['color'] = '#dcdcdc';

            if (document.querySelector('.xs-loader') && this.isXSMobile) {
                setTimeout(() => {
                    document.querySelector('.xs-loader').style['width'] = '100%';
                }, 40);
            }

            // this.doProcessLoading();

            // if (!this.isMobile)
            //     this.startAnimate();
        }
    }
</script>

<style lang="stylus" scoped>
    .spinner
        animation rotate 3s linear infinite
        z-index 2
        position absolute
        width 400px
        height 400px

        & .path
            stroke #ffd24f
            stroke-linecap round
            animation dash 2.5s ease-in-out infinite

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -75;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -150;
        }
    }



    .loading-screen
        position fixed
        background-color #343a49
        width 100%
        height 100vh
        opacity 1
        -webkit-transition opacity .85s ease-out
        transition opacity .85s ease-out
        z-index 9999

        .anim
            width 100%
            height 100vh
            position absolute

        .wrap-loader
            display flex
            justify-content center
            align-items center
            height 100%
            width 100%

            .tmp-blocker
                width 360px
                height 360px
                position absolute
                z-index 5
                margin-bottom 7px

                @media (min-width 375px) and (max-width 420px)
                    width 310px
                    height 310px

                @media (min-width 320px) and (max-width 375px)
                    width 260px
                    height 260px

            .logo-block
                display flex
                flex-direction row
                justify-content center
                align-items center
                flex-wrap wrap
                width 350px
                height 350px
                border 1px solid #343a49
                border-radius 50%
                margin-bottom 7px
                background #343a49
                z-index 2

                @media (min-width 375px) and (max-width 420px)
                    width 300px
                    height 300px

                @media (min-width 320px) and (max-width 375px)
                    width 250px
                    height 250px

                @media (max-width 300px)
                    width 100%
                    height 200px
                    background transparent
                    margin-bottom 0
                    border-radius 0
                    border none
                    border-bottom 2px solid #ffd24f

                .logo-block__wrap
                    padding-top 30px
                    width 100%
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center

                    @media (max-width 300px)
                        padding-top 20px

                    .logo-block__logo
                        font-family Fairview
                        font-size 60px
                        //color #343a49
                        color #dcdcdc
                        text-transform uppercase
                        -webkit-transition color 4.2s cubic-bezier(1, 0, .6, .65)
                        transition color 4.2s cubic-bezier(1, 0, .6, .65)

                        @media (min-width 320px) and (max-width 375px)
                            font-size 50px

                        @media (max-width 300px)
                            font-size 48px
                            color #dcdcdc

                    .logo-block__percent
                        font-family MuseoSansCyrl500
                        font-weight 500
                        font-size 20px
                        color #dcdcdc
                        text-align center
                        width 100%
                        margin 0

                        @media (min-width 320px) and (max-width 375px)
                            font-size 16px
                            margin-top 20px

            .xs-load-band
                position absolute
                left 0
                width 100%
                height 20px
                bottom calc(50% - 100px)
                background-color #62626d

                .xs-loader
                    height 100%
                    width 0
                    background-color #ffd24f
                    -webkit-transition width 4.5s cubic-bezier(1, 0, .6, .65)
                    transition width 4.5s cubic-bezier(1, 0, .6, .65)
</style>