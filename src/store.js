import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';

import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

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
        }
    }
});