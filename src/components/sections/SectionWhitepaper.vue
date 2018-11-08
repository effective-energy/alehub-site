<template>
    <div class="section-whitepaper">
            <v-layout row>
                <v-flex>
                    <background-title class="top-background-title"
                                      :title="title"
                                      :blue="blue"/>
                </v-flex>
            </v-layout>
            <v-layout fill-height
                      align-center>
                <v-flex class="increase-z">
                    <v-layout>
                        <v-flex>
                            <title-section class="text-left"
                                           :title="title"/>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex>
                            <div class="button-wrapper">
                                <a target="_blank"
                                   :href="href">
                                    <button-rounded>
                                        {{ buttonText }}
                                    </button-rounded>
                                </a>
                            </div>
                        </v-flex>
                    </v-layout>
                    <div class="load-info-wrapper">
                        <p class="load-info">
                            {{ loadInfo }}
                        </p>
                    </div>
                </v-flex>
            </v-layout>
    </div>
</template>

<script>
    import BackgroundTitle from '../layouts/background-title/BackgroundTitle';
    import TitleSection from '../layouts/text/Title1Section';
    import ButtonRounded from '../layouts/buttons/ButtonRounded';

    export default {
        name: 'SectionWhitepaper',
        components: {
            BackgroundTitle,
            TitleSection,
            ButtonRounded
        },
        data: () => ({
            title: 'Whitepaper',
            buttonText: 'Получить Whitepaper',
            href: 'https://alehub.io/ALEHUB_WP_rus.pdf',
            loadInfo: 'Загрузить 13.4 Mb',
            blue: false
        })
    }
</script>

<style lang="stylus" scoped>
    .top-background-title
        top 15%

    .container
        height 100%

    .load-info-wrapper
        padding-left 57px

    .text-left
        text-align left

    .load-info
        margin-top 24px
        opacity .48
        font-family MuseoSansCyrl300
        font-size 12px
        line-height 1.33
        text-align left
        color #ffffff

        @media (min-width 0)
            margin-top 12px

        @media (min-width 600px)
            margin-top 16px

        @media (min-width 960px)
            margin-top 18px

        @media (min-width 1264px)
            margin-top 24px

    .button-wrapper
        @media (min-width 0)
            margin-top 30px
            width 100%

        @media (min-width 600px)
            margin-top 50px
            width 250px

        @media (min-width 960px)
            margin-top 60px
            width 300px

        @media (min-width 1264px)
            margin-top 80px
            width 400px

    .increase-z
        z-index 2

    .section-whitepaper
        height 70vh
        position relative
</style>