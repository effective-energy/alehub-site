<template>
    <v-container>
        <v-layout align-center justify-space-between row>
            <v-flex>
                <v-layout row>
                    <v-flex>
                        <logo/>
                    </v-flex>
                    <v-flex>
                        <navigation-menu/>
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
    import NavigationMenu from './Menu';
    import Language from './Language';

    export default {
        name: 'Navigation',
        components: {
            Logo,
            NavigationMenu,
            Language
        }
    }
</script>

<style lang="stylus" scoped>

</style>