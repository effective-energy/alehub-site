<template>
    <title-section :title="title"/>
</template>

<script>
    import TitleSection from '../text/Title2Section';

    export default {
        name: 'Title1PlacingTokens',
        components: {
            TitleSection
        },
        data: () => ({
            title: 'Размещение токенизированных акций'
        })
    }
</script>

<style lang="stylus" scoped>

</style>