<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex d-flex xs6>
                <v-layout column>
                    <v-flex d-flex>
                        <main-title/>
                    </v-flex>
                    <v-flex d-flex>
                        <v-layout row>
                            <v-flex d-flex>
                                1
                            </v-flex>
                            <v-flex d-flex>
                                2
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex d-flex xs6>

            </v-flex>
        </v-layout>
    </v-container>
    <!--<v-container grid-list-md>-->
        <!--<v-layout row wrap>-->
            <!--<v-flex xs6>-->
                <!--<v-card dark color="primary">-->
                    <!--<v-card-text class="px-0">12</v-card-text>-->
                <!--</v-card>-->
            <!--</v-flex>-->
            <!--<v-flex xs6>-->
                <!--<v-card dark color="primary">-->
                    <!--<v-card-text class="px-0">12</v-card-text>-->
                <!--</v-card>-->
            <!--</v-flex>-->
        <!--</v-layout>-->
    <!--</v-container>-->
</template>

<script>
    import MainTitle from '../layouts/section-main/MainTitle';

    export default {
        name: 'SectionMain',
        components: {
            MainTitle
        },
        data: () => ({})
    }
</script>

<style lang="stylus" scoped>

</style>