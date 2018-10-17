<template>
    <div class="section-represent">
        <background-title-slogan class="background-title"/>
        <v-container grid-list-md
                     class="section-represent-container">
            <v-layout row align-center>
                <v-flex xs4 offset-xs1>
                    <title-slogan :title="title"/>
                </v-flex>
                <v-flex xs6 offset-xs1>
                    <text-slogan :text="text"/>
                </v-flex>
                <line-vertical/>
                <line-vertical/>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TitleSlogan from '../layouts/section-represent/TitleRepresent';
    import TextSlogan from '../layouts/section-represent/TextRepresent';
    import BackgroundTitleSlogan from '../layouts/section-represent/BackgroundTitleSlogan';
    import LineVertical from '../layouts/section-represent/LineVertical';

    export default {
        name: 'SectionRepresent',
        components: {
            TitleSlogan,
            TextSlogan,
            BackgroundTitleSlogan,
            LineVertical
        },
        data: () => ({
            title: 'Alehub инновация в мире управления',
            text: 'Первая в мире децентрализованная платформа для управления проектами и поиска подрядчиков в сфере IT и Hi Tech.'
        })
    }
</script>

<style lang="stylus" scoped>
    .background-title
        position absolute

    .section-represent
        height 100vh
        background-color #020449
        color white

        .section-represent-container
            z-index 2
            position relative
            height 100%

            .layout
                height 100%
</style>