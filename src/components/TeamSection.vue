<template>
    <div class="team"
         id="team"
         :class="{ 'direction-ltr': isRtl }">

        <div class="our-team">

            <h3 class="title">
                {{$t("team.title")}}
            </h3>

            <div class="separator">
            </div>

            <div class="serokell">
                <p>
                    Serokell
                </p>


                <div class="images"
                     id="serokell-gallery"
                     v-if="isWideScreen">
                    <div class="image"
                         v-for="(member, i) in $t('team.serokell[0].members')"
                         :key="i"
                         :style="{ 'background-color': (i % 2 === 0) ? '#e8ebef' : '#abb8c6' }">
                        <img class="layer__bottom"
                             :src="member.src"
                             :alt="member.name">
                        <div class="layer__top">
                            <div class="layer__text">
                                <h3>
                                    {{ member.name }}
                                </h3>
                                <p>
                                    {{ member.position }}
                                </p>

                                <div class="icons" v-if="member.social !== undefined && member.length !== 0">
                                    <a :href="social.link" v-for="social in member.social" target="_blank">
                                        <img :class="{ 'in': social.type === 'linkedin' }"
                                             src="../../static/images/in.svg"
                                             alt="in"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <slider v-else
                        :items="$t('team.serokell[0].members')"
                        :settings="settings.serokell"
                        :options="options.serokell"
                        :privates1="Object.assign(settings.serokell, options.serokell)"
                        :multiplier-position="multiplierPosition"
                        :num-items-in-wrap="numItemsInWrap"/>
            </div>

            <div class="effective-energy">
                <p>{{$t('team.effectiveEnergy[0].name')}}</p>

                <slider :items="$t('team.effectiveEnergy[0].members')"
                        :settings="settings.effectiveEnergy"
                        :options="options.effectiveEnergy"
                        :privates1="Object.assign(settings.effectiveEnergy, options.effectiveEnergy)"
                        :multiplier-position="multiplierPosition"
                        :num-items-in-wrap="numItemsInWrap"/>
            </div>
        </div>
        <div class="advisors" id="advisors" v-if="true">
            <h3 class="title">
                {{$t('advisors.title')}}
            </h3>

            <div class="separator">
            </div>

            <div class="advisors-team">
                <div class="images"
                     v-if="isWideScreen || $t('advisors.members').length === 1">
                    <div class="image"
                         v-for="(member, i) in $t('advisors.members')" :key="i"
                         :style="{ 'background-color': (i % 2 === 0) ? '#e2e8e8' : '#abb8c6' }">
                        <img class="layer__bottom"
                             :src="$t('advisors.members['+i+'].src')"
                             :alt="member.name">
                        <div class="layer__top">
                            <div class="layer__text">
                                <h3>
                                    {{ member.name }}
                                </h3>
                                <p>
                                    {{ member.position }}
                                </p>

                                <div class="icons" v-if="member.social !== undefined && member.length !== 0">
                                    <a :href="social.link" v-for="social in member.social" target="_blank">
                                        <img :class="{ 'in': social.type === 'linkedin' }"
                                             src="../../static/images/in.svg"
                                             alt="in"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <slider v-else
                        :items="$t('advisors.members')"
                        :settings="settings.advisors"
                        :options="options.advisors"
                        :privates1="Object.assign(settings.advisors, options.advisors)"
                        :multiplier-position="multiplierPosition"
                        :num-items-in-wrap="numItemsInWrap"/>

            </div>
        </div>
    </div>
</template>

