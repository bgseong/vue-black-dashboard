import axios from "axios";
const commentStore = {
    state: {
        comments : []

    },
    mutations: {
        loadComments: function(state, payload) {
            try {
                axios
                .get(`http://localhost:8080/api/comment/get-by-pm/${payload}`,  {
                    headers: {
                    "Content-Type": `application/json`,
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        state.comments = [];
                        for(let i = 0; i < res.data.length; i++) {
                            state.comments.push({
                                body: res.data[i].body,
                                userId: res.data[i].userId,
                                createdAt: res.data[i].createdAt
                            })
                        }
                      }
                    }
                );
               } catch (error) {
                console.error(error);
            };
        }
    }
}
export default commentStore