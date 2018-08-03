<template>
    <div class="mass-media-section" id="mass-media-section">
        <mass-media-block/>
        <mass-media-about-us/>
    </div>
</template>

<script>
    import MassMediaBlock from './layouts/mass-media/MassMediaBlock';
    import MassMediaAboutUs from './layouts/mass-media/MassMediaAboutUs';

    export default {
        name: 'MassMediaSection',
        components: {
            MassMediaBlock,
            MassMediaAboutUs
        }
    }
</script>

<style lang="stylus" scoped>
    .mass-media-section
        background-color #ececf0
</style>