<template>
    <subtitle-section class="subtitle-welcome"
                      :subtitle="subtitle"/>
</template>

<script>
    import SubtitleSection from '../text/SubtitleSection';

    export default {
        name: 'SubtitleWelcome',
        components: {
            SubtitleSection
        },
        data: () => ({
            subtitle: 'Сделай свой вклад'
        })
    }
</script>

<style lang="stylus" scoped>
    .subtitle-welcome
        margin-bottom 35px
</style>