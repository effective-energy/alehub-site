<template>
    <div class="footer">
        <v-container grid-list-md>
            <v-layout row>
                <v-flex xs2>
                    <v-layout column>
                        <v-flex>
                            <logo/>
                        </v-flex>
                        <v-flex>
                            <list-of-docs/>
                            <copyright/>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex xs10>
                    <v-layout column>
                        <v-flex>
                            <menu-footer-top :items="menuTop"/>
                        </v-flex>
                        <v-flex>
                            <menu-footer-bottom :items="menuBottom"/>
                        </v-flex>
                        <v-flex>

                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import Logo from './layouts/navigation/Logo';
    import ListOfDocs from './layouts/footer/ListOfDocs';
    import Copyright from './layouts/footer/Copyright';
    import MenuFooterTop from './layouts/footer/MenuFooterTop';
    import MenuFooterBottom from './layouts/footer/MenuFooterBottom';

    export default {
        name: 'FooterBlock',
        components: {
            Logo,
            ListOfDocs,
            Copyright,
            MenuFooterTop,
            MenuFooterBottom
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
    .footer
        height 50vh
        background-color #020449
        color white

        .container
            height 100%

            .layout
                height 100%
</style>