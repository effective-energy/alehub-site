const messages = {
    zh: {
        whiteList: {
            description: 'Dear Sir/Madam, since August, 25 we have limited the open sale of ALEHUB tokens. Enter your email and you will receive an instruction to buy ALEHUB tokens.',
            form: {
                topLabel: {
                    success: 'successful sending',
                    exist: 'this email is already in use',
                    incorrect: 'incorrect email'
                }
            }
        },
        emailSubscribePanel: {
            newsletter: "訂閱我們的通訊",
            yourAddress: "您的電子郵件地址”",
            subscribe: "訂閱",
            turnOn: "並且不要忘記打開通知",
            success: "成功訂閱",
            alreadyUse: "此電子郵件已被使用",
            label: {
                success: '成功订阅',
                error: '不正确的电子邮件',
                exist: '此电子邮件已被使用'
            }
        },
        navbar: {
            home: 'Home',
            menuList: [
                {
                    path: '#home',
                    name: '家'
                },
                {
                    path: '#mission',
                    name: '任务'
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
                    name: 'STO'
                },
                {
                    path: '#roadmap',
                    name: '路线图'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#mass-media-sections',
                    name: '媒体'
                },
                {
                    path: '#blog',
                    name: '博客'
                }
            ],
            pages: [
                {
                    name: 'FAQ',
                    to: '/faq'
                },
                {
                    name: 'White list',
                    to: '/white-list'
                },
                {
                    name: 'Blog page',
                    to: '/blog/categories/all'
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
                title: 'PreSTO将开始',
                time: {
                    days: '天',
                    hours: '小时',
                    minutes: '分钟'
                },
                btnBuyTokens: '购买代币',
                bonus: '到2018年4月7日为止，奖金为25％',
                notAvailable: '现在不可用'
            },
            acceptedCrypto: {
                title: '接受收藏'
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
                download: 'Live Demo'
            }
        },
        mission: {
            title: 'Mission & Vision',
            blocks: [
                {
                    title: 'Mission',
                    text: 'ALEHUB brings together best aspects of crypto- and real economy in order to get to a qualitatively new level - composite economy. This means a simple integration of rules and customs of existing industries and segments of global and local economies with the new processing and verification capabilities. So it becomes cheaper, simpler, more reliable and flexible.'
                },
                {
                    title: 'Vision',
                    text: 'Integrating blockchain into the real economy, not substituting it. ALEHUB creates an environment for real business entities to do real business (contracts, finance, management, etc). The main goal is to comply with legislation systems and smoothly integrate into the economy: sector by sector.'
                },
                {
                    title: 'Background',
                    text: 'ALEHUB idea was developed in cooperation with consultants from “Siemens AG” and “Bayer AG”. ALEHUB is being developed with synergy of industry enterprises, former Cardano developers & leading IT specialists. Backed by German companies, ALEHUB is created for real business.'
                }
            ]
        },
        advantages: {
            title: '优势',
            lists: [
                {
                    title: 'ALE与项目管理系统相比'
                },
                {
                    title: 'ALE与其他区块链平台相比'
                }
            ]
        },
        projectEconomy: {
            title: 'Project economy',
            text: '<p>ALE profit is generated from the commission fees charged by the Platform. Note that commissions, ' +
            'their volume and subjects are determined by the consensus of the ALE token holders. When ALE platform will' +
            ' be launched, the tariffs for its users will be: 0,1% for funds withdrawal and 0,1$ for every document' +
            ' published.</p><p>Financial operations are settled using AXEL (ALEHUB eXchange ELement) The exchange rate ' +
            'of this token is pegged to the US dollar rate at the ratio: 1 AXEL ≡ 1 $. AXEL encapsulates the change in' +
            ' the exchange rate. Since the account stores exactly AXEL tokens, user can at any time convert them into' +
            ' any currency at his own choice.</p>'
        },
        alePlatform: {
            title: 'ALE 平台',
            subTitle: 'ALE是一种可以修改并结合实体经济和加密经济优势的结构，以便于创建出一种全新的生态系统—复合经济。ALE重塑了现有的金融和法律结构，以使他们更灵活且跟符合法律，并确认了大多数国家在识别金融机构、存储私人数据方面的价值，并提供了数字支付手段的流动性和合法性。   ',
            watchDemo: '观看演示',
            solvingProblems: {
                title: '所解决的问题',
                list: [
                    {
                        title: '支付的法律性质。',
                        description: '对于相互结算，ALE使用包含真是货币的“扩容器”。'
                    },
                    {
                        title: '电子合约的法律价值、',
                        description: '在ALE平台内完成的所有合约都具有法律意义，因为其内容符合国家对文件的要求。'
                    },
                    {
                        title: '高度不稳定的支付方式。',
                        description: '加密货币的不稳定性使他们成为一种不可行的实际业务支付方式。 持有“扩容器”的现金系统解决了这一问题。'
                    },
                    {
                        title: '与国家和行业标准的矛盾。 ',
                        description: 'ALE允许用户在ALE平台内选择交互的规则。因此，一个人应该按照立法和商业的要求行事。'
                    },
                    {
                        title: '履行义务的必然性。',
                        description: '金融义务受智能合约的约束，所以形成了一个可信的环境。'
                    },
                    {
                        title: '文档的完整性和不可更改性。',
                        description: '被区块链中的存储库确认，所以ALE生态系统中的文档是有法律保障的。'
                    }
                ]
            }
        },
        features: {
            title: 'ALE的主要优势特点',
            list: [
                {
                    title: '根据用户需求发展的变动以及经济条件的改变迅速建立共识。',
                    description: ' '
                },
                {
                    title: '在处理数据、功能和参数方面（在交互界面的层次上）简单且直观的产品。',
                    description: ' '
                },
                {
                    title: '消除世界现有核查机构的替代，以充分证明该关系在平台上的合法性',
                    description: ' '
                },
                {
                    title: '通过避免二元性、鼓励不负责任并冻结不成比例的流动性金额作为抵押品，以此来确保多方安排的承诺和财务支持。',
                    description: ' '
                }
            ]
        },
        table: {
            first: {
                desc: [
                    "多边智能合约",
                    "参与者制定规则",
                    "完全符合大多数司法管辖区的规定",
                    "法律经济制度可扩展",
                    "真是货币进行支付",
                    "可进行正式仲裁"
                ],
            },
            second: {
                title: "其他区块链平台",
                desc: [
                    "DAO",
                    "交互规则是预先确定的",
                    "合法性不确定",
                    "法制经济的替代",
                    "使用高波动性的加密货币支付",
                    "-"
                ],
            },
            third: {
                desc: [
                    "联合了项目管理、金融管理以及承包商管理",
                    "通用性的项目管理方法",
                    "通用性的私人数据加密方法",
                    "根据用户的一致意见进行管理",
                    "无中介支付",
                    "执行义务的紧迫性"
                ],
            },
            four: {
                title: "项目管理系统",
                desc: [
                    "-",
                    "通过不同的应用程序进行项目管理和金融服务",
                    "使用一种方法",
                    "使用一个或多个方法",
                    "集中管理",
                    "通过中介支付"
                ],
            }
        },
        team: {
            title: '团队',
            serokell: [
                {
                    name: 'Serokell',
                    members: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/seroka@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/seroka/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../static/images/avatars/rukin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arukin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../static/images/avatars/elagin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/kirelagin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            effectiveEnergy: [
                {
                    name: 'Effective Energy team',
                    members: [
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Executive Officer',
                            src: '../static/images/avatars/loktev@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/egor-loktev/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Investment Officer',
                            src: '../static/images/avatars/gromyko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mikhail-gromyko-a84821162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Associate Professor of the Department of Network and Cloud Technologies, ITMO University',
                            src: '../static/images/avatars/grudinin@3x.png',
                            social: [
                                {
                                    type: 'facebook',
                                    link: 'https://www.facebook.com/vladimir.grudinin.94',
                                    src: '../static/images/fb.svg'
                                }
                            ]
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Executive Director',
                            src: '../static/images/avatars/osipenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksey-osipenko-9a5822162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Anton Beliakov',
                            position: 'Senior Research Manager',
                            src: '../static/images/avatars/beliakov@3x.png',
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../static/images/avatars/elena@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/elenatsymbalyuk/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Ilya Shilov',
                            position: 'Chief Technology Officer',
                            src: '../static/images/avatars/shilov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/ilia-shilov-454a14163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Arseniy Voytenko',
                            position: 'Head of Communications',
                            src: '../static/images/avatars/voytenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arseniy-voitenko-61aa08161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../static/images/avatars/levashow@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/artem-levashov-177015125/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/mrdenzzz/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/galina-sergeeva-628a07161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },

                        {
                            name: 'Sergey Timohin',
                            position: 'Community manager',
                            src: '../static/images/avatars/timohin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/timokhinsergey/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Zhitkov',
                            position: 'Testing Engineer',
                            src: '../static/images/avatars/zhitkov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/evgeniy-zhitkov-670605163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Korobitcyn',
                            position: 'Graphic Designer',
                            src: '../static/images/avatars/korobitsyn@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: '顾问',
            members: [
                {
                    name: 'Phillip Nunn',
                    position: 'advisor',
                    description: 'Entrepreneur, Chief Executive Officer and international speaker on Blockchain, Cryptocurrency and fintech.\n' +
                    'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with substantial ' +
                    'assets under management and a suite of investment products across multiple classes for individuals' +
                    ' and institutions in the UK and overseas.\n' +
                    'With more than 15 years’ experience in financial services, Phillip specialises in wealth management, ' +
                    'angel investment, commercial property investment and financial technology. He founded The Blackmore ' +
                    'Group on the core belief of giving clients real and tangible alternatives to poor investment ' +
                    'performance and providing “future proof” investment strategies.\n' +
                    'Phillip has become a well-known, online influencer in the blockchain and crypto space and has ' +
                    'travelled the world evangelising and talking on these subjects. Phillip has sat on the advisory' +
                    ' boards of many STO\'s over the past 12 months and has helped structure and fund some of the ' +
                    'biggest companies of the future. Along with his business Wealth Chain, Phillip will be launching ' +
                    'his own crypto fund that looks to invest in STO\'s along with existing blockchain technology companies.',
                    src: '../static/images/avatars/nunn@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/phillip-nunn/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/phillipnunn',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Vladimir Nikitin',
                    position: 'advisor',
                    description: 'Vladimir Nikitin is professional and legal consultant with over ten years’ experience' +
                    ' in the legal, finance, retail, and IT industries. Renown cryptocurrency expert and STO advisor ' +
                    '(Top-5 worldwide ICObench Expert). As an active supporter and advocate of blockchain technology, ' +
                    'provide consultancy and advice to selected STOs in the CIS region. Network in the crypto community ' +
                    'counts over 30 000 members. In portfolio: 10 STO projects with more 200 million dollars.',
                    src: '../static/images/avatars/nikitin@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadv/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/vladimir-nikitin',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Nikolay Shkilev',
                    position: 'advisor',
                    description: 'Crypto enthusiast and mentor. Rated Top 5 in People of Blockchain. Has 20 years of ' +
                    'experience in large-scale transaction projects. He has many awards and titles in the IT business. ' +
                    'Self-Made Russia award. Tech guru. Super TOP award etc. Founder and Chief Executive Officer of Private Business Club.' +
                    ' His Holding received "Enterprise of the Year" award in the Kremlin. Has a business in various ' +
                    'directions. Co-Founder "Top STO advisors".',
                    src: '../static/images/avatars/shkilev@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadvisor/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/nikolay-shkilev',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Purushotham Maralappa',
                    position: 'advisor',
                    src: '../static/images/avatars/maralappa@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/purushotham-maralappa/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/purushotham',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                }
            ]
        },
        economy: {
            title: 'STO 经济',
            subTitle: 'ALE是一种安全性代币，它允许代币持有者分享ALE系统的利润。该协议借鉴了以太坊网络（ERC-20协议），以便于提供流动性。',
            STOinfo: {
                emission: {
                    title: 'Maximal supply',
                    amount: "∽211 000 000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "33,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "2,000"
                }
            },
            distribution: {
                title: 'STO Terms',
                description: 'Smart-contract ensures safety of investments: full payback to investors if softcap is not reached, team funds are frozen for 1 year. The tokens that are not distributed in the course of STO, shall be liquidated.',
                list: [
                    {
                        title: '为STO出售',
                        amount: 77
                    },
                    {
                        title: '团队',
                        amount: 11
                    },
                    {
                        title: '推荐计划和顾问',
                        amount: 10
                    },
                    {
                        title: '赏金',
                        amount: 2
                    }
                ]
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
                    state: '部署',
                    status: false
                },
                {
                    title: '来自项目管理专家的专业意见. 定义需求',
                    desk: '与实体经济部门的项目管理专家进行磋商. 收集需求并定义问题',
                    date: '二月 - 游行 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: '部署',
                    status: false
                },
                {
                    title: '数学建模',
                    desk: '与金融专家磋商. 与ITMO大学合作进行数学建模',
                    date: '四月 - 五月 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: '部署',
                    status: false
                },
                {
                    title: '职权范围的形成',
                    desk: '与区块链专家和开发者磋商 形成产品形象和职权范围',
                    date: '六月 - 七月 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: '部署',
                    status: false
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
                    progress: 100,
                    state: '实施',
                    status: false
                },
                {
                    title: '预售',
                    desk: '筹集到100多万美元',
                    date: '十一月 - 十二月 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: '部署',
                    status: false
                },
                {
                    title: '发行最小可行性产品（MVP）',
                    date: '五月 15, 18',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: '部署',
                    status: false
                },
                {
                    title: 'Bounty',
                    date: '05/25/18 - 05/25/18',
                    progress: 100,
                    state: '部署',
                    status: true
                },
                {
                    title: 'PreSTO',
                    date: '05/18 - 06/18',
                    progress: 100,
                    state: '部署',
                    status: true
                },
                {
                    title: 'STO',
                    date: '07/18 - 09/18',
                    progress: 5,
                    state: '实施',
                    status: false
                },
                {
                    title: '黄皮书开发',
                    desk: '黄皮书 –系统的技术描述。该文件说明了系统体系的结构特征，并包含网络节点和其他技术细节的交互协议。',
                    date: '02/18 - 01/19',
                    progress: 0,
                    state: '舞台没有开始',
                    status: false
                },
                {
                    title: '去中心化的MVP解决方案',
                    desc: '构建实施以下组件的系统版本：对等网络；使用内置代币和其他代币的自定义交易；',
                    date: '01/18 - 02/19',
                    progress: 0,
                    state: '舞台没有开始',
                    status: false
                },
                {
                    title: '私人区块链',
                    desk: '开发私人区块链并集成到现有的基础设施中。确保Oracle 的不间断运作。 在整个系统的完整版本中进行注册—但还没存在争端机制（仲裁）。',
                    date: '01/19',
                    progress: 0,
                    state: '舞台没有开始',
                    status: false
                },
                {
                    title: '争端解决机制的实施',
                    desk: '在去中心化的应用框架内完善争议解决机制。',
                    date: '01/19',
                    progress: 0,
                    state: '舞台没有开始',
                    status: false
                },
                {
                    title: '变更投票制度的实施',
                    desk: '随着时间的变化进行系统修改。',
                    date: '01/19',
                    progress: 0,
                    state: '舞台没有开始',
                    status: false
                },
                {
                    title: '系统发布',
                    date: '10/19 - 01/2020',
                    progress: 0,
                    state: '舞台没有开始',
                    status: false
                },
                {
                    title: '公开系统的源代码以及相关文件',
                    desk: '将系统的源代码和相关文件发布到公开的存储库中',
                    date: '01/01/2020 - 01/02/2020',
                    progress: 0,
                    state: '舞台没有开始',
                    status: false
                },
                {
                    title: '启动系统',
                    date: '01/02/2020 – 01/03/2020',
                    progress: 0,
                    state: '舞台没有开始',
                    status: false
                }
            ]
        },
        blog: {
            title: '博客',
            allPostsBtn: '所有帖子',
            notFound: '未找到新闻'
        },
        footer: {
            left: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            right: {
                input: '您的电子邮件地址',
                btn: '订阅新闻',
                error: '地址不正确',
                success: '正确的地址'
            },
        },
        download: '下载',
        serverErr: '一个服务器发生了错误的同时检索的应用程序清单'
    },


    ja: {
        whiteList: {
            description: 'Dear Sir/Madam, since August, 25 we have limited the open sale of ALEHUB tokens. Enter your email and you will receive an instruction to buy ALEHUB tokens.',
            form: {
                topLabel: {
                    success: 'successful sending',
                    exist: 'this email is already in use',
                    incorrect: 'incorrect email'
                }
            }
        },
        emailSubscribePanel: {
            newsletter: "ニュースレターを購読する",
            yourAddress: "あなたのEメールアドレス",
            subscribe: "購読する",
            turnOn: "通知をオンにすることを忘れないでください",
            success: "成功した購読」",
            alreadyUse: "このメールは既に使用中です",
            label: {
                success: '成功した購読',
                error: '誤ったメール',
                exist: 'この電子メールは既に利用されています\n'
            }
        },
        navbar: {
            home: 'Home',
            menuList: [
                {
                    path: '#home',
                    name: 'ホームページ'
                },
                {
                    path: '#mission',
                    name: 'ミッション'
                },
                {
                    path: '#advantages',
                    name: '優位'
                },
                {
                    path: '#features',
                    name: 'サービス'
                },
                {
                    path: '#team',
                    name: 'チーム'
                },
                {
                    path: '#ico',
                    name: 'STO'
                },
                {
                    path: '#roadmap',
                    name: 'プロジェクトマップ'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#mass-media-sections',
                    name: 'マスメディア'
                },
                {
                    path: '#blog',
                    name: 'ブログ'
                }
            ],
            pages: [
                {
                    name: 'FAQ',
                    to: '/faq'
                },
                {
                    name: 'White list',
                    to: '/white-list'
                },
                {
                    name: 'Blog page',
                    to: '/blog/categories/all'
                }
            ],
            loginBtn: 'ログイン',
            blog: 'ブログ'
        },
        menuModal: {
            selectLang: 'Select language',
            navigationMenu: 'Back to menu'
        },
        greeting: {
            title: 'プロジェクト管理の新しい時代が近づいています',
            countDown: {
                title: 'PreSTO will begin',
                time: {
                    days: 'Days',
                    hours: 'Hours',
                    minutes: 'Minutes'
                },
                btnBuyTokens: 'トークンを購入する',
                bonus: 'Bonus 25% up to 25 June 2018',
                notAvailable: 'Now not available'
            },
            acceptedCrypto: {
                title: 'コレクションのために受け入れられる'
            }
        },
        partners: {
            'title': '相手'
        },
        about: {
            title: 'Alehubは',
            subTitle: 'ALE システムの第一目のプロジェクトと言うものです。',
            description: '分散レジストリの優位と基本的なプロジェクトの監視のサービスを兼ね備えます。ALE システムのスマートコントラクトで相手の選択(顧客, 事業者);相手の活動の管理; 相互い会計を調整できるので、IT-スペシャリストの安いアウトソーシングと安全を保証します。',
            btnGroup: {
                whitePaper: 'リンク',
                techDetails: 'Ale について詳しく見る',
                download: 'Live Demo'
            }
        },
        mission: {
            title: 'Mission & Vision',
            blocks: [
                {
                    title: 'Mission',
                    text: 'ALEHUB brings together best aspects of crypto- and real economy in order to get to a qualitatively new level - composite economy. This means a simple integration of rules and customs of existing industries and segments of global and local economies with the new processing and verification capabilities. So it becomes cheaper, simpler, more reliable and flexible.'
                },
                {
                    title: 'Vision',
                    text: 'Integrating blockchain into the real economy, not substituting it. ALEHUB creates an environment for real business entities to do real business (contracts, finance, management, etc). The main goal is to comply with legislation systems and smoothly integrate into the economy: sector by sector.'
                },
                {
                    title: 'Background',
                    text: 'ALEHUB idea was developed in cooperation with consultants from “Siemens AG” and “Bayer AG”. ALEHUB is being developed with synergy of industry enterprises, former Cardano developers & leading IT specialists. Backed by German companies, ALEHUB is created for real business.'
                }
            ]
        },
        advantages: {
            title: 'ALEの優位',
            lists: [
                {
                    title: 'ALEサービス vs 中央のアプリケーション'
                },
                {
                    title: 'ALEサービス VS 他のブロックチェーンサービス'
                }
            ]
        },
        projectEconomy: {
            title: 'Project economy',
            text: '<p>ALE profit is generated from the commission fees charged by the Platform. Note that commissions, ' +
            'their volume and subjects are determined by the consensus of the ALE token holders. When ALE platform will' +
            ' be launched, the tariffs for its users will be: 0,1% for funds withdrawal and 0,1$ for every document' +
            ' published.</p><p>Financial operations are settled using AXEL (ALEHUB eXchange ELement) The exchange rate ' +
            'of this token is pegged to the US dollar rate at the ratio: 1 AXEL ≡ 1 $. AXEL encapsulates the change in' +
            ' the exchange rate. Since the account stores exactly AXEL tokens, user can at any time convert them into' +
            ' any currency at his own choice.</p>'
        },
        alePlatform: {
            title: 'ALE サービス',
            subTitle: 'Ale は複合経済という新しい経済の分野を作るように、実際経済と暗号経済の優位を兼ね備えるエコシステムです。Ale は財務体質と法律体質の可能を広げます。プライベートデーターをキープする方法とディジタルの財源の合法は多数の国の法律に相当しています。',
            watchDemo: '動画',
            solvingProblems: {
                title: '解決できた問題',
                list: [
                    {
                        title: '財源の合法.',
                        description: '相互い会払いの時、Aleは「コンテナ」を使用しています。実際貨に付き合ったコンテナ。'
                    },
                    {
                        title: 'ディジタル契約の重量。',
                        description: 'ALEサービスでは結んでたディジタル契約が多数国の法律に当たります。'
                    },
                    {
                        title: 'ボラティリティ。',
                        description: '暗号通貨はボラティリティだから実際のビジネスでは使用できませんけど、値段の「コンテナシステム」はこの問題を解決 します。'
                    },
                    {
                        title: '分野の標準と国立の標準の相違。',
                        description: 'Aleシステムですはユーザは自分で相互作用するようにルールを制定します。つまり、法律の条件と国立の条件に当たって活動できます。'
                    },
                    {
                        title: '義務の実行が必然。',
                        description: '財政の義務はスマートコントラクトで調整のおかげで信頼域を形成できます。'
                    },
                    {
                        title: '文書の完全と文書の不変。',
                        description: 'ブロックチェーンにあるので、Ale システム内は合法的な文書であります。法律の保険であります。'
                    }
                ]
            }
        },
        features: {
            title: 'ALE サービスの目標は',
            list: [
                {
                    title: 'ユーザ希望の成長する中にとか、不安定な経済の条件がある時にとか、速いコンセンサスを見つけるようになります',
                    description: ''
                },
                {
                    title: 'インタラクティブインターフェースがあるので、データー使用は簡単になります。',
                    description: ''
                },
                {
                    title: '世界検査機関の置換を除外します。',
                    description: ''
                },
                {
                    title: '多数契約の財政バックは二元の払いを除外します。無責任を除外します。不均衡な財政の流動性も除外します。',
                    description: ''
                }
            ]
        },
        table: {
            first: {
                desc: [
                    "多数スマートコントラクト",
                    "参加者は自分で相互作用のルールを制定します",
                    "多数の国の裁判管轄に相当します",
                    "合法的な経済の可能を広げます",
                    "実際貨で支払「コンテナ」",
                    "オフィシャル仲裁が可能です"
                ],
            },
            second: {
                title: "その他",
                desc: [
                    "DAOによるしかできません",
                    "参加者の相互のルールは既定しました",
                    "正統性ははっきりではありません",
                    "合法的な経済の代わり",
                    "ボラティリティの暗号通貨で支払(不安定な値段)",
                    "-"
                ],
            },
            third: {
                desc: [
                    "義務の実行が必然",
                    "プロジェクトと財政の監視と事業者を検索を兼ね備えます",
                    "普遍の方法でプロジェクトの監視を行います",
                    "普遍の方法プライベートデーターの暗号を行います",
                    "ユーザコンセンサスで調整です",
                    "直接の支払"
                ],
            },
            four: {
                title: "中央のアプリケーション",
                desc: [
                    "-",
                    "別々のアプリケーションでプロジェクトと財政の監視と事業者を検索を行います。",
                    "つの方法だけに結んでいます",
                    "つか二三の方法に結んでいます",
                    "中央の方法で調整です",
                    "仲介の支払"
                ],
            }
        },
        team: {
            title: 'チーム',
            serokell: [
                {
                    name: 'Serokell',
                    members: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/seroka@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/seroka/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../static/images/avatars/rukin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arukin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../static/images/avatars/elagin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/kirelagin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            effectiveEnergy: [
                {
                    name: 'Effective Energy',
                    members: [
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Executive Officer',
                            src: '../static/images/avatars/loktev@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/egor-loktev/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Investment Officer',
                            src: '../static/images/avatars/gromyko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mikhail-gromyko-a84821162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Associate Professor of the Department of Network and Cloud Technologies, ITMO University',
                            src: '../static/images/avatars/grudinin@3x.png',
                            social: [
                                {
                                    type: 'facebook',
                                    link: 'https://www.facebook.com/vladimir.grudinin.94',
                                    src: '../static/images/fb.svg'
                                }
                            ]
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Executive Director',
                            src: '../static/images/avatars/osipenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksey-osipenko-9a5822162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Anton Beliakov',
                            position: 'Senior Research Manager',
                            src: '../static/images/avatars/beliakov@3x.png',
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../static/images/avatars/elena@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/elenatsymbalyuk/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Ilya Shilov',
                            position: 'Chief Technology Officer',
                            src: '../static/images/avatars/shilov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/ilia-shilov-454a14163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Arseniy Voytenko',
                            position: 'Head of Communications',
                            src: '../static/images/avatars/voytenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arseniy-voitenko-61aa08161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../static/images/avatars/levashow@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/artem-levashov-177015125/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/mrdenzzz/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/galina-sergeeva-628a07161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },

                        {
                            name: 'Sergey Timohin',
                            position: 'Community manager',
                            src: '../static/images/avatars/timohin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/timokhinsergey/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Zhitkov',
                            position: 'Testing Engineer',
                            src: '../static/images/avatars/zhitkov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/evgeniy-zhitkov-670605163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Korobitcyn',
                            position: 'Graphic Designer',
                            src: '../static/images/avatars/korobitsyn@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: '顧問',
            members: [
                {
                    name: 'Phillip Nunn',
                    position: 'advisor',
                    description: 'Entrepreneur, Chief Executive Officer and international speaker on Blockchain, Cryptocurrency and fintech.\n' +
                    'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with substantial ' +
                    'assets under management and a suite of investment products across multiple classes for individuals' +
                    ' and institutions in the UK and overseas.\n' +
                    'With more than 15 years’ experience in financial services, Phillip specialises in wealth management, ' +
                    'angel investment, commercial property investment and financial technology. He founded The Blackmore ' +
                    'Group on the core belief of giving clients real and tangible alternatives to poor investment ' +
                    'performance and providing “future proof” investment strategies.\n' +
                    'Phillip has become a well-known, online influencer in the blockchain and crypto space and has ' +
                    'travelled the world evangelising and talking on these subjects. Phillip has sat on the advisory' +
                    ' boards of many STO\'s over the past 12 months and has helped structure and fund some of the ' +
                    'biggest companies of the future. Along with his business Wealth Chain, Phillip will be launching ' +
                    'his own crypto fund that looks to invest in STO\'s along with existing blockchain technology companies.',
                    src: '../static/images/avatars/nunn@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/phillip-nunn/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/phillipnunn',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Vladimir Nikitin',
                    position: 'advisor',
                    description: 'Vladimir Nikitin is professional and legal consultant with over ten years’ experience' +
                    ' in the legal, finance, retail, and IT industries. Renown cryptocurrency expert and STO advisor ' +
                    '(Top-5 worldwide ICObench Expert). As an active supporter and advocate of blockchain technology, ' +
                    'provide consultancy and advice to selected STOs in the CIS region. Network in the crypto community ' +
                    'counts over 30 000 members. In portfolio: 10 STO projects with more 200 million dollars.',
                    src: '../static/images/avatars/nikitin@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadv/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/vladimir-nikitin',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Nikolay Shkilev',
                    position: 'advisor',
                    description: 'Crypto enthusiast and mentor. Rated Top 5 in People of Blockchain. Has 20 years of ' +
                    'experience in large-scale transaction projects. He has many awards and titles in the IT business. ' +
                    'Self-Made Russia award. Tech guru. Super TOP award etc. Founder and Chief Executive Officer of Private Business Club.' +
                    ' His Holding received "Enterprise of the Year" award in the Kremlin. Has a business in various ' +
                    'directions. Co-Founder "Top STO advisors".',
                    src: '../static/images/avatars/shkilev@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadvisor/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/nikolay-shkilev',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Purushotham Maralappa',
                    position: 'advisor',
                    src: '../static/images/avatars/maralappa@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/purushotham-maralappa/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/purushotham',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                }
            ]
        },
        economy: {
            title: 'STO の経済',
            subTitle: 'Ale セキュリティトケンはトケンを持っているユーザにALE システムの営業の部分を儲けします。Ethereum ネットに結んでたプロトコルは流動性を保険します。(プロトコル ERC-20)',
            STOinfo: {
                emission: {
                    title: 'Объем эмиссии',
                    amount: "∽211 000 000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "33,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "2,000"
                }
            },
            distribution: {
                title: 'STO 条件',
                description: 'スマートコントラクトは投資家の財政の安全を保障します:チームの資本を寝かせる(一年間) softcap が成功にならない場合には財政を返金します。',
                list: [
                    {
                        title: 'STO 기간 중 판매',
                        amount: 77
                    },
                    {
                        title: '명령',
                        amount: 11
                    },
                    {
                        title: '추천 프로그램 및 고문',
                        amount: 10
                    },
                    {
                        title: '바운티 (Bounty)',
                        amount: 2
                    }
                ]
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
                    date: '01/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Expertise from specialists in project management. Definition of requirements',
                    desk: 'Consultations with specialists in project management from the real sector of the economy. Collection of requirements and defining problems',
                    date: '02/17 - 03/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Mathematical modeling',
                    desk: 'Consultations with financial experts. Mathematical modeling in cooperation with the University of ITMO',
                    date: '04/17 - 05/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Formation of the Terms of Reference',
                    desk: 'Consultations with blockchain experts and developers. Forming an image of a product and the terms of reference',
                    date: '06/17 - 07/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Partnership with Serokell OU. The beginning of development.',
                    date: '01/08/17',
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
                    state: 'implementing',
                    status: false
                },
                {
                    title: 'PreSale',
                    desk: 'Raised more than 1,000,000 USD',
                    date: '11/17 - 12/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Publishing MVP',
                    date: '05/18',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Bounty',
                    date: '05/18',
                    progress: 100,
                    state: 'deployed',
                    status: true
                },
                {
                    title: 'PreSTO',
                    date: '05/18 - 06/18',
                    progress: 100,
                    state: 'deployed',
                    status: true
                },
                {
                    title: 'STO',
                    date: '07/18 - 09/18',
                    progress: 5,
                    state: 'implementing',
                    status: false
                },
                {
                    title: 'Yellow Paper development',
                    desk: 'Yellow Paper – technical description of the system. The document illustrates architectural features of the system construction, protocols of interaction between network nodes and other technical details.',
                    date: '02/18 - 01/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Decentralization of MVP solutions',
                    date: '01/18 - 02/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Private blockchains',
                    date: '01/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Implementation of the dispute system',
                    date: '01/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Implementation of the voting system for changes',
                    date: '01/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Closed system testing',
                    date: '10/19 - 01/2020',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Publication of the source code of the system and documentation',
                    date: '01/01/2020 - 01/02/2020',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Booting the system ',
                    date: '01/02/2020 – 01/03/2020',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                }
            ]
        },
        blog: {
            title: 'ブログ',
            allPostsBtn: '全てメール',
            notFound: 'ニュースは発見されなかった'
        },
        footer: {
            left: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            right: {
                input: 'メールアドレス',
                btn: 'ニュースに応募します',
                error: 'アドレスが正しくありません',
                success: '正しい住所'
            },
        },
        download: 'Download',
        serverErr: 'アプリケーションリストをアップロード中にサーバーエラー起こりました'
    },
    ru: {
        whiteList: {
            description: 'Уважаемый инвестор, с 25 августа мы ограничили открытую продажу токенов ALEHUB. Введите свой адрес электронной почты, и вы получите инструкцию по покупке токенов ALEHUB.',
            form: {
                topLabel: {
                    success: 'email успешно отправлен',
                    exist: 'этот email был отправлен ранее',
                    incorrect: 'некорректный email'
                }
            }
        },
        emailSubscribePanel: {
            newsletter: 'Подпишитесь на нашу рассылку',
            yourAddress: 'Ваш адрес электронной почты',
            subscribe: 'Подписаться',
            turnOn: 'И не забудьте включить уведомления',
            success: 'Вы успешно подписались',
            alreadyUse: 'Эта почта уже используется',
            label: {
                success: 'вы успешно подписались',
                error: 'неправильный email',
                exist: 'этот email уже используется'
            }
        },
        navbar: {
            home: 'Home',
            menuList: [
                {
                    path: '#home',
                    name: 'Домой'
                },
                {
                    path: '#mission',
                    name: 'Миссия'
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
                    name: 'STO'
                },
                {
                    path: '#roadmap',
                    name: 'Карта проекта'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#mass-media-sections',
                    name: 'Медиа о нас'
                },
                {
                    path: '#blog',
                    name: 'Блог'
                },
                {
                    to: '/faq',
                    name: 'FAQ'
                }
            ],
            pages: [
                {
                    name: 'FAQ',
                    to: '/faq'
                },
                {
                    name: 'White list',
                    to: '/white-list'
                },
                {
                    name: 'Блог',
                    to: '/blog/categories/all'
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
            title: 'Наступает новая эра управления проектами',
            countDown: {
                title: 'PreSTO начинается через',
                time: {
                    days: 'Дней',
                    hours: 'Часов',
                    minutes: 'Минут'
                },
                btnBuyTokens: 'Купить токены',
                bonus: 'Бонус 25% до 25 Июня 2018',
                notAvailable: 'В данный момент недоступно'
            },
            acceptedCrypto: {
                title: 'Принимаем к сборам'
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
                download: 'Live Demo'
            }
        },
        mission: {
            title: 'Mission & Vision',
            blocks: [
                {
                    title: 'Mission',
                    text: 'ALEHUB brings together best aspects of crypto- and real economy in order to get to a qualitatively new level - composite economy. This means a simple integration of rules and customs of existing industries and segments of global and local economies with the new processing and verification capabilities. So it becomes cheaper, simpler, more reliable and flexible.'
                },
                {
                    title: 'Vision',
                    text: 'Integrating blockchain into the real economy, not substituting it. ALEHUB creates an environment for real business entities to do real business (contracts, finance, management, etc). The main goal is to comply with legislation systems and smoothly integrate into the economy: sector by sector.'
                },
                {
                    title: 'Background',
                    text: 'ALEHUB idea was developed in cooperation with consultants from “Siemens AG” and “Bayer AG”. ALEHUB is being developed with synergy of industry enterprises, former Cardano developers & leading IT specialists. Backed by German companies, ALEHUB is created for real business.'
                }
            ]
        },
        advantages: {
            title: 'Преимущества ALE',
            lists: [
                {
                    title: 'ALE vs централизованные приложения'
                },
                {
                    title: 'ALE vs блокчейн платформы'
                }
            ]
        },
        projectEconomy: {
            title: 'Project economy',
            text: '<p>ALE profit is generated from the commission fees charged by the Platform. Note that commissions, ' +
            'their volume and subjects are determined by the consensus of the ALE token holders. When ALE platform will' +
            ' be launched, the tariffs for its users will be: 0,1% for funds withdrawal and 0,1$ for every document' +
            ' published.</p><p>Financial operations are settled using AXEL (ALEHUB eXchange ELement) The exchange rate ' +
            'of this token is pegged to the US dollar rate at the ratio: 1 AXEL ≡ 1 $. AXEL encapsulates the change in' +
            ' the exchange rate. Since the account stores exactly AXEL tokens, user can at any time convert them into' +
            ' any currency at his own choice.</p>'
        },
        alePlatform: {
            title: 'Платформа ALE',
            subTitle: 'ALE объединяет преимущества реальной и крипто экономики для создания принципиально новой среды - композитной экономики. ALE делает существующую финансовую и юридическую структуру более гибкой, соответствуя законодательству и признанным ценностям большинства стран в вопросах идентификации финансовых агентов, хранения приватных данных, ликвидности и легальности цифровых платежных средств.',
            watchDemo: 'Узнать больше',
            solvingProblems: {
                title: 'Решаемые проблемы',
                list: [
                    {
                        title: 'Легальность средства платежа',
                        description: ' Для взаиморасчетов ALE использует «контейнеры», содержащие реальную валюту'
                    },
                    {
                        title: 'Значимость электронных договоров',
                        description: 'Все договора заключённых в рамках платформы ALE являются юридически значимыми за счёт соблюдения национальных требований к документам'
                    },
                    {
                        title: 'Волатильность средства взаиморасчетов',
                        description: 'Криптовалюты волатильны, поэтому не могут являться средством платежа реального бизнеса. Система «контейнеров» стоимости решает эту проблему.'
                    },
                    {
                        title: 'Противоречие национальных и отраслевых стандартов',
                        description: 'ALE позволяет пользователям самостоятельно выбирать правила, для взаимодействия между собой. Таким образом действовать в соответствии с требованиями законодательства и бизнеса.'
                    },
                    {
                        title: 'Неизбежность исполнения обязательств',
                        description: 'Финансовые обязательства регулируются смарт-контрактами, за счёт чего формируется доверенная среда.'
                    },
                    {
                        title: 'Целостность и неизменяемость документации',
                        description: 'Подтверждается хранением в блокчейне, поэтому документы в рамках экосистемы ALE являются настоящей юридической гарантией.'
                    }
                ]
            }
        },
        features: {
            title: 'Основные цели ALE',
            list: [
                {
                    title: 'Оперативное нахождение консенсуса',
                    description: ''
                },
                {
                    title: ' Простые и интуитивные продукты',
                    description: ''
                },
                {
                    title: 'Исключить подмену существующих верификационных уполномоченных организаций',
                    description: ''
                },
                {
                    title: 'Фиксация и финансовое подкрепление договоренностей множества сторон',
                    description: ''
                }
            ]
        },
        table: {
            first: {
                desc: [
                    "Многосторонние смарт-контракты",
                    "Участники устанавливают правила взаимодействия",
                    "Полное соответствие юрисдикциям большинства стран для участников",
                    "Расширение возможностей легальной экономики",
                    "Платеж контейнером реальной валюты",
                    "Возможность официального арбитража"
                ],
            },
            second: {
                title: "Блокчейн платформы",
                desc: [
                    "Только посредством DAO",
                    "Правила взаимодействия участников определны заранее",
                    "Неясная легитимность",
                    "Замещение легальной экономики",
                    "Платеж волатильной криптовалютой",
                    "-"
                ],
            },
            third: {
                desc: [
                    "Неизбежность исполнения обязательств",
                    "Объединение управление проектом, финансами и поиском подрядчиков",
                    "Универсальность методологий управления проектами",
                    "Универсальность методов шифрования приватных данных",
                    "Регулируется консенсусом пользователей",
                    "Платежи без посредников"
                ],
            },
            four: {
                title: "Централизованные приложения",
                desc: [
                    "-",
                    "Управление проектами, управление финансами и поиск подрядчиков через различные приложения",
                    "Привязка к одной методолгии",
                    "Привязка к одному/нескольким методам",
                    "Регулируется централизовано",
                    "Платежи через посредников"
                ],
            }
        },
        team: {
            title: 'Команда',
            serokell: [
                {
                    name: 'Serokell',
                    members: [
                        {
                            name: 'Арсений Серока',
                            position: 'Ведущий разработчик Serokell',
                            src: '../static/images/avatars/seroka@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/seroka/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Йон Мостовой',
                            position: 'Ведущий разработчик Serokell',
                            src: '../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Александр Рукин',
                            position: 'UI/UX Дизайнер',
                            src: '../static/images/avatars/rukin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arukin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Кирилл Елагин',
                            position: 'Backend Разработчик',
                            src: '../static/images/avatars/elagin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/kirelagin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            effectiveEnergy: [
                {
                    name: 'Effective Energy',
                    members: [
                        {
                            name: 'Егор Локтев',
                            position: 'Генеральный директор',
                            src: '../static/images/avatars/loktev@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/egor-loktev/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Михаил Громыко',
                            position: 'Инвестиционный директор',
                            src: '../static/images/avatars/gromyko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mikhail-gromyko-a84821162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Владимир Грудинин',
                            position: 'Доцент кафедры сетевых и облачных технологий университета ITMO',
                            src: '../static/images/avatars/grudinin@3x.png',
                            social: [
                                {
                                    type: 'facebook',
                                    link: 'https://www.facebook.com/vladimir.grudinin.94',
                                    src: '../static/images/fb.svg'
                                }
                            ]
                        },
                        {
                            name: 'Алексей Осипенко',
                            position: 'Исполнительный диреткор',
                            src: '../static/images/avatars/osipenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksey-osipenko-9a5822162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Антон Беляков',
                            position: 'Исследователь',
                            src: '../static/images/avatars/beliakov@3x.png',
                        },
                        {
                            name: 'Елена Цимбалюк',
                            position: 'Начальник отдела маркетинговых операций',
                            src: '../static/images/avatars/elena@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/elenatsymbalyuk/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Илья Шилов',
                            position: 'Технический директор',
                            src: '../static/images/avatars/shilov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/ilia-shilov-454a14163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Арсений Войтенко',
                            position: 'Глава отдела по коммуникациям',
                            src: '../static/images/avatars/voytenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arseniy-voitenko-61aa08161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Артем Левашов',
                            position: 'Главный консультант по юридическим делам',
                            src: '../static/images/avatars/levashow@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/artem-levashov-177015125/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Вадим Дудин',
                            position: 'Fullstack Разработчик',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/mrdenzzz/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Галина Сергеева',
                            position: 'Frontend Разработчик',
                            src: '../static/images/avatars/sergeeva@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/galina-sergeeva-628a07161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Сергей Тимохин',
                            position: 'Комьюнити-менеджер',
                            src: '../static/images/avatars/timohin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/timokhinsergey/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Евгений Житков',
                            position: 'Инженер по тестированию',
                            src: '../static/images/avatars/zhitkov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/evgeniy-zhitkov-670605163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },

                        {
                            name: 'Евгений Коробицин',
                            position: 'Графический Дизайнер',
                            src: '../../static/images/avatars/korobitsyn@3x.png'
                        },
                    ]
                }
            ]
        },
        advisors: {
            title: 'Советники',
            members: [
                {
                    name: 'Филипп Нанн',
                    position: 'advisor',
                    description: 'Entrepreneur, Chief Executive Officer and international speaker on Blockchain, Cryptocurrency and fintech.\n' +
                    'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with substantial ' +
                    'assets under management and a suite of investment products across multiple classes for individuals' +
                    ' and institutions in the UK and overseas.\n' +
                    'With more than 15 years’ experience in financial services, Phillip specialises in wealth management, ' +
                    'angel investment, commercial property investment and financial technology. He founded The Blackmore ' +
                    'Group on the core belief of giving clients real and tangible alternatives to poor investment ' +
                    'performance and providing “future proof” investment strategies.\n' +
                    'Phillip has become a well-known, online influencer in the blockchain and crypto space and has ' +
                    'travelled the world evangelising and talking on these subjects. Phillip has sat on the advisory' +
                    ' boards of many STO\'s over the past 12 months and has helped structure and fund some of the ' +
                    'biggest companies of the future. Along with his business Wealth Chain, Phillip will be launching ' +
                    'his own crypto fund that looks to invest in STO\'s along with existing blockchain technology companies.',
                    src: '../static/images/avatars/nunn@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/phillip-nunn/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/phillipnunn',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Владимир Никитин',
                    position: 'advisor',
                    description: 'Vladimir Nikitin is professional and legal consultant with over ten years’ experience' +
                    ' in the legal, finance, retail, and IT industries. Renown cryptocurrency expert and STO advisor ' +
                    '(Top-5 worldwide ICObench Expert). As an active supporter and advocate of blockchain technology, ' +
                    'provide consultancy and advice to selected STOs in the CIS region. Network in the crypto community ' +
                    'counts over 30 000 members. In portfolio: 10 STO projects with more 200 million dollars.',
                    src: '../static/images/avatars/nikitin@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadv/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/vladimir-nikitin',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Николай Шкилев',
                    position: 'advisor',
                    description: 'Crypto enthusiast and mentor. Rated Top 5 in People of Blockchain. Has 20 years of ' +
                    'experience in large-scale transaction projects. He has many awards and titles in the IT business. ' +
                    'Self-Made Russia award. Tech guru. Super TOP award etc. Founder and Chief Executive Officer of Private Business Club.' +
                    ' His Holding received "Enterprise of the Year" award in the Kremlin. Has a business in various ' +
                    'directions. Co-Founder "Top STO advisors".',
                    src: '../static/images/avatars/shkilev@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadvisor/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/nikolay-shkilev',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Purushotham Maralappa',
                    position: 'advisor',
                    src: '../static/images/avatars/maralappa@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/purushotham-maralappa/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/purushotham',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                }
            ]
        },
        economy: {
            title: 'Экономика STO',
            subTitle: 'ALE - security токен, обеспечивающий владельцем получение доли прибыли системы ALE. Протокол зазеркален на сеть Ethereum (протокол ERC-20) для обеспечения ликвидности.',
            STOinfo: {
                emission: {
                    title: 'Объем эмиссии',
                    amount: "∽211 000 000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "33,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "2,000"
                }
            },
            distribution: {
                title: 'Условия STO',
                description: 'Смарт-контракт обеспечивает безопасность средств инвесторов: полный возврат средств в случае недостижения softcap, замораживает средства команды на 1 год. Токены, не распределенные в ходе STO, будут уничтожены. Токен будет размещен на биржах.',
                list: [
                    {
                        title: 'Продажа на STO',
                        amount: 77
                    },
                    {
                        title: 'Команда',
                        amount: 11
                    },
                    {
                        title: 'Рефералы и эдвайзоры',
                        amount: 10
                    },
                    {
                        title: 'Баунти',
                        amount: 2
                    }
                ]
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
                    date: '01.17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'готово',
                    status: false
                },
                {
                    title: 'Экспертиза от специалистов по управлению проектами. Определение требований.',
                    desk: 'Консультации со специалистами по менеджменту проектов из реального сектора экономики, Сбор требований и определение проблематики',
                    date: '02.17 - 03.17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'готово',
                    status: false
                },
                {
                    title: 'Построение математической модели',
                    desk: 'Консультации с финансистами. Математическое моделирование, совместно с Университетом ИТМО',
                    date: '04.17 - 05.17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'готово',
                    status: false
                },
                {
                    title: 'Формирование Технического задания',
                    desk: 'Консультации с блокчейн -экспертами и разработчиками. Формирование образа продукта и технического задания',
                    date: '06.17 - 07.17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'готово',
                    status: false
                },
                {
                    title: 'Партнерство с Serokell OU. Начало разработки.',
                    date: '08.17',
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
                    state: 'разработка',
                    status: false
                },
                {
                    title: 'PreSale',
                    desk: 'Собрано более 1,000,000$',
                    date: '11.17 - 12.17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: 'готово',
                    status: false
                },
                {
                    title: 'Публикация MVP',
                    date: '05.18',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'готово',
                    status: false
                },
                {
                    title: 'Bounty',
                    date: '05.18 – 05.18',
                    progress: 100,
                    state: 'готово',
                    status: true
                },
                {
                    title: 'PreSTO',
                    date: '05.18 – 06.18',
                    progress: 100,
                    state: 'готово',
                    status: true
                },
                {
                    title: 'STO',
                    date: '07.18 – 09.18',
                    progress: 5,
                    state: 'этап идет',
                    status: false
                },
                {
                    title: 'Разработка Yellow Paper',
                    desk: 'Формализация блокчейна верхнего уровня',
                    result: 'Результат: Yellow Paper, v0.1',
                    date: '09.18 - 10.18',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Разработка Yellow Paper',
                    desk: 'Формализация процедуры майнинга',
                    result: 'Результат: Yellow Paper, v0.2',
                    date: '10.18 - 11.18',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Разработка Yellow Paper',
                    desk: 'Формализация вложенных блокчейнов',
                    result: 'Результат: Yellow Paper, v0.3',
                    date: '11.18 - 12.18',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Разработка Yellow Paper',
                    desk: 'Формализация системы диспута',
                    result: 'Результат: Yellow Paper, v0.4',
                    date: '12.18 - 01.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Разработка Yellow Paper',
                    desk: 'Разработка виртуальной машины',
                    result: 'Результат: Yellow Paper, v0.5',
                    date: '01.19 - 02.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Разработка Yellow Paper',
                    desk: 'Формализация процедуры внесения изменений',
                    result: 'Результат:\tYellow Paper, v0.6; Yellow Paper v1.0.',
                    date: '02.19 - 03.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Разработка технического описания реализации',
                    desk: 'Разработка технического описания модулей системы',
                    result: 'Результат:\tBlue Paper, v0.1',
                    date: '04.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Разработка технического описания реализации',
                    desk: 'Разработка требований к frontend-модулю',
                    result: 'Результат:\tBlue Paper, v0.2',
                    date: '04.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Разработка технического описания реализации',
                    desk: 'Разработка технического описания блокчейна верхнего уровня',
                    result: 'Результат:\tBlue Paper, v0.3',
                    date: '04.19 - 05.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Разработка технического описания реализации',
                    desk: 'Разработка технического описания вложенных блокчейнов',
                    result: 'Результат:\tBlue Paper, v1.0',
                    date: '05.19 - 07.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Децентрализация MVP решения',
                    desk: 'Реализация пиринговой сети',
                    date: '07.19 - 08.19',
                    result: 'Результат:\tПиринговая сеть, поверх которой функционирует базовый блокчейн',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Децентрализация MVP решения',
                    desk: 'Реализация базового блокчейна и майнинга',
                    result: 'Результат:\tАбстракция блокчейна без привязки к логике приложения',
                    date: '08.19 - 09.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Децентрализация MVP решения',
                    desk: 'Реализация логики приложения',
                    result: 'Результат:\tpre-aplha, v0.1',
                    date: '09.19 - 11.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Реализация приватных блокчейнов',
                    desk: 'Реализация шаблона для построения вложенных блокчейнов',
                    result: 'Результат:\tшаблон для построения вложенных блокчейнов',
                    date: '11.19 - 12.19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Реализация приватных блокчейнов',
                    desk: 'Реализация вложенных блокчейнов на основе шаблона',
                    result: 'Результат:\tpre-alpha v0.2',
                    date: '12.19 - 01.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Реализация приватных блокчейнов',
                    desk: 'Встраивание вложенных блокчейнов в платформу',
                    result: 'Результат:\tpre-alpha v1.0; alpha v0.1',
                    date: '01.20 - 02.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Реализация системы диспута',
                    desk: 'Реализация логики работы агентов верификации',
                    result: 'Результат:\talpha v0.2',
                    date: '02.20 - 03.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Реализация системы диспута',
                    desk: 'Реализация логики работы агентов верификации',
                    result: 'Результат:\talpha v0.3',
                    date: '03.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Реализация системы диспута',
                    desk: 'Реализация логики работы агентов верификации',
                    result: 'Результат:\talpha v0.4',
                    date: '03.20 - 04.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Реализация системы диспута',
                    desk: 'Реализация логики работы агентов верификации',
                    result: 'Результат:\talpha v1.0; beta v0.1',
                    date: '04.20 - 05.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Реализация системы голосования за изменения',
                    desk: 'Реализация системы голосования за монетарную политику',
                    result: 'Результат:\tbeta v0.2',
                    date: '05.20 - 06.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Реализация системы голосования за изменения',
                    desk: 'Реализация системы голосования за техническую модификацию',
                    result: 'Результат:\tbeta v1.0',
                    date: '06.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Выпуск системы',
                    desk: 'Закрытое тестирование работы системы',
                    result: 'Результат:\tbeta v1.1',
                    date: '06.20 - 08.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Выпуск системы',
                    desk: 'Публикация исходного кода системы и документации',
                    result: 'Результат:\tbeta v2.0',
                    date: '08.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Выпуск системы',
                    desk: 'Запуск эксплуатации системы',
                    result: 'Результат:\tфункционирующая версия системы ALEHUB',
                    date: '08.20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
            ]
        },
        blog: {
            title: 'Блог',
            allPostsBtn: 'Все записи',
            notFound: 'Новости не найдены'
        },
        footer: {
            left: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            right: {
                input: 'Ваш e-mail',
                btn: 'Подписаться',
                error: 'неправильный адрес',
                success: 'правильный адрес'
            },
        },
        download: 'Скачать',
        serverErr: 'Произошла ошибка сервера при получении списка приложений.'
    },
    en: {
        whiteList: {
            description: 'Dear Sir/Madam, since August, 25 we have limited the open sale of ALEHUB tokens. Enter your email and you will receive an instruction to buy ALEHUB tokens.',
            form: {
                topLabel: {
                    success: 'successful sending',
                    exist: 'this email is already in use',
                    incorrect: 'incorrect email'
                }
            }
        },
        emailSubscribePanel: {
            newsletter: 'Subscribe to our newsletter',
            yourAddress: 'Your e-mail address',
            subscribe: 'Subscribe',
            turnOn: 'And don\'t forget to turn on notifications',
            success: 'successful subscription',
            alreadyUse: 'this email is already in use',
            label: {
                success: 'successful subscription',
                error: 'incorrect email',
                exist: 'this email is already in use'
            }
        },
        navbar: {
            home: 'Home',
            menuList: [
                {
                    path: '#home',
                    name: 'Home'
                },
                {
                    path: '#mission',
                    name: 'Mission'
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
                    name: 'STO'
                },
                {
                    path: '#roadmap',
                    name: 'Roadmap'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#mass-media-sections',
                    name: 'Mass media'
                },
                {
                    path: '#blog',
                    name: 'Blog'
                }
            ],
            pages: [
                {
                    name: 'FAQ',
                    to: '/faq'
                },
                {
                    name: 'White list',
                    to: '/white-list'
                },
                {
                    name: 'Blog page',
                    to: '/blog/categories/all'
                }
            ],
            loginBtn: 'Login',
            blog: 'Blog'
        },
        menuModal: {
            selectLang: 'Select language',
            navigationMenu: 'Back to menu'
        },
        greeting: {
            title: 'The new era of project management is coming',
            countDown: {
                title: 'PreSTO will begin',
                time: {
                    days: 'Days',
                    hours: 'Hours',
                    minutes: 'Minutes'
                },
                btnBuyTokens: 'Buy tokens',
                bonus: 'Bonus 25% up to 25 June 2018',
                notAvailable: 'Now not available'
            },
            acceptedCrypto: {
                title: 'Accepted for collection'
            }
        },
        partners: {
            title: 'Our partners',
        },
        about: {
            title: 'What is Alehub',
            subTitle: 'ALEHUB is a platform to manage projects and search for contractors in IT and Hi Tech areas.',
            description: 'ALEHUB combines the advantages of distributed ledgers and classic services of project management. The selection of contract partners (customers and contractors), operational management, control and mutual settlements, covered by smart contracts of the ALE system, ensure safety, reliability and low cost of outsourcing IT specialists.',
            btnGroup: {
                whitePaper: 'White paper',
                techDetails: 'More about ALE',
                download: 'Live Demo'
            }
        },
        mission: {
            title: 'Mission & Vision',
            blocks: [
                {
                    title: 'Mission',
                    text: 'ALEHUB brings together best aspects of crypto- and real economy in order to get to a qualitatively new level - composite economy. This means a simple integration of rules and customs of existing industries and segments of global and local economies with the new processing and verification capabilities. So it becomes cheaper, simpler, more reliable and flexible.'
                },
                {
                    title: 'Vision',
                    text: 'Integrating blockchain into the real economy, not substituting it. ALEHUB creates an environment for real business entities to do real business (contracts, finance, management, etc). The main goal is to comply with legislation systems and smoothly integrate into the economy: sector by sector.'
                },
                {
                    title: 'Background',
                    text: 'ALEHUB idea was developed in cooperation with consultants from “Siemens AG” and “Bayer AG”. ALEHUB is being developed with synergy of industry enterprises, former Cardano developers & leading IT specialists. Backed by German companies, ALEHUB is created for real business.'
                }
            ]
        },
        advantages: {
            title: 'ALE advantages',
            lists: [
                {
                    title: 'ALE vs Project Management Systems'
                },
                {
                    title: 'ALE vs Other Blockchain Platforms'
                }
            ]
        },
        projectEconomy: {
            title: 'Project economy',
            text: '<p>ALE profit is generated from the commission fees charged by the Platform. Note that commissions, ' +
            'their volume and subjects are determined by the consensus of the ALE token holders. When ALE platform will' +
            ' be launched, the tariffs for its users will be: 0,1% for funds withdrawal and 0,1$ for every document' +
            ' published.</p><p>Financial operations are settled using AXEL (ALEHUB eXchange ELement) The exchange rate ' +
            'of this token is pegged to the US dollar rate at the ratio: 1 AXEL ≡ 1 $. AXEL encapsulates the change in' +
            ' the exchange rate. Since the account stores exactly AXEL tokens, user can at any time convert them into' +
            ' any currency at his own choice.</p>'
        },
        alePlatform: {
            title: 'ALE platform',
            subTitle: 'ALE is an ecosystem that modifies and combines the advantages of real and crypto economies to create a fundamentally new environment - composite economy. ALE makes the existing financial and legal structure more flexible and compliant with the laws and recognized values of most countries in identifying fiscal agents, storing private data, liquidity and the legality of digital means of payment.',
            watchDemo: 'Watch demo',
            solvingProblems: {
                title: 'Addressed issues',
                list: [
                    {
                        title: 'Legality of means of payment.',
                        description: 'Mutual settlements in ALE are carried out by means of “containers” which contain real currency'
                    },
                    {
                        title: 'Binding of electronic contracts.',
                        description: 'All contracts concluded within ALE platform are legally binding due to their compliance with national requirements for documents.'
                    },
                    {
                        title: 'Volatility of settlements means.',
                        description: 'Cryptocurrencies are volatile, so they cannot serve as a means of payment in real business. The system of "containers" with value solves this problem.'
                    },
                    {
                        title: 'Conflict between national and industrial standards.',
                        description: 'ALE allows users to choose the rules themselves how to interact with each other. Therefore, the users act in accordance with the requirements of legislation and business.'
                    },
                    {
                        title: 'Inevitability of obligations fulfillment. ',
                        description: 'Financial obligations are governed by smart contracts, through which a trusted environment is formed.'
                    },
                    {
                        title: 'Integrity and invariability of documentation. ',
                        description: 'Confirmation is done via storage in blockchain, so documents within ALE ecosystem represent a real legal guarantee.'
                    }
                ]
            }
        },
        features: {
            title: 'ALE purposes',
            list: [
                {
                    title: 'Reaching a consensus efficiently. In the dynamics of evolution of the users requests and changing economic conditions.',
                    description: ''
                },
                {
                    title: 'Simple and intuitive products. In matters of handling data, functions and parameters at the level of the interactive interface.',
                    description: ' '
                },
                {
                    title: 'Eliminate substitution of the existing verification organizations in the world. To ensure full legality of relationship at the platform.',
                    description: ' '
                },
                {
                    title: 'Latching and financial backing of agreements between multiple parties. Preventing ambiguity, encouragement of irresponsibility and freeze of disproportionate amounts of liquidity by way of charge.',
                    description: ' '
                }
            ]
        },
        table: {
            first: {
                desc: ["Multilateral smart-contracts",
                    "Participants set rules of interaction",
                    "Full compliance with legal systems of majority of states of the participants ",
                    "Extended opportunities of the legal economy",
                    "Payment via container of a real currency",
                    "Availability of official arbitrage"],
            },
            second: {
                title: "Other blockchain platforms",
                desc: ["Only via DAO",
                    "Rules of interaction between the participants are pre-determined",
                    "Uncertain legality",
                    "Substitution of legal economy",
                    "Payment via volatile cryptocurrency",
                    "-"],
            },
            third: {
                desc: ["Integrated project management, financial management and contractors search",
                    "Flexibility of different project management methods",
                    "Flexibility of different methods of private data  encryption",
                    "Governed by majority agreement of the users",
                    "Payments without intermediate parties",
                    "Inevitability of obligations fulfillment"],
            },
            four: {
                title: "Project management systems",
                desc: ["Project management, financial management and contractors search via different applications",
                    "Binding by one method",
                    "Binding by one/several method(s)",
                    "Governed in a centralized way",
                    "Payments through intermediate parties",
                    "-"],
            }
        },
        team: {
            title: 'Our team',
            serokell: [
                {
                    name: 'Serokell',
                    members: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/seroka@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/seroka/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../static/images/avatars/rukin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arukin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../static/images/avatars/elagin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/kirelagin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            effectiveEnergy: [
                {
                    name: 'Effective Energy',
                    members: [
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Executive Officer',
                            src: '../static/images/avatars/loktev@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/egor-loktev/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Investment Officer',
                            src: '../static/images/avatars/gromyko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mikhail-gromyko-a84821162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Associate Professor of the Department of Network and Cloud Technologies, ITMO University',
                            src: '../static/images/avatars/grudinin@3x.png',
                            social: [
                                {
                                    type: 'facebook',
                                    link: 'https://www.facebook.com/vladimir.grudinin.94',
                                    src: '../static/images/fb.svg'
                                }
                            ]
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Executive Director',
                            src: '../static/images/avatars/osipenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksey-osipenko-9a5822162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Anton Beliakov',
                            position: 'Senior Research Manager',
                            src: '../static/images/avatars/beliakov@3x.png',
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../static/images/avatars/elena@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/elenatsymbalyuk/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Ilya Shilov',
                            position: 'Chief Technology Officer',
                            src: '../static/images/avatars/shilov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/ilia-shilov-454a14163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Arseniy Voytenko',
                            position: 'Head of Communications',
                            src: '../static/images/avatars/voytenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arseniy-voitenko-61aa08161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../static/images/avatars/levashow@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/artem-levashov-177015125/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/mrdenzzz/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/galina-sergeeva-628a07161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },

                        {
                            name: 'Sergey Timohin',
                            position: 'Community manager',
                            src: '../static/images/avatars/timohin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/timokhinsergey/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Zhitkov',
                            position: 'Testing Engineer',
                            src: '../static/images/avatars/zhitkov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/evgeniy-zhitkov-670605163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Korobitcyn',
                            position: 'Graphic Designer',
                            src: '../static/images/avatars/korobitsyn@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: 'Advisors',
            members: [
                {
                    name: 'Phillip Nunn',
                    position: 'advisor',
                    description: '<p><img src="../static/images/avatars/nunn@3x.png" alt="Philipp Nunn" style="width: 200px; height: auto; ' +
                    'float: left; margin: 0 30px 5px 0;  clip-path: circle(50% at center);">' +
                    'Entrepreneur, Chief Executive Officer and international speaker on Blockchain, Cryptocurrency and fintech.\n' +
                    'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with substantial ' +
                    'assets under management and a suite of investment products across multiple classes for individuals' +
                    ' and institutions in the UK and overseas.</p>' +
                    '<p>With more than 15 years’ experience in financial services, Phillip specialises in wealth management, ' +
                    'angel investment, commercial property investment and financial technology. He founded The Blackmore ' +
                    'Group on the core belief of giving clients real and tangible alternatives to poor investment ' +
                    'performance and providing “future proof” investment strategies.</p>' +
                    '<p>Phillip has become a well-known, online influencer in the blockchain and crypto space and has ' +
                    'travelled the world evangelising and talking on these subjects. Phillip has sat on the advisory' +
                    ' boards of many STO\'s over the past 12 months and has helped structure and fund some of the ' +
                    'biggest companies of the future. Along with his business Wealth Chain, Phillip will be launching ' +
                    'his own crypto fund that looks to invest in STO\'s along with existing blockchain technology companies.</p>',
                    src: '../static/images/avatars/nunn@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/phillip-nunn/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/phillipnunn',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Vladimir Nikitin',
                    position: 'advisor',
                    description: '<p><img src="../static/images/avatars/nikitin@3x.png" alt="Philipp Nunn" style="width: 200px;' +
                    'float: left; margin: 0 30px 5px 0;  clip-path: circle(50% at center);">' +
                    'Vladimir Nikitin is professional and legal consultant with over ten years’ experience' +
                    ' in the legal, finance, retail, and IT industries. Renown cryptocurrency expert and STO advisor ' +
                    '(Top-5 worldwide ICObench Expert). As an active supporter and advocate of blockchain technology, ' +
                    'provide consultancy and advice to selected STOs in the CIS region. Network in the crypto community ' +
                    'counts over 30 000 members.</p> ' +
                    '<p>In portfolio: 10 STO projects with more 200 million dollars.</p>',
                    src: '../static/images/avatars/nikitin@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadv/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/vladimir-nikitin',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Nikolay Shkilev',
                    position: 'advisor',
                    description: '<p><img src="../static/images/avatars/shkilev@3x.png" alt="Philipp Nunn" style="width: 200px;' +
                    'float: left; margin: 0 30px 5px 0;  clip-path: circle(50% at center);">' +
                    'Crypto enthusiast and mentor. Rated Top 5 in People of Blockchain. Has 20 years of ' +
                    'experience in large-scale transaction projects. He has many awards and titles in the IT business. ' +
                    'Self-Made Russia award. Tech guru. Super TOP award etc. Founder and Chief Executive Officer of Private Business Club.</p>' +
                    '<p>His Holding received "Enterprise of the Year" award in the Kremlin. Has a business in various ' +
                    'directions. Co-Founder "Top STO advisors".</p>',
                    src: '../static/images/avatars/shkilev@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadvisor/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/nikolay-shkilev',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Purushotham Maralappa',
                    position: 'advisor',
                    src: '../static/images/avatars/maralappa@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/purushotham-maralappa/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/purushotham',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                }
            ]
        },
        economy: {
            title: 'STO Economy',
            subTitle: 'ALE is a security token, providing the owner with a share of profits in the ALE system. The protocol is mirrored to the Ethereum network (protocol ERC-20) to provide liquidity.',
            STOinfo: {
                emission: {
                    title: 'Maximal supply',
                    amount: "∽211 000 000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "33,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "2,000"
                }
            },
            distribution: {
                title: 'STO Terms',
                description: 'Smart-contract ensures safety of investments: full payback to investors if softcap is not reached, team funds are frozen for 1 year. The tokens that are not distributed in the course of STO, shall be liquidated. ',
                list: [
                    {
                        title: 'Sale in the course of STO',
                        amount: 77
                    },
                    {
                        title: 'Team',
                        amount: 11
                    },
                    {
                        title: 'Referral program and advisors',
                        amount: 10
                    },
                    {
                        title: 'Bounty',
                        amount: 2
                    }
                ]
            }
        },
        roadmap: {
            title: 'Roadmap',
            stateLabel: 'state',
            stateStatus: {
                deployed: 'deployed',
                implementing: 'implementing',
                review: 'review',
                notNow: 'the stage did not begin',
            },
            stateKind: {
                task: 'task',
                target: 'target'
            },
            stages: [
                {
                    title: 'Conception',
                    desk: 'The idea',
                    date: '01/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Expertise from specialists in project management. Definition of requirements',
                    desk: 'Consultations with specialists in project management from the real sector of the economy. Collection of requirements and defining problems',
                    date: '02/17 - 03/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Mathematical modeling',
                    desk: 'Consultations with financial experts. Mathematical modeling in cooperation with the University of ITMO',
                    date: '04/17 - 05/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Formation of the Terms of Reference',
                    desk: 'Consultations with blockchain experts and developers. Forming an image of a product and the terms of reference',
                    date: '06/17 - 07/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Partnership with Serokell OU. The beginning of development.',
                    date: '01/08/17',
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
                    state: 'implementing',
                    status: false
                },
                {
                    title: 'PreSale',
                    desk: 'Raised more than 1,000,000 USD',
                    date: '11/17 - 12/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Publishing MVP',
                    date: '05/18',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'deployed',
                    status: false
                },
                {
                    title: 'Bounty',
                    date: '05/18',
                    progress: 100,
                    state: 'deployed',
                    status: true
                },
                {
                    title: 'PreSTO',
                    date: '05/18 - 06/18',
                    progress: 100,
                    state: 'deployed',
                    status: true
                },
                {
                    title: 'STO',
                    date: '07/18 - 09/18',
                    progress: 5,
                    state: 'implementing',
                    status: false
                },
                {
                    title: 'Development of Yellow Paper',
                    desk: 'Formalization of the top level blockchain.',
                    result: 'Result: Yellow Paper, v0.1',
                    date: '09/18 - 10/18',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Development of Yellow Paper',
                    desk: 'Formalization of mining procedure.',
                    result: 'Result: Yellow Paper, v0.2',
                    date: '10/18 - 11/18',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Development of Yellow Paper',
                    desk: 'Formalization of embedded blockchains',
                    result: 'Result: Yellow Paper, v0.3',
                    date: '11/18 - 12/18',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Development of Yellow Paper',
                    desk: 'Formalization of a dispute system',
                    result: 'Result: Yellow Paper, v0.4',
                    date: '12/18 - 01/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Development of Yellow Paper',
                    desk: 'Development of a virtual machine',
                    result: 'Result: Yellow Paper, v0.5',
                    date: '01/19 - 02/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Development of Yellow Paper',
                    desk: 'Formalization of changes procedure',
                    result: 'Result: Yellow Paper, v0.6; Yellow Paper, v1.0',
                    date: '02/19 - 03/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Development of technical description of implementation',
                    desk: 'Development of technical description of system modules',
                    result: 'Result: Blue paper, v0.1',
                    date: '04/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Development of technical description of implementation',
                    desk: 'Development of requirements for frontend-module',
                    result: 'Result: Blue paper, v0.2',
                    date: '04/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Development of technical description of implementation',
                    desk: 'Development of technical description of a top level blockchain',
                    result: 'Result: Blue paper, v0.3',
                    date: '04/19 - 05/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Development of technical description of implementation',
                    desk: 'Development of technical description of an embedded blockchain',
                    result: 'Result: Blue paper, v1.0',
                    date: '05/19 - 07/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'MVP solution decentralizing',
                    desk: 'Implementation of peer-to-peer network',
                    date: '07/19 - 08/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'MVP solution decentralizing',
                    desk: ' Implementation of basic blockchain and mining',
                    result: 'Result: Blockchain abstraction without reference to application logic',
                    date: '08/19 - 09/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'MVP solution decentralizing',
                    desk: 'Implementation of application logic',
                    result: 'Result: pre-alpha, v0.1',
                    date: '09/19 - 11/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Implementation of private blockchains',
                    desk: ' Implementation of template for building embedded blockchains',
                    result: 'Result: template for building embedded blockchains',
                    date: '11/19 - 12/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Implementation of private blockchains',
                    desk: 'Implementation of embedded blockchains based on a template',
                    result: 'Result: pre-alpha v0.2',
                    date: '12/19 - 01/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Implementation of private blockchains',
                    desk: 'Integration of embedded blockchains into the platform',
                    result: 'Result: pre-alpha,v1.0; alpha v0.1',
                    date: '01/20 - 02/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: ' Implementation of a dispute system',
                    desk: 'Implementation of verification agents logic',
                    result: 'Result: alpha v0.2',
                    date: '02/20 - 03/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: ' Implementation of a dispute system',
                    desk: 'Implementation of a first level dispute',
                    result: 'Result: alpha v0.3',
                    date: '03/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: ' Implementation of a dispute system',
                    desk: 'Implementation of a second level dispute',
                    result: 'Result: alpha v0.4',
                    date: '03/20 - 04/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: ' Implementation of a dispute system',
                    desk: 'Implementation of a third level dispute',
                    result: 'Result: alpha v1.0; beta v0.1',
                    date: '04/20 - 05/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Implementation of a system for voting for changes',
                    desk: 'Implementation of system of voting for monetary policy',
                    result: 'Result: beta v0.2',
                    date: '05/20 - 06/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Implementation of a system for voting for changes',
                    desk: 'Implementation of system of voting for technological upgrade',
                    result: 'Result: beta v1.0',
                    date: '06/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Release of the system',
                    desk: 'Closed testing of the system',
                    result: 'Result: beta v1.1',
                    date: '06/20 - 08/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Release of the system',
                    desk: 'Publication of the system source code and documentation',
                    result: 'Result: beta v2.0',
                    date: '08/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Release of the system',
                    desk: 'Putting the system into operation',
                    result: 'Result: fully operational ALEHUB system',
                    date: '08/20',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },

            ]
        },
        blog: {
            title: 'Blog',
            allPostsBtn: 'All posts',
            notFound: 'News not found'
        },
        footer: {
            left: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            right: {
                input: 'Your e-mail address',
                btn: 'Subscribe to news',
                error: 'incorrect address',
                success: 'correct address'
            },
        },
        download: 'Download',
        serverErr: 'A server error occurred while retrieving the application list.'
    },
    fr: {
        whiteList: {
            description: 'Dear Sir/Madam, since August, 25 we have limited the open sale of ALEHUB tokens. Enter your email and you will receive an instruction to buy ALEHUB tokens.',
            form: {
                topLabel: {
                    success: 'successful sending',
                    exist: 'this email is already in use',
                    incorrect: 'incorrect email'
                }
            }
        },
        emailSubscribePanel: {
            newsletter: 'Abonnez-vous à notre newsletter',
            yourAddress: 'Votre adresse e-mail',
            subscribe: 'S\'abonner',
            turnOn: 'Et n\'oubliez pas d\'activer les notifications',
            success: 'abonnement réussi',
            alreadyUse: 'cet e-mail est déjà utilisé',
            label: {
                success: 'abonnement réussi',
                error: 'Adresse Email incorrecte\n',
                exist: 'Cet e-mail est déjà utilisée'
            }
        },
        navbar: {
            home: 'Home',
            menuList: [
                {
                    path: '#home',
                    name: 'Accueil'
                },
                {
                    path: '#mission',
                    name: 'Mission'
                },
                {
                    path: '#advantages',
                    name: 'Avantages'
                },
                {
                    path: '#features',
                    name: 'Caractéristiques'
                },
                {
                    path: '#team',
                    name: 'Équipe'
                },
                {
                    path: '#ico',
                    name: 'STO'
                },
                {
                    path: '#roadmap',
                    name: 'Feuille de route'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#mass-media-sections',
                    name: 'Médias de masse'
                },
                {
                    path: '#blog',
                    name: 'Blog'
                }
            ],
            pages: [
                {
                    name: 'FAQ',
                    to: '/faq'
                },
                {
                    name: 'White list',
                    to: '/white-list'
                },
                {
                    name: 'Blog page',
                    to: '/blog/categories/all'
                }
            ],
            loginBtn: "S'identifier",
            blog: 'Blog'
        },
        menuModal: {
            selectLang: 'Choisir la langue',
            navigationMenu: 'Retour au menu'
        },
        greeting: {
            title: 'La nouvelle ère de la gestion de projet',
            countDown: {
                title: 'PreSTO va commencer',
                time: {
                    days: 'Journées',
                    hours: 'Heures',
                    minutes: 'Minutes'
                },
                btnBuyTokens: 'Acheter des jetons',
                bonus: "Bonus de 25% jusqu'au 25 juin 2018",
                notAvailable: 'Maintenant non disponible'
            },
            acceptedCrypto: {
                title: 'Accepté pour la collecte'
            }
        },
        partners: {
            title: 'Nos partenaires',
        },
        about: {
            title: 'Qu\'est-ce que Alehub',
            subTitle: 'ALEHUB - est une plate-forme pour l\'industrie IT pour la gestion de projet et la recherche d\'entrepreneurs.',
            description: 'ALEHUB combine les avantages des systèmes de registres distribués (blockchain) et des services classiques de gestion de projet. La sélection des entrepreneurs (clients et exécuteurs testamentaires), la gestion de leur travail, le contrôle et les règlements mutuels sont régis par des contrats multilatéraux intelligents du système ALE, qui assurent la sécurité, la fiabilité et les faibles coûts de l\'externalisation des professionnels de l\'informatique.',
            btnGroup: {
                whitePaper: 'Livret-blanc',
                techDetails: 'Plus d’infos à propos d’ALE',
                download: 'Live Demo'
            }
        },
        mission: {
            title: 'Mission & Vision',
            blocks: [
                {
                    title: 'Mission',
                    text: 'ALEHUB brings together best aspects of crypto- and real economy in order to get to a qualitatively new level - composite economy. This means a simple integration of rules and customs of existing industries and segments of global and local economies with the new processing and verification capabilities. So it becomes cheaper, simpler, more reliable and flexible.'
                },
                {
                    title: 'Vision',
                    text: 'Integrating blockchain into the real economy, not substituting it. ALEHUB creates an environment for real business entities to do real business (contracts, finance, management, etc). The main goal is to comply with legislation systems and smoothly integrate into the economy: sector by sector.'
                },
                {
                    title: 'Background',
                    text: 'ALEHUB idea was developed in cooperation with consultants from “Siemens AG” and “Bayer AG”. ALEHUB is being developed with synergy of industry enterprises, former Cardano developers & leading IT specialists. Backed by German companies, ALEHUB is created for real business.'
                }
            ]
        },
        advantages: {
            title: 'Advantages',
            lists: [
                {
                    title: 'ALE comparé au système de management de projet actuel'
                },
                {
                    title: 'ALE comparé aux autres plateformes sur blockchain'
                }
            ]
        },
        projectEconomy: {
            title: 'Project economy',
            text: '<p>ALE profit is generated from the commission fees charged by the Platform. Note that commissions, ' +
            'their volume and subjects are determined by the consensus of the ALE token holders. When ALE platform will' +
            ' be launched, the tariffs for its users will be: 0,1% for funds withdrawal and 0,1$ for every document' +
            ' published.</p><p>Financial operations are settled using AXEL (ALEHUB eXchange ELement) The exchange rate ' +
            'of this token is pegged to the US dollar rate at the ratio: 1 AXEL ≡ 1 $. AXEL encapsulates the change in' +
            ' the exchange rate. Since the account stores exactly AXEL tokens, user can at any time convert them into' +
            ' any currency at his own choice.</p>'
        },
        alePlatform: {
            title: 'Plateforme ALE ',
            subTitle: 'ALE est un projet qui modifie et combine les avantages du réel et de l\'économie des crypto-monnaies pour créer un nouveau système fondamental. ALE réinvente la structure financière et juridique existante comme étant plus flexible, plus conforme aux lois et reconnaît les valeurs de la plupart des pays dans l\'identification des agents financiers, le stockage des données privées, l\'offre de liquidité et la légalité des moyens de paiement numériques. ',
            watchDemo: 'Regarder la démo',
            solvingProblems: {
                title: 'Problèmes résolus',
                list: [{
                    title: 'La nature juridique du paiement.',
                    description: 'Pour les règlements mutuels, ALE utilise des "conteneurs" contenant de la monnaie réelle.'
                }, {
                    title: 'Valeur juridique du contrat électronique.',
                    description: 'Tous les contrats conclus dans le cadre de la plate-forme ALE sont juridiquement significatifs en raison du respect des exigences nationales en matière de documents.'
                }, {
                    title: 'Moyens de paiement très volatils.',
                    description: 'Les crypto-monnaies sont volatiles, ce qui en fait une méthode de paiement non viable pour les entreprises réelles. Le système des "conteneurs" de retenue d\'argent liquide résout ce problème.'
                }, {
                    title: 'Contradiction avec les normes nationales et industrielles. ',
                    description: 'ALE permet aux utilisateurs de choisir les règles d\'interaction au sein de la plate-forme ALE. Par conséquent, il faut agir conformément aux exigences de la législation et des affaires.'
                }, {
                    title: 'L\'inévitabilité de remplir les obligations.',
                    description: 'Les obligations financières sont réglementées par des contrats intelligents, grâce auxquels un environnement de confiance est créé.'
                }, {
                    title: 'Intégrité et inaltérabilité de la documentation.',
                    description: 'Confirmé par le stockage dans la blockchain, de sorte que les documents au sein de l\'écosystème ALE sont légalement garantis.'
                }]
            }
        },
        features: {
            title: 'Les principales caractéristiques distinctives d\'ALE',
            list: [{
                title: 'Établissement rapide d\'un consensus dans la dynamique du développement des désirs de l\'utilisateur et de l\'évolution des conditions économiques.',
                description: ' '
            }, {
                title: 'Produits simples et intuitifs en matière de manipulation de données, des fonctions et paramètres au niveau de l\'interface interactive.',
                description: ' '
            }, {
                title: 'Éliminer la substitution des organisations de vérification existantes dans le monde dans le but d\'obtenir une légitimité certaine des relations sur la plate-forme.',
                description: ' '
            }, {
                title: 'Assurer l\'engagement et le renforcement financier des accords entre les différents partis, en évitant la dualité, en encourageant l\'irresponsabilité et en gelant des montants disproportionnés de liquidités en garantie.',
                description: ' '
            }]
        },
        table: {
            first: {
                desc: ["Contrat intelligent multilatéral",
                    "Les participants définissent les règles",
                    "Conformité totale avec la majorité des juridictions",
                    "Élargissement des possibilités d'un système juridique et économique",
                    "Paiement par conteneurs en monnaie réelle",
                    "Possibilité d'arbitrage formel"],
            },
            second: {
                title: "Autres plateformes sur blockchain",
                desc: ["DAO",
                    "Les règles d’interactions sont prédéfinies",
                    "Légitimité douteuse",
                    "Substitution de l'économie légale",
                    "Paiement en crypto-monnaie au cours très volatile",
                    "-"],
            },
            third: {
                desc: ["Gestion conjointe de projet, finances et administration de l'entrepreneur.",
                    "Universalisation des méthodes de management de projet",
                    "Universalité des méthodes de cryptage des données privées",
                    "Régulé par un consensus d’utilisateur",
                    "Paiements sans intermédiaires",
                    "L'imminence des obligations d'exécution"],
            },
            four: {
                title: "Système de management de projet",
                desc: ["Gestion de projet, services financiers par le biais de différentes applications.",
                    "Lié à une seule méthode",
                    "Lié à une ou plusieurs méthodes",
                    "Réglementation centralisée",
                    "Paiements avec intermédiaires",
                    "-"],
            }
        },
        team: {
            title: 'Équipe',
            serokell: [
                {
                    name: 'Serokell',
                    members: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/seroka@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/seroka/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../static/images/avatars/rukin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arukin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../static/images/avatars/elagin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/kirelagin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            effectiveEnergy: [
                {
                    name: 'Effective Energy',
                    members: [
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Investment Officer',
                            src: '../static/images/avatars/loktev@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/egor-loktev/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../static/images/avatars/gromyko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mikhail-gromyko-a84821162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Associate Professor of the Department of Network and Cloud Technologies, ITMO University',
                            src: '../static/images/avatars/grudinin@3x.png',
                            social: [
                                {
                                    type: 'facebook',
                                    link: 'https://www.facebook.com/vladimir.grudinin.94',
                                    src: '../static/images/fb.svg'
                                }
                            ]
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Executive Director',
                            src: '../static/images/avatars/osipenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksey-osipenko-9a5822162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Anton Beliakov',
                            position: 'Senior Research Manager',
                            src: '../static/images/avatars/beliakov@3x.png',
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../static/images/avatars/elena@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/elenatsymbalyuk/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Ilya Shilov',
                            position: 'Chief Technology Officer',
                            src: '../static/images/avatars/shilov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/ilia-shilov-454a14163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Arseniy Voytenko',
                            position: 'Head of Communications',
                            src: '../static/images/avatars/voytenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arseniy-voitenko-61aa08161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../static/images/avatars/levashow@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/artem-levashov-177015125/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/mrdenzzz/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/galina-sergeeva-628a07161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },

                        {
                            name: 'Sergey Timohin',
                            position: 'Community manager',
                            src: '../static/images/avatars/timohin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/timokhinsergey/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Zhitkov',
                            position: 'Testing Engineer',
                            src: '../static/images/avatars/zhitkov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/evgeniy-zhitkov-670605163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Korobitcyn',
                            position: 'Graphic Designer',
                            src: '../static/images/avatars/korobitsyn@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: 'Conseillers',
            members: [
                {
                    name: 'Phillip Nunn',
                    position: 'advisor',
                    description: 'Entrepreneur, Chief Executive Officer and international speaker on Blockchain, Cryptocurrency and fintech.\n' +
                    'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with substantial ' +
                    'assets under management and a suite of investment products across multiple classes for individuals' +
                    ' and institutions in the UK and overseas.\n' +
                    'With more than 15 years’ experience in financial services, Phillip specialises in wealth management, ' +
                    'angel investment, commercial property investment and financial technology. He founded The Blackmore ' +
                    'Group on the core belief of giving clients real and tangible alternatives to poor investment ' +
                    'performance and providing “future proof” investment strategies.\n' +
                    'Phillip has become a well-known, online influencer in the blockchain and crypto space and has ' +
                    'travelled the world evangelising and talking on these subjects. Phillip has sat on the advisory' +
                    ' boards of many STO\'s over the past 12 months and has helped structure and fund some of the ' +
                    'biggest companies of the future. Along with his business Wealth Chain, Phillip will be launching ' +
                    'his own crypto fund that looks to invest in STO\'s along with existing blockchain technology companies.',
                    src: '../static/images/avatars/nunn@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/phillip-nunn/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/phillipnunn',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Vladimir Nikitin',
                    position: 'advisor',
                    description: 'Vladimir Nikitin is professional and legal consultant with over ten years’ experience' +
                    ' in the legal, finance, retail, and IT industries. Renown cryptocurrency expert and STO advisor ' +
                    '(Top-5 worldwide ICObench Expert). As an active supporter and advocate of blockchain technology, ' +
                    'provide consultancy and advice to selected STOs in the CIS region. Network in the crypto community ' +
                    'counts over 30 000 members. In portfolio: 10 STO projects with more 200 million dollars.',
                    src: '../static/images/avatars/nikitin@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadv/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/vladimir-nikitin',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Nikolay Shkilev',
                    position: 'advisor',
                    description: 'Crypto enthusiast and mentor. Rated Top 5 in People of Blockchain. Has 20 years of ' +
                    'experience in large-scale transaction projects. He has many awards and titles in the IT business. ' +
                    'Self-Made Russia award. Tech guru. Super TOP award etc. Founder and Chief Executive Officer of Private Business Club.' +
                    ' His Holding received "Enterprise of the Year" award in the Kremlin. Has a business in various ' +
                    'directions. Co-Founder "Top STO advisors".',
                    src: '../static/images/avatars/shkilev@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadvisor/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/nikolay-shkilev',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Purushotham Maralappa',
                    position: 'advisor',
                    src: '../static/images/avatars/maralappa@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/purushotham-maralappa/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/purushotham',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                }
            ]
        },
        economy: {
            title: 'Économie de l’STO ',
            subTitle: 'ALE est un jeton de sécurité qui fournit au propriétaire la participation aux bénéfices du système ALE. Le protocole reflète le réseau Ethereum (protocole ERC-20) pour fournir des liquidités.',
            STOinfo: {
                emission: {
                    title: 'Maximal supply',
                    amount: "∽211 000 000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "33,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "2,000"
                }
            },
            distribution: {
                title: 'Vente pendant l’STO',
                description: 'Smart-contract ensures safety of investments: full payback to investors if softcap is not reached, team funds are frozen for 1 year. The tokens that are not distributed in the course of STO, shall be liquidated.',
                list: [
                    {
                        title: 'Vente pendant l’STO',
                        amount: 77
                    },
                    {
                        title: 'Commande',
                        amount: 11
                    },
                    {
                        title: 'Programme de référencement et conseillés',
                        amount: 10
                    },
                    {
                        title: 'Bounty',
                        amount: 2
                    }
                ]
            }
        },
        roadmap: {
            title: 'Feuille de route ',
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
                    desk: 'L’idée',
                    date: '01/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'déployé',
                    status: false
                },
                {
                    title: 'L\'expertise de spécialistes en gestion de projet. Définition des besoins',
                    desk: 'Consultations with specialists in project management from the real sector of the economy. Collection of requirements and defining problems',
                    date: '02/17 - 03/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'déployé',
                    status: false
                },
                {
                    title: 'Modèle mathématique',
                    desk: 'Consultations avec des experts financiers. Modélisation mathématique en coopération avec l\'Université de l\'ITMO.',
                    date: '04/17 - 05/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'déployé',
                    status: false
                },
                {
                    title: 'Formation des termes de référence',
                    desk: 'Consultations avec des experts de la blockchain et des développeurs. Formation de l\'image d\'un produit et des termes de référence.',
                    date: '06/17 - 07/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'déployé',
                    status: false
                },
                {
                    title: 'Partenariat avec Serokell OU, début du développement.',
                    date: '01/08/17',
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
                    state: 'exécution',
                    status: false
                },
                {
                    title: 'Pré-Vente',
                    desk: 'Levée de fonds de plus de 1,000,000 USD',
                    date: '11/17 - 12/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: 'déployé',
                    status: false
                },
                {
                    title: 'Publication MVP',
                    date: '05/18',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'déployé',
                    status: false
                },
                {
                    title: 'Bounty',
                    date: '05/18',
                    progress: 100,
                    state: 'déployé',
                    status: true
                },
                {
                    title: 'PreSTO',
                    date: '05/18 - 06/18',
                    progress: 100,
                    state: 'déployé',
                    status: true
                },
                {
                    title: 'STO',
                    date: '07/18 - 09/18',
                    progress: 5,
                    state: 'exécution',
                    status: false
                },
                {
                    title: 'Développement du Livret-jaune',
                    desk: 'Papier jaune - description technique du système. Le document illustre les caractéristiques architecturales de la construction du système, les protocoles d\'interaction entre les nœuds du réseau et d\'autres détails techniques.',
                    date: '02/18 - 01/19',
                    progress: 0,
                    state: 'la scène n\'a pas commencé',
                    status: false
                },
                {
                    title: 'Décentralisation des solutions MVP',
                    desk: 'Construire une version du système dans laquelle les composants suivants sont implémentés : Réseau Peering; Transactions personnalisées à l\'aide du jeton intégré et des jetons colorés;',
                    date: '01/18 - 02/19',
                    progress: 0,
                    state: 'la scène n\'a pas commencé',
                    status: false
                },
                {
                    title: 'Blockchain privée',
                    desk: 'Développement de filières privées et leur intégration dans l\'infrastructure existante. Assurer le fonctionnement ininterrompu des oracles. Enregistrement dans la version complète de l\'ensemble du système - à l\'exception du mécanisme de litige (arbitrage).',
                    date: '01/19',
                    progress: 0,
                    state: 'la scène n\'a pas commencé',
                    status: false
                },
                {
                    title: 'Mise en œuvre du système de règlement des différends',
                    desk: 'Améliorer le système de résolution des conflits dans le cadre d\'une application décentralisée.',
                    date: '01/19',
                    progress: 0,
                    state: 'la scène n\'a pas commencé',
                    status: false
                },
                {
                    title: 'Mise en œuvre du système de vote pour les changements',
                    desk: 'Modifier le système pour assurer sa variabilité dans le temps.',
                    date: '01/19',
                    progress: 0,
                    state: 'la scène n\'a pas commencé',
                    status: false
                },
                {
                    title: 'Closed system testing',
                    date: '10/19 - 01/20',
                    progress: 0,
                    state: 'la scène n\'a pas commencé',
                    status: false
                },
                {
                    title: 'Publication du code source du système et de la documentation.',
                    desk: 'Publication du code source du système et de la documentation dans des référentiels ouverts.',
                    date: '01/20',
                    progress: 0,
                    state: 'la scène n\'a pas commencé',
                    status: false
                },
                {
                    title: 'Démarrage du système ',
                    date: '01/20',
                    progress: 0,
                    state: 'la scène n\'a pas commencé',
                    status: false
                }
            ]
        },
        blog: {
            title: 'Blog',
            allPostsBtn: 'Tous les messages',
            notFound: 'Nouvelles non trouvées'
        },
        footer: {
            left: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            right: {
                input: 'Votre adresse email',
                btn: 'Abonnez-vous aux nouvelles',
                error: 'adresse incorrecte',
                success: 'adresse correcte'
            }
        },
        download: 'Télécharger',
        serverErr: 'Une erreur de serveur s\'est produite lors de la récupération de la liste des applications.'
    },
    de: {
        whiteList: {
            description: 'Dear Sir/Madam, since August, 25 we have limited the open sale of ALEHUB tokens. Enter your email and you will receive an instruction to buy ALEHUB tokens.',
            form: {
                topLabel: {
                    success: 'successful sending',
                    exist: 'this email is already in use',
                    incorrect: 'incorrect email'
                }
            }
        },
        emailSubscribePanel: {
            newsletter: 'Abonnieren Sie unseren Newsletter',
            yourAddress: 'Ihre E-Mail-Adresse',
            subscribe: 'Abonnieren',
            turnOn: 'Und vergiss nicht, Benachrichtigungen zu aktivieren',
            success: 'erfolgreiches Abonnement',
            alreadyUse: 'Diese E-Mail wird bereits verwendet',
            label: {
                success: 'erfolgreiches Abonnement',
                error: 'Falsche Email',
                exist: 'Diese E-Mail-Adresse wird schon verwendet'
            }
        },
        navbar: {
            home: 'Home',
            menuList: [
                {
                    path: '#home',
                    name: 'Zuhause'
                },
                {
                    path: '#mission',
                    name: 'Mission'
                },
                {
                    path: '#advantages',
                    name: 'Vorteile'
                },
                {
                    path: '#features',
                    name: 'Eigenschaften'
                },
                {
                    path: '#team',
                    name: 'Mannschaft'
                },
                {
                    path: '#ico',
                    name: 'STO'
                },
                {
                    path: '#roadmap',
                    name: 'Fahrplan'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#mass-media-sections',
                    name: 'Massenmedien'
                },
                {
                    path: '#blog',
                    name: 'Blog'
                }
            ],
            pages: [
                {
                    name: 'FAQ',
                    to: '/faq'
                },
                {
                    name: 'White list',
                    to: '/white-list'
                },
                {
                    name: 'Blog page',
                    to: '/blog/categories/all'
                }
            ],
            loginBtn: 'Einloggen',
            blog: 'Blog'
        },
        menuModal: {
            selectLang: 'Sprache auswählen',
            navigationMenu: 'Zurück zum Menü'
        },
        greeting: {
            title: 'Die neue Ära des Projektmanagements steht bevor',
            countDown: {
                title: 'PreSTO wird beginnen',
                time: {
                    days: 'Tage',
                    hours: 'Std',
                    minutes: 'Protokoll'
                },
                btnBuyTokens: 'Kaufe Token',
                bonus: 'Bonus 25% bis zum 25 Juni 2018',
                notAvailable: 'Jetzt nicht verfügbar'
            },
            acceptedCrypto: {
                title: 'Akzeptiert für die Sammlung'
            }
        },
        partners: {
            title: 'Unsere Partner',
        },
        about: {
            title: 'Was ist Alehub?',
            subTitle: 'ALEHUB - ist eine Plattform für die IT-Branche für Projektmanagement und Auftragnehmersuche. ',
            description: 'ALEHUB vereint die Vorteile verteilter Registry-Systeme (Blockchain) und klassischer Projektmanagement-Services. Die Auswahl der Auftragnehmer (Kunden und Ausführende), ihre Arbeitsverwaltung, Kontrolle und die gegenseitige Abrechnung werden durch multilaterale intelligente Verträge des ALE-Systems geregelt, die die Sicherheit, Zuverlässigkeit und niedrige Kosten des Outsourcings von IT-Fachkräften gewährleisten.',
            btnGroup: {
                whitePaper: 'Whitepaper',
                techDetails: 'Mehr über ALE',
                download: 'Live Demo'
            }
        },
        mission: {
            title: 'Mission & Vision',
            blocks: [
                {
                    title: 'Mission',
                    text: 'ALEHUB brings together best aspects of crypto- and real economy in order to get to a qualitatively new level - composite economy. This means a simple integration of rules and customs of existing industries and segments of global and local economies with the new processing and verification capabilities. So it becomes cheaper, simpler, more reliable and flexible.'
                },
                {
                    title: 'Vision',
                    text: 'Integrating blockchain into the real economy, not substituting it. ALEHUB creates an environment for real business entities to do real business (contracts, finance, management, etc). The main goal is to comply with legislation systems and smoothly integrate into the economy: sector by sector.'
                },
                {
                    title: 'Background',
                    text: 'ALEHUB idea was developed in cooperation with consultants from “Siemens AG” and “Bayer AG”. ALEHUB is being developed with synergy of industry enterprises, former Cardano developers & leading IT specialists. Backed by German companies, ALEHUB is created for real business.'
                }
            ]
        },
        advantages: {
            title: 'Vorteile',
            lists: [
                {
                    title: 'ALE vs. Projektmanagementsysteme'
                },
                {
                    title: 'ALE vs. andere Blockchain-Plattformen'
                }
            ]
        },
        projectEconomy: {
            title: 'Project economy',
            text: '<p>ALE profit is generated from the commission fees charged by the Platform. Note that commissions, ' +
            'their volume and subjects are determined by the consensus of the ALE token holders. When ALE platform will' +
            ' be launched, the tariffs for its users will be: 0,1% for funds withdrawal and 0,1$ for every document' +
            ' published.</p><p>Financial operations are settled using AXEL (ALEHUB eXchange ELement) The exchange rate ' +
            'of this token is pegged to the US dollar rate at the ratio: 1 AXEL ≡ 1 $. AXEL encapsulates the change in' +
            ' the exchange rate. Since the account stores exactly AXEL tokens, user can at any time convert them into' +
            ' any currency at his own choice.</p>'
        },
        alePlatform: {
            title: 'ALE-Plattform',
            subTitle: 'ALE ist ein Konstrukt, das die Vorteile von Real- und Kryptoökonomien modifiziert und kombiniert, um ein grundlegend neues Ökosystem zu schaffen - die Verbundwirtschaft. ALE erfindet die bestehende Finanz- und Rechtsstruktur als flexibler, gesetzeskonformer und erkennt die Werte der meisten Länder bei der Identifizierung von Finanzagenten, der Speicherung privater Daten, der Bereitstellung von Liquidität und der Rechtmäßigkeit digitaler Zahlungsmittel an.',
            watchDemo: 'Schau dir die Demo an',
            solvingProblems: {
                title: 'Gelöste Probleme',
                list: [{
                    title: 'Die Rechtsnatur der Zahlung.',
                    description: 'Für die gegenseitige Abrechnung verwendet ALE "Container" mit echter Währung.'
                }, {
                    title: 'Rechtswirksamkeit des elektronischen Vertrages.',
                    description: 'Alle innerhalb der ALE-Plattform abgeschlossenen Verträge sind aufgrund der Erfüllung der nationalen Anforderungen an die Dokumente rechtlich bedeutsam.'
                }, {
                    title: 'Sehr volatiles Zahlungsmittel.',
                    description: 'Krypto-Währungen sind volatil, was sie zu einer unrentablen Zahlungsmethode für reale Geschäfte macht. Das System der Bargeldbevorratung "Container" löst dieses Problem.'
                }, {
                    title: 'Widerspruch zu nationalen und industriellen Standards. ',
                    description: 'ALE ermöglicht es dem Benutzer, die Regeln der Interaktion innerhalb der ALE-Plattform zu wählen. Deshalb sollte man im Einklang mit den Anforderungen der Gesetzgebung und der Wirtschaft handeln. '
                }, {
                    title: 'Die Unvermeidlichkeit der Erfüllung von Verpflichtungen.',
                    description: 'Finanzielle Verpflichtungen werden durch intelligente Verträge geregelt, durch die ein vertrauenswürdiges Umfeld geschaffen wird.'
                }, {
                    title: 'Integrität und Unveränderbarkeit der Dokumentation.',
                    description: 'Bestätigt durch Speicherung in der Blockkette, so dass Dokumente innerhalb des ALE-Ökosystems rechtlich abgesichert sind.'
                }]
            }
        },
        features: {
            title: 'Die wichtigsten Unterscheidungsmerkmale von ALE',
            list: [{
                title: 'Zeitnahe Konsensfindung in der Dynamik der Entwicklung der Nutzerwünsche und sich ändernder wirtschaftlicher Rahmenbedingungen.',
                description: ' '
            }, {
                title: 'Einfache und intuitive Produkte im Umgang mit Daten, Funktionen und Parametern auf der Ebene der interaktiven Oberfläche.',
                description: ' '
            }, {
                title: 'Eliminieren Sie die Substitution der bestehenden Verifikationsorganisationen in der Welt für die volle Legitimität der Beziehung auf der Plattform.',
                description: ' '
            }, {
                title: 'Sicherstellung des Engagements und der finanziellen Stärkung von Mehrparteienvereinbarungen durch Vermeidung von Dualität, Förderung von Verantwortungslosigkeit und Einfrieren unverhältnismäßig hoher Liquidität als Sicherheit.',
                description: ' '
            }]
        },
        table: {
            first: {
                desc: ["Multilaterale Smart-Verträge",
                    "Teilnehmer legen Regeln fest",
                    "Volle Übereinstimmung mit den meisten Gerichtsbarkeiten",
                    "Erweiterung der Möglichkeiten eines rechtlichen Wirtschaftssystems",
                    "Bezahlung mit echten Währungscontainern",
                    "Möglichkeit der formellen Schlichtung"],
            },
            second: {
                title: "Andere Blockkettenplattformen",
                desc: ["DAO",
                    "Interaktionsregeln sind vorgegeben",
                    "Unsichere Legitimität",
                    "Substitution der legalen Wirtschaft ",
                    "Bezahlung mit hochvolatiler Kryptowährung ",
                    "-"],
            },
            third: {
                desc: ["Gemeinsames Projektmanagement, Finanzen und Kontraktorenverwaltung",
                    "Universalität der Projektmanagement-Methoden",
                    "Universalität der Verschlüsselungsmethoden privater Daten",
                    "Reguliert durch Konsens der Nutzer",
                    "Zahlungen ohne Vermittler",
                    "Die bevorstehenden Ausführungspflichten"],
            },
            four: {
                title: "Projektmanagementsysteme",
                desc: ["Projektmanagement, Finanzdienstleistungen durch verschiedene Anwendungen",
                    "An eine Methode gebunden ",
                    "An eine oder mehrere Methoden gebunden ",
                    "Zentral geregelt",
                    "Zahlungen über Vermittler",
                    "-"],
            }
        },
        team: {
            title: 'Unser Team',
            serokell: [
                {
                    name: 'Serokell',
                    members: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/seroka@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/seroka/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../static/images/avatars/rukin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arukin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../static/images/avatars/elagin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/kirelagin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            effectiveEnergy: [
                {
                    name: 'Effective Energy',
                    members: [
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Investment Officer',
                            src: '../static/images/avatars/loktev@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/egor-loktev/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../static/images/avatars/gromyko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mikhail-gromyko-a84821162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Associate Professor of the Department of Network and Cloud Technologies, ITMO University',
                            src: '../static/images/avatars/grudinin@3x.png',
                            social: [
                                {
                                    type: 'facebook',
                                    link: 'https://www.facebook.com/vladimir.grudinin.94',
                                    src: '../static/images/fb.svg'
                                }
                            ]
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Executive Director',
                            src: '../static/images/avatars/osipenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksey-osipenko-9a5822162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Anton Beliakov',
                            position: 'Senior Research Manager',
                            src: '../static/images/avatars/beliakov@3x.png',
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../static/images/avatars/elena@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/elenatsymbalyuk/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Ilya Shilov',
                            position: 'Chief Technology Officer',
                            src: '../static/images/avatars/shilov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/ilia-shilov-454a14163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Arseniy Voytenko',
                            position: 'Head of Communications',
                            src: '../static/images/avatars/voytenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arseniy-voitenko-61aa08161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../static/images/avatars/levashow@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/artem-levashov-177015125/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/mrdenzzz/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/galina-sergeeva-628a07161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },

                        {
                            name: 'Sergey Timohin',
                            position: 'Community manager',
                            src: '../static/images/avatars/timohin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/timokhinsergey/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Zhitkov',
                            position: 'Testing Engineer',
                            src: '../static/images/avatars/zhitkov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/evgeniy-zhitkov-670605163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Korobitcyn',
                            position: 'Graphic Designer',
                            src: '../static/images/avatars/korobitsyn@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: 'Berater',
            members: [
                {
                    name: 'Phillip Nunn',
                    position: 'advisor',
                    description: 'Entrepreneur, Chief Executive Officer and international speaker on Blockchain, Cryptocurrency and fintech.\n' +
                    'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with substantial ' +
                    'assets under management and a suite of investment products across multiple classes for individuals' +
                    ' and institutions in the UK and overseas.\n' +
                    'With more than 15 years’ experience in financial services, Phillip specialises in wealth management, ' +
                    'angel investment, commercial property investment and financial technology. He founded The Blackmore ' +
                    'Group on the core belief of giving clients real and tangible alternatives to poor investment ' +
                    'performance and providing “future proof” investment strategies.\n' +
                    'Phillip has become a well-known, online influencer in the blockchain and crypto space and has ' +
                    'travelled the world evangelising and talking on these subjects. Phillip has sat on the advisory' +
                    ' boards of many STO\'s over the past 12 months and has helped structure and fund some of the ' +
                    'biggest companies of the future. Along with his business Wealth Chain, Phillip will be launching ' +
                    'his own crypto fund that looks to invest in STO\'s along with existing blockchain technology companies.',
                    src: '../static/images/avatars/nunn@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/phillip-nunn/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/phillipnunn',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Vladimir Nikitin',
                    position: 'advisor',
                    description: 'Vladimir Nikitin is professional and legal consultant with over ten years’ experience' +
                    ' in the legal, finance, retail, and IT industries. Renown cryptocurrency expert and STO advisor ' +
                    '(Top-5 worldwide ICObench Expert). As an active supporter and advocate of blockchain technology, ' +
                    'provide consultancy and advice to selected STOs in the CIS region. Network in the crypto community ' +
                    'counts over 30 000 members. In portfolio: 10 STO projects with more 200 million dollars.',
                    src: '../static/images/avatars/nikitin@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadv/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/vladimir-nikitin',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Nikolay Shkilev',
                    position: 'advisor',
                    description: 'Crypto enthusiast and mentor. Rated Top 5 in People of Blockchain. Has 20 years of ' +
                    'experience in large-scale transaction projects. He has many awards and titles in the IT business. ' +
                    'Self-Made Russia award. Tech guru. Super TOP award etc. Founder and Chief Executive Officer of Private Business Club.' +
                    ' His Holding received "Enterprise of the Year" award in the Kremlin. Has a business in various ' +
                    'directions. Co-Founder "Top STO advisors".',
                    src: '../static/images/avatars/shkilev@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadvisor/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/nikolay-shkilev',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Purushotham Maralappa',
                    position: 'advisor',
                    src: '../static/images/avatars/maralappa@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/purushotham-maralappa/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/purushotham',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                }
            ]
        },
        economy: {
            title: 'STO-Wirtschaft',
            subTitle: 'ALE ist ein Sicherheitstoken, das dem Eigentümer den Gewinnanteil des ALE-Systems zur Verfügung stellt. Das Protokoll spiegelt das Ethereum-Netzwerk (ERC-20-Protokoll) wider, um Liquidität bereitzustellen.',
            STOinfo: {
                emission: {
                    title: 'Maximal supply',
                    amount: "∽211 000 000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "33,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "2,000"
                }
            },
            distribution: {
                title: 'Verkauf während der STO',
                description: 'Smart-contract ensures safety of investments: full payback to investors if softcap is not reached, team funds are frozen for 1 year. The tokens that are not distributed in the course of STO, shall be liquidated.',
                list: [{
                    title: 'Verkauf während der STO',
                    amount: 77
                }, {
                    title: 'Befehl',
                    amount: 11
                }, {
                    title: 'Empfehlungsprogramm und Berater',
                    amount: 10
                }, {
                    title: 'Kopfgeld',
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
                    title: 'Konzeption',
                    desk: 'Die Idee',
                    date: '01/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'bereitgestellt',
                    status: false
                },
                {
                    title: 'Kompetenz von Spezialisten im Projektmanagement. Anforderungsdefinition',
                    desk: 'Beratungen mit Spezialisten für Projektmanagement aus der Realwirtschaft. Erfassung von Anforderungen und Definition von Problemen',
                    date: '02/17 - 03/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'bereitgestellt',
                    status: false
                },
                {
                    title: 'Mathematische Modellierung',
                    desk: 'Konsultationen mit Finanzexperten. Mathematische Modellierung in Zusammenarbeit mit der Universität ITMO',
                    date: '04/17 - 05/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'bereitgestellt',
                    status: false
                },
                {
                    title: 'Bildung der Geschäftsordnung',
                    desk: 'Beratungen mit Blockchain-Experten und Entwicklern. Erstellung eines Produktbildes und des Pflichtenheftes',
                    date: '06/17 - 07/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'bereitgestellt',
                    status: false
                },
                {
                    title: 'Partnerschaft mit Serokell OU, Beginn der Entwicklung.',
                    date: '01/08/17',
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
                    state: 'implementieren',
                    status: false
                },
                {
                    title: 'Vorverkauf',
                    desk: 'Erhob mehr als 1.000.000 USD',
                    date: '11/17 - 12/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: 'bereitgestellt',
                    status: false
                },
                {
                    title: 'Veröffentlichung MVP',
                    date: '05/18',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'bereitgestellt',
                    status: false
                },
                {
                    title: 'Bounty',
                    date: '05/25/18 - 05/25/18',
                    progress: 80,
                    state: 'bereitgestellt',
                    status: true
                },
                {
                    title: 'PreSTO',
                    date: '05/18 - 06/18',
                    progress: 5,
                    state: 'bereitgestellt',
                    status: true
                },
                {
                    title: 'STO',
                    date: '07/18 - 09/18',
                    progress: 5,
                    state: 'implementieren',
                    status: false
                },
                {
                    title: 'Yellow Paper Entwicklung',
                    desk: 'Yellow Paper - Technische Beschreibung des Systems. Das Dokument veranschaulicht die architektonischen Merkmale des Systemaufbaus, die Protokolle der Interaktion zwischen den Netzknoten und andere technische Details.',
                    date: '02/18 - 01/19',
                    progress: 0,
                    state: 'die Bühne hat nicht begonnen',
                    status: false
                },
                {
                    title: 'Dezentralisierung der MVP-Lösungen',
                    desk: 'Aufbau einer Version des Systems, in der die folgenden Komponenten implementiert sind: Peering Netzwerk; Benutzerdefinierte Transaktionen mit dem eingebauten Token und farbigen Token;',
                    date: '01/18 - 02/19',
                    progress: 0,
                    state: 'die Bühne hat nicht begonnen',
                    status: false
                },
                {
                    title: 'Private Blockchains',
                    desk: 'Entwicklung von privaten Blockchains und deren Integration in die bestehende Infrastruktur. Sicherstellung des ununterbrochenen Betriebs von Orakeln. Registrierung in der fertigen Version des gesamten Systems - mit Ausnahme des Streitmechanismus (Schiedsverfahren).',
                    date: '01/19',
                    progress: 0,
                    state: 'die Bühne hat nicht begonnen',
                    status: false
                },
                {
                    title: 'Einführung des Streitbeilegungssystems',
                    desk: 'Verbesserung des Streitbeilegungssystems zur Lösung von Konflikten im Rahmen einer dezentralen Anwendung.',
                    date: '01/19',
                    progress: 0,
                    state: 'die Bühne hat nicht begonnen',
                    status: false
                },
                {
                    title: 'Implementierung des Abstimmungssystems für Änderungen',
                    desk: 'Modifizierung des Systems, um seine Variabilität im Laufe der Zeit zu gewährleisten.',
                    date: '01/19',
                    progress: 0,
                    state: 'die Bühne hat nicht begonnen',
                    status: false
                },
                {
                    title: 'Closed system testing',
                    date: '10/19 - 01/20',
                    progress: 0,
                    state: 'die Bühne hat nicht begonnen',
                    status: false
                },
                {
                    title: 'Veröffentlichung des Quellcodes des Systems und der Dokumentation',
                    date: '01/20',
                    progress: 0,
                    state: 'die Bühne hat nicht begonnen',
                    status: false
                },
                {
                    title: 'Booten des Systems ',
                    date: '01/20',
                    progress: 0,
                    state: 'die Bühne hat nicht begonnen',
                    status: false
                }
            ]
        },
        blog: {
            title: 'Blog',
            allPostsBtn: 'Alle Beiträge',
            notFound: 'Nachrichten nicht gefunden'
        },
        footer: {
            left: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            right: {
                input: 'Deine Emailadresse',
                btn: 'Neuigkeiten abonnieren',
                error: 'Falsche Adresse',
                success: 'Korrekte Adresse'
            },
        },
        download: 'Herunterladen',
        serverErr: 'Serverfehler beim abrufen der Liste der Anwendungen.'
    },
    ar: {
        whiteList: {
            description: 'Dear Sir/Madam, since August, 25 we have limited the open sale of ALEHUB tokens. Enter your email and you will receive an instruction to buy ALEHUB tokens.',
            form: {
                topLabel: {
                    success: 'successful sending',
                    exist: 'this email is already in use',
                    incorrect: 'incorrect email'
                }
            }
        },
        emailSubscribePanel: {
            newsletter: 'اشترك في النشرة الإخبارية لدين',
            yourAddress: "عنوان بريدك الإلكتروني",
            subscribe: "اشتراك",
            turnOn: "ولا تنس تشغيل الإشعارات",
            success: "الاشتراك الناجح",
            alreadyUse: "هذا البريد الإلكتروني قيد الاستخدام بالفعل",
            label: {
                success: 'الاشتراك الناجح',
                error: 'غير صحيح البريد الإلكتروني',
                exist: 'هذا البريد استخدم من قبل'
            }
        },
        navbar: {
            home: 'Home',
            menuList: [
                {
                    path: '#home',
                    name: 'الصفحة الرئيسية'
                },
                {
                    path: '#mission',
                    name: 'مهمة'
                },
                {
                    path: '#advantages',
                    name: 'مزايا'
                },
                {
                    path: '#features',
                    name: 'الميزات'
                },
                {
                    path: '#team',
                    name: 'الفريق'
                },
                {
                    path: '#ico',
                    name: 'STO'
                },
                {
                    path: '#roadmap',
                    name: 'خريطة الطريق'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#mass-media-sections',
                    name: 'وسائل الإعلام الجماهيرية'
                },
                {
                    path: '#blog',
                    name: 'مدونة'
                }
            ],
            pages: [
                {
                    name: 'FAQ',
                    to: '/faq'
                },
                {
                    name: 'White list',
                    to: '/white-list'
                },
                {
                    name: 'Blog page',
                    to: '/blog/categories/all'
                }
            ],
            loginBtn: 'تسجيل الدخول',
            blog: 'مدونة'
        },
        menuModal: {
            selectLang: 'اختار اللغة',
            navigationMenu: 'رجوع إلى القائمة'
        },
        greeting: {
            title: 'العصر الجديد لإدارة المشاريع قادم',
            countDown: {
                title: 'سيبدأ البيع المسبق للقطع النقدية',
                time: {
                    days: 'أيام',
                    hours: 'ساعات',
                    minutes: 'الدقائق'
                },
                btnBuyTokens: 'شراء الرموز',
                bonus: 'مكافأة 25 ٪ حتى 7 أبريل 2018',
                notAvailable: 'الآن غير متوفر'
            },
            acceptedCrypto: {
                title: 'مقبول للتحصيل'
            }
        },
        partners: {
            title: 'شركاؤنا',
        },
        about: {
            title: 'ما هو الحُب',
            subTitle: 'ALEHUB - هي منصة لصناعة تكنولوجيا المعلومات لإدارة المشاريع والبحث عن المقاولين.',
            description: 'تجمع ALEHUB بين مزايا أنظمة التسجيل الموزعة (blockchain) وخدمات إدارة المشاريع الكلاسيكية. يتم تنظيم اختيار المقاولين (العملاء والمنفذين) وإدارة أعمالهم ومراقبتها وتسوياتهم المتبادلة من خلال العقود الذكية متعددة الأطراف لنظام ALE ، والتي تضمن السلامة والموثوقية وانخفاض تكاليف الاستعانة بمصادر خارجية لمتخصصي تكنولوجيا المعلومات.',
            btnGroup: {
                whitePaper: 'ورق العمل',
                techDetails: 'المزيد عن ALE',
                download: 'Live Demo'
            }
        },
        mission: {
            title: 'Mission & Vision',
            blocks: [
                {
                    title: 'Mission',
                    text: 'ALEHUB brings together best aspects of crypto- and real economy in order to get to a qualitatively new level - composite economy. This means a simple integration of rules and customs of existing industries and segments of global and local economies with the new processing and verification capabilities. So it becomes cheaper, simpler, more reliable and flexible.'
                },
                {
                    title: 'Vision',
                    text: 'Integrating blockchain into the real economy, not substituting it. ALEHUB creates an environment for real business entities to do real business (contracts, finance, management, etc). The main goal is to comply with legislation systems and smoothly integrate into the economy: sector by sector.'
                },
                {
                    title: 'Background',
                    text: 'ALEHUB idea was developed in cooperation with consultants from “Siemens AG” and “Bayer AG”. ALEHUB is being developed with synergy of industry enterprises, former Cardano developers & leading IT specialists. Backed by German companies, ALEHUB is created for real business.'
                }
            ]
        },
        advantages: {
            title: 'ALE المميزات',
            lists: [
                {
                    title: 'ALE مقابل انظمة إدارة المشاريع'
                },
                {
                    title: 'ALE مقابل منصات البلوك شين الأخرى'
                }
            ]
        },
        projectEconomy: {
            title: 'Project economy',
            text: '<p>ALE profit is generated from the commission fees charged by the Platform. Note that commissions, ' +
            'their volume and subjects are determined by the consensus of the ALE token holders. When ALE platform will' +
            ' be launched, the tariffs for its users will be: 0,1% for funds withdrawal and 0,1$ for every document' +
            ' published.</p><p>Financial operations are settled using AXEL (ALEHUB eXchange ELement) The exchange rate ' +
            'of this token is pegged to the US dollar rate at the ratio: 1 AXEL ≡ 1 $. AXEL encapsulates the change in' +
            ' the exchange rate. Since the account stores exactly AXEL tokens, user can at any time convert them into' +
            ' any currency at his own choice.</p>'
        },
        alePlatform: {
            title: 'منصة ALE',
            subTitle: 'ALE هو عبارة عن بناء يقوم بتعديل ودمج مزايا الاقتصادات الحقيقية و المشفره لخلق نظام بيئي جديد جوهري - الاقتصاد المركب (the composite economy). تعيد ALE إعادة هيكلة البناء المالي والقانوني الحالي بقدر أكبر من المرونة ، وأكثر انسجامًا مع القوانين وتعترف بقيم معظم البلدان في تحديد العوامل المالية ، وتخزين البيانات الخاصة ، وتوفير السيولة وشرعية وسائل الدفع الرقمية.',
            watchDemo: 'مشاهدة العرض',
            solvingProblems: {
                title: 'مشاكل محلولة',
                list: [{
                    title: ' الطبيعة القانونية للدفع.',
                    description: 'بالنسبة للتسويات المتبادلة mutual settlements) ،  ALE) يستخدم " containers " تحتوي على عملة حقيقية.'
                }, {
                    title: 'القيمة القانونية للعقد الإلكتروني.',
                    description: 'جميع العقود المبرمة في منصة ALE ذات أهمية قانونية بسبب الخضوع للمتطلبات الوطنية للوثائق.'
                }, {
                    title: 'وسائل الدفع المتقلبة وغير المستقره.',
                    description: 'إن العملات المشفره متقلبة ، مما يجعلها طريقة دفع غير مجدية للأعمال الحقيقية. نظام النقد الذي يحمل " containers " يحل هذه المشكلة.'
                }, {
                    title: 'التناقض مع المعايير الوطنية والصناعية.',
                    description: 'يتيح ALE للمستخدمين اختيار قواعد التفاعل داخل منصة ALE. لذلك ، ينبغي للمرء أن يتصرف وفقا لمتطلبات التشريعات والأعمال.'
                }, {
                    title: ' حتمية الوفاء بالالتزامات.',
                    description: 'يتم تنظيم الالتزامات المالية من خلال العقود الذكية ، والتي يتم من خلالها تكوين بيئة موثوق بها.'
                }, {
                    title: 'سلامة وعدم تغيير الوثائق.',
                    description: 'تم تأكيده من خلال التخزين في البلوك شين ، لذلك يتم ضمان المستندات داخل النظام البيئي ALE قانونًا.'
                }]
            }
        },
        features: {
            title: 'السمات المميزة الرئيسية ل ALE',
            list: [{
                title: 'إنشاء توافق الآراء الفوري في ديناميكية  تطوير رغبات المستخدم وتغيير الظروف الاقتصادية.',
                description: ' '
            }, {
                title: 'منتجات بسيطة وبديهية في مسائل التعامل مع البيانات والوظائف والعوامل على مستوى الواجهة التفاعلية.',
                description: ' '
            }, {
                title: 'القضاء على استبدال منظمات التحقق القائمة في العالم بالمشروعية الكاملة للعلاقة على المنصة.',
                description: ' '
            }, {
                title: ' ضمان الالتزامات والتعزيزات المالية للترتيبات متعددة الاطراف ، من خلال تجنب الازدواجية ، وتشجيع  المسؤولية وتجميد كميات كبيرة من السيولة كضمان.',
                description: ' '
            }]
        },
        table: {
            first: {
                desc: ["العقود الذكية متعددة الأطراف",
                    "المشاركون يضعون القواعد",
                    "الامتثال الكامل لغالبية الاختصاصات",
                    "توسيع إمكانيات النظام الاقتصادي القانوني",
                    "الدفع بواسطة صناديق العملة الحقيقية",
                    "إمكانية التحكيم الرسمي"],
            },
            second: {
                title: "منصات بلوك شين الأخرى",
                desc: ["DAO",
                    "قواعد التفاعل محددة سلفا",
                    "المشرعية غير مؤكدة",
                    "تبديل الاقتصاد القانوني",
                    "الدفع عن طريق عملات مشفره غير مستقره",
                    "-"],
            },
            third: {
                desc: ["إدارة المشاريع المشتركة والتمويل وإدارة المقاولات",
                    "طرق عالمية في إدارة المشاريع",
                    "اساليب عالميه لتشفير البيانات الخاصه",
                    "يتم تنظيمها بإجماع المستخدمين",
                    "المدفوعات بدون وسطاء",
                    "الالتزام بالتنفيذ"],
            },
            four: {
                title: "انظمة إدارة المشاريع",
                desc: ["إدارة المشاريع والخدمات المالية من خلال تطبيقات مختلفة",
                    "مقيده بطريقة واحدة",
                    "مقيده بطريقة واحدة أو عدة طرق",
                    "يتم تنظيمها بشكل مركزي",
                    "المدفوعات عن طريق وسطاء",
                    "-"],
            }
        },
        team: {
            title: 'فريقنا',
            serokell: [
                {
                    name: 'Serokell',
                    members: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/seroka@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/seroka/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../static/images/avatars/rukin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arukin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../static/images/avatars/elagin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/kirelagin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            effectiveEnergy: [
                {
                    name: 'Effective Energy',
                    members: [
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Investment Officer',
                            src: '../static/images/avatars/loktev@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/egor-loktev/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../static/images/avatars/gromyko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mikhail-gromyko-a84821162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Associate Professor of the Department of Network and Cloud Technologies, ITMO University',
                            src: '../static/images/avatars/grudinin@3x.png',
                            social: [
                                {
                                    type: 'facebook',
                                    link: 'https://www.facebook.com/vladimir.grudinin.94',
                                    src: '../static/images/fb.svg'
                                }
                            ]
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Executive Director',
                            src: '../static/images/avatars/osipenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksey-osipenko-9a5822162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Anton Beliakov',
                            position: 'Senior Research Manager',
                            src: '../static/images/avatars/beliakov@3x.png',
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../static/images/avatars/elena@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/elenatsymbalyuk/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Ilya Shilov',
                            position: 'Chief Technology Officer',
                            src: '../static/images/avatars/shilov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/ilia-shilov-454a14163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Arseniy Voytenko',
                            position: 'Head of Communications',
                            src: '../static/images/avatars/voytenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arseniy-voitenko-61aa08161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../static/images/avatars/levashow@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/artem-levashov-177015125/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/mrdenzzz/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/galina-sergeeva-628a07161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },

                        {
                            name: 'Sergey Timohin',
                            position: 'Community manager',
                            src: '../static/images/avatars/timohin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/timokhinsergey/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Zhitkov',
                            position: 'Testing Engineer',
                            src: '../static/images/avatars/zhitkov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/evgeniy-zhitkov-670605163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Korobitcyn',
                            position: 'Graphic Designer',
                            src: '../static/images/avatars/korobitsyn@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: 'المستشارين',
            members: [
                {
                    name: 'Phillip Nunn',
                    position: 'advisor',
                    description: 'Entrepreneur, Chief Executive Officer and international speaker on Blockchain, Cryptocurrency and fintech.\n' +
                    'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with substantial ' +
                    'assets under management and a suite of investment products across multiple classes for individuals' +
                    ' and institutions in the UK and overseas.\n' +
                    'With more than 15 years’ experience in financial services, Phillip specialises in wealth management, ' +
                    'angel investment, commercial property investment and financial technology. He founded The Blackmore ' +
                    'Group on the core belief of giving clients real and tangible alternatives to poor investment ' +
                    'performance and providing “future proof” investment strategies.\n' +
                    'Phillip has become a well-known, online influencer in the blockchain and crypto space and has ' +
                    'travelled the world evangelising and talking on these subjects. Phillip has sat on the advisory' +
                    ' boards of many STO\'s over the past 12 months and has helped structure and fund some of the ' +
                    'biggest companies of the future. Along with his business Wealth Chain, Phillip will be launching ' +
                    'his own crypto fund that looks to invest in STO\'s along with existing blockchain technology companies.',
                    src: '../static/images/avatars/nunn@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/phillip-nunn/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/phillipnunn',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Vladimir Nikitin',
                    position: 'advisor',
                    description: 'Vladimir Nikitin is professional and legal consultant with over ten years’ experience' +
                    ' in the legal, finance, retail, and IT industries. Renown cryptocurrency expert and STO advisor ' +
                    '(Top-5 worldwide ICObench Expert). As an active supporter and advocate of blockchain technology, ' +
                    'provide consultancy and advice to selected STOs in the CIS region. Network in the crypto community ' +
                    'counts over 30 000 members. In portfolio: 10 STO projects with more 200 million dollars.',
                    src: '../static/images/avatars/nikitin@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadv/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/vladimir-nikitin',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Nikolay Shkilev',
                    position: 'advisor',
                    description: 'Crypto enthusiast and mentor. Rated Top 5 in People of Blockchain. Has 20 years of ' +
                    'experience in large-scale transaction projects. He has many awards and titles in the IT business. ' +
                    'Self-Made Russia award. Tech guru. Super TOP award etc. Founder and Chief Executive Officer of Private Business Club.' +
                    ' His Holding received "Enterprise of the Year" award in the Kremlin. Has a business in various ' +
                    'directions. Co-Founder "Top STO advisors".',
                    src: '../static/images/avatars/shkilev@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadvisor/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/nikolay-shkilev',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Purushotham Maralappa',
                    position: 'advisor',
                    src: '../static/images/avatars/maralappa@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/purushotham-maralappa/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/purushotham',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                }
            ]
        },
        economy: {
            title: 'اقتصاد الايكو',
            subTitle: 'ALE هو رمز أمان ، والذي يزود المالك بمشاركة أرباح نظام ALE. يعكس البروتوكول شبكة الايثريوم (بروتوكول ERC-20) لتوفير السيولة.',
            STOinfo: {
                emission: {
                    title: 'Maximal supply',
                    amount: "∽211 000 000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "33,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "2,000"
                }
            },
            distribution: {
                title: 'البيع خلال الايكو',
                description: 'Smart-contract ensures safety of investments: full payback to investors if softcap is not reached, team funds are frozen for 1 year. The tokens that are not distributed in the course of STO, shall be liquidated.',
                list: [{
                    title: 'البيع خلال الايكو',
                    amount: 77
                }, {
                    title: 'القياده',
                    amount: 11
                }, {
                    title: 'برنامج الإحالة والمستشارين',
                    amount: 10
                }, {
                    title: 'المكافئه',
                    amount: 2
                }]
            }
        },
        roadmap: {
            title: 'خارطة الطريق',
            stateLabel: 'state',
            stateStatus: {
                deployed: 'deployed',
                implementing: 'implementing',
                review: 'review',
                notNow: 'the stage did not begin'
            },
            stages: [
                {
                    title: 'المبدأ',
                    desk: 'الفكره',
                    date: 'كانون الثاني 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'نشر',
                    status: false
                },
                {
                    title: 'متخصصين ذوي خبره في إدارة المشاريع .تعريف المتطلبا',
                    desk: 'مشاورات مع المتخصصين في إدارة المشاريع من القطاع الحقيقي للاقتصاد .مجموعة من المتطلبات وتحديد المشاكل',
                    date: 'فبراير - مارس 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'نشر',
                    status: false
                },
                {
                    title: 'النمذجة الرياضية',
                    desk: 'مشاورات مع الخبراء الماليين. النمذجة الرياضية بالتعاون مع جامعة ITMO',
                    date: 'أبريل - مايو 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'نشر',
                    status: false
                },
                {
                    title: 'تشكيل الاختصاصات',
                    desk: 'مشاورات مع خبراء ومطوري البلوك شين. تشكيل صورة للمنتج والاختصاصات',
                    date: 'يونيو - يوليو 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'نشر',
                    status: false
                },
                {
                    title: 'الشراكة مع Serokell OU ، بداية التطوير',
                    date: 'أغسطس 2017',
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
                    state: 'تنفيذ',
                    status: false
                },
                {
                    title: 'البيع الأولي',
                    desk: 'تحقيق أكثر من 1،000،000 دولار أمريكي',
                    date: '11/17 - 12/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: 'نشر',
                    status: false
                },
                {
                    title: 'نشر ال MVP',
                    date: 'قد 15, 18',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'نشر',
                    status: false
                },
                {
                    title: 'Bounty',
                    date: '05/25/18 - 05/25/18',
                    progress: 100,
                    state: 'نشر',
                    status: true
                },
                {
                    title: 'PreSTO',
                    date: '05/18 - 06/18',
                    progress: 100,
                    state: 'نشر',
                    status: true
                },
                {
                    title: 'STO',
                    date: '07/18 - 09/18',
                    progress: 0,
                    state: 'تنفيذ',
                    status: false
                },
                {
                    title: 'تطوير الورقه الصفراء',
                    desk: 'الورقة الصفراء - مستند وصف فني للنظام. يوضح السمات الهيكليه لبناء النظام وبروتوكولات التفاعل بين عقد الشبكة(network nodes) والتفاصيل الفنية الأخرى',
                    date: '02/18 - 01/19',
                    progress: 0,
                    state: 'المرحلة لم تبدأ',
                    status: false
                },
                {
                    title: 'اللامركزية لحلول MVP',
                    desk: 'إنشاء إصدار من النظام يتم فيه تنفيذ المكونات التالية: شبكة التناظر. معاملات مخصصة باستخدام الرموز المميزة المدمجه (built-in token)  والرموز الملونة (colored tokens)(الرموز الملونه هو تطبيق متقدم للبلوك شين بت كوين)',
                    date: '01/18 - 02/19',
                    progress: 0,
                    state: 'المرحلة لم تبدأ',
                    status: false
                },
                {
                    title: 'البلوك شين الخاص',
                    desk: 'تطوير بلوك شين خاصة وادماجها في البنية التحتية الموجوده. ضمان عملية دون انقطاع من الوسيط. التسجيل في النسخة المكتملة من النظام بأكمله - باستثناء آلية النزاع (التحكيم).',
                    date: '01/19',
                    progress: 0,
                    state: 'المرحلة لم تبدأ',
                    status: false
                },
                {
                    title: 'تنفيذ نظام التحكيم',
                    desk: 'تحسين نظام التحكيم لحل النزاعات في إطار تطبيق لامركزي',
                    date: '01/19',
                    progress: 0,
                    state: 'المرحلة لم تبدأ',
                    status: false
                },
                {
                    title: 'تنفيذ نظام التصويت من أجل التغييرات',
                    desk: 'نشر مصدر الكود  للنظام والوثائق في مستودعات مفتوحة',
                    date: '01/19',
                    progress: 0,
                    state: 'المرحلة لم تبدأ',
                    status: false
                },
                {
                    title: 'اختبار النظام مغلق',
                    date: '10/19 - 01/20',
                    progress: 0,
                    state: 'المرحلة لم تبدأ',
                    status: false
                },
                {
                    title: 'نشر مصدر الكود  للنظام والمستندات',
                    desk: 'نشر مصدر الكود  للنظام والوثائق في مستودعات مفتوحة',
                    date: '01/20',
                    progress: 0,
                    state: 'المرحلة لم تبدأ',
                    status: false
                },
                {
                    title: 'التمهيد لبدء تشغيل النظام',
                    date: '01/20',
                    progress: 0,
                    state: 'المرحلة لم تبدأ',
                    status: false
                }
            ]
        },
        blog: {
            title: 'مدونة',
            allPostsBtn: 'جميع المشاركات',
            notFound: 'لم يتم العثور على الأخبار'
        },
        footer: {
            left: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            right: {
                input: 'عنوان بريدك الإلكتروني',
                btn: 'اشترك في الأخبار',
                error: 'عنوان غير صحيح',
                success: 'عنوان صحيح'
            },
        },
        download: 'تحميل',
        serverErr: 'خادم حدث خطأ أثناء استرداد قائمة التطبيقات.'
    },
    ko: {
        whiteList: {
            description: 'Dear Sir/Madam, since August, 25 we have limited the open sale of ALEHUB tokens. Enter your email and you will receive an instruction to buy ALEHUB tokens.',
            form: {
                topLabel: {
                    success: 'successful sending',
                    exist: 'this email is already in use',
                    incorrect: 'incorrect email'
                }
            }
        },
        emailSubscribePanel: {
            newsletter: "뉴스 레터 구독",
            yourAddress: "귀하의 이메일 주소",
            subscribe: "구독",
            turnOn: "알림을 켜는 것을 잊지 마세요",
            success: "성공적인 구독",
            alreadyUse: "이 이메일은 이미 사용 중입니다",
            label: {
                success: '성공적인 구독',
                error: '잘못된 이메일',
                exist: '이 이메일은 이미 사용중입니다'
            }
        },
        navbar: {
            home: 'Home',
            menuList: [
                {
                    path: '#home',
                    name: '홈'
                },
                {
                    path: '#mission',
                    name: '사명'
                },
                {
                    path: '#advantages',
                    name: '장점'
                },
                {
                    path: '#features',
                    name: '특징'
                },
                {
                    path: '#team',
                    name: '팀'
                },
                {
                    path: '#ico',
                    name: 'STO'
                },
                {
                    path: '#roadmap',
                    name: '로드맵'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#blog',
                    name: '블로그'
                }
            ],
            pages: [
                {
                    name: 'FAQ',
                    to: '/faq'
                },
                {
                    name: 'White list',
                    to: '/white-list'
                },
                {
                    name: 'Blog page',
                    to: '/blog/categories/all'
                }
            ],
            loginBtn: '로그인',
            blog: '블로그'
        },
        menuModal: {
            selectLang: '언어 선택',
            navigationMenu: '메뉴로 돌아'
        },
        greeting: {
            title: '프로젝트 관리의 새로운 시대가 오고 있습니다',
            countDown: {
                title: 'PreSTO가 시작됩니다.',
                time: {
                    days: '일',
                    hours: '시간',
                    minutes: '분'
                },
                btnBuyTokens: '보',
                bonus: '보너스 25%7 월 2018',
                notAvailable: '지금 이용할 수 없'
            },
            acceptedCrypto: {
                title: '받아들을 위한 컬렉션'
            }
        },
        partners: {
            title: '우리의 파트너',
        },
        about: {
            title: 'Alehub은 무엇인',
            subTitle: 'ALEHUB – 는 프로젝트 관리 및 계약자 검색을 위한 IT 산업을 위한 플랫폼입니다.',
            description: 'ALEHUB은 분산 된 등록 시스템 (블록체인)과 고전적인 프로젝트 관리 서비스의 장점을 결합합니다. 계약자 (고객 및 집행자) 선정, 업무 관리, 통제 및 상호 합의는 IT 전문가 아웃소싱의 안전성, 신뢰성 및 낮은 비용을 보장하는 ALE 시스템의 다자간 스마트 계약에 의해 규제됩니다.',
            btnGroup: {
                whitePaper: '백서',
                techDetails: 'ALE에 대한 추가 정보',
                download: 'Live Demo'
            }
        },
        mission: {
            title: 'Mission & Vision',
            blocks: [
                {
                    title: 'Mission',
                    text: 'ALEHUB brings together best aspects of crypto- and real economy in order to get to a qualitatively new level - composite economy. This means a simple integration of rules and customs of existing industries and segments of global and local economies with the new processing and verification capabilities. So it becomes cheaper, simpler, more reliable and flexible.'
                },
                {
                    title: 'Vision',
                    text: 'Integrating blockchain into the real economy, not substituting it. ALEHUB creates an environment for real business entities to do real business (contracts, finance, management, etc). The main goal is to comply with legislation systems and smoothly integrate into the economy: sector by sector.'
                },
                {
                    title: 'Background',
                    text: 'ALEHUB idea was developed in cooperation with consultants from “Siemens AG” and “Bayer AG”. ALEHUB is being developed with synergy of industry enterprises, former Cardano developers & leading IT specialists. Backed by German companies, ALEHUB is created for real business.'
                }
            ]
        },
        advantages: {
            title: '장점',
            lists: [
                {
                    title: 'ALE vs 프로젝트 관리 시스템'
                },
                {
                    title: 'ALE vs 다른 블록체인 플랫폼'
                }
            ]
        },
        projectEconomy: {
            title: 'Project economy',
            text: '<p>ALE profit is generated from the commission fees charged by the Platform. Note that commissions, ' +
            'their volume and subjects are determined by the consensus of the ALE token holders. When ALE platform will' +
            ' be launched, the tariffs for its users will be: 0,1% for funds withdrawal and 0,1$ for every document' +
            ' published.</p><p>Financial operations are settled using AXEL (ALEHUB eXchange ELement) The exchange rate ' +
            'of this token is pegged to the US dollar rate at the ratio: 1 AXEL ≡ 1 $. AXEL encapsulates the change in' +
            ' the exchange rate. Since the account stores exactly AXEL tokens, user can at any time convert them into' +
            ' any currency at his own choice.</p>'
        },
        alePlatform: {
            title: 'ALE 플랫폼',
            subTitle: 'ALE는 실제 경제와 암호 경제의 이점을 수정하고 결합하여 근본적으로 새로운 생태계, 즉 복합 경제를 창출하는 구조입니다. ALE는 기존 금융 및 법률 구조를 법률에보다 유연하고 합법적으로 재창조하며 대부분의 국가에서 금융 대리인 파악, 개인 데이터 저장, 유동성 제공 및 디지털 지불 수단 합법성에 대한 가치를 인정합니다.',
            watchDemo: '시계모',
            solvingProblems: {
                title: '해결 된 문제',
                list: [{
                    title: '지불의 법적 성격.',
                    description: '상호 합의를 위해 ALE는 실제 통화가 들어있는 "컨테이너"를 사용합니다.'
                }, {
                    title: '전자 계약의 법적 가치.',
                    description: 'ALE 플랫폼 내에서 체결 된 모든 계약은 문서에 대한 국가 요구 사항 준수로 인해 법적으로 유효합니다.'
                }, {
                    title: '매우 불안정한 지불 수단.',
                    description: '암포화폐는 불안정해서 실제 비즈니스에게는 실행할 수 없는 지불 방법입니다. "컨테이너"를 보유한 현금 시스템은 이 문제를 해결합니다.'
                }, {
                    title: '국가 및 산업 표준에 모순.',
                    description: 'ALE는 사용자가 ALE 플랫폼에서 상호 작용 규칙을 선택할 수 있도록 합니다. 그러므로 법률과 비즈니스의 요구 사항에 따라 행동해야 합니다.'
                }, {
                    title: '의무 이행의 필연성.',
                    description: '재정적 의무는 신뢰할 수 있는 환경이 형성되는 스마트 계약에 의해 규제됩니다.'
                }, {
                    title: '문서의 진실성 및 불변성.',
                    description: '블록체인에 저장되어 있으므로 ALE 생태계 내의 문서가 법적으로 보장됩니다.'
                }]
            }
        },
        features: {
            title: 'ALE的主要优势特点',
            list: [{
                title: '사용자 욕구 개발 및 경제 상황 변화의 동력에 대한 즉각적인 합의 형성.',
                description: ' '
            }, {
                title: '상호적인 인터페이스 수준에서 데이터, 기능 및 매개 변수를 처리하는 데있어 간단하고 직관적 인 제품.',
                description: ' '
            }, {
                title: '플랫폼상의 관계의 완전한 정당성을 위해 세계의 기존 검증 기관의 대체를 제거.',
                description: ' '
            }, {
                title: '이중성을 피하고 무책임을 장려하고 담보로 유동성을 과도하게 동결시킴으로써 다자간 약정에 대한 헌신과 재정적 보장을 보장한다.',
                description: ' '
            }]
        },
        table: {
            first: {
                desc: ["다자간 스마트 계약",
                    "참가자가 규칙을 수립",
                    "대부분의 관할 구역을 완벽하게 준수 함",
                    "합법적 인 경제 시스템의 가능성 확대",
                    "실제 통화 컨테이너로 지불",
                    "공식 중재의 가능성"],
            },
            second: {
                title: "다른 블록체인 플랫폼",
                desc: ["DAO",
                    "상호작용 규칙 미리 결청",
                    "불확실한 합법성",
                    "법률 경제의 대체",
                    "매우 불안정한 암호화폐에로 지불",
                    "-"],
            },
            third: {
                desc: ["공동 프로젝트 관리, 재정 및 계약자 관리",
                    "프로젝트 관리 방법의 보편성",
                    "개인 데이터의 암호화 방법의 보편성",
                    "사용자의 합의로 규제",
                    "중개자가 없는 지불",
                    "실행 의무의 임박"],
            },
            four: {
                title: "프로젝트 관리 시스템",
                desc: ["프로젝트 관리, 다양한 애플리케이션을 통한 금융 서비스",
                    "하나의 방법에 묶여있음",
                    "하나 또는 여러 방법에 묶여있음",
                    "중앙 통제",
                    "중개인을 통한 지불",
                    "-"],
            }
        },
        team: {
            title: '팀',
            serokell: [
                {
                    name: 'Serokell',
                    members: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/seroka@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/seroka/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../static/images/avatars/rukin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arukin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../static/images/avatars/elagin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/kirelagin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            effectiveEnergy: [
                {
                    name: 'Effective Energy',
                    members: [
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Investment Officer',
                            src: '../static/images/avatars/loktev@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/egor-loktev/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../static/images/avatars/gromyko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mikhail-gromyko-a84821162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Associate Professor of the Department of Network and Cloud Technologies, ITMO University',
                            src: '../static/images/avatars/grudinin@3x.png',
                            social: [
                                {
                                    type: 'facebook',
                                    link: 'https://www.facebook.com/vladimir.grudinin.94',
                                    src: '../static/images/fb.svg'
                                }
                            ]
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Executive Director',
                            src: '../static/images/avatars/osipenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksey-osipenko-9a5822162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Anton Beliakov',
                            position: 'Senior Research Manager',
                            src: '../static/images/avatars/beliakov@3x.png',
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../static/images/avatars/elena@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/elenatsymbalyuk/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Ilya Shilov',
                            position: 'Chief Technology Officer',
                            src: '../static/images/avatars/shilov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/ilia-shilov-454a14163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Arseniy Voytenko',
                            position: 'Head of Communications',
                            src: '../static/images/avatars/voytenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arseniy-voitenko-61aa08161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../static/images/avatars/levashow@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/artem-levashov-177015125/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/mrdenzzz/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/galina-sergeeva-628a07161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },

                        {
                            name: 'Sergey Timohin',
                            position: 'Community manager',
                            src: '../static/images/avatars/timohin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/timokhinsergey/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Zhitkov',
                            position: 'Testing Engineer',
                            src: '../static/images/avatars/zhitkov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/evgeniy-zhitkov-670605163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Korobitcyn',
                            position: 'Graphic Designer',
                            src: '../static/images/avatars/korobitsyn@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: '문',
            members: [
                {
                    name: 'Phillip Nunn',
                    position: 'advisor',
                    description: 'Entrepreneur, Chief Executive Officer and international speaker on Blockchain, Cryptocurrency and fintech.\n' +
                    'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with substantial ' +
                    'assets under management and a suite of investment products across multiple classes for individuals' +
                    ' and institutions in the UK and overseas.\n' +
                    'With more than 15 years’ experience in financial services, Phillip specialises in wealth management, ' +
                    'angel investment, commercial property investment and financial technology. He founded The Blackmore ' +
                    'Group on the core belief of giving clients real and tangible alternatives to poor investment ' +
                    'performance and providing “future proof” investment strategies.\n' +
                    'Phillip has become a well-known, online influencer in the blockchain and crypto space and has ' +
                    'travelled the world evangelising and talking on these subjects. Phillip has sat on the advisory' +
                    ' boards of many STO\'s over the past 12 months and has helped structure and fund some of the ' +
                    'biggest companies of the future. Along with his business Wealth Chain, Phillip will be launching ' +
                    'his own crypto fund that looks to invest in STO\'s along with existing blockchain technology companies.',
                    src: '../static/images/avatars/nunn@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/phillip-nunn/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/phillipnunn',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Vladimir Nikitin',
                    position: 'advisor',
                    description: 'Vladimir Nikitin is professional and legal consultant with over ten years’ experience' +
                    ' in the legal, finance, retail, and IT industries. Renown cryptocurrency expert and STO advisor ' +
                    '(Top-5 worldwide ICObench Expert). As an active supporter and advocate of blockchain technology, ' +
                    'provide consultancy and advice to selected STOs in the CIS region. Network in the crypto community ' +
                    'counts over 30 000 members. In portfolio: 10 STO projects with more 200 million dollars.',
                    src: '../static/images/avatars/nikitin@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadv/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/vladimir-nikitin',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Nikolay Shkilev',
                    position: 'advisor',
                    description: 'Crypto enthusiast and mentor. Rated Top 5 in People of Blockchain. Has 20 years of ' +
                    'experience in large-scale transaction projects. He has many awards and titles in the IT business. ' +
                    'Self-Made Russia award. Tech guru. Super TOP award etc. Founder and Chief Executive Officer of Private Business Club.' +
                    ' His Holding received "Enterprise of the Year" award in the Kremlin. Has a business in various ' +
                    'directions. Co-Founder "Top STO advisors".',
                    src: '../static/images/avatars/shkilev@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadvisor/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/nikolay-shkilev',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Purushotham Maralappa',
                    position: 'advisor',
                    src: '../static/images/avatars/maralappa@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/purushotham-maralappa/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/purushotham',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                }
            ]
        },
        economy: {
            title: 'STO 경제',
            subTitle: 'ALE는 소유자에게 ALE 시스템 이익 분배를 제공하는 보안 토큰입니다. 이 프로토콜은 이더리움 (Ethereum) 네트워크 (ERC-20 프로토콜)를 반영하여 유동성을 제공합니다.',
            STOinfo: {
                emission: {
                    title: 'Maximal supply',
                    amount: "∽211 000 000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "33,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "2,000"
                }
            },
            distribution: {
                title: 'Sale during the STO',
                description: 'Smart-contract ensures safety of investments: full payback to investors if softcap is not reached, team funds are frozen for 1 year. The tokens that are not distributed in the course of STO, shall be liquidated.',
                list: [{
                    title: 'STO 기간 중 판매',
                    amount: 77
                }, {
                    title: '명령',
                    amount: 11
                }, {
                    title: '추천 프로그램 및 고문',
                    amount: 10
                }, {
                    title: '바운티 (Bounty)',
                    amount: 2
                }]
            }
        },
        roadmap: {
            title: '로드맵',
            stateLabel: 'state',
            stateStatus: {
                deployed: 'deployed',
                implementing: 'implementing',
                review: 'review',
                notNow: 'the stage did not begin'
            },
            stages: [
                {
                    title: '구상',
                    desk: '아이디어',
                    date: '01/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: '배포',
                    status: false
                },
                {
                    title: '프로젝트 관리 전문가. 요구 사항 정의',
                    desk: '실제 경제 부문의 프로젝트 관리 전문가와의 상담. 요구 사항 수집 및 정의 문제',
                    date: '02/17 - 03/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: '배포',
                    status: false
                },
                {
                    title: '수학적 모델링',
                    desk: '금융 전문가와의 상담. ITMO 대학과 협력하여 수학적 모델링',
                    date: '04/17 - 05/17',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: '배포',
                    status: false
                },
                {
                    title: '참조 조건의 형성',
                    desk: '블록 체인 전문가 및 개발자와의 상담. 제품 이미지 및 참조 조건 구성',
                    date: '06/17 - 07/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: '배포',
                    status: false
                },
                {
                    title: 'Serokell OU와의 파트너십, 개발 시작',
                    date: '01/08/17',
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
                    state: '구현',
                    status: false
                },
                {
                    title: '선판매 (Pre-Sale)',
                    desk: '1,000,000 USD 이상 판매',
                    date: '11/17 - 12/17',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: '배포',
                    status: false
                },
                {
                    title: 'MVP 게시',
                    date: '05/18',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: '배포',
                    status: false
                },
                {
                    title: 'Bounty',
                    date: '05/25/18 - 05/25/18',
                    progress: 100,
                    state: '배포',
                    status: true
                },
                {
                    title: 'PreSTO',
                    date: '05/18 - 06/18',
                    progress: 100,
                    state: '배포',
                    status: true
                },
                {
                    title: 'STO',
                    date: '07/18 - 09/18',
                    progress: 5,
                    state: '구현',
                    status: false
                },
                {
                    title: '황색언론 개발',
                    desk: '황색언론– 시스탬의 기술 문서. 이 문서는 시스템 구성의 건축학적 특징, 네트워크 노드 간의 상호 작용 프로토콜 및 기타 기술적 세부 사항을 설명합니다.',
                    date: '02/18 - 01/19',
                    progress: 0,
                    state: '단계를 시작하지 않았',
                    status: false
                },
                {
                    title: 'MVP 솔루션의 분산화',
                    desk: '다음 구성 요소가 구현 된 시스템 버전 구축 : 대등접속 네트워크;내장형 토큰 및 컬러 토큰을 사용하는 사용자 정의 거래;',
                    date: '01/18 - 02/19',
                    progress: 0,
                    state: '단계를 시작하지 않았',
                    status: false
                },
                {
                    title: '개인적인 블록체인',
                    desk: '개인 블록 체인 개발 및 기존 인프라에 대한 통합. 오라클의 중단 없는 운영 보장. 분쟁의 메커니즘 (중재)을 제외하고 전체 시스템의 완성 된 버전에 등록.',
                    date: '01/19',
                    progress: 0,
                    state: '단계를 시작하지 않았',
                    status: false
                },
                {
                    title: '분쟁 해결 시스템 구현',
                    desk: '분산 된 응용 프로그램의 프레임 워크 내에서 충돌을 해결하기 위해 분쟁 시스템을 개선.',
                    date: '01/19',
                    progress: 0,
                    state: '단계를 시작하지 않았',
                    status: false
                },
                {
                    title: '변경을 위한 투표 시스템의 구현',
                    desk: '시간이 지남에 따라 시스템의 변동성을 보장하기 위해 시스템을 수정.',
                    date: '01/19',
                    progress: 0,
                    state: '단계를 시작하지 않았',
                    status: false
                },
                {
                    title: '폐쇄 시스템 테스트',
                    date: '10/19 - 01/20',
                    progress: 0,
                    state: '단계를 시작하지 않았',
                    status: false
                },
                {
                    title: '시스템 및 문서의 소스 코드 공개',
                    desk: '시스템 및 문서의 소스 코드를 공개 저장소에 게시',
                    date: '01/20',
                    progress: 0,
                    state: '단계를 시작하지 않았',
                    status: false
                },
                {
                    title: '시스템 부팅',
                    date: '01/20',
                    progress: 0,
                    state: '단계를 시작하지 않았',
                    status: false
                }
            ]
        },
        blog: {
            title: '블로그',
            allPostsBtn: '모든 게시물',
            notFound: '뉴스 발견되지 않았'
        },
        footer: {
            left: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            right: {
                input: '이메일 주소',
                btn: '가입 뉴스',
                error: '잘못된 주소',
                success: '올바른 주소'
            },
        },
        download: '다운로드',
        serverErr: '서버 오류가 발생했을 검색하는 동안 이 응용 프로그램의 목록이 있습니다.'
    },
    es: {
        whiteList: {
            description: 'Dear Sir/Madam, since August, 25 we have limited the open sale of ALEHUB tokens. Enter your email and you will receive an instruction to buy ALEHUB tokens.',
            form: {
                topLabel: {
                    success: 'successful sending',
                    exist: 'this email is already in use',
                    incorrect: 'incorrect email'
                }
            }
        },
        emailSubscribePanel: {
            newsletter: 'Suscríbete a nuestro boletín informativo',
            yourAddress: 'Su dirección de correo electrónSTO',
            subscribe: 'Suscribir',
            turnOn: 'Y no olvides activar las notificaciones',
            success: 'suscripción exitosa',
            alreadyUse: 'este correo electrónSTO ya está en uso',
            label: {
                success: 'suscripción exitosa',
                error: 'email incorrecto',
                exist: 'este correo electrónSTO ya está en uso'
            }
        },
        navbar: {
            home: 'Home',
            menuList: [
                {
                    path: '#home',
                    name: 'Casa'
                },
                {
                    path: '#mission',
                    name: 'Misión'
                },
                {
                    path: '#advantages',
                    name: 'Ventajas'
                },
                {
                    path: '#features',
                    name: 'Características'
                },
                {
                    path: '#team',
                    name: 'Equipo'
                },
                {
                    path: '#ico',
                    name: 'STO'
                },
                {
                    path: '#roadmap',
                    name: 'Hoja de ruta'
                },
                {
                    path: '#download-application',
                    name: 'MVP'
                },
                {
                    path: '#mass-media-sections',
                    name: 'Medios de comunicación'
                },
                {
                    path: '#blog',
                    name: 'Blog'
                }
            ],
            pages: [
                {
                    name: 'FAQ',
                    to: '/faq'
                },
                {
                    name: 'White list',
                    to: '/white-list'
                },
                {
                    name: 'Blog page',
                    to: '/blog/categories/all'
                }
            ],
            loginBtn: 'Registro en',
            blog: 'Blog'
        },
        menuModal: {
            selectLang: 'Seleccionar idioma',
            navigationMenu: 'Regresar al menú'
        },
        greeting: {
            title: 'La nueva era de la gestión de proyectos está llegando',
            countDown: {
                title: 'PreSTO comenzará',
                time: {
                    days: 'Días',
                    hours: 'Horas',
                    minutes: 'Minutos'
                },
                btnBuyTokens: 'Comprar fichas',
                bonus: '25% de bonificación de hasta el 25 de junio de 2018',
                notAvailable: 'Ahora no está disponible'
            },
            acceptedCrypto: {
                title: 'Aceptado para su colección'
            }
        },
        partners: {
            title: 'Nuestros socios',
        },
        about: {
            title: 'Cuál es el Eje de concentradores',
            subTitle: 'ALEHUB – es una plataforma para la gestión de proyectos y la búsqueda de contratistas para la industria de TI.',
            description: 'ALEHUB combina las ventajas del sistema de registros distribuidos (blockchain) y los servicios clásSTOs de gestión de proyectos. La selección de contratistas (clientes y ejecutores), la gestión de su trabajo, el control y los acuerdos mutuos, regulados por los contratos inteligentes multilaterales del sistema ALE, garantizan la seguridad, la fiabilidad y los bajos costos de la subcontratación de profesionales de TI.',
            btnGroup: {
                whitePaper: 'Libro Blanco',
                techDetails: 'Más información sobre ALE',
                download: 'Live Demo'
            }
        },
        mission: {
            title: 'Mission & Vision',
            blocks: [
                {
                    title: 'Mission',
                    text: 'ALEHUB brings together best aspects of crypto- and real economy in order to get to a qualitatively new level - composite economy. This means a simple integration of rules and customs of existing industries and segments of global and local economies with the new processing and verification capabilities. So it becomes cheaper, simpler, more reliable and flexible.'
                },
                {
                    title: 'Vision',
                    text: 'Integrating blockchain into the real economy, not substituting it. ALEHUB creates an environment for real business entities to do real business (contracts, finance, management, etc). The main goal is to comply with legislation systems and smoothly integrate into the economy: sector by sector.'
                },
                {
                    title: 'Background',
                    text: 'ALEHUB idea was developed in cooperation with consultants from “Siemens AG” and “Bayer AG”. ALEHUB is being developed with synergy of industry enterprises, former Cardano developers & leading IT specialists. Backed by German companies, ALEHUB is created for real business.'
                }
            ]
        },
        advantages: {
            title: 'ALE Ventajas',
            lists: [
                {
                    title: 'ALE vs sistemas de gestión de proyectos'
                },
                {
                    title: 'ALE vs otras plataformas blockchain'
                }
            ]
        },
        projectEconomy: {
            title: 'Project economy',
            text: '<p>ALE profit is generated from the commission fees charged by the Platform. Note that commissions, ' +
            'their volume and subjects are determined by the consensus of the ALE token holders. When ALE platform will' +
            ' be launched, the tariffs for its users will be: 0,1% for funds withdrawal and 0,1$ for every document' +
            ' published.</p><p>Financial operations are settled using AXEL (ALEHUB eXchange ELement) The exchange rate ' +
            'of this token is pegged to the US dollar rate at the ratio: 1 AXEL ≡ 1 $. AXEL encapsulates the change in' +
            ' the exchange rate. Since the account stores exactly AXEL tokens, user can at any time convert them into' +
            ' any currency at his own choice.</p>'
        },
        alePlatform: {
            title: 'Plataforma ALE ',
            subTitle: 'ALE es un ecosistema que modifica y combina las ventajas de una economía real y criptográfica para crear un entorno fundamentalmente nuevo: la economía compuesta. ALE flexibiliza la estructura financiera y legal existente, en línea con las leyes y valores reconocidos de la mayoría de los países en la identificación de agentes financieros, el almacenamiento de datos privados, la liquidez y la legalidad de los medios de pago digitales.',
            watchDemo: 'Ver demo',
            solvingProblems: {
                title: 'Problema resueltos ',
                list: [{
                    title: 'La naturaleza legal del pago.',
                    description: 'Para acuerdos mutuos, ALE utiliza "contenedores" que contienen moneda real.'
                }, {
                    title: 'Valor legal del contrato electrónSTO.',
                    description: 'Todos los contratos celebrados dentro de la plataforma ALE son legalmente significativos debido al cumplimiento de los requisitos nacionales para los documentos.'
                }, {
                    title: 'Alta volatilidad de los medios de pago.',
                    description: 'Las criptomonedas son volátiles, por lo que ninguna de ellas puede ser un medio de pago para negocios reales. El sistema de "contenedores" de efectivo resuelve este problema.'
                }, {
                    title: 'Contradicción de estándares nacionales e industriales. ',
                    description: 'ALE permite a los usuarios elegir las reglas de interacción dentro de la plataforma ALE. Por lo tanto, actúe de acuerdo con los requisitos de la legislación y los negocios.'
                }, {
                    title: 'La inevitabilidad de cumplir obligaciones.',
                    description: 'Las obligaciones financieras están reguladas por contratos inteligentes, a través de los cuales se forma un entorno confiable.'
                }, {
                    title: 'Integridad e incambiabilidad de la documentación.',
                    description: 'Confirmado por el almacenamiento en blockchain, por lo que los documentos dentro del ecosistema ALE son una garantía legal.'
                }]
            }
        },
        features: {
            title: 'Las principales características distintivas de ALE',
            list: [{
                title: 'Establecimiento de consenso rápidamente. En la dinámica del desarrollo del deseo de los usuarios y las cambiantes condiciones económicas',
                description: ' '
            }, {
                title: 'Productos simples e intuitivos. En materia de manejo de datos, funciones y parámetros a nivel de la interfaz interactiva',
                description: ' '
            }, {
                title: 'Eliminar la sustitución de organizaciones de verificación existentes en el mundo. Por la plena legitimidad de la relación en la plataforma.',
                description: ' '
            }, {
                title: 'Compromiso y refuerzo financiero de acuerdos multipartidistas. Evitar la dualidad, fomentar la irresponsabilidad y congelar cantidades desproporcionadas de liquidez como garantía.',
                description: ' '
            }]
        },
        table: {
            first: {
                desc: ["Contratos inteligentes multilaterals ",
                    "Los participantes establecen las reglas ",
                    "Cumplimiento total con la mayoría de las jurisdicciones",
                    "Expansión de las posibilidades de un sistema económSTO legal",
                    "Pago por contenedor de moneda real",
                    "Posibilidad de arbitraje formal"],
            },
            second: {
                title: "Otras plataformas blockchain",
                desc: ["DAO",
                    "Las reglas de interacción están predeterminadas",
                    "Incierta legitimidad",
                    "Sustitución de economía legal",
                    "Pago por criptomoneda de alta volatilidad",
                    "-"],
            },
            third: {
                desc: ["Administración conjunta de proyectos, finanzas y administración de contratistas",
                    "Universalismo de las metodologías de gestión de proyectos",
                    "Universalidad de métodos cifrado de datos privados",
                    "Regulado por consenso de los usuarios",
                    "Pagos sin intermediarios",
                    "La inminencia de las obligaciones de ejecución"],
            },
            four: {
                title: "Sistemas de gestion de proyectos",
                desc: ["Gestión de proyectos, servicios financieros a través de diferentes aplicaciones",
                    "Unión a un método ",
                    "Unión a uno a varios métodos",
                    "Centralmente regulado",
                    "Pagos a través de intermediarios",
                    "-"],
            }
        },
        team: {
            title: 'Nuestro equipo',
            serokell: [
                {
                    name: 'Serokell',
                    members: [
                        {
                            name: 'Arseniy Seroka',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/seroka@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/seroka/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'John Mostovoy',
                            position: 'Lead Serokell Developer',
                            src: '../static/images/avatars/mostovoy@3x.png'
                        },
                        {
                            name: 'Alexander Rukin',
                            position: 'UI/UX Designer',
                            src: '../static/images/avatars/rukin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arukin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Kirill Elagin',
                            position: 'Backend Engineer',
                            src: '../static/images/avatars/elagin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/kirelagin/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            effectiveEnergy: [
                {
                    name: 'Effective Energy',
                    members: [
                        {
                            name: 'Egor Loktev',
                            position: 'Chief Investment Officer',
                            src: '../static/images/avatars/loktev@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/egor-loktev/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Mikhail Gromyko',
                            position: 'Chief Executive Officer',
                            src: '../static/images/avatars/gromyko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/mikhail-gromyko-a84821162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vladimir Grudinin',
                            position: 'Associate Professor of the Department of Network and Cloud Technologies, ITMO University',
                            src: '../static/images/avatars/grudinin@3x.png',
                            social: [
                                {
                                    type: 'facebook',
                                    link: 'https://www.facebook.com/vladimir.grudinin.94',
                                    src: '../static/images/fb.svg'
                                }
                            ]
                        },
                        {
                            name: 'Alexej Osipenko',
                            position: 'Executive Director',
                            src: '../static/images/avatars/osipenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/aleksey-osipenko-9a5822162/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Anton Beliakov',
                            position: 'Senior Research Manager',
                            src: '../static/images/avatars/beliakov@3x.png',
                        },
                        {
                            name: 'Elena Tsymbalyuk',
                            position: 'Head of Marketing Operations',
                            src: '../static/images/avatars/elena@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/elenatsymbalyuk/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Ilya Shilov',
                            position: 'Chief Technology Officer',
                            src: '../static/images/avatars/shilov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/ilia-shilov-454a14163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Arseniy Voytenko',
                            position: 'Head of Communications',
                            src: '../static/images/avatars/voytenko@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/arseniy-voitenko-61aa08161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Artem Levashov',
                            position: 'Chief Legal Officer',
                            src: '../static/images/avatars/levashow@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/artem-levashov-177015125/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Vadim Dudin',
                            position: 'Fullstack Developer',
                            src: '../static/images/avatars/dudin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/vadim-dudin-869493106/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/aleksandr-vorontsov-419851161/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/mrdenzzz/',
                                    src: '../static/images/in.svg'
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
                                    link: 'https://www.linkedin.com/in/galina-sergeeva-628a07161/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },

                        {
                            name: 'Sergey Timohin',
                            position: 'Community manager',
                            src: '../static/images/avatars/timohin@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/timokhinsergey/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },


                        {
                            name: 'Evgeniy Zhitkov',
                            position: 'Testing Engineer',
                            src: '../static/images/avatars/zhitkov@3x.png',
                            social: [
                                {
                                    type: 'linkedin',
                                    link: 'https://www.linkedin.com/in/evgeniy-zhitkov-670605163/',
                                    src: '../static/images/in.svg'
                                }
                            ]
                        },
                        {
                            name: 'Evgeniy Korobitcyn',
                            position: 'Graphic Designer',
                            src: '../static/images/avatars/korobitsyn@3x.png'
                        }
                    ]
                }
            ]
        },
        advisors: {
            title: 'Advisors',
            members: [
                {
                    name: 'Phillip Nunn',
                    position: 'advisor',
                    description: 'Entrepreneur, Chief Executive Officer and international speaker on Blockchain, Cryptocurrency and fintech.\n' +
                    'Phillip Nunn founded The Blackmore Group in 2013. Today it’s grown into a business with substantial ' +
                    'assets under management and a suite of investment products across multiple classes for individuals' +
                    ' and institutions in the UK and overseas.\n' +
                    'With more than 15 years’ experience in financial services, Phillip specialises in wealth management, ' +
                    'angel investment, commercial property investment and financial technology. He founded The Blackmore ' +
                    'Group on the core belief of giving clients real and tangible alternatives to poor investment ' +
                    'performance and providing “future proof” investment strategies.\n' +
                    'Phillip has become a well-known, online influencer in the blockchain and crypto space and has ' +
                    'travelled the world evangelising and talking on these subjects. Phillip has sat on the advisory' +
                    ' boards of many STO\'s over the past 12 months and has helped structure and fund some of the ' +
                    'biggest companies of the future. Along with his business Wealth Chain, Phillip will be launching ' +
                    'his own crypto fund that looks to invest in STO\'s along with existing blockchain technology companies.',
                    src: '../static/images/avatars/nunn@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/phillip-nunn/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/phillipnunn',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Vladimir Nikitin',
                    position: 'advisor',
                    description: 'Vladimir Nikitin is professional and legal consultant with over ten years’ experience' +
                    ' in the legal, finance, retail, and IT industries. Renown cryptocurrency expert and STO advisor ' +
                    '(Top-5 worldwide ICObench Expert). As an active supporter and advocate of blockchain technology, ' +
                    'provide consultancy and advice to selected STOs in the CIS region. Network in the crypto community ' +
                    'counts over 30 000 members. In portfolio: 10 STO projects with more 200 million dollars.',
                    src: '../static/images/avatars/nikitin@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadv/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/vladimir-nikitin',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Nikolay Shkilev',
                    position: 'advisor',
                    description: 'Crypto enthusiast and mentor. Rated Top 5 in People of Blockchain. Has 20 years of ' +
                    'experience in large-scale transaction projects. He has many awards and titles in the IT business. ' +
                    'Self-Made Russia award. Tech guru. Super TOP award etc. Founder and Chief Executive Officer of Private Business Club.' +
                    ' His Holding received "Enterprise of the Year" award in the Kremlin. Has a business in various ' +
                    'directions. Co-Founder "Top STO advisors".',
                    src: '../static/images/avatars/shkilev@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/STOadvisor/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/nikolay-shkilev',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                },
                {
                    name: 'Purushotham Maralappa',
                    position: 'advisor',
                    src: '../static/images/avatars/maralappa@3x.png',
                    social: [
                        {
                            type: 'linkedin',
                            link: 'https://www.linkedin.com/in/purushotham-maralappa/',
                            src: '../static/images/in.svg'
                        },
                        {
                            type: 'ICObench',
                            link: 'https://ICObench.com/u/purushotham',
                            src: '../static/images/icobench-ic.svg'
                        }
                    ]
                }
            ]
        },
        economy: {
            title: 'Economía de STO',
            subTitle: 'ALE es un token de seguridad, que proporciona al propietario el porcentaje de ganancia del sistema ALE. El protocolo está reflejado en la red Ethereum (protocolo ERC-20) para proporcionar liquidez.',
            STOinfo: {
                emission: {
                    title: 'Maximal supply',
                    amount: "∽211 000 000"
                },
                hardCap: {
                    title: 'Hardcap',
                    amount: "33,000"
                },
                softCap: {
                    title: 'Softcap',
                    amount: "2,000"
                }
            },
            distribution: {
                title: 'Sale during the STO',
                description: 'Smart-contract ensures safety of investments: full payback to investors if softcap is not reached, team funds are frozen for 1 year. The tokens that are not distributed in the course of STO, shall be liquidated.',
                list: [{
                    title: 'Venta durante el STO',
                    amount: 77
                }, {
                    title: 'Mando',
                    amount: 11
                }, {
                    title: 'Programa de referencia y asesores',
                    amount: 10
                }, {
                    title: 'Bounty',
                    amount: 2
                }]
            }
        },
        roadmap: {
            title: 'Hoja de ruta',
            stateLabel: 'state',
            stateStatus: {
                deployed: 'deployed',
                implementing: 'implementing',
                review: 'review',
                notNow: 'the stage did not begin'
            },
            stages: [
                {
                    title: 'Concepción',
                    desk: 'La idea',
                    date: 'De enero de 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png'
                    ],
                    progress: 100,
                    state: 'desplegado',
                    status: false
                },
                {
                    title: 'Experiencia de especialistas en gestión de proyectos. Definición de requisitos',
                    desk: 'Consultas con especialistas en gestión de proyectos del sector real de la economía. Recopilación de requisitos y definición de problemas',
                    date: 'Febrero - Marzo De 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'desplegado',
                    status: false
                },
                {
                    title: 'Modelado matemátSTO',
                    desk: 'Consultas con expertos financieros. Modelado matemátSTO en cooperación con la Universidad de ITMO',
                    date: 'Abril - Mayo De 2017',
                    members: [
                        '../static/images/avatars/grudinin@3x.png'
                    ],
                    progress: 100,
                    state: 'desplegado',
                    status: false
                },
                {
                    title: 'Formación de los Términos de Referencia',
                    desk: 'Consultas con expertos y desarrolladores de blockchain. Formando una imagen de un producto y los términos de referencia',
                    date: 'Junio - Julio De 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'desplegado',
                    status: false
                },
                {
                    title: 'Asociación con Serokell OU, inicio del desarrollo',
                    date: 'De agosto de 2017',
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
                    state: 'implementar',
                    status: false
                },
                {
                    title: 'Preventa',
                    desk: 'Recaudación de más de 1,000,000 de USD',
                    date: 'Noviembre - Diciembre De 2017',
                    members: [
                        '../static/images/avatars/gromyko@3x.png',
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png',
                        '../static/images/avatars/levashow@3x.png'
                    ],
                    progress: 100,
                    state: 'desplegado',
                    status: false
                },
                {
                    title: 'Publicación MVP',
                    date: 'El 15 de mayo de 2018',
                    members: [
                        '../static/images/avatars/osipenko@3x.png',
                        '../static/images/avatars/loktev@3x.png'
                    ],
                    progress: 100,
                    state: 'desplegado',
                    status: false
                },
                {
                    title: 'Bounty',
                    date: '05/25/18 - 05/25/18',
                    progress: 80,
                    state: 'el escenario comenzó',
                    status: true
                },
                {
                    title: 'PreSTO',
                    date: '05/18 - 06/18',
                    progress: 5,
                    state: 'el escenario comenzó',
                    status: true
                },
                {
                    title: 'STO',
                    date: '07/18 - 09/18',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Desarrollo de Yellow Paper',
                    desk: 'Yellow Paper – descripción técnica del sistema. El documento considera las características arquitectónicas de la construcción del sistema, los protocolos de interacción entre los nodos de la red y otros detalles técnSTOs.',
                    date: '02/18 - 01/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Descentralización de las soluciones MVP',
                    desk: 'Crear una versión del sistema en la que se implementan los siguientes componentes: Red de peering; Transacciones personalizadas usando el token incorporado y tokens de color;',
                    date: '01/18 - 02/19',
                    progress: 0,
                    state: 'el escenario no pudo comenzar',
                    status: false
                },
                {
                    title: 'Blockchains privadas',
                    desk: 'Desarrollo de blockchains privados y su integración en la infraestructura existente. Garantizar la operación ininterrumpida de los oráculos. Registro en la versión completa de todo el sistema, a excepción del mecanismo de disputa (arbitraje).',
                    date: '01/19',
                    progress: 0,
                    state: 'the stage did not begin',
                    status: false
                },
                {
                    title: 'Implementación del sistema de disputas',
                    desk: 'Mejora del sistema de disputas para resolver conflictos en el marco de una aplicación descentralizada.',
                    date: '01/19',
                    progress: 0,
                    state: 'el escenario no pudo comenzar',
                    status: false
                },
                {
                    title: 'Implementación del sistema de votación para cambios',
                    desk: 'Modificar el sistema para garantizar su variabilidad a lo largo del tiempo.',
                    date: '01/19',
                    progress: 0,
                    state: 'el escenario no pudo comenzar',
                    status: false
                },
                {
                    title: 'Sistema cerrado de pruebas',
                    date: '10/19 - 01/20',
                    progress: 0,
                    state: 'el escenario no pudo comenzar',
                    status: false
                },
                {
                    title: 'Publicación del código fuente del sistema y documentación',
                    desk: 'Publicación del código fuente del sistema y la documentación en repositorios abiertos',
                    date: '01/20',
                    progress: 0,
                    state: 'el escenario no pudo comenzar',
                    status: false
                },
                {
                    title: 'Iniciando el sistema',
                    date: '01/20',
                    progress: 0,
                    state: 'el escenario no pudo comenzar',
                    status: false
                }
            ]
        },
        blog: {
            title: 'Blog',
            allPostsBtn: 'Todos los puestos',
            notFound: 'Las noticias no se encuentra'
        },
        footer: {
            left: {
                copyright: 'Effective Energy LLC © 2018 All rights reserved.',
                designBy: 'Design by Alexander Rukin and ledesign',
                terms: 'Terms and conditions'
            },
            right: {
                input: 'Su dirección de correo electrónSTO',
                btn: 'Suscribirse a noticias',
                error: 'la dirección incorrecta',
                success: 'dirección correcta'
            },
        },
        download: 'Descargar',
        serverErr: 'Un servidor de error al recuperar la lista de aplicaciones.'
    },
};

export default messages;