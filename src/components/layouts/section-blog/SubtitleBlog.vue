<template>
    <subtitle-section :subtitle="subtitle"
                      class="subtitle"/>
</template>

<script>
    import SubtitleSection from '../text/SubtitleSection';

    export default {
        name: 'SubtitleBlog',
        components: {
            SubtitleSection
        },
        props: {
            subtitle: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .subtitle
        @media (min-width 0px)
            text-align left

        @media (min-width 600px)
            text-align left

        @media (min-width 960px)
            text-align center

        @media (min-width 1264px)
            text-align center
</style>