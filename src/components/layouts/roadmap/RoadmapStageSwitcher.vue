<template>
    <div class="roadmap-stage-switcher">
        <div class="arrow-up-wrap">
            <img src="" alt="arrow up">
        </div>
        <div class="marker-counter">
            {{ stageCount }}
        </div>
        <div class="arrow-down-wrap">
            <img src="" alt="arrow up">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RoadmapStageSwitcher',
        props: {
            stageCount: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>