<template>
    <div class="faq">
        <header-block :white-list="true"
                      :is-lang="false"/>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel">
                        <h3 class="faq-title">
                            FAQ
                        </h3>
                        <div class="section"
                             v-for="section in sections">
                            <h4 class="faq-section-title">
                                {{ section.title }}
                            </h4>
                            <div class="spoiler"
                                 v-for="question in section.questions">
                                <div class="spoiler-header"
                                     @click="toggleSpoilerBody(question.id)">
                                    <span>
                                        {{ question.title }}
                                    </span>
                                    <img class="spoiler-arrow"
                                         alt="arrow"
                                         src="../../static/images/arrows/arrow-bottom-34343e.svg"
                                         :class="calcSpoilerArrowClass(question.id)">
                                </div>
                                <div class="spoiler-body"
                                     :id="'spoiler-body-' + question.id">
                                    <div class="inner"
                                         :id="'inner-' + question.id">
                                        <p v-if="isProperty(question, 'text')">
                                            {{ question.text }}
                                        </p>
                                        <div v-if="isProperty(question, 'list')"
                                             v-for="list in question.list">
                                            <p v-if="isProperty(list, 'title')">
                                                {{ list.title }}
                                            </p>
                                            <ul v-if="isProperty(list, 'items')">
                                                <li v-for="item in list.items">
                                                    {{ item }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <group-alert-buttons email-button-class="email-subscribe-alert__dark"
                             :email-in-dark-section="true"
                             tg-button-class="telegram-alert telegram-alert__dark"
                             tg-button-messages-class="telegram-alert alert-messages__yellow"
                             />
    </div>
</template>

<script>
    import HeaderBlock from './layouts/HeaderBlock';
    import GroupAlertButtons from './layouts/alert-buttons/GroupAlertButtons';


    export default {
        name: 'faq',
        components: {
            HeaderBlock,
            GroupAlertButtons

        },
        data() {
            return {
                state: [],
                sections: [
                    {
                        id: 1,
                        title: 'ICO',
                        questions: [
                            {
                                id: 1,
                                title: 'KYC',
                                text: 'Для прохождения KYC требуется паспорт и документ, подтверждающий адрес пребывания.'
                            },
                            {
                                id: 2,
                                title: 'Ограничения',
                                text: 'В покупке токенов могут участвовать не все страны. Ограничения касаются граждан ' +
                                'Китая, США, Гонконга, Сингапура.'
                            },
                            {
                                id: 3,
                                title: 'Когда планируется листинг на бирже?',
                                text: 'Листинг на первой бирже планируется сразу после окончания ICO. В данный момент ' +
                                'ведутся переговоры сразу с несколькими биржами.'
                            },
                            {
                                id: 4,
                                title: 'Есть ли у вас MVP?',
                                text: 'Да, в данный момент доступна демо веб-версия платформы, так же есть возможность' +
                                ' установки приложения на Mac и Linux.'
                            },
                            {
                                id: 5,
                                title: 'К какой юрисдикции относится ALEHUB?',
                                text: 'ALEHUB – проект компании Effective Energy LLC, которая зарегестрирована в Гонконге'
                            },
                            {
                                id: 6,
                                title: 'Какая минимальная сумма инвестицций?',
                                text: 'Минимальная сумма инвестиций составляет 30$.'
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: 'Продукт',
                        questions: [
                            {
                                id: 7,
                                title: 'Зачем нужен блокчейн?',
                                text: 'Поскольку отношения между заказчиком и исполнителем в, первую очередь, носят ' +
                                'сугубо финансовый харакер и построены на доверии двух сторон, то блокчейн является ' +
                                'идеальным решением, способным сохранить все детали работы над проектом. Решение, ' +
                                'предлагаемое ALEHUB позволяет эффективно решить весь спектр проблем, присущий ' +
                                'централизованным платформам.',
                                list: [
                                    {
                                        id: 1,
                                        title: 'Проблемы существующих централизованных платформ:',
                                        items: [
                                            'Биржи централизованны, а системы репутации и разрешения конфликтов ненадежны;',
                                            'Цель бирж фриланса заключаются в установлении контракта между заказчиком ' +
                                            'и исполнителем, формальные процедуры разрешения конфликтов не отраболтаны;',
                                            'Документация и процесс разработки программного обеспечения отделены от сделок;',
                                            'Возможности автоматизации процесса ограничиваются возможностями создателей' +
                                            ' биржи и поэтому чаще всего не отвечают требованиям заказчика;',
                                            'Многие функции систем предоставляются за дополнительную плату, что, фактически,' +
                                            ' означает порог вхождения для фрилансеров, определяемых не их ' +
                                            'профессиональными качествами и навыками, а готовностью заплатить ' +
                                            'определенную сумму за премиум-аккаунт;'
                                        ]
                                    },
                                    {
                                        id: 2,
                                        title: 'Эффективное решение с помощью блокчейна',
                                        items: [
                                            'Централизация исключается за счет использования технологии распределенных' +
                                            ' реестров данных, который поддерживается пиринговой сетью;',
                                            'Система оценки репутации оказывается недоступной  для вмешательства ' +
                                            'злоумышленников;',
                                            'Многосторонние смарт-контракты позволяют создать доверительные ' +
                                            'отношения между неограниченным количеством сторон;',
                                            'Интеграция систем управления версиями, ошибками, документацией;',
                                            'Решение всех конфликтов возможно с использованием механизмов консенсуса;',
                                            'Проектируемая система многоуровневых блокчейнов позволяет в рамках ' +
                                            'платформы объединить: систему заключения контрактов; систему управления ' +
                                            'версиями программного обеспечения; чата между двумя и более сторонами' +
                                            ' взаимодействия; подсистему  обновления и дополнения договоронностей ' +
                                            '(база договоров); подсистему хранения и обновления документации.'
                                        ]
                                    }
                                ]
                            },
                            {
                                id: 8,
                                title: 'Чем ALEHUB лучше классических инструментов?',
                                list: [
                                    {
                                        id: 1,
                                        title: 'Для Заказчиков:',
                                        items: [
                                            'Сокращение издержек на разработку IT продуктов;',
                                            'Уверенность в качестве выполненной работы;',
                                            'Многоуровневая система контроля качества;',
                                            'Оплата работ осуществляется в любой удобной валюте ' +
                                            '(вне зависимости от желаний исполнителя)',
                                            'Подтвержденный рейтинг исполнителей;',
                                            'Высокий уровень конфиденциальности (шифрование);',
                                            'Возможность заключения договора с несколькими подрядчиками.'
                                        ]
                                    },
                                    {
                                        id: 2,
                                        title: 'Для Исполнителей:',
                                        items: [
                                            'Обязательное техническое задание от заказчика, прошедшее проверку с ' +
                                            'помощью системы контроля качества;',
                                            'Прозрачная система рейтингования;',
                                            'Отсутствие скрытых платежей, комиссий и возможности покупки «накрученных»' +
                                            ' аккаунтов.',
                                            'Корректный поиск заказов, в соответствии с профессиональными качествами;',
                                            'Получение оплаты за любой заказ в валюте по выбору (как крипто-, так и фиатной)',
                                            'Минимальная комиссия за вывод средств.'
                                        ]
                                    }
                                ]
                            },
                            {
                                id: 9,
                                title: 'Для чего в системе ALEHUB нужны майнеры?',
                                text: 'Майнеры выполняют работу по проверке и внесении корректных транзакций в ' +
                                'распределенный реестр, исполняют смарт-контракты, а также проверяют наличие и ' +
                                'корректность электронных подписей документов.'
                            },
                            {
                                id: 10,
                                title: 'За что платформа начисляет комиссии?',
                                list: [
                                    {
                                        id: 1,
                                        items: [
                                            'Исполнение смарт-контракта;',
                                            'Успешно завершенная сделка;',
                                            'Использование блокчейна для сохранения истории коммуникации (по выбору ' +
                                            'заказчика/исполнителя вся коммуникация по проекту может быть записана в ' +
                                            'блокчейн);',
                                            'Ввод/вывод средств.'
                                        ]
                                    }
                                ]
                            },
                            {
                                id: 11,
                                title: 'Как начать выпорлнять заказы на платформе?',
                                text: 'Для того, чтобы получить доступ к заказам на платформе, необходимо подтвердить ' +
                                'навыки, путем сдачи экзаменационных испытаний.'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            /**
             * checking property belonging to an object
             *
             * @param object
             * @param property
             * @returns {boolean}
             */
            isProperty: function (object, property) {
                return object.hasOwnProperty(property);
            },
            /**
             * spoiler switching between active and inactive state
             *
             * @param questionId
             */
            toggleSpoilerBody: function (questionId) {
                this.state.find(s => s.id === questionId).active = !this.state.find(s => s.id === questionId).active;

                if (this.state.find(s => s.id === questionId).active) {
                    document.getElementById('spoiler-body-' + questionId).style.height =
                        document.getElementById('inner-' + questionId).scrollHeight + 'px';
                } else {
                    document.getElementById('spoiler-body-' + questionId).style.height = '0px';
                }
            },
            /**
             * spoiler body height initialization
             */
            initSpoilerBodyStyle: function () {
                let collection = document.getElementsByClassName('spoiler-body');

                this.state.forEach((s, i) => {
                    if (s.active)
                        collection[i].style.height = collection[i].querySelector('.inner').scrollHeight + 'px';
                    else
                        collection[i].style.height = '0';
                });
            },
            /**
             * initializing the initial state of sections
             */
            initSectionState: function () {
                this.sections.forEach(s => {
                    s.questions.forEach(q => {
                        if (q.id === 1)
                            this.state.push(
                                {
                                    id: q.id,
                                    active: true
                                }
                            );
                        else
                            this.state.push(
                                {
                                    id: q.id,
                                    active: false
                                }
                            )
                    })
                });
            },
            /**
             * calculation of the spoiler arrow class
             *
             * @param questionId
             * @returns {string}
             */
            calcSpoilerArrowClass: function (questionId) {
                if (this.state.find(s => s.id === questionId).active)
                    return 'active';
                return 'inactive';
            }
        },
        created() {
            this.initSectionState();
        },
        mounted() {
            this.initSpoilerBodyStyle();
        }
    }
</script>

<style lang="stylus" scoped>
    .faq
        min-height 100vh
        background-color white

        .container
            padding-top 74px

            .panel
                margin-top 50px

                .faq-title
                    font-weight 700
                    margin-bottom 20px

                .section
                    margin-bottom 20px

                    .spoiler
                        position relative
                        height 100%
                        margin-bottom 10px

                        .spoiler-header
                            cursor pointer
                            display flex
                            justify-content space-between
                            align-items center
                            color #000
                            background-color #ffd24f
                            padding 5px 10px

                            .spoiler-arrow
                                transition transform .5s ease-in-out
                                height 8px

                                &.active
                                    transform rotateX(180deg)

                        &.inactive
                            height 0

                        .spoiler-body
                            transition height .5s ease-in-out
                            overflow hidden

                            .inner
                                margin-top 10px
</style>