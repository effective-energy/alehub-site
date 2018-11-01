<template>
    <button-rounded class="button-welcome-invest">
        {{ text }}
    </button-rounded>
</template>

<script>
    import ButtonRounded from '../buttons/ButtonRounded';

    export default {
        name: 'ButtonWelcomeInvest',
        components: {
            ButtonRounded
        },
        data: () => ({
            text: 'Инвестировать'
        })
    }
</script>

<style lang="stylus" scoped>
    .button-welcome-invest
        margin-bottom 70px
</style>