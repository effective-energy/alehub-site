import axios from 'axios';


const state = {
    cryptoPriceStatus: '',
    downloadAppStatus: ''
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
                commit('SUCCESS_CRYPTO_PRICE');
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
                commit('SUCCESS_DOWNLOAD_APP');
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
            let host = 'https://alehub-4550.nodechef.com/ale-news/last/6';
            axios({
                url: host,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json'
                },
                method: 'GET'
            }).then(resp => {
                console.log(resp, 'download app success');
                commit('SUCCESS_BLOG');
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
    SUCCESS_CRYPTO_PRICE: (state) => {
        state.cryptoPriceStatus = 'success';
    },
    ERROR_CRYPTO_PRICE: (state) => {
        state.cryptoPriceStatus = 'error';
    },
    REQUEST_DOWNLOAD_APP: (state) => {
        state.downloadAppStatus = 'loading';
    },
    SUCCESS_DOWNLOAD_APP: (state) => {
        state.downloadAppStatus = 'success';
    },
    ERROR_DOWNLOAD_APP: (state) => {
        state.downloadAppStatus = 'error';
    },
    REQUEST_BLOG: (state) => {
        state.downloadAppStatus = 'loading';
    },
    SUCCESS_BLOG: (state) => {
        state.downloadAppStatus = 'success';
    },
    ERROR_BLOG: (state) => {
        state.downloadAppStatus = 'error';
    },
};

const getters = {
    cryptoPriceStatus: state => state.cryptoPriceStatus,
    downloadAppStatus: state => state.downloadAppStatus
};

export default {
    state,
    actions,
    mutations,
    getters
};