<script>
    import TinySlider from 'vue-tiny-slider';
    import Slider from './layouts/Slider';

    export default {
        name: 'Screen5',
        components: {
            TinySlider,
            Slider
        },
        props: {
            isTeam: {
                type: Boolean,
                required: true
            },
            isRtl: {
                type: Boolean,
                required: true
            }
        },
        watch: {
            'isTeam': function (inBlockTeam) {
                this.options.serokell.inBlockTeam = inBlockTeam;
                this.options.effectiveEnergy.inBlockTeam = inBlockTeam;
            }
        },
        data() {
            return {
                settings: {
                    serokell: {
                        main: 's-js-carousel',
                        wrap: 's-js-carousel__wrap',
                        prev: 's-js-carousel__prev',
                        next: 's-js-carousel__next'
                    },
                    effectiveEnergy: {
                        main: 'ee-js-carousel',
                        wrap: 'ee-js-carousel__wrap',
                        prev: 'ee-js-carousel__prev',
                        next: 'ee-js-carousel__next'
                    },
                    advisors: {
                        main: 'a-js-carousel',
                        wrap: 'a-js-carousel__wrap',
                        prev: 'a-js-carousel__prev',
                        next: 'a-js-carousel__next'
                    }
                },
                options: {
                    serokell: {
                        touch: true,
                        autoplay: false,
                        inBlockTeam: false,
                        autoplayDelay: 3000,
                        pauseOnFocus: true,
                        pauseOnHover: true,
                        multiplierPosition: 25,
                        numItemsInWrap: 4
                    },
                    effectiveEnergy: {
                        touch: true,
                        autoplay: false,
                        inBlockTeam: false,
                        autoplayDelay: 3000,
                        pauseOnFocus: true,
                        pauseOnHover: true,
                        multiplierPosition: 25,
                        numItemsInWrap: 4
                    },
                    advisors: {
                        touch: true,
                        autoplay: false,
                        inBlockTeam: false,
                        autoplayDelay: 3000,
                        pauseOnFocus: true,
                        pauseOnHover: true,
                        multiplierPosition: 25,
                        numItemsInWrap: 4
                    }
                }
            }
        },
        computed: {
            //добавить чек по типу устройства (браузера с которого заходили)
            isMobileScreen: function () {
                return window.innerWidth <= 425;
            },
            isTabletScreen: function () {
                return window.innerWidth <= 785;
            },
            isLaptopScreen: function () {
                return window.innerWidth > 785 && window.innerWidth <= 1178;
            },
            isLargeScreen: function () {
                return window.innerWidth > 1178 && window.innerWidth <= 1571;
            },
            isWideScreen: function () {
                return window.innerWidth > 1571;
            },
            numItemsInWrap: function () {
                if (window.innerWidth <= 785)
                    return 1;
                else if (window.innerWidth > 785 && window.innerWidth <= 1178)
                    return 2;
                else if (window.innerWidth > 1178 && window.innerWidth <= 1571)
                    return 3;
                else
                    return 4;
            },
            multiplierPosition: function () {
                //вынести значения ширины экрана наружу и сравнивать свичем стринги (mobile, laptop, laptopL, wideScreen)
                if (window.innerWidth <= 785)
                    return 100;
                else if (window.innerWidth > 785 && window.innerWidth <= 1178)
                    return 50;
                else if (window.innerWidth > 1178 && window.innerWidth <= 1571)
                    return 33.33333;
                else
                    return 25;
            },

        },
        methods: {},
        created() {
            this.options.serokell.multiplierPosition = this.multiplierPosition;
            this.options.serokell.numItemsInWrap = this.numItemsInWrap;

            this.options.effectiveEnergy.multiplierPosition = this.multiplierPosition;
            this.options.effectiveEnergy.numItemsInWrap = this.numItemsInWrap;

            this.options.advisors.multiplierPosition = this.multiplierPosition;
            this.options.advisors.numItemsInWrap = this.numItemsInWrap;

        },
        mounted() {
            // document.getElementById('effective-energy').style.width = document.getElementById('serokell-gallery').offsetWidth + 'px';
        }
    }
</script>

