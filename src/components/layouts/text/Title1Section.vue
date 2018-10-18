<template>
    <h1 class="title-1-section">
        {{ title }}
    </h1>
</template>

<script>
    export default {
        name: 'TitleSection',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .title-1-section
        color white
        font-size 48px
        font-family MuseoSansCyrl700
        line-height 1.33
        letter-spacing 1.9px
        text-transform uppercase
        text-align center
</style>