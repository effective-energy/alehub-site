<template>
    <title-section :title="title"/>
</template>

<script>
    import TitleSection from '../text/Title2Section';

    export default {
        name: 'Title2PlacingTokens',
        components: {
            TitleSection
        },
        data: () => ({
            title: 'Даты: 25 июля - 25 ноября'
        })
    }
</script>

<style lang="stylus" scoped>

</style>