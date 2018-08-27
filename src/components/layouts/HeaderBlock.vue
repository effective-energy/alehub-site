<template>
    <nav class="navbar fixed-top navbar-light"
         :class="{ 'bg-dark-blue': isDark, 'bg-white': !isDark && !isYellow, 'bg-yellow': isYellow }"
         id="navbar">

        <router-link class="navbar-brand"
                     tag="a"
                     to="/"
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
            <span class="line"
                  :class="{ 'line__white': isDark }">
            </span>
            <span class="line"
                  :class="{ 'line__white': isDark }">
            </span>
            <span class="line"
                  :class="{ 'line__white': isDark }">
            </span>
        </div>

        <div class="navbar__blog"
             v-if="isBlogPage">
            <router-link class="navbar-item"
                         tag="a"
                         :to="'/blog/categories/all'">
                {{ $t("navbar.blog") }}
            </router-link>
        </div>

        <div class="white-list"
             v-if="isWhiteList">
            <router-link class="navbar-item"
                         tag="a"
                         :to="'/'">
                {{ $t("navbar.home") }}
            </router-link>
        </div>

        <div class="navbar-folding"
             id="navbarText">
            <slider-navbar id="slider-navbar"
                           v-if="!show && !whiteList"
                           :is-dark="isDark"
                           :is-yellow="isYellow"
                           :is-rtl="rtl"
                           :items="$t('navbar.menuList')"
                           :options="optionsToSliderNavbar"/>


            <div class="navbar-folding__inner"
                 v-if="!show && !whiteList">
                <div class="navbar-item"
                     v-for="(item, index) in $t('navbar.menuList')">
                    <a :href="item.path"
                       v-scroll-to="item.path">
                        {{ item.name }}
                    </a>
                    <div class="nav-line"
                         :class="{ 'nav-line__yellow': isYellow,
                                   'nav-line__black': isDark,
                                   'nav-line__white': !isYellow && !isDark }"
                         v-if="index === 0">
                    </div>
                </div>
            </div>

            <div class="right-menu"
                 :class="{ 'right-menu__rtl': rtl,
                           'right-menu__abs': isBlogPage || isWhiteList }">

                <router-link tag="a"
                             to="/white-list"
                             class="btn btn-login">
                    {{ $t("greeting.countDown.btnBuyTokens") }}
                </router-link>

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
            },
            whiteList: {
                type: Boolean,
                default: false
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
                    if (window.scrollY < this.getPageCoords(document.getElementById('features')).top - document.getElementById('navbar').offsetHeight) {
                        this.isDark = true;
                        this.isYellow = false;
                    }

                    if (window.scrollY < this.getPageCoords(document.getElementById('advantages')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset) {
                        this.isDarkSection = true;
                        this.$parent.$emit('checkIsDarkSection', this.isDarkSection);
                    }

                } else {
                    this.mainIsDark = false;
                    if (window.scrollY < this.getPageCoords(document.getElementById('features')).top - document.getElementById('navbar').offsetHeight) {
                        this.isDark = false;
                        this.isYellow = false;
                    }

                    if (window.scrollY < this.getPageCoords(document.getElementById('advantages')).top - tgButtonYOffset + tgButtonHeight - navbarYOffset) {
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
            isBlogPage: function () {
                return !(this.$route.path === '/' || this.$route.path === '/white-list');
            },
            isWhiteList: function () {
                return this.$route.path === '/white-list';
            },
            navbarOffset: function () {
                return document.getElementById('navbar').offsetHeight;
            },
            darkSections: function () {
                return document.getElementsByClassName('section__dark');
            },
            yellowSections: function () {
                return document.getElementsByClassName('section__yellow');
            },
            wrapPointer: function () {
                return document.getElementById('wrap-pointer');
            },
            tgButton: function () {
                return document.getElementById('telegram-alert');
            },
            tgButtonYOffset: function () {
                return this.getScreenCoords(this.tgButton).top + this.tgButton.offsetHeight / 2;
            },
            tgButtonMobile: function () {
                return document.getElementById('telegram-alert-mobile');
            },
            tgButtonMobileYOffset: function () {
                return this.navbarOffset + this.tgButtonMobile.offsetHeight;
            },
            mailButton: function () {
                return document.getElementById('email-subscribe-alert');
            },
            mailButtonYOffset: function () {
                return this.getScreenCoords(this.mailButton).top + this.mailButton.offsetHeight / 2;
            }
        },
        methods: {
            /**
             * checking for a page in the dark section
             *
             * @returns {boolean}
             */
            checkIsADarkSection: function () {
                for (let i = 0; i < this.darkSections.length; i++)
                    if (window.scrollY >= this.getPageCoords(this.darkSections[i]).top - this.navbarOffset &&
                        window.scrollY < this.getPageCoords(this.darkSections[i]).bottom - this.navbarOffset)
                        return true;

                return false;
            },
            /**
             * checking for a page in the yellow section
             *
             * @returns {boolean}
             */
            checkIsAYellowSection: function () {
                for (let i = 0; i < this.yellowSections.length; i++)
                    if (window.scrollY >= this.getPageCoords(this.yellowSections[i]).top - this.navbarOffset &&
                        window.scrollY < this.getPageCoords(this.yellowSections[i]).bottom - this.navbarOffset)
                        return true;

                return false;
            },
            /**
             * checking for a toTopPanel in the dark section
             *
             * @returns {boolean}
             */
            checkToTopPanelInDarkSection: function () {
                for (let i = 0; i < this.darkSections.length; i++)
                    if (this.wrapPointer && window.scrollY >= this.getPageCoords(this.darkSections[i]).top - parseFloat(getComputedStyle(this.wrapPointer).top) &&
                        window.scrollY < this.getPageCoords(this.darkSections[i]).bottom - parseFloat(getComputedStyle(this.wrapPointer).top))
                        return true;

                return false;
            },
            /**
             * checking for a tgButton in the dark section
             *
             * @returns {boolean}
             */
            checkTgButtonInDarkSection: function () {
                for (let i = 0; i < this.darkSections.length; i++)
                    if (window.scrollY >= this.getPageCoords(this.darkSections[i]).top - this.tgButtonYOffset &&
                        window.scrollY < this.getPageCoords(this.darkSections[i]).bottom - this.tgButtonYOffset)
                        return true;

                return false;
            },
            /**
             * checking for a tgButtonMobile in the dark section
             *
             * @returns {boolean}
             */
            checkTgButtonMobileInDarkSection: function () {
                for (let i = 0; i < this.darkSections.length; i++)
                    if (window.scrollY >= this.getPageCoords(this.darkSections[i]).top - this.tgButtonMobileYOffset &&
                        window.scrollY < this.getPageCoords(this.darkSections[i]).bottom - this.tgButtonMobileYOffset)
                        return true;

                return false;
            },
            /**
             * checking for a tgButton in the yellow section
             *
             * @returns {boolean}
             */
            checkTgButtonInYellowSection: function () {
                for (let i = 0; i < this.yellowSections.length; i++)
                    if (window.scrollY >= this.getPageCoords(this.yellowSections[i]).top - this.tgButtonYOffset &&
                        window.scrollY < this.getPageCoords(this.yellowSections[i]).bottom - this.tgButtonYOffset)
                        return true;

                return false;
            },
            /**
             * checking for a mailButton in the dark section
             *
             * @returns {boolean}
             */
            checkMailButtonInDarkSection: function () {
                for (let i = 0; i < this.darkSections.length; i++)
                    if (window.scrollY >= this.getPageCoords(this.darkSections[i]).top - this.mailButtonYOffset &&
                        window.scrollY < this.getPageCoords(this.darkSections[i]).bottom - this.mailButtonYOffset)
                        return true;

                return false;
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
                    firstNavbarItem = this.getPageCoords(document.querySelector('.navbar-item')).left,
                    currentNavbarItem = this.getPageCoords(document.querySelectorAll('.navbar-item')[index]).left;


                let firstNavbarItemRtl = this.getPageCoords(document.querySelector('.navbar-item')).right,
                    currentNavbarItemRtl = this.getPageCoords(document.querySelectorAll('.navbar-item')[index]).right;


                document.querySelector('.nav-line').style.width = elWidth + 'px';

                if (!this.rtl)
                    document.querySelector('.nav-line').style.transform = `translate3D(${ currentNavbarItem - firstNavbarItem }px,0,0)`;
                else
                    document.querySelector('.nav-line').style.transform = `translate3D(${ currentNavbarItemRtl - firstNavbarItemRtl }px,0,0)`;
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
            /**
             * getting the coordinates of the element on the screen
             *
             * @param elem
             * @returns {{top: number, left: number, right: number, bottom: number}}
             */
            getScreenCoords: function (elem) {
                let box = elem.getBoundingClientRect();

                return {
                    top: box.top,
                    left: box.left,
                    right: box.right,
                    bottom: box.bottom
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
                pointerToTop = document.getElementById('wrap-pointer');
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

                    //check navbar
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
                    } else {
                        if (this.isYellow || this.isDark) {
                            this.isDark = false;
                            this.isYellow = false;
                        }
                    }

                    //check to top pointer
                    if (this.checkToTopPanelInDarkSection()) {
                        this.$parent.$emit('pointerInDark', true);
                        this.$parent.$emit('checkPointerStyle', 'pointer__white');
                    } else {
                        this.$parent.$emit('pointerInDark', false);
                        this.$parent.$emit('checkPointerStyle', 'pointer__dark');
                    }

                    //check tg button
                    if (this.checkTgButtonInDarkSection()) {
                        this.$parent.$emit('checkTgButtonStyle', 'telegram-alert__yellow');
                        this.$parent.$emit('checkTgButtonMessagesStyle', 'alert-messages__grey');
                    } else if (this.checkTgButtonInYellowSection()) {
                        this.$parent.$emit('checkTgButtonStyle', 'telegram-alert__dark');
                        this.$parent.$emit('checkTgButtonMessagesStyle', 'alert-messages__grey');
                    } else {
                        this.$parent.$emit('checkTgButtonStyle', 'telegram-alert__dark');
                        this.$parent.$emit('checkTgButtonMessagesStyle', 'alert-messages__yellow');
                    }

                    //check tg mobile button
                    if (this.checkTgButtonMobileInDarkSection()) {
                        this.$parent.$emit('checkTgButtonMobileStyle', 'telegram-alert-mobile__yellow');
                    } else {
                        this.$parent.$emit('checkTgButtonMobileStyle', 'telegram-alert-mobile__dark');
                    }

                    //check mail button
                    if (this.checkMailButtonInDarkSection()) {
                        this.$parent.$emit('checkMailButtonStyle', 'email-subscribe-alert__yellow');
                    } else {
                        this.$parent.$emit('checkMailButtonStyle', 'email-subscribe-alert__dark');
                    }

                    if (window.scrollY >= this.getPageCoords(document.getElementById('footer')).top + navbarYOffset - 20 - window.innerHeight)
                        this.$parent.$emit('scrollInFooter', true);
                    else if (window.scrollY < this.getPageCoords(document.getElementById('footer')).top + navbarYOffset - 20 - window.innerHeight)
                        this.$parent.$emit('scrollInFooter', false);

                    if (window.scrollY < this.getPageCoords(document.getElementById('team')).top - navbarYOffset) {
                        this.$parent.$emit('effectiveEnergyAutoplay', false);
                        this.$parent.$emit('serokellAutoplay', false);
                        this.$parent.$emit('advisorsAutoplay', false);
                    }
                    if (window.scrollY > this.getPageCoords(document.getElementById('team')).top - navbarYOffset &&
                        window.scrollY < this.getPageCoords(document.getElementById('serokell-team')).top - navbarYOffset) {
                        this.$parent.$emit('effectiveEnergyAutoplay', true);
                        this.$parent.$emit('serokellAutoplay', false);
                        this.$parent.$emit('advisorsAutoplay', false);
                    }
                    if (window.scrollY >= this.getPageCoords(document.getElementById('serokell-team')).top - navbarYOffset &&
                        window.scrollY < this.getPageCoords(document.getElementById('advisors')).top - navbarYOffset) {
                        this.$parent.$emit('effectiveEnergyAutoplay', false);
                        this.$parent.$emit('serokellAutoplay', true);
                        this.$parent.$emit('advisorsAutoplay', false);
                    }
                    if (window.scrollY >= this.getPageCoords(document.getElementById('advisors')).top - navbarYOffset &&
                        window.scrollY < this.getPageCoords(document.getElementById('ico')).top - navbarYOffset) {
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

        .navbar__blog,
        .white-list
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
