<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a href="#" class="navbar-brand"><img src="../../assets/images/logo.png" alt="ALEHUB"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto ml-auto">
                <li v-for="(item, index) in navbar" :key="index" class="nav-item" :class="{active: index == activeItem}">
                    <a @click="activeItem = index" class="nav-link" :href="item.path">{{item.name}}</a>
                </li>
                <li class="nav-line"></li>
            </ul>
            <div class="right-menu">
                <button type="button" class="btn btn-login">Log in</button>
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        en
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">cn</a>
                        <a class="dropdown-item" href="#">ru</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                navbar: [
                    {
                        path: '#',
                        name: 'Home'
                    },
                    {
                        path: '#',
                        name: 'Description'
                    },
                    {
                        path: '#',
                        name: 'Features'
                    },
                    {
                        path: '#',
                        name: 'Advantages'
                    },
                    {
                        path: '#',
                        name: 'Team'
                    },
                    {
                        path: '#',
                        name: 'Bounty'
                    },
                    {
                        path: '#',
                        name: 'News'
                    },
                    {
                        path: '#',
                        name: 'Contact'
                    },
                ],
                activeItem: 0
            }
        }
    }
</script>

<style lang="stylus">
    @font-face
        font-family Panton
        font-style SemiBold
        src url('../../assets/fonts/Panton-SemiBold.otf')

    body
        background #ececf0
        font-family Panton

    .navbar
        height 75px
        padding-left 60px
        padding-right 60px

        &.bg-white
            background #FFF

    .navbar-brand
        font-size 0

    .right-menu
        padding-top .5rem
        padding-bottom .5rem
        display flex

    .navbar-nav
        .nav-item
            &:nth-child(1)
                &.active
                    ~.nav-line
                        -webkit-transform translate3d(0, 0, 0)
                        transform translate3d(0, 0, 0)
            &:nth-child(2)
                &.active
                    ~.nav-line
                        -webkit-transform translate3d(100%, 0, 0)
                        transform translate3d(100%, 0, 0)
            &:nth-child(3)
                &.active
                    ~.nav-line
                        -webkit-transform translate3d(200%, 0, 0)
                        transform translate3d(200%, 0, 0)
            &:nth-child(4)
                &.active
                    ~.nav-line
                        -webkit-transform translate3d(300%, 0, 0)
                        transform translate3d(300%, 0, 0)
            &:nth-child(5)
                &.active
                    ~.nav-line
                        -webkit-transform translate3d(400%, 0, 0)
                        transform translate3d(400%, 0, 0)
            &:nth-child(6)
                &.active
                    ~.nav-line
                        -webkit-transform translate3d(500%, 0, 0)
                        transform translate3d(500%, 0, 0)
            &:nth-child(7)
                &.active
                    ~.nav-line
                        -webkit-transform translate3d(600%, 0, 0)
                        transform translate3d(600%, 0, 0)
            &:nth-child(8)
                &.active
                    ~.nav-line
                        -webkit-transform translate3d(700%, 0, 0)
                        transform translate3d(700%, 0, 0)

        .nav-line
            position absolute
            top 75%
            width 120px
            height 3px
            pointer-events none
            border 1px solid #fff
            border-width 0 40px
            background #ffbc00
            -webkit-transition -webkit-transform 0.5s
            transition transform 0.5s
            -webkit-transition-timing-function cubic-bezier(1, 0.01, 0, 1)
            -webkit-transition-timing-function cubic-bezier(1, 0.01, 0, 1.22)
            transition-timing-function cubic-bezier(1, 0.01, 0, 1.22)

    .btn-login
        margin-right 5px
        background #ffbc00
        padding-left 25px
        padding-right 25px

    // .dropdown-toggle
    //     &::after
    //         width 5px
    //         height 5px
    //         border-top 0
    //         border-right 0
    //         border-bottom 0
    //         border-left 0
    //         background url(../../assets/images/expand-arrow.svg)

    @media (min-width: 992px)
        .navbar-expand-lg
            .navbar-nav
                .nav-link
                    margin-left 0
                    margin-right 0
                    padding-left 0
                    padding-right 0
                    color #0f1118
                    font-size 18px
                .nav-item
                    width 120px
                    text-align center
</style>
