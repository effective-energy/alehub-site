<template>
    <timer-item :timer="timer"
                :text="calcText"
                :big="big"
                :dots="dots"/>
</template>

<script>
    import TimerItem from './TimerItem';

    export default {
        name: 'TimerMinutes',
        components: {
            TimerItem
        },
        props: {
            timer: {
                type: [Number, String],
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
        computed: {
            /**
             * calculated timer minutes text
             *
             * @returns {string}
             */
            calcText() {
                let timer = this.timer,
                    timerStr = timer.toString(),
                    lastTimerNum = parseInt(timerStr[timerStr.length - 1]);

                if (lastTimerNum >= 2 && lastTimerNum <= 4 && (timer < 10 || timer > 20))
                    return 'минуты';
                else if (lastTimerNum === 1)
                    return 'минута';
                return 'минут';
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>