<template>
    <timer-item :timer="timer"
                :text="calcText"/>
</template>

<script>
    import TimerItem from './TimerItem';

    export default {
        name: 'TimerHours',
        components: {
            TimerItem
        },
        props: {
            timer: {
                type: [Number, String],
                required: true
            }
        },
        computed: {
            /**
             * calculated timer hours text
             *
             * @returns {string}
             */
            calcText() {
                let timer = this.timer.toString(),
                    lastTimerNum = timer[timer.length - 1];

                if (parseInt(lastTimerNum) >= 2 && parseInt(lastTimerNum) <= 4 && (parseInt(timer) < 10 || parseInt(timer) > 20))
                    return 'часа';
                else if (parseInt(lastTimerNum) === 1)
                    return 'час';
                return 'часов'
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>