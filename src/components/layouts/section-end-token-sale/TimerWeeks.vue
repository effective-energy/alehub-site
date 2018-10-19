<template>
    <div class="timer-weeks">
        <timer-item :timer="timer"
                    :text="text"/>
    </div>
</template>

<script>
    import TimerItem from '../timer/TimerItem';

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
        data: () => ({
            text: 'Недель'
        })
    }
</script>

<style lang="stylus" scoped>

</style>