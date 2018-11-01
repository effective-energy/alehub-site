<template>
    <h3 class="text-subscribe">
        {{ text }}
    </h3>
</template>

<script>
    export default {
        name: 'TextSubscribe',
        data: () => ({
            text: 'Будь в курсе новостей Alehub'
        })
    }
</script>

<style lang="stylus" scoped>
    .text-subscribe
        font-size 24px
        color white
        font-family MuseoSansCyrl500
        line-height 1.33
        text-transform uppercase
</style>