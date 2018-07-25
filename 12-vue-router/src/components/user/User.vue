<template>
  <div>
    <h1>User Page</h1>
    <hr>
    <p>URL Param id: {{ id }} </p>
    <button @click="navigateToHome">Go Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      navigateToHome() {
        this.$router.push({ name: 'home' });
      }
    }
  }
</script>
