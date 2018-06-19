<template>
    <nav class="navbar fixed-top navbar-light"
         :class="{ 'bg-dark-blue': isDark, 'bg-white': !isDark && !isYellow, 'bg-yellow': isYellow }"
         id="navbar">

        <router-link tag="a"
                     to="/"
                     class="navbar-brand"
                     :class="{ 'navbar-brand__rtl': rtl }"
                     @click.native="toggleMenuModal">
            <img class="d-inline-block align-top"
                 src="../../../static/images/logo/alehub-dark.svg"
                 alt="ALEHUB"
                 v-if="!isDark">
            <img class="d-inline-block align-top"
                 src="../../../static/images/logo/alehub.svg"
                 alt="ALEHUB"
                 v-else>
        </router-link>

        <div class="hamburger"
             id="hamburger-6"
             :class="{ 'is-active': activeHamburger }"
             @click="toggleHamburger">
            <span class="line" :class="{ 'line__white': isDark }"></span>
            <span class="line" :class="{ 'line__white': isDark }"></span>
            <span class="line" :class="{ 'line__white': isDark }"></span>
        </div>

        <div class="navbar__blog"
             v-if="isNotIndex">
            <router-link class="navbar-item"
                         tag="a"
                         :to="'/blog/categories/all'">
                {{ $t("navbar.blog") }}
            </router-link>
        </div>

        <div class="navbar-folding" id="navbarText">
            <slider-navbar id="slider-navbar"
                           v-if="!show"
                           :is-dark="isDark"
                           :is-yellow="isYellow"
                           :is-rtl="rtl"
                           :items="$t('navbar.menuList')"
                           :options="optionsToSliderNavbar"/>


            <div class="navbar-folding__inner"
                 v-if="!show">
                <div class="navbar-item" v-for="(item, index) in $t('navbar.menuList')">
                    <a :href="item.path"
                       v-scroll-to="item.path">
                        {{ item.name }}
                    </a>
                    <div class="nav-line"
                         :class="{ 'nav-line__yellow': isYellow, 'nav-line__black': isDark,
                                   'nav-line__white': !isYellow && !isDark }"
                         v-if="index === 0">
                    </div>
                </div>
            </div>

            <div class="right-menu"
                 :class="{ 'right-menu__rtl': rtl, 'right-menu__abs': isNotIndex }">
                <a class="btn btn-login"
                   href="https://sale.alehub.io/"
                   target="_blank">
                    {{ $t("greeting.countDown.btnBuyTokens") }}
                </a>
                <div id="select-lang"
                     class="select-lang"
                     :class="{ 'select-lang__rtl': rtl }"
                     @click="toggleDropdown">
                    {{ currentLang }}
                    <div class="select-lang__dropdown"
                         v-if="dropdownOpen">

                        <!--классы поместить в массив с названиями языков в data()-->
                        <div class="select-lang__item select-lang__fr"
                             :class="{ 'selected': currentLang === 'fr' }"
                             @click="changeLanguage(8);
                                     yaCounter48802643.reachGoal('FR');
                                     return true;">
                            <div class="select-lang__cover">
                            </div>
                            <span>FR</span>
                        </div>
                        <div class="select-lang__item select-lang__de"
                             :class="{ 'selected': currentLang === 'de' }"
                             @click="changeLanguage(7);
                                     yaCounter48802643.reachGoal('DE');
                                     return true;">
                            <div class="select-lang__cover">
                            </div>
                            <span>DE</span>
                        </div>
                        <div class="select-lang__item select-lang__es"
                             :class="{ 'selected': currentLang === 'es' }"
                             @click="changeLanguage(6);
                                     yaCounter48802643.reachGoal('ES');
                                     return true;">
                            <div class="select-lang__cover">
                            </div>
                            <span>ES</span>
                        </div>
                        <div class="select-lang__item select-lang__ar"
                             :class="{ 'selected': currentLang === 'ar' }"
                             @click="changeLanguage(5);
                                     yaCounter48802643.reachGoal('AR');
                                     return true;">
                            <div class="select-lang__cover">
                            </div>
                            <span>AR</span>
                        </div>
                        <div class="select-lang__item select-lang__ko"
                             :class="{ 'selected': currentLang === 'ko' }"
                             @click="changeLanguage(4);
                                     yaCounter48802643.reachGoal('KO');
                                     return true;">
                            <div class="select-lang__cover">
                            </div>
                            <span>KO</span>
                        </div>
                        <div class="select-lang__item select-lang__ja"
                             :class="{ 'selected': currentLang === 'ja' }"
                             @click="changeLanguage(3);
                                     yaCounter48802643.reachGoal('JA');
                                     return true;">
                            <div class="select-lang__cover">
                            </div>
                            <span>JA</span>
                        </div>
                        <div class="select-lang__item select-lang__zh"
                             :class="{ 'selected': currentLang === 'zh' }"
                             @click="changeLanguage(2);
                                     yaCounter48802643.reachGoal('ZH');
                                     return true;">
                            <div class="select-lang__cover">
                            </div>
                            <span>ZH</span>
                        </div>
                        <div class="select-lang__item select-lang__ru"
                             :class="{ 'selected': currentLang === 'ru' }"
                             @click="changeLanguage(1);
                                     yaCounter48802643.reachGoal('RU');
                                     return true;">
                            <div class="select-lang__cover">
                            </div>
                            <span>RU</span>
                        </div>
                        <div class="select-lang__item select-lang__en"
                             :class="{ 'selected': currentLang === 'en' }"
                             @click="changeLanguage(0);
                                     yaCounter48802643.reachGoal('EN');
                                     return true;">
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
                    :yellow="isYellow"/>
    </nav>
