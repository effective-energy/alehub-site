<template>
    <div class="navigation">
        <logo/>
        <menu/>
    </div>
</template>

<script>
    import Logo from './Logo';
    import Menu from './Menu';

    export default {
        name: 'Navigation',
        components: {
            Logo,
            Menu
        }
    }
</script>

<style lang="stylus" scoped>

</style>