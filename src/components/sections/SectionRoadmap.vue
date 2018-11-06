<template>
    <div class="section-roadmap">
        <v-layout fill-height
                  row>
            <v-flex>
                <background-title class="top-background-title"
                                  :title="titleBackground"
                                  :blue="blue"/>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex d-flex justify-center>
                <ellipse-big-blur/>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex class="increase-z">
                <title-section class="text-left"
                               :title="titleSection"/>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex class="increase-z">
                <roadmap/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import BackgroundTitle from '../layouts/background-title/BackgroundTitle';
    import TitleSection from '../layouts/text/Title1Section';
    import EllipseBigBlur from '../layouts/ellipse/EllipseBigBlur';
    import Roadmap from '../layouts/section-roadmap/Roadmap';

    export default {
        name: 'SectionRoadmap',
        components: {
            BackgroundTitle,
            TitleSection,
            EllipseBigBlur,
            Roadmap
        },
        data: () => ({
            titleBackground: 'Roadmap',
            titleSection: 'Дорожная карта',
            buttonText: 'Получить Whitepaper',
            href: 'https://alehub.io/ALEHUB_WP_rus.pdf',
            loadInfo: 'Загрузить 13.4 Mb',
            blue: false
        })
    }
</script>

<style lang="stylus" scoped>
    .increase-z
        z-index 2

    .text-left
        text-align left

    .section-roadmap
        height 140vh
        position relative
</style>