<template>
    <div>
    </div>
  </template>
  
  <script>
  
  export default {
    mounted(){
    try {
            this.$axios
            .get("http://localhost:8080/api/user/user",  {
                headers: {
                "Content-Type": `application/json`,
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    this.$store.commit("loadInfo", res.data);
                    this.$router.push("/dashboard");
                }
            });

        } catch (error) {
            console.error(error);
        }

        }
    };


  </script>