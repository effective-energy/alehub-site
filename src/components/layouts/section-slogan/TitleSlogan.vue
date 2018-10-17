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
        color white
        font-family MuseoSansCyrl700
        font-size 48px
        line-height 1.33
        text-transform uppercase
</style>