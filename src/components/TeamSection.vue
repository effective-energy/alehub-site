<template>
    <div class="team"
         id="team"
         :class="{ 'direction-ltr': isRtl }">

        <div class="our-team">

            <h3 class="title">
                {{ $t("team.title") }}
            </h3>

            <div class="separator">
            </div>

            <div class="effective-energy-team"
                 id="effective-energy-team">

                <p>
                    {{ $t('team.effectiveEnergy[0].name') }}
                </p>

                <!--add static block images like serokell and advisors-->

                <slider-effective-energy :items="$t('team.effectiveEnergy[0].members')"
                                         :settings="settings.effectiveEnergy"
                                         :options="options.effectiveEnergy"
                                         :is-autoplay="isEffectiveEnergyAutoplay"
                                         :privates1="Object.assign(settings.effectiveEnergy, options.effectiveEnergy)"
                                         :multiplier-position="multiplierPosition"
                                         :num-items-in-wrap="numItemsInWrap"/>
            </div>

            <div id="serokell-team"
                 class="serokell-team">
                <p>
                    Serokell
                </p>

                <div class="images"
                     id="serokell-gallery"
                     v-if="isWideScreen">
                    <div class="image"
                         v-for="(member, i) in $t('team.serokell[0].members')"
                         :key="i">
                        <div class="image__inner">
                            <img class="layer__bottom"
                                 :src="member.src"
                                 :alt="member.name">
                            <div class="layer__top">
                                <div class="layer__text">
                                    <h3>
                                        {{ member.position }}
                                    </h3>

                                    <div class="icons"
                                         v-if="member.social !== undefined && member.length !== 0">
                                        <a target="_blank"
                                           :href="social.link"
                                           v-for="social in member.social">
                                            <img :class="{ 'in': social.type === 'linkedin' }"
                                                 src="../../static/images/in.svg"
                                                 alt="in"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="image__info">
                            <span>{{ member.name }}</span>
                        </div>
                    </div>
                </div>

                <slider-serokell v-else
                                 :items="$t('team.serokell[0].members')"
                                 :settings="settings.serokell"
                                 :options="options.serokell"
                                 :is-autoplay="isSerokellAutoplay"
                                 :privates1="Object.assign(settings.serokell, options.serokell)"
                                 :multiplier-position="multiplierPosition"
                                 :num-items-in-wrap="numItemsInWrap"/>
            </div>

        </div>
        <div class="advisors"
             id="advisors"
             v-if="true">
            <h3 class="title">
                {{$t('advisors.title')}}
            </h3>

            <div class="separator">
            </div>

            <div class="advisors-team">
                <slider-advisors :items="$t('advisors.members')"
                                 :settings="settings.advisors"
                                 :options="options.advisors"
                                 :is-autoplay="isAdvisorsAutoplay"
                                 :privates1="Object.assign(settings.advisors, options.advisors)"
                                 :multiplier-position="multiplierPosition"
                                 :num-items-in-wrap="numItemsInWrap"/>
            </div>
        </div>

        <advisor-info-modal :advisor="currentAdvisor"/>

    </div>
</template>

<script>
    import Slider from './layouts/Slider';

    import AdvisorInfoModal from './modals/AdvisorInfoModal';
    import SliderEffectiveEnergy from './layouts/SliderEffectiveEnergy';
    import SliderSerokell from './layouts/SliderSerokell';
    import SliderAdvisors from './layouts/SliderAdvisors';

    export default {
        name: 'Screen5',
        components: {
            Slider,
            AdvisorInfoModal,
            SliderEffectiveEnergy,
            SliderSerokell,
            SliderAdvisors
        },
        props: {
            isTeam: {
                type: Boolean,
                required: true
            },
            isEffectiveEnergyAutoplay: {
                type: Boolean,
                required: true
            },
            isSerokellAutoplay: {
                type: Boolean,
                required: true
            },
            isAdvisorsAutoplay: {
                type: Boolean,
                required: true
            },
            isRtl: {
                type: Boolean,
                required: true
            }
        },
        watch: {
            isTeam: function (inBlockTeam) {
                this.options.serokell.inBlockTeam = inBlockTeam;
                this.options.effectiveEnergy.inBlockTeam = inBlockTeam;
            }
        },
        data() {
            return {
                settings: {
                    effectiveEnergy: {
                        main: 'ee-js-carousel',
                        wrap: 'ee-js-carousel__wrap',
                        prev: 'ee-js-carousel__prev',
                        next: 'ee-js-carousel__next'
                    },
                    serokell: {
                        main: 's-js-carousel',
                        wrap: 's-js-carousel__wrap',
                        prev: 's-js-carousel__prev',
                        next: 's-js-carousel__next'
                    },
                    advisors: {
                        main: 'a-js-carousel',
                        wrap: 'a-js-carousel__wrap',
                        prev: 'a-js-carousel__prev',
                        next: 'a-js-carousel__next'
                    }
                },
                options: {
                    effectiveEnergy: {
                        title: 'effective',
                        touch: true,
                        inBlockTeam: false,
                        autoplayDelay: 3000,
                        pauseOnFocus: true,
                        pauseOnHover: true,
                        multiplierPosition: 25,
                        numItemsInWrap: 4
                    },
                    serokell: {
                        title: 'serokell',
                        touch: true,
                        inBlockTeam: false,
                        autoplayDelay: 3000,
                        pauseOnFocus: true,
                        pauseOnHover: true,
                        multiplierPosition: 25,
                        numItemsInWrap: 4
                    },
                    advisors: {
                        title: 'advisors',
                        touch: true,
                        inBlockTeam: false,
                        autoplayDelay: 3000,
                        pauseOnFocus: true,
                        pauseOnHover: true,
                        multiplierPosition: 25,
                        numItemsInWrap: 4
                    }
                },
                currentAdvisor: {
                    name: '',
                    position: '',
                    description: '',
                    src: '',
                    social: []
                }
            }
        },
        computed: {
            //добавить чек по типу устройства (браузера с которого заходили)
            isMobileScreen: function () {
                return window.innerWidth <= 425;
            },
            isTabletScreen: function () {
                return window.innerWidth <= 768;
            },
            isLaptopScreen: function () {
                return window.innerWidth > 768 && window.innerWidth <= 1178;
            },
            isLargeScreen: function () {
                return window.innerWidth > 1178 && window.innerWidth <= 1571;
            },
            isWideScreen: function () {
                return window.innerWidth > 1571;
            },
            numItemsInWrap: function () {
                if (window.innerWidth <= 768)
                    return 1;
                else if (window.innerWidth > 768 && window.innerWidth <= 1178)
                    return 2;
                else if (window.innerWidth > 1178 && window.innerWidth <= 1571)
                    return 3;
                else
                    return 4;
            },
            multiplierPosition: function () {
                //вынести значения ширины экрана наружу и сравнивать свичем стринги (mobile, laptop, laptopL, wideScreen)
                if (window.innerWidth <= 768)
                    return 100;
                else if (window.innerWidth > 768 && window.innerWidth <= 1178)
                    return 50;
                else if (window.innerWidth > 1178 && window.innerWidth <= 1571)
                    return 33.33333;
                else
                    return 25;
            },

        },
        methods: {
            openModal: function (name) {
                this.$modal.show(name);
            },
            openAdvisorInfoModal: function (member) {
                this.currentAdvisor = member;
                this.openModal('advisor-info-modal');
            },
        },
        created() {
            this.options.serokell.multiplierPosition = this.multiplierPosition;
            this.options.serokell.numItemsInWrap = this.numItemsInWrap;

            this.options.effectiveEnergy.multiplierPosition = this.multiplierPosition;
            this.options.effectiveEnergy.numItemsInWrap = this.numItemsInWrap;

            this.options.advisors.multiplierPosition = this.multiplierPosition;
            this.options.advisors.numItemsInWrap = this.numItemsInWrap;

        },
        mounted() {
            this.$on('openAdvisorInfoModal', (currentAdvisor) => {
                this.currentAdvisor = currentAdvisor;
                this.openModal('advisor-info-modal');
            });
        }
    }
