<template>
    <header class="header" v-if="!isHideMenu">
		<div class="container">
          <span class="logo">
                <router-link :to="{ path: '/' }" class="logo-text" tag="span">
                    AleHub
                </router-link>
            </span>
            <div class="menu">
                <div class="hamburger" @click="toggleMenu">Menu</div>
                <ul>
                    <li class="check-fonts" :class="{active: indexLink === 0}" v-for="(link, indexLink) in links[lang]" :key="indexLink" :data-target="link.to" @click="scrollToElement(link.to)">{{ link.title}}</li>
                    <a href="http://presale.alehub.io" class="navbar-link"><li class="check-fonts">
                        {{ cabinetWord }}
                    </li></a>
                    <div class="lang" @click="changeLang">
                        <div class="flag" :class="{ 'eng-flag': lang === 'ru' }"></div>
                        <span v-if="lang === 'en'">RU</span>
                        <span v-else>EN</span>
                    </div>
                </ul>
        </div>      
        </div>
    </header>
    <header class="header hiddenMenu" v-else>
        <div class="container">
            <div class="b-grid__item b-grid__item--1-1 pb0">
                <router-link :to="{ path: '/' }" tag="span">
                    AleHub
                </router-link>
            </div>
            <div class="b-grid__item b-grid__item--1-1 pb0 text-center">
                <span class="logo-text">Admin panel</span>
            </div>
            <div class="b-grid__item b-grid__item--1-1 pb0">
                <div class="nav-menu">
                    <router-link :to="{ path: '/admin/changeIndex' }" class="nav-link" tag="span">
                        Edit index page
                    </router-link>
                    <router-link :to="{ path: '/admin/newsletter' }" class="nav-link" tag="span">
                        Newsletter
                    </router-link>
                    <router-link :to="{ path: '/admin/settings' }" class="nav-link" tag="span">
                        Settings
                    </router-link>
                    <span class="nav-item logout" @click="logout" v-if="!isHideLogouticon"></span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        title: 'Navbar',
        props: ['isHideMenu', 'lang', 'isHideLogouticon'],
        data() {
            return {
                cabinetWord: '',
                links: {
                    en: [
                        {title: 'Home', to: 'greeting'},
                        {title: 'Description', to: 'about'},
                        {title: 'Advantages', to: 'solution'},
                        {title: 'Docs', to: 'documentations'},
                        {title: 'Team', to: 'teams'}
                    ],
                    ru: [
                        {title: 'Домой', to: 'greeting'},
                        {title: 'Описание', to: 'about'},
                        {title: 'Преимущества', to: 'solution'},
                        {title: 'Документы', to: 'documentations'},
                        {title: 'Команда', to: 'teams'}
                    ]
                }
            }
        },
        computed: {
            checkLang () {
                if(localStorage.getItem('systemLang') === 'ru') this.cabinetWord = 'Кабинет';
                else this.cabinetWord = 'Cabinet';
            }
        },
        methods: {
            initScroll () {
                let _this = this
                window.addEventListener('scroll', function () {
                    _this.checkActive()
                })
            },
            checkActive () {
                for (let i = 0; i < this.links.en.length; i++) {
                    if(document.getElementById(this.links.en[i].to) === null) return false;
                    let offset = document.getElementById(this.links.en[i].to).offsetTop-60
                    let height = document.getElementById(this.links.en[i].to).offsetHeight
                    if (window.scrollY >= offset && window.scrollY <= offset+height) {
                        document.querySelector(`[data-target='${this.links.en[i].to}']`).classList.add('active')
                    } else {
                        document.querySelector(`[data-target='${this.links.en[i].to}']`).classList.remove('active')
                    }
                }
            },
            logout () {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                this.$router.push('/admin/login');
            },
            scrollToElement(eID) {
                var startY = this.currentYPosition();
                var stopY = this.elmYPosition(eID) - 64;
                var distance = stopY > startY ? stopY - startY : startY - stopY;
                if (distance < 100) {
                    scrollTo(0, stopY); return;
                }
                var speed = Math.round(distance / 50);
                if (speed >= 20) speed = 15;
                var step = Math.round(distance / 25);
                var leapY = stopY > startY ? startY + step : startY - step;
                var timer = 0;
                if (stopY > startY) {
                    for ( var i=startY; i<stopY; i+=step ) {
                        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
                    } return;
                }
                for ( var i=startY; i>stopY; i-=step ) {
                    setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                    leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
                }
            },
            currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            },
            elmYPosition(eID) {
                var elm = document.getElementById(eID);
                var y = elm.offsetTop;
                var node = elm;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                } return y;
            },
            changeLang() {
                if(localStorage.getItem('systemLang') === 'ru') this.cabinetWord = 'Cabinet';
                else this.cabinetWord = 'Кабинет';
                this.$parent.$emit('changeLang')
            },
            toggleMenu() {
                let nav = document.querySelector(".menu ul"),
                    navToggle = document.querySelector(".menu .hamburger");
                if (nav.className === "opened")
                    nav.className = "";
                else
                    nav.className = "opened";
                let specifiedElement = document.querySelector('.menu');
                document.addEventListener('click', function(event) {
                    let isClickInside = specifiedElement.contains(event.target);
                    if (event.target.className !== 'hamburger' && nav.className === "opened")
                        nav.classList = "";
                })
            }
        },
        created () {
            this.initScroll();
            if(localStorage.getItem('systemLang') === 'ru') this.cabinetWord = 'Кабинет';
            else this.cabinetWord = 'Cabinet';
        }
    }
