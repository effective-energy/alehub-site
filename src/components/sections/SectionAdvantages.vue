<template>
    <div class="section-advantages">
        <v-layout row>
            <v-flex d-flex
                    justify-center>
                <ellipse-blur/>
            </v-flex>
        </v-layout>
        <v-layout align-center
                  row
                  wrap>
            <v-flex xs12
                    sm12
                    md6
                    lg6
                    xl6>
                <title-section class="align-left"
                               :title="title"/>
            </v-flex>
            <v-flex xs12
                    sm12
                    md5 offset-md1
                    lg5 offset-lg1
                    xl5 offset-xl1>
                <v-layout column>
                    <v-flex v-for="(item, i) in items"
                            :key="i">
                        <item-advantage :src="item.src"
                                        :title="item.title"
                                        :text="item.text"/>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import EllipseBlur from '../layouts/ellipse/EllipseBlur';
    import TitleSection from '../layouts/text/Title1Section';
    import ItemAdvantage from '../layouts/section-advantages/ItemAdvantage';

    export default {
        name: 'SectionAdvantages',
        components: {
            EllipseBlur,
            TitleSection,
            ItemAdvantage
        },
        data: () => ({
            title: 'Платформа Alehub выгодна и удобна для всех!',
            items: [
                {
                    src: '../../../../static/images/icons/person/si-glyph-person-man-1.svg',
                    title: 'Для работников',
                    text: 'Открытая база компаний, честные и прозрачные сделки на смарт-контракте, ' +
                        'быстрые выплаты.'
                },
                {
                    src: '../../../../static/images/icons/person/si-glyph-person-man-2.svg',
                    title: 'Для работодателей',
                    text: 'Большая база профессиональных специалистов и прямое взаимодействие с ними, ' +
                        'минимальная комиссия толькоза совершенные сделки.'
                },
                {
                    src: '../../../../static/images/icons/person/si-glyph-person-people.svg',
                    title: 'Для инвесторов',
                    text: 'Бесплатное использование платформы, крупная база специалистов и компаний. ' +
                        'Легкий вход,высокая волантильность.'
                }
            ]
        })
    }
</script>

<style lang="stylus" scoped>
    .align-left
        text-align left

    .section-advantages
        position relative

        @media (min-width 0)
            height 120vh

        @media (min-width 600px)
            height 110vh

        @media (min-width 960px)
            height 80vh

        @media (min-width 1264px)
            height 70vh

    .increase-z
        z-index 2
</style>