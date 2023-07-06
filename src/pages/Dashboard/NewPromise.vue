<!-- eslint-disable vue/no-mutating-props -->
<template>
    <card>
      <div class="row">
        <div class="col-md-10">
          <base-input>
            <label>새 약속</label>
            <textarea
              rows="10"
              cols="150"
              class="form-control"
              placeholder="Here can be your description"
              v-model="form_model.body"
            >
            </textarea>
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <base-input>
            <label>시간</label>
            <textarea
              rows="10"
              cols="30"
              class="form-control"
              placeholder="시간을 입력해주세요. (yyyy/mm/dd HH/MM/SS)"
              v-model="form_model.target_time"
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
    form_model: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  
    methods: {
      update() {
        console.log(this.form_model);
        try {
          this.$axios
            .post(`http://localhost:8080/api/promise`, JSON.stringify(this.form_model), {
              headers: {
                "Content-Type": `application/json`,
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
              },
            })
            .then((res) => {
              if (res.status === 200) {
                  console.log(res.data);
                
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
  