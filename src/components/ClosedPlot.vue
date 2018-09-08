<template>
    <div class="closed-plot"
         @click="closeSideMenu">
    </div>
</template>

<script>
    export default {
        name: 'ClosedPlot',
        methods: {
            /**
             * emit close side menu
             */
            closeSideMenu: function () {
                this.$parent.$emit('showSideMenu', false);
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .closed-plot
        z-index 1500
        position fixed
        top 74px
        left 0
        height calc(100vh - 74px)
        width 100vw
        background-color #000000
        opacity .1
</style>