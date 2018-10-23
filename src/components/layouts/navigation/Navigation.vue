<template>
    <v-container>
        <v-layout align-center justify-space-between row>
            <v-flex>
                <v-layout row>
                    <v-flex>
                        <logo/>
                    </v-flex>
                    <v-flex>
                        <navigation-menu :items="items"/>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex>
                <language/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Logo from './Logo';
    import NavigationMenu from './MenuHeader';
    import Language from './Language';

    export default {
        name: 'Navigation',
        components: {
            Logo,
            NavigationMenu,
            Language
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

</style>