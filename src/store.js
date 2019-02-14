import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';

import VuexPersistence from 'vuex-persist';

import axios from 'axios'

Vue.use(Vuex, axios);

const bitcoinApi = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const bitcoinClient = axios.create({
    baseURL: bitcoinApi
})

const githubApi = 'https://api.github.com';

const githubClient = axios.create({
    baseURL: githubApi,
    auth: {
        username: 'levidasilvalima',
        password: '9c8d5d7d35954ff1bfc4c02cdde7a78c5a6e14a2'
    }
})


const vuexLocal = new VuexPersistence();

export default new Vuex.Store({
    state: {
        isAuthenticated: false
    },
    mutations: {
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
    },
    actions: {
        userLogin({ commit }, { email, password }) {

            if(email == "admin@admin.com" && password == 123456){
                commit('setIsAuthenticated', true);
                router.push('/');
            }
        },
        userSignOut({ commit }) {
            commit('setIsAuthenticated', false);
            router.push('/');
        },
    },
    plugins: [vuexLocal.plugin],
    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        },
        getBitcoin() {
            return bitcoinClient.get();
        },
        getRepos() {
            return githubClient.get('/user/repos');
        }
    }
});