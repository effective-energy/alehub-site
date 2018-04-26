<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light"
         :class="{ 'bg-dark-blue': isBlack, 'bg-white': !isBlack && !isYellow, 'bg-yellow': isYellow }"
         id="navbar">
        <a href="#" class="navbar-brand">
            <img class="d-inline-block align-top"
                 src="../../../static/images/ale-logo.svg"
                 alt="ALEHUB"
                 v-if="!isBlack">
            <img class="d-inline-block align-top"
                 src="../../../static/images/ale-logo-white.svg"
                 alt="ALEHUB"
                 v-else>
            ALEHUB
        </a>
        <div class="hamburger"
             id="hamburger-6"
             :class="{ 'is-active': activeHamburger }"
             @click="toggleHamburger">
            <span class="line" :class="{ 'line__white': isBlack }"></span>
            <span class="line" :class="{ 'line__white': isBlack }"></span>
            <span class="line" :class="{ 'line__white': isBlack }"></span>
        </div>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto ml-auto">
                <li v-for="(item, index) in navbar"
                    :key="index"
                    class="nav-item"
                    :class="{ active: index === activeItem }">
                    <a @click="activeItem = index"
                       class="nav-link"
                       v-scroll-to="item.path">
                        <!--:href="item.path">-->
                        {{item.name}}
                    </a>
                </li>
                <li class="nav-line nav-line__yellow" v-if="isYellow"></li>
                <li class="nav-line nav-line__black" v-else-if="isBlack"></li>
                <li class="nav-line nav-line__white" v-else></li>
            </ul>
            <div class="right-menu">
                <button type="button"
                        class="btn btn-login">
                    Log in
                </button>
                <div class="dropdown">
                    <button class="btn dropdown-toggle"
                            id="dropdownMenuButton"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        <!--@click="toggleDropdown">-->
                        en
                    </button>
                    <div class="dropdown-menu"
                         aria-labelledby="dropdownMenuButton"
                         v-if="dropdownOpen">
                        <a class="dropdown-item" href="#">cn</a>
                        <a class="dropdown-item" href="#">ru</a>
                    </div>
                </div>
                <button type="button" class="btn btn-actions">ok</button>
            </div>
        </div>

        <menu-modal/>
    </nav>
</template>

<script>
    import MenuModal from '../modals/MenuModal';

    export default {
        name: 'Header', //rename
        components: {
            MenuModal
        },
        data() {
            return {
                isBlack: false,
                isYellow: false,
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
                        path: '#advisors',
                        name: 'Advisors'
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
                activeItem: 0
            }
        },
        watch: {
            activeItem: function (index) {
                this.changeLineWidth(index);
            }
        },
        methods: {
            openModal: function (name) {
                this.$modal.show(name);
            },
            closeModal: function (name) {
                this.$modal.hide(name);
            },
            changeLineWidth: function (index) {
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
                console.log(elem, 'elem');
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
            initScroll: function () {
                let _this = this;
                window.addEventListener('scroll', function () {
                    _this.checkActive()
                })
            },
            checkActive: function () {
                for (let i = 0; i < this.navbar.length; i++) {
                    if(document.querySelector(this.navbar[i].path) === null) return false;
                    let offset = document.querySelector(this.navbar[i].path).offsetTop-74
                    let height = document.querySelector(this.navbar[i].path).offsetHeight
                    if (window.scrollY > offset && window.scrollY <= offset+height) {
                        this.activeItem = i;
                    }
                }
            }
        },
        mounted() {
            this.$on('closeModal', function (val) {
                this.activeHamburger = val;
            });

            setTimeout(() => {
                this.changeLineWidth(this.activeItem);
            }, 500);

            let navbar = document.getElementById('navbar'),
                navbarYOffset = navbar.offsetHeight;

            //сделать только один лисенер скролла

            this.initScroll();

            //переместить в index

            window.addEventListener('scroll', () => {
                if (window.scrollY < this.getCoords(document.getElementById('features')).top - navbarYOffset) {
                    if (this.isBlack || this.isYellow) {
                        this.isBlack = false;
                        this.isYellow = false;
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('features')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('team')).top - navbarYOffset) {
                    if (!this.isYellow) {
                        this.isBlack = false;
                        this.isYellow = true;
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('team')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('ico')).top - navbarYOffset) {
                    if (this.isBlack || this.isYellow) {
                        this.isBlack = false;
                        this.isYellow = false;
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('ico')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('blog')).top - navbarYOffset) {
                    if (!this.isBlack) {
                        this.isBlack = true;
                        this.isYellow = false;
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('blog')).top - navbarYOffset) {
                    if (this.isBlack || this.isYellow) {
                        this.isBlack = false;
                        this.isYellow = false;
                    }
                }
            })
        }
    }
</script>

<style lang="stylus" scoped>
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
            box-shadow none

    .btn-actions
        display none

    .dropdown-menu
        display block

    .btn.dropdown-toggle
        background-color transparent
        &:focus
            box-shadow none

    .nav-line__white
        border 1px solid #fff
        border-width 0 24px
        background-color #ffbc00

    .nav-line__yellow
        border 1px solid #fdc135
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
        transition all 0.4s ease
        max-width 100vw

    .bg-yellow
        background-color #fdc135

        .btn-login
            background-color #343a49
            color white
            margin-left 16px

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
            transition all 0.4s ease
            color #fff !important


    @media(max-width: 1440px)
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

    @media(max-width: 1300px)
        .navbar-nav
            .nav-item
                .nav-link
                    padding-left 10px
                    padding-right 10px

    @media(max-width: 1200px)
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
            
    @media(max-width 1100px)
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
