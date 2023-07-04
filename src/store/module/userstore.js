import router from '@/router/routes.js'

const userStore = {
    state: {
        userId:'',
        userName:'',
        email:'',
        token: '',
        aboutMe: '',


    },
    mutations: {
        login: function (state, payload) {
            state.token = payload.token;
            sessionStorage.setItem("token", payload.token);
        },
        loadInfo: function (state,payload) {
            state.userId = payload.id;
            state.userName = payload.username;
            state.email = payload.email;
            state.aboutMe = payload.aboutMe;


            const data = {
                userId : payload.id,
                userName : payload.username,
                email : payload.email,
                aboutMe : payload.aboutMe,
            
            }
            sessionStorage.setItem("user",JSON.stringify(data));
        },
        logout: function() {
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("token");
        }

    }
}

export default userStore