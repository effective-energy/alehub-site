import axios from 'axios';


const state = {
    cryptoPriceStatus: ''
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
                console.log(resp, 'change password');
                commit('SUCCESS_CRYPTO_PRICE');
                resolve(resp);
            }).catch(err => {
                commit('ERROR_CRYPTO_PRICE', err);
                reject(err);
            });
        });
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
    }
};

const getters = {
    cryptoPriceStatus: state => state.cryptoPriceStatus,
};

export default {
    state,
    actions,
    mutations,
    getters
};