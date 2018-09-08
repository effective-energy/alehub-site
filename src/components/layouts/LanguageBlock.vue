<template>
    <div class="language-block"
         v-if="open">
        <!--:class="{ 'lang-rtl': rtl }"-->
        <div class="language-item"
             v-for="lang in languages"
             :class="[{ 'selected': currentLang === lang.name }, lang.class]"
             @click="changeLanguage(lang.id)">
            <div class="language-item-cover">
            </div>
            <span>
                {{ lang.name.toUpperCase() }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LanguageBlock',
        props: {
            open: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                languages: [
                    {
                        id: 1,
                        name: 'fr',
                        class: 'lang-fr'
                    },
                    {
                        id: 2,
                        name: 'de',
                        class: 'lang-de'
                    },
                    {
                        id: 3,
                        name: 'es',
                        class: 'lang-es'
                    },
                    {
                        id: 4,
                        name: 'ar',
                        class: 'lang-ar'
                    },
                    {
                        id: 5,
                        name: 'ko',
                        class: 'lang-ko'
                    },
                    {
                        id: 6,
                        name: 'ja',
                        class: 'lang-ja'
                    },
                    {
                        id: 7,
                        name: 'zh',
                        class: 'lang-zh'
                    },
                    {
                        id: 8,
                        name: 'ru',
                        class: 'lang-ru'
                    },
                    {
                        id: 9,
                        name: 'en',
                        class: 'lang-en'
                    }
                ],
                selectedLanguage: localStorage.getItem('systemLang'),
            }
        },
        computed: {
            currentLang: function () {
                return this.selectedLanguage;
            },
        },
        methods: {
            toggleDropdown: function () {
                if (!this.langDropdownInProcess) {
                    let tmpDropdownOpen = !this.dropdownOpen;
                    this.langDropdownInProcess = true;

                    if (tmpDropdownOpen) {
                        this.dropdownOpen = tmpDropdownOpen;
                        setTimeout(() => {
                            let duration = 900,
                                currentTime = 0,
                                increment = 100,
                                i = document.getElementsByClassName('language-item').length - 1;

                            let animateScroll = () => {
                                currentTime += increment;
                                document.getElementsByClassName('language-item')[i].style['opacity'] = 1;
                                i--;
                                if (currentTime < duration) {
                                    setTimeout(animateScroll, increment);
                                } else {
                                    this.langDropdownInProcess = false;
                                }
                            };

                            animateScroll();
                        }, 40);
                    } else {
                        setTimeout(() => {
                            let duration = 900,
                                currentTime = 0,
                                increment = 100,
                                i = 0;

                            let animateScroll = () => {
                                currentTime += increment;
                                document.getElementsByClassName('language-item')[i].style['opacity'] = 0;
                                i++;
                                if (currentTime < duration) {
                                    setTimeout(animateScroll, increment);
                                } else {
                                    setTimeout(() => {
                                        this.dropdownOpen = tmpDropdownOpen;
                                        this.langDropdownInProcess = false;
                                    }, increment);
                                }
                            };

                            animateScroll();
                        }, 40);
                    }
                }
            },
            changeLanguage(id) {
                this.selectedLanguage = this.languages.find(l => l.id === id).name;
                this.$i18n.locale = this.selectedLanguage;
                localStorage.setItem('systemLang', this.selectedLanguage);

                if (this.selectedLanguage === 'ar')
                    this.makeRTL();
                else if (this.rtl)
                    this.resetRTL();
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .language-block
        right 100px
        top 80px
        position absolute
        display flex
        justify-content center
        align-items center

        .language-item
            cursor pointer
            /*opacity 0*/
            position relative
            background-color #fff
            margin 0 3px
            width 60px
            height 60px
            background-size cover
            background-repeat no-repeat
            background-position 50% 0
            -webkit-transition all .3s ease-in-out
            -o-transition all .3s ease-in-out
            transition all .3s ease-in-out
            -webkit-box-shadow 0 0 4px 0 rgba(0, 0, 0, .2)
            -moz-box-shadow 0 0 4px 0 rgba(0, 0, 0, .2)
            box-shadow 0 0 4px 0 rgba(0, 0, 0, .2)

            &:hover
                -webkit-box-shadow 0 0 4px 0 rgba(0, 0, 0, .4)
                -moz-box-shadow 0 0 4px 0 rgba(0, 0, 0, .4)
                box-shadow 0 0 4px 0 rgba(0, 0, 0, .4)

                .language-item-cover
                    background-color #fff
                    opacity 0.2

                span
                    opacity 0

            span
                position absolute
                top calc(50% - 12px)
                left calc(50% - 10.5px)
                -webkit-transition all .3s ease-out
                -o-transition all .3s ease-out
                transition all .3s ease-out

            .language-item-cover
                opacity 1
                background-color #fff
                width 100%
                height 100%
                -webkit-transition all .3s ease-out
                -o-transition all .3s ease-out
                transition all .3s ease-out

            &.selected
                -webkit-box-shadow 0 0 4px 0 rgba(0, 0, 0, .4)
                -moz-box-shadow 0 0 4px 0 rgba(0, 0, 0, .4)
                box-shadow 0 0 4px 0 rgba(0, 0, 0, .4)

                .language-item-cover
                    background-color #fff !important
                    opacity 0.2 !important

                span
                    opacity 0 !important

        .lang-en
            margin 0 0 0 3px
            background-image url(../../../static/images/flags/en@2x.png)

        .lang-ru
            position relative
            background-image url(../../../static/images/flags/ru@2x.png)

        .lang-zh
            background-position 0 0
            background-image url(../../../static/images/flags/zh@2x.png)

        .lang-ja
            background-image url(../../../static/images/flags/ja@2x.png)

        .lang-ko
            background-image url(../../../static/images/flags/ko@2x.png)

        .lang-ar
            background-image url(../../../static/images/flags/ar@2x.png)

        .lang-es
            background-image url(../../../static/images/flags/es@2x.png)

        .lang-de
            background-image url(../../../static/images/flags/de@2x.png)

        .lang-fr
            margin 0 3px 0 0
            background-image url(../../../static/images/flags/fr@2x.png)

    .select-lang-rtl
        margin 0 20px 0 0

        .select-lang-dropdown
            left 0
            right auto

            .lang-en
                margin 0 3px 0 0

            .lang-fr
                margin 0 0 0 3px
</style>