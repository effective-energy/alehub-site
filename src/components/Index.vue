<template>
    <div class="index">

        <Navbar :lang="lang"/>
        <Timer :content="content.greeting" :loader="loader"/>

        <section v-if="!loader" id="about" class="wrapper style2">
            <div class="b-grid__list">
                <div class="inner b-grid__item b-grid__item--1-1">
                    <section class="spotlights">
                        <article class="info-card">
                            <header class="major">
                                <p>{{ content?content.description.subtitle:'' }}</p>
                                <h2>{{ content?content.description.title:'' }}</h2>
                            </header>
                            <p>{{ content?content.description.text:'' }}</p>
                        </article>
                    </section>
                </div>
            </div>
        </section>

        <section v-if="!loader" id="guaranteed" class="guaranteed wrapper style3">
            <div class="b-grid__list text-center">
                <div class="inner inner-list b-grid__item b-grid__item--1-1">
                    <p class="title">Предлагаемые решения</p>
                    
                    <div class="b-grid__list solution-block" v-if="content">

                        <div class="b-grid__item b-grid__item--1-3">
                            <div class="solution-info">
                                <img src="../assets/img/solution/1.svg" alt="" />
                                <p>Консенсус доверия сторон через BlockChain, подкреплённый финансовыми гарантиями.</p>
                            </div>
                        </div>

                        <div class="b-grid__item b-grid__item--1-3">
                            <div class="solution-info">
                                <img src="../assets/img/solution/2.svg" alt="" />
                                <p>Унификация и максимальная автоматизация процессов верификации участников.</p>
                            </div>
                        </div>

                        <div class="b-grid__item b-grid__item--1-3">
                            <div class="solution-info">
                                <img src="../assets/img/solution/3.svg" alt="" />
                                <p>Капитализация расчётных средств, контроль и менеджмент расходов.</p>
                            </div>
                        </div>

                        <div class="b-grid__item b-grid__item--1-3"">
                            <div class="solution-info">
                                <img src="../assets/img/solution/4.svg" alt="" />
                                <p>Автоматизм механизмов взаиморасчётов сторон контракта.</p>
                            </div>
                        </div>

                        <div class="b-grid__item b-grid__item--1-3">
                            <div class="solution-info">
                                <img src="../assets/img/solution/5.svg" alt="" />
                                <p>Широко авторитетные верификационные Агенты.</p>
                            </div>
                        </div>

                        <div class="b-grid__item b-grid__item--1-3">
                            <div class="solution-info">
                                <img src="../assets/img/solution/6.svg" alt="" />
                                <p>Безопасность собственной операционной среды.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section v-if="!loader" id="concept" class="wrapper style3">
            <div class="b-grid__list text-center">
                <div class="inner inner-list b-grid__item b-grid__item--1-1">
                    <p class="title">{{ content?content.concept.title:'' }}</p>
                    <div class="b-grid__list">
                        <!-- <div v-if="content" class="b-grid__item b-grid__item--1-2" v-for="(item, indexConcept) in content.concept.list" :key="indexConcept">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.text }}</p>
                        </div> -->
                        <div v-if="content" class="b-grid__item b-grid__item--1-1" >
                            <h3>Цель Проекта</h3>
                            <p class="grid_inner">Технологическое преодоление недостатков существующих на рынке онлайновых бирж труда и фрилансеров:
                                <ul style="text-align: left">
                                    <li>Низкое качество ТЗ и актуальность уровня компетенций заказчиков</li>
                                    <li>Проблема приёмно-сдаточных мероприятий.</li>
                                    <li>Слабо регулируемая ответственность Заказчиков и 
                                        Исполнителей за неисполнение (полное/частичное) обязательств по заключаемым договорам.</li>
                                    <li>Разрозненное ведения проектной и финансовой деятельности</li>
                                    <li>Малая гибкость и прозрачность процессов</li>
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
                                <h2>Основные отличительные особенности АЛЕ</h2>
                            </header>
                            <ul class="description_inner">
                                <li>Повышение надёжности и качества заключаемых договоров подряда и достоверности 
                                    получаемых результатов, упрощение взаиморасчётов, капитализация успеха.</li>
                                <li>Фиксация процессов согласования и исполнения контрактных условий в Блок-чейне.</li>
                                <li>Внесение оплаты, предоплаты и гарантий участниками договорных отношений в монетарной системе АЛЕ.</li>
                                <li>Гибкость ведения проектов – изменение условий при консенсусе финансовых и управленческих решений.</li>
                                <li>«Окрашивание» инвестиций и обязательств с возможностью их мониторинга и контроля ( в последующих версиях).</li>
                                <li>Собственные протоколы контрактов, исполняемых на блок-чейне АЛЕ.</li>
                                <li>Собственная процедура верификации участников через процедуру в процессинговом коде системы через запись в БЧ.</li>
                                <li>Возможность наличия дополнительных двух сторон в контракте (в начальных версиях, затем-неограниченно):
                                    <ul>
                                        <li>Верификатора ТЗ Заказчика.</li>
                                        <li>Верификатора Результатов Исполнителя.</li>
                                    </ul>
                                </li>
                                <li>Автоматизация процессов Верификации Участников, ТЗ и Приёмки-Сдачи (Acceptance tests, Qualifcaa n, 
                                    Execua n C ntr l, C mmissi ning, C mpliance) для Заказчика и Исполнителя, распределения финансовых средств 
                                    сторон контракта в соответствии с его условиями на основе алгоритма и протокола исполнения электронных контрактов АЛЕ.</li>
                                <li>Встроенные механизмы изменения оценок и вариабельных параметров в алгоритме исполнения контрактов АЛЕ на основе консенсуса участников системы.</li>
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
        </section>

        <section v-if="false" id="participate" class="wrapper style2">
            <div class="b-grid__list">
                <div class="inner b-grid__item b-grid__item--1-1">
                    <section class="spotlights">
                        <article class="full">
                            <header class="major">
                                <p class="large">Participate in ICO</p>
                                <h3>To get acquainted with the detailed description of the ALEHUB project, as well as
                                    the entries on the ICO, we suggest you go to the appropriate section of
                                    website.</h3>
                            </header>
                            <ul class="actions">
                                <li><a href="#" class="button">Detailed description</a></li>
                            </ul>
                        </article>
                    </section>
                </div>
            </div>
        </section>


    <Teams v-if="!loader" :content="content.team" />

    <section class="wrapper" style="padding-bottom: 0;">
        <div class="b-grid__list">
            <div class="inner b-grid__item b-grid__item--1-1" style="width: 1170px; max-width: 1170px; min-width: 1170px;">
                <section class="spotlights">
                    <article class="full" style="width: 100%;">
                        <header class="major">
                            <h2 data-v-82b7485c="">Распределение токенов</h2>
                        </header>

                        <div class="distribution-money" style="width: 100%; height: 60px; display: flex;">

                            <div class="distribution-gist gist-red" style="background: rgb(244, 67, 54);font-size: 26px;display: flex;align-items: center;color: rgb(255, 255, 255);justify-content: space-between;">
                                <span style="margin-left: 10px;">77%</span>
                            </div>

                            <div class="distribution-gist gist-blue" style="background: #2196F3;font-size: 26px;display: flex;align-items: center;color: rgb(255, 255, 255);justify-content: space-between;">
                                <span style="margin-left: 10px;">11%</span>
                            </div>

                            <div class="distribution-gist gist-green" style="background: #8BC34A;font-size: 26px;display: flex;align-items: center;color: #fff;justify-content:  space-between;">
                                <span style="margin-left: 10px;">10%</span>
                            </div>

                            <div class="distribution-gist gist-purple" style="background: #BA68C8;font-size: 26px;display: flex;align-items: center;color: rgb(255, 255, 255);justify-content:  space-between;">
                                <span style="margin-left: 10px;">2%</span>
                            </div>
                        </div>
                        <div class="distribution-labels" style="padding: 20px;display: flex;justify-content: space-between;font-size: 18px;margin-top:  20px;">

                            <span class="dist-money_badge_red">Продажа на ICO</span>
                            <span class="dist-money_badge_blue">Команда</span>
                            <span class="dist-money_badge_green">Резерв, реферальная программа, адвайзер</span>
                            <span class="dist-money_badge_purple">Баунти</span>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    </section>

    <footer>
        <div class="b-grid__list">
            <div class="b-grid__item b-grid__item--1-1">
                <span class="year">Effective Energy LLC © 2018 All rights reserved.</span>
            </div>
        </div>
    </footer>

    </div>
