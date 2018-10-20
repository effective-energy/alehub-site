<template>
    <timer-item :timer="timer"
                :text="calcText"/>
</template>

<script>
    import TimerItem from './TimerItem';

    export default {
        name: 'TimerDays',
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
                if (this.timer >= 2 && this.timer <= 4)
                    return 'дня';
                else if (this.timer === 1)
                    return 'день';
                return 'дней'
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>