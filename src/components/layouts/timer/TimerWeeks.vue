<template>
    <timer-item :timer="timer"
                :text="calcText"
                :big="big"/>
</template>

<script>
    import TimerItem from './TimerItem';

    export default {
        name: 'TimerWeeks',
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
            }
        },
        computed: {
            /**
             * calculated timer weeks text
             *
             * @returns {string}
             */
            calcText() {
                let timer = this.timer,
                    timerStr = timer.toString(),
                    lastTimerNum = parseInt(timerStr[timerStr.length - 1]);

                if (lastTimerNum >= 2 && lastTimerNum <= 4 && (timer < 10 || timer > 20))
                    return 'недели';
                else if (lastTimerNum === 1)
                    return 'неделя';

                return 'недель';
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>