<template>
    <label class="label-subscribe">
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name: 'LabelSubscribe'
    }
</script>

<style lang="stylus" scoped>
    label
        opacity .72
        font-family MuseoSansCyrl300
        font-size 16px
        line-height 1.5
        color white
</style>