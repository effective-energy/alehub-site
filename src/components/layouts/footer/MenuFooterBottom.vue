<template>
    <menu-block :items="items"
                :inner="inner"/>
</template>

<script>
    import MenuBlock from '../menu/Menu';

    export default {
        name: 'MenuFooterBottom',
        components: {
            MenuBlock
        },
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        data: () => ({
            inner: true
        })
    }
</script>

<style lang="stylus" scoped>

</style>