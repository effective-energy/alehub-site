<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <a href="#" class="navbar-brand">
            <img class="d-inline-block align-top"
                 src="../../../static/images/ale-logo.svg"
                 alt="ALEHUB">
            ALEHUB
        </a>
        <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto ml-auto">
                <li v-for="(item, index) in navbar"
                    :key="index"
                    class="nav-item"
                    :class="{active: index == activeItem}">
                    <a @click="activeItem = index"
                       class="nav-link"
                       v-scroll-to="item.path">
                       <!--:href="item.path">-->
                        {{item.name}}
                    </a>
                </li>
                <li class="nav-line"></li>
            </ul>
            <div class="right-menu">
                <button type="button" class="btn btn-login">Log in</button>
                <div class="dropdown">
                    <button class="btn dropdown-toggle"
                            id="dropdownMenuButton"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
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
        name: 'Header', //rename
        data() {
            return {
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
            changeLineWidth(index) {
                let elWidth = document.querySelectorAll('.nav-item')[index].offsetWidth;
                document.querySelector('.nav-line').style.width = elWidth + 'px';

                let scope = 0;
                for (let i = 0; i <= index; i++) {
                    if (index === 0 || index === i) continue;
                    scope += document.querySelectorAll('.nav-item')[i].offsetWidth;
                }
                document.querySelector('.nav-line').style.transform = `translate3D(${scope}px,0,0)`;
            }
        },
        mounted() {
            setTimeout(() => {
                this.changeLineWidth(this.activeItem);
            }, 100);
        }
    }
</script>

<style lang="stylus" scoped>
    .nav-item
        cursor pointer
</style>
