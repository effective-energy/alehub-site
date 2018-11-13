<template>
    <div class="timer-item">
        <div :class="[timeClass, dots ? 'dots' : '']">
            {{ timer }}
        </div>
        <div :class="textClass">
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TimerItem',
        props: {
            timer: {
                type: [Number, String],
                required: true
            },
            text: {
                type: String,
                required: true
            },
            big: {
                type: Boolean,
                required: true
            },
            dots: {
                type: Boolean,
                required: true
            }
        },
        data: () => ({
            class: {
                big: {
                    time: 'big-time',
                    text: 'big-text'
                },
                normal: {
                    time: 'normal-time',
                    text: 'normal-text'
                }
            }
        }),
        computed: {
            timeClass() {
                if (this.big)
                    return this.class.big.time;

                return this.class.normal.time;
            },
            textClass() {
                if (this.big)
                    return this.class.big.text;

                return this.class.normal.text;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .dots
        position relative

        &::after
            content ':'
            position absolute
            right 0

    .big-time
        font-size 72px
        font-family MuseoSansCyrl500
        line-height 1.33
        letter-spacing 2.9px
        text-align left
        color white

        @media (min-width 0)
            font-size 48px

        @media (min-width 600px)
            font-size 48px

        @media (min-width 960px)
            font-size 72px

        @media (min-width 1264px)
            font-size 72px

    .big-text
        font-family MuseoSansCyrl300
        line-height 1
        text-align left
        color white

        @media (min-width 0)
            font-size 18px

        @media (min-width 600px)
            font-size 18px

        @media (min-width 960px)
            font-size 24px

        @media (min-width 1264px)
            font-size 24px

    .normal-time
        font-family MuseoSansCyrl500
        /*line-height 2*/
        letter-spacing 1.9px
        text-align left
        color white

        @media (min-width 0)
            font-size 36px

        @media (min-width 600px)
            font-size 36px

        @media (min-width 960px)
            font-size 48px

        @media (min-width 1264px)
            font-size 48px

    .normal-text
        font-family MuseoSansCyrl300
        line-height 1.5
        text-align left
        color white

        @media (min-width 0)
            font-size 12px

        @media (min-width 600px)
            font-size 12px

        @media (min-width 960px)
            font-size 16px

        @media (min-width 1264px)
            font-size 16px
</style>