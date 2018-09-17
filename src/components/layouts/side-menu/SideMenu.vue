<template>
    <div id="side-menu"
         class="side-menu"
         :class="{ 'inactive': !show, 'dark': dark, 'yellow': yellow }">
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
        name: 'SideMenu',
        props: {
            show: {
                type: Boolean,
                required: true
            },
            dark: {
                type: Boolean,
                required: true
            },
            yellow: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {}
        },
        methods: {
            /**
             * scroll window to specified block
             */
            scrollTo: function (id) {
                let position = this.getPageCoords(document.querySelector(id));
                window.scrollTo(
                    {
                        top: position.top - document.getElementById('navbar').offsetHeight + 1,
                        behavior: 'smooth'
                    }
                );
                this.$parent.$emit('showSideMenu', false);
            },
            /**
             * getting the coordinates of the element on the page
             *
             * @param elem
             * @returns {*}
             */
            getPageCoords: function (elem) {
                let box = elem.getBoundingClientRect();

                if (!elem)
                    return false;

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset,
                    right: box.right + pageXOffset,
                    bottom: box.bottom + pageYOffset
                };
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .side-menu
        z-index 2000
        overflow-y auto
        position fixed
        top 74px
        left 0
        height calc(100vh - 74px)
        width 400px
        padding-top 30px
        background-color #ffffff
        -webkit-box-shadow 2px 2px 2px 0 rgba(0, 0, 0, .2)
        -moz-box-shadow 2px 2px 2px 0 rgba(0, 0, 0, .2)
        box-shadow 2px 2px 2px 0 rgba(0, 0, 0, .2)
        transition all .4s ease

        &.inactive
            left -400px

        &.dark
            background-color #343a49

            .side-menu-item
                span
                    color #ffffff

        &.yellow
            background-color #ffd24f

            .side-menu-item
                &:hover
                    background-color #343a49

                    span
                        color #ffffff

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