<template>
    <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default {
        name: 'Hamburger'
    }
</script>

<style lang="stylus" scoped>
    .hamburger
        position relative
        height 16px
        width 20px
        display flex
        flex-direction column
        justify-content space-between

        .line
            width 100%
            height 2px
            background-color #ffffff
</style>