<template>
    <div class="cap-progress">
        <div class="total">
            <span>$ 4 681 068</span>
        </div>
        <div class="filled"></div>
    </div>
</template>

<script>
    export default {
        name: 'CapProgress',
        props: {},
        data: () => ({})
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
            width 30px
            position absolute
            background-color orange
            border-bottom-left-radius radius-5
            border-top-left-radius radius-5
            -webkit-box-shadow 0 0 4px 0 orange
            -moz-box-shadow 0 0 4px 0 orange
            box-shadow 0 0 4px 0 orange
</style>