</template>

<script>
    import MenuModal from '../modals/MenuModal';
    import SliderNavbar from '../layouts/SliderNavbar';

    export default {
        name: 'HeaderSection', //rename
        components: {
            MenuModal,
            SliderNavbar
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
                langDropdownInProcess: false,
                isLanguagesModal: false,
                isFeatures: false,
                mainIsDark: false,
                isDarkSection: false,
                isTeam: false,
                isDark: false,
                isYellow: false,
                dropdownOpen: false,
                activeHamburger: false,
                activeItem: 0,
                languagesList: ['en', 'ru', 'zh', 'ja', 'ko', 'ar', 'es', 'de', 'fr'],
                selectedLanguage: localStorage.getItem('systemLang'),

                heightLangItem: 0,

                rtl: false,


                optionsToSliderNavbar: {
                    touch: true,
                    autoplay: false,
                    inBlockTeam: false,
                    autoplayDelay: 3000,
                    pauseOnFocus: true,
                    pauseOnHover: true
                },
            }
        },
        watch: {
            rtl: function (val) {
                console.log(val, 'rtl');
            },
            activeItem: function (index) {
                this.changeLineWidth(index);
            },
            isMainDark: function (dark) {

                let navbarYOffset = document.getElementById('navbar').offsetHeight,
                    tgButtonYOffset = document.getElementById('telegram-alert').getBoundingClientRect().top,
                    tgButtonHeight = document.getElementById('telegram-alert').offsetHeight;

                if (dark) {
                    this.mainIsDark = true;
                    if (window.scrollY < this.getCoords(document.getElementById('features')).top - document.getElementById('navbar').offsetHeight) {
                        this.isDark = true;
                        this.isYellow = false;
                    }

                    if (window.scrollY < this.getCoords(document.getElementById('advantages')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset) {
                        this.isDarkSection = true;
                        this.$parent.$emit('checkIsDarkSection', this.isDarkSection);
                    }

                } else {
                    this.mainIsDark = false;
                    if (window.scrollY < this.getCoords(document.getElementById('features')).top - document.getElementById('navbar').offsetHeight) {
                        this.isDark = false;
                        this.isYellow = false;
                    }

                    if (window.scrollY < this.getCoords(document.getElementById('advantages')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset) {
                        this.isDarkSection = false;
                        this.$parent.$emit('checkIsDarkSection', this.isDarkSection);
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
                else if (this.selectedLanguage === 'zh')
                    return 'zh';
                else if (this.selectedLanguage === 'ja')
                    return 'ja';
                else if (this.selectedLanguage === 'fr')
                    return 'fr';
                else if (this.selectedLanguage === 'de')
                    return 'de';
                else if (this.selectedLanguage === 'ar')
                    return 'ar';
                else if (this.selectedLanguage === 'ko')
                    return 'ko';
                else if (this.selectedLanguage === 'es')
                    return 'es';

                return 'en';
            },
            isHeightLangItem: function () {
                return this.heightLangItem;
            },
            isNotIndex: function () {
                return !(this.$route.path === '/');
            },
            navbarOffset: function () {
                return document.getElementById('navbar').offsetHeight;
            },
            darkSections: function () {
                return document.getElementsByClassName('section__dark');
            },
            yellowSections: function () {
                return document.getElementsByClassName('section__yellow');
            }
        },
        methods: {
            checkIsADarkSection: function () {
                for (let i = 0; i < this.darkSections.length; i++) {
                    if (window.scrollY >= this.getCoords(this.darkSections[i]).top - this.navbarOffset &&
                        window.scrollY < this.getCoords(this.darkSections[i]).bottom - this.navbarOffset) {
                        console.log('im in dark');
                        return true;
                    }
                }

                return false;
            },
            checkIsAYellowSection: function () {
                for (let i = 0; i < this.yellowSections.length; i++) {

                }
            },
            makeRTL: function () {
                document.querySelector('body').style['direction'] = 'rtl';
                this.rtl = true;
                console.log('im in rtl');
                setTimeout(() => {
                    this.$parent.$emit('isRtl', this.rtl);
                }, 0);
            },
            resetRTL: function () {
                document.querySelector('body').style['direction'] = 'ltr';
                this.rtl = false;
                this.$parent.$emit('isRtl', this.rtl);
            },
            changeLanguage(index) {
                this.selectedLanguage = this.languagesList[index];
                localStorage.setItem('systemLang', this.selectedLanguage);
                this.$i18n.locale = this.selectedLanguage;

                if (this.selectedLanguage === 'ar')
                    this.makeRTL();
                else if (this.rtl)
                    this.resetRTL();
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

                let elWidth = document.querySelectorAll('.navbar-item')[index].offsetWidth,
                    firstNavbarItem = this.getCoords(document.querySelector('.navbar-item')).left,
                    currentNavbarItem = this.getCoords(document.querySelectorAll('.navbar-item')[index]).left;


                let firstNavbarItemRtl = this.getCoords(document.querySelector('.navbar-item')).right,
                    currentNavbarItemRtl = this.getCoords(document.querySelectorAll('.navbar-item')[index]).right;


                document.querySelector('.nav-line').style.width = elWidth + 'px';

                if (!this.rtl)
                    document.querySelector('.nav-line').style.transform = `translate3D(${ currentNavbarItem - firstNavbarItem }px,0,0)`;
                else
                    document.querySelector('.nav-line').style.transform = `translate3D(${ currentNavbarItemRtl - firstNavbarItemRtl }px,0,0)`;
            },
            getCoords: function (elem) {
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
                                i = document.getElementsByClassName('select-lang__item').length - 1;

                            let animateScroll = () => {
                                currentTime += increment;
                                document.getElementsByClassName('select-lang__item')[i].style['opacity'] = 1;
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
                                document.getElementsByClassName('select-lang__item')[i].style['opacity'] = 0;
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
            checkActive: function () {
                let menu = this.$t('navbar.menuList');
                for (let i = 0; i < menu.length; i++) {
                    if (document.querySelector(menu[i].path) === null)
                        return false;
                    let offset = document.querySelector(menu[i].path).offsetTop - 74;
                    let height = document.querySelector(menu[i].path).offsetHeight;
                    if (window.scrollY > offset && window.scrollY <= offset + height) {
                        this.activeItem = i;
                    }
                }
            },
            preventDefault: function (e) {
                e.preventDefault();
            },
            disableScroll: function () {
                document.body.addEventListener('touchmove', this.preventDefault, {passive: false});
            },
            enableScroll: function () {
                document.body.removeEventListener('touchmove', this.preventDefault, {passive: false});
            }
        },
        mounted() {
            if (this.selectedLanguage === 'ar') {
                this.makeRTL();
            }

            this.$on('changeModalLanguage', (val) => {
                this.selectedLanguage = val;
            });

            this.$on('closeModal', () => {
                this.activeHamburger = false;
                document.getElementById('navbar').classList.remove('no-boxshadow');
                this.$parent.$emit('isOpenedModalMenu', false);
                this.enableScroll();
            });

            this.$on('openedModalMenu', () => {
                document.getElementById('navbar').classList.add('no-boxshadow');
                this.$parent.$emit('isOpenedModalMenu', true);
                // this.disableScroll();
            });

            setTimeout(() => {
                this.changeLineWidth(this.activeItem);
            }, 500);

            let pointerToTop = null,
                pointerToTopOffset = null,
                tgButtonYOffset = null,
                tgButtonHeight = null;

            if (document.getElementById('wrap-pointer')) {
                pointerToTop = document.getElementById('wrap-pointer'),
                    pointerToTopOffset = pointerToTop.offsetHeight;
            }

            if (document.getElementById('navbar')) {
                let navbarYOffset = document.getElementById('navbar').offsetHeight;

                if (document.getElementById('telegram-alert')) {
                    tgButtonYOffset = document.getElementById('telegram-alert').getBoundingClientRect().top;
                    tgButtonHeight = document.getElementById('telegram-alert').offsetHeight;
                } else if (document.getElementById('telegram-alert-mobile')) {
                    tgButtonYOffset = document.getElementById('telegram-alert-mobile').getBoundingClientRect().top;
                    tgButtonHeight = document.getElementById('telegram-alert-mobile').offsetHeight;
                }

                window.addEventListener('scroll', () => {
                    this.checkActive();

                    //чекаем навбары
                    if (this.checkIsADarkSection()) {
                        if (!this.isDark) {
                            this.isDark = true;
                            this.isYellow = false;
                        }
                    } else if (this.checkIsAYellowSection()) {
                        if (!this.isYellow) {
                            this.isDark = false;
                            this.isYellow = true;
                        }
                    }

                    if (this.isMainDark && window.scrollY < this.getCoords(document.getElementById('mission')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset) {
                        if (!this.isDarkSection) {
                            this.isDarkSection = true;
                            this.$parent.$emit('checkIsDarkSection', this.isDarkSection);
                        }

                        //этот блок в функцию
                        if (this.isFeatures) {
                            this.isFeatures = false;
                            this.$parent.$emit('checkIsFeatures', this.isFeatures);
                        }
                        if (this.isTeam) {
                            this.isTeam = false;
                            this.$parent.$emit('checkIsTeam', this.isTeam);
                        }
                    }

                    if (!this.isMainDark && window.scrollY < this.getCoords(document.getElementById('mission')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset) {
                        if (this.isDarkSection) {
                            this.isDarkSection = false;
                            this.$parent.$emit('checkIsDarkSection', this.isDarkSection);
                        }

                        //этот блок в функцию
                        if (this.isFeatures) {
                            this.isFeatures = false;
                            this.$parent.$emit('checkIsFeatures', this.isFeatures);
                        }
                        if (this.isTeam) {
                            this.isTeam = false;
                            this.$parent.$emit('checkIsTeam', this.isTeam);
                        }
                    }

                    // if (window.scrollY >= this.getCoords(document.getElementById('mission')).top - navbarYOffset &&
                    //     window.scrollY <= this.getCoords(document.getElementById('advantages')).top - navbarYOffset) {
                    //     if (!this.isDark) {
                    //         this.isDark = true;
                    //         this.isYellow = false;
                    //     }
                    //     if (this.isFeatures) {
                    //         this.isFeatures = false;
                    //         this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    //     }
                    //     if (!this.isTeam) {
                    //         this.isTeam = true;
                    //         this.$parent.$emit('checkIsTeam', this.isTeam);
                    //     }
                    // }

                    if (window.scrollY >= this.getCoords(document.getElementById('mission')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset &&
                        window.scrollY < this.getCoords(document.getElementById('mission').nextElementSibling).top - tgButtonYOffset - navbarYOffset) {
                        if (!this.isDarkSection) {
                            this.isDarkSection = true;
                            this.$parent.$emit('checkIsDarkSection', this.isDarkSection);
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

                    // if (window.scrollY < this.getCoords(document.getElementById('mission')).top - navbarYOffset) {
                    //     if (this.isDark || this.isYellow) {
                    //         this.isDark = false;
                    //         this.isYellow = false;
                    //     }
                    //     if (!this.isFeatures) {
                    //         this.isFeatures = false;
                    //         this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    //     }
                    //     if (this.isTeam) {
                    //         this.isTeam = false;
                    //         this.$parent.$emit('checkIsTeam', this.isTeam);
                    //     }
                    // }

                    // if (window.scrollY < this.getCoords(document.getElementById('features')).top - navbarYOffset &&
                    //     window.scrollY >= this.getCoords(document.getElementById('advantages')).top - navbarYOffset) {
                    //     if (!this.mainIsDark && (this.isDark || this.isYellow)) {
                    //         this.isDark = false;
                    //         this.isYellow = false;
                    //     }
                    //     if (this.mainIsDark && (!this.isDark || this.isYellow)) {
                    //         this.isDark = true;
                    //         this.isYellow = false;
                    //     }
                    //     if (this.isFeatures) {
                    //         this.isFeatures = false;
                    //         this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    //     }
                    //     if (this.isTeam) {
                    //         this.isTeam = false;
                    //         this.$parent.$emit('checkIsTeam', this.isTeam);
                    //     }
                    // }

                    // if (window.scrollY >= this.getCoords(document.getElementById('advantages')).top - navbarYOffset &&
                    //     window.scrollY < this.getCoords(document.getElementById('features')).top - navbarYOffset) {
                    //     if (this.isDark || this.isYellow) {
                    //         this.isDark = false;
                    //         this.isYellow = false;
                    //     }
                    //     if (!this.isFeatures) {
                    //         this.isFeatures = false;
                    //         this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    //     }
                    //     if (this.isTeam) {
                    //         this.isTeam = false;
                    //         this.$parent.$emit('checkIsTeam', this.isTeam);
                    //     }
                    // }

                    // if (window.scrollY >= this.getCoords(document.getElementById('features')).top - navbarYOffset &&
                    //     window.scrollY < this.getCoords(document.getElementById('team')).top - navbarYOffset) {
                    //     if (!this.isYellow) {
                    //         this.isDark = false;
                    //         this.isYellow = true;
                    //     }
                    //     if (!this.isFeatures) {
                    //         this.isFeatures = true;
                    //         this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    //     }
                    //     if (this.isTeam) {
                    //         this.isTeam = false;
                    //         this.$parent.$emit('checkIsTeam', this.isTeam);
                    //     }
                    // }

                    // if (window.scrollY >= this.getCoords(document.getElementById('team')).top - navbarYOffset &&
                    //     window.scrollY < this.getCoords(document.getElementById('ico')).top - navbarYOffset) {
                    //     if (this.isDark || this.isYellow) {
                    //         this.isDark = false;
                    //         this.isYellow = false;
                    //     }
                    //     if (this.isFeatures) {
                    //         this.isFeatures = false;
                    //         this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    //     }
                    //     if (!this.isTeam) {
                    //         this.isTeam = true;
                    //         this.$parent.$emit('checkIsTeam', this.isTeam);
                    //     }
                    // }

                    if (window.scrollY >= this.getCoords(document.getElementById('advantages')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset &&
                        window.scrollY < this.getCoords(document.getElementById('ico')).top - tgButtonYOffset - navbarYOffset) {
                        if (this.isDarkSection) {
                            this.isDarkSection = false;
                            this.$parent.$emit('checkIsDarkSection', this.isDarkSection);
                        }
                    }

                    if (window.scrollY >= this.getCoords(document.getElementById('ico')).top - tgButtonYOffset - navbarYOffset &&
                        window.scrollY < this.getCoords(document.getElementById('download-application')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset) {
                        if (!this.isDarkSection) {
                            this.isDarkSection = true;
                            this.$parent.$emit('checkIsDarkSection', this.isDarkSection);
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

                    if (window.scrollY >= this.getCoords(document.getElementById('download-application')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset) {
                        if (this.isDarkSection) {
                            this.isDarkSection = false;
                            this.$parent.$emit('checkIsDarkSection', this.isDarkSection);
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

                    // if (window.scrollY >= this.getCoords(document.getElementById('ico')).top - navbarYOffset &&
                    //     window.scrollY < this.getCoords(document.getElementById('download-application')).top - navbarYOffset) {
                    //     if (!this.isDark) {
                    //         this.isYellow = false;
                    //         this.isDark = true;
                    //     }
                    //     if (this.isFeatures) {
                    //         this.isFeatures = false;
                    //         this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    //     }
                    //     if (this.isTeam) {
                    //         this.isTeam = false;
                    //         this.$parent.$emit('checkIsTeam', this.isTeam);
                    //     }
                    // }

                    // if (window.scrollY >= this.getCoords(document.getElementById('download-application')).top - navbarYOffset) {
                    //     if (this.isDark || this.isYellow) {
                    //         this.isDark = false;
                    //         this.isYellow = false;
                    //     }
                    //     if (this.isFeatures) {
                    //         this.isFeatures = false;
                    //         this.$parent.$emit('checkIsFeatures', this.isFeatures);
                    //     }
                    //     if (this.isTeam) {
                    //         this.isTeam = false;
                    //         this.$parent.$emit('checkIsTeam', this.isTeam);
                    //     }
                    // }

                    if (window.scrollY >= this.getCoords(document.getElementById('footer')).top + navbarYOffset - 20 - window.innerHeight)
                        this.$parent.$emit('scrollInFooter', true);
                    else if (window.scrollY < this.getCoords(document.getElementById('footer')).top + navbarYOffset - 20 - window.innerHeight)
                        this.$parent.$emit('scrollInFooter', false);

                    if (pointerToTop && window.scrollY >= this.getCoords(document.getElementById('ico')).top - parseFloat(getComputedStyle(pointerToTop).top) &&
                        window.scrollY < this.getCoords(document.getElementById('download-application')).top - parseFloat(getComputedStyle(pointerToTop).top)) {
                        this.$parent.$emit('pointerInDark', true);
                    } else if (pointerToTop && (window.scrollY < this.getCoords(document.getElementById('ico')).top - parseFloat(getComputedStyle(pointerToTop).top) ||
                        window.scrollY >= this.getCoords(document.getElementById('download-application')).top - parseFloat(getComputedStyle(pointerToTop).top))) {
                        this.$parent.$emit('pointerInDark', false);
                    }

                    if (window.scrollY < this.getCoords(document.getElementById('team')).top - navbarYOffset) {
                        this.$parent.$emit('effectiveEnergyAutoplay', false);
                        this.$parent.$emit('serokellAutoplay', false);
                        this.$parent.$emit('advisorsAutoplay', false);
                    }
                    if (window.scrollY > this.getCoords(document.getElementById('team')).top - navbarYOffset &&
                        window.scrollY < this.getCoords(document.getElementById('serokell-team')).top - navbarYOffset) {
                        this.$parent.$emit('effectiveEnergyAutoplay', true);
                        this.$parent.$emit('serokellAutoplay', false);
                        this.$parent.$emit('advisorsAutoplay', false);
                    }
                    if (window.scrollY >= this.getCoords(document.getElementById('serokell-team')).top - navbarYOffset &&
                        window.scrollY < this.getCoords(document.getElementById('advisors')).top - navbarYOffset) {
                        this.$parent.$emit('effectiveEnergyAutoplay', false);
                        this.$parent.$emit('serokellAutoplay', true);
                        this.$parent.$emit('advisorsAutoplay', false);
                    }
                    if (window.scrollY >= this.getCoords(document.getElementById('advisors')).top - navbarYOffset &&
                        window.scrollY < this.getCoords(document.getElementById('ico')).top - navbarYOffset) {
                        this.$parent.$emit('effectiveEnergyAutoplay', false);
                        this.$parent.$emit('serokellAutoplay', false);
                        this.$parent.$emit('advisorsAutoplay', true);
                    }

                });
            }

            if (document.getElementById('select-lang'))
                this.heightLangItem = document.getElementById('select-lang').offsetHeight;

        }
    }
</script>

<style lang="stylus" scoped>

    .navbar
        flex-wrap nowrap

        .navbar-folding
            display flex
            position relative
            height 100%
            width 100%

            @media (max-width 1024px)
                display none

            #slider-navbar
                display none !important

                @media (min-width 1024px) and (max-width 1350px)
                    display flex !important

            .navbar-folding__inner
                width 100%
                width 100%
                position relative
                display flex
                flex-direction row
                align-items center
                justify-content space-around

                @media (min-width 1024px) and (max-width 1350px)
                    display none !important

                .navbar-item
                    font-size 18px
                    font-weight 600

                    a
                        color #0f1118

                        &:hover
                            text-decoration none
                            color #0f1118

                .nav-line
                    position absolute
                    height 2px
                    background-color #34343e
                    bottom 10px
                    -webkit-transition all .5s ease
                    -o-transition all .5s ease
                    transition all .5s ease

            .right-menu
                position block

                @media (min-width 1024px) and (max-width 1350px)
                    position absolute
                    right 0

            .right-menu__rtl
                @media (min-width 1024px) and (max-width 1350px)
                    position absolute
                    left 0
                    right auto

        .navbar__blog
            width 100%
            left 0
            position absolute
            display flex
            justify-content center
            align-items center

            .navbar-item
                font-size 18px
                font-weight 600
                color #0f1118

                &:hover
                    text-decoration none

            @media (max-width 425px)
                display none

    .select-lang
        cursor pointer
        display flex
        justify-content center
        align-items center
        padding 0 20px
        margin 0 0 0 20px
        font-weight 700
        text-transform uppercase

        @media (max-width 1024px)
            margin-left 10px

        @media (max-width 420px)
            display none

        .select-lang__dropdown
            right 0
            top 72px
            position absolute
            display flex
            justify-content center
            align-items center

            .selected
                -webkit-box-shadow 0 0 4px 0 rgba(0, 0, 0, .4)
                -moz-box-shadow 0 0 4px 0 rgba(0, 0, 0, .4)
                box-shadow 0 0 4px 0 rgba(0, 0, 0, .4)

                .select-lang__cover
                    background-color #fff !important
                    opacity 0.2 !important

                span
                    opacity 0 !important

            .select-lang__item
                opacity 0
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

                    .select-lang__cover
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

                .select-lang__cover
                    opacity 1
                    background-color #fff
                    width 100%
                    height 100%
                    -webkit-transition all .3s ease-out
                    -o-transition all .3s ease-out
                    transition all .3s ease-out

            .select-lang__en
                margin 0 0 0 3px
                background-image url(../../../static/images/flags/en@2x.png)

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
                margin 0 3px 0 0
                background-image url(../../../static/images/flags/fr@2x.png)

    .select-lang__rtl
        margin 0 20px 0 0

        .select-lang__dropdown
            left 0
            right auto

            .select-lang__en
                margin 0 3px 0 0

            .select-lang__fr
                margin 0 0 0 3px

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
        cursor pointer
        z-index 100
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
            -webkit-transition all .3s ease-in-out
            -o-transition all .3s ease-in-out
            transition all .3s ease-in-out

    #hamburger-6.is-active
        -webkit-transition all .3s ease-in-out
        -o-transition all .3s ease-in-out
        transition all .3s ease-in-out
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
        background-color #ffbc00 !important

    .nav-line__yellow
        background-color #343a49 !important

    .nav-line__black
        background-color #ffbc00 !important

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

    .bg-yellow
        background-color #ffd24f

        .select-lang
            .select-lang__dropdown
                .select-lang__item
                    border-left none

                    .select-lang__cover
                        background-color #ffd24f

                    &:before
                        background -moz-linear-gradient(top, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -webkit-gradient(left top, left bottom, color-stop(0%, #ffd24f), color-stop(100%, rgba(0, 0, 0, 0.2)))
                        background -webkit-linear-gradient(top, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -o-linear-gradient(top, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)
                        background -ms-linear-gradient(top, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)
                        background linear-gradient(to bottom, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)

                    &:after
                        top 0
                        height 61px
                        background -moz-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #ffd24f 100%)
                        background -webkit-gradient(left top, right top, color-stop(0%, rgba(0, 0, 0, 0.2)), color-stop(100%, #ffd24f))
                        background -webkit-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #ffd24f 100%)
                        background -o-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #ffd24f 100%)
                        background -ms-linear-gradient(left, rgba(0, 0, 0, 0.2) 0%, #ffd24f 100%)
                        background linear-gradient(to right, rgba(0, 0, 0, 0.2) 0%, #ffd24f 100%)

                    &:first-child
                        &:before
                            width 62px
                            left -2px

                    &:last-child
                        &:after
                            background -moz-linear-gradient(left, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -webkit-gradient(left top, right top, color-stop(0%, #ffd24f), color-stop(100%, rgba(0, 0, 0, 0.2)))
                            background -webkit-linear-gradient(left, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -o-linear-gradient(left, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)
                            background -ms-linear-gradient(left, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)
                            background linear-gradient(to right, #ffd24f 0%, rgba(0, 0, 0, 0.2) 100%)
                        &:before
                            width 62px

    .bg-yellow, .bg-orange
        .btn-login
            background-color #343a49
            color white

            &:hover
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

        .navbar-item
            a
                -webkit-transition all 0.4s ease
                -o-transition all 0.4s ease
                transition all 0.4s ease
                color #fff !important

        .navbar-folding
            color white

        .select-lang
            color #fff

            .select-lang__dropdown
                .select-lang__item
                    border-left none

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
                        top 0
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

    @media (max-width 1440px)
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

    @media (max-width 1300px)
        .navbar-nav
            .nav-item
                .nav-link
                    padding-left 10px
                    padding-right 10px

    @media (max-width 1200px)
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

    @media (max-width 1440px)
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

    @media (max-width 1300px)
        .navbar-nav
            .nav-item
                .nav-link
                    padding-left 10px
                    padding-right 10px

    @media (max-width 1200px)
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

    @media (max-width 1024px)
        .navbar
            padding-left 32px
            padding-right 32px

        .hamburger
            display block

    .navbar-brand__rtl
        img
            margin 0 0 0 8px

    .right-menu__abs
        position absolute
        right 0

</style>
