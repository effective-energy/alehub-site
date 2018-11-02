<template>
    <ul class="menu-header" style="margin-bottom: 0;">
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
        name: 'Menu',
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
            inner: false
        }),
        computed: {
            classItem() {
                if (this.footer)
                    return 'footer-item';
                return 'header-item';
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .menu-header
        li
            margin-right 40px

            &:last-of-type
                margin-right 0

            a
                font-family MuseoSansCyrl700
                font-size 18px
                color white
</style>