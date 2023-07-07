import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './module/userstore';
import promiseStore from './module/promisestore';
import commentStore from './module/commentstore';

Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
        userstore: userStore,
        promisestore: promiseStore,
        commentstore: commentStore,
    }
})

export default store;