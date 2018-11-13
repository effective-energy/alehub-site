<template>
    <timer-item :timer="timer"
                :text="calcText"
                :big="big"
                :dots="dots"/>
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
            },
            big: {
                type: Boolean,
                required: true
            },
            dots: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            /**
             * calculated timer days text
             *
             * @returns {string}
             */
            calcText() {
                let timer = this.timer;

                if (timer >= 2 && timer <= 4)
                    return 'дня';
                else if (timer === 1)
                    return 'день';
                return 'дней'
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>