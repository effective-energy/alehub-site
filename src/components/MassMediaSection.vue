<template>
    <div class="mass-media-section" id="mass-media-section">
        <media-block/>
    </div>
</template>

<script>
    import MediaBlock from './layouts/MediaBlock';

    export default {
        name: 'MassMediaSection',
        components: {
            MediaBlock
        }
    }
</script>

<style lang="stylus" scoped>
    .mass-media-section
        background-color #ececf0
</style>