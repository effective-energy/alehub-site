import axios from 'axios';


const state = {
    cryptoPriceStatus: '',
    downloadAppStatus: '',
    blogStatus: '',
    eth: 700,
    hardCap: 33000000,
    softCap: 7500000,
    collected: 1250000,

    cryptocurrencies: '',
    currencies: {
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
        }
    },

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
                commit('SUCCESS_CRYPTO_PRICE', resp.data);
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
        state.capsValueStatus = 'loading';
    },
    SUCCESS_CRYPTO_PRICE: (state, data) => {
        state.cryptocurrencies = data.round.ico;
        state.collected = data.totals.ETH_sum * state.eth + data.totals.USD_sum;

        state.currencies.btc.count = state.cryptocurrencies['BTC'].value;
        state.currencies.eth.count = state.cryptocurrencies['ETH'].value.toFixed(2);
        state.currencies.bch.count = state.cryptocurrencies['BCH'].value;
        state.currencies.ltc.count = state.cryptocurrencies['LTC'].value;
        state.currencies.dash.count = state.cryptocurrencies['DASH'].value;
        state.currencies.usd.count = state.cryptocurrencies['USD'].value;

        state.cryptoPriceStatus = 'success';
    },
    ERROR_CRYPTO_PRICE: (state) => {
        state.cryptoPriceStatus = 'error';
        state.capsValueStatus = 'error';
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


        return state.currencies;
    },
    softCap: state => state.softCap,
    hardCap: state => state.hardCap,
    collected: state => Math.round(state.collected),
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