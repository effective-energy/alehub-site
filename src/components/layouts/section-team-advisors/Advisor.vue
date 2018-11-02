<template>
    <div class="advisor">
        <div class="photo">
        </div>
        <h3 class="name">
            {{ name }}
        </h3>
        <p class="position">
            {{ position }}
        </p>
        <p class="text">
            {{ text }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Advisor',
        props: {
            name: {
                type: String,
                required: true
            },
            position: {
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
    .advisor
        transform scale(.8)
        display flex
        flex-direction column
        align-items center

    .name
        font-family MuseoSansCyrl500
        font-size 24px
        font-weight 500
        font-style normal
        font-stretch normal
        line-height 1.33
        letter-spacing normal
        text-align center
        color #ffffff
        margin-top 24px

    .position
        opacity 0.72
        font-family MuseoSansCyrl
        font-size 16px
        font-weight 300
        font-style normal
        font-stretch normal
        line-height 1.5
        letter-spacing normal
        text-align center
        color #ffffff
        margin-top 16px

    .text
        font-family MuseoSansCyrl300
        font-size 16px
        font-weight 300
        font-style normal
        font-stretch normal
        line-height 1.5
        letter-spacing normal
        text-align center
        color #ffffff
        margin-top 16px

    .photo
        height 160px
        width 160px
        border-radius 50%
        background-color #ff8c8a
</style>