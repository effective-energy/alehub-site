<template>
    <div class="side-menu-sections">
        <h4 class="side-menu-title">
            Sections
        </h4>
        <div class="side-menu-item"
             v-for="item in $t('navbar.menuList')"
             @click="scrollTo(item.path)">
            <span>
                {{ item.name }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideMenuSections'
    }
</script>

<style lang="stylus" scoped>
    .side-menu-sections
        .side-menu-title
            font-size 1.1em
            font-weight 500
            font-family MuseoSansCyrl500
            padding 15px 30px
            margin 0

        .side-menu-item
            cursor pointer
            padding 10px 60px
            position relative
            transition all .2s ease

            &:hover
                background-color #ffd24f

            span
                font-family MuseoSansCyrl500
                font-size 1.1em
                font-weight 500
</style>