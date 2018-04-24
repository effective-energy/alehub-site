<template>
    <div class="team">
        <div class="our-team" id="team">

            <h3 class="title">
                Our team
            </h3>

            <div class="separator">
            </div>

            <div class="serokell"
                 style="display: flex; flex-direction: column; justify-content: center; align-items: center">
                <p style="margin-bottom: 30px; font-size: 20px;">
                    Serokell
                </p>
                <div class="images" style="display: flex; flex-wrap: wrap;">
                    <div class="image"
                         style=""
                         v-for="(member, i) in team.serokell"
                         :style="{ 'background-color': (i % 2 === 0) ? '#e8ebef' : '#abb8c6' }">
                        <img :src="member.src" alt="">
                        <!--<div class="hover">-->
                            <!--asd-->
                        <!--</div>-->
                    </div>
                </div>
            </div>

            <div class="effective-energy"
                 style="display: flex; flex-direction: column; justify-content: center; align-items: center">

                <p style="margin-bottom: 50px; font-size: 20px;">
                    Effective Energy team
                </p>
                <div class="images" style="display: flex; flex-wrap: wrap; justify-content: center;">
                    <div class="image"
                         style=""
                         v-for="(member, i) in team.energy"
                         :style="{ 'background-color': (i % 2 === 0) ? '#e8ebef' : '#abb8c6' }">
                        <img :src="member.src" alt="">
                    </div>
                </div>
            </div>

        </div>
        <div class="advisors" id="advisors">
            <h3 class="title">
                Advisors
            </h3>

            <div class="separator" style="margin-bottom: 50px;">
            </div>

            <div class="advisors-team">
                <div class="images" style="display: flex; flex-wrap: wrap; justify-content: center;">
                    <div class="image"
                         style=""
                         v-for="(member, i) in team.advisors"
                         :style="{ 'background-color': (i % 2 === 0) ? '#e2e8e8' : '#abb8c6' }">
                        <img :src="member.src" alt="">
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
            width 76px
            height 2px
            margin 25px 0
            background-color #34343e

        .serokell, .effective-energy, .advisors-team
            margin-bottom 60px
            .image
                margin 0 15px 30px 15px
                padding 20px 40px 0 40px
                height 304px
                width 304px
                overflow hidden
                text-align center
                img
                    height 284px
                    width auto
                    margin auto

            .hover
                display none

            .image:hover > .hover
                position absolute
                display block

</style>