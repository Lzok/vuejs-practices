<template>
  <div>
    <h3>In the future, here we could create new quotes</h3>

    <!-- This button is to increase a counter to show if the component is keeping alive or not -->
    <button @click="counter++">Counter++</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    /*
      The following lifecycle methods are to control when we are on the dynamic component
      and another one is loaded. Using this we can control the render of the component
      or do whatever we want in those cases.
      This will work in components inside the <keep-alive> directive
    */
    deactivated() {
      console.log('Deactivated!');
    },
    activated() {
      console.log('Activated!');
    }
  }
</script>

<style scoped>
</style>
