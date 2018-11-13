<template>
    <div id="navigation"
         class="navigation">
        <v-layout align-center
                  justify-space-between
                  row>
            <v-flex>
                <v-layout row>
                    <v-flex xs4>
                        <logo/>
                    </v-flex>
                    <v-flex xs4 offset-xs2>
                        <select-language/>
                    </v-flex>
                    <v-flex xs2>
                        <hamburger/>
                    </v-flex>
                    <v-flex hidden-sm-and-down>
                        <navigation-menu :items="items"/>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import Logo from './Logo';
    import NavigationMenu from './MenuHeader';
    import SelectLanguage from './SelectLanguage';
    import Hamburger from './Hamburger';

    export default {
        name: 'Navigation',
        components: {
            Logo,
            NavigationMenu,
            SelectLanguage,
            Hamburger
        },
        data: () => ({
            //во vuex
            items: [
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
            ]
        })
    }
</script>

<style lang="stylus" scoped>
    .navigation
        background-color #020449

        @media (min-width 0)
            height 50px

        @media (min-width 600px)
            height 50px

        @media (min-width 960px)
            height 100px

        @media (min-width 1264px)
            height 100px
</style>