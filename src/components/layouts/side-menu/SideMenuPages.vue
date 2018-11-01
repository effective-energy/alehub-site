<template>
    <div class="side-menu-pages">
        <h4 class="side-menu-title">
            Pages
        </h4>
        <router-link tag="div"
                     class="side-menu-item"
                     :to="item.to"
                     v-for="item in $t('navbar.pages')">
            <span>
                {{ item.name }}
            </span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'SideMenuPages'
    }
</script>

<style lang="stylus" scoped>
    .side-menu-pages
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