<template>
    <ul class="menu">
        <menu-item>

        </menu-item>
        <!--<li v-for="item in items">-->
            <!--<router-link v-if="!inner"-->
                         <!--:to="item.path"-->
                         <!--tag="a">-->
                <!--{{ item.title }}-->
            <!--</router-link>-->
            <!--<a v-else-->
               <!--@click="toSection">-->
                <!--{{ item.title }}-->
            <!--</a>-->
        <!--</li>-->
    </ul>
</template>

<script>
    import MenuItem from './MenuItem';

    export default {
        name: 'Menu',
        components: {
            MenuItem
        },
        props: {
            items: {
                type: Array,
                required: true
            },
            inner: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            toSection() {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .menu
        list-style none

        li
            display inline-block
            margin 0 40px

            a
                color white
</style>