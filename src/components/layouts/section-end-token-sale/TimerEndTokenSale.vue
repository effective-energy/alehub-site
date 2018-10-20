<template>
    <div class="timer-end-token-sale">
        <timer-weeks :timer="restOfWeeks"/>
        <timer-days :timer="restOfDays"/>
        <timer-seconds :timer="restOfSeconds"/>
        <!--{{ restOfWeeks }}-->
        <!--{{ restOfDays }}-->
        <!--{{ restOfHours }}-->
        <!--{{ restOfMinutes }}-->
        <!--{{ restOfSeconds }}-->
    </div>
</template>

<script>
    import TimerWeeks from './TimerWeeksEndToken';
    import TimerDays from './TimerDaysEndToken';
    import TimerHours from './TimerHoursEndToken';
    import TimerMinutes from './TimerMinutesEndToken';
    import TimerSeconds from './TimerSecondsEndToken';


    export default {
        name: 'TimerEndTokenSale',
        components: {
            TimerWeeks,
            TimerDays,
            TimerHours,
            TimerMinutes,
            TimerSeconds
        },
        data: () => ({
            end: 1559927329563,
            now: new Date(),
            diff: 0
        }),
        computed: {
            restOfWeeks() {
                return Math.floor(this.diff / 1000 / 60 / 60 / 24 / 7);
            },
            restOfDays() {
                return Math.floor(this.diff / 1000 / 60 / 60 / 24) % 7;
            },
            restOfHours() {
                return Math.floor(this.diff / 1000 / 60 / 60) % 24;
            },
            restOfMinutes() {
                return Math.floor(this.diff / 1000 / 60) % 60;
            },
            restOfSeconds() {
                return Math.floor(this.diff / 1000) % 60;
            }
        },
        methods: {
            startTimer() {
                this.diff = this.end - this.now.getTime();

                let timer = setInterval(() => {
                    this.diff -= 1000;
                }, 1000);
            }
        },
        mounted() {
            this.startTimer();
        }
    }
</script>

<style lang="stylus" scoped>

</style>