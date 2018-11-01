<template>
    <button-rounded class="button-subscribe">
        {{ text }}
    </button-rounded>
</template>

<script>
    import ButtonRounded from '../buttons/ButtonRounded';

    export default {
        name: 'ButtonSubscribe',
        components: {
            ButtonRounded
        },
        data: () => ({
            text: 'Подписаться'
        })
    }
</script>

<style lang="stylus" scoped>

</style>