<template>
    <div class="timer-item">
        <div class="time">
            {{ timer }}
        </div>
        <div class="text">
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
        }
    }
</script>

<style lang="stylus" scoped>

</style>