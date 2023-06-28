import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './module/userstore';

Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
        userstore: userStore,
    }
})

export default store;