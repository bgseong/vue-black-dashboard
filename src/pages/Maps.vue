<template>
  <div>
    <div class="row">
      <div class="col-lg-8 col-md-12">
        <card class="card" >
          <h2 slot="header" class="card-title">{{$t('New Promise')}}</h2>
          <div class="table-responsive">
            <promise-detail></promise-detail>
          </div>
        </card>
      </div>
      <div class="col-lg-4 col-md-12">
        <card class="card">
          <h4 slot="header" class="card-title">{{$t('dashboard.simpleTable')}}</h4>
          <div class="table-responsive">
            <promise-list></promise-list>
          </div>
        </card>
      </div>
    </div>
    </div>
</template>
<script>
import PromiseList from './Promise/PromiseList.vue'
import PromiseDetail from './Promise/PromiseDetail.vue';
export default {
  components: {
    PromiseDetail,
    PromiseList,
  },
}
</script>
<style>
</style>
