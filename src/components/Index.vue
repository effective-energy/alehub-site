<template>
    <div class="index">

        <Navbar :lang="lang"/>

        <div class="loader" v-if="loader">
            <Spinner />
        </div>

        <Timer :content="content.greeting" v-if="!loader" :isLoader="loader" />

        <section v-if="!loader" id="about" class="wrapper style2">
            <div class="b-grid__list">
                <div class="inner b-grid__item b-grid__item--1-1">
                    <section class="spotlights">
                        <article class="info-card">
                            <header class="major">
                                <p>{{ content.description.subtitle }}</p>
                                <h2>{{ content.description.title }}</h2>
                            </header>
                            <p>{{ content.description.text }}</p>
                        </article>
                    </section>
                </div>
            </div>
        </section>

        <section v-if="!loader" id="solution" class="guaranteed wrapper style3">
            <div class="b-grid__list text-center">
                <div class="inner inner-list b-grid__item b-grid__item--1-1">
                    <p class="title">{{ content.solution.title }}</p>
                    
                    <div class="b-grid__list solution-block" v-if="content">

                        <div class="b-grid__item b-grid__item--1-3" v-for="(solution, solutionIndex) in content.solution.list">
                            <div class="solution-info" >
                                <img :src="getSolutionImage(solutionIndex)" alt="" />
                                <p>{{ solution.title }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div v-if="!loader" class="b-grid__list text-center concept">
                <div class="inner inner-list b-grid__item b-grid__item--1-1">
                    <p class="title">{{ content.concept.title }}</p>
                    <div class="b-grid__list">
                        <div v-if="content" class="b-grid__item b-grid__item--1-1" >
                            <h3>{{ content.concept.subTitle }}</h3>
                            <p class="grid_inner">{{ content.concept.text }}
                                <ul v-for="concept in content.concept.list">
                                    <li>{{ concept.title }}</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="!loader" id="documentations" class="wrapper style2">
            <div class="b-grid__list">
                <div class="inner b-grid__item b-grid__item--1-1">
                    <section class="spotlights">
                        <article class="full">
                            <header class="major">
                                <h2>{{ content.features.title }}</h2>
                            </header>
                            <ul class="description_inner">
                                <li v-for="features in content.features.list">
                                    {{ features.title }}
                                    <ul v-if="features.list !== undefined" v-for="subFeatures in features.list">
                                        <li>{{ subFeatures.title }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
        </section>


    <Teams v-if="!loader" :content="content.team" />

    <section class="wrapper" id="distribution" v-if="!loader">
        <div class="b-grid__list">
            <div class="inner b-grid__item b-grid__item--1-1">
                <section class="spotlights">
                    <article class="full">
                        <header class="major">
                            <h2>{{ content.distribution.title }}</h2>
                        </header>

                        <div class="distribution-money">

                            <div class="distribution-gist" v-for="gist in content.distribution.list" :class="'gist-'+gist.color">
                                <span>{{ gist.percent }}%</span>
                            </div>
                        </div>
                        <div class="distribution-labels">

                            <span :class="'dist-money_badge_'+gist.color" v-for="gist in content.distribution.list">{{ gist.title }}</span>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    </section>

    <Footer v-if="!loader" :content="content.greeting" :lang="lang"/>

    </div>
</template>

<script>
    import Navbar from './layouts/Navbar';
    import Timer from './layouts/Timer';
    import Teams from './layouts/Teams';
    import Spinner from './layouts/Spinner';
    import Footer from './layouts/Footer';

    export default {
        name: 'Index',
        components: {
            Navbar,
            Timer,
            Teams,
            Spinner,
            Footer
        },
        data() {
            return {
                subscribeEmail: '',
                subscribeStatus: '',
                isLoaderSubscribe: false,
                content: '',
                lang: 'en',
                loader: true
            }
        },
        methods: {
            getSolutionImage (index) {
                return `${this.$host}/ale-files/img/solution/${index+1}.svg`;
            },
            subscribe () {
                this.isLoaderSubscribe = true;
                this.subscribeStatus = '';

                let re = /\S+@\S+\.\S+/;
                if(re.test(this.subscribeEmail) === false) {
                    this.isLoaderSubscribe = false;
                    this.subscribeStatus = 'novalid';
                    return false;
                }

                this.$http.post(`${this.$host}/alehub/feedback`, {
                    "email": this.subscribeEmail
                }, {
                    headers : {
                        'Content-Type' : 'application/json; charset=UTF-8',
                        'Accept' : 'application/json'
                    }
                }).then(response => {
                    this.isLoaderSubscribe = false;
                    this.subscribeStatus = 'success';
                }, response => {
                    this.isLoaderSubscribe = false;
                });
            },
            getContent () {
                if(localStorage.getItem('systemLang') === 'ru') this.lang = 'ru';
                else if (localStorage.getItem('systemLang') === 'cn') this.lang = 'cn';
                else this.lang = 'en';
                this.loader = true
                this.$http.get(`${this.$host}/alehub/index${this.lang==='en'?'':'/'+this.lang}`, {
                headers : {
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Accept' : 'application/json'
                }
                }).then(response => {
                    this.content = response.body[0]
                    this.loader = false
                }, response => {

                });
            },
            changeLang (lang) {
                this.lang = lang;
                localStorage.setItem('systemLang', lang);
                this.getContent()
            }
        },
        created() {
            this.getContent()
        },
        mounted() {
            this.$on('changeLang', function (lang) {
                this.changeLang(lang);
            });
        }
    }
</script>

<style src="../assets/less/style.css"></style>

<style scoped lang="stylus">

    .loader
        width 100%
        height 100vh
        background rgb(42, 45, 48)
        display flex
        align-items center
        justify-content center

        img
            margin-top 0
            height 8em
            width 8em

    .concept
        margin-top 50px

    .distribution-money
        width 100% 
        height 60px 
        display flex
        .distribution-gist
            transition all 800ms ease-in-out
            font-size 26px
            display flex
            align-items center
            color rgb(255, 255, 255)
            justify-content space-between
            padding-left 10px
            &.gist-red
                background #f44336
            &.gist-blue
                background #2196F3
            &.gist-green
                background #8BC34A
            &.gist-purple
                background #BA68C8
            .more_info
                display none
                margin-right 15px
                font-size 20px
                transition all 800ms ease-in-out
        .distribution-gist:hover
            width 100%
            >.more_info
                display block

    .distribution-labels
        padding 20px
        display flex
        justify-content space-between
        font-size 18px
        margin-top 20px

    .errorSubscribe
        color red

    .successSubscribe
        color green

    .large
        margin-top 0

    .gist-red
        width 60%

    .gist-blue
        width 15%

    .gist-green
        width 15%

    .gist-purple
        width: 10%

    .dist-money_badge_red
        padding-right 10px
        &::before
            content ""
            width 10px
            height 10px
            display inline-flex
            clear both
            margin-right 5px
            position relative
            top -2px
            background-color #f54336

    .dist-money_badge_blue
        padding-right 15px
        &::before
            content ""
            width 10px
            height 10px
            display inline-flex
            clear both
            margin-right 5px
            position relative
            top -2px
            background-color #2296f3

    .dist-money_badge_green
        padding-right 15px
        &::before
            content ""
            width 10px
            height 10px
            display inline-flex
            clear both
            margin-right 5px
            position relative
            top -2px
            background-color #8bc34a

    .dist-money_badge_purple
        padding-right 15px
        &::before
            content ""
            width 10px
            height 10px
            display inline-flex
            clear both
            margin-right 5px
            position relative
            top -2px
            background-color #ba68c8

    .dist-money_badge_yellow
        padding-right 15px
        &::before
            content ""
            width 10px
            height 10px
            display inline-flex
            clear both
            margin-right 5px
            position relative
            top -2px
            background-color #FFC105
    @media screen and (max-width: 1024px)
        #distribution
            .full
                width 100%
            .distribution-labels
                flex-direction column
        .gist-red
            width 50%
        .gist-blue
            width 18%
        .gist-green
            width 18%
        .gist-purple
            width: 14%
        footer
            margin 0
    @media screen and (max-width: 760px)
        .distribution-money
            flex-direction column
            height 150px
            .distribution-gist
                font-size 20px
                height 25%
                &:hover
                    &.gist-red
                        width calc(100% - 15px)
                    &.gist-blue
                        width 60%
                    &.gist-green
                        width 54%
                    &.gist-purple
                        width 20%
        .gist-red
            width calc(100% - 15px)
        .gist-blue
            width 60%
        .gist-green
            width 54%
        .gist-purple
            width 20%
        .distribution-labels
            font-size 22px
            span
                &:not(:last-child)
                    margin-bottom 8px
        footer
            margin 0
</style>