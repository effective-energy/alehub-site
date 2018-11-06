<template>
    <div class="section-represent">
        <v-layout justify-center
                  row>
            <v-flex>
                <background-title-represent class="background-title-center"/>
            </v-flex>
        </v-layout>
        <v-layout class="layout-represent"
                  row
                  wrap>
            <v-flex class="increase-z"
                    xs12
                    sm12
                    md4 offset-md1
                    lg4 offset-lg1
                    xl4 offset-xl1>
                <title-represent :title="title"/>
            </v-flex>
            <v-flex class="increase-z"
                    xs12
                    sm12
                    md6 offset-md1
                    lg6 offset-lg1
                    xl6 offset-xl1>
                <text-represent :text="text"/>
            </v-flex>
            <!--<line-vertical/>-->
            <!--<line-vertical/>-->
        </v-layout>
    </div>
</template>

<script>
    import TitleRepresent from '../layouts/section-represent/TitleRepresent';
    import TextRepresent from '../layouts/section-represent/TextRepresent';
    import BackgroundTitleRepresent from '../layouts/section-represent/BackgroundTitleSlogan';
    import LineVertical from '../layouts/section-represent/LineVertical';

    export default {
        name: 'SectionRepresent',
        components: {
            TitleRepresent,
            TextRepresent,
            BackgroundTitleRepresent,
            LineVertical
        },
        data: () => ({
            title: 'Alehub инновация в мире управления',
            text: 'Первая в мире децентрализованная платформа для управления проектами и поиска подрядчиков в сфере IT и Hi Tech.'
        })
    }
</script>

<style lang="stylus" scoped>
    .layout-represent
        @media (min-width 0)
            height auto
            align-items flex-start

        @media (min-width 600px)
            height auto
            align-items flex-start

        @media (min-width 960px)
            height 100%
            align-items center

        @media (min-width 1264px)
            height 100%
            align-items center

    .background-title-center
        top "calc(50% - %s)" % 75px

    .full-height
        height 100%

    .increase-z
        z-index 2

    .section-represent
        height 80vh
        color white
        position relative

        @media (min-width 0)
            height 100vh

        @media (min-width 600px)
            height 100vh

        @media (min-width 960px)
            height 80vh

        @media (min-width 1264px)
            height 80vh

</style>