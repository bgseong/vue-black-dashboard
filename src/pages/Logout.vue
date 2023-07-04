<template>
    <div>
    </div>
  </template>
  
  <script>
  
  export default {
    mounted(){
        this.$store.commit("logout");
        this.$router.push("/login");
    }
}


  </script>