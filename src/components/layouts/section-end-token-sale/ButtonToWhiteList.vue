<template>
    <button-rounded @click.native="toWhiteList">
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
        }),
        methods: {
            toWhiteList() {
                this.$router.push('/white-list');
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>