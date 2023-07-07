<template>
    <div>
        <div class="row">
            <div class="col-md-2">
                <h2>댓글</h2>
            </div>
        </div>
        <div v-if="this.$store.state.promisestore.lastPromise !== null">
            <div v-for="item in this.$store.state.commentstore.comments">
                <div class="row">
                    <div class="col-md-10">
                        <h3>{{ item.userid }}</h3>
                    </div>
                    <div class="col-md-2">
                        <h5>{{item.createat}}</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10">
                        <h4>{{ item.body }}</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <base-input>
                    <label>댓글달기</label>
                    <textarea
                        rows="4"
                        cols="100"
                        class="form-control"
                        placeholder="내용을 입력하세요."
                        v-model="model.body"
                    >
                    </textarea>
                    </base-input>
                </div>
                </div>
                <base-button v-on:click="update" slot="footer" type="primary" fill>Save</base-button>
        </div>
    </div>

  </template>
  
  <script>
  
  export default {
    data(){
        return{
            model:{
            pmid:Number(sessionStorage.getItem("lastPromise")),
            body:null,
            userid: JSON.parse(sessionStorage.getItem("user")).userId
            }  
        }
    },
    methods:{
    update() {
        console.log(JSON.stringify(this.model));
        try {
          this.$axios
            .post(`http://localhost:8080/api/comment`, JSON.stringify(this.model), {
              headers: {
                "Content-Type": `application/json`,
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
              },
            })
            .then((res) => {
              if (res.status === 200) {
                  this.$store.commit("loadComments",this.$store.state.promisestore.lastPromise)
                
              }
            });
  
        } catch (error) {
          console.error(error);
        }
      },
    }
  }



  </script>