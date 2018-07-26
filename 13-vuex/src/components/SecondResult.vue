<template>
  <div>
    <h4>Counter: {{ counter }}</h4>
    <h4>Number of clicks: {{ numberClicks }}</h4>
    <h4>Number of clicks: {{ someComputedProp }}</h4>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as types from '../store/types';

  export default {
    computed: {
      someComputedProp(){ return 'Test mixing my own computed props with mapGetters' },
      ...mapGetters({
        counter: types.DOUBLE_COUNTER,
        numberClicks: types.STRING_COUNTER
      }),
      ownProp() { return 150; }
    }
    /*
      You can also do it like the following
      computed: mapGetters([
        'doubleCounter',
        'stringCounter'
      ])
    */
  }
</script>
