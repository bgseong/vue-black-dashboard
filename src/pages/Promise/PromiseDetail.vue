<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2>{{ this.$store.state.promisestore.host }}님이 만든 약속</h2>
            </div>
            <div class="col-md-4">
                <h5>생성일 : {{ this.$store.state.promisestore.create_at  }}</h5>
            </div>
        </div>
        <div class = "row">
            <div class="col-md-12">
                <h3>{{ this.$store.state.promisestore.body }}</h3>
            </div>
        </div>
        <div class = "row">
            <div class="col-md-12">
                <h5>목표일 : {{ this.$store.state.promisestore.target_time }}</h5>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
  }



  </script>