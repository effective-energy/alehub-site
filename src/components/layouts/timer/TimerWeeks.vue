<template>
    <timer-item :timer="timer"
                :text="calcText"/>
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
            }
        },
        computed: {
            calcText() {
                let timer = this.timer.toString(),
                    lastTimerNum = timer[timer.length - 1];

                if (parseInt(lastTimerNum) >= 2 && parseInt(lastTimerNum) <= 4)
                    return 'недели';
                else if (lastTimerNum === '1')
                    return 'неделя';

                return 'недель';
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>