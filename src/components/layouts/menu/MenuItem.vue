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
        display inline-block
</style>