<template>
  <base-table :data="table1.data"
              :columns="table1.columns"
              thead-classes="text-primary">
  </base-table>
</template>
<script>
  import { BaseTable } from "@/components"
  
  export default {
    
    components: {
      BaseTable
    },
    computed: {
      table(){
        return this.$t('dashboard.usersTable');
      }
    },
    data() {
      const tableColumns = ["host","promise",'time']
      const table = [];
      try {
              this.$axios
              .get(`http://localhost:8080/api/promisejoin/promise-by-user/${JSON.parse(sessionStorage.getItem("user")).userId}`,  {
                  headers: {
                  "Content-Type": `application/json`,
                  Authorization: `Bearer ${sessionStorage.getItem("token")}`
                  },
              })
              .then((res) => {
                  if (res.status === 200) {
                    for(let i = 0; i < res.data.length; i++) {
                      table.push({
                        id: i+1,
                        host: (res.data[i].host_id).toString(),
                        promise: res.data[i].body,
                        time: Array.toString(res.data[i].create_at)
                      })
                    }
                    };
                  }
              );

             } catch (error) {
              console.error(error);
          };
    return {
      table1: {
        title: "PROMISES",
        columns: tableColumns,
        data: table
      }
    }
  },
      }
  
  
</script>
<style>
</style>
