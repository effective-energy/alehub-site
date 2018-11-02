<template>
    <SubtitleSection :subtitle="subtitle"/>
</template>

<script>
    import SubtitleSection from '../text/SubtitleSection';

    export default {
        name: 'SubtitleDistributionTokens',
        components: {
            SubtitleSection
        },
        data: () => ({
            subtitle: 'Принимаем к сборам:  BTC, ETH, BCH, LTC, DASH, USD '
        })
    }
</script>

<style lang="stylus" scoped>

</style>