<style lang="stylus" scoped>
    .b-carousel__prev
        margin-right 20px

    .team
        background-color #fff

        .our-team
            padding 80px 7.5% 40px 7.5%
            display flex
            flex-direction column
            justify-content center
            align-items center
            background-color #fff

            @media (min-width 650px) and (max-width 785px)
                padding 80px 20% 40px 20%

            @media (min-width 490px) and (max-width 650px)
                padding 80px 15% 40px 15%

            @media (max-width 490px)
                padding 80px 10% 40px 10%

            @media (max-width 490px)
                padding 80px 5% 40px 5%

            .title
                font-size 40px

        .advisors
            padding 80px 5% 40px 5%
            display flex
            flex-direction column
            justify-content center
            align-items center
            background-color #ececf0

            .title
                font-size 40px

            .separator
                margin-bottom 50px

        .separator
            width 76px
            height 2px
            margin 25px 0
            background-color #34343e

        .effective-energy
            width 100%

            .image,
            .image *
                -webkit-box-sizing border-box
                -moz-box-sizing border-box
                box-sizing border-box

            .image
                cursor pointer
                position relative
                max-width 100%
                height 304px
                overflow hidden
                text-align center

                &:hover
                    .layer__top
                        opacity 1

                img
                    max-width 100%
                    height 284px
                    width auto
                    margin auto

                .layer__bottom
                    display block

                .layer__top
                    opacity 0
                    position absolute
                    z-index 10000
                    top 0
                    left 15px
                    right 0
                    bottom 0
                    width calc(100% - 30px)
                    height 100%
                    background rgba(255, 210, 79, 0.8)
                    color #fff
                    padding 15px
                    -moz-transition all 0.4s ease-in-out 0s
                    -webkit-transition all 0.4s ease-in-out 0s
                    -ms-transition all 0.4s ease-in-out 0s
                    transition all 0.4s ease-in-out 0s

                .layer__text
                    color #34343e
                    text-align center
                    font-size 18px
                    display inline-block
                    position absolute
                    width 80%
                    top 70%
                    left 50%
                    -moz-transform translate(-50%, -50%)
                    -webkit-transform translate(-50%, -50%)
                    -ms-transform translate(-50%, -50%)
                    transform translate(-50%, -50%)

                    .h3
                        font-weight 700
                        font-size 24px

                    p
                        font-size 12px
                        margin-bottom 25px
                        text-transform uppercase
                        font-family MuseoSansCyrl500

                    .icons
                        width 100%
                        display flex
                        justify-content center

                        .telegram
                            width 18px
                            height 14.5px

                        .vk
                            width 21px
                            height 13px

                        .fb
                            width 9px
                            height 18px

                        .in
                            width 17px
                            height 17px
                        img
                            margin auto 15px

            p
                margin-bottom 50px
                font-size 20px

        .serokell
            p
                margin-bottom 50px
                font-size 20px

        .serokell, .effective-energy
            width 100%
            display flex
            flex-direction column
            justify-content center
            align-items center
            margin-bottom 60px

        .serokell
            .images
                width 100%
                display flex
                flex-wrap wrap
                justify-content space-around

        .advisors-team
            width 100%
            margin-bottom 60px

            .images
                width 100%
                justify-content center !important

        .advisors-team

            .images
                display flex
                flex-wrap wrap
                justify-content center

        .serokell, .advisors-team

            .image,
            .image *
                -webkit-box-sizing border-box
                -moz-box-sizing border-box
                box-sizing border-box

            .image
                cursor pointer
                position relative
                display inline-block
                max-width 100%
                margin 0 15px 30px 15px
                padding 20px 40px 0 40px
                height 304px
                width 304px
                overflow hidden
                text-align center

                &:hover
                    .layer__top
                        opacity 1

                img
                    max-width 100%
                    height 284px
                    width auto
                    margin auto

                .layer__bottom
                    display block

                .layer__top
                    opacity 0
                    position absolute
                    top: 0
                    left 0
                    right 0
                    bottom 0
                    width 100%
                    height 100%
                    background rgba(255, 210, 79, 0.8)
                    color #fff
                    padding 15px
                    -moz-transition all 0.4s ease-in-out 0s
                    -webkit-transition all 0.4s ease-in-out 0s
                    -ms-transition all 0.4s ease-in-out 0s
                    transition all 0.4s ease-in-out 0s

                .layer__text
                    color #34343e
                    text-align center
                    font-size 18px
                    display inline-block
                    position absolute
                    width 80%
                    top 70%
                    left 50%
                    -moz-transform translate(-50%, -50%)
                    -webkit-transform translate(-50%, -50%)
                    -ms-transform translate(-50%, -50%)
                    transform translate(-50%, -50%)

                    .h3
                        font-weight 700
                        font-size 24px

                    p
                        font-size 12px
                        margin-bottom 10px
                        text-transform uppercase
                        font-family MuseoSansCyrl500

                    .icons
                        width 100%
                        display flex
                        justify-content center

                        .telegram
                            width 18px
                            height 14.5px

                        .vk
                            width 21px
                            height 13px

                        .fb
                            width 9px
                            height 18px

                        .in
                            width 17px
                            height 17px
                        img
                            margin auto 15px

    @media (max-width: 425px)
        .team
            .our-team
                .title
                    font-size 30px

            .advisors
                .title
                    font-size 30px

            .separator
                margin 12px 0 24px


    .image
        clip-path circle(50% at center) !important
        -webkit-clip-path circle(50% at center) !important

        @media (max-width 320px)
            position relative !important
            width 220px !important
            height 220px !important
            margin 0 !important

            img
                height 100% !important

        @media (min-width 320px) and (max-width 360px)
            position relative !important
            width 250px !important
            height 250px !important
            margin 0 !important

            img
                height 100% !important

        @media (min-width 360px) and (max-width 425px)
            position relative !important
            width 300px !important
            height 300px !important
            margin 0 !important

            img
                height 100% !important

</style>