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
                            <navigation-menu/>
                        </v-flex>
                        <v-flex>

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
    import NavigationMenu from './layouts/navigation/Menu';

    export default {
        name: 'FooterBlock',
        components: {
            Logo,
            ListOfDocs,
            Copyright,
            NavigationMenu
        }
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