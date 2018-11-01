<template>
    <v-layout align-center row>
        <v-flex xs3>
            <div class="image">
            </div>
        </v-flex>
        <v-flex xs9>
            <p class="date">
                {{ formattedDate }}
            </p>
            <p class="text">
                {{ text }}
            </p>
        </v-flex>
    </v-layout>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'BlogNewsItem',
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
        height 100px
        width 100px
        background-color #5585a7

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