<template>
    <li class="menu-item">
        <slot></slot>
    </li>
</template>

<script>
    export default {
        name: 'MenuItem'
    }
</script>

<style lang="stylus" scoped>
    .menu-item
        @media (min-width 0)
            display block

        @media (min-width 600px)
            display block

        @media (min-width 960px)
            display inline-block

        @media (min-width 1264px)
            display inline-block
</style>