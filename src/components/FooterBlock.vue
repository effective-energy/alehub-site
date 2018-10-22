<template>
    <div class="footer">
        <v-container grid-list-md>
            <v-layout row>
                <v-flex xs2>

                </v-flex>
                <v-flex xs10>
                    <v-layout column>
                        <v-flex>

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
    export default {
        name: 'FooterBlock'
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