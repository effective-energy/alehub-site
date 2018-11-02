<template>
    <button-rounded class="button-distribution-tokens">
        {{ text }}
    </button-rounded>
</template>

<script>
    import ButtonRounded from '../buttons/ButtonRounded';

    export default {
        name: 'ButtonPlacingTokens',
        components: {
            ButtonRounded
        },
        data: () => ({
            text: 'Инвестировать сейчас'
        })
    }
</script>

<style lang="stylus" scoped>

</style>