import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './module/userstore';
import promiseStore from './module/promisestore';

Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
        userstore: userStore,
        promisestore: promiseStore,
    }
})

export default store;