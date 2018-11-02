<template>
    <div class="section-questions">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl
                     class="parent-z">
            <v-layout>
                <v-flex>
                    <background-title-questions/>
                </v-flex>
            </v-layout>
            <v-layout align-center
                      row>
                <v-flex>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import BackgroundTitleQuestions from '../layouts/section-questions/BackgroundTitleQuestions';

    export default {
        name: 'SectionQuestions',
        components: {
            BackgroundTitleQuestions
        }
    }
</script>

<style lang="stylus" scoped>
    .section-questions
        height 60vh
        background-color #020449

    .parent-z
        z-index 2
        position relative
</style>