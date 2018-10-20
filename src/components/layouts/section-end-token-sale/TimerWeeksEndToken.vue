<template>
    <div class="timer-weeks">
        <timer-weeks :timer="timer"/>
    </div>
</template>

<script>
    import TimerWeeks from '../timer/TimerWeeks';

    export default {
        name: 'TimerWeeksEndToken',
        components: {
            TimerWeeks
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