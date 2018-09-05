<template>
    <modal name="menu-modal"
           class="menu"
           @opened="opened"
           @closed="closedModal('menu-modal')">

        <div class="body"
             :class="{ 'body__dark': isDark, 'body__yellow': isYellow }">

            <div class="body__top">
                <a href="http://presale.alehub.io/">
                    <button type="button">
                        Log in
                    </button>
                </a>
            </div>

            <div class="body__menu" v-if="!isSelectingLanguage && isIndex">
                <div v-for="item in $t('navbar.menuList')">
                    <a v-if="isItemHasPath(item)"
                       v-scroll-to="item.path"
                       @click="closeModal('menu-modal')">
                        {{ item.name }}
                    </a>
                    <router-link tag="a"
                                 v-else
                                 :to="item.to">
                        {{ item.name }}
                    </router-link>
                </div>
            </div>

            <div class="body__menu" v-if="!isSelectingLanguage && !isIndex">
                <div>
                    <router-link tag="a"
                                 to="/blog/categories/all"
                                 @click.native="closeModal('menu-modal')">
                        {{ 'Blog' }}
                    </router-link>
                </div>
            </div>

            <div class="body__languages"
                 v-if="isSelectingLanguage">
                <div v-for="(item, langIndex) in languages">
                    <a @click="changeLanguage(langIndex)">
                        {{ item }}
                    </a>
                </div>
            </div>
            <div class="body__bottom">
                <a v-if="!isSelectingLanguage"
                   @click="toSelectLanguage">
                    <button type="button">
                        {{ $t('menuModal.selectLang') }}
                    </button>
                </a>
                <a v-else
                   @click="toNavigationMenu">
                    <button type="button">
                        {{ $t('menuModal.navigationMenu') }}
                    </button>
                </a>
            </div>
        </div>

    </modal>
</template>

<script>
    export default {
        name: 'MenuModal',
        props: {
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
            return {
                selectingLanguage: false,
                languages: ['en', 'ru', 'zh', 'ja', 'ko', 'ar', 'es', 'de', 'fr'],
                blog: [
                    {
                        title: 'Blog'
                    }
                ]
            }
        },
        computed: {
            isSelectingLanguage: function () {
                return this.selectingLanguage;
            },
            isDark: function () {
                return this.dark;
            },
            isYellow: function () {
                return this.yellow;
            },
            isIndex: function () {
                return this.$route.path === '/';
            }
        },
        methods: {
            /**
             * checking property belonging to a path object item
             */
            isItemHasPath: function (item) {
                return item.hasOwnProperty('path');
            },
            closeModal: function (name) {
                this.$parent.$emit(name);
                this.$modal.hide(name);
            },
            closedModal: function () {
                this.selectingLanguage = false;
                this.$parent.$emit('closeModal');
            },
            opened: function () {
                this.$parent.$emit('openedModalMenu');
            },
            toSelectLanguage: function () {
                this.selectingLanguage = true;
            },
            toNavigationMenu: function () {
                this.selectingLanguage = false;
            },
            changeLanguage: function (index) {
                localStorage.setItem('systemLang', this.languages[index]);
                this.$i18n.locale = this.languages[index];
                this.$parent.$emit('changeModalLanguage', this.languages[index]);
                this.closeModal('menu-modal');
            },
        },
    }
</script>

<style lang="stylus">
    .menu
        top 74px !important
        .v--modal-background-click
            .v--modal-box
                top 0 !important
                left 0 !important
                width 100% !important
                height calc(100vh - 74px) !important

            .v--modal
                -webkit-box-shadow none !important
                -moz-box-shadow none !important
                box-shadow none !important
                border-radius 0

</style>

<style lang="stylus" scoped>
    h_ext = 80px
    h_ext_320 = 50px
    h_ext_360 = 60px

    f_s = 1.2rem
    f_s_320 = 1rem
    f_s_360 = 1.1rem

    .body
        height 100%
        display flex
        flex-direction column
        justify-content space-between
        align-items center

        .body__menu, .body__languages
            height 100%
            display flex
            flex-direction column
            align-items center
            justify-content space-around
            padding 1rem 0

            div
                a
                    cursor pointer
                    font-weight 700
                    text-transform uppercase
                    font-size f_s
                    color #343a49
                    border-bottom 2px solid #343a49
                    padding-bottom 0.2rem

                    @media (max-width 320px)
                        padding-bottom 0.1rem
                        font-size f_s_320

                    @media (max-width 360px)
                        padding-bottom 0.1rem
                        font-size f_s_360

        .body__bottom, .body__top
            position relative
            display flex
            justify-content center
            flex-direction column
            align-items center
            width 100%

            a
                width 100%

                button
                    background-color transparent
                    border none
                    cursor pointer
                    width 100%
                    font-weight 700
                    text-transform uppercase
                    font-size f_s
                    margin-bottom 0

                    &:focus
                        outline none

        .body__top
            height h_ext
            background-color #ffd24f
            top 0

            a
                height 100%

                button
                    color #343a49
                    height 100%
                    /*border-bottom 2px solid #343a49*/

            @media (max-width 320px)
                height h_ext_320

                a
                    height 100%

                    button
                        height 100%
                        font-size f_s_320
                        padding-bottom 0.1rem

            @media (max-width 360px)
                height h_ext_360

                a
                    height 100%

                    button
                        height 100%
                        font-size f_s_360
                        padding-bottom 0.1rem

        .body__bottom
            height "calc(2 * %s)" % h_ext
            background-color #343a49
            bottom 0

            a
                height 100%

                button
                    color #fff
                    height 100%
                    /*border-bottom 2px solid #fff*/

            @media (max-width 320px)
                height "calc(2 * %s)" % h_ext_320

                a
                    height 100%

                    button
                        height 100%
                        font-size f_s_320
                        padding-bottom 0.1rem

            @media (max-width 360px)
                height "calc(2 * %s)" % h_ext_360

                a
                    height 100%

                    button
                        height 100%
                        font-size f_s_360
                        padding-bottom 0.1rem

    .body__dark
        background-color #343a49

        .body__menu, .body__languages
            div
                a
                    color #f7f7f7
                    border-color #f7f7f7

        .body__bottom
            background-color #fdd04a

            a
                button
                    color #343a49
                    border-color #343a49

    .body__yellow
        background-color #ffd24f

    .body__yellow
        .body__menu, .body__languages
            div
                a
                    color #343a49
                    border-color #343a49

        .body__top
            background-color #343a49

            a
                button
                    color #f7f7f7
                    border-color #f7f7f7

        .body__bottom
            background-color #343a49

            a
                button
                    color #f7f7f7
                    border-color #f7f7f7
</style>