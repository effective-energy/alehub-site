<template>
    <div class="timer-hours">
        <timer-hours :timer="timer"/>
    </div>
</template>

<script>
    import TimerHours from '../timer/TimerHours'

    export default {
        name: 'TimerSeconds',
        components: {
            TimerHours
        },
        props: {
            timer: {
                type: [Number, String],
                required: true
            }
        },
        data: () => ({})
    }
</script>

<style lang="stylus" scoped>

</style>