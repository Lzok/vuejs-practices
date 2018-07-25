<template>
  <h4>Counter: {{ counter }}</h4>
</template>

<script>
  export default {
    computed: {
      counter() {
        return this.$store.state.counter;
      }
    }
  }
</script>
