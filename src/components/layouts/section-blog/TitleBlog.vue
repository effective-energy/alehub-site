<template>
    <title-section :title="title"/>
</template>

<script>
    import TitleSection from '../text/Title1Section';

    export default {
        name: 'TitleBlog',
        components: {
            TitleSection
        },
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>