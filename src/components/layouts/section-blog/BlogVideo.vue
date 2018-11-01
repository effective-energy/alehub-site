<template>
    <v-layout column>
        <v-flex>
            <p class="date">
                {{ formattedDate }}
            </p>
            <p class="text">
                {{ text }}
            </p>
        </v-flex>
        <v-flex>
            <div class="image">
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'BlogVideo',
        props: {
            date: {
                type: Number,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
        computed: {
            formattedDate() {
                return moment(this.date).format('D MMMM YYYY');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .image
        height 160px
        background-color #479da7

    .date,
    .text
        margin 0
        color white
        font-size 16px
        font-family MuseoSansCyrl300
        line-height 1.5

    .date
        opacity .72
</style>