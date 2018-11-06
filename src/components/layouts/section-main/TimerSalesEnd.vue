<template>
    <v-layout column>
        <v-flex class="title-padding">
            <h3 class="title-timer">
                Окончание продаж
            </h3>
        </v-flex>
        <v-flex d-flex xs12>
            <v-layout row>
                <v-flex xs3>
                    <timer-days :timer="restOfDays"
                                :big="bigTimer"/>
                </v-flex>
                <v-flex xs3>
                    <timer-hours :timer="restOfHours"
                                 :big="bigTimer"/>
                </v-flex>
                <v-flex xs3>
                    <timer-minutes :timer="restOfMinutes"
                                   :big="bigTimer"/>
                </v-flex>
                <v-flex xs3>
                    <timer-seconds :timer="restOfSeconds"
                                   :big="bigTimer"/>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
    import TimerDays from '../timer/TimerDays';
    import TimerHours from '../timer/TimerHours';
    import TimerMinutes from '../timer/TimerMinutes';
    import TimerSeconds from '../timer/TimerSeconds';

    export default {
        name: 'TimerSalesEnd',
        components: {
            TimerDays,
            TimerHours,
            TimerMinutes,
            TimerSeconds
        },
        data: () => ({
            end: 1549007329563,
            now: new Date(),
            diff: 0,
            bigTimer: false
        }),
        computed: {
            restOfDays() {
                return Math.floor(this.diff / 1000 / 60 / 60 / 24);
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
    .title-padding
        padding-top 0 !important
        padding-bottom 0 !important

    .title-timer
        font-family MuseoSansCyrl700
        font-weight 700
        text-transform uppercase
        line-height 1.33
        text-align left
        color #ffffff

        @media (min-width 0)
            font-size 15px

        @media (min-width 600px)
            font-size 15px

        @media (min-width 960px)
            font-size 18px

        @media (min-width 1264px)
            font-size 18px
</style>