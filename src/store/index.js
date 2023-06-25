import Vue from 'vue'
import Vuex from 'vuex'

import userStore from '@/store/module/userstore.js'

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        userStore: userStore,
    }
})

export default store;