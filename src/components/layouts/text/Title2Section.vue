<template>
    <h2 class="title-2-section">
        {{ title }}
    </h2>
</template>

<script>
    export default {
        name: 'Title2Section',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .title-2-section
        color white
        font-size 32px
        font-family MuseoSansCyrl500
        line-height 1.5
        text-transform uppercase
        text-align center
</style>