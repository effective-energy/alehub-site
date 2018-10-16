<template>
    <ul class="menu">
        <li v-for="item in menu">
            {{ item.title }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'Menu',
        data: () => ({
            menu: [
                {
                    title: 'MVP'
                },
                {
                    title: 'Whitepaper'
                },
                {
                    title: 'Блог'
                },
                {
                    title: 'F.A.Q'
                }
            ]
        })
    }
</script>

<style lang="stylus" scoped>
.menu
    list-style none

    li
        display inline-block
        margin 0 40px
        color white
        font-family MuseoSansCyrl700
        font-size 18px
</style>