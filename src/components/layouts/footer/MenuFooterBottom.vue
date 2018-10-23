<template>
    <ul class="menu-footer-bottom">
        <menu-item v-for="item in items" :key="item.title">
            <a href="">
                {{ item.title }}
            </a>
        </menu-item>
    </ul>
</template>

<script>
    import MenuItem from '../menu/MenuItem';

    export default {
        name: 'MenuFooterBottom',
        components: {
            MenuItem
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