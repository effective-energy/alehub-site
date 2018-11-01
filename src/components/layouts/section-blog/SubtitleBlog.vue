<template>
    <subtitle-section :subtitle="subtitle"/>
</template>

<script>
    import SubtitleSection from '../text/SubtitleSection';

    export default {
        name: 'SubtitleBlog',
        components: {
            SubtitleSection
        },
        props:{
            subtitle: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>