<template>
    <button-rounded>
        {{ text }}
    </button-rounded>
</template>

<script>
    import ButtonRounded from '../buttons/ButtonRounded';

    export default {
        name: 'ButtonToWhiteList',
        components: {
            ButtonRounded
        },
        data: () => ({
            text: 'Попасть в whitelist'
        })
    }
</script>

<style lang="stylus" scoped>

</style>