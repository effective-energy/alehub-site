<template>
    <div class="index">

        <Navbar :lang="lang"/>
        <Greeting :content="content.greeting" :loader="loader"/>

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
                    <!-- <p class="subtitle">{{ content?content.guaranteed.subTitle:'' }}</p> -->
                    <p class="title">Предлагаемые решения<!-- {{ content?content.guaranteed.title:'' }}--></p>
                    <!-- <div class="b-grid__list">
                        <div class="b-grid__item b-grid__item--1-3" v-if="content" v-for="(item, indexGuaranted) in content.guaranteed.list" :key="indexGuaranted">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.text }}</p>
                        </div>
                    </div> -->
                    <div class="b-grid__list">
                        <div class="b-grid__item b-grid__item--1-1" v-if="content" >
                            <p class="grid_inner">
                                <ul style="text-align: left;line-height: 1.5;font-size:14px">
                                    <li>Консенсус доверия сторон через распределённый реестр – Блок-чейн,
                                        подкреплённый финансовыми гарантиями и репутационными рисками через
                                        нейтральное посредничество системы АЛЕ.</li>
                                    <li>Широко авторитетные верификационные Агенты.</li>
                                    <li>Автоматизм механизмов взаиморасчётов сторон контракта.</li>
                                    <li>Унификация, ускорение и максимальная автоматизация процессов верификации участников, ТЗ, результатов работы.</li>
                                    <li>Капитализация расчётных средств, контроль и менеджмент расходов.</li>
                                    <li>Безопасность собственной операционной среды.</li>
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
                                <h2>{{ content.docs.title }}</h2>
                            </header>
                            <ul class="actions">
                                <li v-for="(document, indexDocument) in content.docs.documents" :key="indexDocument">
                                    <!-- <a :href="'static/pdf/'+document.link" class="button" target="_blank">{{ document.title }}</a> -->
                                    <a class="button">{{ document.title }}</a>
                                </li>
                            </ul>
                        </article>
                    </section>
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

        <section v-if="!loader" id="partners" class="wrapper style2">
            <div class="b-grid__list">
                <div class="inner b-grid__item b-grid__item--1-1">
                    <section class="spotlights">
                        <article class="full">
                            <header class="major">
                                <p>{{ content.partners.subtitle }}</p>
                                <h2>{{ content.partners.title }}</h2>
                            </header>
                            <div class="partners-list">
                                <div class="b-grid__list">
                                    <div class="b-grid__item b-grid__item--1-3" v-for="(partner, indexPartner) in content.partners.list" :key="indexPartner">
                                        <img :src="$host + '/ale-files/'+partner.logo" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <!-- <ul class="actions">
                                <li><a href="#" class="button">Bounty program</a></li>
                            </ul> -->
                        </article>
                    </section>
                </div>
            </div>
        </section>

        <section v-if="!loader" id="communication" class="wrapper style3">
            <div class="b-grid__list text-center">
                <div class="inner inner-list b-grid__item b-grid__item--1-1">
                    <p class="title">{{ content.social.title }}</p>
                    <h3>{{ content.social.subTitle }}</h3>
                    <div class="b-grid__list">
                        <div class="b-grid__item b-grid__item--1-1">
                            <p>
                                <a href="https://www.facebook.com/alehub.io/" target="_blank"><img src="../../static/icons/facebook.png" alt="" width="80"></a>
                                <a href="https://www.instagram.com/alehub.io/" target="_blank"><img src="../../static/icons/instagram.svg" alt="" width="80"></a>
                                <a href="https://t.me/alehub" target="_blank"><img src="../../static/icons/telegram.png" alt="" width="80"></a>
                                <a href="https://twitter.com/alehub_io" target="_blank"><img src="../../static/icons/twitter.png" alt="" width="80"></a>
                                <a href="https://github.com/AleHub" target="_blank"><img src="../../static/icons/github.png" alt="" width="80"></a>
                            </p>
                             <h3>Soon on:</h3>
                             <p>
                                 <a target="_blank"><img src="../../static/icons/youtube.svg" alt="" width="80"></a>
                                 <a target="_blank"><img src="../../static/icons/reddit.svg" alt="" width="80"></a>
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="!loader" id="contacts" class="wrapper style2">
            <div class="b-grid__list">
                <div class="inner b-grid__item b-grid__item--1-1">
                    <section class="spotlights">
                        <article class="full">
                            <header class="major subs">
                                <p class="large">{{ content?content.subscribe.title:'' }}</p>
                                <h3>{{ content?content.subscribe.subtitle:'' }}</h3>
                            </header>
                            <ul class="actions">
                                <input type="text" :placeholder="content.subscribe.placeholder" @keyup.enter="subscribe" v-model="subscribeEmail">
                                <li class="subscribe">
                                    <span class="button" @click="subscribe">{{ content?content.subscribe.btnText:'' }}</span>
                                </li>
                            </ul>

                            <span class="successSubscribe" v-if="subscribeStatus == 'success'">Success subscribe!</span>

                            <span class="errorSubscribe" v-if="subscribeStatus === 'emailexist'">Email already exist!</span>

                            <span class="errorSubscribe" v-if="subscribeStatus === 'novalid'">Enter valid email!</span>

                            <Spinner v-if="isLoaderSubscribe"/>
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
    import Greeting from './layouts/Greeting';
    import Teams from './layouts/Teams';
    import Spinner from './layouts/Spinner';

    export default {
        name: 'Index',
        components: {
            Navbar,
            Greeting,
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
    .errorSubscribe {
        color: red;
    }

    .successSubscribe {
        color: green;
    }

    .large {
        margin-top: 0;
    }
</style>