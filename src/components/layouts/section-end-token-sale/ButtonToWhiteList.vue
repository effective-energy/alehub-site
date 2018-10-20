<template>
    <button-rounded :text="text"/>
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

<style scoped>

</style>