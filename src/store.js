import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '@/router';

import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isAuthenticated: false,
        repositories: []
    },
    plugins: [new VuexPersistence().plugin],
    mutations: {
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        },
        setRepositories(state, payload){
            state.repositories = payload;
        }
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
        getRespositories({ commit }){
            const baseURI = 'https://api.github.com/search/repositories?q=javascript+language:javascript&sort=stars&order=desc'
            axios.get(baseURI)
                .then(response => {
                    commit('setRepositories', response.data)
                })
                .catch(() => {
                    commit('setRepositories', []);
                })
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isAuthenticated;
        }
    }
});