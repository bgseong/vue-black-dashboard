<!-- eslint-disable vue/no-mutating-props -->
<template>
    <card>
      <div class="row">
        <div class="col-md-10">
          <base-input>
            <label>About Me</label>
            <textarea
              rows="10"
              cols="150"
              class="form-control"
              placeholder="Here can be your description"
              v-model="model.aboutMe"
            >
            </textarea>
          </base-input>
        </div>
      </div>
      <base-button v-on:click="update" slot="footer" type="primary" fill>Save</base-button>
    </card>
  </template>
  <script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
  
    methods: {
      update() {
        try {
          this.$axios
            .put(`http://localhost:8080/api/user/${JSON.parse(sessionStorage.getItem("user")).userId}`, JSON.stringify(this.model), {
              headers: {
                "Content-Type": `application/json`,
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
              },
            })
            .then((res) => {
              if (res.status === 200) {
                  console.log(res.data);
                  this.$store.commit("loadInfo", res.data);
                
              }
            });
  
        } catch (error) {
          console.error(error);
        }
      },
    }
  };
  </script>
  <style></style>
  