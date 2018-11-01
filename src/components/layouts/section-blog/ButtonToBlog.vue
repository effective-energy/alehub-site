<template>
    <button-rounded>
        {{ textButton }}
    </button-rounded>
</template>

<script>
    import ButtonRounded from '../buttons/ButtonRounded';

    export default {
        name: 'ButtonToBlog',
        components: {
            ButtonRounded
        },
        data: () => ({
            textButton: 'Блог'
        })
    }
</script>

<style lang="stylus" scoped>

</style>