<template>
    <h2 class="title-slogan">
        {{ title }}
    </h2>
</template>

<script>
    export default {
        name: 'TitleSlogan',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .title-slogan
        text-align center
        color white
        font-family MuseoSansCyrl700
        font-size 30px
        line-height 1.6
        letter-spacing .5px
        text-transform uppercase
</style>