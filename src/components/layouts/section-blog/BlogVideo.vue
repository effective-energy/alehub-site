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
                <button type="button"
                        class="play">
                    <img class="icon-play"
                         src="../../../../static/images/icons/play-circle.svg"
                         alt="play">
                </button>
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
        width 100%
        background-color #479da7
        display flex
        align-items center
        justify-content center

        .play
            cursor pointer

            &:focus
                outline none

            @media (min-width 0px)
                display block

            @media (min-width 600px)
                display block

            @media (min-width 960px)
                display none

            @media (min-width 1264px)
                display none

            .icon-play
                width 64px

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