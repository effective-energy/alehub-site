const messages = {
    en: {
        navbar: {
            menuList: [
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
                }
            ],
            loginBtn: 'Log in',
            blog: 'Blog'
        },
        menuModal: {
            selectLang: 'Select language',
            navigationMenu: 'Back to menu'
        },
        greeting: {
            title: 'The new era of project management is coming',
            countDown: {
                title: 'Round 1 will begin',
                time: {
                    days: 'Days',
                    hours: 'Hours',
                    minutes: 'Minutes'
                },
                btnBuyTokens: 'Buy tokens',
                bonus: 'Bonus 25% up to 7 April 2018',
                notAvailable: 'Now not available'
            },
            acceptedCrypto: {
                title: 'Accepted for collection:'
            }
        },
        partners: {
            title: 'Our partners',
        },
        about: {
            title: 'What is Alehub',
            subTitle: 'ALEHUB – is a platform for the IT industry for project management and contractors search.',
            description: 'ALEHUB combines the advantages of distributed registry systems (blockchain) and classic project management services. The selection of contractors (customers and executors), their work management, control and mutual settlements are regulated by multilateral smart contracts of the ALE system, which ensure the safety, reliability and low costs of outsourcing IT professionals.',
            btnGroup: {
                whitePaper: 'White paper',
                techDetails: 'More about ALE',
                download: 'Download'
            }
        },
        advantages: {
            title: 'ALE advantages',
            lists: [{
                title: 'ALE vs Project Management Systems'
            }, {
                title: 'ALE vs Other Blockchain Platforms'
            }]
        },
        alePlatform: {
            title: 'ALE platform',
            subTitle: 'ALE is a construct that modifies and combines the advantages of real and crypto economies to create a fundamentally new ecosystem - the composite economy. ALE reinvents the existing financial and legal structure as more flexible, more congruent to the laws and recognizes values of most countries in identifying financial agents, storing private data, offering liquidity and legality of digital means of payments.',
            watchDemo: 'Watch demo',
            solvingProblems: {
                title: 'Solved problems',
                list: [{
                    title: 'The legal nature of payment.',
                    description: 'For mutual settlements ALE uses “containers” containing real currency.'
                }, {
                    title: 'Legal value of the electronic contract.',
                    description: 'All contracts concluded within the ALE platform are legally significant due to compliance with national requirements for documents.'
                }, {
                    title: 'Highly volatile means of payment.',
                    description: 'Cryptocurrencies are volatile, making them an unviable payment method for real business. The system of cash holding “containers” solves this problem.'
                }, {
                    title: 'Contradiction to national and industrial standards. ',
                    description: 'ALE allows users to choose the rules of interaction within the ALE platform. Therefore, one should act in accordance with the requirements of legislation and business.'
                }, {
                    title: 'The inevitability of fulfilling obligations.',
                    description: 'Financial obligations are regulated by smart contracts, through which a trusted environment is formed.'
                }, {
                    title: 'Integrity and unchangeability of documentation.',
                    description: 'Confirmed by storage in the blockchain, so documents within the ALE ecosystem are legally guaranteed.'
                }]
            }
        },
        features: {
            title: 'The main distinguishing features of ALE',
            list: [{
                title: 'Prompt consensus establishment in the dynamics of the development of the user desires and changing economic conditions.',
                description: ' '
            }, {
                title: 'Simple and intuitive products in matters of handling data, functions and parameters at the level of the interactive interface.',
                description: ' '
            }, {
                title: 'Eliminate the substitution of existing verification organizations in the world for the full legitimacy of the relationship on the platform.',
                description: ' '
            }, {
                title: 'Ensuring commitment and financial reinforcement of multi-party arrangements, by avoiding duality, encouraging irresponsibility and freezing disproportionate amounts of liquidity as collateral.',
                description: ' '
            }]
        },
        table: {
            first: {
                desc: ["Multilateral smart contracts",
                    "Participants establish rules",
                    "Full compliance with the majority of jurisdictions",
                    "Expansion of the possibilities of a legal economic system",
                    "Payment by real currency containers",
                    "Possibility of formal arbitration"],
            },
            second: {
                title: "Other blockchain platforms",
                desc: ["DAO",
                    "Interaction rules are predetermined",
                    "Uncertain legitimacy",
                    "Substitution of legal economy",
                    "Payment by high-volatile cryptocurrency",
                    "-"],
            },
            third: {
                desc: ["Joint project management, finance and contractor administration",
                    "Universality of project management methods",
                    "Universality of encryption methods of private data",
                    "Regulated by consensus of users",
                    "Payments without intermediaries",
                    "The imminence of execution obligations"],
            },
            four: {
                title: "Project management systems",
                desc: ["-",
                    "Project management, financial services through different applications",
                    "Bound to one method",
                    "Bound to one or several methods",
                    "Centrally regulated",
                    "Payments through intermediaries"],
            }
        },
        team: {
            title: 'Our team',
            serokell: [{
                name: 'Serokell',
                members: [{
                    name: 'Arseniy Seroka',
                    position: 'Lead Serokell Developer',
                    src: '../static/images/avatars/seroka@3x.png'
                }, {
                    name: 'John Mostovoy',
                    position: 'Lead Serokell Developer',
                    src: '../static/images/avatars/mostovoy@3x.png'
                }, {
                    name: 'Alexander Rukin',
                    position: 'UI/UX Designer',
                    src: '../static/images/avatars/rukin@3x.png'
                }, {
                    name: 'Kirill Elagin',
                    position: 'Backend Engineer',
                    src: '../static/images/avatars/elagin@3x.png'
                }]
            }],
            effectiveEnergy: [
                {
                    name: 'Effective Energy team',
                    members: [
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../static/images/avatars/gromyko@3x.png'
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Blockchain Expert',
                            src: '../static/images/avatars/grudinin@3x.png'
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Chief Operating Officer',
                            src: '../static/images/avatars/osipenko@3x.png'
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../static/images/avatars/elena@3x.png'
                        },
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Marketing Officer',
                            src: '../static/images/avatars/loktev@3x.png'
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../static/images/avatars/levashow@3x.png'
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/'
                                }
                            ]
                        },
                        {
                            name: 'Alexander Voroncov',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/voroncov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/'
                                }
                            ]
                        },
                        {
                            name: 'Denis Tikhonov',
                            position: 'Frontend Developer',
                            src: '../static/images/avatars/tikhonov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mrdenzzz/'
                                }
                            ]
                        },
                        {
                            name: 'Galina Sergeeva',
                            position: 'Frontend Developer',
                            src: '../static/images/avatars/sergeeva@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/%D0%B3%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B0-628a07161/'
                                }
                            ]
                        },
                        {
                            name: 'Dmitry Zhuravlev',
                            position: 'Mobile developer',
                            src: '../static/images/avatars/zhuravlev@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: 'Advisors',
            members: [
                {
                    name: 'Mikhail Gromyko',
                    position: 'Chief Executive Officer',
                    src: '../static/images/avatars/gromyko@3x.png'
                },
                {
                    name: 'Vladimir Grudinin',
                    position: 'Blockchain Expert',
                    src: '../static/images/avatars/grudinin@3x.png'
                },
                {
                    name: 'Alexej Osipenko',
                    position: 'Chief Operating Officer',
                    src: '../static/images/avatars/osipenko@3x.png'
                },
                {
                    name: 'Elena Tsymbalyuk',
                    position: 'Head of Marketing Operations',
                    src: '../static/images/avatars/elena@3x.png'
                },
                {
                    name: 'Egor Loktev',
                    position: 'Chief Marketing Officer',
                    src: '../static/images/avatars/loktev@3x.png'
                }
            ]
        },
        economy: {
            title: 'ICO Economy',
            subTitle: 'ALE is a security token, which provides the owner with the ALE system profit share. The protocol mirrors the Ethereum network (ERC-20 protocol) to provide liquidity.',
            ICOinfo: {
                emission: {
                    title: 'Emission',
                    amount: "100,500,000,000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "77,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "4,500"
                }
            },
            distribution: {
                title: 'Sale during the ICO',
                description: 'The ALE product is primarily a service for consumers to find counterparties for projects in the IT field and to manage these projects at the management and financial level. On the one hand, they are programmers or their associations, and on the other hand, they are IT Customers.',
                list: [{
                    title: 'Sale for ICO',
                    amount: 77
                }, {
                    title: 'Team',
                    amount: 11
                }, {
                    title: 'Referral program, advisors',
                    amount: 10
                }, {
                    title: 'Bounty',
                    amount: 2
                }]
            }
        },
        roadmap: {
            title: 'Roadmap',
            stateLabel: 'state',
            stateStatus: {
                deployed: 'deployed',
                implementing: 'implementing',
                review: 'review',
                notNow: 'the stage did not begin'
            },
            stages: [
                {
                    title: 'The idea',
                    date: 'January 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: 'Consultations with specialists in project management from the real sector of the economy. Collection of requirements and defining problems',
                    date: 'February - March 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: 'Consultations with financial experts. Mathematical modeling in cooperation with the University of ITMO',
                    date: 'April - May 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: 'Consultations with blockchain experts and developers. Forming an image of a product and the terms of reference',
                    date: 'June - July 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: 'Partnership with Serokell OU. The beginning of development.',
                    date: 'August 2017',
                    members: [
                        '../static/images/avatars/seroka@3x.png',
                        '../static/images/avatars/mostovoy@3x.png',
                        '../static/images/avatars/elagin@3x.png',
                        '../static/images/avatars/rukin@3x.png',
                        '../static/images/avatars/dudin@3x.png',
                        '../static/images/avatars/voroncov@3x.png',
                        '../static/images/avatars/tikhonov@3x.png',
                        '../static/images/avatars/sergeeva@3x.png',
                        '../static/images/avatars/zhuravlev@3x.png'
                    ],
                    progress: 25,
                    state: 'implementing'
                },
                {
                    title: 'PreSale',
                    date: 'November - December 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: 'Publishing MVP',
                    date: 'May 15, 2018',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Pre-ICO',
                    date: '05/25/2018 - 06/24/2018',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'ICO',
                    date: '06/25/2018 - 09/07/2018',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Development of Yellow Paper',
                    date: '07/02/2018 - 01/01/2018',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Decentralization of MVP solutions',
                    date: '01.12.2018 - 01/02/2019',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Realization of private blockhouses',
                    date: '01/03/2019 - 01/01/2019',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Implementation of the system of the dispute',
                    date: '05/01/2018 - 01/01/2019',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Implementation of the voting system for changes',
                    date: '08/01/2018 - 01/01/2019',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Closed system testing',
                    date: '10/01/2019 - 01/01/2020',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Publication of the source code of the system and documentation',
                    date: '01/01/2020 - 01/02/2020',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Starting the system operation',
                    date: '01/02/2020 – 01/03/2020',
                    progress: 0,
                    state: 'the stage did not begin'
                }
            ]
        },
        blog: {
            title: 'Blog',
            allPostsBtn: 'All posts',
            notFound: 'News not found'
        },
        footer: {
            right: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            left: {
                subscribe: {
                    input: 'Your e-mail address',
                    btn: 'Subscribe to news'
                }
            }
        }
    },
    ru: {
        navbar: {
            menuList: [
                {
                    path: '#home',
                    name: 'Домой'
                },
                {
                    path: '#description',
                    name: 'О проекте'
                },
                {
                    path: '#advantages',
                    name: 'Преимущества'
                },
                {
                    path: '#features',
                    name: 'Платформа'
                },
                {
                    path: '#team',
                    name: 'Команда'
                },
                {
                    path: '#ico',
                    name: 'ICO'
                },
                {
                    path: '#roadmap',
                    name: 'Карта проекта'
                },
                {
                    path: '#blog',
                    name: 'Блог'
                }
            ],
            loginBtn: 'Войти',
            blog: 'Блог'
        },
        menuModal: {
            selectLang: 'Выберите язык',
            navigationMenu: 'Вернуться к меню'
        },
        greeting: {
            title: 'Наступает новая эра ведения проектов',
            countDown: {
                title: 'pre-ICO начинается через',
                time: {
                    days: 'Дней',
                    hours: 'Часов',
                    minutes: 'Минут'
                },
                btnBuyTokens: 'Купить токены',
                bonus: 'Бонус 25% до 10 Июня 2018',
                notAvailable: 'В данный момент недоступно'
            },
            acceptedCrypto: {
                title: 'Принимаем к сборам:'
            }
        },
        partners: {
            'title': 'Наши партнеры'
        },
        about: {
            title: 'Что такое Alehub',
            subTitle: 'ALEHUB - платформа для управления проектами и поиска подрядчиков в IT сфере и Hi Tech.',
            description: 'ALEHUB объединяет преимущества распределённых реестров и классических сервисов управления проектами. Подбор контрагентов (заказчики и исполнители), управление их работой, контроль и взаиморасчеты, регулируемые смарт-контрактами системы ALE, обеспечивают безопасность, надежность и дешевизну аутсорсинга IT специалистов.',
            btnGroup: {
                whitePaper: 'White paper',
                techDetails: 'Подробнее про ALE',
                download: 'Скачать клиент'
            }
        },
        advantages: {
            title: 'Преимущества ALE',
            lists: [{
                title: 'ALE vs централизованные приложения'
            }, {
                title: 'ALE vs блокчейн платформы'
            }]
        },
        alePlatform: {
            title: 'Платформа ALE',
            subTitle: 'ALE объединяет преимущества реальной и крипто экономики для создания принципиально новой среды - композитной экономики. ALE делает существующую финансовую и юридическую структуру более гибкой, соответствуя законодательству и признанным ценностям большинства стран в вопросах идентификации финансовых агентов, хранения приватных данных, ликвидности и легальности цифровых платежных средств.',
            watchDemo: 'Узнать больше',
            solvingProblems: {
                title: 'Решаемые проблемы',
                list: [{
                    title: 'Легальность средства платежа',
                    description: ' Для взаиморасчетов ALE использует «контейнеры», содержащие реальную валюту'
                }, {
                    title: 'Значимость электронных договоров',
                    description: 'Все договора заключённых в рамках платформы ALE являются юридически значимыми за счёт соблюдения национальных требований к документам'
                }, {
                    title: 'Волатильность средства взаиморасчетов',
                    description: 'Криптовалюты волатильны, поэтому не могут являться средством платежа реального бизнеса. Система «контейнеров» стоимости решает эту проблему.'
                }, {
                    title: 'Противоречие национальных и отраслевых стандартов',
                    description: 'ALE позволяет пользователям самостоятельно выбирать правила, для взаимодействия между собой. Таким образом действовать в соответствии с требованиями законодательства и бизнеса.'
                }, {
                    title: 'Неизбежность исполнения обязательств',
                    description: 'Финансовые обязательства регулируются смарт-контрактами, за счёт чего формируется доверенная среда.'
                }, {
                    title: 'Целостность и неизменяемость документации',
                    description: 'Подтверждается хранением в блокчейне, поэтому документы в рамках экосистемы ALE являются настоящей юридической гарантией.'
                }]
            }
        },
        features: {
            title: 'Основные цели ALE',
            list: [{
                title: 'Оперативное нахождение консенсуса',
                description: 'В динамике развития желания пользователей и изменяющихся экономических условий'
            }, {
                title: ' Простые и интуитивные продукты',
                description: 'В вопросах обращения с данными, функциями и параметрами на уровне интерактивного интерфейса'
            }, {
                title: 'Исключить подмену существующих верификационных уполномоченных организаций',
                description: 'Users of services based on ALE have the opportunity to create their own methodological algorithms, in addition to the well known (DIN 69901, GOST R 54869 - 2011, PMBOK Guide, ISO 10006-97, APM Body of Knowledge, Prince 2, OPM 3)'
            }, {
                title: 'Фиксация и финансовое подкрепление договоренностей множества сторон',
                description: 'Не допускающее двойственности, поощрения безответственности и замораживания непропорциональных объемов ликвидности в качестве залогов.'
            }]
        },
        table: {
            first: {
                desc: ["Многосторонние смарт-контракты",
                    "Участники устанавливают правила взаимодействия",
                    "Полное соответствие юрисдикциям большинства стран для участников",
                    "Расширение возможностей легальной экономики",
                    "Платеж контейнером реальной валюты",
                    "Возможность официального арбитража"],
            },
            second: {
                title: "Системы project-менеджмента",
                desc: ["Только посредством DAO",
                    "Правила взаимодействия участников определны заранее",
                    "Неясная легитимность",
                    "Замещение легальной экономики",
                    "Платеж волатильной криптовалютой",
                    "-"],
            },
            third: {
                desc: ["Неизбежность исполнения обязательств",
                    "Объединение управление проектом, финансами и поиском подрядчиков",
                    "Универсальность методологий управления проектами",
                    "Универсальность методов шифрования приватных данных",
                    "Регулируется консенсусом пользователей",
                    "Платежи без посредников"],
            },
            four: {
                title: "Системы project-менеджмента",
                desc: ["-",
                    "Управление проектами, управление финансами и поиск подрядчиков через различные приложения",
                    "Привязка к одной методолгии",
                    "Привязка к одному/нескольким методам",
                    "Регулируется централизовано",
                    "Платежи через посредников\n"],
            }
        },
        team: {
            title: 'Команда',
            serokell: [{
                name: 'Serokell',
                members: [{
                    name: 'Арсений Серока',
                    position: 'Ведущий разработчик Serokell',
                    src: '../static/images/avatars/seroka@3x.png'
                }, {
                    name: 'Йон Мостовой',
                    position: 'Ведущий разработчик Serokell',
                    src: '../static/images/avatars/mostovoy@3x.png'
                }, {
                    name: 'Александр Рукин',
                    position: 'UI/UX Дизайнер',
                    src: '../static/images/avatars/rukin@3x.png'
                }, {
                    name: 'Кирилл Елагин',
                    position: 'Backend Разработчик',
                    src: '../static/images/avatars/elagin@3x.png'
                }]
            }],
            effectiveEnergy: [
                {
                    name: 'Effective Energy',
                    members: [
                        {
                            name: 'Михаил Громыко',
                            position: 'Генеральный директор',
                            src: '../static/images/avatars/gromyko@3x.png'
                        },
                        {
                            name: 'Владимир Грудинин',
                            position: 'Блокчейн эксперт',
                            src: '../static/images/avatars/grudinin@3x.png'
                        },
                        {
                            name: 'Алексей Остапенко',
                            position: 'Главный операционный директор',
                            src: '../static/images/avatars/osipenko@3x.png'
                        },
                        {
                            name: 'Елена Цимбалюк',
                            position: 'Начальник отдела маркетинговых операций',
                            src: '../static/images/avatars/elena@3x.png'
                        },
                        {
                            name: 'Егор Локтев',
                            position: 'Директор по маркетингу',
                            src: '../static/images/avatars/loktev@3x.png'
                        },
                        {
                            name: 'Артем Левашев',
                            position: 'Главный консультант по юридическим делам',
                            src: '../static/images/avatars/levashow@3x.png'
                        },
                        {
                            name: 'Вадим Дудин',
                            position: 'Fullstack Разработчик',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/'
                                }
                            ]
                        },
                        {
                            name: 'Александр Воронцов',
                            position: 'Fullstack Разработчик',
                            src: '../static/images/avatars/voroncov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/'
                                }
                            ]
                        },
                        {
                            name: 'Денис Тихонов',
                            position: 'Frontend Разработчик',
                            src: '../static/images/avatars/tikhonov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mrdenzzz/'
                                }
                            ]
                        },
                        {
                            name: 'Галина Сергеевна',
                            position: 'Frontend Разработчик',
                            src: '../static/images/avatars/sergeeva@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/%D0%B3%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%B0-628a07161/'
                                }
                            ]
                        },
                        {
                            name: 'Дмитрий Журавлев',
                            position: 'Разработчик мобильных приложений',
                            src: '../static/images/avatars/zhuravlev@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: 'Советники',
            members: [
                {
                    name: 'Михаил Громыко',
                    position: 'Генеральный директор',
                    src: '../static/images/avatars/gromyko@3x.png'
                }, {
                    name: 'Владимир Грудинин',
                    position: 'Блокчейн эксперт',
                    src: '../static/images/avatars/grudinin@3x.png'
                }, {
                    name: 'Алексей Остапенко',
                    position: 'Главный операционный директор',
                    src: '../static/images/avatars/osipenko@3x.png'
                }, {
                    name: 'Елена Цимбалюк',
                    position: 'Начальник отдела маркетинговых операций',
                    src: '../static/images/avatars/elena@3x.png'
                }, {
                    name: 'Егор Локтев',
                    position: 'Директор по маркетингу',
                    src: '../static/images/avatars/loktev@3x.png'
                }]
        },
        economy: {
            title: 'Экономика ICO',
            subTitle: 'ALE - security токен, обеспечивающий владельцем получение доли прибыли системы ALE. Протокол зазеркален на сеть Ethereum (протокол ERC-20) для обеспечения ликвидности.',
            ICOinfo: {
                emission: {
                    title: 'Объем эмиссии',
                    amount: "100,500,000,000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "77,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "4,500"
                }
            },
            distribution: {
                title: 'Условия ICO',
                description: 'Смарт-контракт обеспечивает безопасность средств инвесторов: полный возврат средств в случае недостижения softcap, замораживает средства команды на 1 год. Токены, не распределенные в ходе ICO, будут уничтожены. Токен будет размещен на биржах.',
                list: [{
                    title: 'Продажа на ICO',
                    amount: 77
                }, {
                    title: 'Команда',
                    amount: 11
                }, {
                    title: 'Рефералы и эдвайзоры',
                    amount: 10
                }, {
                    title: 'Баунти',
                    amount: 2
                }]
            }
        },
        roadmap: {
            title: 'Дорожная карта проекта',
            stateLabel: 'статус',
            stateStatus: {
                deployed: 'готово',
                implementing: 'разработка',
                review: 'проверка',
                notNow: 'этап ещё не начался'
            },
            stages: [
                {
                    title: 'Появление идеи',
                    date: 'Январь 2017-го',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'готово'
                },
                {
                    title: 'Экспертиза от специалистов по управлению проектами. Определение требований.',
                    date: 'Февраль - Март 2017-го',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'готово'
                },
                {
                    title: 'Построение математической модели',
                    date: 'Апрель - Май 2017-го',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'готово'
                },
                {
                    title: 'Формирование Технического задания',
                    date: 'Июнь - Июль 2017-го',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'готово'
                },
                {
                    title: 'Партнерство с Serokell OU. Начало разработки.',
                    date: 'Август 2017-го',
                    members: [
                        '../static/images/avatars/seroka@3x.png',
                        '../static/images/avatars/mostovoy@3x.png',
                        '../static/images/avatars/elagin@3x.png',
                        '../static/images/avatars/rukin@3x.png',
                        '../static/images/avatars/dudin@3x.png',
                        '../static/images/avatars/voroncov@3x.png',
                        '../static/images/avatars/tikhonov@3x.png',
                        '../static/images/avatars/sergeeva@3x.png',
                        '../static/images/avatars/zhuravlev@3x.png'
                    ],
                    progress: 25,
                    state: 'разработка'
                },
                {
                    title: 'PreSale',
                    date: 'Ноябрь - Декабрь 2017-го',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: 'готово'
                },
                {
                    title: 'Публикация MVP',
                    date: '15 Мая 2018-го',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'Pre-ICO',
                    date: '25.05.2018 – 24.06.2018',
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'ICO',
                    date: '25.06.2018 – 09.07.2018',
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'Разработка Yellow Paper',
                    date: '02.07.2018 - 01.09.2018',
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'Децентрализация MVP решения',
                    date: '01.12.2018 - 01.02.2019',
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'Реализация приватных блокчейнов',
                    date: '01.03.2019 – 01.05.2019',
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'Реализация системы диспута',
                    date: '01.05.2019 – 01.08.2019',
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'Реализация системы голосования за изменения',
                    date: '01.08.2019 - 01.10.2019',
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'Закрытое тестирование работы системы',
                    date: '01.10.2019 - 01.01.2020',
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'Публикация исходного кода системы и документации',
                    date: '01.01.2020 – 01.02.2020',
                    progress: 0,
                    state: 'этап ещё не начался'
                },
                {
                    title: 'Запуск эксплуатации системы',
                    date: '01.02.2020 – 01.03.2020',
                    progress: 0,
                    state: 'этап ещё не начался'
                }
            ]
        },
        blog: {
            title: 'Блог',
            allPostsBtn: 'Все записи',
            notFound: 'Новости не найдены'
        },
        footer: {
            right: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            left: {
                subscribe: {
                    input: 'Ваш e-mail',
                    btn: 'Подписаться'
                }
            }
        }
    }
};

export default messages;