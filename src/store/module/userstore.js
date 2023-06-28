import router from '@/router/routes.js'

const userStore = {
    state: {
        userId:'',
        userName:'',
        email:'',
        token: ''
    },
    mutations: {
        login: function (state, payload) {
            state.token = payload.token;
            sessionStorage.setItem("token", payload.token);
            console.log(state.token);
        },
        loadInfo: function (state,payload) {
            state.userId = payload.id;
            state.userName = payload.username;
            state.email = payload.email;
            sessionStorage.setItem("id", payload.id);
            sessionStorage.setItem("username", payload.username);
            sessionStorage.setItem("email", payload.email);
        }

    }
}

export default userStore