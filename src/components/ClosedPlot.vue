<template>
    <div class="closed-plot">
    </div>
</template>

<script>
    export default {
        name: 'ClosedPlot'
    }
</script>

<style lang="stylus" scoped>
    .closed-plot
        z-index 1500
        position fixed
        top 0
        left 0
        height 100vh
        width 100vw
        background-color #000000
        opacity .1
</style>