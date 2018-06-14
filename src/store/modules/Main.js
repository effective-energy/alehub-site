import axios from 'axios';


const state = {
    cryptoPriceStatus: '',
    downloadAppStatus: '',
    blogStatus: '',
    hardCap: 33000000,
    softCap: 7500000,
    collected: 1250000,
    cryptocurrencies: '',
    apps: '',
    blogAll: '',
    blog: ''
};

const actions = {
    cryptoPriceRequest: ({commit}) => {
        return new Promise((resolve, reject) => {
            commit('REQUEST_CRYPTO_PRICE');
            let host = 'https://sale.alehub.io/api/widget';
            axios({
                url: host,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                },
                method: 'GET'
            }).then(resp => {
                console.log(resp.data.round.ico);
                console.log(resp.data.round.ico['BTC'].value);
                commit('SUCCESS_CRYPTO_PRICE', resp.data.round.ico);
                resolve(resp);
            }).catch(err => {
                commit('ERROR_CRYPTO_PRICE', err);
                reject(err);
            });
        });
    },
    downloadAppRequest: ({commit}) => {
        return new Promise((resolve, reject) => {
            commit('REQUEST_DOWNLOAD_APP');
            let host = 'https://alehub-4550.nodechef.com/ale-version';
            axios({
                url: host,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                },
                method: 'GET'
            }).then(resp => {
                commit('SUCCESS_DOWNLOAD_APP', resp.data);
                resolve(resp);
            }).catch(err => {
                commit('ERROR_DOWNLOAD_APP', err);
                reject(err);
            });
        })
    },
    blogRequest: ({commit}) => {
        return new Promise((resolve, reject) => {
            commit('REQUEST_BLOG');
            let host = 'https://alehub-4550.nodechef.com/ale-news';
            axios({
                url: host,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                },
                method: 'GET'
            }).then(resp => {
                commit('SUCCESS_BLOG', resp.data);
                resolve(resp);
            }).catch(err => {
                commit('ERROR_BLOG', err);
                reject(err);
            });
        })
    },
};

const mutations = {
    REQUEST_CRYPTO_PRICE: (state) => {
        state.cryptoPriceStatus = 'loading';
    },
    SUCCESS_CRYPTO_PRICE: (state, cryptocurrencies) => {
        console.log(cryptocurrencies);
        state.cryptoPriceStatus = 'success';
        state.cryptocurrencies = cryptocurrencies;
        console.log(state.cryptocurrencies);
    },
    ERROR_CRYPTO_PRICE: (state) => {
        state.cryptoPriceStatus = 'error';
    },
    REQUEST_DOWNLOAD_APP: (state) => {
        state.downloadAppStatus = 'loading';
    },
    SUCCESS_DOWNLOAD_APP: (state, apps) => {
        state.downloadAppStatus = 'success';
        state.apps = apps;
    },
    ERROR_DOWNLOAD_APP: (state) => {
        state.downloadAppStatus = 'error';
    },
    REQUEST_BLOG: (state) => {
        state.blogStatus = 'loading';
    },
    SUCCESS_BLOG: (state, blog) => {
        state.blogStatus = 'success';
        state.blogAll = blog.reverse();
    },
    ERROR_BLOG: (state) => {
        state.blogStatus = 'error';
    },
};

const getters = {
    cryptocurrencies: state => {
        let currencies = {
            btc: {
                src: '../../static/images/btc.svg',
                alt: 'bitcoin',
                count: 0,
                name: 'btc'
            },
            eth: {
                src: '../../static/images/eth.svg',
                alt: 'etherium',
                count: 0,
                name: 'eth'
            },
            bch: {
                src: '../../static/images/bch.svg',
                alt: 'bitcoin cash',
                count: 0,
                name: 'bch'
            },
            ltc: {
                src: '../../static/images/ltc.svg',
                alt: 'litecoin',
                count: 0,
                name: 'ltc'
            },
            dash: {
                src: '../../static/images/dash.svg',
                alt: 'dash',
                count: 0,
                name: 'dash'
            },
            usd: {
                src: '../../static/images/usd.svg',
                alt: 'usd',
                count: 0,
                name: 'usd',
                collected: 1250000,
                softCap: 7500000,
                hardCap: 33000000
            }
        };

        currencies.btc.count = state.cryptocurrencies['BTC'].value;
        currencies.eth.count = state.cryptocurrencies['ETH'].value;
        currencies.bch.count = state.cryptocurrencies['BCH'].value;
        currencies.ltc.count = state.cryptocurrencies['LTC'].value;
        currencies.dash.count = state.cryptocurrencies['DASH'].value;
        currencies.usd.count = state.cryptocurrencies['USD'].value;

        return currencies;
        // btc: {
        //     hardCap: null,
        //     softCap: null,
        //     collected: null
        // },
        // eth: {
        //     hardCap: null,
        //     softCap: null,
        //     collected: null
        // },
        // bch: {
        //     hardCap: null,
        //     softCap: null,
        //     collected: null
        // },
        // ltc: {
        //     hardCap: null,
        //     softCap: null,
        //     collected: null
        // },
        // dash: {
        //     hardCap: null,
        //     softCap: null,
        //     collected: null
        // }
        // }

        // currencies.btc.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[0].price / state.cryptocurrencies[1].price));
        // currencies.eth.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price);
        // currencies.bch.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[2].price / state.cryptocurrencies[1].price));
        // currencies.ltc.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[3].price / state.cryptocurrencies[1].price));
        // currencies.dash.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[4].price / state.cryptocurrencies[1].price));
        //
        // currencies.btc.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[0].price / state.cryptocurrencies[1].price));
        // currencies.eth.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price);
        // currencies.bch.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[2].price / state.cryptocurrencies[1].price));
        // currencies.ltc.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[3].price / state.cryptocurrencies[1].price));
        // currencies.dash.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[4].price / state.cryptocurrencies[1].price));
        //
        // currencies.btc.collected = Math.round(state.collected / state.cryptocurrencies[1].price / (state.cryptocurrencies[0].price / state.cryptocurrencies[1].price));
        // currencies.eth.collected = Math.round(state.collected / state.cryptocurrencies[1].price);
        // currencies.bch.collected = Math.round(state.collected / state.cryptocurrencies[1].price / (state.cryptocurrencies[2].price / state.cryptocurrencies[1].price));
        // currencies.ltc.collected = Math.round(state.collected / state.cryptocurrencies[1].price / (state.cryptocurrencies[3].price / state.cryptocurrencies[1].price));
        // currencies.dash.collected = Math.round(state.collected / state.cryptocurrencies[1].price / (state.cryptocurrencies[4].price / state.cryptocurrencies[1].price));
        //
        // return currencies;
    },
    cryptoPriceStatus: state => state.cryptoPriceStatus,
    apps: state => state.apps,
    downloadAppStatus: state => state.downloadAppStatus,
    blogIndex: state => state.blogAll.slice(state.blogAll.length - 6, state.blogAll.length),
    blogLastNews: state => state.blogAll.slice(state.blogAll.length - 4, state.blogAll.length),
    blogAll: state => state.blogAll,
    filtersBlogAll: state => {
        let filters = [];

        for (let i = 0; i < state.blogAll.length; i++)
            if (state.blogAll[i].categories)
                for (let j = 0; j < state.blogAll[i].categories.length; j++)
                    if (filters.indexOf(state.blogAll[i].categories[j]) === -1)
                        filters.push(state.blogAll[i].categories[j]);

        return filters;
    },
    blogStatus: state => state.blogStatus,

};

export default {
    state,
    actions,
    mutations,
    getters
};