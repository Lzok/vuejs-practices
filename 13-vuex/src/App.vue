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
        <hr>
        <input type="text" v-model="value">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Counter from './components/Counter.vue';
  import Result from './components/Result.vue';
  import SecondResult from './components/SecondResult.vue';
  import SecondCounter from './components/SecondCounter.vue';
  import * as types from './store/types';

  export default {
    computed: {
      value: {
        get() {
          return this.$store.getters.value;
        },
        set(value) {
          this.$store.dispatch(types.UPDATE_VALUE, value)
        }
      }
    },
    components: {
      Counter,
      Result,
      SecondResult,
      SecondCounter
    }
  }
</script>
