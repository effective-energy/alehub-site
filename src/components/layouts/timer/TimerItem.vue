<template>
    <div class="timer-item">
        <div :class="timeClass">
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
    .big-time
        font-size 72px
        font-family MuseoSansCyrl500
        line-height 1.33
        letter-spacing 2.9px
        text-align left
        color white

    .big-text
        font-size 24px
        font-family MuseoSansCyrl300
        line-height 1
        text-align left
        color white

    .normal-time
        font-size 48px
        font-family MuseoSansCyrl500
        line-height 2
        letter-spacing 1.9px
        text-align left
        color white

    .normal-text
        font-size 16px
        font-family MuseoSansCyrl300
        line-height 1.5
        text-align left
        color white
</style>