</script>

<style lang="stylus" scoped>
    .b-carousel__prev
        margin-right 20px

    .team
        background-color #fff

        .our-team
            background-color #fff

        .our-team, .advisors
            padding 80px 7.5% 40px 7.5%
            display flex
            flex-direction column
            justify-content center
            align-items center

            @media (min-width 425px) and (max-width 768px)
                padding 80px 15% 40px 15%

            @media (max-width 425px)
                padding 80px 5% 40px 5%

            .title
                font-size 40px

        .advisors
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

        .effective-energy-team
            width 100%

        .serokell-team
            padding 60px 0

            p
                margin-bottom 50px
                font-size 20px

        .serokell-team, .effective-energy-team, .advisors-team
            width 100%
            display flex
            flex-direction column
            justify-content center
            align-items center

        .serokell-team, .advisors-team, .effective-energy-team
            .images
                width 100%
                display flex
                flex-wrap wrap
                justify-content space-around

                .image
                    cursor pointer
                    display flex
                    flex-direction column
                    align-items center
                    justify-content space-around
                    max-width 100%
                    margin 0 15px 30px 15px
                    padding 20px 40px 0 40px
                    height 400px
                    width 304px
                    overflow hidden
                    text-align center

                    &:nth-child(2n)
                        .image__inner
                            background-color #e8ebef

                    &:nth-child(2n + 1)
                        .image__inner
                            background-color #abb8c6

                    .image__inner
                        position relative
                        display flex
                        align-items flex-end
                        clip-path circle(50% at center)
                        -webkit-clip-path circle(50% at center)
                        height 304px
                        width 304px

                        &:hover
                            .layer__top
                                opacity 1

                        img
                            max-width 100%
                            height 284px
                            width auto
                            margin-left auto
                            margin-right auto

                        .layer__bottom
                            display block

                        .layer__top
                            z-index 10000
                            opacity 0
                            position absolute
                            top 0
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
                            clip-path circle(50% at center)
                            -webkit-clip-path circle(50% at center)

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

                                h3
                                    text-transform capitalize
                                    font-size 24px

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

                                    a
                                        img
                                            width 17px
                                            height 17px

                    .image__info
                        font-size 20px
                        display flex
                        flex-direction column
                        justify-content center
                        align-items center

                        div
                            img
                                height 25px

                    @media (max-width 320px)
                        position relative
                        width 180px !important
                        height 180px !important
                        margin 0

                        .layer__bottom
                            height 100% !important

                    @media (min-width 320px) and (max-width 360px)
                        position relative
                        width 200px !important
                        height 200px !important
                        margin 0

                        .layer__bottom
                            height 100% !important

                    @media (min-width 360px) and (max-width 425px)
                        position relative
                        width 220px !important
                        height 220px !important
                        margin 0

                        .layer__bottom
                            height 100% !important

                    @media (min-width 768px) and (max-width 1024px)
                        position relative
                        width 250px !important
                        height 250px !important
                        margin 0

                        .layer__bottom
                            height 100% !important

        .advisors-team
            margin-bottom 60px

            .images
                .image
                    &:nth-child(2n)
                        .image__inner
                            background-color #bbbec1 !important

    @media (max-width 425px)
        .team
            .our-team
                .title
                    font-size 30px

            .advisors
                .title
                    font-size 30px

            .separator
                margin 12px 0 24px


</style>