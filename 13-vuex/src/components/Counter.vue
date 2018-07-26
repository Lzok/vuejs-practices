<template>
  <div>
    <!-- How to pass more than one parameter to the vuex actions -->
    <button class="btn btn-primary" @click="asyncIncrement({ by: 50, duration: 1000 })">
      Increment
    </button>
    <button class="btn btn-primary" @click="asyncDecrement({ by: 50, duration: 1000 })">
      Decrement
    </button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import * as types from '../store/types';

  export default {
    methods: {
      // Mutations always have to run synchronously
      ...mapActions({
        'asyncIncrement': types.COUNTER_INCREMENT_ASYNC,
        'asyncDecrement': types.COUNTER_DECREMENT_ASYNC
      })
    }
  }
</script>
