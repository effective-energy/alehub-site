<template>
    <button-rounded :text="text"/>
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

</style>