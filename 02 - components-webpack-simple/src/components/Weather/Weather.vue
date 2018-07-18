<template>
  <div class="row">
    <h4>Weather for today will be: {{ weather }} </h4>
    <button @click="modifyWeather">Modify prediction</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        weather: 'Clear'
      }
    },
    methods: {
      modifyWeather() {
        this.weather = 'Rainy';
      }
    }
  }
</script>

<style>
</style>
