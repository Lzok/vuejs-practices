<template>
  <div>
    <!-- <p>I am the best quote you will see</p> -->
    <!-- The slot keyword is reserved by vue. It will take whatever receives from outside and render it here -->
    <slot></slot>
  </div>
</template>

<script>
</script>

<style scoped>
  div {
    border: 1px solid black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
</style>
