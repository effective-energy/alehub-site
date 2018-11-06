<template>
    <div class="sections-team">
        <v-layout justify-center fill-height column>
            <v-flex>
                <v-layout row>
                    <v-flex>
                        <title-section :title="title"/>
                    </v-flex>
                </v-layout>

                <v-layout row style="margin-top: 48px;">
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
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import TitleSection from '../layouts/text/Title1Section';
    import SliderTeam from '../layouts/section-team/SliderTeam';

    export default {
        name: 'SectionTeam',
        components: {
            TitleSection,
            SliderTeam
        },
        data: () => ({
            title: 'Наша команда',
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
                            name: 'Егор Локтев',
                            position: 'Генеральный директор',
                            team: 'Effective Energy',
                            linkedin: ''
                        },
                        {
                            name: 'Владимир Грудинин',
                            position: 'Доцент кафедры сетевых и облачных технологий университета ITMO ',
                            team: 'Effective Energy',
                            linkedin: ''
                        },
                    ],
                    [
                        {
                            name: 'Михаил Громыко',
                            position: 'Инвестиционный директор',
                            team: 'Effective Energy',
                            linkedin: ''
                        },
                        {
                            name: 'Алексей Осипенко',
                            position: 'Исполнительный директор',
                            team: 'Effective Energy',
                            linkedin: ''
                        }
                    ],
                    [
                        {
                            name: 'Антон Беляков',
                            position: 'Исследователь',
                            team: 'Effective Energy',
                            linkedin: ''
                        },
                        {
                            name: 'Илья Шилов',
                            position: 'Технический директор',
                            team: 'Effective Energy',
                            linkedin: ''
                        }
                    ],
                    [
                        {
                            name: 'Арсений Войтенко',
                            position: 'Менеджер',
                            team: 'Effective Energy',
                            linkedin: ''
                        },
                        {
                            name: 'Артём Левашов',
                            position: 'Юрист',
                            team: 'Effective Energy',
                            linkedin: ''
                        }
                    ]
                ]
            }
        })
    }
</script>

<style lang="stylus" scoped>
    .sections-team
        height 80vh
        position relative

        .container
            height 100%
</style>