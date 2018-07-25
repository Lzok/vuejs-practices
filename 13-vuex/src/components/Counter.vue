<template>
  <div>
    <button class="btn btn-primary" @click="increment">
      Increment
    </button>
    <button class="btn btn-primary" @click="decrement">
      Decrement
    </button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    methods: {
      // Mutations always have to run synchronously
      ...mapMutations([
        'increment',
        'decrement'
      ])
    }
  }
</script>
