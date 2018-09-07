<template>
    <div id="side-menu"
         class="side-menu"
         :class="{ 'inactive': !show }">
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
        name: 'SideMenu',
        props: {
            show: {
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
        transition all .5s ease-in-out

        &.inactive
            left -400px

        .side-menu-item
            cursor pointer
            padding 10px 40px
            position relative
            transition all .3s ease-in-out

            &:hover
                background-color #ffd24f

            span
                font-family MuseoSansCyrl500
                font-size 1.3em
                font-weight 500

</style>