<template>
    <header class="header" v-if="!isHideMenu">
		<div class="container">
          <span class="logo">
                <router-link :to="{ path: '/' }" class="logo-text" tag="span">
                    AleHub
                </router-link>
            </span>
            <div class="menu">
                <div class="hamburger" id="hamburger">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
                <ul id="mobileMenu">
                    <li class="check-fonts" :class="{active: indexLink === 0}" v-for="(link, indexLink) in links[lang]" :key="indexLink" :data-target="link.to" @click="scrollToElement(link.to)">{{ link.title}}</li>
                    <a href="http://presale.alehub.io" class="navbar-link"><li class="check-fonts">
                        {{ cabinetWord }}
                    </li></a>
                    <div class="lang" @click="toggleLang()">
                        <div class="flag" :class="{ 'eng-flag': lang === 'en', 'cin-flag': lang === 'cn' }"></div>
                        <span v-if="lang === 'en'">EN</span>
                        <span v-if="lang === 'ru'">RU</span>
                        <span v-if="lang === 'cn'">CN</span>
                    </div>
                    <div class="select-lang">
                        <ul>
                            <li v-if="lang!='en'" @click="changeLang('en')"><div class="flag eng-flag"></div><span>EN</span></li>
                            <li v-if="lang!='cn'" @click="changeLang('cn')"><div class="flag cin-flag"></div><span>CN</span></li>
                            <li v-if="lang!='ru'" @click="changeLang('ru')"><div class="flag"></div><span>RU</span></li>
                        </ul>
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
                        {title: 'Features', to: 'documentations'},
                        {title: 'Team', to: 'teams'}
                    ],
                    ru: [
                        {title: 'Домой', to: 'greeting'},
                        {title: 'Описание', to: 'about'},
                        {title: 'Преимущества', to: 'solution'},
                        {title: 'Особенности', to: 'documentations'},
                        {title: 'Команда', to: 'teams'}
                    ],
                    cn: [
                        {title: 'Home', to: 'greeting'},
                        {title: 'Description', to: 'about'},
                        {title: 'Advantages', to: 'solution'},
                        {title: 'Features', to: 'documentations'},
                        {title: 'Team', to: 'teams'}
                    ],
                },
                collapsed: false
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
                    let offset = document.getElementById(this.links.en[i].to).offsetTop-66
                    let height = document.getElementById(this.links.en[i].to).offsetHeight
                    if (window.scrollY > offset && window.scrollY <= offset+height) {
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
            toggleLang() {
                let nav = document.querySelector(".select-lang"),
                    navToggle = document.querySelector(".lang"),
                    _this = this;
                if (!nav.classList.contains('is-collapsed')) {
                    this.collapsed = true;
                    nav.classList.add("is-collapsed");
                    navToggle.classList.add('is-active');
                    document.addEventListener('click', closeMenu, true)
                }
                else {
                    this.collapsed = false;
                    nav.classList.remove("is-collapsed");
                    navToggle.classList.remove('is-active');
                    document.removeEventListener('click', closeMenu, true)
                }
                function closeMenu () {
                    if (!event.target.parentElement.classList.contains('lang') && !event.target.classList.contains('lang') && nav.classList.contains('is-collapsed')) {
                        nav.classList.remove("is-collapsed");
                        navToggle.classList.remove('is-active');
                    }
                }
            },
            changeLang(lang) {
                this.$parent.$emit('changeLang', lang);
                if(localStorage.getItem('systemLang') === 'ru') this.cabinetWord = 'Кабинет';
                else this.cabinetWord = 'Cabinet';
            }
        },
        created () {
            window.onload = function() {
                document.getElementById('hamburger').addEventListener('click', function() {
                    var nav = document.querySelector("#mobileMenu"),
                        navToggle = document.querySelector("#hamburger"),
                        specifiedElement = document.querySelector('.menu');
                    nav.classList.toggle('opened');
                    navToggle.classList.toggle('is-active');
                    document.addEventListener('click', function(event) {
                        let isClickInside = specifiedElement.contains(event.target);
                        if (!event.target.classList.contains('hamburger') && !event.target.classList.contains('line') && nav.classList.contains('opened')) {
                            nav.classList.remove("opened");
                            navToggle.classList.remove('is-active');
                        }
                    })
                })
            }
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

        @media screen and (max-width: 1024px)
            padding 0.88em 30px

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

                .select-lang
                    position absolute
                    top 40px
                    right 10px
                    min-width 65px
                    background-color #232323
                    padding 8px 15px
                    box-shadow 7px 7px 30px 0px #000
                    display none

                    &.is-collapsed
                        display block

                    ul
                        display flex
                        flex-direction column
                        padding 0

                        li
                            margin 0
                            padding .3em 0
                            display flex
                            justify-content space-between
                            align-content center
                            line-height 1.8

                            .flag
                                width 25px
                                height 21px
                                background-size cover
                                background-image url('../../assets/img/flags/rus.png')
                                background-position center
                                padding-top 4px

                                &.eng-flag
                                    background-image url('../../assets/img/flags/usa.png')
                                
                                &.cin-flag
                                    background-image url('../../assets/img/flags/china.svg')
                                    background-size contain
                                    background-repeat no-repeat
                                

                ul 
                    display flex
                    list-style none
                    margin 0
                    -webkit-transition all 0.3s ease-in-out
                    -o-transition all 0.3s ease-in-out
                    transition all 0.3s ease-in-out

                    li 
                        padding 1.5em 0
                        margin -1.5em 20px -1.5em 0
                        &.active
                            color #ffd24f
                    

                    li:hover 
                        cursor pointer
                    

                    .lang 
                        display flex
                        align-items center
                        cursor pointer
                        padding 0.5em 0em 0.5em 2em
                        margin -0.5em 0
                        border-radius 4px

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

                            &.cin-flag
                                background-image url('../../assets/img/flags/china.svg')
                                background-size contain
                                background-repeat no-repeat
                                background-position center
                                top 0
                                margin-top -1px
                            

                        span 
                            line-height 1.5
                            font-size 14px
                        

                    .lang:hover 
                        color #ffd24f
                    

                    @media screen and (max-width: 1024px)
                        display none
                        opacity 0
                        top 100px
                        right 100px
                        left 100px
                        position fixed
                        -webkit-transition all 0.3s ease-in-out
                        -o-transition all 0.3s ease-in-out
                        transition all 0.3s ease-in-out
                    
                        &.opened
                            opacity 1
                            display block
                            position fixed
                            top 64px
                            right 0px
                            left 0px
                            bottom 0px
                            text-align center
                            background #0d1717
                            padding 2.5em 0em

                            li
                                margin 0em 0px
                                padding 15px 0
                                border-bottom 1px solid rgba(255, 255, 255, .2)

                            .lang
                                display none

                            .select-lang
                                position initial
                                width 100%
                                background-color transparent
                                padding 0
                                box-shadow none
                                display block

                                ul
                                    display flex
                                    flex-direction row
                                    padding 0
                                    position initial
                                    opacity 1
                                    justify-content space-evenly

                                    li
                                        border none

    .hamburger
        display none
        cursor pointer
        padding 1em 0em
        margin -1em -1em
        @media screen and (max-width: 1024px)
            display block
            .line
                width 35px
                height 3px
                background-color #ecf0f1
                display block
                margin 4px auto
                -webkit-transition all 0.3s ease-in-out
                -o-transition all 0.3s ease-in-out
                transition all 0.3s ease-in-out
            &.is-active
                .line
                    &:nth-child(2)
                        opacity 0
                    &:nth-child(1)
                        -webkit-transform translateY(7px) rotate(45deg)
                        -ms-transform translateY(7px) rotate(45deg)
                        -o-transform translateY(7px) rotate(45deg)
                        transform translateY(7px) rotate(45deg)
                    &:nth-child(3)
                        -webkit-transform translateY(-7px) rotate(-45deg)
                        -ms-transform translateY(-7px) rotate(-45deg)
                        -o-transform translateY(-7px) rotate(-45deg)
                        transform translateY(-7px) rotate(-45deg)

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