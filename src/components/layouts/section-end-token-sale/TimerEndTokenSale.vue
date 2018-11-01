<template>
    <div class="timer-end-token-sale">
        <v-layout row>
            <v-flex xs4>
                <timer-weeks :timer="restOfWeeks"
                             :big="bigTimer"/>
            </v-flex>
            <v-flex xs4>
                <timer-days :timer="restOfDays"
                            :big="bigTimer"/>
            </v-flex>
        </v-layout>
        <v-layout row class="margin-top">
            <v-flex xs4>
                <timer-hours :timer="restOfHours"
                             :big="bigTimer"/>
            </v-flex>
            <v-flex xs4>
                <timer-minutes :timer="restOfMinutes"
                               :big="bigTimer"/>
            </v-flex>
            <v-flex xs4>
                <timer-seconds :timer="restOfSeconds"
                               :big="bigTimer"/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import TimerWeeks from '../timer/TimerWeeks';
    import TimerDays from '../timer/TimerDays';
    import TimerHours from '../timer/TimerHours';
    import TimerMinutes from '../timer/TimerMinutes';
    import TimerSeconds from '../timer/TimerSeconds';


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
            end: 1549007329563,
            now: new Date(),
            diff: 0,
            bigTimer: true
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
    .margin-top
        margin-top 32px !important

</style>