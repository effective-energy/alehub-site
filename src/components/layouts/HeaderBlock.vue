<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light"
         :class="{ 'bg-dark-blue': isDark, 'bg-white': !isDark && !isYellow && !isOrange, 'bg-yellow': isYellow, 'bg-orange': isOrange }"
         id="navbar">

        <router-link tag="a"
                     to="/"
                     class="navbar-brand"
                     @click.native="toggleMenuModal">
            <img class="d-inline-block align-top"
                 src="../../../static/images/ale-logo.svg"
                 alt="ALEHUB"
                 v-if="!isDark">
            <img class="d-inline-block align-top"
                 src="../../../static/images/ale-logo-white.svg"
                 alt="ALEHUB"
                 v-else>
            ALEHUB
        </router-link>

        <!--<a href="#" class="navbar-brand">-->
        <!--<img class="d-inline-block align-top"-->
        <!--src="../../../static/images/ale-logo.svg"-->
        <!--alt="ALEHUB"-->
        <!--v-if="!isDark">-->
        <!--<img class="d-inline-block align-top"-->
        <!--src="../../../static/images/ale-logo-white.svg"-->
        <!--alt="ALEHUB"-->
        <!--v-else>-->
        <!--ALEHUB-->
        <!--</a>-->

        <div class="hamburger"
             id="hamburger-6"
             :class="{ 'is-active': activeHamburger }"
             @click="toggleHamburger">
            <span class="line" :class="{ 'line__white': isDark }"></span>
            <span class="line" :class="{ 'line__white': isDark }"></span>
            <span class="line" :class="{ 'line__white': isDark }"></span>
        </div>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto ml-auto" v-if="!show">
                <li v-for="(item, index) in $t('navbar.menuList')"
                    :key="index"
                    class="nav-item"
                    :class="{ active: index === activeItem }">

                    <a @click="activeItem = index"
                       class="nav-link"
                       v-scroll-to="item.path">
                        {{ item.name }}
                    </a>
                </li>
                <li class="nav-line nav-line__yellow" v-if="isYellow"></li>
                <li class="nav-line nav-line__orange" v-else-if="isOrange"></li>
                <li class="nav-line nav-line__black" v-else-if="isDark"></li>
                <li class="nav-line nav-line__white" v-else></li>
            </ul>

            <ul class="navbar-nav mr-auto ml-auto"
                v-else-if="show === 'blog'">

                <router-link class="nav-item"
                             tag="li"
                             :to="'/blog'">
                    <a href="#" class="nav-link">
                        {{ $t("navbar.blog") }}
                    </a>
                </router-link>
            </ul>
            <div class="right-menu">
                <a class="btn btn-login"
                   href="http://presale.alehub.io/"
                   target="_blank">
                    {{ $t("navbar.loginBtn") }}
                </a>
                <div id="select-lang" class="select-lang" @click="toggleDropdown">
                    {{ currentLang }}
                    <div class="select-lang__dropdown"
                         v-if="dropdownOpen">

                        <!--классы поместить в массив с названиями языков в data()-->
                        <div class="select-lang__item select-lang__fr">
                            <div class="select-lang__cover">
                            </div>
                            <span>FR</span>
                        </div>
                        <div class="select-lang__item select-lang__de">
                            <div class="select-lang__cover">
                            </div>
                            <span>DE</span>
                        </div>
                        <div class="select-lang__item select-lang__es">
                            <div class="select-lang__cover">
                            </div>
                            <span>ES</span>
                        </div>
                        <div class="select-lang__item select-lang__ar">
                            <div class="select-lang__cover">
                            </div>
                            <span>AR</span>
                        </div>
                        <div class="select-lang__item select-lang__ko">
                            <div class="select-lang__cover">
                            </div>
                            <span>KO</span>
                        </div>
                        <div class="select-lang__item select-lang__ja">
                            <div class="select-lang__cover">
                            </div>
                            <span>JA</span>
                        </div>
                        <div class="select-lang__item select-lang__zh"
                             :class="{ 'selected': currentLang === 'ch' }"
                             @click="changeLanguage(2)">
                            <div class="select-lang__cover">
                            </div>
                            <span>ZH</span>
                        </div>
                        <div class="select-lang__item select-lang__ru"
                             :class="{ 'selected': currentLang === 'ru' }"
                             @click="changeLanguage(1)">
                            <div class="select-lang__cover">
                            </div>
                            <span>RU</span>
                        </div>
                        <div class="select-lang__item select-lang__en"
                             :class="{ 'selected': currentLang === 'en' }"
                             @click="changeLanguage(0)">
                            <div class="select-lang__cover">
                            </div>
                            <span>EN</span>
                        </div>

                    </div>

                </div>
            </div>
            <button type="button" class="btn btn-actions" v-if="false">
                ok
            </button>
        </div>

        <menu-modal :dark="isDark"
                    :yellow="isYellow"
                    :orange="isOrange"/>
    </nav>
