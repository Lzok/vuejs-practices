<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <counter></counter>
        <second-counter></second-counter>
        <hr>
        <result></result>
        <second-result></second-result>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import Result from './components/Result.vue';
  import SecondResult from './components/SecondResult.vue';
  import SecondCounter from './components/SecondCounter.vue';

  export default {
    components: {
      Counter,
      Result,
      SecondResult,
      SecondCounter
    }
  }
</script>
