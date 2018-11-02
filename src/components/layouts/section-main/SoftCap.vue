<template>
    <v-layout column>
        <v-flex>
            <v-layout row>
                <v-flex text-xs-left
                        class="text">
                    {{ 'Soft cap' }}
                </v-flex>
                <v-flex text-xs-right
                        class="text">
                    {{ '$ ' + 7500000 }}
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex>
            <!--<cap-progress/>-->
            <div class="cap-progress">
                <div class="total">
                    <span>$ 4 681 068</span>
                </div>
                <div class="filled"></div>
            </div>
        </v-flex>
    </v-layout>
</template>

<script>
    // import CapProgress from './CapProgress';

    export default {
        name: 'SoftCap',
        components: {
            // CapProgress
        },
        props: {
            title: {
                type: String,
                required: true
            },
            total: {
                type: [String, Number],
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    dark-blue = #0f14fd
    orange = #fc8435
    radius-5 = 5px

    .cap-progress
        height 32px
        position relative
        background-color dark-blue
        border-radius 5px

        .total
            z-index 2
            height 100%
            position absolute
            display flex
            justify-content flex-start
            align-items center
            padding 5px 16px
            font-family MuseoSansCyrl500
            font-weight 500
            font-size 18px
            color white

        .filled
            z-index 1
            height 100%
            width 75%
            position absolute
            background-color orange
            border-bottom-left-radius radius-5
            border-top-left-radius radius-5
            -webkit-box-shadow 0 0 4px 0 orange
            -moz-box-shadow 0 0 4px 0 orange
            box-shadow 0 0 4px 0 orange

    .text
        font-family MuseoSansCyrl300
        font-size 18px
</style>

<!--<template>-->
    <!--<div class="soft-cap">-->
        <!--<cap title="Soft cap" total="7500000"/>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--import Cap from './Cap';-->

    <!--export default {-->
        <!--name: 'SoftCap',-->
        <!--components: {-->
            <!--Cap-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--<style lang="stylus" scoped>-->

<!--</style>-->