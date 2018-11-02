<template>
    <div class="section-advantages">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl>
            <v-layout row>
                <v-flex d-flex justify-center>
                    <ellipse-blur/>
                </v-flex>
            </v-layout>
            <v-layout align-center row>
                <v-flex xs6>
                    <title-section class="align-left"
                                   :title="title"/>
                </v-flex>
                <v-flex xs5 offset-xs1>
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

        </v-container>
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
        height 70vh

    .increase-z
        z-index 2
</style>