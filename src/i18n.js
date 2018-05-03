const messages = {
    ch: {
        navbar: {
            menuList: [
                {
                    path: '#home',
                    name: '家'
                },
                {
                    path: '#description',
                    name: '描述'
                },
                {
                    path: '#advantages',
                    name: '描述'
                },
                {
                    path: '#features',
                    name: '特征'
                },
                {
                    path: '#team',
                    name: '球队'
                },
                {
                    path: '#ico',
                    name: 'ICO'
                },
                {
                    path: '#roadmap',
                    name: '路线图'
                },
                {
                    path: '#blog',
                    name: '博客'
                }
            ],
            loginBtn: '登录',
            blog: '博客'
        },
        menuModal: {
            selectLang: '选择语言',
            navigationMenu: 'Back to menu'
        },
        greeting: {
            title: '项目管理的新时代即将到来',
            countDown: {
                title: 'Round 1 will begin',
                time: {
                    days: '天',
                    hours: '小时',
                    minutes: '分钟'
                },
                btnBuyTokens: '购买代币',
                bonus: 'Bonus 25% up to 7 April 2018',
                notAvailable: 'Now not available'
            },
            acceptedCrypto: {
                title: 'Accepted for collection:'
            }
        },
        partners: {
            title: '我们的伙伴',
        },
        about: {
            title: 'ALE系统的第一个项目',
            subTitle: 'ALEHUB – 是一个为IT行业提供项目管理和承包商搜索的平台。',
            description: 'ALEHUB 兼备了分布式注册系统（区块链）和传统项目管理服务的优势。承包商的选择（客户和执行人）、他们工作的管理、控制以及共同结算都是由ALE系统的多边智能合约所调节，因此确保了IT外包专业人员的安全性、可靠性以及低成本。',
            btnGroup: {
                whitePaper: '白皮书',
                techDetails: '关于ALE的更多信息',
                download: '下载'
            }
        },
        advantages: {
            title: '优势',
            lists: [{
                title: 'ALE与项目管理系统相比'
            }, {
                title: 'ALE与其他区块链平台相比'
            }]
        },
        alePlatform: {
            title: 'ALE 平台',
            subTitle: 'ALE是一种可以修改并结合实体经济和加密经济优势的结构，以便于创建出一种全新的生态系统—复合经济。ALE重塑了现有的金融和法律结构，以使他们更灵活且跟符合法律，并确认了大多数国家在识别金融机构、存储私人数据方面的价值，并提供了数字支付手段的流动性和合法性。   ',
            watchDemo: 'Watch demo',
            solvingProblems: {
                title: '所解决的问题',
                list: [{
                    title: '支付的法律性质。',
                    description: '对于相互结算，ALE使用包含真是货币的“扩容器”。'
                }, {
                    title: '电子合约的法律价值、',
                    description: '在ALE平台内完成的所有合约都具有法律意义，因为其内容符合国家对文件的要求。'
                }, {
                    title: '高度不稳定的支付方式。',
                    description: '加密货币的不稳定性使他们成为一种不可行的实际业务支付方式。 持有“扩容器”的现金系统解决了这一问题。'
                }, {
                    title: '与国家和行业标准的矛盾。 ',
                    description: 'ALE允许用户在ALE平台内选择交互的规则。因此，一个人应该按照立法和商业的要求行事。'
                }, {
                    title: '履行义务的必然性。',
                    description: '金融义务受智能合约的约束，所以形成了一个可信的环境。'
                }, {
                    title: '文档的完整性和不可更改性。',
                    description: '被区块链中的存储库确认，所以ALE生态系统中的文档是有法律保障的。'
                }]
            }
        },
        features: {
            title: 'ALE的主要优势特点',
            list: [{
                title: '根据用户需求发展的变动以及经济条件的改变迅速建立共识。',
                description: ' '
            }, {
                title: '在处理数据、功能和参数方面（在交互界面的层次上）简单且直观的产品。',
                description: ' '
            }, {
                title: '消除世界现有核查机构的替代，以充分证明该关系在平台上的合法性',
                description: ' '
            }, {
                title: '通过避免二元性、鼓励不负责任并冻结不成比例的流动性金额作为抵押品，以此来确保多方安排的承诺和财务支持。',
                description: ' '
            }]
        },
        table: {
            first: {
                desc: ["多边智能合约",
                    "参与者制定规则",
                    "完全符合大多数司法管辖区的规定",
                    "法律经济制度可扩展",
                    "真是货币进行支付",
                    "可进行正式仲裁"],
            },
            second: {
                title: "其他区块链平台",
                desc: ["DAO",
                    "交互规则是预先确定的",
                    "合法性不确定",
                    "法制经济的替代",
                    "使用高波动性的加密货币支付",
                    "-"],
            },
            third: {
                desc: ["联合了项目管理、金融管理以及承包商管理",
                    "通用性的项目管理方法",
                    "通用性的私人数据加密方法",
                    "根据用户的一致意见进行管理",
                    "无中介支付",
                    "执行义务的紧迫性"],
            },
            four: {
                title: "项目管理系统",
                desc: ["-",
                    "通过不同的应用程序进行项目管理和金融服务",
                    "使用一种方法",
                    "使用一个或多个方法",
                    "集中管理",
                    "通过中介支付"],
            }
        },
        team: {
            title: '团队',
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
            title: '顾问',
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
            title: 'ICO 经济',
            subTitle: 'ALE是一种安全性代币，它允许代币持有者分享ALE系统的利润。该协议借鉴了以太坊网络（ERC-20协议），以便于提供流动性。',
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
                title: '在ICO期间出售',
                description: 'ALE是一种安全性代币，它允许代币持有者分享ALE系统的利润。该协议借鉴了以太坊网络（ERC-20协议），以便于提供流动性。',
                list: [{
                    title: '为ICO出售',
                    amount: 77
                }, {
                    title: '团队',
                    amount: 11
                }, {
                    title: '推荐计划和顾问',
                    amount: 10
                }, {
                    title: '赏金',
                    amount: 2
                }]
            }
        },
        roadmap: {
            title: '路线图',
            stateLabel: 'state',
            stateStatus: {
                deployed: 'deployed',
                implementing: 'implementing',
                review: 'review',
                notNow: 'the stage did not begin'
            },
            stages: [
                {
                    title: '构思',
                    desk: '理念形成',
                    date: '一月 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: '来自项目管理专家的专业意见. 定义需求',
                    desk: '与实体经济部门的项目管理专家进行磋商. 收集需求并定义问题',
                    date: '二月 - 游行 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: '数学建模',
                    desk: '与金融专家磋商. 与ITMO大学合作进行数学建模',
                    date: '四月 - 五月 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: '职权范围的形成',
                    desk: '与区块链专家和开发者磋商\n' +
                    '\n' +
                    '形成产品形象和职权范围',
                    date: '六月 - 七月 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: '与SerokeII OU达成或作伙伴关系，并开始开发.',
                    date: '八月 2017',
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
                    title: '预售',
                    desk:'筹集到100多万美元',
                    date: '十一月 - 十二月 2017',
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
                    title: '发行最小可行性产品（MVP）',
                    date: '五月 15, 2018',
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
                    title: '黄皮书开发',
                    desk:'黄皮书 –系统的技术描述。该文件说明了系统体系的结构特征，并包含网络节点和其他技术细节的交互协议。',
                    date: '07/02/2018 - 01/01/2018',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: '去中心化的MVP解决方案',
                    desc: '构建实施以下组件的系统版本：对等网络；使用内置代币和其他代币的自定义交易；',
                    date: '01.12.2018 - 01/02/2019',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: '私人区块链',
                    desk: '开发私人区块链并集成到现有的基础设施中。确保Oracle 的不间断运作。 在整个系统的完整版本中进行注册—但还没存在争端机制（仲裁）。',
                    date: '01/03/2019 - 01/01/2019',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: '争端解决机制的实施',
                    desk:'在去中心化的应用框架内完善争议解决机制。',
                    date: '05/01/2018 - 01/01/2019',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: '变更投票制度的实施',
                    desk:'随着时间的变化进行系统修改。',
                    date: '08/01/2018 - 01/01/2019',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: '系统发布',
                    date: '10/01/2019 - 01/01/2020',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: '公开系统的源代码以及相关文件',
                    desk:'将系统的源代码和相关文件发布到公开的存储库中',
                    date: '01/01/2020 - 01/02/2020',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: '启动系统',
                    date: '01/02/2020 – 01/03/2020',
                    progress: 0,
                    state: 'the stage did not begin'
                }
            ]
        },
        blog: {
            title: '博客',
            allPostsBtn: '所有帖子',
            notFound: '未找到新闻'
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
    },
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
                desc: ["Project management, financial services through different applications",
                    "Bound to one method",
                    "Bound to one or several methods",
                    "Centrally regulated",
                    "Payments through intermediaries",
                    "-"],
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
                    title: 'Conception',
                    desk: 'The idea',
                    date: 'January 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: 'Expertise from specialists in project management. Definition of requirements',
                    desk: 'Consultations with specialists in project management from the real sector of the economy. Collection of requirements and defining problems',
                    date: 'February - March 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: 'Mathematical modeling',
                    desk: 'Consultations with financial experts. Mathematical modeling in cooperation with the University of ITMO',
                    date: 'April - May 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed'
                },
                {
                    title: 'Formation of the Terms of Reference',
                    desk: 'Consultations with blockchain experts and developers. Forming an image of a product and the terms of reference',
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
                    desk:'Raised more than 1,000,000 USD',
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
                    title: 'Yellow Paper development',
                    desk:'Yellow Paper – technical description of the system. The document illustrates architectural features of the system construction, protocols of interaction between network nodes and other technical details.',
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
                    title: 'Private blockchains',
                    date: '01/03/2019 - 01/01/2019',
                    progress: 0,
                    state: 'the stage did not begin'
                },
                {
                    title: 'Implementation of the dispute system',
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
                    title: 'Booting the system ',
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
};

export default messages;