<template>
    <timer-days :timer="timer"/>
</template>

<script>
    import TimerDays from '../timer/TimerDays';

    export default {
        name: 'TimerDaysEndToken',
        components: {
            TimerDays
        },
        props: {
            timer: {
                type: [Number, String],
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>