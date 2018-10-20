<template>
    <div class="timer-seconds">
        <timer-item :timer="timer"
                    :text="text"/>
    </div>
</template>

<script>
    import TimerItem from '../timer/TimerItem'

    export default {
        name: 'TimerSeconds',
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
            text: 'Секунд'
        })
    }
</script>

<style scoped>

</style>