</template>

<script>
    import MenuModal from '../modals/MenuModal';

    export default {
        name: 'HeaderSection', //rename
        components: {
            MenuModal,
        },
        props: {
            isMainDark: {
                type: [Boolean],
                required: false
            },
            show: {
                type: [String],
                required: false
            }
        },
        data() {
            return {
                isLanguagesModal: false,
                isFeatures: false,
                mainIsDark: false,
                isTeam: false,
                isDark: false,
                isYellow: false,
                isOrange: false,
                dropdownOpen: false,
                activeHamburger: false,
                navbar: [
                    {
                        path: '#home',
                        name: 'Home'
                    },
                    {
                        path: '#description',
                        name: 'Description'
                    },
                    {
                        path: '#advantages',
                        name: 'Advantages'
                    },
                    {
                        path: '#features',
                        name: 'Features'
                    },
                    {
                        path: '#team',
                        name: 'Team'
                    },
                    {
                        path: '#ico',
                        name: 'ICO'
                    },
                    {
                        path: '#roadmap',
                        name: 'Roadmap'
                    },
                    {
                        path: '#blog',
                        name: 'Blog'
                    },
                ],
                activeItem: 0,
                languagesList: ['en', 'ru', 'ch', 'ja', 'ko', 'ar', 'es', 'de', 'fr'],
                selectedLanguage: localStorage.getItem('systemLang'),

                heightLangItem: 0
            }
        },
        watch: {
            activeItem: function (index) {
                this.changeLineWidth(index);
            },
            isMainDark: function (dark) {
                console.log(dark, 'dark');
                if (dark) {
                    this.mainIsDark = true;
                    if (window.scrollY < this.getCoords(document.getElementById('features')).top - document.getElementById('navbar').offsetHeight) {
                        this.isDark = true;
                        this.isYellow = false;
                        this.isOrange = false;
                    }
                } else {
                    this.mainIsDark = false;
                    if (window.scrollY < this.getCoords(document.getElementById('features')).top - document.getElementById('navbar').offsetHeight) {
                        this.isDark = false;
                        this.isYellow = false;
                        this.isOrange = false;
                    }
                }
            }
        },
        computed: {
            currentLang: function () {
                if (this.selectedLanguage === 'en')
                    return 'en';
                else if (this.selectedLanguage === 'ru')
                    return 'ru';
                else if (this.selectedLanguage === 'ch')
                    return 'ch';

                return 'en';
            },
            isNavLinks: function () {
                return this.navLinks;
            },
            isModalIsOpen: function () {
                return this.modalIsOpen;
            },

            isHeightLangItem: function () {
                return this.heightLangItem;
            },
        },
        methods: {
            changeLanguage(index) {
                this.selectedLanguage = this.languagesList[index];
                localStorage.setItem('systemLang', this.selectedLanguage);
                this.$i18n.locale = this.selectedLanguage
            },
            openModal: function (name) {
                this.$modal.show(name);
            },
            closeModal: function (name) {
                this.$modal.hide(name);
            },
            changeLineWidth: function (index) {
                if (!document.querySelector('.nav-line'))
                    return false;

                let elWidth = document.querySelectorAll('.nav-item')[index].offsetWidth;
                document.querySelector('.nav-line').style.width = elWidth + 'px';

                let scope = 0;
                for (let i = 0; i <= index; i++) {
                    if (index === 0 || index === i)
                        continue;
                    scope += document.querySelectorAll('.nav-item')[i].offsetWidth;
                }
                document.querySelector('.nav-line').style.transform = `translate3D(${ scope }px,0,0)`;
            },
            getCoords: function (elem) {
                if (!elem)
                    return false;
                let box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            },
            toggleDropdown: function () {
                let tmpDropdownOpen = !this.dropdownOpen;

                if (tmpDropdownOpen) {

                    this.dropdownOpen = tmpDropdownOpen;

                    setTimeout(() => {
                        let duration = 900,
                            currentTime = 0,
                            increment = 100,
                            i = document.getElementsByClassName('select-lang__item').length - 1;

                        let animateScroll = () => {
                            currentTime += increment;
                            document.getElementsByClassName('select-lang__item')[i].style['opacity'] = 1;
                            i--;
                            if (currentTime < duration) {
                                setTimeout(animateScroll, increment);
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
                            document.getElementsByClassName('select-lang__item')[i].style['opacity'] = 0;
                            i++;
                            if (currentTime < duration) {
                                setTimeout(animateScroll, increment);
                            } else {
                                setTimeout(() => {
                                    this.dropdownOpen = tmpDropdownOpen;
                                }, increment);
                            }
                        };

                        animateScroll();
                    }, 40);
                }
            },
            toggleMenuModal: function () {
                if (this.activeHamburger)
                    this.closeModal('menu-modal');
            },
            toggleHamburger: function () {
                this.activeHamburger = !this.activeHamburger;

                if (this.activeHamburger) {
                    this.openModal('menu-modal');
                } else {
                    this.closeModal('menu-modal');
                }
            },
            // initScroll: function () {
            //     window.addEventListener('scroll', () => {
            //         this.checkActive();
            //     })
            // },
            checkActive: function () {
                for (let i = 0; i < this.navbar.length; i++) {
                    if (document.querySelector(this.navbar[i].path) === null)
                        return false;
                    let offset = document.querySelector(this.navbar[i].path).offsetTop - 74;
                    let height = document.querySelector(this.navbar[i].path).offsetHeight;
                    if (window.scrollY > offset && window.scrollY <= offset + height) {
                        this.activeItem = i;
                    }
                }
            }
        },
        mounted() {
            this.$on('changeModalLanguage', (val) => {
                this.selectedLanguage = val;
            });

            this.$on('closeModal', () => {
                this.activeHamburger = false;
                document.getElementById('navbar').classList.remove('no-boxshadow');
            });

            this.$on('openedModalMenu', () => {
                document.getElementById('navbar').classList.add('no-boxshadow');
            });

            this.$on('closedModal', () => {
                document.getElementById('navbar').classList.remove('no-boxshadow');
            });

            setTimeout(() => {
                this.changeLineWidth(this.activeItem);
            }, 500);

            let navbarYOffset = document.getElementById('navbar').offsetHeight;


            window.addEventListener('scroll', () => {
                this.checkActive();

                if (window.scrollY < this.getCoords(document.getElementById('features')).top - navbarYOffset) {
                    if (!this.mainIsDark && (this.isDark || this.isYellow || this.isOrange)) {
                        this.isDark = false;
                        this.isYellow = false;
                        this.isOrange = false;
                    }
                    if (this.mainIsDark && (!this.isDark || this.isYellow || this.isOrange)) {
                        this.isDark = true;
                        this.isYellow = false;
                        this.isOrange = false;
                    }
                    if (this.isFeatures) {
                        this.isFeatures = false;
                        this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    }
                    if (this.isTeam) {
                        this.isTeam = false;
                        this.$parent.$emit('checkIsTeam', this.isTeam);
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('advantages')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('features')).top - navbarYOffset) {
                    if (this.isDark || this.isYellow || this.isOrange) {
                        this.isDark = false;
                        this.isOrange = false;
                        this.isYellow = false;
                    }
                    if (!this.isFeatures) {
                        this.isFeatures = false;
                        this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    }
                    if (this.isTeam) {
                        this.isTeam = false;
                        this.$parent.$emit('checkIsTeam', this.isTeam);
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('features')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('main-features')).top - navbarYOffset) {
                    if (!this.isYellow) {
                        this.isDark = false;
                        this.isOrange = false;
                        this.isYellow = true;
                    }
                    if (!this.isFeatures) {
                        this.isFeatures = true;
                        this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    }
                    if (this.isTeam) {
                        this.isTeam = false;
                        this.$parent.$emit('checkIsTeam', this.isTeam);
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('main-features')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('team')).top - navbarYOffset) {
                    if (!this.isOrange) {
                        this.isDark = false;
                        this.isYellow = false;
                        this.isOrange = true;
                    }
                    if (!this.isFeatures) {
                        this.isFeatures = true;
                        this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    }
                    if (this.isTeam) {
                        this.isTeam = false;
                        this.$parent.$emit('checkIsTeam', this.isTeam);
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('team')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('ico')).top - navbarYOffset) {
                    if (this.isDark || this.isYellow || this.isOrange) {
                        this.isDark = false;
                        this.isYellow = false;
                        this.isOrange = false;
                    }
                    if (this.isFeatures) {
                        this.isFeatures = false;
                        this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    }
                    if (!this.isTeam) {
                        this.isTeam = true;
                        this.$parent.$emit('checkIsTeam', this.isTeam);
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('ico')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('blog')).top - navbarYOffset) {
                    if (!this.isDark) {
                        this.isYellow = false;
                        this.isOrange = false;
                        this.isDark = true;
                    }
                    if (this.isFeatures) {
                        this.isFeatures = false;
                        this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    }
                    if (this.isTeam) {
                        this.isTeam = false;
                        this.$parent.$emit('checkIsTeam', this.isTeam);
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('blog')).top - navbarYOffset) {
                    if (this.isDark || this.isYellow || this.isOrange) {
                        this.isDark = false;
                        this.isYellow = false;
                        this.isOrange = false;
                    }
                    if (this.isFeatures) {
                        this.isFeatures = false;
                        this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    }
                    if (this.isTeam) {
                        this.isTeam = false;
                        this.$parent.$emit('checkIsTeam', this.isTeam);
                    }
                }
            });

            if (document.getElementById('select-lang'))
                this.heightLangItem = document.getElementById('select-lang').offsetHeight;
        }
    }
</script>

<style lang="stylus" scoped>

    .select-lang
        cursor pointer
        /*position relative*/
        display flex
        justify-content center
        align-items center
        padding 0 20px
        margin-left 20px
        font-weight 700
        text-transform uppercase

        @media (max-width 1024px)
            margin-left 10px

        @media (max-width 420px)
            display none

        .select-lang__dropdown
            right 60px
            top 75px
            /*width 540px*/
            position absolute
            display flex
            justify-content center
            align-items center /*-webkit-box-shadow 0 2px 2px 0 rgba(0, 0, 0, .2)
            -moz-box-shadow 0 2px 2px 0 rgba(0, 0, 0, .2)
            box-shadow 0 2px 2px 0 rgba(0, 0, 0, .2)*/

            .selected
                .select-lang__cover
                    background-color #fff !important
                    opacity 0.2 !important

                span
                    opacity 0 !important

            .select-lang__item
                opacity 0
                position relative
                background-color #fff
                width 60px
                height 60px
                background-size cover
                background-repeat no-repeat
                background-position 50% 0
                border-left 1px solid #e0e0e0

                &:before
                    width 60px
                    height 3px
                    content ""
                    position absolute
                    bottom -3px
                    background -moz-linear-gradient(top, rgba(0, 0, 0, .2) 0%, rgba(236, 236, 240, 1) 100%)
                    background -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0, 0, 0, 1)), color-stop(100%, rgba(236, 236, 240, 1)))
                    background -webkit-linear-gradient(top, rgba(0, 0, 0, .2) 0%, rgba(236, 236, 240, 1) 100%)
                    background -o-linear-gradient(top, rgba(0, 0, 0, .2) 0%, rgba(236, 236, 240, 1) 100%)
                    background -ms-linear-gradient(top, rgba(0, 0, 0, .2) 0%, rgba(236, 236, 240, 1) 100%)
                    background linear-gradient(to bottom, rgba(0, 0, 0, .2) 0%, rgba(236, 236, 240, 1) 100%)

                &:hover
                    .select-lang__cover
                        background-color #fff
                        opacity 0.2

                    span
                        opacity 0
                /*color #34343e*/
                /*text-shadow:
                        -1px -1px 0 #fff,
                        1px -1px 0 #fff,
                        -1px 1px 0 #fff,
                        1px 1px 0 #fff;*/

                span
                    position absolute
                    top calc(50% - 12px)
                    left calc(50% - 10.5px)
                    -webkit-transition all .3s ease-out
                    -o-transition all .3s ease-out
                    transition all .3s ease-out

                .select-lang__cover
                    opacity 1
                    background-color #fff
                    width 100%
                    height 100%
                    -webkit-transition all .3s ease-out
                    -o-transition all .3s ease-out
                    transition all .3s ease-out

            .select-lang__en
                background-image url(../../../static/images/flags/en@2x.png)

                &:after
                    height 60px
                    width 3px
                    content ""
                    position absolute
                    right -3px
                    top 2px
                    background -moz-linear-gradient(left, rgba(204, 204, 204, 1) 0%, rgba(236, 236, 240, 1) 100%)
                    background -webkit-gradient(left top, right top, color-stop(0%, rgba(204, 204, 204, 1)), color-stop(100%, rgba(236, 236, 240, 1)))
                    background -webkit-linear-gradient(left, rgba(204, 204, 204, 1) 0%, rgba(236, 236, 240, 1) 100%)
                    background -o-linear-gradient(left, rgba(204, 204, 204, 1) 0%, rgba(236, 236, 240, 1) 100%)
                    background -ms-linear-gradient(left, rgba(204, 204, 204, 1) 0%, rgba(236, 236, 240, 1) 100%)
                    background linear-gradient(to right, rgba(204, 204, 204, 1) 0%, rgba(236, 236, 240, 1) 100%)

            .select-lang__ru
                position relative
                background-image url(../../../static/images/flags/ru@2x.png)

            .select-lang__zh
                background-position 0 0
                background-image url(../../../static/images/flags/zh@2x.png)

            .select-lang__ja
                background-image url(../../../static/images/flags/ja@2x.png)

            .select-lang__ko
                background-image url(../../../static/images/flags/ko@2x.png)

            .select-lang__ar
                background-image url(../../../static/images/flags/ar@2x.png)

            .select-lang__es
                background-image url(../../../static/images/flags/es@2x.png)

            .select-lang__de
                background-image url(../../../static/images/flags/de@2x.png)

            .select-lang__fr
                background-image url(../../../static/images/flags/fr@2x.png)
                border-left none

                &:after
                    height 60px
                    width 3px
                    content ""
                    position absolute
                    left -3px
                    top 2px
                    background -moz-linear-gradient(left, rgba(236, 236, 240, 1) 0%, rgba(204, 204, 204, 1) 100%)
                    background -webkit-gradient(left top, right top, color-stop(0%, rgba(236, 236, 240, 1)), color-stop(100%, rgba(204, 204, 204, 1)))
                    background -webkit-linear-gradient(left, rgba(236, 236, 240, 1) 0%, rgba(204, 204, 204, 1) 100%)
                    background -o-linear-gradient(left, rgba(236, 236, 240, 1) 0%, rgba(204, 204, 204, 1) 100%)
                    background -ms-linear-gradient(left, rgba(236, 236, 240, 1) 0%, rgba(204, 204, 204, 1) 100%)
                    background linear-gradient(to right, rgba(236, 236, 240, 1) 0%, rgba(204, 204, 204, 1) 100%)

    .choose-languages
        display none

    @media (max-width 420px)
        .choose-languages
            text-transform uppercase
            color #34343e
            /*display block*/
            font-size 20px
            font-weight 600
            text-decoration underline
            height 100%
            display flex
            align-items center

    .no-boxshadow
        -webkit-box-shadow none !important
        -moz-box-shadow none !important
        box-shadow none !important

    .hamburger
        display none

    .line__white
        background-color #ffffff !important

    .hamburger
        .line
            cursor pointer
            width 30px
            height 2px
            background-color #3e3d42
            display block
            margin 8px auto
            -webkit-transition all 0.3s ease-in-out
            -o-transition all 0.3s ease-in-out
            transition all 0.3s ease-in-out

    #hamburger-6.is-active
        -webkit-transition all 0.3s ease-in-out
        -o-transition all 0.3s ease-in-out
        transition all 0.3s ease-in-out
        -webkit-transition-delay 0.6s
        -o-transition-delay 0.6s
        transition-delay 0.6s
        -webkit-transform rotate(45deg)
        -ms-transform rotate(45deg)
        -o-transform rotate(45deg)
        transform rotate(45deg)

    #hamburger-6.is-active .line:nth-child(2)
        width 0

    #hamburger-6.is-active
        .line:nth-child(1), .line:nth-child(3)
            -webkit-transition-delay 0.3s
            -o-transition-delay 0.3s
            transition-delay 0.3s

        .line:nth-child(1)
            -webkit-transform translateY(10px)
            -ms-transform translateY(10px)
            -o-transform translateY(10px)
            transform translateY(10px)

        .line:nth-child(3)
            -webkit-transform translateY(-10px) rotate(90deg)
            -ms-transform translateY(-10px) rotate(90deg)
            -o-transform translateY(-10px) rotate(90deg)
            transform translateY(-10px) rotate(90deg)

    .btn-login
        &:focus
            -webkit-box-shadow none
            -moz-box-shadow none
            box-shadow none

    .btn-actions
        display none

    .dropdown-menu
        display block

    .btn.dropdown-toggle
        background-color transparent
        &:focus
            -webkit-box-shadow none
            -moz-box-shadow none
            box-shadow none

    .nav-line__white
        border 1px solid #fff
        border-width 0 24px
        background-color #ffbc00

    .nav-line__yellow
        border 1px solid #fdc135
        border-width 0 24px
        background-color #343a49

    .nav-line__orange
        border 1px solid #feaf1c
        border-width 0 24px
        background-color #343a49

    .nav-line__black
        border 1px solid #343a49
        border-width 0 24px
        background-color #ffbc00

    .nav-item
        cursor pointer

    .navbar
        -webkit-box-shadow 0px 2px 2px 0px rgba(0, 0, 0, 0.2)
        -moz-box-shadow 0px 2px 2px 0px rgba(0, 0, 0, 0.2)
        box-shadow 0px 2px 2px 0px rgba(0, 0, 0, 0.2)
        -webkit-transition all 0.4s ease
        -o-transition all 0.4s ease
        transition all 0.4s ease
        max-width 100vw

    .bg-orange
        background-color #feaf1c

        .select-lang
            .select-lang__dropdown
                .select-lang__item
                    .select-lang__cover
                        background-color #feaf1c

                    &:before
                        background -moz-linear-gradient(top, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -webkit-gradient(left top, left bottom, color-stop(0%, #feaf1c), color-stop(100%, rgba(0, 0, 0, 0.2)))
                        background -webkit-linear-gradient(top, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -o-linear-gradient(top, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -ms-linear-gradient(top, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)
                        background linear-gradient(to bottom, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)

                    &:after
                        top 0px
                        height 61px
                        background -moz-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #feaf1c 100%)
                        background -webkit-gradient(left top, right top, color-stop(0%, rgba(0, 0, 0, 0.2)), color-stop(100%, #feaf1c))
                        background -webkit-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #feaf1c 100%)
                        background -o-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #feaf1c 100%)
                        background -ms-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #feaf1c 100%)
                        background linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, #feaf1c 100%)

                    &:first-child
                        &:before
                            width 62px
                            left -2px

                    &:last-child
                        &:after
                            background -moz-linear-gradient(left, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -webkit-gradient(left top, right top, color-stop(0%, #feaf1c), color-stop(100%, rgba(0, 0, 0, 0.2)))
                            background -webkit-linear-gradient(left, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -o-linear-gradient(left, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -ms-linear-gradient(left, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)
                            background linear-gradient(to right, #feaf1c 0%, rgba(0, 0, 0, 0.2) 100%)
                        &:before
                            width 62px

    .bg-yellow
        background-color #fdc135

        .select-lang
            .select-lang__dropdown
                .select-lang__item
                    .select-lang__cover
                        background-color #fdc135

                    &:before
                        background -moz-linear-gradient(top, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -webkit-gradient(left top, left bottom, color-stop(0%, #fdc135), color-stop(100%, rgba(0, 0, 0, 0.2)))
                        background -webkit-linear-gradient(top, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -o-linear-gradient(top, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -ms-linear-gradient(top, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)
                        background linear-gradient(to bottom, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)

                    &:after
                        top 0px
                        height 61px
                        background -moz-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #fdc135 100%)
                        background -webkit-gradient(left top, right top, color-stop(0%, rgba(0, 0, 0, 0.2)), color-stop(100%, #fdc135))
                        background -webkit-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #fdc135 100%)
                        background -o-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #fdc135 100%)
                        background -ms-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #fdc135 100%)
                        background linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, #fdc135 100%)

                    &:first-child
                        &:before
                            width 62px
                            left -2px

                    &:last-child
                        &:after
                            background -moz-linear-gradient(left, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -webkit-gradient(left top, right top, color-stop(0%, #fdc135), color-stop(100%, rgba(0, 0, 0, 0.2)))
                            background -webkit-linear-gradient(left, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -o-linear-gradient(left, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -ms-linear-gradient(left, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)
                            background linear-gradient(to right, #fdc135 0%, rgba(0, 0, 0, 0.2) 100%)
                        &:before
                            width 62px

    .bg-yellow, .bg-orange

        .btn-login
            background-color #343a49
            color white

    .bg-dark-blue
        background-color #343a49

        .btn.dropdown-toggle
            color #ffffff

            &:after
                background url(../../../static/images/expand-arrow-white.svg)
                background-repeat no-repeat

        .navbar-brand
            color #fff

        .nav-link
            -webkit-transition all 0.4s ease
            -o-transition all 0.4s ease
            transition all 0.4s ease
            color #fff !important

        .select-lang
            color #fff

            .select-lang__dropdown
                .select-lang__item
                    .select-lang__cover
                        background-color #343a49

                    &:before
                        background -moz-linear-gradient(top, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -webkit-gradient(left top, left bottom, color-stop(0%, #343a49), color-stop(100%, rgba(0, 0, 0, 0.2)))
                        background -webkit-linear-gradient(top, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -o-linear-gradient(top, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -ms-linear-gradient(top, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)
                        background linear-gradient(to bottom, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)

                    &:after
                        top 0px
                        height 61px
                        background -moz-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #343a49 100%)
                        background -webkit-gradient(left top, right top, color-stop(0%, rgba(0, 0, 0, 0.2)), color-stop(100%, #343a49))
                        background -webkit-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #343a49 100%)
                        background -o-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #343a49 100%)
                        background -ms-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #343a49 100%)
                        background linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, #343a49 100%)

                    &:first-child
                        &:before
                            width 62px
                            left -2px

                    &:last-child
                        &:after
                            background -moz-linear-gradient(left, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -webkit-gradient(left top, right top, color-stop(0%, #343a49), color-stop(100%, rgba(0, 0, 0, 0.2)))
                            background -webkit-linear-gradient(left, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -o-linear-gradient(left, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -ms-linear-gradient(left, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)
                            background linear-gradient(to right, #343a49 0%, rgba(0, 0, 0, 0.2) 100%)
                        &:before
                            width 62px

    .btn-login
        &:hover
            color #34343e

    @media (max-width: 1440px)
        .navbar-nav
            .nav-item
                .nav-link
                    padding-left 15px
                    padding-right 15px

                &:first-child
                    .nav-link
                        padding-left 0

                &:last-child
                    .nav-link
                        padding-right 16px

        .dropdown-toggle
            font-size 16px

    @media (max-width: 1300px)
        .navbar-nav
            .nav-item
                .nav-link
                    padding-left 10px
                    padding-right 10px

    @media (max-width: 1200px)
        .navbar-nav
            .nav-item
                .nav-link
                    padding-left 6px
                    padding-right 6px

        .btn-login
            padding-right 6px
            padding-left 6px

        .dropdown-button
            padding-right 8px
            padding-left 8px

        .navbar-brand
            margin-right 8px

    @media (max-width 1100px)
        /*.btn-login*/
            /*display none*/

        .dropdown
            display none

        .btn-actions
            display unset

    @media (max-width: 1440px)
        .navbar-nav
            .nav-item
                .nav-link
                    padding-left 15px
                    padding-right 15px

                &:first-child
                    .nav-link
                        padding-left 0

                &:last-child
                    .nav-link
                        padding-right 16px

        .dropdown-toggle
            font-size 16px

    @media (max-width: 1300px)
        .navbar-nav
            .nav-item
                .nav-link
                    padding-left 10px
                    padding-right 10px

    @media (max-width: 1200px)
        .navbar-nav
            .nav-item
                .nav-link
                    padding-left 6px
                    padding-right 6px

        .btn-login
            padding-right 6px
            padding-left 6px

        .dropdown-button
            padding-right 8px
            padding-left 8px

        .navbar-brand
            margin-right 8px

    /*@media (max-width 1100px)*/
        /*!*.btn-login*!*/
            /*!*display none*!*/

        /*.dropdown*/
            /*display none*/

        /*.btn-actions*/
            /*display unset*/

    @media (max-width 768px)
        .navbar
            padding-left 32px
            padding-right 32px

        .hamburger
            display block

</style>
