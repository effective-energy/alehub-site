<template>
    <div class="item-advantage">
        <div class="circle">
            <img :src="src" alt="person icon">
        </div>
        <div class="text-block">
            <h3 class="title-item-advantage">
                {{ title }}
            </h3>
            <p class="text-item-advantage">
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ItemAdvantage',
        props: {
            src: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .item-advantage
        display flex
        align-items center

    .circle
        width 52px
        height 52px
        border-radius 50%
        box-shadow 0 0 5px 0 #fc8435
        border solid 1.5px #fc8435
        display flex
        justify-content center
        align-items center
        margin-right 28px
        flex-shrink 0

    img
        height 24px

    .text-item-advantage
        opacity .72
        font-family MuseoSansCyrl300
        font-size 16px
        line-height 1.5
        text-align left
        color #ffffff

    .title-item-advantage
        font-family MuseoSansCyrl500
        font-size 24px
        line-height 1.33
        text-align left
        color #ffffff
</style>