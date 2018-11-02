<template>
    <div class="section-represent">
        <v-container grid-list-md
                     class="full-height">
            <v-layout justify-center
                      row>
                <v-flex>
                    <background-title-slogan class="background-title-center"/>
                </v-flex>
            </v-layout>
            <v-layout class="full-height"
                      row align-center>
                <v-flex class="increase-z"
                        xs4 offset-xs1>
                    <title-slogan :title="title"/>
                </v-flex>
                <v-flex class="increase-z"
                        xs6 offset-xs1>
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
    .background-title-center
        top "calc(50% - %s)" % 75px

    .full-height
        height 100%

    .increase-z
        z-index 2

    .background-title
        position absolute

    .section-represent
        height 80vh
        color white

        .container
            position relative
</style>