</script>

<style lang="stylus">

    .vue-countdown {
        li {
            border 1px solid #fff
            padding 10px 20px
            color #fff
            width 100px
        }
        li:after {
            content '' !important
        }
        .digit {
            font-size 50px !important
        }
        .text {
            font-size 20px !important
        }
    }

</style>

<style lang="stylus" scoped>

    .navbar-link
        text-decoration none

    .header 
        align-items center
        display flex
        justify-content flex-end
        transition-duration 0.2s
        transition-timing-function ease-in-out
        color #ffffff
        left 0
        position fixed
        text-transform uppercase
        top 0
        width 100%
        z-index 10001
        padding 1em 2em
        background-color #0d1717

        .pb0 {
            padding-bottom: 0;
        }

        .logo-text {
            font-family MuseoSansCyrl500
            font-size 30px
        }

        .container 
            padding 0
            margin-right auto
            margin-left auto
            display flex
            justify-content space-between
            width 1170px
            align-items center

            .nav-menu
                display flex
                justify-content space-between
                align-items center

                .nav-link
                    margin 0 10px
                    font-size 14px
                    padding 8px 0

                    &:hover {
                        cursor: pointer;
                    }

                .nav-item 
                    margin: 0 10px;
                    width 24px
                    height 24px
                    background-size cover

                    &.logout
                        background-image url('../../assets/img/logout-ic.svg')
        

            .logo 
                -moz-flex 1
                -webkit-flex 1
                -ms-flex 1
                flex 1
                display block
                cursor default
                white-space nowrap
                font-size 30px
                display flex
                align-items center
                
            

            .menu 
                position relative
                left -50px
                -moz-transition color 0.2s ease-in-out
                -webkit-transition color 0.2s ease-in-out
                -ms-transition color 0.2s ease-in-out
                transition color 0.2s ease-in-out
                padding 0 0.75em
                color inherit
                font-weight 700
                text-decoration none
                display block
                -moz-transition background-color 0.2s ease-in-out, color 0.2s ease-in-out
                -webkit-transition background-color 0.2s ease-in-out, color 0.2s ease-in-out
                -ms-transition background-color 0.2s ease-in-out, color 0.2s ease-in-out
                transition background-color 0.2s ease-in-out, color 0.2s ease-in-out
                text-decoration none
                -webkit-tap-highlight-color transparent
                border-radius 4px
                font-weight 700
                padding 0.5em 1.25em

                ul 
                    display flex
                    list-style none
                    margin 0

                    li 
                        padding 1.5em 0
                        margin -1.5em 20px -1.5em 0
                        &.active
                            color #ffd24f
                    

                    li:hover 
                        cursor pointer
                    

                    .lang 
                        display flex
                        cursor pointer
                        padding 0.5em 0em 0.5em 2em
                        margin -0.5em 0
                        border-radius 4px
                        margin-top -9px

                        .flag 
                            width 25px
                            height 21px
                            background-size cover
                            background-image url('../../assets/img/flags/rus.png')
                            position relative
                            right 5px
                            top -2px

                            &.eng-flag 
                                background-image url('../../assets/img/flags/usa.png')
                            

                        span 
                            line-height 1.5
                            font-size 14px
                        

                    .lang:hover 
                        color #ffd24f
                    

                    @media screen and (max-width: 1024px)
                        display none
                    
                        &.opened
                            display block
                            position fixed
                            top 95px
                            right 25px
                            left 25px
                            text-align center
                            background #0d1717
                            padding 2.5em .8em

                            li
                                margin -2em 20px
                                padding 2em 0

                            .lang
                                text-align center
                                background-color #0d1717
                                cursor pointer
                                box-shadow none
                                padding 2em 0
                                margin -2em 0
                                border-radius 0

                                .flag
                                    width 25px
                                    height 21px
                                    background-size cover
                                    background-image url('../../assets/img/flags/rus.png')
                                    position relative
                                    right 5px
                                    top -2px
                                    margin-left calc(50% - 21px)

                                    &.eng-flag
                                        background-image url('../../assets/img/flags/usa.png')
                                
                                &:hover
                                    background-color #0d1717
                                    cursor pointer
                                    box-shadow none
                                    padding 2em 0
                                    margin -2em 0
                                    border-radius 0
                                    color #ffd24f

    .hamburger
        display none
        cursor pointer
        padding 1em 1em
        margin -1em -1em
        @media screen and (max-width: 1024px)
            display block

    .hiddenMenu 
        padding-left 0

        .logo 
            justify-content center
            margin-left -82px

        .container

            @media screen and (max-width: 1280px)
                width 920px

            @media screen and (max-width: 1024px)
                width 700px

            @media screen and (max-width: 760px)
                width 90%
</style>