<template>
    <div id="mass-media-section"
         class="mass-media-section">
        <mass-media-block/>
    </div>
</template>

<script>
    import MassMediaBlock from './layouts/mass-media/MassMediaBlock';

    export default {
        name: 'MassMediaSection',
        components: {
            MassMediaBlock
        }
    }
</script>

<style lang="stylus" scoped>
    .mass-media-section
        background-color #ececf0
</style>