<template>
    <menu-block :items="items" :inner="inner"/>
</template>

<script>
    import MenuBlock from '../menu/Menu';

    export default {
        name: 'Menu',
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
       .header-item
           font-family MuseoSansCyrl700
           font-size 18px
</style>