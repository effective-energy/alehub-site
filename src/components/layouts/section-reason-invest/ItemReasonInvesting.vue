<template>
    <div class="item-reason-investing">
        <div class="img-wrapper">
            <img :src="src" alt="reason icon">
        </div>
        <h3 class="title-item-reason">
            {{ title }}
        </h3>
        <p class="text-item-reason">
            {{ text }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'ItemReasonInvesting',
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
    .img-wrapper
        text-align center

    .text-item-reason
        opacity .72
        font-family MuseoSansCyrl300
        font-size 18px
        line-height 1.33
        text-align center
        color #ffffff
        margin-top 24px

    .title-item-reason
        font-family MuseoSansCyrl700
        font-size 24px
        line-height 1.33
        text-align center
        color #ffffff
        margin-top 32px

    .item-reason-investing
        color white

    img
        height 80px
</style>