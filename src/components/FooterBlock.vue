<template>
    <div class="footer">
        <v-layout row
                  wrap
                  class="footer-layout">
            <v-flex xs12
                    sm12
                    hidden-md-and-up
                    class="z-index-2">
                <subscribe/>
            </v-flex>
            <v-flex xs12
                    sm12
                    md2
                    lg2
                    xl2
                    class="z-index-2">
                <v-layout column>
                    <v-flex hidden-sm-and-down>
                        <logo/>
                    </v-flex>
                    <v-flex hidden-sm-and-down>
                        <list-of-docs/>
                        <copyright class="footer-copyright"/>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12
                    sm12
                    md9
                    lg9
                    xl9
                    class="z-index-2">
                <v-layout class="layout-footer-menu">
                    <v-flex xs6
                            sm6
                            md12
                            lg12
                            xl12>
                        <menu-footer-top :items="menuTop"/>
                    </v-flex>
                    <v-flex xs6
                            sm6
                            md12
                            lg12
                            xl12>
                        <menu-footer-bottom :items="menuBottom"/>
                    </v-flex>
                    <v-flex hidden-sm-and-down>
                        <subscribe/>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs7
                    sm7
                    hidden-md-and-up
                    class="z-index-2">
                <list-of-docs/>
                <copyright class="footer-copyright"/>
            </v-flex>
            <v-flex d-flex
                    xs5
                    sm5
                    md1
                    lg1
                    xl1
                    class="to-top z-index-2">
                <to-top/>
            </v-flex>
        </v-layout>
        <v-flex hidden-sm-and-up
                class="background-footer-wrap">
            <img class="background-footer"
                 src="../../static/images/backgrounds/footer/background.png"
                 alt="background">
        </v-flex>
        <v-flex hidden-sm-and-down
                hidden-lg-and-up
                class="background-footer-wrap">
            <img class="background-footer"
                 src="../../static/images/backgrounds/footer/background@2x.png"
                 alt="background">
        </v-flex>
        <v-flex hidden-md-and-down
                class="background-footer-wrap">
            <img class="background-footer"
                 src="../../static/images/backgrounds/footer/background@3x.png"
                 alt="background">
        </v-flex>
    </div>
</template>

<script>
    import Logo from './layouts/navigation/Logo';
    import ListOfDocs from './layouts/footer/ListOfDocs';
    import Copyright from './layouts/footer/Copyright';
    import MenuFooterTop from './layouts/footer/MenuFooterTop';
    import MenuFooterBottom from './layouts/footer/MenuFooterBottom';
    import Subscribe from './layouts/footer/Subscribe';
    import ToTop from './layouts/footer/ToTop';

    export default {
        name: 'FooterBlock',
        components: {
            Logo,
            ListOfDocs,
            Copyright,
            MenuFooterTop,
            MenuFooterBottom,
            Subscribe,
            ToTop
        },
        data: () => ({
            menuTop: [
                {
                    title: 'MVP',
                    path: '/'
                },
                {
                    title: 'Whitepaper',
                    path: '/'
                },
                {
                    title: 'Блог',
                    path: '/blog/categories/:id'
                },
                {
                    title: 'F.A.Q',
                    path: '/faq'
                }
            ],
            menuBottom: [
                {
                    title: 'Миссия',
                    id: 'mission'
                },
                {
                    title: 'Преимущества',
                    id: 'advantages'
                },
                {
                    title: 'Платформа',
                    id: 'platform'
                },
                {
                    title: 'Команда',
                    id: 'team'
                },
                {
                    title: 'STO',
                    id: 'sto'
                },
                {
                    title: 'Карта проекта',
                    id: 'roadmap'
                }
            ]
        })
    }
</script>

<style lang="stylus" scoped>
    .to-top
        @media (min-width 0)
            align-items center

        @media (min-width 600px)
            align-items center

        @media (min-width 960px)
            align-items flex-start

        @media (min-width 1264px)
            align-items flex-start

    .z-index-2
        z-index 2

    .footer-layout
        @media (min-width 0)
            height auto

        @media (min-width 600px)
            height auto

        @media (min-width 960px)
            height 100%

        @media (min-width 1264px)
            height 100%

    .layout-footer-menu
        @media (min-width 0)
            flex-direction row

        @media (min-width 600px)
            flex-direction row

        @media (min-width 960px)
            flex-direction column

        @media (min-width 1264px)
            flex-direction column

    .footer-copyright
        margin-top 24px

    .footer
        position relative
        background-color #020449
        color white

        @media (min-width 0)
            height 130vh
            padding-top 100px

        @media (min-width 600px)
            height 85vh
            padding-top 100px

        @media (min-width 960px)
            height 65vh
            padding-top auto

        @media (min-width 1264px)
            height 50vh
            padding-top auto

        .background-footer-wrap
            position absolute
            z-index 1
            bottom 0
            display flex
            justify-content center

            .background-footer
                width 200%
</style>