<template>
    <p class="text-slogan">
        {{ text }}
    </p>
</template>

<script>
    export default {
        name: 'TextSlogan',
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
.text-slogan
    color white
    opacity .72
    font-size 24px
    font-family MuseoSansCyrl300
    line-height 1.33
</style>