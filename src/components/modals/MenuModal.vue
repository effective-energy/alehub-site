<template>
    <modal name="menu-modal"
           class="menu"
           @opened="opened"
           @closed="closedModal('menu-modal')">

        <div class="body"
             :class="{ 'body__dark': isDark, 'body__yellow': isYellow, 'body__orange': isOrange }">
            <div class="body__menu" v-if="!isSelectingLanguage">
                <div v-for="item in $t('navbar.menuList')">
                    <a v-scroll-to="item.path"
                       @click="closeModal('menu-modal')">
                        {{ item.name }}
                    </a>
                </div>
            </div>
            <div class="body__languages"
                 v-if="isSelectingLanguage">
                <div v-for="(item, langIndex) in languages">
                    <a @click="changeLanguage(langIndex)">
                        {{ item.name }}
                    </a>
                </div>
            </div>
            <div class="body__bottom">
                <a v-if="!isSelectingLanguage"
                   @click="toSelectLanguage">
                    {{ $t('menuModal.selectLang') }}
                </a>
                <a v-else
                   @click="toNavigationMenu">
                    {{ $t('menuModal.navigationMenu') }}
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
            },
            orange: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                selectingLanguage: false,
                languages: [
                    {
                        name: 'en'
                    },
                    {
                        name: 'ru'
                    },
                    {
                        name: 'zh'
                    }
                ],
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
            isOrange: function () {
                return this.orange;
            }
        },
        methods: {
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
                localStorage.setItem('systemLang', this.languages[index].name);
                this.$i18n.locale = this.languages[index].name;
                this.$parent.$emit('changeModalLanguage', this.languages[index].name);
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
    .body
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center

        .body__menu
            display flex
            flex-direction column
            align-items center
            padding-bottom 100px

            div
                padding 1.1rem 0

                a
                    cursor pointer
                    font-weight 700
                    text-transform uppercase
                    font-size 1.2rem
                    color #343a49
                    border-bottom 2px solid #343a49
                    padding-bottom 0.2rem

            @media (max-width 320px)
                padding-bottom 60px

                div
                    padding 0.8rem 0

                    a
                        font-size 1rem

        .body__languages
            padding-bottom 100px

            div
                padding 1.1rem 0

                a
                    cursor pointer
                    background-color transparent
                    border none
                    font-weight 700
                    text-transform uppercase
                    font-size 1.2rem
                    color #343a49
                    border-bottom 2px solid #343a49
                    padding-bottom 0.2rem
                    margin-bottom 0

            @media (max-width 320px)
                padding-bottom 60px

                div
                    padding 0.8rem 0

                    a
                        font-size 1rem

        .body__bottom
            display flex
            justify-content center
            align-items center
            background-color #343a49
            width 100%
            position absolute
            height 100px
            bottom 0

            a
                cursor pointer
                background-color transparent
                border none
                font-weight 700
                text-transform uppercase
                font-size 1.2rem
                color #f7f7f7
                border-bottom 2px solid #f7f7f7
                padding-bottom 0.2rem
                margin-bottom 0

                &:focus
                    outline none

            @media (max-width 320px)
                height 60px

                a
                    font-size 1rem

    .body__dark
        background-color #343a49

        .body__menu
            div
                a
                    color #f7f7f7
                    border-color #f7f7f7

        .body__languages
            div
                a
                    color #f7f7f7
                    border-color #f7f7f7

        .body__bottom
            background-color #fdd04a

            a
                color #343a49
                border-color #343a49

    .body__yellow
        background-color #fdc135

        .body__menu
            div
                a
                    color #343a49
                    border-color #343a49

        .body__languages
            div
                a
                    color #343a49
                    border-color #343a49

        .body__bottom
            background-color #343a49

            a
                color #f7f7f7
                border-color #f7f7f7

    .body__orange
        background-color #feaf1c

        .body__menu
            div
                a
                    color #343a49
                    border-color #343a49

        .body__languages
            div
                a
                    color #343a49
                    border-color #343a49

        .body__bottom
            background-color #343a49

            a
                color #f7f7f7
                border-color #f7f7f7
</style>