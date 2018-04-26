<template>
    <div class="app">
        <Header/>
        <screen1/>
        <screen2/>
        <screen3/>
        <screen4 :is-features="isFeatures"/>
        <screen5 :is-team="isTeam"/>
        <screen6/>
        <screen7/>
        <Blog/>
        <Footer/>
    </div>
</template>

<script>
    import Header from './layouts/Header'
    import Screen1 from './Screen1'
    import Screen2 from './Screen2'
    import Screen3 from './Screen3'
    import Screen4 from './Screen4'
    import Screen5 from './Screen5'
    import Screen6 from './Screen6'
    import Screen7 from './Screen7'
    import Blog from './Blog'
    import Footer from './layouts/Footer'

    export default {
        name: 'Index',
        components: {
            Header,
            Screen1,
            Screen2,
            Screen3,
            Screen4,
            Screen5,
            Screen6,
            Screen7,
            Blog,
            Footer
        },
        data() {
            return {
                isFeatures: false,
                isTeam: false,
            }
        },
        methods: {
            getCoords: function (elem) {
                let box = elem.getBoundingClientRect();

                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
            },
        },
        mounted() {
            let navbar = document.getElementById('navbar'),
                navbarYOffset = navbar.offsetHeight;

            window.addEventListener('scroll', () => {
                if (window.scrollY >= this.getCoords(document.getElementById('features')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('team')).top - navbarYOffset) {
                    if (!this.isFeatures) {
                        this.isFeatures = true;
                    }
                } else {
                    if (this.isFeatures) {
                        this.isFeatures = false;
                    }
                }

                if (window.scrollY >= this.getCoords(document.getElementById('team')).top - navbarYOffset &&
                    window.scrollY < this.getCoords(document.getElementById('ico')).top - navbarYOffset) {
                    if (!this.isTeam) {
                        this.isTeam = true;
                    }
                } else {
                    if (this.isTeam) {
                        this.isTeam = false;
                    }
                }
            })
        }
    }
</script>