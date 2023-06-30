<template>
    <div>
      <div>
        <h2>Please Log In</h2>
        <div id="loginForm">
          <form @submit.prevent="fnLogin">
            <p>
              <input class="w3-input" name="uid" placeholder="Enter your ID" v-model="userName"><br>
            </p>
            <p>
              <input name="password" class="w3-input" placeholder="Enter your password" v-model="userPassword" type="password">
            </p>
            <p>
              <button type="submit" class="w3-button w3-green w3-round">Login</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
    return {
      userName: "",
      userPassword: "",
    };
  },
  methods: {
    fnLogin() {
      let saveData = {};
      saveData.username = this.userName;
      saveData.password = this.userPassword;
      try {
        this.$axios
          .post("http://localhost:8080/auth/authenticate", JSON.stringify(saveData), {
            headers: {
              "Content-Type": `application/json`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
                this.$store.commit("login", res.data);
              
                this.$router.push("/loadInfo");
            }
          });

      } catch (error) {
        console.error(error);
      }
    },
  }
}
  </script>
  
  <style>
  #loginForm {
    width: 500px;
    margin: auto;
  }
  </style>