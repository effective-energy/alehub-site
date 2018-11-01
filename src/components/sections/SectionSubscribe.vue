<template>
    <div class="section-subscribe">
        <v-container grid-list-xs
                     grid-list-sm
                     grid-list-md
                     grid-list-lg
                     grid-list-xl>
            <v-layout align-center
                      row>
                <v-flex d-flex
                        align-center
                        xs5>
                    <text-subscribe/>
                </v-flex>
                <v-flex xs4>
                    <input-email-subscribe/>
                </v-flex>
                <v-flex xs3>
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
        height 25vh
        background-color #020449

        .container
            height 100%

            .row
                height 100%

</style>