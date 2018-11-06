<template>
    <div class="sections-team-serokell">
        <v-layout align-center fill-height row>
            <v-flex xs12>
                <slider-team :autoplay="sliderOptions.autoplay"
                             :autoplay-delay="sliderOptions.autoplayDelay"
                             :touch="sliderOptions.touch"
                             :drag="sliderOptions.drag"
                             :num-img-xs="sliderOptions.numImgXs"
                             :num-img-md="sliderOptions.numImgMd"
                             :num-img-lg="sliderOptions.numImgLg"
                             :members="sliderOptions.members"/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import TitleSection from '../layouts/text/Title1Section';
    import SliderTeam from '../layouts/section-team/SliderTeam';

    export default {
        name: 'SectionsTeamSerokell',
        components: {
            TitleSection,
            SliderTeam
        },
        data: () => ({
            sliderOptions: {
                autoplay: false,
                autoplayDelay: 3000,
                touch: true,
                drag: false,
                numImgXs: 1,
                numImgMd: 1,
                numImgLg: 2,
                members: [
                    [
                        {
                            name: 'Арсений Серока',
                            position: 'Ведущий разработчик Serokell',
                            team: 'Serokell',
                            linkedin: ''
                        },
                        {
                            name: 'Александр Рукин',
                            position: 'UI/UX дзиайнер',
                            team: 'Serokell',
                            linkedin: ''
                        },
                    ],
                    [
                        {
                            name: 'Йон Мостовой',
                            position: 'Ведущий разработчик Serokell',
                            team: 'Serokell',
                            linkedin: ''
                        },
                        {
                            name: 'Кирилл Елагин',
                            position: 'Исполнительный директор',
                            team: 'Back-end разработчик',
                            linkedin: ''
                        }
                    ],
                ]
            }
        })
    }
</script>

<style lang="stylus" scoped>
    .member
        display flex
        align-items center

    .sections-team-serokell
        height 65vh

        .container
            height 100%
</style>