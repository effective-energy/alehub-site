<template>
    <input-email-rounded :placeholder="placeholder"
                         :title="title"/>
</template>

<script>
    import InputEmailRounded from '../inputs/InputEmailRounded';

    export default {
        name: 'InputEmailSubscribe',
        components: {
            InputEmailRounded
        },
        data: () => ({
            placeholder: 'Введите e-mail',
            title: 'Введите e-mail'
        })
    }
</script>

<style lang="stylus" scoped>

</style>