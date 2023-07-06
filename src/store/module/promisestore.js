import axios from "axios";

const promiseStore = {
    state: {
        lastPromise : null,
        host:"",
        body:"",
        target_time:"",
        create_at:""

    },
    mutations: {
        lastPromise: function (state, payload) {
            if(sessionStorage.getItem('lastPromise') === null) {
                state.lastPromise = payload;
                sessionStorage.setItem('lastPromise', state.lastPromise);
            }
        },
        changeNumber: function(state, payload) {
            state.lastPromise = payload;
            sessionStorage.setItem('lastPromise', state.lastPromise);
        },
        loadPromise: function(state, payload) {
            try {
                axios
                .get(`http://localhost:8080/api/promise/${payload}`,  {
                    headers: {
                    "Content-Type": `application/json`,
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        state.host = res.data.host_id;
                        state.body = res.data.body;
                        state.target_time = res.data.target_time;
                        state.create_at = res.data.create_at;
                      }
                    }
                );
               } catch (error) {
                console.error(error);
            };
        }

    }
}

export default promiseStore