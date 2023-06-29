import router from '@/router/routes.js'

const userStore = {
    state: {
        userId:'',
        userName:'',
        email:'',
        token: '',
        activated: '',
        authorities: '',
        aboutMe: '',


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
            state.activated = payload.activated;
            state.aboutMe = payload.aboutMe;
            state.authorities = payload.authorityDtoSet;


            const data = {
                userId : payload.id,
                userName : payload.username,
                email : payload.email,
                aboutMe : payload.aboutMe,
                activated: payload.activated,
                authorities : payload.authorityDtoSet,
            
            }
            sessionStorage.setItem("user",JSON.stringify(data));
        }

    }
}

export default userStore