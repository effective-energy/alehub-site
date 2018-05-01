<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light"
         :class="{ 'bg-dark-blue': isDark, 'bg-white': !isDark && !isYellow && !isOrange, 'bg-yellow': isYellow, 'bg-orange': isOrange }"
         id="navbar">
        <router-link tag="a" to="/" class="navbar-brand">
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

        <div class="choose-languages" @click="asd">
            <span>
                {{ selectedLanguage }}
            </span>
        </div>

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
                <li v-for="(item, index) in navbar"
                    :key="index"
                    class="nav-item"
                    :class="{ active: index === activeItem }">

                    <a @click="activeItem = index"
                       class="nav-link"
                       v-scroll-to="item.path">
                        <!--:href="item.path">-->
                        {{$t("navbar.menuList["+index+"].title")}}
                    </a>
                </li>
                <li class="nav-line nav-line__yellow" v-if="isYellow"></li>
                <li class="nav-line nav-line__orange" v-else-if="isOrange"></li>
                <li class="nav-line nav-line__black" v-else-if="isDark"></li>
                <li class="nav-line nav-line__white" v-else></li>
            </ul>
            <ul class="navbar-nav mr-auto ml-auto" v-else-if="show == 'blog'">
                <router-link tag="li" :to="`/blog`" class="nav-item">
                    <a href="#" class="nav-link">{{$t("navbar.blog")}}</a>
                </router-link>
            </ul>
            <div class="right-menu">
                <button type="button"
                        class="btn btn-login">
                    {{$t("navbar.loginBtn")}}
                </button>
                <b-dropdown :text="currentLang">
                    <b-dropdown-item :active="lang === currentLang"
                                     v-for="(lang, langIndex) in languagesList"
                                     @click="changeLanguage(langIndex)"
                                     :key="langIndex">
                        {{ lang }}
                    </b-dropdown-item>
                </b-dropdown>
            </div>
            <button type="button" class="btn btn-actions">ok</button>
        </div>

        <languages-modal/>
        <menu-modal/>
    </nav>
</template>

<script>
    import MenuModal from '../modals/MenuModal';
    import LanguagesModal from '../modals/LanguagesModal';

    export default {
        name: 'HeaderSection', //rename
        components: {
            MenuModal,
            LanguagesModal
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
                    // {
                    //     path: '#advisors',
                    //     name: 'Advisors'
                    // },
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
                languagesList: ['eng', 'rus'],
                selectedLanguage: localStorage.getItem('systemLang')
            }
        },
        watch: {
            activeItem: function (index) {
                this.changeLineWidth(index);
            },
            isMainDark: function (dark) {
                // console.log(dark, 'dark');
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
            currentLang() {
                if (this.selectedLanguage === 'eng') {
                    return 'eng';
                } else if (this.selectedLanguage === 'rus') {
                    return 'rus';
                } else {
                    return 'eng';
                }
            }
        },
        methods: {
            asd: function () {
                if (!this.isLanguagesModal) {
                    this.openModal('languages-modal');
                    this.isLanguagesModal = true;
                } else {
                    this.closeModal('languages-modal');
                    this.isLanguagesModal = false;
                }
            },
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
                if (!document.querySelector('.nav-line')) return false
                let elWidth = document.querySelectorAll('.nav-item')[index].offsetWidth;
                document.querySelector('.nav-line').style.width = elWidth + 'px';

                let scope = 0;
                for (let i = 0; i <= index; i++) {
                    if (index === 0 || index === i) continue;
                    scope += document.querySelectorAll('.nav-item')[i].offsetWidth;
                }
                document.querySelector('.nav-line').style.transform = `translate3D(${scope}px,0,0)`;
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
                this.dropdownOpen = !this.dropdownOpen;
            },
            toggleHamburger: function () {
                this.activeHamburger = !this.activeHamburger;

                (this.activeHamburger) ? this.openModal('menu-modal') : this.closeModal('menu-modal');
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

            this.$on('changeNavbar', () => {
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
            })
        }
    }
</script>

<style lang="stylus" scoped>

    .choose-languages
        display none

    @media (max-width 420px)
        .choose-languages
            text-transform uppercase
            color #34343e
            display block
            font-size 22px
            font-weight 600
            text-decoration underline

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

    .bg-yellow
        background-color #fdc135

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
        .btn-login
            display none

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

    @media (max-width 1100px)
        .btn-login
            display none

        .dropdown
            display none

        .btn-actions
            display unset

    @media (max-width 768px)
        .navbar
            padding-left 32px
            padding-right 32px

        .hamburger
            display block

</style>
