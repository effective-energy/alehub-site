<template>
    <div class="team">
        <div class="our-team" id="team">

            <h3 class="title">
                Our team
            </h3>

            <div class="separator">
            </div>

            <div class="serokell">
                <p>Serokell</p>

                <div class="images">
                    <div class="image"
                         v-for="(member, i) in team.serokell" :key="i"
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

                                <div class="icons">
                                    <img class="telegram" src="../../static/images/telegram-ic.svg" alt="telegram">
                                    <img class="vk" src="../../static/images/vk.svg" alt="vk">
                                    <img class="fb" src="../../static/images/fb.svg" alt="fb">
                                    <img class="in" src="../../static/images/in.svg" alt="in">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="effective-energy">
                <p>Effective Energy team</p>

                <div class="container">
                    <swiper :options="swiperOption">
                        <swiper-slide
                            class="image"
                            v-for="(member, i) in team.energy" :key="i"
                            :style="{ 'background-color': (i % 2 === 0) ? '#e8ebef' : '#abb8c6' }">

                            <img class="layer__bottom" :src="member.src" :alt="member.name" />
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="images" v-if="false">
                    <div class="image"
                         style=""
                         v-for="(member, i) in team.energy" :key="i"
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

                                <div class="icons">
                                    <img class="telegram" src="../../static/images/telegram-ic.svg" alt="telegram">
                                    <img class="vk" src="../../static/images/vk.svg" alt="vk">
                                    <img class="fb" src="../../static/images/fb.svg" alt="fb">
                                    <img class="in" src="../../static/images/in.svg" alt="in">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="advisors" id="advisors">
            <h3 class="title">
                Advisors
            </h3>

            <div class="separator">
            </div>

            <div class="advisors-team">
                <div class="images">
                    <div class="image"
                         style=""
                         v-for="(member, i) in team.advisors" :key="i"
                         :style="{ 'background-color': (i % 2 === 0) ? '#e2e8e8' : '#abb8c6' }">

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

                                <div class="icons">
                                    <img class="telegram" src="../../static/images/telegram-ic.svg" alt="telegram">
                                    <img class="vk" src="../../static/images/vk.svg" alt="vk">
                                    <img class="fb" src="../../static/images/fb.svg" alt="fb">
                                    <img class="in" src="../../static/images/in.svg" alt="in">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screen5',
        data() {
            return {
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                    slidesPerGroup: 4,
                    loop: true,
                    centeredSlides: true,
                    breakpoints: {
                        1024: { slidesPerView: 4 },
                        768: { slidesPerView: 3 },
                        640: { slidesPerView: 2 },
                        320: { slidesPerView: 1 }
                    }
                },
                team: {
                    serokell: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../../static/images/avatars/seroka@3x.png'
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../../static/images/avatars/rukin@3x.png'
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../../static/images/avatars/elagin@3x.png'
                        }
                    ],
                    energy: [
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../../static/images/avatars/gromyko@3x.png'
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Blockchain Expert',
                            src: '../../static/images/avatars/grudinin@3x.png'
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Chief Operating Officer',
                            src: '../../static/images/avatars/osipenko@3x.png'
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../../static/images/avatars/elena@3x.png'
                        },
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Marketing Officer',
                            src: '../../static/images/avatars/loktev@3x.png'
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../../static/images/avatars/levashow@3x.png'
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../../static/images/avatars/dudin@3x.png'
                        },
                        {
                            name: 'Alexander Voroncov',
                            position: 'Fullstack Developer',
                            src: '../../static/images/avatars/voroncov@3x.png'
                        },
                        {
                            name: 'Denis Tikhonov',
                            position: 'Frontend Developer',
                            src: '../../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Galina Sergeeva',
                            position: 'Frontend Developer',
                            src: '../../static/images/avatars/elagin@3x.png'
                        },
                        {
                            name: 'Dmitry Zhuravlev',
                            position: 'Mobile developer',
                            src: '../../static/images/avatars/zhuravlev@3x.png'
                        },
                    ],
                    advisors: [
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../../static/images/avatars/gromyko@3x.png'
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Blockchain Expert',
                            src: '../../static/images/avatars/grudinin@3x.png'
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Chief Operating Officer',
                            src: '../../static/images/avatars/osipenko@3x.png'
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../../static/images/avatars/elena@3x.png'
                        },
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Marketing Officer',
                            src: '../../static/images/avatars/loktev@3x.png'
                        }
                    ]
                }
            }
        }
    }
</script>

<style>
    @media screen and (min-width: 1300px) {
        .swiper-container {
            width: 1300px;
            margin-left: -100px;
        }

        .swiper-slide {
            width: 25%!important;
        }
    }
    /*@media screen and (max-width: 800px) {
        .swiper-slide {
            width: 300px!important;
        }
    }*/
</style>

<style lang="stylus" scoped>

    .team
        background-color #ffffff
        .our-team
            padding 80px 5% 40px 5%
            display flex
            flex-direction column
            justify-content center
            align-items center
            background-color #ffffff

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
            p
                margin-bottom 50px
                font-size 20px

        .serokell
            p
                margin-bottom 30px
                font-size 20px

        .serokell, .effective-energy, .advisors-team
            display flex
            flex-direction column
            justify-content center
            align-items center
            margin-bottom 60px

            .images
                display flex
                flex-wrap wrap
                justify-content center

            .image,
            .image *
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
                    top 65%
                    left 50%
                    -moz-transform translate(-50%, -50%)
                    -webkit-transform translate(-50%, -50%)
                    -ms-transform translate(-50%, -50%)
                    transform translate(-50%, -50%)

                    .h3
                        font-weight 700
                        font-size 24px

                    .p
                        font-size 14px
                        margin-bottom 25px

                    .icons
                        width 100%
                        display flex
                        justify-content space-around

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

</style>