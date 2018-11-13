<template>
    <button-rounded @click.native="toBlog">
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
        }),
        methods: {
            toBlog() {
                this.$router.push('/blog/categories/all');
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>