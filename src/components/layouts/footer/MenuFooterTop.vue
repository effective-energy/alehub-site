<template>
    <menu-block :items="items"
                :inner="inner"/>
</template>

<script>
    import MenuBlock from '../menu/Menu';

    export default {
        name: 'MenuFooterTop',
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
            inner: false
        })
    }
</script>

<style lang="stylus" scoped>
    .footer-item
        font-family MuseoSansCyrl500
        font-size 16px
</style>