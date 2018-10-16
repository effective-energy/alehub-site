<template>
    <button-rounded text="Попасть в whitelist" @click.native="test"/>
</template>

<script>
    import ButtonRounded from '../buttons/ButtonRounded';

    export default {
        name: 'ButtonToWhitelist',
        components: {
            ButtonRounded
        },
        methods: {
            test() {
                this.$router.push('/white-list');
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>