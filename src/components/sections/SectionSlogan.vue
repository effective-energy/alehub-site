<template>
    <div class="section-slogan">
        <v-container grid-list-md
                     class="section-slogan-container">
            <v-layout align-center row>
                <v-flex>
                    <title-slogan :title="title"/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import TitleSlogan from '../layouts/section-slogan/TitleSlogan';

    export default {
        name: 'SectionSlogan',
        components: {
            TitleSlogan
        },
        data: () => ({
            title: 'Уже сегодня мы создали для вас простой и удобный инструмент, который понадобится вам завтра'
        })
    }
</script>

<style lang="stylus" scoped>
    .section-slogan
        height 50vh
        color white

        .section-slogan-container
            position relative
            height 100%

            .layout
                height 100%
</style>