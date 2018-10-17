<template>
    <div class="section-slogan">
        <background-title-slogan class="background-title"/>
        <v-container grid-list-md
                     class="parent-z">
            <v-layout row>
                <v-flex xs5 offset-xs1>
                    <title-slogan :title="title"/>
                </v-flex>
                <v-flex>
                    <text-slogan :text="text"/>
                </v-flex>
                <line-vertical/>
                <line-vertical/>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TitleSlogan from '../layouts/section-slogan/TitleSlogan';
    import TextSlogan from '../layouts/section-slogan/TextSlogan';
    import BackgroundTitleSlogan from '../layouts/section-slogan/BackgroundTitleSlogan';
    import LineVertical from '../layouts/section-slogan/LineVertical';

    export default {
        name: 'SectionSlogan',
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

    .parent-z
        z-index 2
        position relative

    .section-slogan
        height 100vh
        background-color #020449
        color white
</style>