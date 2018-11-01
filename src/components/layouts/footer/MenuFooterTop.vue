<template>
    <ul class="menu-footer-top">
        <menu-item v-for="item in items" :key="item.title">
            <router-link :to="item.path" tag="a">
                {{ item.title }}
            </router-link>
        </menu-item>
    </ul>
</template>

<script>
    import MenuItem from '../menu/MenuItem';

    export default {
        name: 'MenuFooterTop',
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
        })
    }
</script>

<style lang="stylus" scoped>
    .menu-footer-top
        li
            margin-right 32px

            &:last-of-type
                margin-right 0

            a
                font-family MuseoSansCyrl500
                font-size 16px
                color white
                text-transform uppercase
</style>