</template>

<script>
    import Navbar from './layouts/Navbar';
    import Timer from './layouts/Timer';
    import Teams from './layouts/Teams';
    import Spinner from './layouts/Spinner';

    export default {
        name: 'Index',
        components: {
            Navbar,
            Timer,
            Teams,
            Spinner
        },
        data() {
            return {
                links: {
                    ru: [
                        {title: 'Домой', to: 'greeting'},
                        {title: 'Описание', to: 'about'},
                        {title: 'Преимущества', to: 'guaranteed'},
                        {title: 'Партнеры', to: 'partners'}
                    ],
                    en: [
                        {title: 'Home', to: 'greeting'},
                        {title: 'Description', to: 'about'},
                        {title: 'Advantages', to: 'guaranteed'},
                        {title: 'Partners', to: 'partners'}
                    ]
                },
                subscribeEmail: '',
                subscribeStatus: '',
                isLoaderSubscribe: false,
                content: '',
                lang: 'en',
                loader: true
            }
        },
        methods: {
            scrollToElement(id) {
                document.getElementById(id).scrollIntoView();
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
                else this.lang = 'en';
                this.loader = true
                this.$http.get(`${this.$host}/alehub/index${this.lang==='ru'?'/ru':''}`, {
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
            changeLang () {
                if (this.lang === 'en') {
                    this.lang = 'ru';
                    localStorage.setItem('systemLang', 'ru');
                }
                else {
                    this.lang = 'en'
                    localStorage.setItem('systemLang', 'en');
                }
                this.getContent()
            }
        },
        created() {
            this.getContent()
        },
        mounted() {
            this.$on('changeLang', function () {
                this.changeLang();
            });
        }
    }
</script>

<style src="../assets/less/style.css"></style>

<style scoped lang="stylus">
    .distribution-money
        .distribution-gist
            transition all 800ms ease-in-out
            .more_info
                display none
                margin-right 15px
                font-size 20px
                transition all 800ms ease-in-out
        .distribution-gist:hover
            width 100%
            >.more_info
                display block


    .errorSubscribe {
        color: red;
    }

    .successSubscribe {
        color: green;
    }

    .large {
        margin-top: 0;
    }

    .gist-red {
        width: 60%;
    }

    .gist-blue {
        width: 15%;
    }

    .gist-green {
        width: 15%;
    }

    .gist-purple {
        width: 10%;
    }
        

    .dist-money_badge_red::before
        content ""
        width 10px
        height 10px
        display inline-flex
        clear both
        margin-right 5px
        position relative
        top -2px
        background-color #f54336

    .dist-money_badge_blue::before
        content ""
        width 10px
        height 10px
        display inline-flex
        clear both
        margin-right 5px
        position relative
        top -2px
        background-color #2296f3

    .dist-money_badge_green::before
        content ""
        width 10px
        height 10px
        display inline-flex
        clear both
        margin-right 5px
        position relative
        top -2px
        background-color #8bc34a

    .dist-money_badge_purple::before
        content ""
        width 10px
        height 10px
        display inline-flex
        clear both
        margin-right 5px
        position relative
        top -2px
        background-color #ba68c8

    .dist-money_badge_yellow::before
        content ""
        width 10px
        height 10px
        display inline-flex
        clear both
        margin-right 5px
        position relative
        top -2px
        background-color #FFC105
</style>