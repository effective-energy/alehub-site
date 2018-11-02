<template>
    <div class="section-subscribe">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl>
            <v-layout align-center
                      row wrap>
                <v-flex d-flex
                        align-center
                        xs12
                sm6 md6 lg4 xl4>
                    <text-subscribe/>
                </v-flex>
                <v-flex xs12 sm6 md6 lg4>
                    <input-email-subscribe/>
                </v-flex>
                <v-flex xs12 sm6 md6 offset-md6 lg3 offset-lg0 xl3 offset-xl0>
                    <button-subscribe/>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import ButtonSubscribe from '../layouts/section-subscribe/ButtonSubscribe';
    import InputEmailSubscribe from '../layouts/section-subscribe/InputEmailSubscribe';
    import TextSubscribe from '../layouts/section-subscribe/TextSubscribe';

    export default {
        name: 'SectionSubscribe',
        components: {
            TextSubscribe,
            ButtonSubscribe,
            InputEmailSubscribe
        },
        data: () => ({
            title: 'Будь в курсе наших новостей'
        })
    }
</script>

<style lang="stylus" scoped>
    .section-subscribe
        height 35vh

        .container
            height 100%

            .row
                height 100%

</style>