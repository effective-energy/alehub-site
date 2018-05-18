import axios from 'axios';


const state = {
    cryptoPriceStatus: '',
    downloadAppStatus: '',
    blogStatus: '',
    hardCap: 33000000,
    softCap: 2000000,
    collected: 2000000,
    cryptocurrencies: '',
    apps: '',
    blogIndex: '',
    blogAll: '',
    blog: ''
};

const actions = {
    cryptoPriceRequest: ({commit}) => {
        return new Promise((resolve, reject) => {
            commit('REQUEST_CRYPTO_PRICE');
            let host = 'https://alehub-4550.nodechef.com/ale-system/crypto-price';
            axios({
                url: host,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                },
                method: 'GET'
            }).then(resp => {
                console.log(resp, 'crypto price success');
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
                console.log(resp, 'download app success');
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
                console.log(resp.data, 'resp.data');
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
        state.cryptoPriceStatus = 'success';
        state.cryptocurrencies = cryptocurrencies;
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
        state.blogIndex = blog.slice(blog.length - 6, blog.length).reverse();
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
                hardCap: null,
                softCap: null,
                collected: null
            },
            eth: {
                hardCap: null,
                softCap: null,
                collected: null
            },
            bch: {
                hardCap: null,
                softCap: null,
                collected: null
            },
            ltc: {
                hardCap: null,
                softCap: null,
                collected: null
            },
            dash: {
                hardCap: null,
                softCap: null,
                collected: null
            }
        };

        currencies.btc.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[0].price / state.cryptocurrencies[1].price));
        currencies.eth.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price);
        currencies.bch.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[2].price / state.cryptocurrencies[1].price));
        currencies.ltc.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[3].price / state.cryptocurrencies[1].price));
        currencies.dash.hardCap = Math.round(state.hardCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[4].price / state.cryptocurrencies[1].price));

        currencies.btc.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[0].price / state.cryptocurrencies[1].price));
        currencies.eth.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price);
        currencies.bch.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[2].price / state.cryptocurrencies[1].price));
        currencies.ltc.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[3].price / state.cryptocurrencies[1].price));
        currencies.dash.softCap = Math.round(state.softCap / state.cryptocurrencies[1].price / (state.cryptocurrencies[4].price / state.cryptocurrencies[1].price));

        currencies.btc.collected = Math.round(state.collected / state.cryptocurrencies[1].price / (state.cryptocurrencies[0].price / state.cryptocurrencies[1].price));
        currencies.eth.collected = Math.round(state.collected / state.cryptocurrencies[1].price);
        currencies.bch.collected = Math.round(state.collected / state.cryptocurrencies[1].price / (state.cryptocurrencies[2].price / state.cryptocurrencies[1].price));
        currencies.ltc.collected = Math.round(state.collected / state.cryptocurrencies[1].price / (state.cryptocurrencies[3].price / state.cryptocurrencies[1].price));
        currencies.dash.collected = Math.round(state.collected / state.cryptocurrencies[1].price / (state.cryptocurrencies[4].price / state.cryptocurrencies[1].price));

        return currencies;
    },
    cryptoPriceStatus: state => state.cryptoPriceStatus,
    apps: state => state.apps,
    downloadAppStatus: state => state.downloadAppStatus,
    blogIndex: state => state.blogIndex,
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